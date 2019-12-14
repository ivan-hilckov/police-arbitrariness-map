import React, { useState } from 'react'
import { Layer, Feature } from 'react-mapbox-gl'

const layerPaint = {
  'fill-outline-color': 'red',
  'fill-color': 'rgba(110,89,159, 0.2)',
  'fill-opacity': 0.75,
}
const layerPaintHover = {
  'fill-outline-color': 'green',
  'fill-color': 'blue',
  'fill-opacity': 0.75,
}

const District: React.FC<{ coordinates: number[][][] | number[][][][] }> = ({ coordinates }) => {
  const [hover, setHover] = useState(false)

  const onLayerMouseEnter = () => {
    setHover(true)
  }
  const onLayerMouseLive = () => {
    setHover(false)
  }

  return (
      <Layer
        type="fill"
        paint={hover ? layerPaintHover : layerPaint}
        onMouseMove={onLayerMouseEnter}
        onMouseLeave={onLayerMouseLive}
      >
        <Feature coordinates={coordinates} />
      </Layer>
  )
}

export default District
