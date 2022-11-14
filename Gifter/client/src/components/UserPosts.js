import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Post from './Post';
import { getAllPostsWithComments } from "../modules/PostManager";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPostsWithComments().then(allPosts => setPosts(allPosts));
  };


  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.map((post) => (
            <>
            <Post key={post.id} post={post} />

            <ListGroup>
            {post.comments.map((c) => (
              <ListGroupItem>{c.message}</ListGroupItem>
            ))}
          </ListGroup>
          </>
          ))}

        </div>
      </div>
    </div>
  );
};

export default PostList;