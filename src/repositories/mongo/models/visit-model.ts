import mongoose from "mongoose"
import shortenedModel from "./shortened-model"

class VisitSchema {
    static get schema() {
        const schema = new mongoose.Schema({
            country: {
                type: String,
                required: false
            },
            ip: {
                type: String,
                required: true
            },
            slug: {
                type: String,
                required: true
            },
            visited_at: {
                type: Date,
                required: true
            },
            city: {
                type: String,
                required: false
            },
            region: {
                type: String,
                required: false
            }
        })

        return schema
    }
}

const visitModel = mongoose.model("Visits", VisitSchema.schema)

VisitSchema.schema.on('save', async (doc) => {
    const shortened = await shortenedModel.findById(doc._id).exec()

    if (shortened) {
        shortened.visits++
        await shortened.save()
    }
})

export default visitModel