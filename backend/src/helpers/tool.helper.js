export const toolHelpers = {
    validateCreateInfo: (info) =>
        typeof info.toolName === 'string' &&
        info.toolName &&
        info.category?.categoryId,
};
