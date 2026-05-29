import re

html_path = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\steps\2330\content.md"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's search for occurrences of "Reset" or "Wellness" case-insensitively
# We want to print 200 characters around each match
matches = [m.start() for m in re.finditer(r'Reset|Wellness|Studio|Holistic', content, re.IGNORECASE)]

print(f"Found {len(matches)} matches")

with open("scratch/framer_matches.txt", "w", encoding="utf-8") as out:
    for idx, start in enumerate(matches[:50]): # first 50 matches
        segment = content[max(0, start - 150): min(len(content), start + 150)]
        out.write(f"=== MATCH {idx} (Pos {start}) ===\n")
        out.write(segment + "\n\n")

print("Saved matches to scratch/framer_matches.txt")
