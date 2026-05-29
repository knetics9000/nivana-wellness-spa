import json
import os
import traceback

path1 = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\logs\transcript.jsonl"

with open(path1, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        try:
            data = json.loads(line, strict=False)
            step = data.get("step_index", 0)
            tool_calls = data.get("tool_calls", [])
            for tc in tool_calls:
                name = tc.get("name")
                args = tc.get("args", {})
                if isinstance(args, str):
                    try:
                        args = json.loads(args, strict=False)
                    except:
                        pass
                if not isinstance(args, dict):
                    continue
                if name in ("replace_file_content", "write_to_file", "multi_replace_file_content"):
                    target = args.get("TargetFile", "").replace('"', '').strip()
                    if "page.tsx" in target:
                        clean_target = target.replace('\\', '/')
                        basename = os.path.basename(clean_target).replace('[slug]', 'slug')
                        parent_dir = os.path.basename(os.path.dirname(clean_target))
                        fn = f"scratch/step_{step}_{parent_dir}_{basename}.txt"
                        with open(fn, "w", encoding="utf-8") as out:
                            out.write(f"=== STEP {step} ({name}) targeting {target} ===\n")
                            out.write(f"Instruction: {args.get('Instruction')}\n")
                            if name == "multi_replace_file_content":
                                chunks = args.get("ReplacementChunks", [])
                                if isinstance(chunks, str):
                                    chunks = json.loads(chunks, strict=False)
                                out.write(f"Chunks: {len(chunks)}\n")
                                for idx, chunk in enumerate(chunks):
                                    out.write(f"--- Chunk {idx} (Lines {chunk.get('StartLine')} - {chunk.get('EndLine')}) ---\n")
                                    out.write(f"TargetContent:\n{chunk.get('TargetContent')}\n")
                                    out.write(f"ReplacementContent:\n{chunk.get('ReplacementContent')}\n")
                            else:
                                out.write(f"StartLine: {args.get('StartLine')}\n")
                                out.write(f"EndLine: {args.get('EndLine')}\n")
                                out.write(f"TargetContent:\n{args.get('TargetContent')}\n")
                                out.write(f"ReplacementContent:\n{args.get('ReplacementContent')}\n")
                        print(f"Saved step {step} ({name}) targeting {target} to {fn}")
        except Exception as e:
            print("Err at line", i, ":", e)
            traceback.print_exc()
