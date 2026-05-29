import json
import os

path1 = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\logs\transcript.jsonl"

with open(path1, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if 'CATEGORIES.map' in line or 'weight-loss' in line:
            try:
                data = json.loads(line, strict=False)
                step = data.get("step_index", 0)
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    name = tc.get("name")
                    args = tc.get("args", {})
                    if isinstance(args, str):
                        args = json.loads(args, strict=False)
                    if not isinstance(args, dict):
                        continue
                    target = args.get("TargetFile", "")
                    if "page.tsx" in target:
                        fn = f"scratch/full_categories_step_{step}.txt"
                        with open(fn, "w", encoding="utf-8") as out:
                            out.write(f"=== STEP {step} ({name}) targeting {target} ===\n")
                            if name == "multi_replace_file_content":
                                chunks = args.get("ReplacementChunks", [])
                                if isinstance(chunks, str):
                                    chunks = json.loads(chunks, strict=False)
                                for idx, chunk in enumerate(chunks):
                                    out.write(f"--- Chunk {idx} ---\n")
                                    out.write(f"TargetContent:\n{chunk.get('TargetContent')}\n")
                                    out.write(f"ReplacementContent:\n{chunk.get('ReplacementContent')}\n")
                            else:
                                out.write(f"TargetContent:\n{args.get('TargetContent')}\n")
                                out.write(f"ReplacementContent:\n{args.get('ReplacementContent')}\n")
                        print(f"Saved full step {step} to {fn}")
            except Exception as e:
                pass
