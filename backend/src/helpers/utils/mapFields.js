import { mappingsFtoB } from '../../../data/mappings.js';

export const mapFields = (fields) => {
    const mappedFields = {};
    Object.entries(fields).forEach(([field, value]) => {
        mappedFields[mappingsFtoB[field]] = value;
    });
    return mappedFields;
};
