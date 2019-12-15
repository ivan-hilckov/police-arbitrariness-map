import React from 'react'
import { Classes, Dialog, IOverlayableProps } from '@blueprintjs/core'
import Offence from '../Offence/Offence'

interface IDetailsDialog {
  isOpen: boolean
  onClose?: IOverlayableProps['onClose']
  name: string
  address?: string
  description: string
  offences?: {
    [key: string]: number
  }
  allOffencesCount?: number
}

const DetailsDialog: React.FC<IDetailsDialog> = ({
  name,
  isOpen,
  onClose,
  address,
  description,
  offences,
  allOffencesCount,
}) => (
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
    <div className={Classes.DIALOG_BODY} style={{ overflow: 'auto', maxHeight: '75vh' }}>
      {address && <p>{address}</p>}
      <p>{description}</p>
      {offences && allOffencesCount ? (
        <>
          <p>Нарушения</p>
          {Object.keys(offences).map(offenceType => (
            <Offence
              key={offenceType}
              offenceType={offenceType}
              offencesCount={offences[offenceType]}
              allOffencesCount={allOffencesCount}
            />
          ))}
        </>
      ) : (
        <p>Нарушений нет</p>
      )}
    </div>
  </Dialog>
)

export default DetailsDialog
