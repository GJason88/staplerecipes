import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../../../config/firebase.config';

const deleteImage = async (recipeId: string) => {
  if (!recipeId) return;
  try {
    const imageRef = ref(storage, `recipe_images/${recipeId}`);
    await deleteObject(imageRef);
  } catch (e) {
    throw new Error('Recipe deleted but failed to delete image');
  }
};

export default deleteImage;
