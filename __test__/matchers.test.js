describe('Comparadores comunes', () => {
    const user = {
        name: "Alvaro",
        lastName: "Martínez"
    }
    const user2 = {
        name: "Alvaro",
        lastName: "Martínez"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });
    // test('No son exactamente iguales', () => {
    //     expect(user).not.toEqual(user2);
    // });
})