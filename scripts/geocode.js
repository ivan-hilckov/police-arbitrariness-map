const fs = require('fs')
const { GetLatLngByAddress } = require('geocoder-free')

const departments = require('../src/data/departments')

Promise.all(
  departments.map(item =>
    GetLatLngByAddress(item.address).then(coordinates => ({
      type: 'Feature',
      properties: { ...item },
      geometry: { type: 'MultiPolygon', coordinates: [coordinates[1], coordinates[0]] },
    }))
  )
).then(departmentsWithCoordinates => {
  fs.writeFileSync('../src/data/departments.json', JSON.stringify(departmentsWithCoordinates, null, 2))
  console.log('Updated departments.json with lat and lng')
})
