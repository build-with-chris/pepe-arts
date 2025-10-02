# Freeman Festival Logo Integration

## Logo-Datei hinzufügen

Bitte fügen Sie das Freeman Festival Logo als `/public/freeman-festival-logo.png` hinzu.

### Empfohlene Spezifikationen:
- **Format**: PNG mit transparentem Hintergrund
- **Größe**: 800x600px oder ähnliches Seitenverhältnis
- **Qualität**: Hochauflösend für scharfe Darstellung

## Logo-Position

Das Logo wird angezeigt auf:
- **Festival-Seite**: Rechter Bereich neben den Freeman Festival 2025 Informationen
- **Aktueller Platzhalter**: Zelt-Design mit "FREEMAN FESTIVAL" Text

## Nach Logo-Upload

Sobald die Datei `/public/freeman-festival-logo.png` hochgeladen ist:
1. Den Platzhalter-Code in `src/app/freemanfestival/page.tsx` ersetzen
2. Mit folgendem Code:

```jsx
<div className="aspect-video bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl flex items-center justify-center p-4">
  <img
    src="/freeman-festival-logo.png"
    alt="Freeman Festival - Contemporary Circus Festival"
    className="max-w-full max-h-full object-contain"
  />
</div>
```

## Styling

Das Logo wird mit dem rosa/orangen Hintergrund-Gradient angezeigt, der zum ursprünglichen Freeman Festival Design passt.