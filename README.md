# ClarityAI 🧠✨

**Real advice for real life** - An AI-powered advice platform that provides thoughtful, personalized guidance for your everyday challenges.

![ClarityAI Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=ClarityAI+-+Real+Advice+for+Real+Life)

## 📖 Overview

ClarityAI is a modern web application that helps users get practical, AI-generated advice for their personal and professional challenges. Whether you're facing a difficult decision, dealing with relationship issues, or navigating career choices, ClarityAI provides clear, actionable guidance tailored to your situation.

## ✨ Features

- **AI-Powered Advice** - Get intelligent, contextual advice powered by advanced language models
- **Favorites System** - Save helpful advice for future reference
- **User Authentication** - Secure sign-in powered by Puter.js
- **Persistent Storage** - Your favorites are safely stored and synced across sessions
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Real-time Feedback** - Toast notifications for user actions
- **Clean UI/UX** - Modern, intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Authentication & Storage:** [Puter.js](https://puter.com)
- **AI Integration:** Anthropic Claude API
- **Notifications:** react-hot-toast
- **State Management:** React Hooks + Custom Stores

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Puter account (free at [puter.com](https://puter.com))

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/clarityai.git
   cd clarityai
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
```env
   VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

4. **Run the development server**
```bash
   npm run dev
```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📱 Usage

1. **Sign in** with your Puter account
2. **Type your problem** or situation in the input field
3. **Get advice** - Receive personalized guidance from AI
4. **Save favorites** - Click the star icon to save helpful advice
5. **View favorites** - Access your saved advice anytime from the Favorites page

## 📂 Project Structure
```
clarityai/
├── src/
│   ├── components/          # React components
│   │   ├── AdviceCard.jsx
│   │   ├── AdviceInput.jsx
│   │   ├── AdviceList.jsx
│   │   ├── FavoritesList.jsx
│   │   ├── ConfirmModal.jsx
│   │   └── Header.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   └── Favorites.jsx
│   ├── services/           # API & business logic
│   │   ├── api.js
│   │   └── favorites.js
│   ├── hooks/              # Custom React hooks
│   │   └── usePuterStore.js
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── public/                 # Static assets
└── index.html
```

## 🎯 Key Features Explained

### Authentication
ClarityAI uses Puter.js for seamless authentication, providing a secure and privacy-focused user experience without traditional backend complexity.

### Favorites System
Users can save advice to their personal collection, stored securely in Puter's key-value store. Favorites persist across sessions and devices.

### Responsive Design
Built mobile-first with Tailwind CSS, ensuring a great experience on all screen sizes.

## 🔮 Future Enhancements

- [ ] Search and filter favorites
- [ ] Categories/tags for advice
- [ ] Export favorites to PDF/text
- [ ] Advice history tracking
- [ ] Share advice with others
- [ ] Dark mode support
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [Anthropic](https://www.anthropic.com) for the Claude API
- [Puter](https://puter.com) for authentication and storage infrastructure
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [React](https://react.dev) team for the amazing framework

## 📧 Contact

Muhammad Abdullah- [LinkedIN](www.linkedin.com/in/muhammad-abdullah-09390938a) - abdullah.muhamamd.xyz@gmail.com

Project Link: [https://github.com/yourusername/clarityai](https://github.com/yourusername/clarityai)

---

<div align="center">
  Made with ❤️ by Muhammad Abdullah
</div>
