# Slime AI v2.6

AI superapp built by Mutyint — chat, STEW agents, Slime Code, PDF studio, voice calls, Slime Store, and more.

## Features

- AI Chat (Mistral / Groq / OpenRouter)
- STEW Agent (100 AI agents for complex tasks)
- Slime Code (AI code generator with live preview)
- Slime Store (12+ mini-apps)
- PDF Studio (merge, split, compress, convert)
- Image Generation
- Voice Calls
- Slides Generator (PPTX export)
- Shazam Music Identification
- YouTube Video Summarizer
- Paystack Payment Integration (NGN)
- Firebase Auth & Firestore
- Coin-based freemium system

## Setup

1. Clone this repo
2. Open `index.html` in any browser, OR deploy to any static host (Vercel, Netlify, GitHub Pages)
3. Add your API keys (see below)

## API Keys Needed

Edit the `K` object in `index.html`:

```javascript
const K = {
  g1: 'gsk_YOUR_GROQ_KEY_1',        // Groq API key
  g2: 'gsk_YOUR_GROQ_KEY_2',        // Groq API key (backup)
  or: 'sk-or-v1-YOUR_OPENROUTER_KEY', // OpenRouter API key
  mistral: 'YOUR_MISTRAL_API_KEY',  // Mistral API key
  acrcloud: '',                     // ACRCloud API token (for Shazam)
};
```

Also update:
- `PAYSTACK_KEY` — your Paystack public key
- Firebase config (`fbConfig`) — your Firebase project credentials
- `STEW_URL` — your STEW Agent backend URL (optional, falls back to Mistral)

## Get API Keys

- Groq: https://console.groq.com/keys
- OpenRouter: https://openrouter.ai/keys
- Mistral: https://console.mistral.ai/api-keys
- Paystack: https://dashboard.paystack.com/settings/developers
- Firebase: https://console.firebase.google.com/
- ACRCloud: https://console.acrcloud.com/

## Tech Stack

- Vanilla HTML/CSS/JavaScript (no build step)
- Firebase (Auth + Firestore)
- Paystack (Payments)
- Mistral AI / Groq / OpenRouter (AI models)

## License

Proprietary — © Mutyint
