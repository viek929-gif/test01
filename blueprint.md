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

## Current Plan: Add Toggle Button
**Goal:** Add a toggle button next to the "로그인" text that switches between Light and Dark modes.

**Steps:**
1.  **HTML Structure:**
    -   Modify `index.html` to wrap the `<h2>` title and a new toggle switch (checkbox) in a wrapper `<div>`.
2.  **Styling:**
    -   Update `style.css` to style the toggle switch.
    -   Adjust the layout of the header to position the toggle next to the title.
    -   Define a `.dark-mode` class (or data-theme attribute) that overrides the CSS variables for colors.
3.  **Interactivity:**
    -   Update `main.js` to toggle the theme when the switch is clicked.
