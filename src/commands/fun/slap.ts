import { Message } from 'discord.js'
import { Cleux } from '../../classes.js'

export default
{
  name: 'slap',
  aliases: ['box', 'punch'],
  run: async (client: Cleux, message: Message, args: Array<string>, alias: string) => {
    if (!message.reference) return
    const responded = await message.fetchReference()
    await message.delete()
    await responded.reply({ content: 'wah foolishness yuh jus seh duncebat yuh need a slap fi yuh find yuh senses dem 😐' })
  }
}
