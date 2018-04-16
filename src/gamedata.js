const DataController = function (options) {
  this.options = options || {}
  this.init()
  return this
}

DataController.prototype.init = function () {
  this.step = this.options.step
  this.leftTime = this.options.leftTime
  this.maxLength = this.options.maxLength
  this.userLength = 0 // 已经走的历程
  this.physicalStrength = 100 // 体力值
  this.countDown = 60 // 倒计时
  this.speed = 1
  this.timeInterval = 1000 / 30
}

DataController.prototype.run = function () {
  // setTimeout(() => {
  this.userLength += this.speed
  // }, this.timeInterval)
}

DataController.prototype.addSpeed = function () {
  this.speed += 0.1
  if (this.speed > 5) {
    this.speed = 5
  }
}

DataController.prototype.update = function () {
  if (this.physicalStrength <= 0) {
    console.log('game over')
    this.running = false
    return
  }
  if (this.speed > 1) {
    this.speed -= 0.03
  }
  this.physicalStrength -= 0.32 * (this.speed * this.speed)
  setTimeout(() => {
    this.update()
  }, this.timeInterval)
  console.log(`体力值=${this.physicalStrength}`)
  console.log(`速度=${this.speed}`)
  console.log(`总历程=${this.userLength}`)
}

DataController.prototype.startRun = function () {
  this.running = true
  const vm = this
  function _loop () {
    if (!vm.running) {
      return
    }
    setTimeout(() => {
      vm.run()
      _loop()
    }, 1000)
  }
  _loop()
  this.update()
}

module.exports = DataController
