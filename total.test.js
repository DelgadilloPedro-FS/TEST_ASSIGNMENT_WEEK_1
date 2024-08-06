const obscure = require('./obscure')

describe("Obscure Module Test ", () => {
    test('As a user I want to get my last 4 of my credit card if it is a valid length 12-16', () => {
        expect(obscure('123456789012')).toEqual('********9012')
    })
    test('As a User I want to validate my creditcard length', () => {
        expect(obscure('123')).toBeFalsy()
    })
    test('As a user I want to handle numbers at the upper limit of 16-digit', () => {
        expect(obscure('1234567890123456')).toEqual('************3456')
      })

      test('As a user I want to handle numbers at the lower limit of 12 digits', () => {
        expect(obscure('999999999999')).toEqual('********9999')
      })
})