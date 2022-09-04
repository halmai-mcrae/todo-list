import mongoose from 'mongoose'

const tokenSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: true },
})

export default mongoose.models.Task || mongoose.model('Task', tokenSchema)
