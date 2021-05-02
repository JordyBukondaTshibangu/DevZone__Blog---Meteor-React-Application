import {PostsCollection} from "/imports/db/posts/collection";

Meteor.methods({
    'post.create'({ title, category, tagline, description, image, author, email, content}){

        if (!title || !category || !tagline || !description || !author || !email || !content) return

        return PostsCollection.insert({
            title,
            category,
            tagline,
            description,
            image,
            author,
            email,
            content,
            likes : 0,
            comments : [],
            createdAt: new Date(),
        })
    },
    'post.update'({_id, updatedCategory, updatedTitle, updatedTagline, updatedDescription, updatedImage, updatedContent}){

        if (!updatedTitle || !updatedTagline || !updatedDescription  || !updatedContent) return

        return PostsCollection.update({ _id},
            {$set :
                    {
                        title : updatedTitle,
                        category : updatedCategory,
                        tagline : updatedTagline,
                        description : updatedDescription,
                        image : updatedImage,
                        content  : updatedContent
                    }
            });
    },
    'post.remove'(_id){
        return PostsCollection.remove({_id});
    },
    'post.like'({_id, like}){
        if(!_id || !like) return 

        return PostsCollection.update({_id},
            { $set : {
                likes : like
            }})
    },
    'post.comment'({ _id, content, email, author}){
        if(!_id || !content || !email || !author) {
            return;
        } 

        const newComment = {
            email, author, content, date : new Date()
        }

        return PostsCollection.update({_id},
            { $push : {
                comments : newComment
            }})
    }
})

