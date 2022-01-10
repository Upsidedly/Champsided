/* eslint-disable no-extend-native */
import discord from 'discord.js';
import { database } from '../../ships.js';
export default {
    name: 'shiplookup',
    description: 'Look up a ship in the database.',
    run: async (client, inter) => {
        const name = inter.options.getString('name');
        database.findOne({ _id: 'ships' }, (_err, document) => {
            console.log(document[name]);
            const toTitleCase = function (string) { return string.valueOf().toLowerCase().replace(string.valueOf()[0], string.valueOf()[0].toUpperCase()); };
            let verifiedName = false;
            let otherName = false;
            let theShip;
            for (const ship in document) {
                if ((document[ship].verified_names).includes(name.toLowerCase())) {
                    verifiedName = true;
                    theShip = ship;
                    break;
                }
                else if ((document[ship].other_names).includes(name)) {
                    otherName = true;
                    theShip = ship;
                    break;
                }
            }
            if (!verifiedName || !otherName)
                return inter.reply({ content: 'Could not find that ship in the database.', ephemeral: true });
            const embed = new discord.MessageEmbed()
                .setTitle(toTitleCase(theShip))
                .addFields([
                { name: 'Verified Names', value: (document[theShip].verified_names).join(', '), inline: false },
                { name: 'Other Names', value: (document[theShip].other_names).join(', '), inline: false },
                { name: 'Ship', value: document[theShip].ship, inline: false },
                { name: 'Status', value: document[theShip].status, inline: false }
            ]);
            inter.reply({ embeds: [embed] });
        });
    },
    options: [
        {
            name: 'name',
            description: 'Name of the ship you want to lookups',
            type: 'STRING',
            required: true
        }
    ]
};
