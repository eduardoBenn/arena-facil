import axios from "axios";
import { useQuery } from "react-query";
import { environmentVariables } from "../../utils/environment-utils";

export const useQueryUser = (userId: string) => {
  return useQuery(["getUser"], () => {
    return axios
      .get(`${environmentVariables.API_URL}/api/users/${userId}`)
      .then((res) => res.data.result);
  });
};
