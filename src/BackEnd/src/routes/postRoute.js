const express = require('express');
const postRoute = express.Router();
const {
    getTrendingPost,
    getPostByID,
    getPostByKeyword,
    getPostByUser,
    getLikeOfPost,
    getResponseOfPost,
    createPost,
    updatePost,
    updatePaywallOfPost,
    updatePublishTimeOfPost,
    updateScheduleTimeOfPost,
    deletePost,
    likePost,
    unlikePost,
    responsePost,
    deleteResponse,
    replyResponse,
    deleteReply,
    createHighlight,
    deleteHighlight,
    getPostMonthlyData
} = require('../controllers/postController')

// Get trending post from view
postRoute.get("/trending-view/user/:id_user", getTrendingPost)

postRoute.get("/monthly-data", getPostMonthlyData)


postRoute.get("/:id_post/user/:id_user", getPostByID)

// Search for post by keyword
postRoute.get("/search/:keyword/user/:id_user", getPostByKeyword)

// Get all posts of a user
postRoute.get("/user/:id_user", getPostByUser)

postRoute.post("", createPost)

postRoute.put("", updatePost)

postRoute.put("/paywall/:id_post", updatePaywallOfPost)

postRoute.put("/publish_time/:id_post", updatePublishTimeOfPost)

postRoute.put("/schedule_time/:id_post", updateScheduleTimeOfPost)

// postRoute.put("/topic/:id_post", updateTopicOfPost)

postRoute.delete("", deletePost)


postRoute.get("/like/:id_post", getLikeOfPost)

postRoute.post("/like", likePost)

postRoute.delete("/like", unlikePost)


postRoute.get("/response/:id_post", getResponseOfPost)

postRoute.post("/response", responsePost)

postRoute.delete("/response", deleteResponse)


postRoute.post("/reply", replyResponse)

postRoute.delete("/reply", deleteReply)


// postRoute.post("/highlight", createHighlight)

// postRoute.delete("/highlight/:id_highlight", deleteHighlight)


module.exports = postRoute;