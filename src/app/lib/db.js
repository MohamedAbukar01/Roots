import mongoose from 'mongoose'
import color from 'colors'


const mongoDbUrl = process.env.MONGO_URL

const connectDB = () => {

    const connectionStatus = mongoose.connection.readyState 

    if(connectionStatus === 1) {
        console.log ('Already Connected')
    }
    if(connectionStatus === 2) {
        console.log('Connecting...')
    }

    try {
        mongoose.connect(mongoDbUrl, {
            dbName:'Root'
        })
        console.log ('Connectd to the database'.underline.brightGreen)

    } catch (error) {
        console.log('Error in connecting to the datebase', error)
        throw new Error ('Error in connecting to the datebase')
    }
}

export default connectDB