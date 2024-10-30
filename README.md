# Email Vault Frontend

A Vue.js application with hot-reloading for development and optimized build support for production.

## Project Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:NabeekhAbid/email-vault-frontend.git
   cd email-vault-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start a local server with hot-reloading:
```bash
npm run serve
```

The application will be available at [http://localhost:8080](http://localhost:8080).

### Build for Production

Compile and minify the project for production deployment:
```bash
npm run build
```

The output will be located in the `dist` folder, ready to be deployed to a web server.

### Linting and Formatting

Lint and fix files using ESLint:
```bash
npm run lint
```

### Environment Configuration

Configure environment variables by creating `.env` files (e.g., `.env.development` and `.env.production`) and reference them in the project as needed.

### Customize Configuration

For advanced configurations, refer to the [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).
