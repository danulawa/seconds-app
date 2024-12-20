from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    labels = {
        "title": "Seconds",
        "header": "Convert to Seconds",
        "form_labels": {
            "years": "Years",
            "months": "Months",
            "days": "Days",
            "hours": "Hours",
            "minutes": "Minutes",
            "seconds": "Seconds"},
        "result_heading": "Total Seconds:",
        "error_message": "Invalid Input",
    }
    return render_template("index.html", labels=labels)

if __name__ == "__main__":
    app.run(debug=True)
