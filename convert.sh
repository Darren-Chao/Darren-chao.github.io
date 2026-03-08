#!/bin/bash
# Convert sprite images to WebP (keep at 2x: 128x160 output for 64x80 logical)
for f in assets/sprite/*.png; do
  magick "$f" -resize 128x160 "${f%.png}.webp"
  echo "Converted: $f"
done
echo "Sprite conversion done!"
