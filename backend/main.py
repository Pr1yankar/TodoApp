
from flask import Flask
app = Flask(__name__)
from flask_cors import CORS, cross_origin

cors = CORS(app)



@app.route("/")
def hello():
    return {"Hello" : ["world" , "me" , "World"]}


if __name__ == "__main__" :
    app.run(debug=True)