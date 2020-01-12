interface KV<T> {
    [key: number]: T[];
}

export default class OrderedMapArray<T> {
    private data: KV<T> = {};

    constructor() {
        this.data = {}
    }

    public clear() {
        this.data = {}
    }

    public remove(key: number): void {
        delete this.data[key]
    }

    public get(key: number): T[] {
        return this.data[key]
    }

    public set(key: number, value: T): void {
        this.data[key] = [value];
    }

    public push(key: number, value: T): void {
        if (this.data[key] === undefined) {
            this.data[key] = [];
        }
        this.data[key].push(value)
    }

    public prepend(key: number, value: T): void {
        if (this.data[key] === undefined) {
            this.data[key] = [];
        }
        this.data[key].unshift(value);
    }

    public concat(key: number, values: T[]): void {
        if (this.data[key] === undefined) {
            this.data[key] = [...values];
            return
        }
        this.data[key] = this.data[key].concat(values)
    }

    public first(): T | undefined {
        const key = this.firstKey()
        if (key === undefined) {
            return
        }
        return this.data[key][0]
    }

    public last(): T | undefined {
        const key = this.lastKey()
        if (key === undefined) {
            return
        }
        const values = this.data[key]
        return values[values.length - 1]
    }

    public firstKey(): number | undefined {
        return this.keys()[0]
    }

    public lastKey(): number | undefined {
        const keys = this.keys()
        return keys[keys.length - 1]
    }

    /**
     * returns all values in order
     */
    public values(): T[] {
        const res: T[] = []
        for (let key of this.keys()) {
            for (let value of this.data[key]) {
                res.push(value)
            }
        }
        return res;
    }

    /**
     * returns all keys in order
     */
    public keys(): number[] {
        return Object.keys(this.data)
            .map(k => parseInt(k, 10))
            .sort((a, b) => a - b)
    }
}