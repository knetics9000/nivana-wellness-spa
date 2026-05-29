import json
import traceback

path1 = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\logs\transcript.jsonl"

with open(path1, 'r', encoding='utf-8') as f:
    for line in f:
        if '"step_index":774' in line:
            print("Found line!")
            try:
                data = json.loads(line, strict=False)
                tc = data['tool_calls'][0]
                print("Tool Name:", tc['name'])
                args = tc['args']
                print("Args type:", type(args))
                if isinstance(args, str):
                    print("Args is str, length:", len(args))
                    args = json.loads(args, strict=False)
                print("Args keys:", list(args.keys()) if isinstance(args, dict) else "not a dict")
                target = args.get("TargetFile")
                print("Target:", repr(target))
            except Exception as e:
                traceback.print_exc()
