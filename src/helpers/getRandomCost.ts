export const getRandomCost = (minValue: number, maxValue: number) => {
    const randomNumber: number = Math.floor(Math.random() * (maxValue - minValue + 1)) + 100000;
    return randomNumber;
}