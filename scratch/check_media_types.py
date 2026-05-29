import os

folder = r"C:\Users\WOLF\.gemini\antigravity\brain\bcf47e86-9459-4c38-b3de-fcadf797a7b4"
files = [
    "media__1779569707426.png",
    "media__1779569908554.png",
    "media__1779574133747.png",
    "media__1779574961965.png"
]

for f in files:
    path = os.path.join(folder, f)
    if os.path.exists(path):
        with open(path, "rb") as file_obj:
            header = file_obj.read(16)
        print(f"File: {f}")
        print(f"  Header bytes: {header}")
        # Detect PNG
        if header.startswith(b'\x89PNG\r\n\x1a\n'):
            print("  Detected type: PNG Image")
        # Detect JPEG
        elif header.startswith(b'\xff\xd8\xff'):
            print("  Detected type: JPEG Image")
        # Detect SVG
        elif b'<svg' in header.lower() or b'xml' in header.lower():
            print("  Detected type: SVG Image")
        # Detect MP4
        elif b'ftyp' in header:
            print("  Detected type: MP4 Video")
        else:
            print("  Detected type: Unknown/Other")
    else:
        print(f"File {f} not found.")
