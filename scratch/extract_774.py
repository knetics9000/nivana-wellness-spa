import json

path1 = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4\.system_generated\logs\transcript.jsonl"

with open(path1, 'r', encoding='utf-8') as f:
    for line in f:
        if '"step_index":774' in line:
            data = json.loads(line, strict=False)
            tc = data['tool_calls'][0]
            args = tc['args']
            chunks = args.get("ReplacementChunks")
            print("Type:", type(chunks))
            if isinstance(chunks, str):
                print("Len:", len(chunks))
                print(repr(chunks[:1000]))
            else:
                print(chunks)
