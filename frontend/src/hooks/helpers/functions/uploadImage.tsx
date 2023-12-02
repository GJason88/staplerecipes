import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../config/firebase.config';

const uploadImage = async (recipeId: string, image: File | null) => {
  if (!image || !recipeId) return;
  try {
    const storageRef = ref(storage, `recipe_images/${recipeId}`);
    await uploadBytes(storageRef, image);
  } catch (e) {
    throw new Error('Recipe created but failed to upload image');
  }
};

export default uploadImage;
