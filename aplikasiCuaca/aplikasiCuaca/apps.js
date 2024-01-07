// Create by 21343005_Egi Yoni Sandra

/*Weatherstack*/
const request = require('postman-request')
// const urlCuaca = 'http://api.weatherstack.com/current?access_key=4a454c0a955fb66538b2a4ad9c6b3cde&query=-0.897116,%20100.349848'
// request({url: urlCuaca }, (error, Response) => {
//     // console.log(Response)
//     const data = JSON.parse(Response.body)
//     // console.log(data)
//     // console.log(data.current)
//     console.log(data.current.temperature)
// })

/*Position Stack */
// const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=14deec1c8fa7214cca0b3b0e2bb0f3f7&query=Universitas%20Negeri%20Padang&limit=4'
// request({ url: geocodeURL, json: true}, (error, Response) => {
//     // console.log(latitude, longitude)
//     console.log('Koordinat lokasi anda adalah ' + Response.body.data[0].latitude + ', ' + Response.body.data[0].longitude)
//     console.log('data yang anda cari adalah ' + Response.body.data[0].name)
//     console.log('data yang ditemukan adalah ' + Response.body.data[0].name + ', ' + Response.body.data[1].county + ', ' + Response.body.data[1].region + ', ' + Response.body.data[1].country)
//     console.log('tipe lokasi adalah '+ Response.body.data[0].type)
//     })

/*Request 2 API Sekaligus menggunakan pendekatan Promise atau async/await */
async function getDataFromAPIs() {
    const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=14deec1c8fa7214cca0b3b0e2bb0f3f7&query=Universitas%20Negeri%20Padang&limit=4';
    const weatherURL = 'http://api.weatherstack.com/current?access_key=4a454c0a955fb66538b2a4ad9c6b3cde&query=-0.897116,%20100.349848';
    try {
        const [geocodeResponse, weatherResponse] = await Promise.all([
          makeRequest(geocodeURL),
          makeRequest(weatherURL)
        ]);
    
        console.log('Koordinat lokasi anda adalah ' + geocodeResponse.body.data[0].latitude + ', ' + geocodeResponse.body.data[0].longitude);
        console.log('data yang anda cari adalah ' + geocodeResponse.body.data[0].name);
        console.log('data yang ditemukan adalah ' + geocodeResponse.body.data[0].name + ', ' + geocodeResponse.body.data[1].county + ', ' + geocodeResponse.body.data[1].region + ', ' + geocodeResponse.body.data[1].country);
        console.log('tipe lokasi adalah ' + geocodeResponse.body.data[0].type);
    
        console.log('Saat ini suhu diluar mencapai ' + weatherResponse.body.current.temperature + ' derajat celcius.');
        console.log('Kemungkinan terjadi hujan adalah ' + weatherResponse.body.current.precip + '%');
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    function makeRequest(url) {
      return new Promise((resolve, reject) => {
        request({ url, json: true }, (error, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
      });
    }
    
    getDataFromAPIs();