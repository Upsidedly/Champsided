/* eslint-disable no-useless-return */

import { CommandInteraction } from 'discord.js'
import { Cleux } from '../classes.js'

export default async (client: Cleux, inter: CommandInteraction) => {
  if (inter.isCommand()) {
    const slashCommand: any = client.slash.get(inter.commandName)
    if (!slashCommand) return
    slashCommand.run(client, inter)
  }
}
