const router = require("express").Router();
const { addJob, getJobs, getJob, updateJob, deleteJob } = require("../../../controllers/careerController");

router.get("/", getJobs);
router.get("/:id", getJob);
router.post("/", addJob);
router.delete("/:id", deleteJob);
router.put("/:id", updateJob);

module.exports = router;