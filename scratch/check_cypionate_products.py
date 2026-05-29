import json

path1 = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\logs\transcript.jsonl"

with open(path1, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if 'testosterone-cypionate' in line and 'products.ts' in line:
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
                    print(f"Found edit at step {step} ({name})")
                    print("Instruction:", args.get("Instruction"))
                    print("ReplacementContent:", repr(args.get("ReplacementContent"))[:500])
            except Exception as e:
                pass
