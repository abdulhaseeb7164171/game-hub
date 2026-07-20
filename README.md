# Game Hub

Game Hub is a modern video game discovery web application built with React and TypeScript. It allows users to browse, search, and filter a vast database of video games using the RAWG Video Games Database API.

## Features

- **Browse Games:** Explore a comprehensive list of video games.
- **Search:** Quickly find specific games using the search bar.
- **Filter by Genre:** Narrow down games by your favorite genres (e.g., Action, RPG, Shooter).
- **Filter by Platform:** View games available on specific platforms (e.g., PC, PlayStation, Xbox).
- **Sorting:** Sort games by relevance, date added, name, release date, popularity, or average rating.
- **Dark/Light Mode:** Seamlessly toggle between dark and light themes for optimal viewing.
- **Responsive Design:** A fully responsive user interface that works beautifully on desktop and mobile devices.

## Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling & UI Components:** [Chakra UI](https://v2.chakra-ui.com/)
- **Data Fetching:** [Axios](https://axios-http.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js or Bun installed on your machine.
- An API key from [RAWG API](https://rawg.io/apidocs). (The project currently includes a default key in `src/services/api-client.ts`, but it's recommended to replace it with your own).

### Installation

1. Clone the repository (if applicable) and navigate to the project directory:
   ```bash
   cd game-hub
   ```

2. Install dependencies:
   This project uses Bun (as indicated by the `bun.lock` file), but you can also use npm.
   ```bash
   bun install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to the local server URL (usually `http://localhost:5173`).

## Project Structure

- `src/components/`: Reusable UI components (e.g., `GameGrid`, `NavBar`, `GenreList`).
- `src/hooks/`: Custom React hooks for data fetching and state management (`useGames`, `useGenres`, `usePlatforms`).
- `src/services/`: Services for API integration (`api-client.ts`) and utility functions.
- `src/assets/`: Static assets like images and icons.
