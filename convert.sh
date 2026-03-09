#!/bin/bash
# Convert new project card images to WebP
# Run from your project root: bash convert.sh
# Requires: cwebp (brew install webp  OR  apt install webp)

INPUT_DIR="assets/project-cards"
QUALITY=90

images=(
  "idle-earth.png"
  "idle-earth-hover.png"
  "recicam.png"
  "recicam-hover.png"
)

for img in "${images[@]}"; do
  input="$INPUT_DIR/$img"
  output="$INPUT_DIR/${img%.png}.webp"

  if [ ! -f "$input" ]; then
    echo "⚠️  Not found: $input — skipping"
    continue
  fi

  cwebp -q $QUALITY "$input" -o "$output"
  echo "✅  $input → $output"
done

echo ""
echo "Done! WebP files are in $INPUT_DIR"