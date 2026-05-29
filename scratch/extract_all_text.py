import re
from html import unescape

html_path = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\steps\2330\content.md"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Strip script and style tags completely
content = re.sub(r'<(script|style).*?>.*?</\1>', '', content, flags=re.DOTALL)

# Strip all other HTML tags
text = re.sub(r'<[^>]+>', '\n', content)

# Decode HTML entities
text = unescape(text)

# Split by lines and clean
lines = [line.strip() for line in text.split('\n')]
clean_lines = []
for line in lines:
    line = re.sub(r'\s+', ' ', line)
    # Ignore empty or highly technical lines (e.g. css properties)
    if len(line) > 3 and not any(x in line for x in ['{', '}', ';', ':', 'cubic-bezier', 'rgba', 'opacity', 'font-family', 'var(--']):
        clean_lines.append(line)

with open("scratch/framer_text_clean.txt", "w", encoding="utf-8") as out:
    for line in clean_lines:
        out.write(line + "\n")

print(f"Extracted {len(clean_lines)} lines of text. Saved to scratch/framer_text_clean.txt")
