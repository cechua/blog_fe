import React, { useState, useEffect } from "react";
import localStorageToken from "../util/localStorageToken";
import PostContainer from "./common/PostContainer";
import axios from "axios";
const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const token = localStorageToken.getToken("token");
  const fetchPosts = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/posts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = "/login";
        }
      });
    if (response) setPosts(response.data.posts);
  };
  useEffect(() => {
    if (!token) {
      //change this to a new page to inform user to login then redirect to login page or pop up a modal
      window.location.href = "/login";
      return <div>You are being redirected to login page...</div>;
    } else {
      fetchPosts();
    }
  }, []);

  return (
    <div className="container mx-auto h-[calc(100%-120px)] flex flex-col items-center shadow-md py-8 overflow-auto ">
      {posts.map((post) => (
        <PostContainer post={post} key={post._id} />
      ))}
    </div>
  );
};

export default HomePage;
