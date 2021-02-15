import { Meteor } from 'meteor/meteor';
import "/imports/api/posts/server";
import "/imports/api/developers/server";

Meteor.startup(() => {
    Meteor.startup( function() {
        process.env.MAIL_URL = 
           "smtp://postmaster@sandboxb4be95016b4b4490a564bcaf7e3a6bfd.mailgun.org:280fef3e4f3da3618dbd374edc7f6652-2fbe671d-b343022b@smtp.mailgun.org:587";
     });
});


