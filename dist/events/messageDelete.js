export default async (client, message) => {
    if (!message.member.user.bot) {
        let snipes = client.cmdCollect.snipes.get(message.channel.id) || [];
        if (snipes.length > 10)
            snipes = snipes.slice(0, 9);
        snipes.unshift({
            msg: message,
            image: message.attachments.first()?.proxyURL,
            time: Date.now()
        });
        client.cmdCollect.snipes.set(message.channel.id, snipes);
    }
};
