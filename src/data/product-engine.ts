/**
 * =========================================================================
 * CENTRALIZED PRODUCT ENGINE
 * =========================================================================
 * 
 * This file handles all data loading, transformation, and filtering.
 * It's where you "clean" your JSON data before the frontend sees it.
 */

import productsData from '../../CONNEX_PRODUCTS.json';
import type { Product } from '../types/product';

// Transformation: Cleans raw JSON into typed Product objects
export const ALL_PRODUCTS: Product[] = (productsData as any[]).map((p, idx) => ({
    ...p,
    id: `${p.product_name}-${idx}`,
    img: `/products/${p.image}`,
    spec: `${p.light_source || 'LED'} / ${p.cri || '85'} CRI`,
    price: "₹---", // Placeholder for dynamic pricing
}));

// Helper: Get categories for filtering
export const ALL_CATEGORIES = [
    'All Specimens',
    ...Array.from(new Set(ALL_PRODUCTS.map(p => p.category)))
];

// Logic: Filters products by category
export const filterProductsByCategory = (category: string): Product[] => {
    if (category === 'All Specimens') return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter(p => p.category === category);
};

// Logic: Handles finding a single product (used in ProductDetail.tsx)
export const findProductById = (id: string | undefined): Product | undefined => {
    if (!id) return undefined;
    const decodedId = decodeURIComponent(id);
    return ALL_PRODUCTS.find(p =>
        p.product_name === decodedId ||
        encodeURIComponent(p.product_name) === id ||
        p.product_name.replace(/\s+/g, '-').toLowerCase() === decodedId.replace(/\s+/g, '-').toLowerCase()
    );
};
