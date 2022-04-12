const {createPool} = require(mysql)
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "jatinnaudiyal",
    connectionLimit: 10
})

pool.query(`select * from user`, (err, res)=>{
    return console.log(res)
})