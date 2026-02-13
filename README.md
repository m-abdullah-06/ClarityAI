# 🌟 AI Life Advice Generator - Powered by Puter

A beautiful AI-powered life advice app with **authentication, cloud storage, and AI** - all **100% free** with **no backend needed**!

## ✨ Features

- 🤖 **AI-Powered Advice** - Get personalized life advice using Puter's AI (Claude, GPT-4, or Llama)
- 🔐 **Secure Authentication** - Sign in with Puter (no passwords to remember!)
- ☁️ **Cloud Storage** - Favorites saved to Puter KV store, accessible from any device
- 💾 **File Storage Ready** - Built-in support for file uploads and storage
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- 🚀 **No Backend Required** - Everything runs in the browser!
- 💯 **100% FREE** - No API keys, no credit cards, no costs

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the App
```bash
npm run dev
```

### 3. Open Browser
Navigate to: `http://localhost:5173`

### 4. Sign In
Click "Sign in with Puter" - no email or password required!

## 🎯 How It Works

### Powered by Puter.js

This app uses [Puter.js](https://puter.com) - a cloud operating system that provides:

- **Authentication** - Instant sign-in, no backend needed
- **KV Store** - Key-value storage for favorites
- **AI Chat** - Access to Claude, GPT-4, and Llama models
- **File Storage** - Upload and store files in the cloud
- **All FREE** - No API keys or costs required

### Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Router** - Navigation
- **Puter.js** - Cloud services (auth, storage, AI)

## 📚 Project Structure

```
ai-life-advice-puter/
├── index.html                 # Entry point with Puter SDK
├── src/
│   ├── components/            # React components
│   │   ├── Header.jsx        # Navigation & user info
│   │   ├── AdviceInput.jsx   # Problem input form
│   │   ├── AdviceCard.jsx    # Individual advice card
│   │   ├── AdviceList.jsx    # List of advice
│   │   ├── FavoritesList.jsx # Saved favorites
│   │   └── Loader.jsx        # Loading spinner
│   ├── pages/                # Route pages
│   │   ├── Login.jsx         # Login screen
│   │   ├── Home.jsx          # Main page
│   │   └── Favorites.jsx     # Favorites page
│   ├── hooks/                # Custom hooks
│   │   └── usePuterStore.js  # Puter state management
│   ├── services/             # API services
│   │   ├── api.js            # AI chat service
│   │   └── favorites.js      # KV storage for favorites
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Tailwind styles
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🔐 Authentication

The app uses Puter's built-in authentication:

1. User clicks "Sign in with Puter"
2. Puter handles the auth flow (no passwords!)
3. User gets a unique identity
4. Favorites are saved to their account

**Benefits:**
- No email or password to remember
- Works across all devices
- Instant sign-in
- Secure by default

## 💾 Cloud Storage

Favorites are stored in Puter's **KV (Key-Value) store**:

```javascript
// Save a favorite
await window.puter.kv.set('favorites:123', JSON.stringify(favorite));

// Get all favorites
const items = await window.puter.kv.list('favorites:', true);

// Delete a favorite
await window.puter.kv.delete('favorites:123');
```

**Benefits:**
- Persists across devices
- No database setup needed
- Automatic syncing
- FREE unlimited storage

## 🤖 AI Integration

The app uses Puter's AI service to generate advice:

```javascript
const response = await window.puter.ai.chat(
  "You are a supportive life coach. Someone is struggling with...",
  { model: 'claude-sonnet-4' }
);
```

**Available Models:**
- `claude-sonnet-4` (default)
- `gpt-4`
- `llama-3.1-70b`
- And more!

## 📁 File Storage (Ready to Use)

The app includes file storage capabilities:

```javascript
// Upload a file
const file = await window.puter.fs.upload([fileBlob]);

// Read a file
const content = await window.puter.fs.read('path/to/file');

// Delete a file
await window.puter.fs.delete('path/to/file');
```

Perfect for future features like:
- Uploading mood journals
- Saving advice as files
- Sharing advice documents

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#6366f1',    // Change this!
  secondary: '#8b5cf6',  // And this!
}
```

### Change AI Model

Edit `src/services/api.js`:

```javascript
const response = await window.puter.ai.chat(prompt, {
  model: 'gpt-4'  // Change to: claude-sonnet-4, llama-3.1-70b, etc.
});
```

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

The built files will be in `dist/`

## 🚀 Deployment

Since there's no backend, you can deploy the built files to any static hosting:

- **Vercel** - `npm run build && vercel --prod`
- **Netlify** - Drag and drop the `dist/` folder
- **GitHub Pages** - Push the `dist/` folder
- **Cloudflare Pages** - Connect your repo
- **Puter itself** - Host on Puter's platform!

## 🎓 Learn More

- **Puter Documentation** - https://docs.puter.com
- **Puter GitHub** - https://github.com/heyputer/puter
- **React Docs** - https://react.dev
- **Tailwind CSS** - https://tailwindcss.com

## 💡 Tips

1. **Sign In Required** - You must sign in to save favorites
2. **Cloud Sync** - Favorites sync automatically across devices
3. **Unlimited Advice** - No rate limits, ask as much as you want!
4. **Privacy** - Your data is private and secure with Puter

## 🐛 Troubleshooting

### "Puter.js not loaded"
- Hard refresh the page (Ctrl + Shift + R)
- Check your internet connection
- Make sure Puter.js CDN is accessible

### "Failed to get advice"
- Check browser console (F12) for errors
- Make sure you're signed in
- Try a different AI model

### Favorites not saving
- Make sure you're signed in
- Check browser console for errors
- Verify Puter.js is loaded

## 🤝 Contributing

Want to improve this app? Ideas:

- Add more AI model options
- Create categories for advice
- Add export to PDF feature
- Implement advice history
- Add mood tracking
- Create sharing features

## 📄 License

MIT License - feel free to use and modify!

## 🙏 Credits

- **Puter.js** - For providing amazing free cloud services
- **Anthropic** - For Claude AI
- **Tailwind CSS** - For beautiful styling
- **React Team** - For the best UI framework

---

**Built with ❤️ using React, Tailwind, and Puter.js**

**100% Free | No Backend | No API Keys | No Hassle**

Enjoy! 🎉
