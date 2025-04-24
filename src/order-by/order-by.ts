import { OrderByTree } from './tree'

export enum OrderType {
  ASC = 'ASC',
  DESC = 'DESC'
}

export function getTreeOfOrderBy(_expression: string, _order: OrderType): OrderByTree {
  throw new Error('Not implemented')
}
