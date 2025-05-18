// next.config.mjs
/** @type {import('next').NextConfig} */
import { env } from 'process';
const nextConfig = {
    output: env.NODE_ENV === "production" ? 'export' : 'standalone',
    images: { 
        unoptimized: env.NODE_ENV === "production" && true 
    }  
  };
  
  export default nextConfig;
  