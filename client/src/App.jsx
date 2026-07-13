import { useEffect, useState } from "react";

/**
 * Coding challenge starter.
 *
 * TODO for candidates:
 * 1. Fetch products from GET /api/products and store them in state.
 * 2. Render the full list of products.
 * 3. Add a local text filter (e.g. by name or category) — no extra API calls.
 * 4. Allow editing one field on a product (e.g. name or price) and update the list in local state.
 */
export default function App() {
  const [products, setProducts] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);
const [filter, setFilter] = useState("");

  /* TODO: replace this stub with a real fetch to /api/products */

  useEffect(() => {
  async function loadProducts() {
    try {
      const response = await fetch("/api/products");

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  loadProducts();
}, []);

const filteredProducts = products.filter((product) => {
  const searchText = filter.toLowerCase();

  return (
    product.name.toLowerCase().includes(searchText) ||
    product.category.toLowerCase().includes(searchText)
  );
});

function handleEdit(product) {
  const newName = window.prompt("Enter a new product name:", product.name);

  if (!newName || newName.trim() === "") {
    return;
  }

  setProducts((currentProducts) =>
    currentProducts.map((item) =>
      item.id === product.id
        ? { ...item, name: newName.trim() }
        : item
    )
  );
}


  return (
    <div className="app">
      <header className="header">
        <h1>Product Browser</h1>
        <p>Fetch, filter, and edit products from the API.</p>
      </header>

      {/* TODO: add a filter input that filters products locally */}
      <section className="controls">
  <input
    type="text"
    placeholder="Filter by name or category"
    value={filter}
    onChange={(event) => setFilter(event.target.value)}
  />
</section>

      <section className="list-section">
        {loading && <p>Loading products…</p>}
        {error && <p className="error">Error: {error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="hint">
            No products yet. Wire up the fetch in <code>App.jsx</code> to load
            data from <code>/api/products</code>.
          </p>
        )}

        {/* TODO: map over (filtered) products and render each row */}
        {/* TODO: add an edit affordance per row and update local state on save */}
        <ul className="product-list">
  {filteredProducts.map((product) => (
    <li key={product.id} className="product-row">
      <span className="product-name">{product.name}</span>

      <span className="product-category">
        {product.category}
      </span>

      <span className="product-price">
        ${product.price.toFixed(2)}
      </span>

      <span className="product-stock">
        {product.inStock ? "In stock" : "Out of stock"}
      </span>

      <button type="button" onClick={() => handleEdit(product)}>
  Edit
</button>
    </li>
  ))}
</ul>
      </section>
    </div>
  );
}
