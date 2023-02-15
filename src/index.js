const { ElytraFly } = require('./ElytraFly.js');
function elytrafly(bot) {
  bot.elytrafly = new ElytraFly(bot);
}
module.exports = { elytrafly };