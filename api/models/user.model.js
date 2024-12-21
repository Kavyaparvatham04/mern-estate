import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    avatar:{
        type: String,
        default: "https://www.bing.com/images/search?view=detailV2&id=5D854DEF13740AB8B312F36E571C24284A960A5C&thid=OIP.hqVxcc6_LqTo11wCPWw3JgHaE8&mediaurl=https%3a%2f%2fshotkit.com%2fwp-content%2fuploads%2f2021%2f06%2fCool-profile-picture-Instagram.jpg&exph=580&expw=870&q=profile+picture+ideas&simid=608029011986763267&ck=AD72F24DAD4DB591EA17927BF1ED9AC4&itb=0&FORM=IVCLIGhttps://th.bing.com/th/id/OIP.qgm73u6qEWovC4xX8DknSQHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
}, {timestamps : true} );

const User = mongoose.model('User', userSchema);

export default User;