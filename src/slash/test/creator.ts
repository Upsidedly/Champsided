import discord, { CommandInteraction } from 'discord.js'
import { Cleux } from '../../classes.js'

export default
{
  name: 'creator',
  description: 'My father',
  run: async (client: Cleux, inter: CommandInteraction) => {
    const embed = new discord.MessageEmbed()
      .setTitle('creator!!! ;)')
      .setThumbnail(client.users.cache.get('655245039026569216')?.displayAvatarURL({ size: 4096, dynamic: true })!)
      .setDescription('hello hello hi I\'m upsided and i\'m a tiny little developer doing roblox and discord development. if you wanna support me feel free to do so with my socials being below!')

    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageButton()
        .setURL('https://twitter.com/NotUpsided')
        .setEmoji('🐦')
        .setLabel('Twitter')
        .setStyle('LINK'),
      new discord.MessageButton()
        .setURL('https://www.youtube.com/channel/UCDXeDbeq-Z6ngCASDZ5Dmzg')
        .setStyle('LINK')
        .setLabel('Youtube')
        .setEmoji('🎥'),
      new discord.MessageButton()
        .setURL('https://github.com/Upsidedly')
        .setStyle('LINK')
        .setEmoji('🐙')
        .setLabel('Github'),
      new discord.MessageButton()
        .setURL('https://www.roblox.com/users/345922140/profile')
        .setStyle('LINK')
        .setEmoji('🧱')
        .setLabel('Roblox')
    )

    inter.reply({ embeds: [embed], components: [row] })
  }
}
