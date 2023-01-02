const router = require("express").Router();

const skillsController = require("../controllers/skillsControllers");

// api/skills
router.post("/",skillsController.addSkills);

// api/skills

router.delete("/:id",skillsController.deleteskills);


router.get("/",skillsController.showAllSkills)


module.exports = router;
