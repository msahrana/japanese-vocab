import MenuItem from "./MenuItem";
import {FaDollarSign, FaUserCog, FaUsers} from "react-icons/fa";
import {MdBloodtype} from "react-icons/md";


const AdminMenu = () => {
    return (
        <>
      <MenuItem icon={FaUsers} label="User Management" address="user-management" />
      <MenuItem
        icon={MdBloodtype}
        label="Tutorial Management"
        address="tutorial-management"
      />
      <MenuItem
        icon={FaUserCog}
        label="Content Management"
        address="content-management"
      />
      <MenuItem icon={FaDollarSign} label="Add Lessons" address="add-lessons" />
    </>
    );
};

export default AdminMenu;