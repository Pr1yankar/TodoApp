
from flask import Flask
app = Flask(__name__)
from flask_cors import CORS, cross_origin
from flask import request
cors = CORS(app)

from handeldata import (Add_User,SignIn_User)

@app.route("/")
def hello():
   return {
       "todoappkey" : "1"
   }

@app.route('/login', methods=['POST',])
def Login():
    
    if request.method == 'POST':
        data = request.get_json(force=True)        
        try:
            username = data['username']
            password = data['password']
            email = data['email']
            print(username,email,password)
            res = Add_User(email,username,password)
            if (res[0]):
                return {"status" : True ,
        "key": email}
            else :
                 return {
        "status" : False ,
        "error" : "User Already Present"
    }
        except:
             return {
        "status" : False ,
        "error" : "Error Occored"
    }
        # password = request.form['password']
    return {
        "status" : False ,
        "error" : "Error Occored"
    }
        
@app.route('/signin', methods=['POST',])
def SignIn():
    
    if request.method == 'POST':
        data = request.get_json(force=True)   
        print(data)     
        try:
            password = data['password']
            email = data['email']
            print(password,email)     
            print("here")
            res = SignIn_User(email,password)
            print("here2")
            print(res)
            if (res[0]):
                return {"status" : True ,
        "key": res[1]}
            else :
                 return {
        "status" : False ,
        "error" : res[1]
    }
        except:
             return {
        "status" : False ,
        "error" : "Error Occored"
    }
        # password = request.form['password']
    return {
        "status" : False ,
        "error" : "Error Occored"
    }
        
    



if __name__ == "__main__" :
    app.run(debug=True)