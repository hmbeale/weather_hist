const url = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&locationid=ZIP:28801&startdate=2010-05-01&enddate=2010-05-01';
const my_token = 'gsaMCPslBfZssouUOqGlLxlwSFQWMdoa';
const otherParam = {
  headers:{ token: my_token }
}

fetch(url, otherParam)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
