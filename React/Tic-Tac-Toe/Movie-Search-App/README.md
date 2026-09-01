# Movie Search App

A simple **movie search application built with React and Vite** that allows users to search for movies and retrieve information using the **OMDb API**.

This project was created to practice working with external APIs in React, managing application state, handling asynchronous operations, validating user input, and displaying different UI states based on API responses.

## Features

* Search for movies by title
* Fetch movie data from the OMDb API
* Display movie search results dynamically
* Input validation for empty searches
* Loading state while retrieving data
* Error handling for failed requests or invalid searches
* Conditional rendering based on the application's current state
* Reusable React components
* Responsive user interaction without page reloads

## Technologies Used

* React
* JavaScript
* Vite
* HTML
* CSS
* OMDb API
* ESLint

## React Concepts Practiced

Through this project, I practiced several important React concepts:

* Creating reusable components
* Working with props
* Managing state with `useState`
* Handling user input
* Handling form submissions
* Fetching data from an external API
* Working with asynchronous JavaScript
* Conditional rendering
* Managing loading states
* Managing error states
* Passing data between components
* Updating the interface based on API responses

## Application Flow

The user enters a movie title into the search field and submits the search.

The application validates the input before making a request to the **OMDb API**.

While the request is being processed, the application displays a loading state.

Once the API responds, the application updates its state and displays the available movie results.

If the search is invalid or an error occurs while retrieving the data, an appropriate error state is displayed instead.

## API Integration

The application communicates with the **OMDb API** to retrieve movie information based on the user's search query.

Working with the API helped me practice:

* Building API requests dynamically
* Handling asynchronous responses
* Processing returned JSON data
* Updating React state with fetched data
* Handling unsuccessful API responses
* Connecting external data to React components

## What I Learned

This project helped me understand how a React application can interact with an external API and dynamically update its interface based on returned data.

I practiced combining React components, props, and state with asynchronous JavaScript while also handling common application states such as loading, errors, empty input, and successful results.

It also helped reinforce how to structure a small React application so that data-fetching logic and user-interface behavior work together cleanly.

## Project Purpose

This project was created as part of my React learning process to gain practical experience with **API integration, state management, component-based development, and asynchronous data handling**.

It is included in my portfolio as a learning project demonstrating the application of these concepts in a functional movie search application.
