import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required:true},
    price: {type: Number, required:true},
    image: {type: Array},
    category: {type: String, required:true},
    subCategory: {type: String, required:true},
    sizes: {type: Array, required:true},
    bestseller: {type: Boolean},
    date: {type: Number, required:true}
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);  // when model product is already alvailabe then that will be used else it will create new model using schema 

// Schema is the structure how the data will be stored in database

export default productModel;