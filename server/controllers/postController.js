import db from "../db.js";

export const getAllPost = async (req, res) => {
  try {
    const allPosts = await db.query("SELECT * FROM posts");
    res.status(200).json({
      message: "success",
      data: allPosts.rows,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
