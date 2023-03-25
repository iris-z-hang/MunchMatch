from flask import Flask, request, jsonify
import Main as main
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get_user_data', methods =['POST'])
def get_user_data():
    json_data = request.get_json()
    return main.main(json_data)
    # return main.main(req)

@app.route("/test")
def test():
    print("test")
    return "testtest"

if __name__ == '__main__':
    app.run(host="0,0,0,0")
    