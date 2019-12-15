import React, { useState } from 'react'
import { Marker } from 'react-mapbox-gl'

import DetailsDialog from 'components/DetailsDialog/DetailsDialog'
import { IDepartment } from 'interfaces'
import icon from './icon.svg'

const styles: { [key: string]: React.CSSProperties } = {
  icon: {
    width: 50,
    height: 50,
    cursor: 'pointer',
    transition: 'all 0.3s',
    opacity: 0.7,
  },
  hoveredIcon: {
    width: 50,
    height: 50,
    cursor: 'pointer',
    transition: 'all 0.3s',
    opacity: 1,
  },
}

const Department: React.FC<{
  coordinates: number[]
  department: IDepartment
  allOffencesCount?: number
}> = ({ coordinates, department, allOffencesCount }) => {
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
        <img src={icon} style={hover ? styles.hoveredIcon : styles.icon} alt={department.name} />
      </Marker>
      <DetailsDialog
        title={department.name}
        isOpen={isOpen}
        onClose={onCloseClick}
        description={department.description}
        address={department.address}
        offences={department.offences}
        allOffencesCount={allOffencesCount}
      />
    </>
  )
}

export default Department
