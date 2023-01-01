import { Link } from "react-router-dom";
import '../../../css/admin.css'

function One() {



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
              
                <div className="sales-details">
                  <ul className="details">
                    <li className="topic">Code</li>
                    <li>
                      <a href="./update"></a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Discount Value</li>
                    <li>
                      <a href="./update">%</a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Expiration Date</li>
                    <li>
                      <a href="./update"></a>
                    </li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Permitted Products </li>
                    <li>
                      <a href="./update"></a>
                    </li>
                  </ul>
                  <ul className="details text-center">
                    <li className="topic">Action</li>
                    <li>
                      <button   className="text-danger px-2">
                        update
                      </button>
                      <button   className="text-danger px-2">
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
                      
              </div>
            </div>
          </div>
        </>
      );
}

export default One