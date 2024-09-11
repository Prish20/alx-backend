#!/usr/bin/env python3
"""
This module creates a Flask app with
Babel setup and locale selection from request.
"""

from flask import Flask, render_template, request
from flask_babel import Babel


class Config:
    """
    Configuration class for Flask app.
    Defines available languages and sets default locale and timezone.
    """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)

# Instantiate Babel
babel = Babel(app)


@babel.localeselector
def get_locale() -> str:
    """
    Selects the best match for the
    language from the request's Accept-Language headers.

    Returns:
        str: The best match for the supported languages.
    """
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def index() -> str:
    """
    Renders the index page and passes the selected locale to the template.

    Returns:
        str: The rendered HTML template for the index page.
    """
    locale = get_locale()
    return render_template('2-index.html', locale=locale)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
