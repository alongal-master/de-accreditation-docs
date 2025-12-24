"""
AI Prompts for Syllabus Generator

This file contains all the prompts used by the OpenAI API to generate
learning goals, chapter information, and parse course content.
"""

def get_lesson_parsing_prompt(content: str) -> str:
    """Prompt for parsing free text course content into structured lesson data."""
    return f"""
Parse the following course content and extract lesson titles and learning outcomes.
Lesson names are followed by learning outcome for each lesson. All learning outcomes lines start with "--- ".

Return the result in this exact format:

TITLE: [Lesson Title]
OUTCOMES: [Learning outcomes description]

TITLE: [Next Lesson Title]
OUTCOMES: [Next learning outcomes description]

TITLE: [Practice Session Title]
OUTCOMES: [learning outcomes description]

Continue for all lessons. Use the exact titles as written in the content. 
If a lesson has multiple learning outcomes (separated by newlines), combine ALL of them into a SINGLE line separated by semicolons (;).
Keep all outcomes on one line after "OUTCOMES:".
If you see learning outcomes that are teacher-directed (like "follow the lesson plan" or "Introduce the topic at a high level"), remove them.



Content:
{content}
"""

def get_week_learning_goals_prompt(lessons_text: str, week_num: int) -> str:
    """Prompt for generating weekly learning goals."""
    return f"""
Create a learning goal for week {week_num} of a programming course.
The week includes these lessons, with the following learning outcomes per each:

{lessons_text}

Format: "Title: Description of what students will achieve and learn."
The title should be 2-4 words, followed by a colon, then "In this unit, " and then a one sentence description of learning outcomes.
Make it clear and specific to the lessons covered. Don't add asterisk (*) to the unit name or goal.
"""

def get_chapter_info_prompt(lessons_text: str) -> str:
    """Prompt for generating chapter titles and learning goals."""
    return f"""
The course chapter containing these lessons, with the following learning outcomes per each: {lessons_text}

Generate:
1. A chapter title (1-5 words)
2. Chapter learning goals (1-2 sentences describing what students will learn)

Format your response as:
TITLE: [chapter title]
GOALS: [learning goals]
"""


def get_practice_sessions_for_week_prompt(chapters_text: str, week_num: int, num_chapters: int, num_sessions_per_chapter: int, total_sessions: int) -> str:
    """Prompt for generating practice sessions for all chapters in a week."""
    return f"""
Create {num_sessions_per_chapter} practice session(s) for EACH of the {num_chapters} chapters below (total {total_sessions} practice sessions).

Each practice session should:
1. Have a title that starts with "Practice Session: "
2. Focus on applying and reinforcing the concepts from that specific chapter's lessons
3. Include hands-on exercises, projects, or practical applications
4. Have clear learning outcomes, one sentence.
5. Each session should be a hands-on exercise or practical application of the concepts learned previously.
6. It could be a practical exercise with a short story (theme) that adds context and real feeling to the exercise, for example  - a cafe cashier; a music app; a to-do list; a calculator; a generator of some kind.
7. Have clear learning outcomes, one sentence
8. Title should be short, without actions. For example, "Practice Session: Recipe app" and not "Practice Session: Building a Recipe App"

Week {week_num} Chapters:
{chapters_text}

Return in this exact format:

CHAPTER: 1
TITLE: Practice Session: [Session Title for Chapter 1]
OUTCOMES: [Learning outcomes for this practice session]

TITLE: Practice Session: [Another Session Title for Chapter 1]
OUTCOMES: [Learning outcomes for this practice session]

CHAPTER: 2
TITLE: Practice Session: [Session Title for Chapter 2]
OUTCOMES: [Learning outcomes for this practice session]

TITLE: Practice Session: [Another Session Title for Chapter 2]
OUTCOMES: [Learning outcomes for this practice session]

Continue for all {num_chapters} chapters with {num_sessions_per_chapter} practice session(s) each.
"""

def get_maestro_json_prompt(units_template: str, num_weeks: int, weeks_lessons_text: str) -> str:
    """Prompt for generating Maestro JSON export."""
    return f"""# **Task**

You are given a course input with details such as course title, course description, units (weeks), lessons, and learning outcomes per lesson.

Your task is to return the course content **exactly** in the following JSON structure, without adding extra fields or comments:

```json
{{
  "title": "", 
  "description": "",
  "modifiedAt": "", 
  "createdAt": "", 
  "isPublished": , 
  "trackType": "", 
  "version": , 
  "terms": [
    {{
      "courses": [
        {{
          "title": "", 
          "description": "", 
          "displayId": "", 
          "credits": , 
          "units": [
            {{
              "title": "", 
              "lessons": [
                {{
                  "title": "", 
                  "masteryOutcomes": [],
                  "teachingInstructions": "",
                  "requiredPlugins": [
                    "code-editor"
                  ]
                }}
              ]
            }}
          ],
          "label": "",
          "teachingInstructions": "",
          "durationInWeeks": ,
          "isPublished": false
        }}
      ]
    }}
  ]
}}
```

# Rules:
### Do not modify or rephrase any content. Keep every course name, unit name, lesson name, and mastery outcome exactly as provided.

1. **Fill in all fields** based on the input course description. If you don't know a field, leave the placeholder text.
2. **CRITICAL**: The JSON structure is:
   ```
   terms[0].courses[0].units[0] = Week 1
   terms[0].courses[0].units[1] = Week 2
   terms[0].courses[0].units[2] = Week 3
   etc.
   ```
   Create exactly ONE course with MULTIPLE units inside. Do NOT create multiple courses.
3. `modifiedAt` should be left empty because it will be updated while saving.
4. `createdAt` should be filled with today's date in ISO format (`YYYY-MM-DD`).
5. `version` always starts at `1`.
6. `trackType` should remain unchanged from the provided value.
7. If `isPublished` is required (when inserting into an existing empty track), include it with a boolean value, otherwise leave it out.
8. `displayId`, `credits`, `label`, and `durationInWeeks` should be inferred or left as placeholders if not explicitly stated.
9. Each WEEK from the course input becomes ONE unit in the units array.
10. Unit name should be exactly like in the input, no need to add "WEEK" to it or any other prefix. 
11. Skip lessons with titles that include "Sync Session" or "Weekly Review"; don't include them in the JSON.
12. For lessons, insert their title in `title`, their outcomes or objectives in `masteryOutcomes`, and keep `teachingInstructions` as an empty string by default.
13. For requiredPlugins field in each lesson: Unless stated otherwise, always return an array containing a single code-editor object (["code-editor"])
14. For each practice session (marked with 'practice session:' in the title), add teachingInstructions = "practice oriented session, with a step by step exercise and no new learning topics"
15. For all other lessons, leave teachingInstructions as an empty string.
16. **CRITICAL**: If a lesson has multiple mastery outcomes separated by semicolons (;), split them into separate strings in the masteryOutcomes array. For example: "outcome A; outcome B" becomes ["outcome A", "outcome B"].

# Course input
{weeks_lessons_text}"""