import React from 'react'
import { ProgressBar } from '@blueprintjs/core'

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

const Offence: React.FC<{
  offenceType: string
  offencesCount: number
  allOffencesCount: number
}> = ({ offenceType, offencesCount, allOffencesCount }) => (
  <div>
    <p key={offenceType}>{offenceLabelFromOffenceType[offenceType]}</p>

    <ProgressBar animate={false} value={offencesCount / allOffencesCount} />
    <span>{offencesCount}</span>
  </div>
)

export default Offence
