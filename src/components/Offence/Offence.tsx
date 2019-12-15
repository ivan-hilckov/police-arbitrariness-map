import React from 'react'
import { ProgressBar, H6 } from '@blueprintjs/core'

const offenceLabelFromOffenceType: { [key: string]: string } = {
  passport: 'Отнимают паспорт',
  violence: 'Применение силы',
  policeCar: 'Долго держат в автозаке',
  phone: 'Отнимают телефон',
  pressure: 'Оскорбления и угрозы',
  food: 'Не дают пить и есть',
  medicine: 'Не оказывают медицинскую помощь',
  fingers: 'Заставляют делать дактилоскопию по административному задержанию',
  lawyer: 'Не пускают адвокатов',
  detentionTime: 'Превышают время задержания',
  protocol: 'Заставляют подписать ложный протокол',
  journalist: 'Задержали журналиста',
}

const Offence: React.FC<{
  offenceType: string
  offencesCount: number
  allOffencesCount: number
}> = ({ offenceType, offencesCount, allOffencesCount }) => (
  <div
    key={offenceType}
    style={{
      marginBottom: '10px',
    }}
  >
    <H6 style={{ marginBottom: '5px' }}>{`${offenceLabelFromOffenceType[offenceType]}: ${offencesCount}`}</H6>
    <ProgressBar animate={false} value={offencesCount / allOffencesCount} intent="danger" />
  </div>
)

export default Offence
