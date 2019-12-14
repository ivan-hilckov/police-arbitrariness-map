const { GetLatLngByAddress } = require('geocoder-free')
const fs = require('fs')

const departments = require('../src/data/departments')

Promise.all(
  departments.map(item =>
    GetLatLngByAddress(item.address).then(coordinates => ({
      ...item,
      lat: coordinates[0],
      lng: coordinates[1],
    }))
  )
).then(departmentsWithCoordinates => {
  fs.writeFileSync('../src/data/departments.json', JSON.stringify(departmentsWithCoordinates, null, 2))
  console.log('Updated departments.json with lat and lng')
})
