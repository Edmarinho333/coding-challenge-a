const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Home",
  "Sports",
  "Books",
  "Toys",
  "Grocery",
  "Beauty",
];

const ADJECTIVES = [
  "Classic",
  "Modern",
  "Compact",
  "Premium",
  "Eco",
  "Deluxe",
  "Essential",
  "Pro",
  "Lite",
  "Ultra",
];

const NOUNS = [
  "Lamp",
  "Jacket",
  "Speaker",
  "Notebook",
  "Bottle",
  "Chair",
  "Backpack",
  "Headphones",
  "Mug",
  "Keyboard",
  "Sneakers",
  "Monitor",
  "Blanket",
  "Camera",
  "Watch",
];

/**
 * Generates a deterministic list of products.
 * @param {number} count
 * @returns {Array<{ id: number, name: string, category: string, price: number, inStock: boolean }>}
 */
export function generateProducts(count = 300) {
  const products = [];

  for (let i = 1; i <= count; i++) {
    const adjective = ADJECTIVES[i % ADJECTIVES.length];
    const noun = NOUNS[i % NOUNS.length];
    const category = CATEGORIES[i % CATEGORIES.length];
    const price = Number((((i * 17) % 200) + 4.99).toFixed(2));
    const inStock = i % 5 !== 0;

    products.push({
      id: i,
      name: `${adjective} ${noun} ${i}`,
      category,
      price,
      inStock,
    });
  }

  return products;
}

export const products = generateProducts(300);
