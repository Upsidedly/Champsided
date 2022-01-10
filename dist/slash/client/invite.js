import config from '../../config.json';
export default {
    name: 'invite',
    description: 'Invite the discord bot!',
    run: async (client, inter) => {
        inter.reply({
            content: `you can invite me [here](${config.invite})`,
            ephemeral: true
        });
    }
};
