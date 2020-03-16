/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer, dice;
scores=[0,0];
roundScore=0;
activePlayer=0; 


function btn(){
dice = Math.floor(Math.random()*6)+1;
if (dice!=1)
{
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src='dice-'+dice+'.png';
    roundScore+=dice;
    document.querySelector('#current-'+ activePlayer).textContent=roundScore;
}
else 
{
    document.querySelector('.dice').style.display='none';
    document.querySelector('#current-'+activePlayer).textContent=0;
    if (activePlayer==0)
    {
        document.querySelector('.player-0-panel').classList.remove('active'); // instead we can use toggle property of classList
        document.querySelector('.player-1-panel').classList.add('active');
        activePlayer=1;
    }
    else 
    {
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        activePlayer=0;
    }
    roundScore=0;
    
}
}
btn();
document.querySelector('.btn-roll').addEventListener('click',btn);


function hld()
{
    document.querySelector('.dice').style.display='none';
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    if (activePlayer==0)
    {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        activePlayer=1;
    }
    else 
    {
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        activePlayer=0;
    }
    roundScore =0;
    if (scores[0]>=100)
    {
        
        document.querySelector('.player-0-panel').classList.add('winner');
        document.querySelector('#name-0').textContent='WINNER !';
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.btn-roll').removeEventListener('click',btn);
        document.querySelector('.btn-hold').removeEventListener('click',hld);
    }
    else if(scores[1]>=100)
    {
        {
            
            document.querySelector('.player-1-panel').classList.add('winner');
            document.querySelector('#name-1').textContent='WINNER !';
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.btn-roll').removeEventListener('click',btn);
            document.querySelector('.btn-hold').removeEventListener('click',hld);
        }
    }
}
hld();
document.querySelector('.btn-hold').addEventListener('click',hld);

function newGame()
{
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    document.querySelector('.dice').style.display='none';
    document.querySelector('#score-0').textContent=scores[0];
    document.querySelector('#score-1').textContent=scores[1];
    document.querySelector('#name-0').textContent='PLAYER 1';
    document.querySelector('#name-1').textContent='PLAYER 2';
    document.querySelector('#current-0').textContent=roundScore;
    document.querySelector('#current-1').textContent=roundScore;
    document.querySelector('.btn-roll').addEventListener('click',btn);
    document.querySelector('.btn-hold').addEventListener('click',hld);
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

newGame();
document.querySelector('.btn-new').addEventListener('click',newGame);



