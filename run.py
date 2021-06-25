import os
from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/cuisine/american")
def american():
    return render_template("cusisin/american.html")