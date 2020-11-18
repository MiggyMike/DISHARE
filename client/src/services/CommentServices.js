import ApiClient from "./ApiClient";

export const __UploadComment = async (commentText, recipeId, userId) => {
  try {
    const res = await ApiClient.post(`/comments/${recipeId}/user/${userId}`, {
      comment: commentText,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetComments = async (page, limit) => {
  try {
    const res = await ApiClient.get(
      `/comments?page=${page || 1}&limit=${limit || 10}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateCommment = async (formData, commentId) => {
  try {
    const res = await ApiClient.put(
      `/comments/${commentId}?active=true`,
      formData
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteComment = async (commentId) => {
  try {
    const res = await ApiClient.delete(`/comments/${commentId}?active=true`);
    return res;
  } catch (error) {
    throw error;
  }
};
