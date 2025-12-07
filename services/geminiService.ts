import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_API_KEY } from '../constants';

// Ensure the API key is present
if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
  console.warn("GEMINI_API_KEY is not set. Gemini chat functionality will be disabled.");
}

export const generateGeminiResponse = async (prompt: string): Promise<string> => {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
    return "I'm sorry, the chatbot is not configured. Please ensure the API key is set.";
  }

  // Create a new GoogleGenAI instance right before making an API call
  // to ensure it always uses the most up-to-date API key from the dialog.
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // Using gemini-2.5-flash for basic text tasks
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        // A simple system instruction for a car rental chatbot
        systemInstruction: `You are a helpful assistant for Enterprise Car Rental Services. 
        Provide concise and friendly answers about car rentals, airport pickups in the USA, 
        our services, and general travel advice. Encourage users to contact support for bookings.`,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 200, // Limit response length for chat
        thinkingConfig: { thinkingBudget: 50 }, // Set a smaller thinking budget
      }
    });

    const text = response.text;
    if (text) {
      return text;
    } else {
      console.error("Gemini API returned an empty text response.", response);
      return "I couldn't generate a response. Please try again.";
    }
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    if (error.message && error.message.includes("Requested entity was not found.")) {
      // In a real app, you might want to trigger `window.aistudio.openSelectKey()` here
      // if using Veo models and the API key was somehow invalidated.
      // For this app, we'll just inform the user.
      return "There was an issue with the API key or model configuration. Please check the setup or try again later.";
    }
    return "An error occurred while connecting to the AI. Please try again later.";
  }
};
