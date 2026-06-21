// ════════════════════════════════════════════
// SLIME AI — API KEY CONFIGURATION
// ════════════════════════════════════════════
// Copy this file to config.js and fill in your API keys.
// Then add config.js to .gitignore (already done).
// Load it BEFORE index.html with: <script src="config.js"></script>

const SLIME_CONFIG = {
  // AI Model Keys
  groq_key_1: 'gsk_YOUR_GROQ_KEY_1',
  groq_key_2: 'gsk_YOUR_GROQ_KEY_2',
  openrouter_key: 'sk-or-v1-YOUR_OPENROUTER_KEY',
  mistral_key: 'YOUR_MISTRAL_API_KEY',

  // Music Recognition (Shazam)
  acrcloud_token: 'YOUR_ACRCLOUD_TOKEN',

  // Payments (Paystack)
  paystack_key: 'pk_live_YOUR_PAYSTACK_PUBLIC_KEY',

  // Firebase
  firebase: {
    apiKey: 'YOUR_FIREBASE_API_KEY',
    authDomain: 'YOUR_PROJECT.firebaseapp.com',
    projectId: 'YOUR_PROJECT',
    storageBucket: 'YOUR_PROJECT.appspot.com',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId: 'YOUR_APP_ID'
  },

  // STEW Agent Backend (optional — falls back to Mistral)
  stew_url: 'https://stew-ai.onrender.com'
};

// Get your keys from:
// Groq:        https://console.groq.com/keys
// OpenRouter:  https://openrouter.ai/keys
// Mistral:     https://console.mistral.ai/api-keys
// Paystack:    https://dashboard.paystack.com/settings/developers
// Firebase:    https://console.firebase.google.com/
// ACRCloud:    https://console.acrcloud.com/
