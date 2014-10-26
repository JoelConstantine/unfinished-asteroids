ENGINE.Coin = function(args) {

  Utils.extend(this, {
    color: "#ff0", /* default color if none is provided */
    curFrame: 0
  }, args);

  this.lastTick = Date.now();
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
  	var curTick = ( Date.now() - this.lastTick );

  	
  	if (curTick > 130) {
  		
  		this.curFrame++;
  		this.lastTick = Date.now();
  	}

  	if ( this.curFrame > 6 ) { 
  		this.curFrame = 0; 
  	}
  	var sprite = [this.curFrame * 10, 0, 10, 10];
    
    app.layer.drawRegion(app.images.coins, sprite, this.x -5 , this.y -5 );
  }

};