import { GoogleGenAI } from "@google/genai";
import { env } from "./env";

export const gemini = new GoogleGenAI({
	apiKey: env.GEMINI_KEY,
});
