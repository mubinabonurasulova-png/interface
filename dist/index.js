"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product = {
    id: 101,
    name: "MacBook Pro 14",
    slug: "macbook-pro-14",
    price: 2499,
    oldPrice: 2799,
    currency: "USD",
    inStock: true,
    quantity: 15,
    dimensions: {
        width: 31.26,
        height: 1.55,
        depth: 22.12,
        weight: 1.6,
        unit: "cm",
    },
    specifications: {
        processor: {
            brand: "Apple",
            model: "M3 Pro",
            cores: 12,
            threads: 12,
            frequency: "4.05 GHz",
        },
        memory: {
            ram: 18,
            ramType: "Unified Memory",
            storage: 512,
            storageType: "SSD",
        },
        display: {
            size: 14.2,
            resolution: {
                width: 3024,
                height: 1964,
            },
            type: "Liquid Retina XDR",
            refreshRate: 120,
        },
        battery: {
            capacity: 72.4,
            unit: "Wh",
            batteryLife: "18 hours",
        },
    },
    colors: [
        {
            name: "Space Black",
            hex: "#1D1D1F",
            available: true,
        },
        {
            name: "Silver",
            hex: "#E3E3E0",
            available: true,
        },
    ],
    images: {
        main: "https://example.com/macbook-main.jpg",
        gallery: [
            "https://example.com/macbook-1.jpg",
            "https://example.com/macbook-2.jpg",
            "https://example.com/macbook-3.jpg",
        ],
    },
    rating: {
        average: 4.8,
        count: 342,
    },
};
console.log(product);
//# sourceMappingURL=index.js.map