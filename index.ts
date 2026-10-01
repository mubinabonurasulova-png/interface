interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  oldPrice: number;
  currency: string;
  inStock: true;
  quantity: number;

  dimensions: Dimensions;

  specifications: Specifications;

  colors: Colors[];

  images: Images;

  rating: Rating;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
  weight: number;
  unit: string;
}

interface Specifications {
  processor: Professor;
  memory: Memory;
  display: Display;
  battery: Battery;
}

interface Battery {
  capacity: number;
  unit: string;
  batteryLife: string;
}

interface Professor {
  brand: string;
  model: string;
  cores: number;
  threads: number;
  frequency: string;
}
interface Memory {
  ram: number;
  ramType: string;
  storage: number;
  storageType: string;
}

interface Display {
  size: number;
  resolution: Resolution;
  type: string;
  refreshRate: number;
}

interface Resolution {
  width: number;
  height: number;
}

interface Colors {
  name: string;
  hex: string;
  available: true;
}

interface Images {
  main: string;
  gallery: string[];
}

interface Rating {
  average: number;
  count: number;
}

const product: Product = {
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
