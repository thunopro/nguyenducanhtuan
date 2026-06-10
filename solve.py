from PIL import Image

# Ảnh ghép 6 frame
img = Image.open("turngif.jpg")

# Số cột và hàng trong ảnh
cols = 2
rows = 3

w, h = img.size
frame_w = w // cols
frame_h = h // rows

frames = []

for r in range(rows):
    for c in range(cols):
        left = c * frame_w
        top = r * frame_h
        right = left + frame_w
        bottom = top + frame_h

        frame = img.crop((left, top, right, bottom))

        # Resize nếu muốn GIF nhẹ hơn, có thể bỏ dòng này
        # frame = frame.resize((frame_w // 2, frame_h // 2))

        frames.append(frame)

# Tạo GIF
frames[0].save(
    "output.gif",
    save_all=True,
    append_images=frames[1:],
    duration=600,   # thời gian mỗi frame, ms
    loop=0          # 0 = lặp vô hạn
)

print("Đã tạo output.gif")