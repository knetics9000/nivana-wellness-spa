import json

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
                        print(f"=== STEP {step} ({name}) ===")
                        if name == "multi_replace_file_content":
                            chunks = args.get("ReplacementChunks", [])
                            if isinstance(chunks, str):
                                chunks = json.loads(chunks, strict=False)
                            for idx, chunk in enumerate(chunks):
                                if "CATEGORIES.map" in chunk.get("TargetContent", "") or "CATEGORIES.map" in chunk.get("ReplacementContent", "") or "weight-loss" in chunk.get("TargetContent", ""):
                                    print(f"--- Chunk {idx} ---")
                                    print("TargetContent:", repr(chunk.get("TargetContent")))
                                    print("ReplacementContent:", repr(chunk.get("ReplacementContent")))
                        else:
                            print("TargetContent:", repr(args.get("TargetContent")))
                            print("ReplacementContent:", repr(args.get("ReplacementContent")))
            except Exception as e:
                pass
