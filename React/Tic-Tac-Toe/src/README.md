# Tic-Tac-Toe

A simple **Tic-Tac-Toe game built with React** as part of the official React tutorial.

This project was created to practice fundamental React concepts such as components, props, state, event handling, conditional rendering, and state management between components.

## Features

* Two-player Tic-Tac-Toe gameplay
* Automatic winner detection
* Displays which player plays next
* Prevents already occupied squares from being selected
* Keeps a history of previous moves
* Allows the player to return to any previous move
* Allows restarting the game from the beginning

## Technologies Used

* React
* JavaScript
* HTML
* CSS

## React Concepts Practiced

This project helped reinforce several core React concepts:

* Creating and composing components
* Passing data with props
* Managing state with `useState`
* Handling user events
* Updating arrays without mutating state
* Lifting state up
* Conditional rendering
* Rendering lists
* Using keys when rendering lists
* Sharing state between components

## Project Structure

The main components of the application are:

### `Square`

Represents an individual square on the Tic-Tac-Toe board.

It receives its current value and click handler through props.

### `Board`

Renders the nine squares and handles the gameplay logic, including:

* Processing player moves
* Determining the next player
* Detecting a winner

### `Game`

Manages the overall game state and move history.

It allows users to navigate between previous states of the game.

## Game Logic

The game alternates between **X** and **O**.

After every move, the application checks the possible winning combinations. When three matching symbols appear in the same row, column, or diagonal, the winner is displayed.

The complete history of the game is stored in React state, allowing users to revisit previous moves.

## What I Learned

Through this project, I practiced how React applications manage changing data and how multiple components can work together through props and shared state.

The project also introduced the concept of **immutability**, where new versions of state are created instead of directly modifying existing data.

## Source

This project is based on the official React **Tic-Tac-Toe Tutorial**:

[https://react.dev/learn/tutorial-tic-tac-toe](https://react.dev/learn/tutorial-tic-tac-toe)

The project was completed for learning and practice purposes as part of my React learning journey.

