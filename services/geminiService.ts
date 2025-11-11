
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `You are a world-class prompt engineering expert. Your task is to refine a user's prompt to make it more effective for a large language model.
The refined prompt must be clear, concise, specific, and provide sufficient context for the AI to generate a high-quality, relevant response.
Analyze the user's intent and improve upon their prompt.
Do NOT answer the user's prompt. Only provide the refined version of the prompt itself.
The output should be only the refined prompt text, without any additional explanations, introductions, or markdown formatting like "Refined Prompt:".`;

export const refinePrompt = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `User Prompt: "${prompt}"`,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 0.9,
            topK: 40,
        },
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error refining prompt:", error);
    throw new Error("Failed to communicate with the AI. Please check your API key and try again.");
  }
};
