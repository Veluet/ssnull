import { readable } from 'svelte/store';

export const pages = readable([
    {

        id: 'product-and-design',
        name: 'Product & Design',
    },
    {
        id: 'frontend-coding',
        name: 'Frontend Coding',
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
    },
    {
        id: 'color-palettes-with-sass',
        name: 'Color Palettes with SASS',
        parentId: 'frontend-coding',
    },
    {
        id: 'digital-analog',
        name: 'Digital Analog',
        parentId: 'art',
    },
]);