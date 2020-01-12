interface KV<T> {
    [key: number]: T[];
}

export default class OrderedMapArray<T> {
    private data: KV<T> = {};

    constructor() {
        this.data = {}
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