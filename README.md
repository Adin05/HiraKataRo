# Hiragana & Katakana Learning Cards

A simple web application for learning Japanese Hiragana and Katakana characters with their Romaji readings.

## Features

- Interactive card-based interface
- Smooth sliding animations
- Switch between Hiragana and Katakana modes
- Keyboard navigation support
- Responsive design

## How to Use

1. Open `index.html` in your web browser
2. Use the arrow buttons or keyboard arrow keys to navigate between cards
3. Switch between Hiragana and Katakana using the mode buttons at the bottom
4. Each card displays:
   - The Japanese character (Hiragana or Katakana)
   - The Romaji reading below the character

## Navigation

- Click the left arrow (←) or press the left arrow key to go to the previous card
- Click the right arrow (→) or press the right arrow key to go to the next card
- Click "Hiragana" or "Katakana" to switch between character sets

## Technical Details

The application is built using:
- HTML5
- CSS3 (with animations and modern styling)
- Vanilla JavaScript (no frameworks required)

## Adding More Characters

To add more characters, edit the `script.js` file and add more entries to the `hiraganaData` and `katakanaData` arrays following the same format:

```javascript
{ char: 'character', romaji: 'reading' }
``` 