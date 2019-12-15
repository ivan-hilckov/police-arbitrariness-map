import React, { useState } from 'react'
import Map from 'components/Map/Map'
import { Classes, Dialog, Text } from '@blueprintjs/core'
import styles from './App.module.css'

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const onCloseClick = () => setIsOpen(false)

  return (
    <div className={styles.app}>
      <Map />
      <Dialog
        className={Classes.DARK}
        title={'Карта полицейского насилия по районам Москвы'}
        isOpen={isOpen}
        onClose={onCloseClick}
        autoFocus
        canEscapeKeyClose
        canOutsideClickClose
        enforceFocus
        usePortal
      >
        <div className={Classes.DIALOG_BODY} style={{ overflow: 'auto', maxHeight: '75vh' }}>
          <Text>
            Проект создан в рамках{' '}
            <a href="https://github.com/developers-against-repressions/devs-against-the-machine/issues/17">
              I онлайн-хакатона в поддержку политических заключенных
            </a>
            .
          </Text>
        </div>
      </Dialog>
    </div>
  )
}

export default App
