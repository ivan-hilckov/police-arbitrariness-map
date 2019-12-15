import React from 'react'
import { Classes, Dialog, IOverlayableProps, H3, H4, Text } from '@blueprintjs/core'
import Offence from '../Offence/Offence'

interface IDetailsDialog {
  isOpen: boolean
  onClose?: IOverlayableProps['onClose']
  title: string
  address?: string
  description: string
  offences?: {
    [key: string]: number
  }
  allOffencesCount?: number
}

const getSortedOffences = (offences: { [key: string]: number }) => {
  return Object.entries(offences).sort((a, b) => b[1] - a[1])
}

const DetailsDialog: React.FC<IDetailsDialog> = ({
  title,
  isOpen,
  onClose,
  address,
  description,
  offences,
  allOffencesCount,
}) => {
  if (offences) {
    console.log(getSortedOffences(offences))
  }

  return (
    <Dialog
      className={Classes.DIALOG}
      icon="badge"
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      autoFocus
      canEscapeKeyClose
      canOutsideClickClose
      enforceFocus
      usePortal
    >
      <div className={Classes.DIALOG_BODY} style={{ overflow: 'auto', maxHeight: '75vh' }}>
        {address && <H3>{address}</H3>}
        <Text>{description}</Text>
        {offences && allOffencesCount ? (
          <>
            <H4 style={{ marginTop: '15px' }}>Нарушения</H4>
            {getSortedOffences(offences).map(([type, value]) => {
              return (
                <Offence
                  key={`offenceType-${type}`}
                  offenceType={type}
                  offencesCount={value}
                  allOffencesCount={allOffencesCount}
                />
              )
            })}
          </>
        ) : (
          <H4>Нарушений нет</H4>
        )}
      </div>
    </Dialog>
  )
}

export default DetailsDialog
