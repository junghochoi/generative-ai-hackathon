from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def welcome():

    

    return request.json['text']

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)