import React from "react";

const baseUrl = '/api/post';

export const getAllPostsWithComments = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

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
  return fetch(baseUrl)
  .then((res) => res.json())
};