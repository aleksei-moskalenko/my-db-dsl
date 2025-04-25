import { Undefinedable } from '../../lib/typescript/types/undefinedable'

export type OrderByTreeElementParametersItem = OrderByTreeElement | string | number | boolean | null

export type OrderByTreeElementParameters = OrderByTreeElementParametersItem[]

export type OrderByTreeElement = {
  operator:   string
  parameters: OrderByTreeElementParameters
  from?:      Undefinedable<OrderByTreeElement>
}

export type OrderByTree = OrderByTreeElement
