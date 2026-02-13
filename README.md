# द अल्फा क्लासेज (The ALPHA CLASSES)

## How to run

**Do not** open `index.html` directly or use a plain static server on the project folder — that causes a MIME type error because the app uses JSX and must be built/served by Vite.

- **Development:** From the project folder run:
  ```bash
  npm start
  ```
  or `npm run dev`, then open **http://localhost:5173**

- **Test production build:** Run `npm run build`, then `npm run preview` and open the URL shown (or serve the `dist` folder).

- **Deploy:** Use the built output. Netlify and Vercel are configured to run `npm run build` and publish the `dist` folder.
