const mongoose = require("mongoose");

//* Designing The Story Schema!
storySchema = mongoose.Schema({
    Author: {
        type: String, //* Author field will be required but we are gonna add a default value of Anonymous
        required: true,
        default: 'Anonymous'
    },
    
    Title: {
        type: String, //* The title of the story is also required and the minimum length of it will be 7 and the max length will be 100
        required: [true, "You need to give your great story a title!"],
        min: [7, 'The minimum length for the title is 7'],
        max: [100, 'Duh! Its too much please shorten the title the max you can have is 100 characters!']
    },

    Description: {
        type: String, //* Description of the story is also required and the minimum length will be 10 and the maximum will be a 1000
        required: [true, "Give Your Story a nice description UwU"],
        min: [10, "Your description must be more than 100 characters"],
        max: [1000, "Woah thats too much make it short and simple"]
    },
    
    Story: {
        type: String, //* The Story field is also required and the minimum length of a story will be of 250 characters
        required: [true, "You must have a story to publish one like duhh! >_<"],
        min: [250, "Your story must be greater than 250 words"],
    }
})

module.exports = mongoose.model("Stories", storySchema)