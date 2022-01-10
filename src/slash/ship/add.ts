import discord, { CommandInteraction } from 'discord.js'
import { Cleux } from '../../classes.js'
import { names, ships } from '../../ships.js'

const nametable = () => {
  const final = []
  for (const [key, value] of Array.from(names)) {
    final.push({ name: key, value: value })
  }
  return final
}

export default
{
   name: 'shipadd',
   description: 'Add a new ship to the database',
   run: async (client: Cleux, inter: CommandInteraction) => {
        
  },
  options: [
    {
      name: 'verifiedname',
      description: 'Verified name of the ship.',
      type: 'STRING',
      required: true
    },
    {
      name: 'person1',
      description: 'The first person in the ship.',
      type: 'STRING',
      choices: nametable(),
      required: true
    },
    {
      name: 'person2',
      description: 'The second person in the ship.',
      type: 'STRING',
      choices: nametable(),
      required: true
    },
    {
      name: 'status',
      description: 'The status of the ship.',
      type: 'STRING',
      required: true
    },
    {
      name: 'othernames',
      description: 'Unverified names of the ship, separated by spaces.',
      type: 'STRING'
    }
  ]
}
