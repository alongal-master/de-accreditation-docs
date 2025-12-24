#!/usr/bin/env python3
"""
XLSX to Maestro JSON Converter (Non-LLM Version)

This script reads an existing syllabus XLSX file and converts it to Maestro JSON format.
The XLSX file should have the format: Week, Learning Goal, Chapter number, Chapter learning goals,
Chapter title, (empty), Lesson title, Time to complete, Mastery Outcome
"""

import argparse
import os
import sys
import json
from typing import Dict
from datetime import datetime
from openpyxl import load_workbook

# Constants
DIR = "output_json//"

# Course metadata defaults
DEFAULT_COURSE_TITLE = ""
DEFAULT_COURSE_DESCRIPTION = ""
DEFAULT_TRACK_TYPE = "Programming"
DEFAULT_VERSION = 1
DEFAULT_CREDITS = 0
DEFAULT_DISPLAY_ID = ""
DEFAULT_LABEL = ""
DEFAULT_IS_PUBLISHED = False

# Lesson filtering
SKIP_LESSON_KEYWORDS = ["Sync Session", "Weekly Review"]

# Practice session configuration
PRACTICE_SESSION_KEYWORD = "practice session"
PRACTICE_TEACHING_INSTRUCTIONS = "Practice-oriented session with a real world story and theme; Create a step by step exercise; Don't teach any new topics, rely only on the lessons covered"

# Lesson defaults
DEFAULT_REQUIRED_PLUGINS = ["code-editor"]
DEFAULT_TEACHING_INSTRUCTIONS = ""

# Lesson title prefixes - maps starting characters/strings to prefix text
# Example: {"X": "Prefix text "} will add "Prefix text " to all lessons starting with "X"
LESSON_TITLE_PREFIXES = {"Practice Session" : "⚙ "}


class XLSXToMaestroConverter:
    def __init__(self):
        """Initialize the converter."""
        pass
    
    def read_xlsx(self, xlsx_file: str) -> Dict:
        """Read and parse the XLSX file into structured data."""
        try:
            print(f"Reading XLSX file: {xlsx_file}")
            workbook = load_workbook(xlsx_file)
            worksheet = workbook.active
            
            # Parse the data
            weeks_data = {}
            current_week = None
            current_chapter = None
            
            # Skip header row (row 1)
            for row in worksheet.iter_rows(min_row=2, values_only=True):
                week_num = row[0]  # Column A: Week
                week_goal = row[1]  # Column B: Learning Goal of the week
                chapter_num = row[2]  # Column C: Chapter number
                chapter_goals = row[3]  # Column D: Chapter learning goals
                chapter_title = row[4]  # Column E: Chapter title
                # row[5] is empty column
                lesson_title = row[6]  # Column G: Lesson title
                time_to_complete = row[7]  # Column H: Time to complete
                mastery_outcome = row[8] if len(row) > 8 else ""  # Column I: Mastery Outcome
                
                # Skip empty rows
                if not lesson_title:
                    continue
                
                # Initialize week if new
                if week_num and week_num != current_week:
                    # Convert to int to handle float/string from Excel
                    try:
                        current_week = int(float(week_num))
                    except (ValueError, TypeError):
                        print(f"Warning: Skipping row with invalid week number: {week_num}")
                        continue
                    
                    if current_week not in weeks_data:
                        weeks_data[current_week] = {
                            'week_num': current_week,
                            'learning_goal': week_goal or "",
                            'chapters': []
                        }
                
                # Initialize chapter if new
                if chapter_num and chapter_num != current_chapter:
                    # Convert to int to handle float/string from Excel
                    try:
                        current_chapter = int(float(chapter_num))
                    except (ValueError, TypeError):
                        print(f"Warning: Skipping row with invalid chapter number: {chapter_num}")
                        continue
                    
                    weeks_data[current_week]['chapters'].append({
                        'chapter_num': current_chapter,
                        'title': chapter_title or "",
                        'learning_goals': chapter_goals or "",
                        'lessons': []
                    })
                
                # Add lesson to current chapter
                if current_week and weeks_data[current_week]['chapters']:
                    lesson = {
                        'title': lesson_title,
                        'learning_outcomes': mastery_outcome or "",
                        'time_minutes': time_to_complete
                    }
                    weeks_data[current_week]['chapters'][-1]['lessons'].append(lesson)
            
            print(f"Successfully parsed {len(weeks_data)} weeks")
            return weeks_data
            
        except FileNotFoundError:
            print(f"Error: File '{xlsx_file}' not found.")
            sys.exit(1)
        except Exception as e:
            print(f"Error reading XLSX file: {e}")
            sys.exit(1)
    
    def _should_skip_lesson(self, lesson_title: str) -> bool:
        """Check if a lesson should be skipped based on keywords."""
        if not lesson_title:
            return True
        lesson_lower = lesson_title.lower()
        return any(keyword.lower() in lesson_lower for keyword in SKIP_LESSON_KEYWORDS)
    
    def _is_practice_session(self, lesson_title: str) -> bool:
        """Check if a lesson is a practice session."""
        if not lesson_title:
            return False
        return PRACTICE_SESSION_KEYWORD in lesson_title.lower()
    
    def _split_mastery_outcomes(self, outcomes: str) -> list:
        """Split mastery outcomes by semicolons and clean up."""
        if not outcomes:
            return []
        # Split by semicolon and strip whitespace
        split_outcomes = [outcome.strip() for outcome in outcomes.split(';')]
        # Filter out empty strings
        return [outcome for outcome in split_outcomes if outcome]
    
    def _extract_week_title(self, learning_goal: str) -> str:
        """Extract just the title part from learning goal (before colon)."""
        if not learning_goal:
            return ""
        # Split by colon and take the first part, strip whitespace
        title = learning_goal.split(':', 1)[0].strip()
        return title
    
    def _apply_lesson_prefix(self, lesson_title: str) -> str:
        """Apply prefix to lesson title if it starts with a configured prefix key."""
        if not lesson_title or not LESSON_TITLE_PREFIXES:
            return lesson_title
        
        for prefix_key, prefix_text in LESSON_TITLE_PREFIXES.items():
            if lesson_title.startswith(prefix_key):
                return f"{prefix_text}{lesson_title}"
        
        return lesson_title
    
    def generate_maestro_json(self, weeks_data: Dict, output_file: str, xlsx_filename: str = ""):
        """Generate Maestro JSON from structured weeks data."""
        print("Generating Maestro JSON export...")
        
        num_weeks = len(weeks_data)
        
        # Extract course title from XLSX filename (base name without extension)
        if xlsx_filename:
            course_title = os.path.basename(xlsx_filename)
            # Remove .xlsx or .xls extension
            course_title = course_title.replace('.xlsx', '').replace('.xls', '')
        else:
            course_title = DEFAULT_COURSE_TITLE
        
        # Build units from weeks
        units = []
        for week_num in sorted(weeks_data.keys()):
            week_info = weeks_data[week_num]
            week_learning_goal = week_info['learning_goal']
            
            # Extract just the title part (before colon) from learning goal
            week_title = self._extract_week_title(week_learning_goal)
            unit_title = week_title if week_title else f"WEEK {week_num}"
            
            # Flatten all lessons from all chapters in this week
            lessons = []
            for chapter in week_info['chapters']:
                for lesson in chapter['lessons']:
                    lesson_title = lesson['title']
                    
                    # Skip lessons that match skip keywords
                    if self._should_skip_lesson(lesson_title):
                        continue
                    
                    # Apply prefix if lesson title starts with configured prefix key
                    lesson_title = self._apply_lesson_prefix(lesson_title)
                    
                    # Split mastery outcomes by semicolons
                    mastery_outcomes = self._split_mastery_outcomes(lesson['learning_outcomes'])
                    
                    # Determine teaching instructions
                    if self._is_practice_session(lesson_title):
                        teaching_instructions = PRACTICE_TEACHING_INSTRUCTIONS
                    else:
                        teaching_instructions = DEFAULT_TEACHING_INSTRUCTIONS
                    
                    # Build lesson object
                    lesson_obj = {
                        "title": lesson_title,
                        "masteryOutcomes": mastery_outcomes,
                        "teachingInstructions": teaching_instructions,
                        "requiredPlugins": DEFAULT_REQUIRED_PLUGINS.copy()
                    }
                    
                    lessons.append(lesson_obj)
            
            # Create unit object
            unit_obj = {
                "title": unit_title,
                "lessons": lessons
            }
            
            units.append(unit_obj)
        
        # Build the complete Maestro JSON structure
        maestro_data = {
            "title": course_title,
            "description": DEFAULT_COURSE_DESCRIPTION,
            "modifiedAt": "",
            "createdAt": datetime.now().strftime("%Y-%m-%d"),
            "isPublished": DEFAULT_IS_PUBLISHED,
            "trackType": DEFAULT_TRACK_TYPE,
            "version": DEFAULT_VERSION,
            "terms": [
                {
                    "courses": [
                        {
                            "title": course_title,
                            "description": DEFAULT_COURSE_DESCRIPTION,
                            "displayId": DEFAULT_DISPLAY_ID,
                            "credits": DEFAULT_CREDITS,
                            "units": units,
                            "label": DEFAULT_LABEL,
                            "teachingInstructions": DEFAULT_TEACHING_INSTRUCTIONS,
                            "durationInWeeks": num_weeks,
                            "isPublished": DEFAULT_IS_PUBLISHED
                        }
                    ]
                }
            ]
        }
        
        # Save to file
        os.makedirs(os.path.dirname(output_file) if os.path.dirname(output_file) else '.', exist_ok=True)
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(maestro_data, f, indent=2, ensure_ascii=False)
        
        print(f"Maestro JSON saved to {output_file}")
        print("Conversion completed successfully!")


def main():
    parser = argparse.ArgumentParser(description='Convert syllabus XLSX to Maestro JSON format (Non-LLM version)')
    parser.add_argument('xlsx_file', help='Input XLSX file with syllabus data')
    parser.add_argument('-o', '--output', help='Output JSON file name (default: maestro_[input_name].json)')
    
    args = parser.parse_args()
    
    # Determine output filename
    if args.output:
        output_file = f"{DIR}{args.output}"
    else:
        # Create default output filename based on input
        base_name = os.path.basename(args.xlsx_file).replace('.xlsx', '').replace('.xls', '')
        output_file = f"{DIR}maestro_{base_name}.json"
    
    # Convert XLSX to Maestro JSON
    converter = XLSXToMaestroConverter()
    weeks_data = converter.read_xlsx(args.xlsx_file)
    converter.generate_maestro_json(weeks_data, output_file, args.xlsx_file)


if __name__ == "__main__":
    main()

