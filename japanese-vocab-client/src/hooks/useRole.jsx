import {useQuery} from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useRole = () => {
  const {user, loading} = useAuth();

  const {data: role = "", isLoading} = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/${user?.email}`
        );
        return response.data?.role || ""; 
      } catch (error) {
        console.error("Failed to fetch role:", error);
        return ""; 
      }
    },
  });


  return [role, isLoading];
};

export default useRole;
