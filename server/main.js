import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '../imports/api/collections/postCollections';
import { DevelopersCollection } from '../imports/api/collections/developersCollection';

const posts = [
  {
    title : 'No woman no cry', 
    tagline : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document', 
    description : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book', 
    image : 'https://static.toiimg.com/photo/msid-58515713,width-96,height-65.cms',  
    author : 'Jordy Tshibss',
    email : 'jordytshibss@test.com',
    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  },
  {
    title : 'Bob Marley The Great', 
    tagline : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document', 
    description : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book', 
    image : 'https://wallpapercave.com/wp/wp2550669.jpg',  
    author : 'Jordy Tshibss',
    email : 'huygens@test.com',
    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  },
  {
    title : 'The little girl from the river', 
    tagline : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document', 
    description : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book', 
    image : 'https://images.unsplash.com/photo-1525673812761-4e0d45adc0cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZSUyMHBob3RvfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',  
    author : 'Jordy Tshibss',
    email : 'emma@test.com',
    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  }, 
  {

    title : "The New break through in animology",
    tagline : "Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous",
    description : "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
    image : "https://wallpapercave.com/wp/wp2920778.jpg",
    author : "Jordy Tshibss The Great",
    email : "jordytshibss@test.com",
    content : "Dogs are considered by many to be man’s best friend, and a lot of us love to wonder about exactly what our loyal and energetic companions are thinking or what they would say to us if they were talking animals. The Texts From Dog Tumblr offers answers to these questions with a modern twist – as the name suggests, the blog is all about the imaginary SMS exchange between a talking dog and his owner.\n\nOctober Jones, the blog’s creator (and also the talented blogger behind these clever portrait illustrations), has a knack for capturing the dog language that a pooch might have if they could text and had iPhones. From his manic, repetitive texting in all capital letters to his exuberance and enthusiasm, “Dog’s” texts perfectly capture a typical funny dog’s personality. Most mutt owners have, at one point or another, had to deal with a trashed house or had their pet beg relentlessly for some food. Jones has released a couple of books about Texts From Dogs that you can see here.",
  }
]


function insertDev({ fullName, dateOfBirth, email, myBio, password, avatar }){
  DevelopersCollection.insert({fullName,avatar, dateOfBirth, email, myBio, password, createdAt : new Date()})
}
function insertPost({title, tagline, description, image, author, email, content}){
  PostsCollection.insert({title, tagline, description, image, author, email, content, createdAt : new Date()});
}


Meteor.startup(() => {

  if(DevelopersCollection.find().count() < 2){

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
  if(PostsCollection.find().count() === 0 ){
    posts.forEach(post => {
        const { title, tagline, description, image, author, email, content } = post;
        insertPost({title, tagline, description, image, author, email, content})
    })
  }

  Meteor.publish('posts', function(){
    return PostsCollection.find({});
  })
  Meteor.publish('developers', function(){
    return DevelopersCollection.find({});
  })
});


