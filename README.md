# AI Resume Analyzer

A full-stack web application that analyzes resumes using AI and provides categorized feedback for improvement. Built for the LIVE AI Lone Star 2025 Hackathon.

## Features

- 📄 PDF resume upload
- 🤖 AI-powered analysis using OpenRouter (Llama 3.1)
- 📊 Categorized feedback (Formatting, Grammar, Content, ATS optimization, Missing sections)
- 📈 Overall scoring system
- 📥 Download feedback report
- 🎨 Modern, responsive UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 15, React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **AI**: OpenRouter with Meta Llama 3.1 via Vercel AI SDK
- **PDF Processing**: Built-in text extraction (demo version)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenRouter API key (already configured in the demo)

### Installation

1. Clone or download the project
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. The OpenRouter API key is already configured for the demo
   - For production, set up environment variables in \`.env.local\`:
   \`\`\`
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Testing

1. Use the sample resume provided in \`public/sample-resume.pdf\`
2. Or upload your own PDF resume
3. Click "Analyze Resume" to get AI feedback
4. Download the feedback report if needed

## API Endpoints

- \`POST /api/analyze-resume\` - Analyzes uploaded resume and returns structured feedback

## Project Structure

\`\`\`
├── app/
│   ├── api/analyze-resume/route.ts    # Resume analysis API with OpenRouter
│   ├── globals.css                    # Global styles
│   ├── layout.tsx                     # Root layout
│   └── page.tsx                       # Main application page
├── components/ui/                     # shadcn/ui components
├── public/
│   └── sample-resume.pdf             # Sample resume for testing
└── README.md
\`\`\`

## OpenRouter Integration

This application uses OpenRouter to access Meta's Llama 3.1 model:
- **Model**: meta-llama/llama-3.1-8b-instruct:free
- **Provider**: OpenRouter (https://openrouter.ai)
- **Benefits**: Free tier access to powerful language models
- **API**: Compatible with OpenAI SDK via Vercel AI SDK

### Available Models on OpenRouter

You can easily switch to other models by changing the model parameter:
- \`meta-llama/llama-3.1-8b-instruct:free\` (Free)
- \`anthropic/claude-3-haiku\` (Paid)
- \`openai/gpt-4o-mini\` (Paid)
- \`google/gemini-flash-1.5\` (Paid)

## Features Breakdown

### Frontend Components
- **File Upload**: Drag & drop PDF upload with validation
- **Analysis Display**: Categorized feedback with severity indicators
- **Loading States**: Spinner during analysis
- **Download Feature**: Export feedback as text file

### Backend Processing
- **PDF Text Extraction**: Extracts text from uploaded PDFs
- **AI Analysis**: Uses OpenRouter to analyze resume content
- **Structured Response**: Returns categorized feedback in JSON format

### AI Analysis Categories
1. **Formatting & Structure**: Layout, organization, visual appeal
2. **Grammar & Spelling**: Language correctness and clarity
3. **Content Clarity**: Impact, achievements, action verbs
4. **ATS Keyword Optimization**: Industry keywords, searchability
5. **Missing Sections**: Professional summary, skills, certifications

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add \`OPENROUTER_API_KEY\` environment variable in Vercel dashboard (for production)
4. Deploy

### Environment Variables for Production
\`\`\`
OPENROUTER_API_KEY=your_openrouter_api_key
\`\`\`

## Hackathon Notes

This project demonstrates:
- **AI/ML Integration**: OpenRouter with Llama 3.1 for intelligent resume analysis
- **Full-Stack Development**: Next.js with API routes
- **Modern UI/UX**: Responsive design with Tailwind CSS
- **File Processing**: PDF handling and text extraction
- **Practical Application**: Solves real-world resume improvement needs
- **Cost-Effective AI**: Uses free tier models via OpenRouter

## OpenRouter Advantages

- **Free Models**: Access to powerful models without API costs
- **Model Variety**: Easy switching between different AI providers
- **Reliability**: Fallback options if one model is unavailable
- **Performance**: Optimized routing to fastest available endpoints

## Future Enhancements

- Real PDF parsing with libraries like pdf-parse
- Multiple AI model support and comparison
- Resume template suggestions
- Job description matching
- User accounts and history
- Batch processing
- More detailed ATS scoring
- Model performance comparison

## License

MIT License - feel free to use for your hackathon projects!
