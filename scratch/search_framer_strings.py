import re
import json

html_path = r"C:\Users\WOLF\Documents\Peptide Wellness Project\C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\steps\2330\content.md"
# Wait, let's fix path:
html_path = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\steps\2330\content.md"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find all double-quoted strings or JSON chunks
# Let's extract any readable text phrases that are at least 15 characters long and contain spaces
phrases = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', content)

clean_phrases = []
for p in phrases:
    p_clean = p.replace('\\"', '"').replace('\\n', ' ').strip()
    if len(p_clean) > 20 and ' ' in p_clean and not p_clean.startswith('http') and not p_clean.startswith('/') and not p_clean.startswith('.'):
        # Filter out css styles or technical code
        if not any(x in p_clean for x in ['{', '}', ';', 'px', 'keyframes', 'cubic-bezier', 'rgba', 'opacity']):
            clean_phrases.append(p_clean)

# Let's write them out
with open("scratch/framer_phrases.txt", "w", encoding="utf-8") as out:
    for phrase in sorted(list(set(clean_phrases))):
        out.write(f"- {phrase}\n")

print(f"Extracted {len(clean_phrases)} phrases. Saved to scratch/framer_phrases.txt")
