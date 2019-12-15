export interface IFeature<T> {
  type: string
  geometry: object
  properties: T
}

export interface IDistrict {
  NAME: string
  OKATO: string
  ABBREV: string
}

export interface IDepartment {
  name: string
  districtOKATO: string
  address: string
  description: string
  offences: {
    [key: string]: number
  }
}
