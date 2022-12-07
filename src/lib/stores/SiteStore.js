import { readable } from 'svelte/store';

export const pages = readable([
    {

        id: 'product-and-design',
        name: 'Product & Design',
    },
    {
        id: 'frontend-code',
        name: 'Frontend Code',
    },
    {
        id: 'art',
        name: 'Artwork',
    },
]);

export const content = readable([
    {
        id: 'signup-redesign',
        name: 'Signup Redesign',
        parentId: 'product-and-design',
        summary: 'Replacing a static signup with one that assists users with onboarding.',
    },
    {
        id: 'onboarding-dashboard',
        name: 'Onboarding Dashboard',
        parentId: 'product-and-design',
        summary: 'Guiding new users into setting up their account.',
    },
    {
        id: 'local-navigation',
        name: 'Local Navigation',
        parentId: 'product-and-design',
        summary: 'Exposing features and providing context where it matters.',
    },
    {
        id: 'hal-technique-for-css-architecture',
        name: 'HAL technique for CSS',
        parentId: 'frontend-code',
        summary: 'How easily memorized classes can prevent CSS bloat.',
    },
    {
        id: 'helper-loops-for-sass',
        name: 'Helper Loops for SASS',
        parentId: 'frontend-code',
        summary: 'A series of helper loops to ease in the creation of helper classes.',
    },
    {
        id: 'color-palettes-with-sass',
        name: 'Color Palettes with SASS',
        parentId: 'frontend-code',
        summary: 'Generating a range of color tones using SASS.',
    },
    {
        id: 'digital-analog',
        name: 'Digital Analog',
        parentId: 'art',
        summary: 'Combining digital and physical mediums.',
    },
]);