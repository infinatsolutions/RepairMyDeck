# John & Ruth Image Upload Checklist (Exact Filenames)

Upload these files into this same folder: `assets/photos/`.

> Important: names must match exactly (including spaces, capitalization, and spelling).

## Existing / Before Photos
- `John and Ruth - Garage Stairs ORINGAL.jpeg`
- `John and Ruth - Deck Stairs ORIGINAL.jpeg`
- `John and Ruth - Full Deck ORIGINAL.jpeg`
- `John and Ruth - Future Pool Plan with Stairs ORiGINAL.jpeg`

## Cedar (After / Render)
- `John and Ruth - Garage Stairs Cedar Replacement.png`
- `John and Ruth - Railing Replacement Cedar.png`
- `John and Ruth - Full Rebuild Cedar with Gapped Railing.png`
- `John and Ruth - Future Pool Plans with Stairs Cedar.png`

## Composite (After / Render)
- `John and Ruth - Garage Stairs Composite Replacement.png`
- `John and Ruth - Railing Replacment Composite.png`
- `John and Ruth Full Rebuild Composite Angle 1.png`
- `John and Ruth - Future Pool Plan with Stairs Composite.png`

## Fast Verification (optional)
Run from repo root:

```bash
for f in \
"John and Ruth - Garage Stairs ORINGAL.jpeg" \
"John and Ruth - Deck Stairs ORIGINAL.jpeg" \
"John and Ruth - Full Deck ORIGINAL.jpeg" \
"John and Ruth - Future Pool Plan with Stairs ORiGINAL.jpeg" \
"John and Ruth - Garage Stairs Cedar Replacement.png" \
"John and Ruth - Railing Replacement Cedar.png" \
"John and Ruth - Full Rebuild Cedar with Gapped Railing.png" \
"John and Ruth - Future Pool Plans with Stairs Cedar.png" \
"John and Ruth - Garage Stairs Composite Replacement.png" \
"John and Ruth - Railing Replacment Composite.png" \
"John and Ruth Full Rebuild Composite Angle 1.png" \
"John and Ruth - Future Pool Plan with Stairs Composite.png"; do
  [ -f "assets/photos/$f" ] && echo "✅ $f" || echo "❌ MISSING: $f"
done
```
