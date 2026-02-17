# Inkarr Statistics Server

A simple Express server that collects anonymous usage statistics from Inkarr installations.

## Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev
```

## Production with Docker

```bash
# Start the app and MongoDB
docker compose up -d

# View logs
docker compose logs -f
```

## API Endpoints

- `POST /api/v1/statistics` - Submit statistics from an Inkarr installation
- `GET /health` - Health check endpoint

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3001` | Server port |
| `MONGODB_URI` | `mongodb://localhost:27017/inkarr-statistics` | MongoDB connection string |
| `NODE_ENV` | `development` | Environment mode |
