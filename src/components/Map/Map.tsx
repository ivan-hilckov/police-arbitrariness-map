import React from 'react'
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl'
import geojson from './mo.json'

const ReactMapboxGlMap = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoic3RyYW5nZW1vbGUiLCJhIjoiY2o4b3RicGp1MDhqNTMycDEyYm85M3B6OSJ9.EEOG8yH_YtIyLmuHv8zc4g',
})

const Map = () => {
  const defaultProps = {
    style: 'mapbox://styles/mapbox/streets-v9',
    containerStyle: { height: '100vh', width: '100vw' },
    center: [37.49050140380859, 55.555048994867036] as [number, number],
  }
  return (
    <ReactMapboxGlMap {...defaultProps}>
      <GeoJSONLayer
        data={geojson}
        fillPaint={{
          'fill-outline-color': 'red',
          'fill-color': 'rgba(110,89,159, 0.2)',
          'fill-opacity': 0.75,
        }}
      />
    </ReactMapboxGlMap>
  )
}

export default Map
