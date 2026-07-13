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

  /* TODO: replace this stub with a real fetch to /api/products */

  return (
    <div className="app">
      <header className="header">
        <h1>Product Browser</h1>
        <p>Fetch, filter, and edit products from the API.</p>
      </header>

      {/* TODO: add a filter input that filters products locally */}
      <section className="controls">
        <p className="hint">Filter control goes here</p>
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
          {/* Example row shape for reference — remove once you render real data */}
          <li className="product-row example">
            <span className="product-name">Example Product</span>
            <span className="product-category">Category</span>
            <span className="product-price">$0.00</span>
            <span className="product-stock">In stock</span>
            <button type="button" disabled>
              Edit
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
