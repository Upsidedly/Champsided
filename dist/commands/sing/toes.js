import discord from 'discord.js';
import utils from '../../utility.js';
export default {
    name: 'cpr',
    aliases: [],
    run: async (client, message, args, alias) => {
        let sendembed;
        if (utils.owner(message.member.id)) {
            const wait = 0.75;
            const string = `Uno, dois, três, quatro
      No quick head in my bed I can't have that
      I want that long neck not talking giraffe neck
      Ain't no laying down man we 'bout to have late fun
      I'm 'bout to make your balls stick up like space buns
      Want your dick soaked? Place it down my throat
      Tongue tickle yo' dick but not telling a joke
      Peddle in this pussy that's how you rock a boat
      It get live in this pussy, I'm not talking Periscope
      In the sheets I am a bully
      Give more head than a hoodie
      Every time you make me cum it look just like vanilla pudding
      Sit on yo face all day until you say, "Bae, it hurt me"
      Then I turn around and give the dick more kisses than Hershey's
      Yo' dick brick-hard like a medal (uh)
      I got three holes for it like a pretzel (mhm)
      Tight as a virgin boy don't get nervous (tight)
      I'm here to serve you customer service (right)
      I save dick by giving it CPR
      (I save dick by giving it CPR, yes)
      Put my mouth on it like CPR
      (Let's make porn and watch it on VCR)
      I think we should fuck up in every zip code
      It would make my pussy wetter than a fishbowl
      Pussy a kitty cat, I pet it like a pet
      I fuck doggy style so much I need to go to the vet
      Hotbox? More like a scorching pussy
      Open this coochie up like a fortune cookie
      Yo' banana in my mouth watch my tongue go ape
      Yo' dick getting more blows than a birthday cake
      When I'm near it, no, I don't fear it
      Licking on that penis like a letter when I seal it
      Today way wetter than my past slob
      And if you unemployed, I can give you a ass job
      Pussy already wet don't need no lube ointment
      Dick twisting in my stomach like food poisoning
      That's how you know when you hit the spot
      I'll make your pants unzip more than Ziploc
      Yo' dick brick-hard like a medal (uh)
      I got three holes for it like a pretzel (mhm)
      Tight as a virgin boy don't get nervous (tight)
      I'm here to serve you customer service (right)
      I save dick by giving it CPR
      (I save dick by giving it CPR, yes)
      Put my mouth on it like CPR
      (Let's make porn and watch it on VCR)
      Anything goes when you up in my hole
      Dirty panties from the sex, yeah, I got me some loads
      Listen, I'm the most explicit
      Long stick inside my river but we not going fishing
      Know what to do every time you have a horrible day
      I'll eat that sausage all day like it's Memorial Day
      I'm talking BBQ sauce and mustard on it
      And the mayonnaise comes when you bust right on it
      Name anything freaky and you know I'm 'bout that shit
      Only time I'm not on the dick is when I'm 'bout to shit
      Pubic hairs all in my mouth, not again
      So when I suck yo' dick now, I use bobby pins
      Who need a gym when you got dick to work you out?
      I want my face to lose weight so stroke my mouth
      And any time my pussy wanna be hairy like Harry Potter
      Becky with the good hair is what you could call her
      Let's get it
      A little faster
      A little more
      Right there
      Give it to me now
      (Uh, uh, uh, uh, uh, uh)
      (Uh, uh, uh, uh, uh, uh, uh, uh)`;
            await message.delete();
            for (const [index, line] of string.split('\n').entries()) {
                if (index === 0) {
                    sendembed = await message.channel.send({ embeds: [new discord.MessageEmbed().setDescription(line).setTitle('CPR').setAuthor({ name: 'CupcakKe' })] });
                    await utils.wait(wait);
                }
                else if (index === string.split('\n').length - 1) {
                    await sendembed.edit({ embeds: [new discord.MessageEmbed().setDescription(line).setTitle('CPR').setAuthor({ name: 'CupcakKe' })] });
                    await utils.wait(wait);
                    await sendembed.delete();
                }
                else {
                    await sendembed.edit({ embeds: [new discord.MessageEmbed().setDescription(line).setTitle('CPR').setAuthor({ name: 'CupcakKe' })] });
                    await utils.wait(wait);
                }
            }
        }
    }
};
