// Search all
export const searchOrder = async (req, res) => {
  // TODO: replace with mongoose db result
  console.log("req.params -- ", req.query);
  res.json({ s: req.query.keyword });
};
