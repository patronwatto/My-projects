// const inputField = document.getElementById('email-input')

// document.getElementById(sub-btn).addEventListener('click', async(e) => {
//     e.preventDefault()

//     try {
//     const response = await fetch('./sub', {
//         method: "POST", 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({email: inputField.value}),
//     })
//     const data = await response.json()
//     } catch (error) {
//         formMessageText.textContent = 'Serious ghouls: Please try again.'
//         console.error("Error: ", error)
//     }
// })

// import sanitizeHtml from 'sanitize-html'
// console.log(sanitizeHtml('Hi: <h1> I'm in an H1 tag</h1>', {allowedTags: [], allowedAttributes: {}}))
 
// const hacker = {
// title: 'Dr',
// surname: 'Evil'.
// location: 'A dark room somewhere'                                                                                        }

// console.log(sanitizeHtml(hacker.title))          the sanitize function only takes strings as arguments. It won't render if objects are passed to it as arguments 
// console.log(sanitizeHtml(hacker.surname))    
// console.log(sanitizeHtml(hacker.location))    


try {
    const data = await fetch("/api")
    const response = await data.json()
    renderCards(response)
} catch (err) {
    console.log(err)
}

function renderCards (cardsData) {
    const container = document.querySelector('.cards-container')
    let cardsHTML = ''

    cardsData.forEach((card, i) => {
        cardsHTML += `
        <article class='sighting-card' aria-labelledby='sighting-title-${i}'> 
        <p class='card-details'>${card.timeStamp}, ${card.location}</p>
        <h3 id='sighting-title-${i}'>${card.title}</h3>
        <div class='sighting-text-wrapper'>
            <p class='sighting-text'>${card.text}</p>
        </div>
        <button class='read-more-btn' aria-expanded='false'>Read in full</button>
        </article>
        `
    })
    container.innerHTML = cardsHTML
}

// handle card expand/collapse
document.querySelector('.cards-contain').addEventListener('click', (e) => {
    if(e.target.classList.contains('read-more-btn')) return 
    const button = e.target
    const sightingCard = button.closest('.sighting-card')
    const isExpanded = sightingCard.classList.toggle('expanded')

    button.setAttribute('aria-expanded', isExpanded ? 'true' : 'false')
    button.textContent = isExpanded ? 'show less' : 'Read in full'
})