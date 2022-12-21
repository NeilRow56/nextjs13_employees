import dbConnect from "../../../app/lib/dbConnect";
import {
  getUsers,
  putUser,
  deleteUser,
} from "../../../app/controllers/controller";

export default async function handler(req, res) {
  dbConnect();

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;
    case "PUT":
      putUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
