/* eslint-disable no-useless-return */
import discord from 'discord.js';
import config from '../config.json';
const cd = new Map();
export default async (client, message) => {
    if (message.author.bot || message.channel.type === 'DM')
        return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd)
        return;
    if (!cd.has(cmd.name)) {
        cd.set(cmd.name, new discord.Collection());
    }
    const currentTime = Date.now();
    const timeStamps = cd.get(cmd.name);
    const cmdCd = client.cooldowns.get(cmd.name) || 0;
    if (timeStamps.has(message.author.id)) {
        const expirationTime = timeStamps.get(message.author.id) + cmdCd;
        if (currentTime < expirationTime) {
            const timeLeft = (expirationTime - currentTime) / 1000;
            return message.reply(`Please wait ${timeLeft.toFixed(1)} more seconds before using **${config.prefix}${cmd.name}**`);
        }
    }
    timeStamps.set(message.author.id, currentTime);
    cmd.run(client, message, args, command);
};
