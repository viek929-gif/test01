# Project Blueprint

## Overview
This project is a simple web application consisting of a login interface. It aims to demonstrate modern web development practices using vanilla HTML, CSS, and JavaScript.

## Current Architecture
- **Entry Point:** `index.html`
- **Styling:** `style.css`
- **Logic:** `main.js`
- **Frameworks:** None (Vanilla JS/CSS)

## Detailed Outline: Implemented Features
- **Login Screen:**
    - `index.html`: Login form with ID, Password fields, and a "Sign In" button.
    - `style.css`: Modern styling with CSS variables, Flexbox, and responsive design.
    - `main.js`: Form submission handling (log to console, alert).
    - **Update:** Changed title to "로그인".
- **Dark Mode Toggle:**
    - `index.html`: Added a toggle switch next to the "로그인" title within a `form-header` container.
    - `style.css`: Styled the toggle switch and defined dark mode styles using `[data-theme="dark"]` with CSS variables.
    - `main.js`: Implemented logic to toggle `data-theme` attribute on `body` and save preference to `localStorage`.
- **Join Button:**
    - `index.html`: Added a "Join" button (`secondary-btn`) below the "Sign In" button.
    - `style.css`: Styled the `secondary-btn` to have a distinct appearance and added spacing between the buttons.
    - `main.js`: Added an event listener for the "Join" button, showing an alert when clicked.

## Current Plan: (No pending changes)