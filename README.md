# Post Manager

## About
Post Manager is a responsive web application that allows users to view and search posts fetched from the JSONPlaceholder API, and to post new posts.   
   
The application is built with React, TypeScript, and Vite, utilizing Material-UI (MUI) for styling, React Query for data fetching, and Axios for HTTP requests.

<img width="1552" alt="Screenshot 2025-01-14 at 18 53 12" src="https://github.com/user-attachments/assets/d22cbffe-f174-4d92-ab20-59ada31b9c84" />

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

•	`React`: JavaScript library for building responsive user interfaces.   
•	`TypeScript`: A typed superset of JavaScript that enhances code quality and maintainability.   
•	`Vite`: Next-generation frontend tooling for rapid development.   
•	`Material-UI (MUI)`: React component library for consistent and customizable design, that allows for faster development.   
•	`React Query`: Data-fetching library for managing server state in React applications.   
•	`Axios`: Promise-based HTTP client for making API requests.   
•	`React Router`: Library for routing and navigation in React applications.   
•	`React Motion`: Library for creating realistic animations in React.   

<br>

## Demo

### View Posts and Search
![ezgif-3-0b0b337fcf](https://github.com/user-attachments/assets/d8e4023e-3793-4375-b9dd-bb71a6b34ebb)

<br>

### Create New Post and View Post Details
![ezgif-3-3b9f30b5d0](https://github.com/user-attachments/assets/19860fac-8e19-48d8-918d-4e5fc5046eaf)

<br>

### Dark and Light Modes
![ezgif-3-b364836480](https://github.com/user-attachments/assets/03691f54-8fcd-40a3-aa4a-9e79757f2beb)

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
> Note: In case the port '3000' is already taken by another process, the app will run on a different port, which will be specified in the terminal in which the app is run.

<br>

### Additional Notes

•	`Error Handling`: The application gracefully handles loading states and errors during data fetching.   
•	`Code Quality`: Follows best practices with clean and readable code, utilizing React functional components and hooks.   
•	`State Management`: Manages server state efficiently using React Query, providing features like caching and background updates.   
