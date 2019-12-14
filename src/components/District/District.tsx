import React, { useState } from 'react'
import { Classes, Dialog } from '@blueprintjs/core'
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

interface IDistrict {
  coordinates: number[][][] | number[][][][]
  properties: {
    NAME: string
    OKATO: string
    ABBREV: string
  }
}

const District: React.FC<IDistrict> = ({ coordinates, properties }) => {
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

  const dialogState = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    usePortal: true,
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
      <Dialog
        className={Classes.DARK}
        icon="info-sign"
        title={properties.NAME}
        isOpen={isOpen}
        onClose={onCloseClick}
        {...dialogState}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>{properties.ABBREV}</p>
          <p>{properties.OKATO}</p>
        </div>
      </Dialog>
    </>
  )
}

export default District
