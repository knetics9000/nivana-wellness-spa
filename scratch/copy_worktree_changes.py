import os
import shutil
import subprocess
import traceback

worktrees_dir = r"C:\Users\WOLF\Documents\Peptide Wellness Project"
wt_names = [
    "subagent-Content-Hubs-Visual-Redesigner-WellnessRedesigner-c58f0c4f",
    "subagent-Core-Pages-Visual-Redesigner-WellnessRedesigner-004fcc8d",
    "subagent-Intake---Support-Visual-Redesigner-WellnessRedesigner-3f5c2087",
    "subagent-Treatments-Visual-Redesigner-WellnessRedesigner-b4b33c9c"
]

wt_parent = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\worktrees"

files_copied = 0

for folder in wt_names:
    wt_path = os.path.join(wt_parent, folder)
    if not os.path.exists(wt_path):
        print(f"Directory does not exist: {wt_path}")
        continue
    
    print(f"Scanning worktree: {folder}")
    try:
        # Run git status inside worktree using string command for shell=True
        old_cwd = os.getcwd()
        os.chdir(wt_path)
        res = subprocess.run("git status --porcelain", capture_output=True, text=True, shell=True)
        os.chdir(old_cwd)
        
        if res.returncode != 0:
            print(f"  git command failed: {res.stderr}")
            continue
            
        lines = res.stdout.split("\n")
        for line in lines:
            if not line.strip():
                continue
            parts = line.strip().split(maxsplit=1)
            if len(parts) < 2:
                continue
            status, rel_path = parts[0], parts[1]
            
            if "M" in status or "A" in status or status == "??" or "R" in status:
                if " -> " in rel_path:
                    rel_path = rel_path.split(" -> ")[1].strip()
                
                src_file = os.path.join(wt_path, rel_path)
                dst_file = os.path.join(worktrees_dir, rel_path)
                
                print(f"  Copying: src={src_file} -> dst={dst_file}")
                
                # Make sure parent directory exists
                os.makedirs(os.path.dirname(dst_file), exist_ok=True)
                
                # Check existence of src_file
                if not os.path.exists(src_file):
                    print(f"    Warning: Source file {src_file} does not exist!")
                    continue
                
                # Copy file
                shutil.copy2(src_file, dst_file)
                print(f"    Copied successfully")
                files_copied += 1
    except Exception as e:
        print(f"Error in {folder}: {e}")
        traceback.print_exc()

print(f"Finished copying. Total: {files_copied}")
