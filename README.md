# Course Syllabus Generator

A Python script that generates professional Excel syllabi for courses with AI-powered content generation, practice sessions, and flexible lesson distribution.

## Features

- **AI-powered parsing**: Automatically parses free-text course content with learning outcomes
- **Flexible distribution**: Distributes lessons evenly across weeks and days
- **Dynamic practice sessions**: Automatically generates practice sessions to fill lesson targets
- **Custom review days**: Configure custom weekly review days with specific content
- **Learning media types**: Automatically categorizes lessons (Lesson, Exercise, Assessment, Group Class)
- **JSON export/import**: Export to JSON and regenerate XLSX without API calls
- **Streaming responses**: Real-time progress feedback during AI generation

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Set up your OpenAI API key:
   - Create a `.env` file with: `OPENAI_API_KEY=your_api_key_here`
   - Or pass it as a command line argument: `--api-key your_api_key_here`

## Usage

### Generate from Lessons File

```bash
python syllabus_generator.py --lessons_file lessons.txt -o my_syllabus.xlsx
```

This will:
- Parse lessons from the text file using AI
- Distribute them across weeks
- Generate practice sessions, learning goals, and chapter titles
- Create both an Excel file (`output/my_syllabus.xlsx`) and a JSON file (`output/my_syllabus.json`)

### Generate from JSON File

```bash
python syllabus_generator.py --json_input output/my_syllabus.json -o updated_syllabus.xlsx
```

This regenerates the Excel file from JSON **without requiring an API key**. Useful for:
- Editing the syllabus content in JSON
- Regenerating after making changes
- Sharing with others who don't have API access

## Input Formats

### 1. Free-Text Course Content (Recommended)

Create a text file with lesson titles and descriptions. The AI will parse it automatically:

```
Introduction to Python
Learn the basics of Python syntax and write your first program.

Variables and Data Types
Master variable declaration and understand Python's dynamic typing system.

Control Structures
Learn conditional logic and loops for program flow control.
```

### 2. JSON Format (Alternative)

You can also provide lessons in JSON format similar to Maestro format:

```json
{
  "lessons": [
    {
      "lessonTitle": "Welcome to OOP!",
      "masteryOutcomes": []
    },
    {
      "lessonTitle": "What Is Object-Oriented Programming?",
      "masteryOutcomes": [
        "Identify object-oriented programming as a programming paradigm.",
        "Recognize that object-oriented programming organizes programs around objects."
      ]
    }
  ]
}
```

**Note**: The script will parse this format and extract lesson titles and learning outcomes automatically.

## Output

The script generates two files:

1. **Excel file** (`output/filename.xlsx`): The complete syllabus with:
   - Week numbers and learning goals
   - Chapter numbers, titles, and learning goals
   - Learning Media type (Lesson, Exercise, Assessment, Group Class)
   - Lesson titles and learning outcomes
   - Time estimates

2. **JSON file** (`output/filename.json`): Complete syllabus data that can be edited and used to regenerate the Excel:
```json
{
  "num_weeks": 2,
  "num_chapters_per_week": 5,
  "weeks": {
    "1": {
      "week_num": 1,
      "learning_goal": "Master basic Python concepts...",
      "chapters": [
        {
          "chapter_num": 1,
          "title": "Python Fundamentals",
          "learning_goals": "Understand core concepts...",
          "lessons": [
            {
              "title": "Introduction to Python",
              "learning_outcomes": "Learn the basics...",
              "time_minutes": 60,
              "type": "Lesson"
            }
          ]
        }
      ]
    }
  }
}
```

## Command Line Arguments

- `--lessons_file`: Text file containing lesson content
- `--json_input`: JSON file containing syllabus data (alternative to --lessons_file)
- `-o, --output`: Output Excel file name (default: `course_syllabus.xlsx`)
- `--api-key`: OpenAI API key (optional if set in `.env` file)
- `--log-file`: Log file for API calls (default: `openai_log.txt`)
- `--model`: OpenAI model to use (default: `gpt-5.1`, options: `gpt-5.1`, `gpt-4o`, `gpt-4`, `gpt-4-turbo`, `gpt-3.5-turbo`)

## Configuration Constants

Edit these constants in `syllabus_generator.py` to customize your course structure:

### Course Structure
- `NUM_OF_WEEKS`: Number of weeks in the course (default: `2`)
- `NUM_OF_CHAPTERS_PER_WEEK`: Number of chapters/days per week (default: `5`)
- `NUM_LESSONS_PER_CHAPTER`: Target number of lessons per day, excluding live sessions and reviews (default: `9`)

### Weekly Review Days
- `USE_CUSTOM_WEEKLY_REVIEW_DAYS`: Set to `True` to use custom review days (default: `True`)
- `USE_SAME_REVIEW_FOR_ALL_WEEKS`: Set to `True` to use the same review day for all weeks (default: `True`)
- `DEFAULT_WEEKLY_REVIEW_DAY`: List of items for weekly review days. Each item has:
  - `title`: Lesson title
  - `learning_outcomes`: Learning outcomes description
  - `time_minutes`: Duration in minutes
  - `type`: One of `LESSON_TYPE_LESSON`, `LESSON_TYPE_EXERCISE`, `LESSON_TYPE_ASSESSMENT`
- `DEFAULT_WEEKLY_REVIEW_CHAPTER_TITLE`: Chapter title for review days (default: `"Weekly Review"`)
- `DEFAULT_WEEKLY_REVIEW_CHAPTER_GOALS`: Chapter learning goals for review days

### Daily Items
- `ITEMS_AT_START_OF_DAY`: Items added at the beginning of each day (e.g., opening sessions)
- `ITEMS_AT_END_OF_DAY`: Items added at the end of each day (e.g., closing sessions)

Each item in these lists should have: `title`, `learning_outcomes`, `time_minutes`, and `type`.

### Learning Media Types
- `LESSON_TYPE_LESSON`: Regular lesson type
- `LESSON_TYPE_EXERCISE`: For practice sessions
- `LESSON_TYPE_ASSESSMENT`: For assessments and reviews
- `LESSON_TYPE_SYNC`: For live/group class sessions

## Examples

### Basic Usage
```bash
python syllabus_generator.py --lessons_file python_course.txt -o python_syllabus.xlsx
```

### Using Different Models
```bash
# Use GPT-4 Turbo for faster processing
python syllabus_generator.py --lessons_file lessons.txt -o syllabus.xlsx --model gpt-4-turbo

# Use GPT-3.5 Turbo for cost efficiency
python syllabus_generator.py --lessons_file lessons.txt -o syllabus.xlsx --model gpt-3.5-turbo
```

### Edit and Regenerate from JSON
```bash
# 1. Generate initial syllabus
python syllabus_generator.py --lessons_file lessons.txt -o syllabus.xlsx

# 2. Edit output/syllabus.json with your changes

# 3. Regenerate Excel (no API key needed!)
python syllabus_generator.py --json_input output/syllabus.json -o updated_syllabus.xlsx
```

## How It Works

1. **Parse Lessons**: AI parses your input file and extracts lesson titles and learning outcomes
2. **Distribute**: Lessons are evenly distributed across all weeks and chapters
3. **Fill Days**: Practice sessions are automatically generated to reach `NUM_LESSONS_PER_CHAPTER` per day
4. **Add Structure**: Live sessions (from `ITEMS_AT_START_OF_DAY` and `ITEMS_AT_END_OF_DAY`) are added to each day
5. **Generate Content**: AI generates weekly learning goals and chapter titles/goals
6. **Export**: Creates both Excel and JSON files

## Notes

- The script automatically creates the `output/` directory if it doesn't exist
- All API calls are logged to the log file for debugging
- Token usage and costs are displayed during execution
- When using JSON input, no API key is required (useful for sharing and editing)
