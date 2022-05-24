import executeQuery from '../../config/db';

const getAllEmployees = async (req, res) => {
    try {
        let employeesData = await executeQuery('SELECT * FROM employees', []);
        res.status(200).json(employeesData);
    } catch (error) {
        res.status(400).json({
            message: 'Bad Request.'
        });
    } 
};

const getEmployeeById = async (req, res) => {
    const id = req.query.employeeId;
    try {
        let employeeData = await executeQuery(`SELECT * FROM employees WHERE id=${id}`, []);
        res.status(200).json(employeeData);
    } catch (error) {
        res.status(400).json({
            message: 'Bad Request.'
        });
    }
}

const deleteEmployeeByID = async ( req, res ) => {
    const id = req.query.employeeId;
    try {
        let employeeData = await executeQuery("DELETE FROM employees WHERE id=? LIMIT 1", [id]);
        res.status(200).json(employeeData);
    } catch (error) {
        res.status(400).json({
            message: 'Bad Request.'
        });
    }
}

const saveEmployee = async (req, res) => {
    
    const moment = require('moment');
    let date = moment().format('YYYY-MM-DD HH:mm:ss');
    const post = req.body;

    try {
        const firstname = post.firstname,
            lastname = post.lastname,
            email = post.email,
            address = post.address,
            phone = post.phone,
            insert_timestamp = date;

        let employeeData = await executeQuery(
            'INSERT INTO employees(firstname, lastname, email, address, phone, insert_timestamp) VALUES (?,?,?,?,?,?)', 
            [firstname, lastname, email, address, phone, insert_timestamp]
        );

        let insertedData = await executeQuery(
            `SELECT * FROM employees WHERE id=? LIMIT 1`,
            [employeeData.insertId]
        )

        res.status(200).json(insertedData);
    } catch (error) {
        res.status(400).json({
            message: 'Bad Request.'
        });
    }
    
}

const updateEmployee = async (req, res) => {

    const moment = require('moment');
    let date = moment().format('YYYY-MM-DD HH:mm:ss');
    req.body.update_timestamp = date;

    const id = req.query.employeeId;
    const { firstname, lastname, email, address, phone, update_timestamp } = req.body;

    try {
        // Check if employee with :id is existing
        const employeeData = await executeQuery(
            'SELECT * FROM employees WHERE id=?',
            [id]
        );

        if( employeeData.length > 0 ) {
            const update = await executeQuery(
                'UPDATE employees SET firstname=?, lastname=?, email=?, address=?, phone=?, update_timestamp=? WHERE id=? LIMIT 1', 
                [firstname, lastname, email, address, phone, update_timestamp, id]
            );
            res.status(200).json(update);
        } else {
            res.status(400).json('Employee not found')
        }

    } catch (error) {
        res.status(400).json({
            message: error
        });
    }

}

export { getAllEmployees, getEmployeeById, deleteEmployeeByID, saveEmployee, updateEmployee };