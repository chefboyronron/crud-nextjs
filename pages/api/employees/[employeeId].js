import nc from 'next-connect';
import { getEmployeeById, deleteEmployeeByID, updateEmployee } from '../../../controllers/employees/employee'

const handler = nc();

// Get API
handler.get(getEmployeeById);

// Delete API
handler.delete(deleteEmployeeByID);

// Update API

handler.put(updateEmployee);

export default handler;