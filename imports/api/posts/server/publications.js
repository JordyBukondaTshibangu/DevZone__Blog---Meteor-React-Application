import {Meteor} from "meteor/meteor";
import {PostsCollection} from "../../../db/posts/collection";

Meteor.publish('posts', function(){
    return PostsCollection.find({});
})