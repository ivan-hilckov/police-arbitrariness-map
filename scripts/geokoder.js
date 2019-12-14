const { GetLatLngByAddress } = require('geocoder-free')

const points = [
  { name: 'ОВД РАЙОНА ФИЛЕВСКИЙ ПАРК', address: 'Москва, ул. Физкультурный проезд, д. 2' },
  { name: 'ОВД РАЙОНА ЛЕФОРТОВО', address: 'Москва, ул. Самокатная, д.3/8, стр. 3' },
  { name: 'ОВД РАЙОНА ТВЕРСКОЙ', address: 'Москва, ул. Большая Дмитровка, д. 28' },
  { name: 'ОВД РАЙОНА ИЗМАЙЛОВО', address: 'Москва, Измайловский бульвар, д. 41А' },
  { name: 'ОВД РАЙОНА МОСКВОРЕЧЬЕ-САБУРОВО', address: 'Москва, Каширское шоссе, д. 74, к. 3' },
]

points.map(item => {
  GetLatLngByAddress(item.address).then(console.log)
})
