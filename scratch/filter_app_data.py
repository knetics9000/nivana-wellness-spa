conversation_id = "bcf47e86-9459-4c38-b3de-fcadf797a7b4"
in_path = "scratch/app_data_assets.txt"
out_path = "scratch/current_conv_assets.txt"

with open(in_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

filtered = []
for line in lines:
    if conversation_id in line:
        filtered.append(line)

with open(out_path, "w", encoding="utf-8") as out:
    out.write(f"=== ASSETS FOR CONVERSATION {conversation_id} ===\n")
    for f in filtered:
        out.write(f)

print(f"Filtered assets. Found {len(filtered)} items. Saved to {out_path}")
