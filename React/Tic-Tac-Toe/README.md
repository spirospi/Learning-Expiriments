# Tic-Tac-Toe

A simple **Tic-Tac-Toe game built with React** as part of the official React tutorial.

This project was created to practice fundamental React concepts such as components, props, state, event handling, conditional rendering, and state management between components.

In addition to completing the main tutorial, I also completed **Challenge #1** from the official React Tic-Tac-Toe exercises, adding additional functionality to the move history.

## Features

* Two-player Tic-Tac-Toe gameplay
* Automatic winner detection
* Displays which player plays next
* Prevents already occupied squares from being selected
* Keeps a history of previous moves
* Allows the player to return to any previous move
* Allows restarting the game from the beginning
* Displays the current move as **"You are at move #..."** instead of showing a navigation button

## Additional Challenge

### Challenge #1 – Current Move Indicator

After completing the main tutorial, I implemented the first additional challenge provided by the official React tutorial.

Instead of displaying a button for the move that the player is currently viewing, the application displays:

`You are at move #...`

The other moves remain available as buttons, allowing the user to navigate through the game's history.

This required checking which move corresponds to the current state and conditionally rendering either the current-move message or the navigation button.

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
* Working with game history and previous state
* Conditionally rendering different UI elements based on the current state

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

It allows users to navigate between previous states of the game and identifies the currently selected move.

## Game Logic

The game alternates between **X** and **O**.

After every move, the application checks the possible winning combinations. When three matching symbols appear in the same row, column, or diagonal, the winner is displayed.

The complete history of the game is stored in React state, allowing users to revisit previous moves.

When viewing the current move, the application displays a text indicator instead of a navigation button as part of the additional challenge implementation.

## What I Learned

Through this project, I practiced how React applications manage changing data and how multiple components can work together through props and shared state.

The project also introduced the concept of **immutability**, where new versions of state are created instead of directly modifying existing data.

By completing the additional challenge, I also practiced applying **conditional rendering** independently to modify the application's interface based on its current state.

## Source

This project is based on the official React **Tic-Tac-Toe Tutorial**:

[https://react.dev/learn/tutorial-tic-tac-toe](https://react.dev/learn/tutorial-tic-tac-toe)

The main application was created by following the tutorial, while **Challenge #1 was completed as an additional exercise** to practice and reinforce the concepts learned.

This project is included for learning and practice purposes as part of my React learning journey.

[1]: https://react.dev/learn/tutorial-tic-tac-toe?utm_source=chatgpt.com "Tutorial: Tic-Tac-Toe"

