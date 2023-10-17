export const generatePlaceholders = (num) => {
    const res = Array(num);
    for (let i = 0; i < num; i++) {
        res[i] = `$${i + 1}`;
    }
    return res;
};
