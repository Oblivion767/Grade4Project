//define the table search as an object, which can implement both functions and properties
var command = {};
var time = 80;

var enlargeVal=new Array();
enlargeVal[0]='60%';enlargeVal[1]='50%';enlargeVal[2]='40%';enlargeVal[3]='30%';enlargeVal[4]='20%';enlargeVal[5]='10%';enlargeVal[6]='0%';

var decreaser=enlargeVal.length-1;
var decreaserForBat=enlargeVal.length-1;

var increaserLeft=0;
var increaserForBatLeft=0;


//initialize the search, setup the current object
command.init = function () {
}


command.quit = function () {
    setTimeout(function () {
        var ww = window.open(window.location, '_self');
        ww.close();
    }, 1000);
}




command.delargeValD=function(id){
this.repaint(id);
	
		decreaser=decreaser+1;
	if (decreaser>enlargeVal.length){
	this.toggleVisibility(id);alert("he is gone");decreaser=0;}

this.stretchImage(id); 
this.repaint(id);
}

command.repaint=function(id){
var e = document.getElementById(id);
(e.style.display = 'none') ;
(e.style.display = 'block');
}

command.toggleVisibility = function (id) {
this.repaint(id);
    var e = document.getElementById(id);
    e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
	
this.repaint(id);
}
command.stretchImage = function (id) 
{
    var e = document.getElementById(id);
    
	
		f=enemyPosition[0].enemySize();
    
	
	e.style.width=f;
    e.style.height=f;
	
	}
command.batSpam = function (id, t, minus)
{
	timer = setInterval(function(){intTimer()},t);
	
	function intTimer()
	{
		if(time == 0)
		{
			clearInterval(timer);


		}
			
		else
		{				
			time = time-1;
		
						decreaserForBat=decreaserForBat-1;
						if (decreaserForBat<0){
						    var e = document.getElementById(id);
							e.style.display = ((e.style.display != 'none') ? 'none' : 'block');;decreaserForBat=enlargeVal.length-1;}

													var e = document.getElementById(id);
								f=enlargeVal[decreaserForBat];
								e.style.width=f;
								e.style.height=f;
			if (decreaserForBat<0){increaserForBatLeft=0;}
			increaserForBatLeft+=minus*1;
			var f=20*increaserForBatLeft;
			$("#"+id).css("left",f*minus+"px");
		}
	}
	
	
}	


var characterTurn =new Boolean(false);
var enemyTurn =new Boolean(true);
var enemyNumber;
var difficulty = 1;
var eDistance = new Array();
var time = 30;
var a = 1;
var playerHP = 3;
var eRandom;
var timer = null;
var tempSize = new Array();
var enemyPosition = new Array();

  
var enemyType =new Array();
enemyType.push(new enemyChar ("Ghost", 1, 1, 0));
enemyType.push(new enemyChar ("Frankenstein", 2, 1, 0)); 
enemyType.push(new enemyChar ("Vampire", 1, 2, 0)); 
enemyType.push(new enemyChar ("enemyType 4", 1, 1, 0)); 
enemyType.push(new enemyChar ("enemyType 5", 1, 1, 0)); 
enemyType.push(new enemyChar ("enemyType 6", 1, 1, 0));

var charType =new Array();
enemyType.push(new charAttr ("1", 1));
enemyType.push(new charAttr ("2", 2)); 
enemyType.push(new charAttr ("3", 3));


var candyType =new Array();
candyType.push(new candyAttributes ("candyType 1", 1));
candyType.push(new candyAttributes ("candyType 2", 2)); 
candyType.push(new candyAttributes ("candyType 3", 1)); 
candyType.push(new candyAttributes ("candyType 4", 1)); 
candyType.push(new candyAttributes ("candyType 5", 1)); 
candyType.push(new candyAttributes ("candyType 6", 1)); 



function charAttr(hpPic, health) {
	this.hpPic = hpPic;
	this.health = health;
}


function enemyChar(name, health, speed, position) {
	this.health = health;
	this.speed = speed;
	this.name = name;
	this.position = position;
}

function enemyPos(name, health, speed, distance, size) {
	this.health = health;
	this.speed = speed;
	this.name = name;
	this.distance = distance;
	this.size = size;
}

function candyAttributes(name, damage) {
	this.damage = damage;
	this.name = name;
}



candyAttributes.prototype.dmg = function () {

	return this.damage;
}

candyAttributes.prototype.title = function () {

	return this.name;
}



enemyChar.prototype.movement = function () {

	return this.speed;
}

enemyChar.prototype.HP = function () {

	return this.health;
}

enemyChar.prototype.pos = function () {

	return this.position;
}

enemyChar.prototype.title = function () {
	
	return this.name;
}





	if (difficulty == 1)
	{
		enemyNumber = 3;
	}
	else if (difficulty == 2)
	{
		enemyNumber = 4;
	}
	else
	{
		enemyNumber = 5;
	}
		
	
		enemyPos.prototype.title = function () 
		{
			return this.name;
		}
	
		enemyPos.prototype.HP = function () 
		{
			return this.health;
		}
		
		enemyPos.prototype.movement = function () 
		{
			return this.speed;
		}
		
		enemyPos.prototype.enemyDistance = function () 
		{
			return this.distance;
		}
		
		enemyPos.prototype.enemySize = function () 
		{
			
				return this.size;
		}
		
	
	for(i=0;i<enemyNumber;i++)
	{
		eDistance[i] = Math.floor((Math.random()*4)+3);
		eRandom = Math.floor((Math.random()*6)+0);
		
		
				if (eDistance[i] == 6)
				{
					tempSize[i] = '60';
				}
				else if(eDistance[i] == 5)
				{
					tempSize[i] = '50';
				}
				else if(eDistance[i] == 4)
				{
					tempSize[i] = '40';
				}
				else if(eDistance[i] == 3)
				{
					tempSize[i] = '30';
				}
				else if(eDistance[i] == 2)
				{
					tempSize[i] = '20'
				}
				else if(eDistance[i] == 1)
				{
					tempSize[i] = '10'
				}
				else
				{
					tempSize[i] = '0';
				}
		
		
		enemyPosition[i] = new enemyPos(enemyType[eRandom].title(), 
		enemyType[eRandom].HP(), enemyType[eRandom].movement(), eDistance[i],
		 tempSize[i]);
		
		document.write(enemyPosition[i].enemyDistance() + ", " + enemyPosition[i].title() + ", "
		+ enemyPosition[i].HP() + ", " + enemyPosition[i].movement() + ", " + enemyPosition[i].enemySize() +"<br>");
	}

	
	
	
function timing()
{
	timer = setInterval(function(){intTimer()},1000);
	
	function intTimer()
	{
		if(time == 0)
		{
			clearInterval(timer);
		}
			
		else
		{				
			time = time-1;
			document.getElementById("countdown").innerHTML=time + "<br>";
		}
	}
	
	
}	
	

function cTurn()
{
	
	if (characterTurn == true)
	{
		if (playerHP == 3)
		{
		
		}
		
		else if (playerHP == 2)
		{
		
		}
		
		else if (playerHp == 1)
		{
		
		}
		
		else
		{
		
		}
		
		
		
	
	}

}

command.eTurn = function(id)
{
	this.repaint(id);
	
	if (enemyTurn == true)
	{
		
		
			for(i=0;i<enemyNumber;i++)
			{
				
				if(playerHP > 0)
				{
				
						if (eDistance[i] == 6)
				{
					tempSize[i] = '60';
				}
				else if(eDistance[i] == 5)
				{
					tempSize[i] = '50';
				}
				else if(eDistance[i] == 4)
				{
					tempSize[i] = '40';
				}
				else if(eDistance[i] == 3)
				{
					tempSize[i] = '30';
				}
				else if(eDistance[i] == 2)
				{
					tempSize[i] = '20'
				}
				else if(eDistance[i] == 1)
				{
					tempSize[i] = '10'
				}
				else
				{
					tempSize[i] = '0';
				}
				
				var tempDist = enemyPosition[i].enemyDistance() - enemyPosition[i].movement()
				
					enemyPosition[i] = new enemyPos(enemyPosition[i].title(), 
					enemyPosition[i].HP(), enemyPosition[i].movement(), 
					tempDist,
					tempSize[i]);
				
				
				
				
					if (enemyPosition[i].enemyDistance() <= 0)
					{

						playerHP = playerHP - 1;
						enemyPosition[i] = new enemyPos(enemyPosition[i].title(), 
						enemyPosition[i].HP(), enemyPosition[i].movement(), 
						100, enemyPosition[i].enemySize());
					}
						
						
				
				
					this.stretchImage(id); 
					this.repaint(id);	
					
					
					if(playerHP <=0)
					{
						this.toggleVisibility(id);
						alert("your dead");
						decreaser=enlargeVal.length-1;
					}
				}
			}
		
		//document.write("Player HP = " + playerHP)
	}
	
}


command.moveImageToPlayer = function (id, minus) {
if (decreaser<0){increaserLeft=0;}
increaserLeft+=minus*1;
    var f=20*increaserLeft;


	$("#"+id).css("left",f*minus+"px");
	this.repaint(id);
	}


