import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

// Sans ce fichier, `vite build` ne connaît ni le routage de SvelteKit ni son adaptateur : il cherche
// un index.html et échoue. Le greffon de Svelte est déclaré à côté (package.json) parce que kit le
// demande en pair : laissé à npm, il prendrait la dernière version, qui exige un vite plus récent.
export default defineConfig({ plugins: [sveltekit()] });
