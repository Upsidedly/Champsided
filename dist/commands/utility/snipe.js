/* eslint-disable no-useless-return */
import discord from 'discord.js';
import moment from 'moment';
export default {
    name: 'snipe',
    aliases: ['...aliases'],
    run: async (client, message, args, alias) => {
        if (!message.member?.permissions.has('READ_MESSAGE_HISTORY'))
            return;
        const snipes = client.cmdCollect.snipes.get(message.channel.id);
        if (!snipes)
            return message.reply({ content: 'There is nothing to snipe!' });
        const snipe = +args[0] - 1 || 0;
        const target = snipes[snipe];
        if (!target)
            return message.reply(`There is only ${snipes.length} messages avaliable to snipe!`);
        const { msg, time, image } = target;
        message.reply({
            embeds: [
                new discord.MessageEmbed()
                    .setAuthor({ name: msg.author.tag, iconURL: msg.author.displayAvatarURL() })
                    .setImage(image)
                    .setFooter({ text: `${moment(time).fromNow()} | ${snipe + 1} / ${snipes.length}` })
                    .setDescription(msg.content)
            ]
        });
    }
};
