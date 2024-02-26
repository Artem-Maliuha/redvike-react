/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        pokemonApiUrl: process.env.POKEMON_API_URL,
        pokemonLimit: process.env.POKEMON_LIMIT,
        pokemonByPage: process.env.POKEMON_BY_PAGE,
    },
};

export default nextConfig;
