import mongoose from "mongoose"

class CategorySchema {
    static get schema() {
        const schema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true
            }
        })

        return schema
    }
}

export default mongoose.model("Categories", CategorySchema.schema)