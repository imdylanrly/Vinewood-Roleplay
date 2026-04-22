module.exports = {
  name: "ready",
  once: true,

  async execute(client) {
    console.log(`✅ Logged in as ${client.user.tag}`);

    client.user.setActivity("Vinewood Roleplay", {
      type: 3 // WATCHING
    });
  }
};