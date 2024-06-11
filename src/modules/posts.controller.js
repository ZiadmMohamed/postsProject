import connection from "../../DB/models/connectionDB.js";

export const addPost = (req, res) => {
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    return res
      .status(400)
      .json({ msg: "error", error: "Missing required fields" });
  }

  const query = `INSERT INTO posts (title, description, price) VALUES("${title}","${description}",${price})`;
  connection.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "error", error: err.message });
    }
    return res.status(200).json("done");
  });
};

export const getPost = (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM posts WHERE  id = ${id}`;

  connection.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "error", error: err.message });
    }
    if (!result.length) {
      return res.status(400).json("not found");
    }
    return res.status(200).json(result);
  });
};
export const getPosts = (req, res) => {
  const query = `SELECT * FROM posts `;

  connection.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "error", error: err.message });
    }
    if (!result.length) {
      return res.status(400).json("not found");
    }
    return res.status(200).json(result);
  });
};

export const updatePost = (req, res) => {
  const { id, title, description, price } = req.body;
  const query = `UPDATE posts SET title='${title}',description='${description}',price='${price}'  WHERE id = ${id}`;

  connection.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "error", error: err.message });
    }
    if (!result.affectedRows) {
      return res.status(400).json("not found");
    }
    return res.status(200).json(result);
  });
};

export const deletePosts = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM posts WHERE id = ${id}`;

  connection.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "error", error: err.message });
    }
    if (!result.affectedRows) {
      return res.status(400).json("not found");
    }
    return res.status(200).json(result);
  });
};
