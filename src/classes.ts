/* eslint-disable no-useless-constructor */
import discord from 'discord.js'

export class Cleux extends discord.Client {
    public commands = new discord.Collection();
    public aliases = new discord.Collection();
    public slash = new discord.Collection();
    public buttons = new discord.Collection();

    constructor (intents: discord.ClientOptions) {
      super(intents)
    }
}

export class SlashCommand {
    name: string;
    description: string;
    options: object;
    run: Function;

    constructor (options: {name: string, description: string, options: object, run: Function}) {
      this.name = options.name
      this.description = options.description
      this.run = options.run
      this.options = options.options
    }
}
