import { CommandInteraction } from 'discord.js'
import { Cleux } from '../../classes.js'
import config from '../../config.json'

export default
{
  name: 'invite',
  description: 'Invite the discord bot!',
  run: async (client: Cleux, inter: CommandInteraction) => {
    inter.reply({
      content: `you can invite me [here](${config.invite})`,
      ephemeral: true
    })
  }
}
