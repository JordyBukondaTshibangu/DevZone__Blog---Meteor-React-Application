import "/imports/api/posts/server";

import { Meteor } from 'meteor/meteor';
import { DevelopersCollection } from '../imports/api/collections/developersCollection';

function insertDev({ fullName, dateOfBirth, email, myBio, password, avatar }){
  DevelopersCollection.insert({fullName,avatar, dateOfBirth, email, myBio, password, createdAt : new Date()})
}

Meteor.startup(() => {
  if(DevelopersCollection.find().count() === 0){
    insertDev({
      fullName : 'Jordy Tshibss',
      dateOfBirth : '1 August 1997',
      avatar : 'http://dailynous.com/wp-content/uploads/2017/05/descartes-square.jpg',
      email : 'jordytshibss@test.com',
      myBio : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
      password : '123456'
    })
    insertDev({
      fullName : 'Emma Tshibss',
      dateOfBirth : '23 October 1995',
      avatar : 'https://www.chemistry.msu.edu/www/cache/file/7C11D7BA-2EAA-4EAD-875702F8D6717ADA.jpg',
      email : 'emma@test.com',
      myBio : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
      password : '123456'
    })
    insertDev({
      fullName : 'Theo Tshibss',
      dateOfBirth : '10 June 1994',
      avatar : 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/06/19/Muhammad-Ali.jpg',
      email : 'theo@test.com',
      myBio : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
      password : '123456'
    })
    insertDev({
      fullName : 'Renelle Tshibss',
      dateOfBirth : '08 July 1992',
      avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6XsjjSisK-_3SAiW5K3Z1feZ__dJLnIGTA&usqp=CAU',
      email : 'renelle@test.com',
      myBio : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
      password : '123456'
    })
    insertDev({
      fullName : 'Huygens Tshibss',
      dateOfBirth : '04 November 1992',
      avatar : 'https://i.dailymail.co.uk/1s/2020/01/31/21/24147206-0-image-a-13_1580505767287.jpg',
      email : 'huygens@test.com',
      myBio : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
      password : '123456'
    })
  }

  Meteor.publish('developers', function(){
    return DevelopersCollection.find({});
  })
});


