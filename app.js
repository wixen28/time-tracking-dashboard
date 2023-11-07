
const section = document.querySelector('.section-two')
const parts = document.querySelector('.one-part')
const timeframes = document.querySelectorAll('.day-part')


//fc to fetch data from json file
const updateData = () => {
    async function fetchData() {
        const url = ('./data.json')
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    fetchData().then(data => {
        // console.log(data[0])

        timeframes.forEach( (oneTime) => {
            oneTime.addEventListener('click', function(e) {
                if(oneTime.id === 'daily') {
                    const showInHTML = data.map( (one, index) => {
                        return `<div class="one-part">
                            <div class="upper-part">
                                    <img  class='part-image' src='' alt="">
                                </div>
                                <div class="lower-part">
                                    <div class="name-dots">
                                        <h4 class="name">${one.title}</h4>
                                        <img class="three-dots" src="./images/icon-ellipsis.svg" alt="elipsis">
                                    </div>
                                    <div class="hours">
                                        <div class="hours-daily">
                                            <p class="hours-count">${one.timeframes.daily.current}</p>
                                            <p class="last-week">Last Week - <span>${one.timeframes.daily.previous}</span></p>
                                        </div>
                                    </div>
                                </div>
                                </div>`
                    }).join('')

                    section.innerHTML = showInHTML
                } else if(oneTime.id === 'weekly') {
                    const showInHTML = data.map( (one, index) => {
                        return `<div class="one-part">
                                <div class="upper-part">
                                    <img  class='part-image' src='' alt="">
                                </div>
                                <div class="lower-part">
                                    <div class="name-dots">
                                        <h4 class="name">${one.title}</h4>
                                        <img class="three-dots" src="./images/icon-ellipsis.svg" alt="elipsis">
                                    </div>
                                    <div class="hours">
                                        <div class="hours-daily">
                                            <p class="hours-count">${one.timeframes.weekly.current}</p>
                                            <p class="last-week">Last Week - <span>${one.timeframes.weekly.previous}</span></p>
                                        </div>
                                    </div>
                                </div>
                                </div>`
                    }).join('')

                    section.innerHTML = showInHTML
                } else if(oneTime.id === 'monthly') {
                    const showInHTML = data.map( (one, index) => {
                        return `<div class="one-part">
                                <div class="upper-part">
                                    <img  class='part-image' src='' alt="">
                                </div>
                                <div class="lower-part">
                                    <div class="name-dots">
                                        <h4 class="name">${one.title}</h4>
                                        <img class="three-dots" src="./images/icon-ellipsis.svg" alt="elipsis">
                                    </div>
                                    <div class="hours">
                                        <div class="hours-daily">
                                            <p class="hours-count">${one.timeframes.monthly.current}</p>
                                            <p class="last-week">Last Week - <span>${one.timeframes.monthly.previous}</span></p>
                                        </div>
                                    </div>
                                </div>
                                </div>`
                    }).join('')

                    section.innerHTML = showInHTML
                    // section.appendChild(parts)
                }
            })
        })

    })


}

updateData()


//finish for weekly, monthly
//add proper images + also color for specific socials
//finish styling
