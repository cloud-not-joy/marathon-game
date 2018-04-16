<template>
<div @click="step">
  <div id="phaser-example">

  </div>
</div>
</template>

<script>
import GameData from '../gamedata'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      gameDataIns: null
    }
  },
  mounted () {
    this.gameDataIns = new GameData({
    })
    this.gameDataIns.startRun()
    const $dom = document.getElementById('phaser-example')
    console.dir($dom)
    const Phaser = window.Phaser
    var game = new Phaser.Game(screen.availWidth, screen.availHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create })
    function preload () {
      game.load.atlasJSONHash('bot', './static/running_bot.png', 'static/running_bot.json')
    }
    function create () {
      let scoreText = ''
      var bot = game.add.sprite(200, 200, 'bot')
      bot.animations.add('run')
      bot.animations.play('run', 15, true)
      scoreText = game.add.text(12, 12, '体力: 0 速度: 0',
        {
          font: '20px Arial',
          fill: '#ffffff',
          align: 'left'
        }
      )
      console.log(scoreText.text)
      // bot.events.onInputDown.add(listener, this)
    }
    // function listener () {
    //   gameDataIns.addSpeed()
    // }
  },
  methods: {
    step () {
      console.log('xxoo')
      this.gameDataIns.addSpeed()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.phaser-example {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
}
</style>
