const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder
} = require("discord.js");

module.exports = {
  customId: "ban_appeal",

  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId("ban_appeal_modal")
      .setTitle("Ban Appeal");

    const username = new TextInputBuilder()
      .setCustomId("roblox_user")
      .setLabel("What is your Roblox username?")
      .setStyle(TextInputStyle.Short)
      .setRequired(true);

    const reason = new TextInputBuilder()
      .setCustomId("ban_reason")
      .setLabel("Why were you banned?")
      .setStyle(TextInputStyle.Paragraph)
      .setRequired(true);

    const appeal = new TextInputBuilder()
      .setCustomId("appeal_reason")
      .setLabel("Why should you be unbanned?")
      .setStyle(TextInputStyle.Paragraph)
      .setRequired(true);

    modal.addComponents(
      new ActionRowBuilder().addComponents(username),
      new ActionRowBuilder().addComponents(reason),
      new ActionRowBuilder().addComponents(appeal)
    );

    await interaction.showModal(modal);
  }
};