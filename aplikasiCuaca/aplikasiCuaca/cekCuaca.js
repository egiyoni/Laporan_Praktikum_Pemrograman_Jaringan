// Create by 21343005_Egi Yoni Sandra

const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=4a454c0a955fb66538b2a4ad9c6b3cde&query=-0.8972570740415791,%20100.3496229154423&units=m'
request({ url: urlCuaca, json: true}, (error, respone) => {
    console.log('Saat ini suhu diluar mencapai ' + respone.body.current.temperature + ' derajat celcius. Kemungkinan terjadi hujan adalah ' + respone.body.current.precip + '%')
    console.log('Keadaan cuaca di ' + respone.body.location.name + ', ' + respone.body.location.country + ' saat ini adalah ' + respone.body.current.weather_descriptions)
})