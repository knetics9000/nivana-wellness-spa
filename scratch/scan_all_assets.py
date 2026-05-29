import os

workspace = r"c:\Users\WOLF\Documents\Peptide Wellness Project"
extensions = (".png", ".jpg", ".jpeg", ".svg", ".mp4", ".mov", ".webm", ".webp", ".gif")

found_files = []
for root, dirs, files in os.walk(workspace):
    # Skip .git, .next, node_modules
    if any(x in root for x in [".git", ".next", "node_modules"]):
        continue
    for file in files:
        if file.lower().endswith(extensions):
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, workspace)
            size = os.path.getsize(full_path)
            found_files.append((rel_path, size))

with open("scratch/all_assets.txt", "w", encoding="utf-8") as out:
    out.write("=== ALL IMAGE AND VIDEO ASSETS IN WORKSPACE ===\n")
    for path, size in sorted(found_files):
        out.write(f"- {path} ({size} bytes)\n")

print(f"Scanned workspace. Found {len(found_files)} asset files. Saved list to scratch/all_assets.txt")
