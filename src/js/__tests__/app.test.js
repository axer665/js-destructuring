import destructuring from "../app";

test("Searching parameters", () => {
    const resived = [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно'
        }
    ];

    const expected = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            }, 
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
            }
        ]	
    }
    
    expect(destructuring(expected)).toEqual(resived);
});

test("Not specials", () => {
    const resived = [];
    const expected = {
        name: "Archer",
        age: 85
    };
    expect(destructuring(expected)).toEqual(resived);
})