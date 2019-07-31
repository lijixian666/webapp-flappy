var stateActions = { preload: preload, create: create, update: update };
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
function preload() {
}
function create() {
}
function update() {
}
game.stage.setBackgroundColor("#F3D3A3");
game.add.text(20, 20, "Hello");
function create() {
 game.stage.setBackgroundColor("#F3D3A3");
game.add.text(20, 20, "Welcome to my game", {font: "30px Arial", fill: "#FFFFFF"});
game.add.text("Like", "This", "?");
game.load.image("playerImg", "../assets/jamesBond.gif");
game.add.sprite(10, 270, "playerImg");
game.load.image("backgroundImg", "../assets/myAwesomeBackground.png");
game.add.image(0, 0, "backgroundImg");
var background = game.add.image(0, 0, "backgroundImg");
background.width = 790;
background.height = 400;
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
#game {
 margin: 20px;
 margin-left: auto;
 margin-right: auto;
 width: 800px;
}
#header {
 background-size: cover;
 -webkit-background-size: cover;
 -moz-background-size: cover;
 -o-background-size: cover;
 background: url('flappy-header.png') top center no-repeat;
 background-size: 100%;
}
#footer {
 background-size: cover;
 -webkit-background-size: cover;
 -moz-background-size: cover;
 -o-background-size: covergame.input
 .onDown
 .add(clickHandler);
 background: url('flappy-footer.png') top center no-repeat;
 background-size: 100%;
}
function clickHandler(event) {
 alert("Click!");
}
game.input.onDown.add(clickHandler);
function clickHandler(event) {
 alert("The position is: " + event.x + "," + event.y);
}
game.add.sprite(60, 20, "playerImg");
function clickHandler(event) {
 game.add.sprite(event.x, event.y, "playerImg");
}
game.load.audio("score", "../assets/point.ogg");
function spaceHandler() {
 game.sound.play("score");
}
.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
.onDown.add(spaceHandler);
function plusTimes(x,y,z){x.foo+=y*z;}
function
 plusTime
( x
,y , z)
 {
x
. foo +=
 y *z;
 }
function plusTime(x, y, z){
 x.foo += y*z;
}
function moveLeft {
 alert("moving");
}
var score;
function preload() {
}
function create() {
 alert(score);
}
var score;
var score = 0;
score = 1;
score = 2;
function changeScore() {
score = score + 1;
labelScore.setText(score.toString());
}
var score = 0;
function create () {
 changeScore();
 changeScore();
 alert(score);
}
function changeScore() {
 var score = 0;
 score = score + 1;
}
function changeScore() {
score = score + 1;
labelScore.setText(score.toString());
}
var score;
var player;
function preload() {
 // your previous code for preload is here
}
function create() {
 // your previous code for create is here
 player = game.add.sprite(100, 200, "playerImg");
 player.x;
 player.kill();
 player.x = 150;
player.y = 200;
function moveRight() {
player.x = player.x + 1;
}
game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
 .onDown.add(moveRight);
player.x = player.x + 10;
var score;
var score = 0;
player.x = player.x + 1;
player.x += 1;
player.x++;
var score1 = 0;
var score2 = 0;
var player1;
var player2;
function preload() {
}
function create() {
 player1 = game.add.sprite(100, 200, "player1Img");
 player2 = game.add.sprite(150, 200, "player2Img");
}
function movePlayer1Up() {
player1.x++;
}
function movePlayer2Up() {
player2.x++;
}
function create() {
 game.input.keyboard.addKey(Phaser.Keyboard.UP)
 .onDown.add(movePlayer1Up);
 game.input.keyboard.addKey(Phaser.Keyboard.W)
 .onDown.add(movePlayer2Up);
}
function generatePipe() {
}
generatePipe();
game.load.image("pipeBlock","../assets/pipe.png");
game.add.sprite(20, 0, "pipeBlock");
game.add.sprite(20, 50, "pipeBlock");
game.add.sprite(20, 100, "pipeBlock");
game.add.sprite(20, 150, "pipeBlock");
game.add.sprite(20, 200, "pipeBlock");
game.add.sprite(20, 250, "pipeBlock");
game.add.sprite(20, 300, "pipeBlock");
game.add.sprite(20, 350, "pipeBlock");
for(var count=0; count<8; count+=1){
 game.add.sprite(20, 50*count, "pipeBlock");
}
var count = 0;
game.add.sprite(20, 50*count, "pipeBlock");
count += 1;
game.add.sprite(20, 50*count, "pipeBlock");
count += 1;
game.add.sprite(20, 50*count, "pipeBlock");
count += 1;
game.add.sprite(20, 50*count, "pipeBlock");
count += 1;
game.add.sprite(20, 50*count, "pipeBlock");
count += 1;
game.add.sprite(20, 50*count, "pipeBlock");
count += 1;
game.add.sprite(20, 50*count, "pipeBlock");
count += 1;
game.add.sprite(20, 50*count, "pipeBlock");
count += 1;
game.add.sprite(20, 0, "pipeBlock");
game.add.sprite(20, 50, "pipeBlock");
game.add.sprite(20, 100, "pipeBlock");
game.add.sprite(20, 150, "pipeBlock");
game.add.sprite(20, 200, "pipeBlock");
game.add.sprite(20, 250, "pipeBlock");
game.add.sprite(20, 300, "pipeBlock");
game.add.sprite(20, 350, "pipeBlock");
for(var i=0; i<10; i++) {
 console.log(i);
}
for(var count=0; count<8; count++){
 game.add.sprite(20, 50 * count, "pipeBlock");
 game.add.sprite(150, 50 * count, "pipeBlock");
}
for (var count=2; count<10; count+=2) {
 game.add.sprite(count * 50, 200, "pipeBlock");
}
if (count<5) {
 alert("count is smaller than 5!");
}
for(var count=0; count<8; count++) {
 if(count != 4){
 game.add.sprite(0, 50 * count, "pipeBlock");
 }
}
if (count<5) {
 alert("count is smaller than 5!");
} else if (count==5) {
 alert("count is equal to 5!");
} else if (count==6) {
 alert("count is equal to 6!");
} else {
 alert("count is something else (i.e. greater than 6)");
}
function generatePipe(){
 var gapStart = game.rnd.integerInRange(1, 5);
 for (var count=0; count<8; count=count+1) {
 if(count != gapStart && count != gapStart + 1) {
 game.add.sprite(0, count * 50, "pipeBlock");
 }
 }
}
var arr = [1,2,"three",4];
arr.push(2+3);
arr.push(6);
console.log(arr[0]);
console.log(arr[2]);
arr[ arr.length ];
arr[ arr.length - 1 ];
var pipes = [];
function addPipeBlock(x, y) {
  var block = game.add.sprite(x,y,"pipeBlock");
   pipes.push(block);
  }
  function generatePipe() {
 var gap = game.rnd.integerInRange(1 ,5);
 for (var count=0; count<8; count++) {
 if (count != gap && count != gap+1) {
 addPipeBlock(40, count*50);
 }
 }
}
for (var count=0; count<5; count+=1) {
 count = 10;
 console.log(count);
}
var score = 0;
if (score < 1) {
 score += 1;
} else if (score <= 1) {
 score += 2;
}
player.body.gravity.y = 200;
player.body.gravity.y = 400;
player.body.gravity.y = 50;
player.body.velocity.x = 100;
player.body.gravity.y = 100;
function playerJump() {
 player.body.velocity.y = -200;
}
game.input.keyboard
 .addKey(Phaser.Keyboard.SPACEBAR)
 .onDown
 .add(playerJump);
 function addPipeBlock(x, y) {
 var pipeBlock = game.add.sprite(x,y,"pipeBlock");
 pipes.push(pipeBlock);
 game.physics.arcade.enable(pipeBlock);
 pipeBlock.body.velocity.x = -200;
}
function generatePipe() {
 var gap = game.rnd.integerInRange(1 ,5);
 for (var count = 0; count < 8; count++) {
 if (count != gap && count != gap+1) {
 addPipeBlock(750, count * 50);
 }
 }
 changeScore();
}
var pipeInterval = 1.75 * Phaser.Timer.SECOND;
game.time.events.loop(
 pipeInterval,
 generatePipe
);
function update() {
 game.physics.arcade.overlap(
 player,
 pipes,
 gameOver);
}
function gameOver(){
 game.destroy();
}
function gameOver() {
 location.reload();
}
var actions = { preload: preload, create: create, update: update };
var game = new Phaser.Game(790, 400, Phaser.AUTO, "game", actions);
// Global score variable initialised to 0.
var score = 0;
// Global variable to hold the text displaying the score.
var labelScore;
// Global player variable declared but not initialised.
var player;
// Global pipes variable initialised to the empty array.
var pipes = [];
// the interval (in seconds) at which new pipe columns are spawned
var pipeInterval = 1.75;
// Loads all resources for the game and gives them names.
function preload() {
 // make image file available to game and associate with alias playerImg
 game.load.image("playerImg","../assets/jamesBond.gif");
 // make sound file available to game and associate with alias score
 game.load.audio("score", "../assets/point.ogg");
 // make image file available to game and associate with alias pipe
 game.load.image("pipe","../assets/pipe.png");
}
// Initialises the game. This function is only called once.
function create() {
 // set the background colour of the scene
 game.stage.setBackgroundColor("#F3D3A3");
 // add welcome text
 game.add.text(20, 20, "Welcome to my game",
 {font: "30px Arial", fill: "#FFFFFF"});
 // add score text
 labelScore = game.add.text(20, 60, "0",
 {font: "30px Arial", fill: "#FFFFFF"});
 // initialise the player and associate it with playerImg
 player = game.add.sprite(80, 200, "playerImg");
 // Start the ARCADE physics engine.
 // ARCADE is the most basic physics engine in Phaser.
 game.physics.startSystem(Phaser.Physics.ARCADE);
 // enable physics for the player sprite
 game.physics.arcade.enable(player);
 // set the player's gravity
 player.body.gravity.y = 200;
 // associate spacebar with jump function
65
E
 game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(playerJump);
 // time loop to keep generating new pipes
 game.time.events.loop(pipeInterval * Phaser.Timer.SECOND, generatePipe);
}
// This function updates the scene. It is called for every new frame.
function update() {
 // Call gameOver function when player overlaps with any pipe
 game.physics.arcade.overlap(player, pipes, gameOver);
}
// Adds a pipe part to the pipes array
function addPipeBlock(x, y) {
 // make a new pipe block
 var block = game.add.sprite(x,y,"pipe");
 // insert it in the pipe array
 pipes.push(block);
 // enable physics engine for the block
 game.physics.arcade.enable(block);
 // set the block's horizontal velocity to a negative value
 // (negative x value for velocity means movement will be towards left)
 block.body.velocity.x = -200;
}
// Generate moving pipe
function generatePipe() {
 // Generate random integer between 1 and 5. This is the location of the
 // start point of the gap.
 var gapStart = game.rnd.integerInRange(1, 5);
 // Loop 8 times because 8 blocks fit in the canvas.
 for (var count = 0; count < 8; count++) {
 // If the value of count is not equal to the gap start point
 // or end point, add the pipe image.
 if(count != gapStart && count != gapStart+1){
 addPipeBlock(750, count * 50);
 }
 }
 // Increment the score each time a new pipe is generated.
 changeScore();
}
function playerJump() {
 // the more negative the value the higher it jumps
 player.body.velocity.y = -200;
}
function changeScore() {
 score++;
 labelScore.setText(score.toString());
}
function gameOver() {
 game.destroy();
}
increase_score(1)
game.input.onDown.add(record_click);
if (score>100) {
 alert("You won!");
}
if(score >= 10){
 for(i=0; i<50; i++){
 game.add.sprite(random(), random(), "fireworks");
 }
 game.sound.play("clap-clap");
} else {
 game.add.sprite(random(), random(), "fireworks");
 game.sound.play("clap");
}
var score = 0;
function increase_score() {
 score = score + 1;
}
increase_score();
increase_score();
var score = 0;
function increase_score(){
 score = score + 1;
}
increase_score();
labelScore.setText(score.toString());
labelScore.setText("0")
var score = 0;
function increase_score(amount, multiplier) {
 score = score + (amount * multiplier);
}
function generatePipe() {
 var gap = game.rnd.integerInRange(1 ,5); // STARTS HERE
 for (var count=0; count<8; count++) {
 if (count != gap && count != gap+1) {
 addPipeBlock(40, count*50);
 }
 }
}
