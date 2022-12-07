import db from "../db.js";

export const createPost = async (req, res) => {
  const { link } = req.body;
  try {
    await db.query(`INSERT INTO posts (link) VALUES ($1) returning *`,
    [link]);
    res.status(200).json({message: "Success, new post has been creaated!"})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
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
