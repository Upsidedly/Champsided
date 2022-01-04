/* eslint-disable no-var */
/* eslint-disable no-eval */
import discord from 'discord.js';
import utility from '../../utility.js';
import { inspect } from 'util';
export default {
    name: 'run',
    description: 'Runs this command in the console',
    run: async (client, inter) => {
        try {
            if (utility.owner(inter.user.id)) {
                const command = inter.options.getString('command');
                try {
                    const result = await eval(command);
                    var output = result;
                    if (typeof result !== 'string') {
                        output = inspect(result);
                    }
                }
                catch (err) {
                    await inter.reply({ embeds: [new discord.MessageEmbed().setDescription(`There was an error with the evaluation. Error:\n\`\`\`${err}\`\`\``)] });
                    return;
                }
                if (!inter.replied)
                    await inter.reply({ embeds: [new discord.MessageEmbed().setDescription(`Results:\n\`\`\`ts\n${output}\`\`\``)] });
            }
            else {
                await inter.reply({ content: 'You cannot run this command.', ephemeral: true });
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    options: [
        {
            name: 'command', description: 'Command to run', type: 'STRING', required: true
        }
    ]
};
