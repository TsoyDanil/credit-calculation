export const checkObjectValues = (obj: any) => {
    for (const key in obj) {
        if (obj[key] === null || obj[key] === "")
            return false;
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            if (!checkObjectValues(obj[key])) {
                return false;
            }
        }
    }
    return true;
}