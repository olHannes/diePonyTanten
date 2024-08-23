from flask import Flask, render_template

app = Flask(__name__)

# Route für die Startseite
@app.route('/')
def home():
    return render_template('temp.html')

if __name__ == '__main__':
    # Host 0.0.0.0 macht die App im Netzwerk erreichbar
    app.run(host='0.0.0.0', port=5000, debug=True)
