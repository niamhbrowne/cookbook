import os
from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/")
def cuisine():
    return render_template("cusisin/american.html")