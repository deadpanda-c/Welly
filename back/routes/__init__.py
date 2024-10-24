from flask import Blueprint
from .auth_routes import auth_bp
from .ai_routes import ai_bp
from .other_routes import other_bp

def init_routes(app):
    app.register_blueprint(auth_bp)
    app.register_blueprint(ai_bp)
    app.register_blueprint(other_bp)
