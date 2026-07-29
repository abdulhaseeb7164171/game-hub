<div align="center">

# Game Hub

**A modern video game discovery web application built with React and TypeScript.**

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF.svg)](https://vitejs.dev/)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.x-319795.svg)](https://chakra-ui.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.x-FF4154.svg)](https://tanstack.com/query)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Features](#features) •
[Tech Stack](#tech-stack) •
[Getting Started](#getting-started) •
[Project Structure](#project-structure) •
[License](#license)

</div>

---

Game Hub is a comprehensive platform that allows users to seamlessly browse, search, and filter a vast database of video games using the [RAWG Video Games Database API](https://rawg.io/apidocs). Designed with a focus on performance and user experience, it features a sleek UI with robust state management and routing.

## Features

- **Extensive Game Library**: Browse a rich, comprehensive list of video games.
- **Advanced Search**: Quickly find specific games with real-time search functionality.
- **Dynamic Filtering**: Narrow down your search by genres (e.g., Action, RPG, Shooter) or platforms (e.g., PC, PlayStation, Xbox).
- **Flexible Sorting**: Sort game results by relevance, release date, popularity, or average rating.
- **Infinite Scrolling**: Enjoy a seamless browsing experience as games load dynamically as you scroll.
- **Dark/Light Mode**: Fully supported, seamless theme toggling for an optimal viewing experience.
- **Responsive Design**: A flawlessly responsive layout optimized for mobile, tablet, and desktop viewing.

## Tech Stack

**Frontend Framework & Tooling**
- [**React 19**](https://react.dev/): UI library for building component-driven interfaces.
- [**TypeScript**](https://www.typescriptlang.org/): Strongly typed programming language that builds on JavaScript.
- [**Vite**](https://vitejs.dev/): Next-generation frontend tooling for fast development and optimized builds.

**State Management & Data Fetching**
- [**TanStack Query (React Query)**](https://tanstack.com/query): Powerful asynchronous state management and data fetching.
- [**TanStack Router**](https://tanstack.com/router): Type-safe routing for modern React applications.
- [**TanStack Store**](https://tanstack.com/store): Lightweight state management for global application state.
- [**Axios**](https://axios-http.com/): Promise-based HTTP client for API requests.

**Styling & UI Components**
- [**Chakra UI**](https://chakra-ui.com/): Simple, modular, and accessible component library.
- [**Framer Motion**](https://www.framer.com/motion/): Production-ready animation library for React.
- [**React Icons**](https://react-icons.github.io/react-icons/): Popular icon packs inclusion.

## Getting Started

### Prerequisites

- **Node.js** (v20 or higher recommended) or **Bun**.
- An API key from the [RAWG API](https://rawg.io/apidocs).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/game-hub.git
   cd game-hub
   ```

2. **Install dependencies:**
   This project uses `bun`, but you can use `npm` or `yarn` as well.
   ```bash
   bun install
   # or
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root of the project and add your RAWG API key (you can copy `.env.example`):
   ```env
   VITE_RAWG_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```text
src/
├── assets/         # Static assets (images, icons)
├── components/     # Reusable UI components
├── data/           # Static data or mock data
├── entities/       # TypeScript interfaces and types
├── hooks/          # Custom React hooks
├── routes/         # TanStack Router route definitions
├── services/       # API clients and external service integrations
├── store.ts        # Global state management setup
└── store.actions.ts# Actions for global state
```

## Available Scripts

In the project directory, you can run:

- `bun run dev` / `npm run dev`: Starts the development server.
- `bun run build` / `npm run build`: Builds the app for production to the `dist` folder.
- `bun run lint` / `npm run lint`: Runs ESLint to check for code quality and style issues.
- `bun run preview` / `npm run preview`: Previews the production build locally.

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the issues page if you want to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
