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
    email : 'jordytshibss@test.com',
    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  },
  {
    title : 'The little girl from the river', 
    tagline : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document', 
    description : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book', 
    image : 'https://images.unsplash.com/photo-1525673812761-4e0d45adc0cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZSUyMHBob3RvfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',  
    author : 'Jordy Tshibss',
    email : 'jordytshibss@test.com',
    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  }
]


function insertDev({ fullName, dateOfBirth, email, myBio, password, avatar }){
  DevelopersCollection.insert({fullName,avatar, dateOfBirth, email, myBio, password, createdAt : new Date()})
}
function insertPost({title, tagline, description, image, author, email, content}){
  PostsCollection.insert({title, tagline, description, image, author, email, content, createdAt : new Date()});
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


