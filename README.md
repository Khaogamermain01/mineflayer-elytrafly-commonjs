<h1 align="center">mineflayer-elytrafly-commonjs</h1>
<p align="center">Plugin for Mineflayer bots to make them fly (i.e. blatantly cheat) for CommonJS.</p>

<p align="center">
  <a href="https://discord.gg/Kjd3gX29p8"><img src="https://img.shields.io/badge/DISCORD-JOIN-7289da?style=for-the-badge" alt="amoraschi"></a>
  <a href="https://github.com/khaogamermain01/mineflayer-elytrafly-commonjs" target="_blank"><img src="https://img.shields.io/github/repo-size/khaogamermain01/mineflayer-elytrafly-commonjs?style=for-the-badge&logo=github" /></a>
  <a href="https://www.npmjs.com/package/mineflayer-elytrafly-commonjs" target="_blank"><img src="https://img.shields.io/npm/v/mineflayer-elytrafly-commonjs?style=for-the-badge&logo=npm" /></a>
  <a href="https://github.com/ESKYoung/shields-io-visitor-counter"><img src="https://shields-io-visitor-counter.herokuapp.com/badge?page=mineflayer-elytrafly-commonjs&style=for-the-badge&color=brightgreen" /></a>
</p>

<h3>How to use with mineflayer bots</h3>

---

First install the package with npm:

```
npm i mineflayer-elytrafly-commonjs
```

Then load the plugin by adding:

```js
const { elytrafly } = require("mineflayer-elytrafly-commonjs")
bot.loadPlugin(elytrafly)
```

In your code (preferably after spawning the bot)

<h3>Example</h3>

---

```js
const { elytrafly } = require("mineflayer-elytrafly-commonjs");
const Vec3 = require("vec3").Vec3;
const bot = mineflayer.createBot({ username: 'Player' });

bot.loadPlugin(elytrafly);

bot.once("spawn", async () => {
  bot.elytrafly.elytraFlyTo(new Vec3(100, 0, 100));
  // The y level doesn't matter because it will just fall down.
  
  await bot.once("elytraFlyGoalReached", () => {});
  bot.chat("I have arrived at the destination!");
});
```

<h3>API</h3>

---

<h4><i>Properties</i></h4>

Assuming the bot has already an elytra equipped

```js
bot.elytrafly.options
```

Options for the plugin, applies even while flying

```js
{
  speed: number // Default: 0.05
  velocityUpRate: number // Default: 0.1
  velocityDownRate: number // Default: 0.01
}
```

*Warning* | I don't recommend changing the speed option, `bot.elytrafly.elytraFlyTo()` changes it but reverts it back when it's finished

---

<h4><i>Methods</i></h4>

```js
bot.elytrafly.start()
```

Makes the bot fly with the elytra, by default it will go forwards, you can change this before starting with:

---

```js
bot.elytrafly.setControlState(state: string, value: boolean)
```

The bot should follow its sight, this means you can change its course by changing the bot's `yaw`

States:

- forward
- back
- up
- down

---

```js
bot.elytrafly.stop()
```

Stops the bot without closing the elytra and makes it descend slowly (shouldn't take fall damage)

---

```js
bot.elytrafly.forceStop()
```

Stops the bot closing the elytra (could potentially kill the bot with fall damage)

---

```js
bot.elytrafly.elytraFlyTo(position: Vec3)
```

*Experimental* | The bot will attempt to go near the position by flying (doesn't pathfind, just looks straight at the position and flies there, needs an open space)

The flying speed is proportional to the distance to the goal, but once it gets near, it slows down, and slowly descends to the ground

---

<h4><i>Events</i></h4>

- `elytraFlyGoalReached`

Self-explanatory, fires when it has reached the goal with `bot.elytrafly.elytraFlyTo`

Credits to Amoraschi
https://www.npmjs.com/package/mineflayer-elytrafly
https://github.com/amoraschi/mineflayer-elytrafly
