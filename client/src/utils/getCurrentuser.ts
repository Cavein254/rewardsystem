import axios from "axios";

export const GetCurrentUser = async () => {
  const response = await axios.get("http://localhost:4000/api/user");
  console.log(response);
  if (!response.data) {
    console.log("Error fetching user data");
    return undefined;
  }
  console.log("user is found");
  const userData = await response.data;
  console.log(userData);
  return userData;
};
