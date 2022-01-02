import { Cleux } from '../classes.js'
import { setCommands } from '../init.js'

export default async (client: Cleux) => {
  console.log(`\n${client.user?.tag} is online!\n`)
  await setCommands(client, client.guilds.cache.map((guild: any) => guild.id))
}
