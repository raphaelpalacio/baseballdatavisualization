```markdown
# Baseball Data Dashboard

This project is a web application for visualizing baseball data, including information about batters and pitchers.
The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Material UI for styling and components.

## Features

- Displays unique batter and pitcher combinations.
- Interactive table rows allow you to navigate to detailed information about each batter or pitcher.
- Styled with a dark navy and red theme for a sleek, data-focused appearance.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js and npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/baseball-data-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd baseball-data-dashboard
   ```

3. Install the dependencies:

   ```bash
   npm install
   npm install @mui/material xlsx
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload if you make changes to the source files. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more details.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you need to customize the build configuration, you can use `eject` to gain full control over the setup. This command will copy all the configuration files and dependencies directly into your project, giving you more flexibility. However, this is generally only recommended for advanced users.

## Project Structure

- **`src/components/HomePage.js`**: Displays a list of unique batter and pitcher combinations.
- **`src/components/DetailPage.js`**: Shows detailed data for each batter or pitcher.
- **`src/styles/theme.css`**: Contains global styles, including custom color schemes and typography.
- **`src/data/dataLoader.js`**: Function for loading and parsing the baseball data file (e.g., `BattedBallData.xlsx`).

## Styling and Theming

The project uses Material UI for UI components and custom CSS for theme styling. The primary colors are set to a dark navy background and red headers for a data-focused appearance.

## Learn More

To learn more about `Create React App`, visit the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). For React, check out the [React documentation](https://reactjs.org/).