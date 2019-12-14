import React, { useState } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import District from 'components/District/District'
import geoJson from './ao.json'

const ReactMapboxGlMap = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoic3RyYW5nZW1vbGUiLCJhIjoiY2o4b3RicGp1MDhqNTMycDEyYm85M3B6OSJ9.EEOG8yH_YtIyLmuHv8zc4g',
})

const Map = () => {
  const defaultProps = {
    style: 'mapbox://styles/mapbox/streets-v9',
    containerStyle: { height: '100vh', width: '100vw' },
  }
  const [center] = useState([37.49050140380859, 55.555048994867036] as [number, number])

  return (
    <ReactMapboxGlMap {...defaultProps} center={center} zoom={[9]}>
      {geoJson.features.map(item => (
        <District coordinates={item.geometry.coordinates} key={item.properties.OKATO} />
      ))}
    </ReactMapboxGlMap>
  )
}

export default Map
