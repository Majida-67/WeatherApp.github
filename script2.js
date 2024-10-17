// button and input field ko target krny k leay 
const button = document.getElementById('search-button');
const input = document.getElementById('city-input');
// for accessing the city name , time and temprature
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');


// make function for getting data through API calls
async function getdata(cityname) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=2f7718828f264d4f863103651241710&q=${cityname}&aqi=yes`
    );
    return await promise.json();
}

// click function when we press the search button 
// it is used for showing result throughout the mouse clicked and pressed button 
button.addEventListener('click', async () => {
    event.preventDefault(); // Prevent form submission behavior
    const value = input.value;
        const result = await getdata(value);
        console.log(result);
        // console.log('Please enter a city name');
        cityName.innerHTML = `${result.location.name} , ${result.location.region} , ${result.location.localtime} - ${result.location.country}`;
    cityTemp.innerHTML=result.current.temp_c;
});
