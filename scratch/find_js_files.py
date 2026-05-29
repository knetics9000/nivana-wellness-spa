import re

html_path = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\steps\2330\content.md"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find all occurrences of anything ending in .js or containing framerusercontent.com/sites/ or /chunk- or similar
matches = re.findall(r'https?://[^\s"\']+\.js[^\s"\']*', content)
matches_sites = re.findall(r'https?://[^\s"\']+/sites/[^\s"\']+', content)

with open("scratch/framer_js_links.txt", "w", encoding="utf-8") as out:
    out.write("=== JS LINKS ===\n")
    for m in set(matches):
        out.write(m + "\n")
    out.write("\n=== SITES LINKS ===\n")
    for ms in set(matches_sites):
        out.write(ms + "\n")

print(f"Found {len(matches)} JS links, {len(matches_sites)} sites links. Saved to scratch/framer_js_links.txt")
