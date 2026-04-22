module.exports = {
  customId: "ban_appeal_modal",

  async execute(interaction) {
    const username = interaction.fields.getTextInputValue("roblox_user");
    const reason = interaction.fields.getTextInputValue("ban_reason");
    const appeal = interaction.fields.getTextInputValue("appeal_reason");

    const CHANNEL_ID = "1474951326051078335";
    const channel = interaction.guild.channels.cache.get(CHANNEL_ID);

    if (channel) {
      await channel.send({
  "embeds": [
    {
      "title": "Ban Appeal Submitted",
      "description": `A ban appeal has been submitted by ${interaction.user}.`,
      "fields": [
        {
          "name": "Roblox Username",
          "value": username
        },
        {
          "name": "Why were you banned?",
          "value": reason
        },
        {
          "name": "Why should you be unbanned?",
          "value": appeal
        }
      ],
      "image": {
        "url": "https://media.discordapp.net/attachments/1489441438507995369/1496374694549520596/footer.png?ex=69e9a708&is=69e85588&hm=4b909281b0a276ef45e14be5ebea8f741f7d1cfe6129c1c091a70c76775b27c4&=&format=webp&quality=lossless"
      }
    }
  ],
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 3,
          "type": 2,
          "label": "Accept",
          "flow": {
            "actions": []
          },
          "custom_id": "accept"
        },
        {
          "style": 4,
          "type": 2,
          "label": "Deny",
          "flow": {
            "actions": []
          },
          "custom_id": "deny"
        }
      ]
    }
  ]
});
    }

    await interaction.reply({
      content: "Your appeal has been submitted.",
      flags: 64
    });
  }
};