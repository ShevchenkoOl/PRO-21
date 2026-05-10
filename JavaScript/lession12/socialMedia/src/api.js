import axios from "axios";

const API_URL = "http://localhost:30001/posts";

export async function fetchPosts() {
  try {
    const responce = await axios.get(API_URL);
    // console.log(responce);
    return responce.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};



export async function createPost(newData) {
  try {
    const responce = await axios.post(API_URL, newData);
    return responce.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


export async function deletePost(id) {
  try {  // http://localhost:30001/posts/6dz5vU_G4bA
    const responce = await axios.delete(`${API_URL}/${id}`);
    return responce.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export async function updatePost(id, updatePost) {
  try { 
    const responce = await axios.patch(`${API_URL}/${id}`,  updatePost);
    return responce.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

