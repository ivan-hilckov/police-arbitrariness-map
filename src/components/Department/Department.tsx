import React, { useState } from 'react'
import { Marker } from 'react-mapbox-gl'

import DetailsDialog from '../DetailsDialog/DetailsDialog'
import icon from './icon.svg'
import { IDepartment } from '../../interfaces'

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

const Department: React.FC<{
  coordinates: number[]
  district: IDepartment
}> = ({ coordinates, district }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const onFeatureClick = () => setIsOpen(true)
  const onCloseClick = () => setIsOpen(false)
  const onLayerMouseEnter = () => setHover(true)
  const onLayerMouseLive = () => setHover(false)

  return (
    <>
      <Marker
        coordinates={coordinates}
        onClick={onFeatureClick}
        onMouseEnter={onLayerMouseEnter}
        onMouseLeave={onLayerMouseLive}
      >
        <img src={icon} style={hover ? styles.hoveredIcon : styles.icon} alt={district.name} />
      </Marker>
      <DetailsDialog
        name={district.name}
        isOpen={isOpen}
        onClose={onCloseClick}
        description={district.description}
        address={district.address}
        offences={district.offences}
      />
    </>
  )
}

export default Department
