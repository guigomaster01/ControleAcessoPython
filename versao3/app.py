from flask import Flask, render_template, request, jsonify, send_file
import sqlite3
import pandas as pd
import os
from datetime import datetime

app = Flask(__name__)

# Criar banco de dados SQLite
DATABASE = "registros.db"
def init_db():
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute('''CREATE TABLE IF NOT EXISTS registros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            registro TEXT,
            tipo TEXT,
            movimentacao TEXT,
            prefixoColetivo TEXT,
            observacoes TEXT,
            data_hora TEXT
        )''')
        conn.commit()
init_db()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/registrar', methods=['POST'])
def registrar():
    data = (
        request.form.get("nome"),
        request.form.get("registro"),
        request.form.get("tipo"),
        request.form.get("movimentacao"),
        request.form.get("prefixoColetivo"),
        request.form.get("observacoes"),
        datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    )
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute("""INSERT INTO registros
            (nome, registro, tipo, movimentacao, prefixoColetivo, observacoes, data_hora)
            VALUES (?, ?, ?, ?, ?, ?, ?)""", data)
        conn.commit()
    return jsonify({"message": "Registro salvo com sucesso!", "success": True})

@app.route('/registros')
def visualizar_registros():
    with sqlite3.connect(DATABASE) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM registros")
        registros = cursor.fetchall()
    return render_template('registros/index.html', registros=registros)

@app.route('/exportar_csv')
def exportar_csv():
    with sqlite3.connect(DATABASE) as conn:
        df = pd.read_sql_query("SELECT * FROM registros", conn)
    if df.empty:
        return jsonify({"message": "Nenhum registro para exportar"}), 400
    caminho_arquivo = "exportacao_registros.csv"
    df.to_csv(caminho_arquivo, index=False, encoding="utf-8-sig")
    return send_file(caminho_arquivo, as_attachment=True, mimetype="text/csv")

@app.route('/exportar_excel')
def exportar_excel():
    with sqlite3.connect(DATABASE) as conn:
        df = pd.read_sql_query("SELECT * FROM registros", conn)
    if df.empty:
        return jsonify({"message": "Nenhum registro para exportar"}), 400
    caminho_arquivo = "exportacao_registros.xlsx"
    df.to_excel(caminho_arquivo, index=False, engine='openpyxl')
    return send_file(caminho_arquivo, as_attachment=True, mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
