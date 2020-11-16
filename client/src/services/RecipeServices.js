import ApiClient from "./ApiClient";

export const __UploadRecipe = async (formData, userId) => {
  try {
    const res = await ApiClient.post(`/recipes/${userId}`, formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetRecipes = async (page, limit) => {
  try {
    const res = await ApiClient.get(
      `/recipes?page=${page || 1}&limit=${limit || 10}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetRecipe = async (recipeId) => {
  try {
    const res = await ApiClient.get(`/recipes/${recipeId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateRecipe = async (formData, recipeId) => {
  try {
    const res = await ApiClient.put(`/recipes/${recipeId}?active=true`, formData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteRecipe = async (recipeId) => {
  try {
    const res = await ApiClient.delete(`/recipes/${recipeId}?active=true`);
    return res;
  } catch (error) {
    throw error;
  }
};
