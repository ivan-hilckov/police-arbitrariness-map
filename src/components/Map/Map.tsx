import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import District from 'components/District/District'
import Department from 'components/Department/Department'
import districts from 'data/districts.json'
import departments from 'data/departments.json'
import { IDistrict, IFeature } from 'interfaces'

const ReactMapboxGlMap = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoic3RyYW5nZW1vbGUiLCJhIjoiY2o4b3RicGp1MDhqNTMycDEyYm85M3B6OSJ9.EEOG8yH_YtIyLmuHv8zc4g',
})

const offencesOfDistrict = (district: IFeature<IDistrict>) => {
  const departmentOfDistrict = departments.features.find((department: any) =>
    department.properties.districtOKATO ? department.properties.districtOKATO === district.properties.OKATO : false
  )
  return departmentOfDistrict ? departmentOfDistrict.properties.offences : undefined
}

const offencesCount = (offences?: { [key: string]: number }) => {
  return offences ? Object.values(offences).reduce((acc, offencesCount) => acc + offencesCount, 0) : undefined
}

const Map = () => (
  <ReactMapboxGlMap
    center={[37.49050140380859, 55.555048994867036]}
    zoom={[9.8]}
    style="mapbox://styles/mapbox/light-v10" //eslint-disable-line
    containerStyle={{ height: '100vh', width: '100vw' }}
    pitch={[45]}
  >
    <>
      {districts.features.map((district, index) => {
        const offences = offencesOfDistrict(district)
        return (
          <District
            key={`district-${index}`}
            coordinates={district.geometry.coordinates}
            district={district.properties}
            offences={offences}
            allOffencesCount={offencesCount(offences)}
          />
        )
      })}
      {departments.features.map((department, index) => (
        <Department
          key={`department-${index}`}
          coordinates={department.geometry.coordinates}
          department={department.properties}
          allOffencesCount={offencesCount(department.properties.offences)}
        />
      ))}
    </>
  </ReactMapboxGlMap>
)

export default Map
