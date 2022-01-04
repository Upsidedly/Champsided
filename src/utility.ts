export default {
  wait: async (seconds: number) => {
    await (await import('util')).promisify(setTimeout)(seconds * 1000)
  },

  owner: (id: string) => id === '655245039026569216',

  random: (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min,

  choose: (array: Array<any>) => array[Math.floor(Math.random() * (array.length - 0)) + 0],

  obj: (map: Map<any, any>) => {
    const obj: any = {}
    for (const [key, value] of Array.from(map)) obj[key] = value
    return obj
  },

  includesAny: (array: Array<any> | string, stuff: Array<any>) => {
    for (const thing of stuff) {
      if (array.includes(thing)) return true
    }
    return false
  },

  anyIncludesAny: (array: Array<string | Array<any>>, stuff: Array<any>) => {
    for (const subarray of array) {
      for (const thing of stuff) {
        if (subarray.includes(thing)) return true
      }
    }
  }
}
