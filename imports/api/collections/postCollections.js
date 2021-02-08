import { Mongo } from 'meteor/mongo'

Meteor.methods({
	'post.create'({ title, tagline, description, image, author, email, content}){

		if (!title || !tagline || !description || !author || !email || !content) return
		
		return PostsCollection.insert({
			title,
			tagline,
			description,
			image,
			author,
			email,
			content,
			createdAt: new Date(),
		})
	},
	'post.update'({_id, updatedTitle, updatedTagline, updatedDescription, updatedImage, updatedContent}){

		if (!updatedTitle || !updatedTagline || !updatedDescription  || !updatedContent) return
			
		return PostsCollection.update({ _id}, 
			{$set : 
				{	
					title : updatedTitle,
					tagline : updatedTagline,
					description : updatedDescription,
					image : updatedImage,
					content  : updatedContent
				}
			});
	}, 
	'post.remove'(_id){
		return PostsCollection.remove({_id});
	}
})

export const PostsCollection = new Mongo.Collection('posts')

