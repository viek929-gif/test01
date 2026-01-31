# Project Blueprint

## Overview
This project is a simple web application consisting of a login interface. It aims to demonstrate modern web development practices using vanilla HTML, CSS, and JavaScript.

## Current Architecture
- **Entry Point:** `index.html`
- **Styling:** `style.css` (Partially superseded by Tailwind in `index.html`)
- **Logic:** `main.js`
- **Frameworks:** Tailwind CSS (via CDN)

## Detailed Outline: Implemented Features
- **Login Screen:**
    - `index.html`: Previously contained a login form. Now updated to "Starbucks Summer Promotion" page.
    - `style.css`: Modern styling with CSS variables, Flexbox, and responsive design (May need review).
    - `main.js`: Form submission handling (log to console, alert).
    - **Update:** Changed title to "로그인".
- **Dark Mode Toggle:**
    - `index.html`: Previously had a toggle switch. Current state in `index.html` needs review to see if preserved.
    - `style.css`: Styled the toggle switch and defined dark mode styles.
    - `main.js`: Implemented logic to toggle `data-theme`.
- **Join Button:**
    - `index.html`: Previously had a "Join" button. Current state in `index.html` needs review.
    - `style.css`: Styled the `secondary-btn`.
    - `main.js`: Added an event listener for the "Join" button.
- **Starbucks Summer Promotion Page:**
    - `index.html`: Updated with new content using Tailwind CSS and Material Symbols, replacing the previous login form.

## Current Plan: (No pending changes)