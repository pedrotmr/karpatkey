# CryptoCustodian

## Overview

CryptoCustodian is a web application designed to provide an intuitive and user-friendly interface for managing digital assets. This project includes both a backend API and a frontend interface, focusing on the Assets Overview Screen. The application is built using modern web technologies and follows best practices for performance and user experience.

## Project Structure

- **Backend**: Built with Node.js, Express, and TypeScript.
- **Frontend**: Built with React, TypeScript, and Tailwind CSS.
- **Tests**: Includes unit tests for both backend and frontend, as well as a UI test.

## Prerequisites

- Node.js
- Docker

## Running the Project

1. **Clone the repository**:

   ```sh
   git clone https://github.com/pedrotmr/karpatkey
   
   cd karpatkey
   ```

2. **Build and run the project using Docker Compose**:

   ```sh
   docker-compose up --build
   ```

3. **Access the application**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:3001](http://localhost:3001)

## Design Decisions

### Backend

- **Express and TypeScript**: Chosen for their robustness and type safety, which help in building scalable and maintainable APIs.

- **Jest**: Used for unit testing to ensure the reliability of the backend logic.

### Frontend

- **React and TypeScript**: Selected for their component-based architecture and type safety, which enhance code maintainability and scalability.

- **Tailwind CSS**: Utilized for its utility-first approach, allowing for rapid and consistent styling.

- **React Query**: Employed for data fetching and state management, providing efficient and declarative data handling.

### Docker

- **Docker Compose**: Used to manage multi-container Docker applications, simplifying the setup and ensuring consistency across different environments.

## API Endpoints

- **GET /assets**: Fetches a list of assets with pagination, filtering, and sorting options.

## Frontend Features

- **Assets Overview Screen**: Displays a list of assets with columns for asset name, current value, performance, and APR. Includes filter and sort options, as well as graphical representations of asset performance over time.

## Tests

- **Backend Tests**: Located in `backend/src/assets/assets.test.ts` (startLine: 1, endLine: 73).

- **Frontend Tests**: Includes unit tests for components and a UI test for the Assets Overview Screen.

## Brand Element Usage

The design incorporates Karpatkey's brand elements, adapting them to fit the web3 context. This includes the use of brand colors, fonts, and logos to ensure a consistent and recognizable user experience.

## Conclusion

This project aims to provide a seamless and efficient experience for managing digital assets, leveraging modern web technologies and best practices. The focus on the Assets Overview Screen demonstrates the potential for a comprehensive and user-friendly interface for CryptoCustodian.
