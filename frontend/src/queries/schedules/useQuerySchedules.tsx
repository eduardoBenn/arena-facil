import axios from "axios";
import { useQuery } from "react-query";
import { environmentVariables } from "../../utils/environment-utils";

export const useQuerySchedules = (userId: string) => {
  return useQuery(["getSchedules"], () => {
    return axios
      .get(`${environmentVariables.API_URL}/api/schedule/${userId}/user`)
      .then((res) => res.data);
  });
};
