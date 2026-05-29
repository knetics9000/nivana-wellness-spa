import re
from html import unescape

html_path = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\steps\2330\content.md"
out_path = r"C:\Users\WOLF\Documents\Peptide Wellness Project\scratch\framer_structure.txt"

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Extract fonts, styles, and structural text
# Let's remove script and style tags first to extract clean text
text_only = re.sub(r'<script.*?>.*?</script>', '', html, flags=re.DOTALL)
text_only = re.sub(r'<style.*?>.*?</style>', '', text_only, flags=re.DOTALL)

# Find all visible text/strings inside divs, spans, paragraphs, headings
# Let's extract tags and their texts
tags = re.findall(r'<([a-zA-Z1-6]+)[^>]*>(.*?)</\1>', text_only, flags=re.DOTALL)

clean_tags = []
for tag, content in tags:
    clean_content = re.sub(r'<[^>]+>', ' ', content).strip()
    clean_content = unescape(clean_content)
    clean_content = re.sub(r'\s+', ' ', clean_content)
    if clean_content and len(clean_content) > 1:
        clean_tags.append((tag, clean_content))

# Look for css custom variables and styling tokens
tokens = re.findall(r'--token-[a-zA-Z0-9\-]+:\s*(#[a-fA-F0-9]+|rgba?\(.*?\))', html)

with open(out_path, "w", encoding="utf-8") as out:
    out.write("=== COLOR TOKENS ===\n")
    for tok in set(tokens):
        out.write(f"{tok}\n")
    out.write("\n=== VISIBLE TAGS AND TEXTS ===\n")
    for tag, content in clean_tags:
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a'):
            out.write(f"<{tag}>: {content}\n")

print("Parsing complete. Saved to scratch/framer_structure.txt")
