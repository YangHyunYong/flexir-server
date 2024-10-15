import mysql from "mysql2";

// const connection = mysql.createConnection({
//     host: '3.38.2.55',  
//     user: 'hyunyong',       
//     password: 'hyunyong', 
//     database: 'flexir'  
// });

const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'root',       
    password: 'gusdyd2Wkd!', 
    database: 'flexir'  
});


connection.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 실패: ', err.stack);
    return;
  }
  console.log('데이터베이스 연결 성공 ID: ' + connection.threadId);
});

export default connection;