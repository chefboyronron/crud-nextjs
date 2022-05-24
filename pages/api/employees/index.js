import nc from 'next-connect';
import { getAllEmployees, saveEmployee } from '../../../controllers/employees/employee'

const handler = nc();

// Get API
handler.get(getAllEmployees);

handler.post(saveEmployee);

export default handler;