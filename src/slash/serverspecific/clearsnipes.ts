import { CommandInteraction } from 'discord.js'
import { Cleux } from '../../classes'

export default
{
  name: 'clearsnipes',
  description: 'Does what it says.',
  run: async (client: Cleux, inter: CommandInteraction) => {
    if (!(inter.user.id !== '655245039026569216')) return inter.reply({ content: 'You can\'t run this command', ephemeral: true })
    if (!client.cmdCollect.snipes.get(inter.channelId)) return inter.reply({ content: 'No snipes in this channel', ephemeral: true })

    client.cmdCollect.snipes.delete(inter.channelId)
    inter.reply({ content: 'Cleared', ephemeral: true })
  }
}
