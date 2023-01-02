import { Link } from "react-router-dom";
import '../../../css/admin.css'
import { useEffect, useState } from "react";
import { api } from "../../../helpers/api";

function One() {


  const [data, setdata] = useState([]);

  useEffect(() => {
    api.get('/skills')
        .then((response) => {
              console.log(response.data)
            setdata(response.data)
        })
        .catch((error) => {
             console.log(error)
        })
}, [])



const Deleteskills = (id) => {
  console.log(id);
  api.delete(`/skills/${id}`)
      
      .catch((error) => {
          console.log(error)
      })
}


    return (
        <>
          <div className="home-content">
            <div
              className="d-flex align-items-center justify-content-between mt-5 mb-2 py-2 px-2 rounded mx-auto"
              style={{ backgroundColor: "rgb(201, 197, 197)", width: "80%" }}
            >
              <h4 className="m-0 p-0">Section-One</h4>
              <Link
                to="/admin/sectionOne/create"
                className="btn btn-primary me-1"
                data-mdb-ripple-color="dark"
                style={{ width: "fit-content !important" }}
              >
                Generate New Code Promo
              </Link>
            </div>
            
            <div className="sales-boxes">
              <div className="recent-sales box">
              {
        data.map((data)=>(
            <div className="sales-details">
              <ul className="details">
                <li className="topic">BackEnd Skills</li>
                <li>
                  <a href="./update">{data.backend}</a>
                </li>
              </ul>
              <ul className="details">
                <li className="topic">Font Skills</li>
                <li>
                  <a href="./update">{data.frontend}</a>
                </li>
              </ul>
             
              <ul className="details text-center">
                <li className="topic">Action</li>
                <li>
                 
                  <button  onClick={() => { Deleteskills(data._id) }} className="text-danger px-2">
                    Delete
                  </button>
                </li>
              </ul>
            </div>
                   ))
                }
          </div>
        </div>
      </div>
    </>
  );
}

export default One