import { DevelopersCollection } from "/imports/db/developers/collection";
import { Email } from 'meteor/email';


Meteor.methods({
    'developer.create'({fullName, dateOfBirth, email, password}){
        const avatar = "";
        const myBio = "";

        if(!fullName || !dateOfBirth || !email || !password)  return ;

        const dev = DevelopersCollection.findOne({email});

        if(!dev) {
            return DevelopersCollection.insert({
                fullName, dateOfBirth, email, password, 
                avatar : "https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png", 
                myBio, createdAt
            });
        };
        
        

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
    }, 
    'sendEmail'(to){
        check([to], [String]);
        this.unblock();

        Email.send({
            to: to,
            from: "jordytshibss@gmail.com",
            subject: "Welcome to DevZone",
            text: "Welcome to devZone, Where you belong and you share your thougths freely and smartly"
        });
    }
})