/* eslint-disable import/no-anonymous-default-export */
import Task from '../../../models/Task'
import dbConnect from '../../../utilities/dbConnect'

export default async (req, res) => {
  const { method } = req

  // Connect to database
  await dbConnect()

  // Create a new task
  if (method === 'POST') {
    try {
      const task = await Task.create(req.body)
      res
        .status(201)
        .json({ data: newTask, message: 'Task added successfully' })
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  // Get all tasks
  else if (method === 'GET') {
    try {
      const tasks = await Task.find({})
      res
        .status(200)
        .json({ data: tasks, message: 'Tasks fetched successfully' })
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
