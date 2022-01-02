import discord from 'discord.js';
export default {
    name: 'ping',
    description: '🏓',
    run: async (client, inter) => {
        const embed = new discord.MessageEmbed()
            .setTitle('Pong! 🏓')
            .addFields({
            name: 'Latency',
            value: `\`${Date.now() - inter.createdTimestamp}ms\``
        }, {
            name: 'API Latency',
            value: `\`${Math.round(client.ws.ping)}ms\``
        });
        await inter.reply({ embeds: [embed] });
    }
};
