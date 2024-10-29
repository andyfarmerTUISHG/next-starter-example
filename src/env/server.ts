import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production"]),
        // OPEN_AI_API_KEY: z.string().min(1),
    },

    // Treat empty strings as undefined.
    emptyStringAsUndefined: true,
    // For Next.js >= 13.4.4, you only need to destructure client variables:
    experimental__runtimeEnv: process.env,
});

console.log(env);
