const asyncHandler = require("express-async-handler")
const Goal = require("../models/goalModel")

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals)
})

// @desc Add Goal
// @route POST /api/goals
// @access Private
const addGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field")
  }

  const goal = await Goal.create({
    text: req.body.text,
  })

  res.status(201).json(goal)
})

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error(`Goal with the if of ${req.params.id} is not found`)
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
})

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error(`Goal with the if of ${req.params.id} is not found`)
  }

  await goal.remove()

  res.status(200).json({ message: `Deleted Goal ${req.params.id}` })
})

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
}
