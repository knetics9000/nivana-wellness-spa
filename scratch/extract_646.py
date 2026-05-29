import json

path1 = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\logs\transcript.jsonl"

with open(path1, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if '"step_index":646' in line:
            try:
                data = json.loads(line, strict=False)
                tc = data['tool_calls'][0]
                args = tc['args']
                if isinstance(args, str):
                    args = json.loads(args, strict=False)
                with open("scratch/step_646_products.txt", "w", encoding="utf-8") as out:
                    out.write(args.get("ReplacementContent", ""))
                print("Saved step 646 replacement content to scratch/step_646_products.txt")
            except Exception as e:
                import traceback
                traceback.print_exc()
