/* eslint-disable no-useless-return */
export default async (client, inter) => {
    if (inter.isCommand()) {
        const slashCommand = client.slash.get(inter.commandName);
        if (!slashCommand)
            return;
        slashCommand.run(client, inter);
    }
    if (inter.isButton()) {
        const identifier = inter.customId.split('_')[0];
        const command = client.buttons.get(identifier);
        command(client, inter, inter.customId.split('_')[1]);
    }
};
