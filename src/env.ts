
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {

  },
 
  clientPrefix: "PUBLIC_",

  client: {
    PUBLIC_NEXT_BASE_URL : z.string().url(),
    PUBLIC_NEXT_WIX_CLIENT_ID: z.string().min(1),
    
  },

  runtimeEnv: {
    PUBLIC_NEXT_BASE_URL: process.env.PUBLIC_NEXT_BASE_URL,
    PUBLIC_NEXT_WIX_CLIENT_ID:process.env.PUBLIC_NEXT_WIX_CLIENT_ID
  },

});