# Post Manager

## About
Post Manager is a responsive web application that allows users to view and search posts fetched from the JSONPlaceholder API, and to post new posts.   
   
The application is built with React, TypeScript, and Vite, utilizing Material-UI (MUI) for styling, React Query for data fetching, and Axios for HTTP requests.

<br>

## Features:

1. `Display Posts`
   - Fetches a list of posts from the JSONPlaceholder API.
   - Displays each post’s title and body in a card format.

2. `View Post Details`
   - Navigates to a detailed view when a post is clicked.
   - Displays the post’s title, body, and associated comments that are fetched from the JSONPlaceholder API (in a list format).

3. `Search Functionality`
   - Includes a search bar to filter posts by title on the client side.
     
4. `Create New Post`
   - Provides a form to add a new post with fields for title and body.

5. `Responsive App Design`
   - The app is designed in a versatile way and allows for both mobile and desktop screens. The app features a collapse menu that shows up only on smaller screens to allow for easier navigation.

6. `Client-Side Pagination`
   - Implemented pagination to organize fetched data, displaying a limited number of posts per page.

7. `Dark and Light Modes`
   - Utilizes MUI’s theming capabilities to support both dark and light modes.

8. `Animations and Transitions`
   - Incorporates animations and transitions using MUI, CSS, and React Motion to enhance user experience.

<br>

## Technologies Used

•	`React`: JavaScript library for building user interfaces.   
•	`TypeScript`: Typed superset of JavaScript that enhances code quality and maintainability.   
•	`Vite`: Next-generation frontend tooling for rapid development.   
•	`Material-UI (MUI)`: React component library for consistent and customizable design.   
•	`React Query`: Data-fetching library for managing server state in React applications.   
•	`Axios`: Promise-based HTTP client for making API requests.   
•	`React Router`: Library for routing and navigation in React applications.   
•	`React Motion`: Library for creating realistic animations in React.   

<br>

## Getting Started

Follow these steps to run the application locally:   

1.	Clone the Repository:
```
git clone https://github.com/Idan-sh/Post-Manager.git
cd Post-Manager
```

2.	Install Dependencies:
Ensure you have Node.js installed, then run:
```
npm install
```

3.	Run the Application:
```
npm run dev
```

The application will start, and you can access it at http://localhost:3000.

<br>

### Additional Notes

•	`Error Handling`: The application gracefully handles loading states and errors during data fetching.   
•	`Code Quality`: Follows best practices with clean and readable code, utilizing React functional components and hooks.   
•	`State Management`: Manages server state efficiently using React Query, providing features like caching and background updates.   
