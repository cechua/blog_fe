import React, { useState } from "react";
import axios from "axios";
import localStorageToken from "../util/localStorageToken";

const CreatePost = () => {
  const token = localStorageToken.getToken("token");
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/post/create`,
        { title: title, content: content },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        window.location.href = "/home";
      } else if (response.status === 401) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container mx-auto h-[800px] flex flex-col items-center shadow-md py-4">
      <h3 className="font-bold h-[40px]">Create a new Post</h3>
      <form onSubmit={handleSubmit} className="w-full px-8">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            type="text"
            placeholder="content/message"
            required
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {/* add loading spinner on login */}
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
