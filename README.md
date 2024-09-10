# 0x02. i18n

## Description

This project is a basic Flask application that serves a simple webpage with a "Welcome to Holberton" title and a "Hello world" header.

## Files

- **0-app.py:** This file contains the Flask application setup. It defines a single route (`/`) that renders the `0-index.html` template.
- **templates/0-index.html:** This HTML template defines the structure and content of the webpage, including the title and header.

## Usage

1.  **Install Flask:**
    ```bash
    pip install Flask
    ```
2.  **Run the application:**
    ```bash
    FLASK_APP=0-app.py flask run
    ```
3.  **Access the application:** Open a web browser and navigate to `http://127.0.0.1:5000/`.

## Output

The application will display a webpage with the following:

- **Title:** Welcome to Holberton
- **Header:** Hello world
