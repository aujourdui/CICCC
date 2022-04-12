import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPost } from "../util";

const PostPage = ({ user }) => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    getPost(postId).then(setPost);
  }, [postId]);

  if (!post) {
    return <h1>Loading Post...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Post Title: {post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <Link to={`/comments?q=${postId}`}>Read more</Link>
    </>
  );
};

export default PostPage;
