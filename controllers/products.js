// controllers/products.js
const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "getAllProducts" });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "getAllProductsTesting" });
};

export { getAllProducts, getAllProductsTesting };
