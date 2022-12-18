import axios from "axios";
import { useQuery } from "react-query";
import { environmentVariables } from "../utils/environment-utils";
import Cookies from "universal-cookie";

export const useQueryUserPermission = () => {
  const fetchPermission = async () => {
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    const response = await axios.get(
      `${environmentVariables.API_URL}/api/auth/permission`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  };

  return useQuery("userPermissions", fetchPermission);
};
