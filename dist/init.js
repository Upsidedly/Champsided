import fs from 'fs/promises';
export async function setCommands(client, guilds) {
    if (typeof guilds === 'string')
        guilds = [guilds];
    const data = [];
    for (const dir of await fs.readdir('./dist/slash/')) {
        const files = (await fs.readdir(`./dist/slash/${dir}`)).filter(f => f.endsWith('.js'));
        for (const file of files) {
            try {
                const { default: imported } = await import(`./slash/${dir}/${file}`);
                if (imported.options)
                    data.push({ name: imported.name, description: imported.description, options: imported.options });
                else
                    data.push({ name: imported.name, description: imported.description });
            }
            catch (error) {
                console.log('Initialize > Fatal > Error with command');
            }
        }
    }
    console.log(data);
    for (const guildId of guilds) {
        try {
            await client.guilds.cache.get(guildId)?.commands.set(data);
        }
        catch (error) {
            console.log(error);
            continue;
        }
    }
}
