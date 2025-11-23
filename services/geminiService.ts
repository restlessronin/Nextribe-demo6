import { GoogleGenAI } from "@google/genai";
import { CountryData } from '../types';

const getAiClient = () => {
  // Ensure API key is present
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateCountryInsight = async (countryName: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return `Explore opportunities in ${countryName}.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a single, compelling sentence (max 25 words) describing the business potential for luxury hospitality expansion in ${countryName}. Focus on landscape or culture.`,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return `Expanding to the stunning landscapes of ${countryName}.`;
  }
};

export const generateApplicationMotivation = async (countryName: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "Join us to shape the future.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Give a short, inspiring 1-sentence quote for someone applying to be a brand ambassador in ${countryName}.`,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Gemini Motivation Error:", error);
    return "Join our global network today.";
  }
};