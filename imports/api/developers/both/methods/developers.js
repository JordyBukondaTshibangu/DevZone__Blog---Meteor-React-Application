import { DevelopersCollection } from '/imports/db/developers/collection'
import { Email } from 'meteor/email'

Meteor.methods({
	'developer.create'({ fullName, dateOfBirth, email, password }){
		const myBio = ''
		const followers = []

		if (!fullName || !dateOfBirth || !email || !password) {
			return
		}
		const developer = DevelopersCollection.find().fetch().filter(user =>  {
			if(user.email === email){
				return user 
			}
		})

		if (developer.length < 1) {
			const developer =  DevelopersCollection.insert({
				fullName,
				dateOfBirth,
				email,
				password,
				avatar:
					'https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png',
				myBio,
				createdAt: new Date(),
				followers,
			})
			
			return developer
		} else {
			return "An error occured"
		}
	},
	'dev.login'({ email, password }) {
		if (!email || !password) return

		 const developer = DevelopersCollection.find().fetch().filter(user =>  {
			 if(user.email === email && user.password === password){
				 return user 
			 }
		 })
         return developer[0]
	},
	'developer.update'({ _id, fullName, dateOfBirth, email, myBio, avatar }) {
		if (!_id || !fullName || !dateOfBirth || !email || !myBio || !avatar) {
			const updatedDev = {
				_id,
				fullName,
				dateOfBirth,
				email,
				myBio,
				avatar,
			}
			console.log(updatedDev)
			return
		}
		return DevelopersCollection.update(
			{ _id },
			{
				$set: {
					fullName,
					dateOfBirth,
					email,
					myBio,
					avatar,
				},
			}
		)
	},
	'developer.remove'(email) {
		return DevelopersCollection.remove({ email })
	},
	sendEmail(to) {
		check([to], [String])
		this.unblock()

		Email.send({
			to: to,
			from: 'jordytshibss@gmail.com',
			subject: 'Welcome to DevZone',
			text:
				'Welcome to devZone, Where you belong and you share your thougths freely and smartly',
		})
	},
})
