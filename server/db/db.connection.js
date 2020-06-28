import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


    console.log('DB has been connected!');
}

export default connectDB;