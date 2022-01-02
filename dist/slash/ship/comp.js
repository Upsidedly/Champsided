import discord from 'discord.js';
import utility from '../../utility.js';
export default {
    name: 'comp',
    description: 'Show the compatability between 2 people!',
    run: async (client, inter) => {
        const p1 = inter.options.getString('first');
        const p2 = inter.options.getString('second');
        const percentage = utility.random(0, 100);
        const embed = new discord.MessageEmbed()
            .setAuthor({ name: 'Ship Compatability' })
            .setTitle(`${p1} x ${p2}`);
        if (percentage === 100) {
            embed.setDescription(`💗 **${percentage}** 💗\nYou're made for eachother. Soulmates.`);
        }
        else if (percentage >= 75) {
            embed.setDescription(`💕 **${percentage}** 💕\nYou guys are doing really well! This could be long term!`);
        }
        else if (percentage >= 50) {
            embed.setDescription(`❤️‍🩹 **${percentage}**  ❤️‍🩹\nAlright, I guess. You're on your way.`);
        }
        else if (percentage >= 25) {
            embed.setDescription(`🤧 **${percentage}** 🤧\nY'all aren't hopeless, need work though. Couple's therapy maybe?`);
        }
        else {
            embed.setDescription(`💀 **${percentage}%** 💀\nIt'll never work out.`);
        }
        inter.reply({ embeds: [embed] });
    },
    options: [
        {
            name: 'first',
            description: 'The first person',
            type: 'STRING',
            required: true
        },
        {
            name: 'second',
            description: 'The second person',
            type: 'STRING',
            required: true
        }
    ]
};
