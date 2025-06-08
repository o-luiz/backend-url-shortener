import { z } from 'zod/v4';

export const envSchema = z.object({
  DB_USER: z.string().default('postgres'),
  DB_PASSWORD: z.string().default('postgres'),
  DB_HOST: z.string().default('localhost:5432'),
  DB_NAME: z.string().default('url_shortener'),
  DB_URL: z.string(),

  PORT: z.coerce.number().optional().default(3333),
});

export type Env = z.infer<typeof envSchema>;
