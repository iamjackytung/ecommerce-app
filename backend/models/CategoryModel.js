const mongoose = require("mongoose");

const categorySchema = moongoose.categorySchema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "default category description" },
  image: { type: String, default: "/images/tablets-category.png" },
  attrs: [{ key: { type: String } }],
});
