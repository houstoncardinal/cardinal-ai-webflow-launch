# Environment Setup

## Quick Start

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Add your OpenAI API key to the `.env` file:**
   ```bash
   OPENAI_API_KEY=your_actual_openai_api_key_here
   OPENAI_MODEL=gpt-4o-mini
   PORT=3001
   ```

## Getting Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and replace `your_actual_openai_api_key_here` in the `.env` file

## Running the Application

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Start the AI analysis server (in a separate terminal):**
   ```bash
   npm run server
   ```

4. **Open your browser to `http://localhost:8080`**

## Security & Git Setup

### 🔒 Security Features
- ✅ `.env` files are automatically ignored by git
- ✅ API keys are never committed to the repository
- ✅ `.env.example` provides a safe template for others

### 🚀 Safe GitHub Push
Your project is now safe to push to GitHub because:
1. All sensitive files are in `.gitignore`
2. The `.env` file with your real API key stays local
3. Others can use `.env.example` to set up their own keys

### 📋 For Team Members
When someone clones this repository, they should:
1. Copy `.env.example` to `.env`
2. Add their own OpenAI API key
3. Run the application normally

## Production Deployment

For production environments (Netlify, Vercel, etc.):
1. Set environment variables in your hosting platform's dashboard
2. Never include actual API keys in your code
3. Use the same variable names as defined in `.env.example`

## Troubleshooting

- **"API key not found"**: Make sure your `.env` file exists and contains `OPENAI_API_KEY`
- **"Server connection failed"**: Ensure the server is running on port 3001
- **"Git security warning"**: This setup prevents API key exposure in git
