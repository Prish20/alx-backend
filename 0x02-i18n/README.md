# 0x02-i18n

## Task 0: Basic Flask App

**`Objective`**:
Create a simple Flask application that serves a basic HTML page with a welcome title and a header.

**`Instructions`**:

- `0-app.py`: The Flask app with a single route `/` that renders the `0-index.html` template.
- `templates/0-index.html`: The HTML file that displays the title "Welcome to Holberton" and the header "Hello world".

**Steps**:

1. Run the Flask app using the following command:

  ```bash
    python3 0-app.py
  ```

## Task 1: Basic Babel Setup

**`Objective`**:
Set up the Flask-Babel extension to add support for internationalization. Define a `Config` class with available languages (`"en"` and `"fr"`), and set the default locale to `"en"` and timezone to `"UTC"`.

**`Instructions`**:

- `1-app.py`: The Flask app with a single route `/` that renders the `1-index.html` template.
- Flask-Babel installed using:

```bash
pip3 install flask_babel==2.0.0
```

## Task 2: Get Locale from Request

**`Objective`**:
Create a `get_locale` function using the `babel.localeselector` decorator to determine the best match for the user's language based on the request's `Accept-Language` headers.

**`Instructions`**:

- `2-app.py`: Flask app with Babel setup and locale selection based on the user's request.
- `templates/2-index.html`: HTML template rendered by the app, with the language attribute set based on the selected locale.

**Steps**:

1. Run the Flask app using the following command:

  ```bash
    python3 2-app.py
  ```
