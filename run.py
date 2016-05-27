from flask import Flask, send_from_directory, request, json

app = Flask(__name__, static_url_path='/')
app.debug = True


@app.route('/_get_input_word', methods = ['GET', 'POST'])
def get_input_word():
	if request.method == 'POST':
		word = request.json['input_word']
		if word == None:
			#do some process about not inputting a word
			return None,"Error: could not retrieve data"
		else:
			#take word, process it
			print "got the word", word
			return json.dumps({'success':True}), 200, {'ContentType':'application/json'}  

@app.route('/')
def send_index():
	return send_from_directory('static/static_html', 'index.html')

@app.route('/<path:path>')
def send_static_html(path):
	return send_from_directory('static/static_html', path)

@app.route('/js/<path:path>')
def send_js(path):
				return send_from_directory('static/js', path)

@app.route('/css/<path:path>')
def send_css(path):
				return send_from_directory('static/css', path)

if __name__ == "__main__":
	app.run()