## NEXTJS + MYSQL CRUD Functionality
### CRUD API functionality using next.js x MySQL
---

| Endpoints | METHOD | Descriptions |
| --------- | ------ | ------------ |
| http://localhost:3000/api/employees | GET | Employees List
| http://localhost:3000/api/employees/{id} | GET | Employee's Data
| http://localhost:3000/api/employees/{id} | POST | Add Data
| http://localhost:3000/api/employees/{id} | PUT | Update Data 
| http://localhost:3000/api/employees/{id} | DELETE | Delete Data

NOTE: 

1. npm install mysql -  node.js driver for mysql
2. npm install next-connect - The method routing and middleware layer for Next.js
3. Creating Database
```
CREATE DATABASE crud_nextjs;
```
4. Config connection in environment variables
5. Create employees table
```
CREATE TABLE `employees` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` longtext NOT NULL,
  `phone` varchar(255) NOT NULL,
  `insert_timestamp` datetime NOT NULL,
  `update_timestamp` datetime NOT NULL,
  PRIMARY KEY (`id`)
);
```
6. npm install moment - Date and time library

