import '../../../css/admin.css'
import { api } from "../../../helpers/api";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



function CreateOne() {
    const navigate = useNavigate();
    const [FrontSkill, setfront] = useState("");
    const [BackSkill, setback] = useState("");

    const saveSkills = (e) => {

        e.preventDefault();

        const data = {
            FrontSkill,
            BackSkill

          };

        api
        .post("/skills", data)
        .then((response) => {
          // console.log(response.data);
          navigate("/admin/sectionOne");
  
        })
        .catch((error) => {
          console.log(error.response); 
        });
    };    

    return (
        <>
            <div className="py-5 mx-auto" style={{ width: '80%' }}>
                <div className="mt-5 mb-2 py-2 px-2 rounded" style={{ backgroundColor: '#eee' }}>
                    <h4 className="mt-2 p-0 text-center">Create </h4>
          
                    <form  method="post" encType='multipart/form-data' className="w-50 mx-auto border p-2" onSubmit={saveSkills}>
                        <div className="form-outline mb-2">
                            <input type="text" className="form-control rounded-1" placeholder="Front End Skill" onChange={(e) => {setfront(e.target.value);}} />
                        </div>
                        <div className="form-outline mb-2">
                            <input type="text"  className="form-control rounded-1" placeholder="Back End Skill" onChange={(e) => {setback(e.target.value);}} />
                        </div>
                        <button type="submit" className="btn btn-primary rounded-1">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateOne