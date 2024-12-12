import AdminStatistics from "../components/AdminStatistics";
import useRole from "../hooks/useRole";

const AdminDashboard = () => {
  const [role, isLoading] = useRole();

  if (isLoading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 md:ml-9">
      {role === "Admin" && <AdminStatistics />}
    </div>
  );
};

export default AdminDashboard;
