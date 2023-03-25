from flask import Flask, request, jsonify
# import Main as main

app = Flask(__name__)

@app.route('/get_user_data', methods =['POST'])
def get_user_data():
    json_data = request.get_json()
    return json_data
    # return main.main(req)

@app.route("/test")
def test():
    print("test")
    return "testtest"

if __name__ == '__main__':
    app.run()