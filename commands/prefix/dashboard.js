module.exports = {
    name: "dashboard",
    
    async execute (message, args) {
        const isAdmin = message.member.permissions.has("Administrator");
        if (!isAdmin ) {
            return message.reply("You do not have permission to run this command.")

        }

        const channel = await message.guild.channels.fetch("1474951200494452858").catch(() => null);
if (!channel) return message.reply("Channel not found.");

        await message.delete();

        await channel.send({
  "embeds": [
    {
      "image": {
        "url": "https://cdn.discordapp.com/attachments/1379275340920393959/1496370957114409011/About-Us_.png?ex=69e9a38d&is=69e8520d&hm=309f8cf129411120411de05dce362dc8adbc9b8010f91f01a97f23f63b71b72f&animated=true"
      }
    },
    {
      "description": "**Vinewood Roleplay** is a high-quality, realistic roleplay server within ERLC, inspired by the world of Grand Theft Auto V. While our theme draws influence from GTAV, we are in no way affiliated with the game or its developers. Our goal is to consistently deliver immersive, top-tier roleplay experiences for all members to enjoy.",
      "image": {
        "url": "https://cdn.discordapp.com/attachments/1413669382701187227/1482459041635766272/footer.png?ex=69e92012&is=69e7ce92&hm=885cdaa82acff971c7f26f2437223f396c1dfcb78cc3a787882be923c2629966&animated=true"
      },
      "fields": [
        {
          "name": "Quick Links",
          "value": "> [Whitelisted Group](<https://www.roblox.com/communities/485429377/WL-I-Vinewood-Roleplay#!/about>)\n> [Staff Application](<https://melonly.xyz/forms/7438135182873333760>)\n> [Assistance](<https://discord.com/channels/1474950367564533962/1474951201513541704>)",
          "inline": true
        },
        {
          "name": "Server Info",
          "value": "> **Creation Date:** <t:1771682400:D>\n> **Server Owner:** <@1325716260763336786>\n> **Server ID:** 1474950367564533962",
          "inline": true
        }
      ]
    }
  ],
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "type": 2,
          "label": "Ban Appeal",
          "custom_id": "ban_appeal",

        }
      ]
    }
  ]
})
    }
}