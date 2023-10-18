import { nutrientsBToF, nutrientsFToB } from '../../../data/mappings.js';

export const mapNutrients = (nutrients, toDB = false) => {
    let mappedNutrients = {};
    const map = toDB ? nutrientsFToB : nutrientsBToF;
    Object.entries(map).forEach(([oldKey, newKey]) => {
        if (oldKey in nutrients)
            mappedNutrients[newKey] = nutrients[oldKey];
    });
    return mappedNutrients;
};
