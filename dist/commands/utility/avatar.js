import discord from 'discord.js';
export default {
    name: 'av',
    aliases: [],
    cooldown: 3,
    run: async (client, message, args, alias) => {
        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        const embed = new discord.MessageEmbed()
            .setTitle('Avatar')
            .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
            .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
            .setTimestamp()
            .addFields([
            { name: 'PNG', value: `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })})`, inline: true },
            { name: 'JPG', value: `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'jpg' })})`, inline: true },
            { name: 'WEBP', value: `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'webp' })})`, inline: true }
        ]);
        message.reply({ embeds: [embed] });
    }
};
