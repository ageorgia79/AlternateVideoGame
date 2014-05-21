function Earthwormjim () {
  this.hp = 20;
 //This is defining a object constructor function "Earthwormjim" and assigning a property of 20 hp to it//
  this.primaryAttack = function(target) {
    target.hp = target.hp - 2;
  }//This is defining an attack function and the impact that it has on the enemy hp//
 
  this.specialAttack = function(target) {
    if (target.spikey == true) {
      this.hp = 0;
    } else {
      target.hp = target.hp - 20;
    }//This is defining a differenct attack function and the impact that it has on the enemy hp//
  }
}
 
 
function Enemy (level) {
  this.hp = level * 20;
  //This is defining a function for enemy level change as a result of an attach//
 
  this.primaryAttack = function(target) {
    target.hp = target.hp - (2 + level/4);
  }
  //This is defining a function for the hp impact an enemy attack will have on the player//
 
  this.specialAttack = function(target) {
    target.hp = target.hp - 10;
    this.hp = this.hp + 10;
  }//This is defining a function for the special attack impact of an enemy attack on the player//
}
 
var enemyLevel = 1;
//This is defining a variable object called enemyLevel and assigning a property to the object//
 
$('.choose-ej').click(function(){
  player = new Earthwormjim();
  enemy = new Enemy(enemyLevel)
  //When the choose-ej button is clicked, we want it to perform a function.  That function creates a new player and a new enemy//
 
  $('.monsters').remove();
  //When the choose-ej button is clicked, we want the "choose a character" screen to change//
 
  $('.fightscreen').addClass('active');
  //When the choose-ej button is clicked, we want the fightscreen to take the place of the "choose a character" screen//
 
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
  //The function of making the "choose a character" go away and replaced by the "fightscreen" rendered the hp and
  //attack function buttons for both characters//
 
})
 
function renderPlayerInfo (player) {
  if (player.hp < 1) {
    showGameOver()
  } else {
    $('.player-info').html("Player has " + player.hp + "hp")
  }//This function defines what renderPlayerInfo is and what impact it has on the attack functions of the player and their impacts//
}
 
function renderEnemyInfo (enemy) {
  if (enemy.hp < 1) {
    $('.enemy-info').html("<span class='red'>Awesome!!</span>")
  } else {
    $('.enemy-info').html("Enemy has " + enemy.hp + "hp")
  }//This function defines what renderEnemyInfo is and what impact it has on the attack functions of the enemy and their impacts
}
 
$('.primary').click(function(){
  player.primaryAttack(enemy);
  $('.status').html('You attack!')
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
 
  triggerEnemyAttack(player)
  
})//When this button is clicked, the player attacks and a status message of "you attack" appears.  Player and Enemy info is then
//updated based on the impact on hp the attack had.  This triggers that it is the enemies turn to attack.//
 
$('.special').click(function(){
  player.specialAttack(enemy);
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
 
  triggerEnemyAttack()
})//When this button is clicked, the player attacks and a status message of "awesome" appears.  Player and Enemy info is then
//updated based on the impact on hp the attack had.  This triggers that is time for the next attack.
 
function showGameOver() {
  $('.game-over').addClass('active')
}//This defines the function of the game over screen and is connected to the "if-else" function above.  Makes the attack screen
//go away and is replaced by the game over screen//
 
 
function triggerEnemyAttack () {
  setTimeout(function(){
    if (Math.floor(Math.random() * 10 ) > 6){
      enemy.specialAttack(player);   
      $('.status').html('Enemy special attack!')
    } else {
      enemy.primaryAttack(player);   
      $('.status').html('Enemy attack!')
    }
    //This defines the triggerEnemyAttack function and what happens to hp and a status message appears in response to the attack//
 
    renderPlayerInfo(player);
    renderEnemyInfo(enemy);
  }, 2000)
}//This again defines that the player and enemy info should be updated as well as the attack dialogue with a 2 second delay.