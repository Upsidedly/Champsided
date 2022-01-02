/* eslint-disable no-useless-return */
import { Message } from 'discord.js'
import { Cleux } from '../classes'
import config from '../config.json'

export default async (client: Cleux, message: Message) => {
  if (message.author.bot || message.channel.type === 'DM') return
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift()?.toLowerCase()
  const cmd : any = client.commands.get(command) || client.commands.get(client.aliases.get(command))

  if (!cmd) return

  cmd.run(client, message, args, command)
}
