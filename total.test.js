describe("Obscure Module Test ", () => {
    test('As a user I want to get my last 4 of my credit card if it is a valid length 12-16', () => {
        expect(obscure('123456789012')).toEqual('********9012')
    })
})