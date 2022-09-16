const express = require("express")
const router = express.Router()
const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController")
const { protect } = require("../middleware/authMiddleware")

// router.get("/", getGoals)

// router.post("/", addGoal)

// router.put("/:id", updateGoal)

// router.delete("/:id", deleteGoal)

router.route("/").get(protect, getGoals).post(protect, addGoal)
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router
