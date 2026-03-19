export interface Product {
    id: string;
    product_name: string;
    category: string;
    image: string;
    mounting?: string;
    light_distribution?: string;
    light_source?: string;
    ip?: string | number | null;
    cri?: number | string;
    comments?: string;
    variants?: ProductVariant[];
    // UI specific fields (computed)
    img: string;
    spec: string;
    price: string;
}

export interface ProductVariant {
    code: string;
    diameter?: number | string;
    height: number | string;
    power: number | string;
    lumens: number | string;
    cct?: number | string;
    length?: number | string;
    width?: number | string;
}

