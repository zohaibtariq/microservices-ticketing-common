export const generateRandomInteger = (min: number, max: number): number => {
    // Ensure that the min is less than max
    if (min >= max) {
        throw new Error('Minimum value must be less than the maximum value.');
    }
    // Calculate a random integer within the specified range
    const randomInteger: number = Math.floor(Math.random() * (max - min)) + min;
    return randomInteger;
};

const generateRandomFloat = (min: number, max: number): number => {
    // Ensure that the min is less than max
    if (min >= max) {
        throw new Error('Minimum value must be less than the maximum value.');
    }

    // Generate a random floating-point number within the specified range
    const randomFloat: number = Math.random() * (max - min) + min;

    return randomFloat;
};