import React, { useEffect, useState } from "react"
import Post from "./Post";
import { addPost } from "../modules/PostManager";
import { Navigate, useNavigate } from "react-router-dom";

const PostForm = () => {
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [caption, setCaption] = useState("")

    const navigate = useNavigate();
    
    const saveNewPost = () => {
        const newPost = {
            title: title,
            imageUrl: url,
            caption: caption,
            userProfileId: 1,
            dateCreated: new Date()
        }
        addPost(newPost).then((p) => {
            navigate("/");
        });
    
    }

    return (
        <>
        <h1>Enter a new gif</h1>
        <input type="text" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
        <input type="text" placeholder="Image Url" onChange={(event) => setUrl(event.target.value)} />
        <input type="text" placeholder="Caption" onChange={(event) => setCaption(event.target.value)} />
        <button onClick={saveNewPost}>Submit</button>
        </>
    )
}

export default PostForm;

//don't bother with bootstrap-- just use form tags

// import { Button, Label, Form } from 'reactstrap';

// function PostForm() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="title">
//         <Label>Title</Label>
//         <Form.Control type="title" placeholder="Enter post title" />
//         {/* <Form.Text className="text-muted">
//           Please add your post title.
//         </Form.Text> */}
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="imageUrl">
//         <Form.Label>Please Add Image Url</Form.Label>
//         <Form.Control type="imageUrl" placeholder="ImageUrl" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="caption">
//       <Form.Control type="caption" placeholder="ImageCaption" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default PostForm;