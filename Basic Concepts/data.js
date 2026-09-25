export const travelDestinationsArr = [
    {
        destination: 'Nova Prime',
        distanceKm: 500000000,
        travelTimeDays: 365,
        priceUSD: 1000000,
        description: 'Experience the exotic beauty and thriving ecosystem on Nova Prime.'
    },
    {
        destination: 'Abuja and Lagos Cities Nigeria',
        distanceKm: 384400,
        travelTimeDays: 1,
        priceUSD: 2500,
        description: 'Visit multiple touristic sites in Nigeria, move about and enjoy the hussle and bussle of the place.'
    }, 
    {
        destination: 'Berlin, Bavaria, Munich, etc...',
        distanceKm: 67800000,
        travelTimeDays: 3,
        priceUSD: 13000,
        description: 'Travel and enjoy the entire town and country site of Germany.'
    }
]

export function getStockData(){
    return {
        name: 'QtechAI',
        Symbol: 'QTA',
        price: (Math.random()*3).toFixed(2),
        time: new Date().toLocaleDateString()
    }
}

export const getRealEstateData = [
    {
        town: 'Kensington',
        city: 'London',
        price: 490000,
        description: 'Highly desirable location in stunning views!', 
        size: 62,
        imgname: './images/(17).jpg'
    },
    {
        town: 'Wirral',
        city: 'Liverpool',
        price: 450000,
        description: 'Astonishing view with a modern finish!', 
        size: 116,
        imgname: './images/(19).jpg'
    },
     {
        town: 'Beach',
        city: 'Brighton',
        price: 420000,
        description: 'Beautiful Interior and spacious rooms!', 
        size: 80,
        imgname: './images/(20).jpg'
    },
     {
        town: 'Highlands',
        city: 'Scotland',
        price: 350000,
        description: 'Lots of potentials, snug. A must see!', 
        size: 34,
        imgname: './images/1.jpeg'
    },
     {
        town: 'Bermingram',
        city: 'England',
        price: 500000,
        description: 'Highly desirable location in outstanding views in a highly secure neighbourhood!', 
        size: 100,
        imgname: './images/171.jpg'
    },
]

export const propertyForSaleArr = [
    {
        town: 'Austin, Texas',
        price: 490000,
        description: 'Maldivs like facade with astonishing views!', 
        roomsM2: [14, 18, 14, 10, 6],
        imgname: './images/112.jpeg'
    },
    {
        town: 'Hamton, Manchester',
        price: 450000,
        description: 'Nothing as breath taking as the country"s breath taking open airage!', 
        roomsM2: [18, 16, 15, 14, 17, 19, 9, 8],
        imgname: './images/(1).jpg'
    },
    {
        town: 'Merryland, California',
        price: 420000,
        description: 'A misture of multi-cultural entourage!', 
        roomsM2: [5, 10, 8, 13, 20],
        imgname: './images/(6).jpg'
    },
    {
        town: 'Queens, California',
        price: 350000,
        description: 'A Place to build skill and dreams for a better tomorrow!', 
        roomsM2: [6, 12, 11, 5],
        imgname: './images/(12).jpg'
    },
    {
        town: 'Mulang, Bamenda',
        price: 500000,
        description: 'A place where humble beginings give higher possibilities of better ending!', 
        roomsM2: [10, 9, 13, 18, 15, 16],
        imgname: './images/11.jpeg'
    }
]

export const placeHolder = {
        town: 'Anywhere in the world',
        price: 1000,
        description: 'Currently unavailable!', 
        roomsM2: [0, 0, 0, 0, 2, 3],
        imgname: ''
}

// export { travelDestinationsArr, getStockData} 