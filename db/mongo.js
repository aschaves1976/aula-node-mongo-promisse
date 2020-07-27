
const mongoCli = require('mongodb').MongoClient


// conexão utilizando callback
 mongoCli.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
 ,{ useUnifiedTopology : true}
 , (err, conn) => {
     if(err) return console.log(` DataBase Connection FAIL: ${error}!`)
     global.connection = conn.db( process.env.MONGO_DATABASE )
     console.log (` Database ${process.env.MONGO_DATABASE} Connected !`)
 }
 )

 module.exports = {}