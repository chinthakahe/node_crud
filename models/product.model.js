const mongoos   = require('mongoose');
const Schema    = mongoos.Schema;

let ProductSchema = new Schema ({
    name: {type:String, require:true, max:100},
    price: {type:Number, require:true}
});

//Export the model
module.exports = mongoos.model('Product', ProductSchema);