/** Controller */
import User from "../models/User";

// get : http://localhost:3000/api/users
export async function getUsers(req, res) {
  const usersCount = await User.countDocuments();
  try {
    const users = await User.find({});

    if (!users) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json({
      success: true,
      usersCount,
      users,
    });
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

// get : http://localhost:3000/api/users/1
export async function getUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await User.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the User...!" });
  }
}

// post : http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    User.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : http://localhost:3000/api/users/1
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await User.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete : http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await User.findByIdAndDelete(userId);
      return res.status(200).json({ deleted: userId });
    }

    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the User...!" });
  }
}
