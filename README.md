# Arvind Rajaraman - Personal Website

A modern, React-based personal website with a clean, newspaper-style design.

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment to GitHub Pages

The website is configured to deploy to GitHub Pages. After building:

1. Build the project:
   ```bash
   npm run build
   ```

2. The build output will be in the `build` directory.

3. For GitHub Pages, you may need to configure the repository settings to serve from the `build` directory, or use a tool like `gh-pages`:

   ```bash
   npm install --save-dev gh-pages
   ```

   Then add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

   Then deploy with:
   ```bash
   npm run deploy
   ```

## Project Structure

```
├── public/          # Static assets and HTML template
├── src/
│   ├── components/ # React components
│   ├── App.js      # Main app component
│   └── index.js    # Entry point
└── package.json    # Dependencies and scripts
```

## Design

The website features:
- Clean, newspaper-style typography using Crimson Text serif font
- Minimal, modern design inspired by ekzhang.com and elarabawy.com
- Responsive layout that works on all devices
- React components for maintainability and reusability

