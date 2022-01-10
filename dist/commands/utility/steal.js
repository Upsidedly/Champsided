/* eslint-disable no-unused-vars */
import { Util } from 'discord.js';
export default {
    name: 'steal',
    aliases: ['stealemoji'],
    run: async (client, message, args, alias) => {
        if (!message.member?.permissions.has('MANAGE_EMOJIS_AND_STICKERS'))
            return message.reply({ content: 'You do not have the permission to use this command' });
        if (!args.length)
            return message.reply({ content: 'Please specify some emojis to steal.' });
        for (const rawmoji of args) {
            const rawEmoji = rawmoji.split('/')[0];
            const parsedEmoji = Util.parseEmoji(rawEmoji);
            if (parsedEmoji.id) {
                const extension = parsedEmoji.animated ? '.gif' : '.png';
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
                let emoji;
                try {
                    emoji = await message.guild?.emojis.create(url, rawmoji.split('/')[1] || parsedEmoji.name);
                }
                catch (error) {
                    message.reply({ content: 'Emoji name must be 2-32 in length' });
                }
                message.reply({ content: `Added: \`${emoji.url}\` as ${emoji.name}` });
            }
        }
    }
};
