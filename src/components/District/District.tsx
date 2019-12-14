import React, { useState } from 'react'
import { Layer, Feature } from 'react-mapbox-gl'

const layerPaint = {
  'fill-outline-color': 'rgba(255, 0, 0, 1)',
  'fill-color': 'rgba(255, 0, 0, 0.2)',
  'fill-opacity': 0.75,
}
const layerPaintHover = {
  'fill-outline-color': 'rgba(255, 0, 0, 1)',
  'fill-color': 'rgba(255, 0, 0, 0.8)',
  'fill-opacity': 0.75,
}

const District: React.FC<{ coordinates: number[][][] | number[][][][] }> = ({ coordinates }) => {
  const [hover, setHover] = useState(false)

  const onLayerMouseEnter = ({ map }: any) => {
    map.getCanvas().style.cursor = 'pointer'
    setHover(true)
  }

  const onLayerMouseLive = ({ map }: any) => {
    map.getCanvas().style.cursor = ''
    setHover(false)
  }

  return (
    <Layer type="fill" paint={hover ? layerPaintHover : layerPaint}>
      <Feature onMouseEnter={onLayerMouseEnter} onMouseLeave={onLayerMouseLive} coordinates={coordinates} />
    </Layer>
  )
}

export default District
