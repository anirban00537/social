import {
  createPost,
  fetchPosts,
  updatePost,
  deletePost,
  likePost,
} from "../api";

import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  LIKE,
} from "../constants/actionTypes";

//action creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchPosts();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPostnow = (post) => async (dispatch) => {
  try {
    const { data } = await createPost(post);
    console.log(data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePostnow = (id, post) => async (dispatch) => {
  try {
    const { data } = await updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePostnow = (id) => async (dispatch) => {
  try {
    await deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const likePostNow = (id) => async (dispatch) => {
  try {
    const { data } = await likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
