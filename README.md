# PrimeMobility Prototype

This is the prototype web application for **PrimeMobility**, an end-to-end EV fleet management and mobility solution provider. The application is built using React and Vite, focusing on a modern, dynamic, and premium user experience.

## Features

- **Modern UI/UX**: Designed with a sleek, dark-themed, and responsive interface tailored for desktop and mobile.
- **Dynamic Animations**: Smooth transitions, hover effects, and automatic sliders to keep users engaged.
- **Responsive Layout**: Fluid design ensuring great display across various screen sizes (max width 1224px).
- **Core Sections**:
  - Hero Section
  - Company Overview & Statistics
  - What We Do (Services grid)
  - Why PrimeMobility (Animated Slider)
  - FAQ (Dynamic question sets)
  - Contact Us

## Technologies Used

- **React 18**
- **Vite**
- **CSS3 (Vanilla)** - Extensive use of CSS variables, Flexbox, CSS Grid, and custom animations.
- **React Router DOM** - For smooth single-page application navigation and scroll restoration.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory:
   ```bash
   cd primemobility-prototype
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the local development server:

```bash
npm run dev
```

Open your browser and visit the local URL (usually `http://localhost:5173`) to view the application.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized static files ready for deployment.

## Project Structure

- `src/components/`: Reusable UI components (e.g., `ContactUs.jsx`, `Faq.jsx`)
- `src/pages/`: Main page layouts (e.g., `Home.jsx`, `AboutUs.jsx`)
- `src/index.css`: Global styling, CSS tokens, variables, and utility classes
- `src/App.jsx`: Root component and routing logic
