export default {
    wait: async (seconds) => {
        await (await import('util')).promisify(setTimeout)(seconds * 1000);
    },
    owner: (id) => id === '655245039026569216',
    random: (min, max) => Math.floor(Math.random() * (max - min)) + min,
    choose: (array) => array[Math.floor(Math.random() * (array.length - 0)) + 0],
    obj: (map) => {
        const obj = {};
        for (const [key, value] of Array.from(map))
            obj[key] = value;
        return obj;
    },
    includesAny: (array, stuff) => {
        for (const thing of stuff) {
            if (array.includes(thing))
                return true;
        }
        return false;
    },
    anyIncludesAny: (array, stuff) => {
        for (const subarray of array) {
            for (const thing of stuff) {
                if (subarray.includes(thing))
                    return true;
            }
        }
    }
};
