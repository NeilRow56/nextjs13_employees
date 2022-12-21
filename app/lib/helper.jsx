const BASE_URL = "http://localhost:3000";

export const getUsers = async () => {
  let res = await fetch(`${BASE_URL}/api/users`);
  return res.json();
};
