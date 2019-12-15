import React, { useState } from 'react'
import { Layer, Feature } from 'react-mapbox-gl'
import DetailsDialog from '../DetailsDialog/DetailsDialog'
import { IDistrict } from '../../interfaces'

const layerPaint = {
  'fill-outline-color': 'rgba(255, 0, 0, 1)',
  'fill-color': 'rgba(255, 0, 0, 0.2)',
  'fill-opacity': 0.75,
}
const layerPaintHover = {
  'fill-outline-color': 'rgba(255, 0, 0, 1)',
  'fill-color': 'rgba(255, 0, 0, 0.6)',
  'fill-opacity': 0.75,
}

const District: React.FC<{
  coordinates: number[][][] | number[][][][]
  district: IDistrict
  offences?: {
    [key: string]: number
  }
  allOffencesCount?: number
}> = ({ coordinates, district, offences, allOffencesCount }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const onCloseClick = () => {
    setIsOpen(false)
  }

  const onFeatureClick = () => {
    setIsOpen(true)
  }

  const onLayerMouseEnter = ({ map }: any) => {
    map.getCanvas().style.cursor = 'pointer'
    setHover(true)
  }

  const onLayerMouseLive = ({ map }: any) => {
    map.getCanvas().style.cursor = ''
    setHover(false)
  }

  return (
    <>
      <Layer type="fill" paint={hover ? layerPaintHover : layerPaint}>
        <Feature
          coordinates={coordinates}
          onClick={onFeatureClick}
          onMouseEnter={onLayerMouseEnter}
          onMouseLeave={onLayerMouseLive}
        />
      </Layer>
      <DetailsDialog
        title={`${district.NAME} Округ`}
        isOpen={isOpen}
        onClose={onCloseClick}
        description={district.ABBREV}
        offences={offences}
        allOffencesCount={allOffencesCount}
      />
    </>
  )
}

export default District
