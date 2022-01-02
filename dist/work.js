/* eslint-disable no-useless-constructor */
import discord from 'discord.js'
export class Cleux extends discord.Client {
    commands = new discord.Collection();
    aliases = new discord.Collection();
    events = new discord.Collection();
    slash = new discord.Collection();
    constructor (intents) {
      super(intents)
    }
}
export class Command {
    name;
    description;
    options;
    run;
    constructor (options) {
      this.name = options.name
      this.description = options.description
      this.run = options.run
      this.options = options.options
    }
}
