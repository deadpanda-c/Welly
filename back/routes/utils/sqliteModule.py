#!../../.venv/bin/python3

import sqlite3
import datetime
import prettytable

class SqliteModule:
    def __init__(self, db_name):
        self.db_name = db_name
        self.conn = sqlite3.connect(self.db_name)
        self.cursor = self.conn.cursor()
        print("Database connected successfully")

    def insert_data(self, table_name: str, data: dict) -> None:
        print(f"Inserting data into {table_name}")
        columns = ', '.join(data.keys())
        placeholders = ', '.join('?' * len(data))
        values = tuple(data.values())
        self.cursor.execute(f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})", values)
        self.conn.commit()
        print(f"Data inserted successfully")

    def update_data(self, table_name: str, data: dict, condition: dict) -> None:
        print(f"Updating data in {table_name}")
        columns = ', '.join(data.keys())
        placeholders = ', '.join('?' * len(data))
        values = tuple(data.values())
        condition_columns = ', '.join(condition.keys())
        condition_placeholders = ', '.join('?' * len(condition))
        condition_values = tuple(condition.values())
        self.cursor.execute(f"UPDATE {table_name} SET {columns} = {placeholders} WHERE {condition_columns} = {condition_placeholders}", values + condition_values)
        self.conn.commit()
        print(f"Data updated successfully")

    def delete_data(self, table_name: str, condition: dict) -> None:
        print(f"Deleting data from {table_name}")
        condition_columns = ', '.join(condition.keys())
        condition_placeholders = ', '.join('?' * len(condition))
        condition_values = tuple(condition.values())
        self.cursor.execute(f"DELETE FROM {table_name} WHERE {condition_columns} = {condition_placeholders}", condition_values)
        self.conn.commit()
        print(f"Data deleted successfully")


    def show_table(self, table_name: str) -> list:
        self.cursor.execute(f"SELECT * FROM {table_name}")
        rows = self.cursor.fetchall()
        table = prettytable.PrettyTable()
        table.field_names = [description[0] for description in self.cursor.description]
        table.add_rows(rows)
        print(table)
        return rows

    def get_row(self, table_name: str, condition: dict) -> tuple:
        condition_columns = ', '.join(condition.keys())
        condition_placeholders = ', '.join('?' * len(condition))
        condition_values = tuple(condition.values())
        self.cursor.execute(f"SELECT * FROM {table_name} WHERE {condition_columns} = {condition_placeholders}", condition_values)
        row = self.cursor.fetchone()
        return row

    def get_element(self, table_name: str, column_name: str, condition: dict) -> str:
        condition_columns = ', '.join(condition.keys())
        condition_placeholders = ', '.join('?' * len(condition))
        condition_values = tuple(condition.values())
        self.cursor.execute(f"SELECT {column_name} FROM {table_name} WHERE {condition_columns} = {condition_placeholders}", condition_values)
        element = self.cursor.fetchone()
        return element

    def close_connection(self) -> None:
        self.conn.close()
        print("Database connection closed successfully")

if __name__ == "__main__":
    db_name = "welly.db"
    table_name = "Users"

    data = {
        "username": "John",
        "password": "password",
        "email": "john@gmail.com",
        "created_at": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "updated_at": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    updated_data = {"username": "John Doe"}

    sqliteModule = SqliteModule(db_name)
    sqliteModule.insert_data(table_name, data)
    sqliteModule.show_table(table_name)
    sqliteModule.update_data(table_name, updated_data, {"username": "John"})
    sqliteModule.show_table(table_name)

