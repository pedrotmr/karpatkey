# Backend

This is the backend service for our application, built with Node.js, Express, and TypeScript. It provides APIs for managing assets and includes testing and development configurations.

## Quick Start

1. Install dependencies: `npm install`
2. Start the application: `npm start`
3. Run tests: `npm test`

## Key Features

- Asset management API
- TypeScript configuration
- Jest for testing
- Docker support

## API Endpoints

### GET /assets

Fetches assets with optional pagination, filtering, and sorting.

Query parameters:

- `page`, `limit`: Pagination
- `type`: Filter by asset type
- `sort`, `order`: Sorting options

## Development

- Uses Nodemon for hot-reloading
- Docker support for containerized development

For detailed configuration and usage, refer to the respective configuration files in the project root.
