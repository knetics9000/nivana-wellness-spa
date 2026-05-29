import re
from html import unescape

html_path = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\steps\2330\content.md"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace > with >\n to expand minified HTML
content_expanded = content.replace(">", ">\n").replace("<", "\n<")

# Strip scripts
content_expanded = re.sub(r'<(script|style|svg).*?>.*?</\1>', '', content_expanded, flags=re.DOTALL | re.IGNORECASE)

# Strip tags
text = re.sub(r'<[^>]+>', '\n', content_expanded)
text = unescape(text)

lines = [line.strip() for line in text.split('\n')]
clean_lines = []
for line in lines:
    line = re.sub(r'\s+', ' ', line)
    # Ignore empty or css-like lines
    if len(line) > 2:
        if not any(x in line for x in ['{', '}', ';', 'cubic-bezier', 'rgba', 'opacity', 'font-family', 'var(--', '/*', '*/']):
            clean_lines.append(line)

with open("scratch/framer_text_clean_2.txt", "w", encoding="utf-8") as out:
    for line in clean_lines:
        out.write(line + "\n")

print(f"Extracted {len(clean_lines)} lines of text. Saved to scratch/framer_text_clean_2.txt")
