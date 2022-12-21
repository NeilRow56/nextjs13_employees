import dbConnect from "../../../app/lib/dbConnect";
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
} from "../../../app/controllers/controller";

export default async function handler(req, res) {
  dbConnect();

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getUser(req, res);
      break;

    case "PUT":
      putUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
