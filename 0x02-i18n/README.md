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

## Task 3: Parametrize Templates

**`Objective`**:
Use Flask-Babel's `_()` function to parametrize your templates with message IDs (`home_title`, `home_header`). Set up a translation configuration using `babel.cfg` and extract, initialize, and compile translations.

**`Instructions`**:

- `3-app.py`: Flask app with Babel and template translation using message IDs.
- `templates/3-index.html`: HTML template that displays translated titles based on the locale.
- `babel.cfg`: Configuration file to specify where to extract translations from.
- `translations/en/LC_MESSAGES/messages.po`: English translations.
- `translations/fr/LC_MESSAGES/messages.po`: French translations.

**Steps**:

1. Create the `babel.cfg` file.
2. Extract translations using:

  ```bash
    python3 3-app.py extract
  ```

## Task 4: Force Locale with URL Parameter

**`Objective`**:
Allow users to force a specific locale by passing the `locale` parameter in the URL. If the `locale` parameter is valid, it will be used. If not, the app will fall back to the default locale selection.

**`Instructions`**:

- `4-app.py`: Flask app that allows forcing the locale via URL parameters.
- `templates/4-index.html`: HTML template with language selection based on the locale.

**Steps**:

1. Run the Flask app using the following command:

   ```python3
   python3 4-app.py
   ```
