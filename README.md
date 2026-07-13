# Full-Stack Coding Challenge

Build a small product browser with a React frontend and a Hono API.

**Timebox:** about 30-45 minutes.

## Setup

From the repo root:

```bash
npm run install:all
npm run dev
```

This starts:

- API at [http://localhost:3001](http://localhost:3001)
- React app at [http://localhost:5173](http://localhost:5173)

You can also run each side separately with `npm run dev:server` and `npm run dev:client`.

## API

`GET /api/products` returns a JSON array of ~300 products:

```json
[
  {
    "id": 1,
    "name": "Classic Lamp 1",
    "category": "Electronics",
    "price": 21.99,
    "inStock": true
  }
]
```

The Vite dev server proxies `/api` to the backend, so the client can call `fetch("/api/products")`.

## Your tasks

Open `client/src/App.jsx` and complete the following:

1. **Fetch** — Load products from `GET /api/products` and store them in React state.
2. **Render** — Display the full product list (name, category, price, stock).
3. **Filter** — Add a local text filter (for example by name or category). Do **not** call the API again to filter.
4. **Edit** — Let the user edit one field on a product (name or price is fine) and update the list in **local state** only. Persistence to the server is not required.

There is also a bug in `server/index.js` that prevents the products endpoint from returning the shape documented above. Find and fix it.

Starter TODOs and an example row are already in `App.jsx`.

Focus on clear React state handling and a working UI.
