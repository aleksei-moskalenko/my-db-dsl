import { OrderByTreeElement } from './tree/types'

export enum OrderType {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type OrderByItem = {
  orderType: OrderType
  tree:      OrderByTreeElement
}

export type OrderBy = OrderByItem[]
