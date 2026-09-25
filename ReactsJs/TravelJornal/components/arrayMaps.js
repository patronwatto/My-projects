
// Challenge !!
// Given an array of numbers, return an array of each number squared.

const nums = [ 1, 2, 3, 4, 5]
// - ->     [ 1, 4, 9, 16, 25]

const numsquared = nums.map(function(num){
    return num*num
})

// Challenge #2
// Given an array of strings, return an array where the 1st 
// letter of each string is capitalised

const names = ['alice', 'bob', 'charlie', 'danielle']
// - -->      ['Alice', 'Bob', 'Charlie', 'Danielle']

const namesCapitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})


// Challenge #3;
// Given an array of Strings return an array of strings  that wraps each
// of the original strings in an HTML like <p></p> tag.

// e.g  given ['Bulbasaur', 'Charmander', 'Squirtle']
// return:  [<p>Bulbasaur</p>, <p>CHarmander</p>, <p>Squirtle</p>]

const animals = ['Bulbasaur', 'CHarmander', 'Squirtle']

const animalshtml = animals.map(animal => `<p>${animal}</p>`)


export default ArrayMappingInReact() {
    const ninjaTurtles = ['Donatello', 'MichaelAngelo', 'Raphael', 'Leonardo']
    const ninjaTurtlesHeaders = [
        <h1>Donatello</h1>,
        <h1>MichaelAngelo</h1>,
        <h1>Raphael</h1>,
        <h1>Leonardo</h1>
    ]

    return (
        <main>
            {ninjaTurtles.map(turtle => `<h2>${turtle}</h2>`)}
        </main>
    )
}


export const TravelData = [
        {
            id: 1,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji"
            },
            title: "Mount Fuji",
            country: "Japan",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji is the tallest mounting in Japan,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 2,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji"
            },
            title: "Mount Fuji2",
            country: "Japan2",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji2 is the tallest mounting in Japan2,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 3,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji"
            },
            title: "Mount Fuji3",
            country: "Japan3",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji3 is the tallest mounting in Japan3,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 4,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji4"
            },
            title: "Mount Fuji4",
            country: "Japan4",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji4 is the tallest mounting in Japan4,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 5,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji5"
            },
            title: "Mount Fuji5",
            country: "Japan5",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji5 is the tallest mounting in Japan5,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 6,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji6"
            },
            title: "Mount Fuji6",
            country: "Japan6",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji6 is the tallest mounting in Japan6,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 7,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji7"
            },
            title: "Mount Fuji7",
            country: "Japan7",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji7 is the tallest mounting in Japan7,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 8,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji8"
            },
            title: "Mount Fuji8",
            country: "Japan8",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji8 is the tallest mounting in Japan8,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 9,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji9"
            },
            title: "Mount Fuji9",
            country: "Japan9",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji9 is the tallest mounting in Japan9,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 10,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji10"
            },
            title: "Mount Fuji10",
            country: "Japan10",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji10 is the tallest mounting in Japan10,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 11,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji11"
            },
            title: "Mount Fuji11",
            country: "Japan11",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji11 is the tallest mounting in Japan11,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 12,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji12"
            },
            title: "Mount Fuji12",
            country: "Japan12",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji12 is the tallest mounting in Japan12,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 13,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji13"
            },
            title: "Mount Fuji13",
            country: "Japan13",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji13 is the tallest mounting in Japan13,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 
        {
            id: 14,
            img: {
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji14"
            },
            title: "Mount Fuji14",
            country: "Japan14",
            googleMapsLink: "https://maps.app.goo.gl/6RLY2DuuuqJ7kNGZ9",
            dates: "12-Jan, 2021 - 24 Jan, 2021",
            text: `Mount Fuji14 is the tallest mounting in Japan14,
             standing at 3.776meters (12.380 feet). Mount Fuji is the single most popular
              touristic site in Japan, both for japanese and foriegn tourists.` 
        }, 

] 

