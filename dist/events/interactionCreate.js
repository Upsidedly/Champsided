/* eslint-disable no-useless-return */
export default async (client, inter) => {
    if (inter.isCommand()) {
        const slashCommand = client.slash.get(inter.commandName);
        if (!slashCommand)
            return;
        slashCommand.run(client, inter);
    }
};
