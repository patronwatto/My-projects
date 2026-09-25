export const getDataByPathParam = (data, locationType, locationName) => {

                return data.filter((des) => {
                    return des[locationType].toLowerCase() === locationName.toLowerCase() 
            })
    
}