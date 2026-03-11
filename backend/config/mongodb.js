import mongoose from 'mongoose'

const connectToDb = async () => {

    try {
        mongoose.connection.on('connected', () => {
            console.log('Connected to Database');
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/LovelyWebsite`)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message)
        process.exit(1)
    }
}

export default connectToDb;