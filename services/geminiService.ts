
import { GoogleGenAI } from "@google/genai";
import { PROFILE } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userInput: string) => {
  if (!process.env.API_KEY) {
    return "The AI Assistant is currently in preview mode (API Key missing). Please contact Govind directly!";
  }

  const systemInstruction = `
    You are 'Govind-Bot', the AI-powered assistant for Govind's professional portfolio.
    Your goal is to represent Govind and answer questions from recruiters and potential clients.
    
    Here is Govind's information:
    - Name: ${PROFILE.name}
    - Current Title: ${PROFILE.title}
    - About: ${PROFILE.about}
    - Key Skills: ${PROFILE.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('; ')}
    - Experience: ${PROFILE.experience.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
    
    Guidelines:
    1. Be professional, friendly, and concise.
    2. If someone asks for a resume, mention they can click the 'Download Resume' button on the portfolio.
    3. If they ask about salary or contact details not provided, suggest they email Govind at ${PROFILE.contact.email}.
    4. Highlight Govind's problem-solving skills and technical depth.
    5. Keep responses short and impactful.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Can you try rephrasing?";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I am currently experiencing some technical difficulties. Please try again later or reach out to Govind directly.";
  }
};
