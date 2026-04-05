import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,

    // ===========remotePatterns can be used only with <img> but not with <Image /> in docker.
    // remotePatterns:[
    //   {
    //     protocol:'http',
    //     hostname:'localhost',
    //     port:'8000'
    //   }
    // ]
  },
};

export default nextConfig;