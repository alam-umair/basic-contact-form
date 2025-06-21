# Contact Form

![Design preview for the Contact form coding challenge](./design/desktop-preview.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Accessibility](#accessibility)
- [Folder Structure](#folder-structure)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a solution to the [Frontend Mentor Contact Form Challenge](https://www.frontendmentor.io/challenges/contact-form--5v6JQb). The goal is to build a fully accessible and responsive contact form that closely matches the provided design.

## Features

- Responsive layout for desktop and mobile
- Accessible form with proper labels and roles
- Form validation for required fields and email format
- Keyboard navigation support
- Success toast message on submission
- Error messages for invalid or missing input
- Visual feedback for focus and hover states

## Screenshots

<!-- Add your screenshots here -->

![Desktop Screenshot](./design/desktop-preview.jpg)

<!-- ![Mobile Screenshot](./design/mobile-preview.jpg) -->

## Tech Stack

- HTML5
- CSS3 (custom, no frameworks)
- JavaScript (for validation, see [`assets/script/form-validation.js`](assets/script/form-validation.js))

## Getting Started

To run this project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/alam-umair/basic-contact-form.git
   ```
2. Open `index.html` in your browser.

No build tools or dependencies are required.

## Usage

- Fill out the form fields.
- Submit the form to see validation and success messages.
- All fields are required. Email must be valid. Consent checkbox must be checked.

## Accessibility

- All form fields have associated labels.
- Error and success messages use `role="alert"` for screen readers.
- Fully navigable via keyboard.
- Focus and hover states are visually distinct.

## Folder Structure

```
basic-contact-form/
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   ├── fonts/
│   └── script/
│       └── form-validation.js
├── design/
│   ├── desktop-preview.jpg
│   └── mobile-preview.jpg
├── index.html
├── README.md
└── style-guide.md
```

## Author

- [Umair Alam](https://github.com/alam-umair)

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io) for the challenge and design.
