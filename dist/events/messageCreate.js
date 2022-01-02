import config from '../config.json';
export default async (client, message) => {
    if (message.author.bot || message.channel.type === 'DM')
        return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd)
        return;
    cmd.run(client, message, args, command);
};
