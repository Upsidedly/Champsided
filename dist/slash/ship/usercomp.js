import discord from 'discord.js';
import utility from '../../utility.js';
export default {
    name: 'usercomp',
    description: 'Show the compatability between 2 users!',
    run: async (client, inter) => {
        const p1 = inter.options.getUser('first');
        const p2 = inter.options.getUser('second');
        const percentage = utility.random(0, 100);
        const embed = new discord.MessageEmbed()
            .setAuthor({ name: 'Ship Compatability' })
            .setTitle(`@${p1?.username} x @${p2?.username}`);
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
            description: 'The first user',
            type: 'USER',
            required: true
        },
        {
            name: 'second',
            description: 'The second user',
            type: 'USER',
            required: true
        }
    ]
};
