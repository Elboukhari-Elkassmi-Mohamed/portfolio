const Skills = require("../models/skillsModel");







exports.addSkills = async (req,res)=> {
      //check if data Exists
  if (!req.body) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }
  const newskills = {
    frontend: req.body.FrontSkill,
    backend: req.body.BackSkill,
    
  };
  try {
    await Skills.create(newskills)
    return res.json({ message: "New skill inserted succefully" })
  } catch (error) {
    res.send(error)
  }


}

exports.deleteskills = async (req, res) => {
    const id = req.params.id;
    Skills
      .deleteOne({
        where: { _id: id },
      })
      .then((num) => {
        if (num.deletedCount == 1) {
          res.status(200).send("The skill Got Deleted");
        } else {
          res.send({
            message: `Cannot delete the skill !`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Something Went Wrong",
        });
      });
  };


  exports.showAllSkills = async (req, res) => {
    const allSkills = await Skills.find({ raw: true, nest: true });
    res.status(200).send(allSkills);
  };
  
