window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let image = document.getElementById('weather-image');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '16fc26c256msha43696b189f7a89p1161f9jsn1ec222ba1a89',
		            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
                }
            };

            const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${long}&lat=${lat}`

            fetch(url, options)

            .then((response) => {
                return response.json()
            })

            .then((data) => {
                console.log(data.data[0]);
                const {temp, description} = data.data[0];
                let imageUrl = `./weather-icons/${data.data[0].weather.icon}.png`;
                image.setAttribute('src', imageUrl)
                temperatureDegree.textContent = temp
                locationTimezone.textContent = data.data[0].timezone
                temperatureDescription.textContent = data.data[0].weather.description
            });

        });
    }

    const setIcons = (icon, iconID) => {
        const skycons = new skycons ({color: "white"});
        // const currentIcon = 
    }
});



