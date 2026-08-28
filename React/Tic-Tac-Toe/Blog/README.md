# React Blog

A simple **blog application built with React** while following a tutorial by **The Net Ninja**.

This project was created to practice core React concepts and understand how a small React application can be structured using reusable components, routing, state, and data fetching.

## Features

* Displays a list of blog posts
* View individual blog posts
* Create new blog posts
* Delete blog posts
* Navigation between different pages
* Dynamic routing for individual blog entries
* Loading and error handling when fetching data

## Technologies Used

* React
* JavaScript
* HTML
* CSS
* React Router
* JSON Server

## React Concepts Practiced

Through this project, I practiced several important React concepts:

* Creating reusable components
* Working with props
* Managing state with `useState`
* Using `useEffect`
* Handling user events
* Working with forms
* Conditional rendering
* Rendering lists
* Creating custom hooks
* Fetching data
* React Router and client-side navigation
* Dynamic route parameters
* Programmatic navigation

## Project Structure

The application is divided into reusable React components responsible for different parts of the blog.

### Home

Displays the available blog posts and handles the main blog listing.

### Blog Details

Displays the full content of an individual blog post using its unique route parameter.

### Create

Contains a form that allows a new blog post to be created.

### Navbar

Provides navigation between the different pages of the application.

### Custom Hooks

The project uses a custom data-fetching hook to separate reusable fetching logic from the UI components.

## Data Handling

Blog posts are retrieved from a local REST-style API using **JSON Server**.

The application performs operations such as:

* Fetching blog posts
* Fetching individual posts
* Creating new posts
* Deleting posts

This helped me practice how React applications communicate with external data sources and update the user interface based on asynchronous operations.

## What I Learned

This project helped me better understand how multiple React concepts work together inside a complete application rather than as isolated examples.

I practiced managing component state, sharing data through props, using lifecycle-related logic with `useEffect`, building reusable custom hooks, handling forms, and implementing navigation with React Router.

It also gave me practical experience working with asynchronous data and organizing a React application into reusable components.

## Source

This project was built while following the **React tutorial by The Net Ninja**.

The project is included in my learning projects as practical experience with React development and application structure.

