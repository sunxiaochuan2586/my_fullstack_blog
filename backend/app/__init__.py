from flask import Flask
from flask_cors import CORS

def create_app():

    app = Flask(__name__)

    CORS(app)

    from .api.public.routes import public_api_bp

    app.register_blueprint(public_api_bp , url_prefix='/api/public')

    return app