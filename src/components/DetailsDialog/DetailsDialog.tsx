import React from 'react'
import { Classes, Dialog, IOverlayableProps } from '@blueprintjs/core'

interface IDetailsDialog {
  isOpen: boolean
  onClose?: IOverlayableProps['onClose']
  name: string
  address?: string
  description: string
  offences?: {
    [key: string]: number
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

const DetailsDialog: React.FC<IDetailsDialog> = ({ name, isOpen, onClose, address, description, offences }) => (
  <Dialog
    className={Classes.DARK}
    icon="info-sign"
    title={name}
    isOpen={isOpen}
    onClose={onClose}
    autoFocus
    canEscapeKeyClose
    canOutsideClickClose
    enforceFocus
    usePortal
  >
    <div className={Classes.DIALOG_BODY}>
      {address && <p>{address}</p>}
      <p>{description}</p>
      {offences ? (
        <>
          <p>Нарушения</p>
          {Object.keys(offences).map(offenceType => (
            <p key={offenceType}>{`${offenceLabelFromOffenceType[offenceType]}: ${offences[offenceType]}`}</p>
          ))}
        </>
      ) : (
        <p>Нарушений нет</p>
      )}
    </div>
  </Dialog>
)

export default DetailsDialog
