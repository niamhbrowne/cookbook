import os
from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/cuisine/american")
def american():
    return render_template("american.html")

@app.route("/cuisine/chinese")
def chinese():
    return render_template("chinese.html")

@app.route("/cuisine/italian")
def italian():
    return render_template("italian.html")

@app.route("/cuisine/mexican")
def mexican():
    return render_template("mexican.html")

@app.route("/add/create-your-own-recipe")
def add():
    return render_template("add.html")

if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=False)
