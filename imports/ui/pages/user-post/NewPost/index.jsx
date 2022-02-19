import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Success from '../../../components/feedback/Success';
import Error from '../../../components/feedback/Error';
import { PostContainer, PostForm, FormHeader, ImageContainer, Img, Input, Category, Button, CategoryOption } from './NewPostElement'

const NewPostPage = props => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e, editor) => {
        const data = editor.getData();
        setContent(data);
    }

    const submitPost = evt => {
        evt.preventDefault();
        const email = props.dev.email;
        const author = props.dev.fullName;
        const post = { title, category, tagline, description, image, author, email, content };
    
        Meteor.call('post.create', post, (error) => {
            if (error)  setError(true) 

            setSuccess(true);
            setTimeout(() => {
                // history.push('/home');
            }, 3000)
        })
    }

    const categories = ['programming', 'health', 'science', 'architecture', 'chemistry', 'tech', 'artificial intelligence', 'culture', 'music', 'religion']
    return (
        <PostContainer>
            <PostForm onSubmit={submitPost}>
                <FormHeader>
                    <Input type="text" placeholder="Headline" fontSize="3.5rem" value={title} onChange={ e => setTitle(e.target.value)} required/>
                    <Category value={category} onChange={event => setCategory(event.target.value)}>
                        {
                            categories.map((category, index) => <CategoryOption key={index} value={category}>{category}</CategoryOption>)
                        }
                    </Category>
                    <Input  type="text" placeholder="Add a tagline of less than 100 words" value={tagline} onChange={e => setTagline(e.target.value)}required/>
                    <Input value={description} placeholder="Add a description of less than 200 words" onChange={ e => setDescription(e.target.value)}  required/>
                    <Input type="text" placeholder="image url" value={image} onChange={ e => setImage(e.target.value)}/>
                </FormHeader>
               {
                    image && <ImageContainer> 
                                <Img src={image} alt="post-image"/>
                            </ImageContainer>     
               }    
                    <CKEditor editor={ClassicEditor}
                        data={content}
                        onChange={handleChange}/> 
                    <Button type="submit">Add Post </Button>
            </PostForm>
        </PostContainer>
    )
}


export default NewPostPage
