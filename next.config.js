const withMDX = require('@next/mdx')

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

module.exports = withMDX({
  extension: /\.mdx?$/,
})(nextConfig); 