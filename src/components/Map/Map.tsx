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
  const departmentOfDistrict = departments.features
    .filter((department: any) => {
      return department.properties.districtOKATO === district.properties.OKATO
    })
    .map(item => item?.properties?.offences)
    .filter(item => !!item)
    .reduce(
      (item, memo) => {
        if (!memo || !item) {
          return memo
        }

        return {
          policeCar: memo.policeCar + item.policeCar,
          detentionTime: memo.detentionTime + item.detentionTime,
          pressure: memo.pressure + item.pressure,
          searchWithoutWitnesses: memo.searchWithoutWitnesses + item.searchWithoutWitnesses,
          food: memo.food + item.food,
          journalist: memo.journalist + item.journalist,
          violence: memo.violence + item.violence,
          medicine: memo.medicine + item.medicine,
          lawyer: memo.lawyer + item.lawyer,
          minor: memo.minor + item.minor,
          fingers: memo.fingers + item.fingers,
          passport: memo.passport + item.passport,
          protocol: memo.protocol + item.protocol,
          phone: memo.phone + item.phone,
          conditionsOfDetention: memo.conditionsOfDetention + item.conditionsOfDetention,
        }
      },
      {
        policeCar: 0,
        detentionTime: 0,
        pressure: 0,
        searchWithoutWitnesses: 0,
        food: 0,
        journalist: 0,
        violence: 0,
        medicine: 0,
        lawyer: 0,
        minor: 0,
        fingers: 0,
        passport: 0,
        protocol: 0,
        phone: 0,
        conditionsOfDetention: 0,
      }
    )

  return departmentOfDistrict
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
      {departments.features
        .filter(department => !!department.properties.offences)
        .map((department, index) => (
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
