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

export const useQueryMyUser = (userId: string) => {
  return useQuery(["getMyUser"], () => {
    return axios
      .get(`${environmentVariables.API_URL}/api/users/${userId}`)
      .then((res) => res.data.result);
  });
};
