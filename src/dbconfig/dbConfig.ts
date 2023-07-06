import mongoose from "mongoose";



export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!);

        const connection =  mongoose.connection;

        connection.on('connected' , () => {
            console.log('Sucessfully connected')
        })

        connection.on('error', (err) => {
            console.log('Error connecting to database', err);
            process.exit();
        })


        console.log('>>> DB is connected');
    } catch (error) {
        console.log('Something went wrong!');
        console.log(error);
    }
}

