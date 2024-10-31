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

### Converting `.env.example` into Environment Files

To set up your environment variables, you can convert the `.env.example` file into your own `.env` files by following these steps:

1. **Copy the `.env.example` file**:
   Create a new `.env.development` file by copying the example.
   ```bash
   cp .env.example .env.development
   ```

2. **Edit the new `.env.development` file**:
   Open `.env.development` in your favorite text editor and update the variables to suit your local development environment. Use the following format for each variable:
   ```plaintext
   VUE_APP_API_URL=http://localhost:5000/api
   VUE_APP_OTHER_VARIABLE=value
   ```

   Make sure that all environment variable names start with `VUE_APP_` so that they can be accessed within your Vue.js application.

3. **Create a production environment file (if needed)**:
   If you also need a production environment file, repeat the process:
   ```bash
   cp .env.example .env.production
   ```
   Then, edit `.env.production` similarly to include production-specific values.

### Customize Configuration

For advanced configurations, refer to the [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).
