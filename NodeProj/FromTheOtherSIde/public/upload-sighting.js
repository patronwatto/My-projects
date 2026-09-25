
const formMessageText = document.getElementById('form-message')

const isaDateString = document.getElementById('datetime').value

if (!isaDateString) {
    formMessageText.textContent = "Please select a date and time!"
    return
}

const date = new Date(isaDateString)

const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
}

const readableDate = date.toLocalString("en-GB", options)

const formData = {
    location: location,
    timeStamp: readableDate,
    text: text,
    title: title,
}

try {
    formMessageText.textContent = ""
    const response = await fetch("/api", {
        method: "POST", 
        headers: {
            "Content-Type" : "application/json" 
        },
        body: JSON.stringify(formData),
    })
    if(response.ok){
        formMessageText.innerHTML = `Your sighting was uploaded successfully. View it 
        <a href="./sightings.html">Here.</a>`
        form.reset()
    } else {
        formMessageText.textContent = 'The server Ghosted you(!). Please try again.'
        console.error("Server Error: ", response.statusText)
    }
} catch(err) {
    console.log(err)
}
