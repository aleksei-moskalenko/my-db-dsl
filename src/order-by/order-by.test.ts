import { test } from 'node:test'
import * as assert from 'node:assert'
import { resolveOrderByTree } from './tree/resolver'

test('[Tree build] Complex object filter of array.', () => {
  const expression = 'extension.$$find(item.url == "createdAt" && (item.some == 5 || item.lolo == "soso")).valueDateTime'

  const parsedBody = resolveOrderByTree(expression)

  assert.deepEqual(parsedBody, {
    operator:   'take',
    parameters: [
      {
        fieldName: 'valueDateTime'
      }
    ],
    from: {
      operator:   'find',
      parameters: [
        {
          operator:   'and',
          parameters: [
            {
              operator:   'eq',
              parameters: [
                {
                  fieldName: 'url',
                  value:     'createdAt'
                }
              ]
            },
            {
              operator:   'or',
              parameters: [
                {
                  operator:   'eq',
                  parameters: [
                    {
                      fieldName: 'some',
                      value:     5
                    }
                  ]
                },
                {
                  operator:   'eq',
                  parameters: [
                    {
                      fieldName: 'lolo',
                      value:     'soso'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      from: {
        operator:   'take',
        parameters: [
          {
            fieldName: 'extension'
          }
        ]
      }
    }
  })
})

test('[Tree build] Root is operator.', () => {
  const expression = '$$coalesce(extension.$$find(item.url == "createdAt"), extension.$$find(item.url == "updatedAt")).valueDateTime'

  const parsedBody = resolveOrderByTree(expression)

  assert.deepEqual(parsedBody, {
    operator:   'take',
    parameters: [
      {
        fieldName: 'valueDateTime'
      }
    ],
    from: {
      operator:   'coalesce',
      parameters: [
        {
          operator:   'find',
          parameters: [
            {
              criteria: {
                operator:   'eq',
                parameters: [
                  {
                    fieldName: 'url',
                    value:     'createdAt'
                  }
                ]
              }
            }
          ],
          from: {
            operator:   'take',
            parameters: [
              {
                fieldName: 'extension'
              }
            ]
          }
        },
        {
          operator:   'find',
          parameters: [
            {
              criteria: {
                operator:   'eq',
                parameters: [
                  {
                    fieldName: 'url',
                    value:     'updatedAt'
                  }
                ]
              }
            }
          ],
          from: {
            operator:   'take',
            parameters: [
              {
                fieldName: 'extension'
              }
            ]
          }
        }
      ]
    }
  })
})
