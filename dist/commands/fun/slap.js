export default {
    name: 'slap',
    aliases: ['box', 'punch'],
    run: async (client, message, args, alias) => {
        if (!message.reference)
            return;
        const responded = await message.fetchReference();
        await message.delete();
        await responded.reply({ content: 'wah foolishness yuh jus seh duncebat yuh need a slap fi yuh find yuh senses dem 😐' });
    }
};
