// 1. How do you connect a Node.js application to a SQL database?


// You use libraries like mysql2 for MySQL, or pg for PostgreSQL. You create a connection using credentials and execute queries via query() or execute() methods.


const mysql = require('mysql2');
const conn = mysql.createConnection({ /* config */ });
conn.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});






//  What's the difference between parameterized queries and string concatenation in SQL with JavaScript?



// Parameterized queries prevent SQL injection. Instead of inserting values into the query string directly, placeholders like ? are used, and the values are passed separately.



// 🚫 Insecure
const query = `SELECT * FROM users WHERE name = '${userInput}'`;

// ✅ Secure
conn.query('SELECT * FROM users WHERE name = ?', [userInput]);
