import Sidebar from "../../components/common/Sidebar";
import AdminNav from "../../components/common/AdminNav";
import "../../css/admin.css";
import { Outlet } from "react-router-dom";
function Admin() {
  return (
    <>
      <Sidebar />
      <div className="home-section">
        <AdminNav />
        <Outlet />
      </div>
    </>
  );
}

export default Admin;
