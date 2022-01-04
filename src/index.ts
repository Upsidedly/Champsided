/* eslint-disable no-useless-constructor */

import fs from 'fs/promises'
import discord from 'discord.js'
import config from './config.json'
import { Cleux } from './classes.js'

const client = new Cleux({ intents: new discord.Intents(32767) })
export { client }

// Commands

if ((await fs.readdir('./dist/commands/')).length !== 0) {
  let loaded = 0
  for (const dir of await fs.readdir('./dist/commands/')) {
    const files = (await fs.readdir(`./dist/commands/${dir}`)).filter(file => file.endsWith('.js'))
    for (const file of files) {
      const { default: imported } = await import(`./commands/${dir}/${file}`)
      client.commands.set(imported.name, imported)
      if (imported.btid) client.buttons.set(imported.btid, imported.button)
      loaded += 1
      for (const alias of imported.aliases) {
        client.aliases.set(alias, imported.name)
      }
    }
  }
  if (loaded === 0) {
    console.log('Commands > None found.')
  } else {
    console.log(`Commands > ${loaded} loaded.`)
  }
} else {
  console.log('Commands > No directories found.')
}

// Events

let eventsLoaded = 0
const files = (await fs.readdir('./dist/events/')).filter(f => f.endsWith('.js'))

for (const event of files) {
  const { default: imported } = await import(`./events/${event}`)
  const name = event.split('.')[0]
  client.on(name, imported.bind(null, client))
  eventsLoaded += 1
}

if (eventsLoaded === 0) {
  console.log('Events > None found.')
} else {
  console.log(`Events > ${eventsLoaded} loaded.`)
}

// Slash Commands

if ((await fs.readdir('./dist/slash/')).length !== 0) {
  let loaded = 0
  for (const dir of await fs.readdir('./dist/slash/')) {
    const files = (await fs.readdir(`./dist/slash/${dir}`)).filter(file => file.endsWith('.js'))
    for (const file of files) {
      try {
        const { default: imported } = await import(`./slash/${dir}/${file}`)
        client.slash.set(imported.name, imported)
        if (imported.btid) client.buttons.set(imported.btid, imported.button)
        loaded += 1
      } catch (err) {
        console.log('Command > Fatal > Error with file.')
      }
    }
  }
  if (loaded === 0) {
    console.log('Slash > None found.')
  } else {
    console.log(`Slash > ${loaded} loaded.`)
  }
} else {
  console.log('Slash > No directories found.')
}

// Buttons

// if ((await fs.readdir('./dist/buttons/')).length !== 0) {
//  let loaded = 0
//  for (const dir of await fs.readdir('./dist/buttons/')) {
//    for (const file of (await fs.readdir(`./dist/buttons/${dir}`)).filter(f => f.endsWith('.js'))) {
//      const { default: button } = await import(`./buttons/${dir}/${file}`)
//      client.buttons.set(button.data.name, button)
//      loaded += 1
//    }
//  }
//  if (loaded === 0) {
//    console.log('Buttons > None found.')
//  } else {
//    console.log(`Buttons > ${loaded} loaded.`)
//  }
// } else {
//  console.log('Buttons > No directories found.')
// }

client.login(config.token)
