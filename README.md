# Speed Typing Test

A browser-based speed typing test that scores your performance and tracks the accuracy of every word you type, including a detailed list of misspelled words.

## Features

- **Timed test** — choose 30, 60, 120 seconds, or 5 minutes; the timer starts on your first keystroke.
- **100 different tests** — a bank of 100 distinct passages, picked at random and chained to fit the chosen duration.
- **Live stats** — words per minute, accuracy, and misspelled-word count update as you type.
- **Word-by-word checking** — the current word is highlighted; it turns red in real time if your typing diverges from it.
- **Scoring**
  - **Gross WPM** — all typed characters ÷ 5 ÷ minutes.
  - **Net WPM** — only correctly typed characters count.
  - **Accuracy** — correct words ÷ attempted words.
  - **Score** — Net WPM × accuracy.
- **Misspelled word report** — after the test, see every word you got wrong with what you typed vs. what was expected.

## Running it

No build step or dependencies. Open `index.html` in any modern browser:

```sh
open index.html        # macOS
xdg-open index.html    # Linux
```

Or serve it locally:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## How to take the test

1. Pick a duration and click into the input box.
2. Type each highlighted word, then press **space** to submit it (or **Enter** for the last word).
3. When time runs out, review your results and the list of misspelled words.
4. Click **Try Again** for a new randomized passage.
