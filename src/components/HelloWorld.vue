<template>
  <div id="phaser-example">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    const Phaser = window.Phaser
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create })
    function preload () {
      game.load.atlasJSONHash('bot', './static/running_bot.png', 'static/running_bot.json')
    }

    function create () {
      var bot = game.add.sprite(200, 200, 'bot')
      bot.animations.add('run')
      bot.animations.play('run', 15, true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
