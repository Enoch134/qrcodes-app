import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config(); 

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  database: process.env.MYSQLDATABASE,
  database: process.env.MYSQLPASSWORD,
  port: process.env.MYSQLPORT
});

connection.on('error', (err) => {
  console.error('Database connection error:', err);
});

connection.on('connect', () => {
  console.log('Connected to the database');
});

connection.on('close', () => {
  console.log('Connection closed');
});

export default connection;
