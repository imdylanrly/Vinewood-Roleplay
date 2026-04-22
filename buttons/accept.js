module.exports = {
  customId: "accept",

  async execute(interaction) {
    const LOG_CHANNEL_ID = "1474951239258341632";

    const message = interaction.message;
    const embed = message.embeds[0];

    // 🔍 get user from embed description
    const match = embed.description.match(/<@!?(\d+)>/);
    const userId = match ? match[1] : null;

    const user = userId
      ? await interaction.client.users.fetch(userId).catch(() => null)
      : null;

    // 📩 DM user
    if (user) {
      await user.send({
        content: "Your ban appeal, which you recently submitted, was accepted."
      }).catch(() => {});
    }

    // 📝 log channel
    const logChannel = interaction.guild.channels.cache.get(LOG_CHANNEL_ID);
    if (logChannel) {
      await logChannel.send({
  "embeds": [
    {
      "title": "Ban Appeal Accepted",
      "color": 0x57F287,
      "description": "Congratulations, your ban appeal has been accepted & you have successfully been unbanned in-game. Ensure you do not commit the same rule violations or similar ones to avoid another in-game ban. You are permitted to join the in-game server at no punishment during a session.",
      "fields": [],
      "image": {
        "url": "https://media.discordapp.net/attachments/1489441438507995369/1496374694549520596/footer.png?ex=69e9a708&is=69e85588&hm=4b909281b0a276ef45e14be5ebea8f741f7d1cfe6129c1c091a70c76775b27c4&=&format=webp&quality=lossless"
      }
    }
  ],
  "components": [],
  "content": `${user}`
});
    }

    // 🎨 edit embed
    const newEmbed = {
      ...embed.data,
      color: 0x57F287 // green
    };

    // 🔘 keep only accept button (disabled)
    const newComponents = [
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 3,
            label: "Accepted",
            custom_id: "accept",
            disabled: true
          }
        ]
      }
    ];

    await interaction.update({
      embeds: [newEmbed],
      components: newComponents
    });
  }
};