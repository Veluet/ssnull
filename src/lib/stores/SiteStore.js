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
    {
        id: 'empty',
        name: 'Empty',
    }
]);

export const content = readable([
    {
        id: 'signup-redesign',
        name: 'Signup Redesign',
        parentId: 'product-and-design',
        summary: 'Replacing a static signup with one that assists users with onboarding.',
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