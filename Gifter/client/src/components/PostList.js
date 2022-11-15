import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Post from './Post';
import { getAllPostsWithComments, searchPosts } from "../modules/PostManager";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const [query, setQuery] = useState("");

  const getPosts = () => {
    getAllPostsWithComments().then(allPosts => setPosts(allPosts));
  };

  const searchAllPosts = (e) => {
    e.preventDefault()
    searchPosts(query).then(post => setPosts(post));
  };


  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    <h2>Search Posts</h2>
    <form>
    <div>
      <input onChange={e => setQuery(e.target.value)} placeholder="Enter Key Word" />
    </div>
    <button onClick={searchAllPosts}>Submit</button>
    </form>
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
    </>
  );
};

export default PostList;