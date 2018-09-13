const fetchWeather = (zip) =>{
  const url = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&locationid=ZIP:' + zip + '&startdate=2015-10-04&enddate=2015-10-04&units=standard';
  const my_token = 'gsaMCPslBfZssouUOqGlLxlwSFQWMdoa';
  const otherParam = {
    headers:{ token: my_token }
  }

  fetch(url, otherParam)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      const precip = [];
      for (let i = 0; i < response.results.length; i++) {
        if (response.results[i].datatype == 'PRCP'){
          precip.push(response.results[i].value)
        }
      }
      let avg = 0;
      for (let i = 0; i < precip.length; i++){
        avg+= precip[i];
      }
      avg = avg/precip.length;
      displayWeather(avg);
    });
}

const displayWeather = (rainAvg) =>{
  document.getElementById("display").textContent =
  `On October 4th, 2015, there were ${Math.round(rainAvg*100)/100}
  inches of rain there.`
}

document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  fetchWeather(document.querySelector("form").elements["zip"].value);
})
