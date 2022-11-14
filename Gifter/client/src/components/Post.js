import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
      <Link to={`/posts/${post.id}`}>
    <strong>{post.title}</strong>
</Link>
        <p>{post.caption}</p>
        {/* following is way to have comments inside post card. I've refactored b/c of setup in Details, but might want to revert to this. */}
          {/* <article>
            <ul>Comments:</ul>
            {
              post.comments?.map((comment) => (
                <li>
                  {comment.message}
                </li>
              ))

            }
          </article> */}
      </CardBody>
    </Card>
  );
};

export default Post;