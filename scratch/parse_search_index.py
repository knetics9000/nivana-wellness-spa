import json

json_path = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\steps\2386\content.md"
out_path = r"C:\Users\WOLF\Documents\Peptide Wellness Project\scratch\framer_pages.txt"

with open(json_path, "r", encoding="utf-8") as f:
    # Skip any markdown wrapper lines if present
    content = f.read()
    # Find start of JSON block (since read_url_content might save as markdown or raw)
    start_idx = content.find('{')
    if start_idx != -1:
        json_data = json.loads(content[start_idx:])
    else:
        json_data = json.loads(content)

with open(out_path, "w", encoding="utf-8") as out:
    out.write("=== FRAMER RESET TEMPLATE STRUCTURE ===\n\n")
    for page in json_data.get("pages", []):
        url = page.get("url", "")
        title = page.get("title", "")
        desc = page.get("description", "")
        out.write(f"Page: {title} (URL: {url})\n")
        out.write(f"Description: {desc}\n")
        out.write("Content Snippets:\n")
        for chunk in page.get("content", "").split("\n"):
            chunk = chunk.strip()
            if len(chunk) > 10:
                out.write(f"  - {chunk}\n")
        out.write("\n" + "="*50 + "\n\n")

print("Saved parsed index to scratch/framer_pages.txt")
