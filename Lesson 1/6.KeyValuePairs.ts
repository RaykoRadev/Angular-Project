import { isElementAccessExpression } from "./node_modules/typescript/lib/typescript";

class KeyValuePair<T, U> {
    private _key!: T;
    private _value!: U;

    setKeyValue(key: T, value: U) {
        this._key = key;
        this._value = value;
    }

    display() {
        console.log(`key = ${this._key}, value = ${this._value}`);
    }
}

export default KeyValuePair;

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();
