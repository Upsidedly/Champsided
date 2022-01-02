import discord, { CommandInteraction } from 'discord.js'
import { Cleux } from '../../classes'

export default
{
  name: 'confess',
  description: 'Confess something anonymously!',
  run: async (client: Cleux, inter: CommandInteraction) => {
    const confession = inter.options.getString('confession')
    await inter.reply({ content: 'You have successfully sent your confession ✅', ephemeral: true })
    await inter.channel?.send({
      embeds: [
        new discord.MessageEmbed()
          .setTitle('New Confession')
          .setDescription(confession!)
          .setColor('RANDOM')
          .setTimestamp()
      ]
    })
  },
  options: [
    {
      name: 'confession',
      description: 'The statement(s) you would like to confess.',
      type: 'STRING',
      required: true
    }
  ]
}
