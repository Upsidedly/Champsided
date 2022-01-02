export default {
  wait: async (seconds: number) => {
    await (await import('util')).promisify(setTimeout)(seconds * 1000)
  },

  owner: (id: string) => id === '655245039026569216',

  random: (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min,

  choose: (array: Array<any>) => array[Math.floor(Math.random() * (array.length - 0)) + 0]
}
