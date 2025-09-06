# Environment Setup

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

## Getting Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign in or create an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and replace `your_openai_api_key_here` in the `.env` file

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Start the AI analysis server (in a separate terminal):
   ```bash
   npm run server
   ```

4. Open your browser to `http://localhost:8080`

## Security Notes

- Never commit your actual API keys to version control
- The `.env` file is already included in `.gitignore`
- Use environment variables for production deployments
