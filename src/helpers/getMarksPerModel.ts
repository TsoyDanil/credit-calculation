import {TBank} from "../data/banks.ts";


export const getMarksPerModel = (banksArray: TBank[]) => {
    const result = []
    for (let i = 0; i < banksArray.length; i++){
        for (let j = 0; j < banksArray[i].availableModels.length; j++){
            for (let w = 0; w < banksArray[i].availableMarks.length; w++){
                result.push(`${banksArray[i].availableModels[j]} - ${banksArray[i].availableMarks[w]} ${banksArray[i].releaseYearPermission} г`)
            }
        }
    }
    return result
}