from flask import Flask ,render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///Not.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Todo(db.Model):
    sno = db.Coloumn(db.Integer, primary_key=True)
    title
@app.route("/")
def hello_world():
    return render_template('main.html')
    return "<p>Hello, World!</p>"

@app.route("/products")
def products():
    return "This is product page"

if __name__=="__main__":
    app.run(debug=True, port=8000)