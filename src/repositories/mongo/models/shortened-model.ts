import mongoose from "mongoose"

class ShortenedSchema {
    static get schema() {
        const schema = new mongoose.Schema({
            slug: {
                type: String,
                required: true,
                unique: true
            },
            title: {
                type: String,
                required: true
            },
            creator: {
                type: String,
                required: true
            },
            original_url: {
                type: String,
                required: true
            },
            category_id: {
                type: String,
                required: false
            },
            visits: {
                type: Number,
                required: true,
                default: 0
            },
            created_at: {
                type: Date,
                required: true
            }
        })

        return schema
    }
}

export default mongoose.model("Shorteneds", ShortenedSchema.schema)