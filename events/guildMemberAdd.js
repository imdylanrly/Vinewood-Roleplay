module.exports = {
  name: "guildMemberAdd",

  async execute(client, member) {
    const CHANNEL_ID = "1474951209835171995";

    const channel = member.guild.channels.cache.get(CHANNEL_ID);
    if (!channel) return;

    await channel.send({
  "content": `🥥 Welcome to **<:Vinewood_Logov2:1495506370131398909> Vinewood Roleplay**, ${member}! We're glad to have you here!`,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "type": 2,
          "label": `${member.guild.memberCount}`,
          "disabled": true,
          "flow": {
            "actions": []
          },
          "custom_id": "p_293976598615429121"
        },
        {
          "type": 2,
          "style": 5,
          "label": "Dashboard",
          "url": "https://discord.com/channels/1474950367564533962/1474951200494452858",
        }
      ]
    }
  ]
});
  }
};