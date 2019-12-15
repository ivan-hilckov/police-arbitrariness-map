import React, { useState } from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import District from 'components/District/District'
import Department from 'components/Department/Department'
import districts from '../../data/districts.json'
import departments from '../../data/departments.json'
import { IDepartment, IDistrict, IFeature } from '../../interfaces'

const ReactMapboxGlMap = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoic3RyYW5nZW1vbGUiLCJhIjoiY2o4b3RicGp1MDhqNTMycDEyYm85M3B6OSJ9.EEOG8yH_YtIyLmuHv8zc4g',
})
const offencesOfDistrict = (district: IFeature<IDistrict>) => {
  const departmentOfDistrict = departments.features.find(
    (department: IFeature<IDepartment>) => department.properties.districtOKATO === district.properties.OKATO
  )
  return departmentOfDistrict ? departmentOfDistrict.properties.offences : undefined
}

const Map = () => {
  const defaultProps = {
    style: 'mapbox://styles/mapbox/streets-v9',
    containerStyle: { height: '100vh', width: '100vw' },
  }
  const [center] = useState([37.49050140380859, 55.555048994867036] as [number, number])

  return (
    <ReactMapboxGlMap center={center} zoom={[9]} {...defaultProps}>
      <>
        {districts.features.map((district, index) => (
          <District
            key={`district-${index}`}
            coordinates={district.geometry.coordinates}
            district={district.properties}
            offences={offencesOfDistrict(district)}
          />
        ))}
        {departments.features.map((department, index) => (
          <Department
            key={`department-${index}`}
            coordinates={department.geometry.coordinates}
            district={department.properties}
          />
        ))}
      </>
    </ReactMapboxGlMap>
  )
}

export default Map
