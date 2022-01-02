/* eslint-disable no-eval */
import discord, { CommandInteraction } from 'discord.js'
import { Cleux } from '../../classes.js'
import utility from '../../utility.js'

export default
{
  name: 'run',
  description: 'Runs this command in the console',
  run: async (client: Cleux, inter: CommandInteraction) => {
    if (utility.owner(inter.user.id)) {
      const command = inter.options.getString('command')!
      try {
        await eval(command)
      } catch (err) {
        await inter.reply({ embeds: [new discord.MessageEmbed().setDescription(`There was an issue running the command. Error:\n\`\`\`${err}\`\`\``)] })
        return
      }

      await inter.reply({ embeds: [new discord.MessageEmbed().setDescription(`I have successfully ran\n\`\`\`ts\n${command}\`\`\``)] })
    } else {
      await inter.reply({ content: 'You cannot run this command.' })
    }
  },
  options: [
    {
      name: 'command', description: 'Command to run', type: 'STRING', required: true
    }
  ]
}
