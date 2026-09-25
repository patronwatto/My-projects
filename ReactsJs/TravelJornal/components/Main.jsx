

export default Main() {
    return (
        <article className="main">
            <img className="post-pic" src="./images/IMG-20151207-WA0003.jpg" alt="ice pic" />
            <div className="text-area">
                <img className="location-icon" src="./images/Screenshot 2025-04-29 074201.png" alt=" green pic" />
                <span className="location">JAPAN</span> 
                <span className="view-google-map"><a href="https://www.google.com/maps/place/Mount+Fuji/935.3606421,138.7170637.15z/
data=!3ml!14b!:4n6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8n2!3d35.3606255!4d138.
7273634!16zL20vHGNrczA?entry=ttu">View in Google Maps</a></span>
                <h1>Mount Fuji</h1>
                <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
                <p>Mount Fuji is the tallest mounting in Japan, standing at 3.776meters (12.380 feet). 
                Mount Fuji is the single most popular touristic site in Japan, both for japanese and 
                foriegn tourists.
                </p>
            </div>
        </article>
    )
}

export function Main2({key, src, alt, title, cntry, gml, dates, txt}) {
    return (
        <article className="main" id={key}>
            <img className="post-pic" src={src} alt={alt} />
            <div className="text-area">
                <img className="location-icon" src="./images/Scr4201.png" alt=" green pic" />
                <span className="location">{cntry}</span> 
                <span className="view-google-map"><a href={gml}>View in Google Maps</a></span>
                <h1>{title}</h1>
                <h3>{dates}</h3>
                <p>{txt}</p>
            </div>
        </article>
    )
}
