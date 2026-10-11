import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({site:'https://aleksn2003.github.io',base:'/unika-beauty-prototype',vite:{plugins:[tailwindcss()]}});
