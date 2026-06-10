from PIL import Image, ImageDraw
import sys

def flood_fill_transparency(image_path, output_path, tolerance=30):
    try:
        img = Image.open(image_path).convert("RGBA")
        width, height = img.size
        
        # Create a temporary image with a white border to ensure all white edges are connected
        border = 2
        temp_img = Image.new("RGB", (width + border*2, height + border*2), (255, 255, 255))
        temp_img.paste(img.convert("RGB"), (border, border))
        
        # Flood fill from the top-left corner with a unique color (magenta)
        ImageDraw.floodfill(temp_img, (0, 0), (255, 0, 255), thresh=tolerance)
        
        pixels = img.load()
        temp_pixels = temp_img.load()
        
        for y in range(height):
            for x in range(width):
                if temp_pixels[x + border, y + border] == (255, 0, 255):
                    pixels[x, y] = (255, 255, 255, 0)
                    
        img.save(output_path, "PNG")
        print("Successfully removed background!")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

flood_fill_transparency("asset/contactus.png", "asset/contactus_transparent.png", tolerance=20)
