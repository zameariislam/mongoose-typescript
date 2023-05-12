import mongoose from "mongoose";
import app from "./app";

const port:number = 3000

// database connection

async function bootstrap() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');

        console.log('Database is connected')
        app.listen(port, () => {
            console.log(`app listening on port ${port}`)
        })
    }
    catch (err) {
        console.log('failed to connect database...', err.message)
    }

}
bootstrap()






