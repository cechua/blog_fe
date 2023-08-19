import React, { useState, useEffect } from "react";
import localStorageToken from "../util/localStorageToken";
import PostContainer from "./common/PostContainer";
import axios from "axios";
const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const token = localStorageToken.getToken("token");

  useEffect(() => {
    if (!token) {
      //change this to a new page to inform user to login then redirect to login page or pop up a modal
      window.location.href = "/login";
      return <div>You are being redirected to login page...</div>;
    }
    const fetchPosts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/posts`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosts(response.data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto h-[800px] flex flex-col items-center shadow-md py-4">
      {posts.map((post) => (
        <PostContainer post={post} key={post._id} />
      ))}
    </div>
  );
};

export default HomePage;
