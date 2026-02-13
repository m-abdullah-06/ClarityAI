# 🚀 Setup Guide

## Super Quick Setup (2 Minutes!)

### Step 1: Extract the ZIP
Unzip the `ai-life-advice-puter.zip` file

### Step 2: Open Terminal
```bash
cd ai-life-advice-puter
```

### Step 3: Install Dependencies
```bash
npm install
```

This will install:
- React
- React Router
- Vite
- Tailwind CSS

### Step 4: Run the App
```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 5: Open Browser
Go to: **http://localhost:5173**

## 🎉 That's It!

**No API keys needed!**
**No backend setup!**
**No configuration files!**

Just install and run! 🚀

---

## Testing the App

1. **Type a problem** in the text box
   - Example: "I'm feeling stressed about work"

2. **Click "Get Advice"**
   - Wait 2-3 seconds for AI response

3. **Read the advice**
   - You'll get 2-3 helpful pieces of advice

4. **Save your favorites**
   - Click the ⭐ star icon to save

5. **View favorites**
   - Click "Favorites" tab at the top

---

## Troubleshooting

### "Cannot find module" error?
```bash
# Make sure you're in the right folder
pwd
# Should show: /path/to/ai-life-advice-puter

# Install dependencies
npm install
```

### Page is blank?
```bash
# Check Node version (should be 18+)
node --version

# Hard refresh browser
# Windows/Linux: Ctrl + Shift + R
# Mac: Cmd + Shift + R
```

### No styling (looks ugly)?
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Puter not loading?
- Check internet connection
- Refresh the page
- Check browser console (F12) for errors

---

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## What Makes This Special?

✅ **No Backend** - Puter.js handles everything
✅ **No API Keys** - Completely free
✅ **No Database** - Uses localStorage
✅ **No Configuration** - Works out of the box

---

## Next Steps

1. ✅ Get it running (you're here!)
2. 🎨 Customize colors in `tailwind.config.js`
3. 🤖 Try different AI models in `src/services/api.js`
4. 🚀 Deploy to Vercel/Netlify
5. 📱 Share with friends!

---

**Enjoy your FREE AI Life Advice Generator!** 🎉
