// 1
// 1a
interface Currency {
    unit: 'EUR' | 'GBP' | 'JPY' | 'USD';
    value: number;
}

namespace Currency {
    export let DEFAULT: Currency['unit'] = 'USD';
    export function from(value: number, unit = Currency.DEFAULT): Currency {
        return { unit, value };
    }
}

let amountDue: Currency = {
    unit: 'USD',
    value: 20000,
};

let anotherAmountDue = Currency.from(200, 'EUR');
console.log(anotherAmountDue);

// 1b
enum Color {
    RED = '#ff0000',
    GREEN = '#00ff00',
    BLUE = '#0000f',
}

namespace Color {
    export function getCloset(to: string): Color {
        return to === Color.RED ? Color.RED : Color.GREEN;
    }
}

const a = Color.getCloset('#ff0000');
console.log(a);
