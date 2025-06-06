import type { NextConfig } from "next";
<<<<<<< HEAD

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
=======
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
>>>>>>> 95b4a54214a9aac3a6cce848168f13956e1fcbc1
