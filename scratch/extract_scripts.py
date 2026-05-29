import re

html_path = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\steps\2330\content.md"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find all script src
scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', content)
# Find all link rel="modulepreload" or stylesheet href
hrefs = re.findall(r'<link[^>]+href=["\']([^"\']+)["\']', content)

with open("scratch/framer_urls.txt", "w", encoding="utf-8") as out:
    out.write("=== SCRIPTS ===\n")
    for s in set(scripts):
        out.write(f"{s}\n")
    out.write("\n=== HREF LINKS ===\n")
    for h in set(hrefs):
        out.write(f"{h}\n")

print("Saved to scratch/framer_urls.txt")
