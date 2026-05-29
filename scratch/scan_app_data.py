import os

app_data = r"C:\Users\WOLF\.gemini\antigravity"
extensions = (".png", ".jpg", ".jpeg", ".svg", ".mp4", ".mov", ".webm", ".webp", ".gif")

found_files = []
for root, dirs, files in os.walk(app_data):
    # Skip worktrees, .git
    if any(x in root for x in [".git", "node_modules", "worktrees"]):
        continue
    for file in files:
        if file.lower().endswith(extensions) or "logo" in file.lower() or "video" in file.lower():
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, app_data)
            size = os.path.getsize(full_path)
            found_files.append((rel_path, size))

with open("scratch/app_data_assets.txt", "w", encoding="utf-8") as out:
    out.write("=== ALL IMAGE, VIDEO AND LOGO ASSETS IN APP DATA ===\n")
    for path, size in sorted(found_files):
        out.write(f"- {path} ({size} bytes)\n")

print(f"Scanned App Data. Found {len(found_files)} files. Saved list to scratch/app_data_assets.txt")
