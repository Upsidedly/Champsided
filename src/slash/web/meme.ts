import discord, { CommandInteraction, ButtonInteraction } from 'discord.js'
import { Cleux } from '../../classes.js'
import axios from 'axios'

let userid: string

export default
{
  name: 'meme',
  description: 'Get a meme from reddit',
  btid: 'meme',
  /**
   * @param {Cleux} client - The client of the bot
   * @param {CommandInteraction} inter - The interaction object
   */
  run: async (client: Cleux, inter: CommandInteraction) => {
    let res: any = await axios.get(
      'https://www.reddit.com/r/memes/random/.json'
    )
    if (!res || !res.data || !res.data.length) return inter.reply({ content: 'An error occured.', ephemeral: true })
    res = res.data[0].data.children[0].data
    const embed = new discord.MessageEmbed()
      .setTitle(res.title)
      .setImage(res.url)
      .setURL(`https://www.reddit.com${res.permalink}`)
      .setFooter(`👍🏽 ${res.ups} | 💬 ${res.num_comments}`)

    const buttonRow = new discord.MessageActionRow().addComponents(
      new discord.MessageButton()
        .setStyle('SUCCESS')
        .setLabel('New Meme')
        .setCustomId('meme_new'),
      new discord.MessageButton()
        .setStyle('SECONDARY')
        .setLabel('End Interaction')
        .setCustomId('meme_end')
    )

    userid = inter.user.id
    inter.reply({ embeds: [embed], components: [buttonRow] })
  },
  // options: []
  button: async (client: Cleux, inter: ButtonInteraction, id: string) => {
    if (inter.user.id === userid) {
      if (id === 'new') {
        let res: any = await axios.get(
          'https://www.reddit.com/r/memes/random/.json'
        )
        if (!res || !res.data || !res.data.length) return inter.reply({ content: 'An error occured.', ephemeral: true })
        res = res.data[0].data.children[0].data
        const embed = new discord.MessageEmbed()
          .setTitle(res.title)
          .setImage(res.url)
          .setURL(`https://www.reddit.com${res.permalink}`)
          .setFooter({ text: `👍🏽 ${res.ups} | 💬 ${res.num_comments}` })

        inter.update({ embeds: [embed] })
      } else {
        inter.update({ components: [] })
      }
    } else {
      inter.reply({ content: 'This interaction is not for you.', ephemeral: true })
    }
  }
}
