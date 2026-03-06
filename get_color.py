from PIL import Image
import sys

try:
    img = Image.open('public/cs4.png').convert('RGBA')
    colors = img.getcolors(maxcolors=1000000)
    # Filter out transparent pixels
    colors = [c for c in colors if c[1][3] > 0]
    # Sort by frequency
    colors.sort(key=lambda x: x[0], reverse=True)
    
    # We mainly want the dominant non-white, non-transparent color
    for count, color in colors[:10]:
        r, g, b, a = color
        hex_color = f"#{r:02x}{g:02x}{b:02x}"
        print(f"Count: {count}, Color: {hex_color}, RGB: {r},{g},{b}")
except Exception as e:
    print("Error:", e)
