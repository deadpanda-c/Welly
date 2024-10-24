from flask import Flask
from config import Config
from extensions import db, bcrypt, jwt
from routes import init_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialisation des extensions
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    # Initialisation des routes
    init_routes(app)

    return app

if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        db.create_all()  # Crée la base de données avec les modèles
    app.run(debug=True)
