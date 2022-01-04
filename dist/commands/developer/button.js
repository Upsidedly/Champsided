import discord from 'discord.js';
const row = new discord.MessageActionRow().addComponents(new discord.MessageButton()
    .setCustomId('ts_respond')
    .setLabel('Hi!')
    .setStyle('PRIMARY')
    .setEmoji('😀'), new discord.MessageButton()
    .setCustomId('ts_angryrespond')
    .setLabel('Bye')
    .setStyle('DANGER')
    .setEmoji('🙄'));
const row1 = new discord.MessageActionRow().addComponents(new discord.MessageButton()
    .setCustomId('ts_respond')
    .setLabel('Hi!')
    .setStyle('PRIMARY')
    .setEmoji('😀')
    .setDisabled(), new discord.MessageButton()
    .setCustomId('ts_angryrespond')
    .setLabel('Bye')
    .setStyle('DANGER')
    .setEmoji('🙄')
    .setDisabled());
export default {
    name: 'button',
    aliases: [],
    run: async (client, message, args, alias) => {
        await message.reply({ content: 'Hello World!', components: [row] });
    },
    btid: 'ts',
    button: async (client, inter, id) => {
        if (id === 'respond') {
            await inter.update({ content: `${inter.user.tag} has said hello!`, components: [row1] });
            await inter.followUp({ content: `Why hello there <@${inter.user.id}>!`, ephemeral: true });
        }
        else {
            await inter.update({ content: `${inter.user.username} has said bye. 🙁`, components: [row1] });
            await inter.followUp({ content: `Oh. sorry for bothering you <@${inter.user.id}>.`, ephemeral: true });
        }
    }
};
