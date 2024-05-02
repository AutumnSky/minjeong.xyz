/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        includePaths: ['./src/styles'],
        prependData: `@import "variables.scss";`
    }
}

export default nextConfig