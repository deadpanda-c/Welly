from .sqliteModule import SqliteModule

def get_module_sqlite(db_name):
    return SqliteModule(db_name)

