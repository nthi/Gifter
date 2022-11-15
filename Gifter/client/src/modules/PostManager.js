import React from "react";

const baseUrl = '/api/post/';

export const getAllPostsWithComments = () => {
  return fetch(`${baseUrl}/getWithComments`)
    .then((res) => res.json())
};

export const searchPosts = () => {
  return fetch(`${baseUrl}/search`)
  .then((res) => res.json())
}

export const addPost = (singlePost) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
};

export const getPostbyIdWithComments = (id) => {
  return fetch(`${baseUrl}/getPostWithComments?id=${id}`)
  .then((res) => res.json())
};