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

## Exact Placement Instructions (Step-by-Step)

1. On your computer, create a folder named exactly: `assets`.
2. Inside `assets`, create a folder named exactly: `photos`.
3. Copy the 12 files below into `assets/photos/` and keep every filename exactly as written.
4. Upload that whole `assets/photos/` folder to your website/project so these final paths exist:

### Required Final Paths

- `assets/photos/John and Ruth - Garage Stairs ORINGAL.jpeg`
- `assets/photos/John and Ruth - Deck Stairs ORIGINAL.jpeg`
- `assets/photos/John and Ruth - Full Deck ORIGINAL.jpeg`
- `assets/photos/John and Ruth - Future Pool Plan with Stairs ORiGINAL.jpeg`
- `assets/photos/John and Ruth - Garage Stairs Cedar Replacement.png`
- `assets/photos/John and Ruth - Railing Replacement Cedar.png`
- `assets/photos/John and Ruth - Full Rebuild Cedar with Gapped Railing.png`
- `assets/photos/John and Ruth - Future Pool Plans with Stairs Cedar.png`
- `assets/photos/John and Ruth - Garage Stairs Composite Replacement.png`
- `assets/photos/John and Ruth - Railing Replacment Composite.png`
- `assets/photos/John and Ruth Full Rebuild Composite Angle 1.png`
- `assets/photos/John and Ruth - Future Pool Plan with Stairs Composite.png`

### Which file is used by each option card

1. **Garage Stairs Replacement**
   - Before/original: `assets/photos/John and Ruth - Garage Stairs ORINGAL.jpeg`
   - Cedar render: `assets/photos/John and Ruth - Garage Stairs Cedar Replacement.png`
   - Composite render: `assets/photos/John and Ruth - Garage Stairs Composite Replacement.png`

2. **Deck Stairs Replacement**
   - Before/original: `assets/photos/John and Ruth - Deck Stairs ORIGINAL.jpeg`
   - Cedar render: `assets/photos/John and Ruth - Railing Replacement Cedar.png`
   - Composite render: `assets/photos/John and Ruth - Railing Replacment Composite.png`

3. **Floor Decking Replacement**
   - Before/original: `assets/photos/John and Ruth - Full Deck ORIGINAL.jpeg`
   - Cedar render: `assets/photos/John and Ruth - Full Rebuild Cedar with Gapped Railing.png`
   - Composite render: `assets/photos/John and Ruth Full Rebuild Composite Angle 1.png`

4. **Upper Deck Railing Replacement**
   - Before/original: `assets/photos/John and Ruth - Full Deck ORIGINAL.jpeg`
   - Cedar render: `assets/photos/John and Ruth - Railing Replacement Cedar.png`
   - Composite render: `assets/photos/John and Ruth - Railing Replacment Composite.png`

5. **Full Deck Rebuild**
   - Before/original: `assets/photos/John and Ruth - Full Deck ORIGINAL.jpeg`
   - Cedar render: `assets/photos/John and Ruth - Full Rebuild Cedar with Gapped Railing.png`
   - Composite render: `assets/photos/John and Ruth Full Rebuild Composite Angle 1.png`

6. **Future Pool Plan with Stairs New Build**
   - Before/original: `assets/photos/John and Ruth - Future Pool Plan with Stairs ORiGINAL.jpeg`
   - Cedar render: `assets/photos/John and Ruth - Future Pool Plans with Stairs Cedar.png`
   - Composite render: `assets/photos/John and Ruth - Future Pool Plan with Stairs Composite.png`
