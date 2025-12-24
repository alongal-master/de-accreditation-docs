# Course Syllabus Generator

This Python script generates a professional Excel syllabus for a four-week course from a list of lesson titles.

## Features

- **Four-week structure**: Automatically distributes lessons across 4 weeks
- **Chapter organization**: Creates 3-4 chapters per week based on lesson topics
- **AI-powered content**: Uses OpenAI to generate learning goals and chapter titles
- **AI-powered parsing**: Parses free-text course content with learning outcomes
- **Practice sessions**: Automatically generates practice sessions for each chapter using AI
- **Streaming responses**: Uses chunked/streaming API calls for real-time progress
- **Time estimation**: Estimates lesson completion times to total exactly 30 hours per week
- **Professional formatting**: Creates merged cells and proper Excel formatting
- **Modular prompts**: All AI prompts are in a separate `prompts.py` file for easy customization
- **Complete logging**: All API interactions are logged with timestamps for debugging

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Set up your OpenAI API key:
   - Create a `.env` file with: `OPENAI_API_KEY=your_api_key_here`
   - Or pass it as a command line argument: `--api-key your_api_key_here`

## Usage

```bash
python syllabus_generator.py lessons.txt -o my_syllabus.xlsx --practice-sessions 2
```

### Arguments

- `lessons_file`: Text file containing lesson titles (one per line)
- `-o, --output`: Output Excel file name (default: course_syllabus.xlsx)
- `--api-key`: OpenAI API key (optional if set in environment)
- `--log-file`: Log file for OpenAI API calls (default: openai_log.txt)
- `--model`: OpenAI model to use (default: gpt-4, options: gpt-4, gpt-4-turbo, gpt-3.5-turbo)
- `--practice-sessions`: Number of practice sessions to add per chapter (default: 1)

## Input Format

The script now supports two input formats:

### 1. Simple Lesson List
Create a text file with lesson titles, one per line:

```
Introduction to Python
Variables and Data Types
Control Structures
Functions and Modules
Object-Oriented Programming
...
```

### 2. Free-Text Course Content (Recommended)
Create a text file with detailed course content including learning outcomes:

```
Introduction to Python Programming
Students will learn the basics of Python syntax, understand the Python interpreter, and write their first Hello World program.

Variables and Data Types
Students will master variable declaration, understand Python's dynamic typing system, and work with different data types.

Control Structures
Students will learn conditional logic using if, elif, and else statements, and master for loops and while loops.
...
```

The AI will automatically parse this content and extract lesson titles and learning outcomes.

## Output Format

The generated Excel file contains:

1. **Week**: Week number (1-4)
2. **Learning Goal of the week**: AI-generated weekly learning objectives
3. **Chapter number**: Format like 1.1, 1.2, etc.
4. **Chapter learning goals**: AI-generated chapter objectives
5. **Chapter title**: AI-generated 1-5 word chapter summary
6. **Empty column**: For additional notes
7. **Lesson title**: Your provided lesson titles
8. **Time to complete**: Estimated minutes (totals 30 hours per week)

## Examples

### Basic Usage
```bash
python syllabus_generator.py python_course_lessons.txt -o python_syllabus.xlsx
```

### Advanced Usage with Logging
```bash
python syllabus_generator.py course_content.txt -o detailed_syllabus.xlsx --log-file detailed_log.txt --model gpt-4
```

### Using Different Models
```bash
# Use GPT-4 Turbo for faster processing
python syllabus_generator.py lessons.txt -o syllabus.xlsx --model gpt-4-turbo

# Use GPT-3.5 Turbo for cost efficiency
python syllabus_generator.py lessons.txt -o syllabus.xlsx --model gpt-3.5-turbo
```

This will create a professional syllabus with proper formatting, merged cells, and AI-generated learning goals. All API interactions are logged for debugging and analysis.
