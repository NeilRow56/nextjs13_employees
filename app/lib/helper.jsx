const BASE_URL = "http://localhost:3000";

async function getUsers() {
  let res = await fetch(`${BASE_URL}/api/users`);
  return res.json();
}
