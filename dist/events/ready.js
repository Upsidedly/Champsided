import { setCommands } from '../init.js';
export default async (client) => {
    console.log(`\n${client.user?.tag} is online!\n`);
    await setCommands(client, client.guilds.cache.map((guild) => guild.id));
};
