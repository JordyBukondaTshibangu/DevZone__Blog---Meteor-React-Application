import { Mongo } from 'meteor/mongo';


Meteor.methods({
    'developer.create'({fullName, dateOfBirth, email, password}){
        const avatar = "";
        const myBio = "";

        if(!fullName || !dateOfBirth || !email || !password)  return ;
        
        return DevelopersCollection.insert({
            fullName, dateOfBirth, email, password, avatar, myBio, createdAt : new Date()
        });

    },
    'dev.login'({ email, password}){
            if(!email || !password) return

            return DevelopersCollection.findOne({ email, password})
    },
    'developer.update'({ _id, fullName, dateOfBirth, email, myBio, avatar }){
        if(!_id ||  !fullName ||  !dateOfBirth ||  !email ||  !myBio ||  !avatar){
            const updatedDev = { 
                _id,
                fullName, 
                dateOfBirth, 
                email, 
                myBio, 
                avatar
            }
            console.log(updatedDev)
            return;
        }
        return DevelopersCollection.update({ _id }, 
                { $set : {
                    fullName, dateOfBirth, email, myBio, avatar
                }}
        )

    },
    'developer.remove'(email){
        return DevelopersCollection.remove({email});
    }
})


export const DevelopersCollection = new Mongo.Collection('developers');