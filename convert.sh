#!/bin/bash
# Convert idle-earth card images to .webp
# Run from your project root
# Requires: cwebp (install via `brew install webp`)

cwebp -q 90 "assets/project-cards/idle-earth.png" -o "assets/project-cards/idle-earth.webp"
cwebp -q 90 "assets/project-cards/idle-earth-hover.png" -o "assets/project-cards/idle-earth-hover.webp"

echo "Done!"
