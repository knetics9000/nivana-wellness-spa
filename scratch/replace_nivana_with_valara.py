import os
import re

directories = ["src"]
extensions = (".tsx", ".ts", ".css", ".md", ".json")

replacements = [
    (re.compile(r'\bNivana\b'), 'Valara'),
    (re.compile(r'\bNIVANA\b'), 'VALARA'),
    (re.compile(r'\bnivana\b'), 'valara'),
    (re.compile(r'nivanawellness\.com'), 'valarawellness.com'),
]

files_to_process = []
for directory in directories:
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(extensions):
                files_to_process.append(os.path.join(root, file))

for file_path in files_to_process:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for pattern, replacement in replacements:
            content = pattern.sub(replacement, content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

print("Nivana -> Valara replacement complete.")
