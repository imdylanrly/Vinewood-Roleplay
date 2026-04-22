module.exports = {
  customId: "deny",

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
        content: "Your ban appeal, which you recently submitted, was denied."
      }).catch(() => {});
    }

    // 📝 log channel
    const logChannel = interaction.guild.channels.cache.get(LOG_CHANNEL_ID);
    if (logChannel) {
      await logChannel.send({
  "embeds": [
    {
      "title": "Ban Appeal Denied",
      "description": "Unfortunately, your recent in-game ban appeal has been denied. Common reasons may include you submitting the wrong information, lack of detail & effort, etc. If you have any questions, feel free to open a ticket.",
      "fields": [],
      "image": {
        "url": "https://media.discordapp.net/attachments/1489441438507995369/1496374694549520596/footer.png?ex=69e9a708&is=69e85588&hm=4b909281b0a276ef45e14be5ebea8f741f7d1cfe6129c1c091a70c76775b27c4&=&format=webp&quality=lossless"
      },
      "color": 15548997
    }
  ],
  "components": [],
  "content": `${user}`
});
    }

    // 🎨 edit embed
    const newEmbed = {
      ...embed.data,
      color: 0xED4245 // red
    };

    // 🔘 keep only deny button (disabled)
    const newComponents = [
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 4,
            label: "Denied",
            custom_id: "deny",
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