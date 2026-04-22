module.exports = {
  name: "guildMemberAdd",

  async execute(client, member) {
    const CHANNEL_ID = "1474951209835171995";

    const channel = member.guild.channels.cache.get(CHANNEL_ID);
    if (!channel) return;

    await channel.send(`🥥 Welcome to **<:Vinewood_Logov2:1495506370131398909> Vinewood Roleplay**, ${member}! We're glad to have you here!
You are our ${member.guild.memberCount}th member!`);
  }
};