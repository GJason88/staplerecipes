import { mappingsBToF, mappingsFtoB } from '../../../data/mappings.js';

export const mapFields = (fields, toDB = true) => {
    const mappedFields = {};
    const map = toDB ? mappingsFtoB : mappingsBToF;
    Object.entries(fields).forEach(([field, value]) => {
        mappedFields[map[field]] = value;
    });
    return mappedFields;
};
