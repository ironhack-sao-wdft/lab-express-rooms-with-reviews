const mongoose = require('mongoose')

const DB_NAME = 'rooms-app'

async function db () {
  try{
    const db = await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`,{
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to db: ', db.connections[0].name)
  } catch(err){
    console.error('Database connection failed!', err)
  }
}

module.exports = db
