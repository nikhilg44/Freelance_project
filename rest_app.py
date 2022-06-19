# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request
from scrap import s_list
from flask_cors import CORS
import psycopg2
# creating a Flask app
app = Flask(__name__)
print(__name__)
CORS(app)
# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="mydatabase",
        user="postgres",
        password="123456")
    return conn
@app.route('/', methods = ['GET', 'POST'])
def home():
	print("request is------------{}".format(request))
	if(request.method == 'GET'):
		data = "hello world"
		return jsonify({'data': s_list})


# A simple function to calculate the square of a number
# the number to be squared is sent in the URL when we use GET
# on the terminal type: curl http://127.0.0.1:5000 / home / 10
# this returns 100 (square of 10)
@app.route('/home/<int:num>', methods = ['GET'])
def disp(num):
	print("request2 is------------{}".format(request))
	return jsonify({'data': num**2})
@app.route('/db', methods = ['GET'])
def disp2():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM books;')
    books = cur.fetchall()
    cur.close()
    conn.close()	
    return jsonify({'data': books})
@app.route('/db/post/', methods = ['POST'])
def auth():
	


# driver function
if __name__ == '__main__':

	app.run(debug = False)
