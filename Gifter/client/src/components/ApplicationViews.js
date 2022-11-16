import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import { Login } from "./Login";
import { Register } from "./Register";
import { getCurrentUser } from "../modules/UserManager";


const ApplicationViews = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localUser = getCurrentUser();
    if (!localUser) {
      setIsLoggedIn(false)
    }

  }, [isLoggedIn]);

  return (
    !isLoggedIn ?
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      :
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/add" element={<PostForm />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="*" element={<p>Whoops, nothing here...</p>} />
      </Routes>
  )
};
export default ApplicationViews;

// return (
//   <Routes>
//     <Route path="/login" element= {<Login />} />

//     <Route path="/register" element= {<Register />} />

//     <Route path="/" element= {<PostList />} />

//     <Route path="/posts/add" element={<PostForm />} />

//     <Route path="/posts/:id" element={<PostDetails />} />

//     <Route path="*" element={<p>Whoops, nothing here...</p>} />
//   </Routes>
// );