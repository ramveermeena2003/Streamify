import User from "../models/User.js";

export async function getRecommendedUsers(req,res){
    try {
        const currentUserId = req.user.id;
        const currentUser = req.user;

        const recommendedUsers = await User.find({
            $and: [
                {_id: {$ne: currentUserId}}, //exclude current user
                {_id: {$nin: currentUser.friends}}, // exclude current user's friends
                {isOnboarded:true}
            ]
        });

        res.status(200).json({success:true, recommendedUsers});
    } catch (error) {
        console.log("Error in getRecommendedUsers controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export async function getMyFriends(req,res){

}