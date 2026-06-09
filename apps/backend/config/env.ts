import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
	GEMINI_KEY: z.string(),
	PORT: z.coerce.number().int().positive().default(3000),
	HOST: z.string(),
	MONGO_URL: z.string(),
});

export const env = envSchema.parse(process.env);
