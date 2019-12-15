import React, { useState } from 'react'
import { Classes, Dialog } from '@blueprintjs/core'
import { Marker } from 'react-mapbox-gl'
import icon from './icon.svg'

const styles: { [key: string]: React.CSSProperties } = {
  icon: {
    width: 50,
    height: 50,
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  hoveredIcon: {
    width: 50,
    height: 50,
    cursor: 'pointer',
    transition: 'all 0.3s',
    filter: 'invert(1)',
  },
}

interface IDistrict {
  coordinates: number[]
  properties: {
    name: string
    address: string
  }
}

const Department: React.FC<IDistrict> = ({ coordinates, properties }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const onCloseClick = () => setIsOpen(false)
  const onFeatureClick = () => setIsOpen(true)
  const onLayerMouseEnter = () => setHover(true)
  const onLayerMouseLive = () => setHover(false)

  const dialogState = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    usePortal: true,
  }

  return (
    <>
      <Marker
        coordinates={coordinates}
        onClick={onFeatureClick}
        onMouseEnter={onLayerMouseEnter}
        onMouseLeave={onLayerMouseLive}
      >
        <img src={icon} style={hover ? styles.hoveredIcon : styles.icon} />
      </Marker>
      <Dialog
        className={Classes.DARK}
        icon="info-sign"
        title={properties.name}
        isOpen={isOpen}
        onClose={onCloseClick}
        {...dialogState}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>{properties.address}</p>
        </div>
      </Dialog>
    </>
  )
}

export default Department
