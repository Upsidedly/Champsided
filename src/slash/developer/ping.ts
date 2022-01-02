import discord, { CommandInteraction } from 'discord.js'
import { Cleux } from '../../classes.js'

export default
{
  name: 'ping',
  description: '🏓',
  run: async (client: Cleux, inter: CommandInteraction) => {
    const embed = new discord.MessageEmbed()
      .setTitle('Pong! 🏓')
      .addFields(
        {
          name: 'Latency',
          value: `\`${Date.now() - inter.createdTimestamp}ms\``
        },

        {
          name: 'API Latency',
          value: `\`${Math.round(client.ws.ping)}ms\``
        }
      )
    await inter.reply({ embeds: [embed] })
  }
}
