import discord from 'discord.js';
import axios from 'axios';
export default {
    name: 'kfjghkjsdn',
    description: 'description',
    run: async (client, inter) => {
        try {
            const query = inter.options.getString('query');
            const results = await axios.get('https://customsearch.googleapis.com', {
                params: {
                    q: query,
                    cx: 'aa76a377cf6126cdf',
                    key: 'AIzaSyDSOF8OjsYqPiUuqZErF2-Z4ovf2bYBCn4'
                }
            });
            if (!results.body.items)
                return inter.reply({ content: 'No results found.', ephemeral: true });
            if (results.status >= 400)
                return inter.reply({ content: 'Error.', ephemeral: true });
            const res = results.body.items[0];
            const embed = new discord.MessageEmbed()
                .setTitle(res.title)
                .setDescription(res.snippet)
                .setURL(res.link)
                .setImage(res.pagemap.cse_image[0].src || res.pagemap.cse_thumbnail[0].src)
                .setTimestamp();
            inter.reply({ embeds: [embed] });
        }
        catch (err) {
            console.log(err);
        }
    },
    options: [
        {
            name: 'query',
            description: 'What are you searching for?',
            type: 'STRING',
            required: true
        }
    ]
};
