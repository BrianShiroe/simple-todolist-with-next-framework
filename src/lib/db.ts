import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.MYSQLHOSTMAIN,
  port: process.env.MYSQLPORTMAIN ? Number(process.env.MYSQLPORTMAIN) : undefined,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
});
