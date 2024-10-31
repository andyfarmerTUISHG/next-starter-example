import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production"]),
        GOOGLE_CLIENT_ID: z.string(),
        GOOGLE_CLIENT_SECRET: z.string(),
        NEXTAUTH_URL: z.string(),
        NEXTAUTH_SECRET: z.string().min(22),
        // OPEN_AI_API_KEY: z.string().min(1),
				DB_HOST: z.string(),
				DB_USER: z.string(),
				DB_PASSWORD: z.string(),
				DB_NAME: z.string(),
				DB_PORT: z.coerce.number(),
				DATABASE_URL: z.string().url(),
    },

    // Treat empty strings as undefined.
    emptyStringAsUndefined: true,
    // For Next.js >= 13.4.4, you only need to destructure client variables:
    // eslint-disable-next-line
    experimental__runtimeEnv: process.env,
    // Called when the schema validation fails.
    onValidationError: (error: ZodError) => {
        console.error(
            "❌ Invalid environment variables:",
            error.flatten().fieldErrors
        );
        //prevent Zod Stack Trace Message
        process.exit(1);
    },
    // // Called when server variables are accessed on the client.
    // onInvalidAccess: (variable: string) => {
    //     throw new Error(
    //         "❌ Attempted to access a server-side environment variable on the client"
    //     );
    // },
});

