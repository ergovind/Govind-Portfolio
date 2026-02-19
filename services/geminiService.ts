
import { GoogleGenAI } from "@google/genai";
import { PROFILE } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userInput: string) => {
  if (!process.env.API_KEY) {
    return "The AI Assistant is currently in preview mode. Please reach out to Govind directly!";
  }

  const systemInstruction = `
    You are 'Govind-Bot', the professional AI representative for Govind Kumar Singh.
    
    Professional Persona:
    - Current Role: ${PROFILE.title} at MARGSOFT Technologies.
    - Expertise: Bridging Mechanical Engineering rigor with IT Project Management agility.
    - Key Strength: Successful delivery of large-scale Government of UP projects (Mine Mitra, Mineral Mart, DBT systems).
    - Communication Style: Professional, reliable, structured, and focused on value delivery.

    Knowledge Base:
    - Education: MBA in Operations Management (IGNOU) and B.Tech in Mechanical Engineering.
    - Experience: 11+ years total, with 8 years specifically in IT Project Coordination.
    - Technical: SQL Server, Mockups (Balsamiq), SRS/URS documentation, and industrial automation (PLC/SCADA).

    Guidelines:
    1. Answer questions about Govind's career journey from Mechanical Engineer to IT Manager.
    2. Highlight his ability to handle complex documentation like SRS, URS, and user manuals.
    3. If asked about contact, provide his email: ${PROFILE.contact.email} or mention his LinkedIn.
    4. Maintain a tone that suggests high competence in project planning and client relations.
    5. Keep responses concise (under 3 sentences where possible).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.6,
      },
    });

    return response.text || "I'm having trouble retrieving that information. Please try rephrasing.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I'm currently resting. Please feel free to email Govind directly at " + PROFILE.contact.email;
  }
};
