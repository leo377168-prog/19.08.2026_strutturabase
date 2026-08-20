from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": [
    "http://localhost:4200",
    "http://127.0.0.1:4200",
    "https://curly-adventure-g47jjwpggx57cp4r9-4200.app.github.dev"
]}}, supports_credentials=True)

def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user='utente_negozio',
        password='123',
        database='negozio'
    )


@app.route('/api/prodotti', methods=['GET'])
def get_prodotti():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        query = "SELECT id, nome, prezzo, (prezzo * 1.22) AS prezzo_ivato FROM prodotti;"
        cursor.execute(query)
        prodotti = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(prodotti), 200
    except mysql.connector.Error as exc:
        return jsonify({"error": f"Database error: {exc}"}), 500
    except Exception as exc:
        return jsonify({"error": f"Unexpected error: {exc}"}), 500
  

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
