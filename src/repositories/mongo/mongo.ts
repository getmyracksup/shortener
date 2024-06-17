import mongoose, { mongo } from "mongoose"

class Mongo { 

    static mongoose: typeof mongoose

    constructor() {
        Mongo.initDbConnection()
    }

    static async initDbConnection(): Promise<typeof mongoose> {
        if (this.mongoose) return this.mongoose
        this.mongoose = await mongoose.connect('mongodb://127.0.0.1:27017/shortener', { })
        console.log('Conectado na db!')
        return this.mongoose
    }
}

export default Mongo;