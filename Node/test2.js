var sql = require('mssql');

// DB configuration
var dbConfig = {
    user: 'sa',
    password: '123456',
    server: 'localhost',
    database: 'test',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

// 查询所有的用户信息
function getAllUsers() {
    var conn = new sql.ConnectionPool(dbConfig);
    //console.log(conn);
    var req = new sql.Request(conn);
    conn.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        // 查询t_user表
        req.query("SELECT top 10 id FROM name", function (err, recordset) {
            if (err) {
                console.log(err);
                return;
            }
            else {
                console.log(recordset);
            }
            conn.close();
        });
    });
}

// 查询所有的用户信息
getAllUsers();