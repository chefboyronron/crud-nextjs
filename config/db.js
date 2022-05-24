const { createPool } = require('mysql');

var pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.getConnection((error) => {
    if( error ) {
        console.log('Error Connecting to DB.');
    }
    console.log('Cennected to DB.');
});

const executeQuery = (query, arrayParams) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arrayParams, (err, data) => {
                if( err ) {
                    console.log('Error executing the query.');
                    reject(err);
                }
                resolve(data);
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = executeQuery;