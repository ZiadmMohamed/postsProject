import mysql from "mysql2";

// const connection = mysql.createConnection({
//   host: "bomdcu9gusvigotgqyhb-mysql.services.clever-cloud.com",
//   user: "u5ijfm7ogz9atvme",
//   password: "8iGHtmneqz78r4srSxjs",
//   database: "bomdcu9gusvigotgqyhb",
// });

const connection = mysql.createConnection(
  "mysql://u5ijfm7ogz9atvme:8iGHtmneqz78r4srSxjs@bomdcu9gusvigotgqyhb-mysql.services.clever-cloud.com:3306/bomdcu9gusvigotgqyhb"
);

connection.connect((err) => {
  err ? console.log(err) : console.log("server in connected");
});

export default connection;
