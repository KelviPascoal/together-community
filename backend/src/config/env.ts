import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default('3001'),
  JWT_SECRET: z.string(),
});

const env = envSchema.parse(process.env);

export const envConfig = {
  databaseUrl: env.DATABASE_URL,
  nodeEnv: env.NODE_ENV,
  port: env.PORT,
  jwtSecret: env.JWT_SECRET,
};
