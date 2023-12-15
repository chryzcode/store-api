const getAllProducts = async (req, res) => {
  throw new Error('testing async error')
  res.status(200).json({ msg: "Products testing route" });
};

const getAllProductsStatic = async (req, res) => {
   res.status(200).json({ msg: "Products testing route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
