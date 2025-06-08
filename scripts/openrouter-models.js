// Script to show available OpenRouter models and their capabilities

console.log("🚀 OpenRouter Models Available for Resume Analysis")
console.log("=" * 50)

const models = [
  {
    name: "meta-llama/llama-3.1-8b-instruct:free",
    provider: "Meta",
    cost: "Free",
    strengths: ["Good reasoning", "Fast responses", "No cost"],
    bestFor: "General resume analysis, cost-effective solution",
  },
  {
    name: "anthropic/claude-3-haiku",
    provider: "Anthropic",
    cost: "Paid",
    strengths: ["Excellent writing analysis", "Detail-oriented", "Professional tone"],
    bestFor: "Grammar and writing quality analysis",
  },
  {
    name: "openai/gpt-4o-mini",
    provider: "OpenAI",
    cost: "Paid",
    strengths: ["Balanced performance", "Good structured output", "Reliable"],
    bestFor: "Comprehensive resume analysis",
  },
  {
    name: "google/gemini-flash-1.5",
    provider: "Google",
    cost: "Paid",
    strengths: ["Fast processing", "Good at structured data", "Multimodal"],
    bestFor: "Quick analysis and formatting feedback",
  },
]

models.forEach((model, index) => {
  console.log(`\n${index + 1}. ${model.name}`)
  console.log(`   Provider: ${model.provider}`)
  console.log(`   Cost: ${model.cost}`)
  console.log(`   Strengths: ${model.strengths.join(", ")}`)
  console.log(`   Best for: ${model.bestFor}`)
})

console.log("\n🔧 How to switch models:")
console.log("In app/api/analyze-resume/route.ts, change the model parameter:")
console.log('model: openrouter("meta-llama/llama-3.1-8b-instruct:free")')
console.log("to any of the models listed above.")

console.log("\n💡 Pro tip for hackathon:")
console.log("Start with the free Llama model, then upgrade to paid models if needed for better quality!")

console.log("\n✅ Current configuration: Using Llama 3.1 8B (Free)")
console.log("This provides excellent performance for resume analysis at no cost!")
