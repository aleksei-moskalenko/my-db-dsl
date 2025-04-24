import { test } from 'node:test';
import { getTreeOfOrderBy, OrderType } from "./order-by";
import * as assert from "node:assert";


test('Tree. Complex object in array', () => {
  const expression = 'extension.$$find(item.url == "createdAt" && (item.some == 5 || item.lolo == "soso")).valueDateTime'

  const parsedBody = getTreeOfOrderBy(expression, OrderType.ASC)

  assert.deepEqual(parsedBody, {
    operator: 'take',
    args: {
      fieldName: 'valueDateTime',
      from: {
        operator: 'find',
        args: {
          criteria: {
            operator: 'and',
            args: [
              {
                operator: 'eq',
                args: {
                  fieldName: 'url',
                  value: 'createdAt'
                }
              },
              {
                operator: 'or',
                args: [
                  {
                    operator: 'eq',
                    args: {
                      fieldName: 'some',
                      value: 5
                    }
                  },
                  {
                    operator: 'eq',
                    args: {
                      fieldName: 'lolo',
                      value: 'soso'
                    }
                  }
                ]
              }
            ]
          },
          from: {
            operator: 'take',
            args: {
              fieldName: 'extension'
            }
          }
        }
      }
    }
  })
})