/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        pokemonApiUrl: process.env.POKEMON_API_URL,
        pokemonLimit: 150,
        pokemonByPage: 20,
    },
    rewrites: () => [{
        source: '/',
        destination: '/1'
    }]
};

export default nextConfig;
