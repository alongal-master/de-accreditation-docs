#!/usr/bin/env python3
"""
Test script for the syllabus generator.
This demonstrates how to use the script without requiring an actual OpenAI API key.
"""

import os
import sys
from syllabus_generator import SyllabusGenerator

def test_without_api():
    """Test the script components that don't require OpenAI API."""
    print("Testing syllabus generator components...")
    
    # Test lesson reading
    print("1. Testing lesson file reading...")
    try:
        with open('sample_lessons.txt', 'r') as f:
            lessons = [line.strip() for line in f if line.strip()]
        print(f"   [OK] Successfully read {len(lessons)} lessons")
    except Exception as e:
        print(f"   [ERROR] Error reading lessons: {e}")
        return False
    
    # Test lesson distribution
    print("2. Testing lesson distribution...")
    try:
        # Create a mock generator (without API key)
        class MockGenerator:
            def distribute_lessons(self, lessons):
                generator = SyllabusGenerator.__new__(SyllabusGenerator)
                return generator.distribute_lessons(lessons)
        
        mock_gen = MockGenerator()
        distribution = mock_gen.distribute_lessons(lessons)
        
        print(f"   [OK] Distributed lessons across {len(distribution)} weeks")
        for week, chapters in distribution.items():
            print(f"     Week {week}: {len(chapters)} chapters, {sum(len(ch) for ch in chapters)} lessons")
    except Exception as e:
        print(f"   [ERROR] Error in distribution: {e}")
        return False
    
    # Test time estimation
    print("3. Testing time estimation...")
    try:
        mock_gen = SyllabusGenerator.__new__(SyllabusGenerator)
        sample_lessons = [["Introduction to Python", "Variables and Data Types"]]
        estimated_time = mock_gen.estimate_lesson_time("Introduction to Python", sample_lessons)
        print(f"   [OK] Estimated time for sample lesson: {estimated_time} minutes")
    except Exception as e:
        print(f"   [ERROR] Error in time estimation: {e}")
        return False
    
    print("\n[SUCCESS] All basic tests passed!")
    print("\nTo test with OpenAI API:")
    print("1. Set your OPENAI_API_KEY environment variable")
    print("2. Run: python syllabus_generator.py sample_lessons.txt")
    
    return True

if __name__ == "__main__":
    test_without_api()
