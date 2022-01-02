export default {
    wait: async (seconds) => {
        await (await import('util')).promisify(setTimeout)(seconds * 1000);
    },
    owner: (id) => id === '655245039026569216',
    random: (min, max) => Math.floor(Math.random() * (max - min)) + min,
    choose: (array) => array[Math.floor(Math.random() * (array.length - 0)) + 0]
};
