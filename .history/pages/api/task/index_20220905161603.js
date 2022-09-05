import Tasks from '../../../models/Task'
import dbConnect from '../../../utilities/dbConnect'

export default async function aFunc(req, res) {
  const { method } = req

  // Connect to database
  await dbConnect()

  // Create task
  if (method === 'POST') {
    try {
      const newTask = await new Task(req.body).save()
      res
        .status(201)
        .json({ data: newTask, message: 'Task added successfully' })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
      console.log(error)
    }
  }

  if (method === 'GET') {
    try {
      const tasks = await Task.find()
      res.status(200).json({ data: tasks })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
      console.log(error)
    }
  }
}
