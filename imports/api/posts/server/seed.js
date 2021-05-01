import {PostsCollection} from "../../../db/posts/collection";

const posts = [
    {
        title : 'No woman no cry again',
        tagline : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        description : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book',
        image : 'https://static.toiimg.com/photo/msid-58515713,width-96,height-65.cms',
        author : 'Jordy Bukonda Tshibangu',
        email : 'jordytshibss@gmail.com',
        category : 'culture',
        content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        likes : 0,
        comments : [ {
            author : 'Jordy Bukonda Tshibangu',
            email : 'jordytshibss@gmail.com',
            date : new Date(),
            content : 'This is an awesome post, we would like to have more'
        },
        {
            author : 'Jeanica',
            email : 'jeaytshiams@gmail.com',
            date : new Date(),
            content : 'This is an great post, I like it'
        }]
    },
    {
        title : 'Bob Marley The Great',
        tagline : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        description : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book',
        image : 'https://wallpapercave.com/wp/wp2550669.jpg',
        author : 'Jordy Bukonda Tshibangu',
        email : 'huygens@test.com',
        category : 'Music',
        content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        likes : 0,
        comments : [ {
            author : 'Jordy Bukonda Tshibangu',
            email : 'jordytshibss@gmail.com',
            date : new Date(),
            content : 'This is an awesome post, we would like to have more'
        },
        {
            author : 'Jeanica',
            email : 'jeaytshiams@gmail.com',
            date : new Date(),
            content : 'This is an great post, I like it'
        }]
    },
    {
        title : 'The little girl from the river ',
        tagline : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        description : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book',
        image : 'https://images.unsplash.com/photo-1525673812761-4e0d45adc0cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZSUyMHBob3RvfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
        author : 'Jordy Bukonda Tshibangu',
        email : 'emma@test.com',
        category : 'Novel',
        content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        likes : 0,
        comments : [ {
            author : 'Jordy Bukonda Tshibangu',
            email : 'jordytshibss@gmail.com',
            date : new Date(),
            content : 'This is an awesome post, we would like to have more'
        },
        {
            author : 'Jeanica',
            email : 'jeaytshiams@gmail.com',
            date : new Date(),
            content : 'This is an great post, I like it'
        }]
    },
    {

        title : "The New break through in animology",
        tagline : "Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous",
        description : "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
        image : "https://wallpapercave.com/wp/wp2920778.jpg",
        author : "Jordy Bukonda Tshibangu",
        email : "jordytshibss@gmail.com",
        content : "Dogs are considered by many to be man’s best friend, and a lot of us love to wonder about exactly what our loyal and energetic companions are thinking or what they would say to us if they were talking animals. The Texts From Dog Tumblr offers answers to these questions with a modern twist – as the name suggests, the blog is all about the imaginary SMS exchange between a talking dog and his owner.\n\nOctober Jones, the blog’s creator (and also the talented blogger behind these clever portrait illustrations), has a knack for capturing the dog language that a pooch might have if they could text and had iPhones. From his manic, repetitive texting in all capital letters to his exuberance and enthusiasm, “Dog’s” texts perfectly capture a typical funny dog’s personality. Most mutt owners have, at one point or another, had to deal with a trashed house or had their pet beg relentlessly for some food. Jones has released a couple of books about Texts From Dogs that you can see here.",
        likes : 0,
        category : 'science',
        comments : [ {
            author : 'Jordy Bukonda Tshibangu',
            email : 'jordytshibss@gmail.com',
            date : new Date(),
            content : 'This is an awesome post, we would like to have more'
        },
        {
            author : 'Jeanica',
            email : 'jeaytshiams@gmail.com',
            date : new Date(),
            content : 'This is an great post, I like it'
        }]
    }
]

function insertPost({title, tagline, description, image, author, email, category, content, likes, comments}){
    PostsCollection.insert({title, tagline, description, image, author, email, likes, comments, category, content, createdAt : new Date()});
}

if(PostsCollection.find().count() < 2){
    console.log("Inserting Posts data into db")
    posts.forEach(post => {
        const { title, tagline, description, image, author, email, category, content, likes, comments } = post;
        insertPost({title, tagline, description, image, author, email, category, content, likes, comments })
    })
}