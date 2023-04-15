import Assignment from "../models/assignmentModel.js"
import asyncHandler from 'express-async-handler'

const getAssignments = asyncHandler(async (req, res) => {
    const assignments = await Assignment.find({student: req.student._id})
    res.json(assignments)
    console.log('assignments:', assignments)
})