/* eslint-disable padded-blocks */
import { ApplicationCommandDataResolvable } from 'discord.js'
import fs from 'fs/promises'
import { Cleux } from './classes.js'

export async function setCommands (client: Cleux, guilds: Array<string> | string) {
  if (typeof guilds === 'string') guilds = [guilds]

  const data: ApplicationCommandDataResolvable[] = []

  for (const dir of await fs.readdir('./dist/slash/')) {
    const files = (await fs.readdir(`./dist/slash/${dir}`)).filter(f => f.endsWith('.js'))
    for (const file of files) {
      const { default: imported } = await import(`./slash/${dir}/${file}`)
      if (imported.options) data.push({ name: imported.name, description: imported.description, options: imported.options })
      else data.push({ name: imported.name, description: imported.description })
    }
  }

  console.log(data)

  for (const guildId of guilds) {
    try {
      await client.guilds.cache.get(guildId)?.commands.set(data)
    } catch (error) {
      console.log(error)
      continue
    }
  }
}
