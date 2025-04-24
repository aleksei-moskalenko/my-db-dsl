import {OrderByTree} from "./tree";

export enum OrderType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export function getTreeOfOrderBy(expression: string, order: OrderType): OrderByTree {
  throw new Error('Not implemented');
}