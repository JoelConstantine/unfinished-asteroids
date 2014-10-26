ENGINE.Coin = function(args) {

  Utils.extend(this, {
    color: "#ff0", /* default color if none is provided */
    curFrame: 0
  }, args);

  this.delta = 0;
  this.frame = 0;
};

ENGINE.Coin.prototype = {

  constructor: ENGINE.Coin,

  collidable: true,

  radius: 3,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {
    	object.addScore(5);
    	this.collection.remove(this);
    	app.playSound("coin_pickup");
    }

  },

  step: function(delta) {

  },

  render: function(delta) {
  	var sprite,
  		duration = .75;
  	

  	this.delta += delta;
 	this.frame = (this.delta % duration / duration) * 7 | 0;
	sprite = [this.frame * 10, 0, 10, 10];
    
    app.layer.drawRegion(app.images.coins, sprite, this.x -5 , this.y -5 );
  }

};