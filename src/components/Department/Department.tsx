import React, { useState } from 'react'
import { Classes, Dialog } from '@blueprintjs/core'
import { Marker } from 'react-mapbox-gl'

const styles: { [key: string]: React.CSSProperties } = {
  clusterMarker: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#51D5A0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: '2px solid #56C498',
    cursor: 'pointer'
  },
  marker: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#E0E0E0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #C9C9C9',
    cursor: 'pointer'
  },
  hoveredMarker: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#E0E0E0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #000',
    cursor: 'pointer'
  }
};

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

  const onCloseClick = () => {
    setIsOpen(false)
  }

  const onFeatureClick = () => {
    setIsOpen(true)
  }

  const onLayerMouseEnter = ({ map }: any) => {
    setHover(true)
  }

  const onLayerMouseLive = ({ map }: any) => {
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
      <Marker
        style={hover ? styles.hoveredMarker : styles.marker }
        coordinates={coordinates}
        onClick={onFeatureClick}
        onMouseEnter={onLayerMouseEnter}
        onMouseLeave={onLayerMouseLive}
      >
        <div title={properties.name} />
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
