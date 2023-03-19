const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CategorySchema = new Schema({
    categoryName: {
        type: String, 
        required: true, 
        unique: true,
        maxLength: 25
    },
    gender:{
        type: String, 
        required: true, 
        enum: [
            'Male',
            'Female',
            'Nonbinary',
            'Non-binary',
            'male',
            'female',
            'nonbinary',
            'non-binary',
        ]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Category', CategorySchema);