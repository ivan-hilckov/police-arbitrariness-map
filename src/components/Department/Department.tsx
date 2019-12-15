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
  district: {
    name: string
    districtOKATO: string
    address: string
    description: string
    offences: {
      [key: string]: number
    }
  }
}

const offenceLabelFromOffenceType: { [key: string]: string } = {
  passport: 'Отнимают паспорт',
  violence: 'Применение силы',
  policeCar: 'Долго держат в автозаке',
  phone: 'Отнимают телефон',
  pressure: 'Оскорбления и угрозы',
  food: 'Не дают пить и есть',
  medicine: 'Не оказывают медицинскую помощь',
  fingers: 'Заставляют деать дактилоскопию по административному задержанию',
  lawyer: 'Не пускают адвокатов',
  detentionTime: 'Превышают время задержания',
  protocol: 'Заставляют подписать ложный протокол',
  journalist: 'Задержали журналиста',
}

const Department: React.FC<IDistrict> = ({ coordinates, district }) => {
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
        <img src={icon} style={hover ? styles.hoveredIcon : styles.icon} alt={district.name} />
      </Marker>
      <Dialog
        className={Classes.DARK}
        icon="info-sign"
        title={district.name}
        isOpen={isOpen}
        onClose={onCloseClick}
        {...dialogState}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>{district.address}</p>
          <p>{district.description}</p>
          {Object.keys(district.offences).map(offenceType => (
            <div>{`${offenceLabelFromOffenceType[offenceType]}: ${district.offences[offenceType]}`}</div>
          ))}
        </div>
      </Dialog>
    </>
  )
}

export default Department
