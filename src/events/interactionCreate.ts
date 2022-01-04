/* eslint-disable no-useless-return */

import { CommandInteraction } from 'discord.js'
import { Cleux } from '../classes.js'

export default async (client: Cleux, inter: CommandInteraction) => {
  if (inter.isCommand()) {
    const slashCommand: any = client.slash.get(inter.commandName)
    if (!slashCommand) return
    slashCommand.run(client, inter)
  }

  if (inter.isButton()) {
    const identifier: string = inter.customId.split('_')[0]
    const command: any = client.buttons.get(identifier)
    command(client, inter, inter.customId.split('_')[1])
  }
}
