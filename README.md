# Cardinal AI - Advanced SEO Analysis Platform

A cutting-edge web development and SEO analysis platform powered by AI, built with React, TypeScript, and OpenAI integration.

## 🚀 Features

- **AI-Powered SEO Analysis**: Comprehensive website analysis using OpenAI GPT-4
- **Real-time Performance Metrics**: Core Web Vitals, accessibility, and performance scoring
- **Advanced Analytics**: Detailed insights and optimization recommendations
- **Secure API Integration**: Environment-based configuration for API keys
- **Modern Tech Stack**: React, TypeScript, Vite, Tailwind CSS, shadcn-ui

## 🔧 Quick Setup

### Prerequisites
- Node.js & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- OpenAI API key ([get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd cardinal-ai-webflow-launch-6
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your OpenAI API key:
   ```bash
   OPENAI_API_KEY=your_actual_openai_api_key_here
   OPENAI_MODEL=gpt-4o-mini
   PORT=3001
   ```

4. **Start the development servers:**
   ```bash
   # Terminal 1: Frontend
   npm run dev
   
   # Terminal 2: AI Analysis Server
   npm run server
   ```

5. **Open your browser to `http://localhost:8080`**

## 🔒 Security & GitHub

This project is **safe to push to GitHub** because:
- ✅ All API keys are stored in `.env` files (ignored by git)
- ✅ Sensitive data is automatically excluded from version control
- ✅ `.env.example` provides a template without exposing secrets
- ✅ Comprehensive `.gitignore` prevents accidental key exposure

### For Contributors
When you clone this repo:
1. Copy `.env.example` to `.env`
2. Add your own OpenAI API key
3. Run the application normally

## 🛠 Technologies

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn-ui
- **AI Integration**: OpenAI GPT-4 API
- **Backend**: Express.js (for AI analysis)
- **Database**: Supabase (optional)

## 📚 Documentation

- [Environment Setup Guide](./ENVIRONMENT_SETUP.md) - Detailed setup instructions
- [API Documentation](./docs/api.md) - API endpoints and usage
- [Deployment Guide](./docs/deployment.md) - Production deployment instructions

## 🚀 Deployment

### Netlify/Vercel
1. Connect your GitHub repository
2. Set environment variables in your hosting platform:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `OPENAI_MODEL`: gpt-4o-mini (or your preferred model)
3. Deploy normally

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all API keys remain in `.env` files
5. Submit a pull request

## 📄 License

This project is proprietary. All rights reserved.

---

**Need help?** Check the [Environment Setup Guide](./ENVIRONMENT_SETUP.md) or open an issue.
