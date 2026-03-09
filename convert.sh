#!/bin/bash
# Run from your project root: bash convert-new-projects.sh

QUALITY=90

echo "=== Checking what's in project-images ==="
ls assets/project-images/

echo ""
echo "=== Checking foodiecam folder ==="
ls assets/project-images/foodiecam/ 2>/dev/null || ls assets/project-images/FoodieCam/ 2>/dev/null || echo "folder not found under either name"

echo ""
echo "=== Checking idle-earth folder ==="
ls assets/project-images/idle-earth/ 2>/dev/null || ls assets/project-images/idle-world/ 2>/dev/null || ls assets/project-images/IdleEarth/ 2>/dev/null || echo "folder not found under any expected name"

echo ""
echo "=== Converting everything found ==="
for folder in assets/project-images/foodiecam assets/project-images/FoodieCam assets/project-images/idle-earth assets/project-images/idle-world assets/project-images/IdleEarth; do
  if [ -d "$folder" ]; then
    echo "Found folder: $folder"
    for img in "$folder"/*.png "$folder"/*.PNG "$folder"/*.jpg "$folder"/*.JPG "$folder"/*.jpeg; do
      [ -f "$img" ] || continue
      base="${img%.*}"
      cwebp -q $QUALITY "$img" -o "${base}.webp"
      echo "✅  $img → ${base}.webp"
    done
  fi
done

echo ""
echo "Done!"