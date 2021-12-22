let hull= 20;
let alienHull1= 3;
let alienHull2= 4;
let alienHull3=4;
let alienHull4=5;
let alienHull5= 6;

function gameIntro(){
let intro=prompt('Do you want to attack the 1st alien ship? yes or no...');
hull=20;
alienHull1= 3;
alienHull2= 4;
alienHull3=4;
alienHull4=5;
alienHull5= 6;
let text;

switch(intro){
    case "yes":
        text = "Excellent decision...fortune favors the bold!";
        battle1()
        break;
    case "no":
        text = "Cowardice is for the weak...go away now!";
        break;
    default:
        text = "Try again!"
}
document.getElementById('intro').innerHTML = text;
}
  //round 1  
    function battle1(){        
        let start = Number(prompt("Alien ships have different shield levels...attack wisely! Enter a number 1-10: "));
         if (Math.ceil(Math.random() * start > 4)){
            alert("Direct Hit! click ok to continue attack");
            alienHull1-=2;
            document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull1} <br> FirePower : 3 <br> Accuracy : .6 <br>`; 
            if (alienHull1 <= 0){
                let response  = alert('Alien ship destroyed! click ok for next battle');
            }
            secondAttack();
         }
            else {
            let response = alert("You missed! click ok to proceed");
             alien1();
        }

    }
            
        
    function secondAttack() {  
            let nextShot= Number(prompt("Strike again quickly...choose a number 1-10: "));     
            if(Math.random() * nextShot > 3) {
                alienHull1-=2;
                document.getElementsByClassName('enemyStats')[0].innerHTML=`Hull : ${alienHull1} <br> FirePower : 3 <br> Accuracy : .6 <br>`; 
                if (alienHull1 <= 0) {
                    let response  = alert('Great Job...1 alien ship destroyed...can you get any more?!');
                    battle2();
                }
                secondAttack();
            }
            else {
                let response = alert("You missed! click ok to proceed");
                alien1();
             }
        } 
      

    function alien1() {
        let alienAttack = Number(prompt("Enter a number 1-10 for defensive maneuvers: "));
        if (Math.ceil(Math.random() * alienAttack > 6)) {
            let response = alert("Direct Hit...hull damaged! click ok to improve defense");
            hull-=1;
            document.getElementsByClassName('playerStats')[0].innerHTML= `Hull : ${hull} <br> FirePower : 5 <br> Accuracy : .7 <br>`;
            if (hull <= 0){
                let response = alert("All is Lost...Game Over!!!!")
                gameIntro();

            }
            alien1();
        }
        else {
            let response2= alert("You blocked their attack...get ready to counter...press ok");
            counterAttack1();
        }
       
    }

    function counterAttack1() {
        let counter = Number(prompt("Ready...aim...fire...enter a number 1-10: "));
        if (Math.ceil(Math.random() * counter > 5)) {
            let response = alert("Direct Hit...alien ship destroyed! click ok for next battle");
            alienHull1-=2;
            document.getElementsByClassName('enemyStats')[0].innerHTML=`Hull : ${alienHull1} <br> FirePower : 3 <br> Accuracy : .6 <br>`; 
            if (hull <= 0){
                let response = alert('Great shot! Get ready...another ship is approaching...click enter to engage');
            }
            battle2();
    }
    else {
        let response = alert("You missed! click ok to prepare for defense");
                alien1();
        }
    }

//Round 2
    function battle2 (){
        let start = Number(prompt("A second alien ship has moved into attack position...fire quickly! Enter a number 1-10:  "));
        if (Math.ceil(Math.random() * start > 3)){
           let next = alert("Direct Hit! click ok to continue attack");
           alienHull2-=2;
           document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull2} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
           if (alienHull2 <= 0){
               let response  = alert('Alien ship destroyed! click ok for next battle');
           }
           thirdAttack();
        }
           else {
           let response = alert("You missed! click ok to proceed");
            alien2();
       }
    }

    function thirdAttack(){
        let nextShot= Number(prompt("Strike again quickly...choose a number 1-10: "));     
            if(Math.random() * nextShot > 5) {
                let response = alert("Great Job...another alien ship destroyed...can you get any more?!");
                alienHull2-=2;
                document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull2} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
            if (alienHull2 <= 0) {
                let response  = alert('Alien ship destroyed! click ok for next battle');
            }
                battle3();
            }
            else {
                let response = alert("You missed! click ok to proceed");
                alien2();
             }
    }
    
    function alien2(){
        let alienAttack = Number(prompt("Enter a number 1-10 for defensive maneuvers: "));
        if (Math.ceil(Math.random() * alienAttack > 6)) {
            let response = alert("Direct Hit...hull damaged! click ok to improve defense");
            hull-=2;
            document.getElementsByClassName('playerStats')[0].innerHTML= `Hull : ${hull} <br> FirePower : 5 <br> Accuracy : .7 <br>`;
            if (hull <= 0){
                let response = alert("All is lost...Game Over!!!!")
                gameIntro();
            }
            alien2();
        }
        else {
            let response2= alert("You blocked their attack...get ready to counter...press ok");
            counterAttack2();
        }
        document.getElementsByClassName('playerStats').innerHTML= `Hull : ${hull} <br> FirePower : 5 <br> Accuracy : .7 <br>`;
    }

    function counterAttack2(){
        let counter = Number(prompt("Ready...aim...fire...enter a number 1-10: "));
        if (Math.ceil(Math.random() * counter > 5)) {
            let response = alert("Direct Hit...alien ship destroyed! click ok for next battle");
            alienHull2-=2;
            document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull2} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
            if (alienHull2 <= 0){
                let response = alert('Great shot! Get ready...another ship is approaching...click ok to engage');
            }
            battle3();
    }
    else {
        let response = alert("You missed! click ok to prepare for defense");
                alien2();
        }
    }
    //round 3
    function battle3(){
        let start = Number(prompt("Another alien ship has moved into attack position...fire quickly! Enter a number 1-10:  "));
        if (Math.ceil(Math.random() * start > 4)){
           let next = alert("Direct Hit! click ok to continue attack");
           alienHull3-=2;
           document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull3} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
           if (alienHull3 <= 0){
               let response  = alert('Alien ship destroyed! click ok for next battle');
           }
           fourthAttack();
        }
           else {
           let response = alert("You missed! click ok to proceed");
            alien3();
       }
    }
    
    function fourthAttack(){
        let nextShot= Number(prompt("Strike again quickly...choose a number 1-10: "));     
            if(Math.random() * nextShot > 5) {
                let response = alert("Great Job...another alien ship destroyed...can you get any more?! click ok to proceed");
                alienHull3-=2;
                document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull3} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
            if (alienHull3 <= 0) {
                let response  = alert('Alien ship destroyed! click ok for next battle');
            }
                battle4();
            }
            else {
                let response = alert("You missed! click ok to proceed");
                alien3();
             }
    }

    function alien3(){
        let alienAttack = Number(prompt("Enter a number 1-10 for defensive maneuvers: "));
        if (Math.ceil(Math.random() * alienAttack > 4)) {
            let response = alert("Direct Hit...hull damaged! click ok to improve defense");
            hull-=2;
            document.getElementsByClassName('playerStats')[0].innerHTML= `Hull : ${hull} <br> FirePower : 5 <br> Accuracy : .7 <br>`;
            if (hull <= 0){
                let response = alert("All is lost...Game Over!!!!")
                gameIntro();
            }
            alien3();
        }
        else {
            let response2= alert("You blocked their attack...get ready to counter...press ok");
            counterAttack3();
        }
        document.getElementsByClassName('playerStats').innerHTML= `Hull : ${hull} <br> FirePower : 5 <br> Accuracy : .7 <br>`;
    }

    function counterAttack3(){
        let counter = Number(prompt("Ready...aim...fire...enter a number 1-10: "));
        if (Math.ceil(Math.random() * counter > 4)) {
            let response = alert("Direct Hit...alien ship destroyed! 3 in a row! 2 bigger ships are approaching...click ok for next battle");
            alienHull3-=2;
            document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull3} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
            if (alienHull3 <= 0){
                let response = alert('Great shot! Get ready...2 bigger ships are approaching...click enter to engage the closest one!');
            }
            battle4();
    }
    else {
        let response = alert("You missed! click ok to prepare for defense");
                alien3();
        }
    }
    //Round 4
    function battle4(){
        let start = Number(prompt("The fourth alien ship has moved into attack position...fire quickly! Enter a number 1-10:  "));
        if (Math.ceil(Math.random() * start > 5)){
           let next = alert("Direct Hit! click ok to continue attack");
           alienHull4-=2;
           document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull4} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
           if (alienHull4 <= 0){
               let response  = alert('Alien ship destroyed! click ok for next battle');
               battle5();
           }
           fifthAttack();
        }
           else {
           let response = alert("You missed! click ok to proceed");
            alien4();
       }
    }

    function fifthAttack(){
        let nextShot= Number(prompt("Strike again quickly...choose a number 1-10: "));     
            if(Math.random() * nextShot > 5) {
                let response = alert("Great Job...another alien ship destroyed...you are down to the last ship...good luck! click ok for the last battle");
                alienHull4-=2;
                document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull4} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
            if (alienHull4 <= 0) {
                let response  = alert('Alien ship destroyed...you are down to the last ship...good luck! click ok for the last battle');
            }
                battle5();
            }
            else {
                let response = alert("You missed! click ok to proceed");
                alien4();
             }
    }

    function alien4(){
        let alienAttack = Number(prompt("Enter a number 1-10 for defensive maneuvers: "));
        if (Math.ceil(Math.random() * alienAttack > 4)) {
            let response = alert("Direct Hit...hull damaged! click ok to improve defense");
            hull-=2;
            document.getElementsByClassName('playerStats')[0].innerHTML= `Hull : ${hull} <br> FirePower : 5 <br> Accuracy : .7 <br>`;
            if (hull <= 0){
                let response = alert("All is lost...Game Over!!!!")
                gameIntro();
            }
            alien4();
        }
        else {
            let response2= alert("You blocked their attack...get ready to counter...press ok");
            counterAttack4();
        }
        document.getElementsByClassName('playerStats').innerHTML= `Hull : ${hull} <br> FirePower : 5 <br> Accuracy : .7 <br>`;
    }

    function counterAttack4(){
        let counter = Number(prompt("Ready...aim...fire...enter a number 1-10: "));
        if (Math.ceil(Math.random() * counter > 5)) {
            let response = alert("Direct Hit...alien ship destroyed! 4 in a row! You are down to the last ship...click ok for the last...greatest battle");
            alienHull4-=2;
            document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull4} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
            if (alienHull4 <= 0){
                let response = alert('Great shot! Alien ship destroyed! 4 in a row! You are down to the last ship...click ok for the last...greatest battle');
            }
            battle5();
    }
    else {
        let response = alert("You missed! click ok to prepare for defense");
                alien4();
        }
    }
    //Final Round
    function battle5(){
        let start = Number(prompt("This is the last alien ship...do you have enough left to defeat it? Fire quickly! Enter a number 1-10:  "));
        if (Math.ceil(Math.random() * start > 6)){
           let next = alert("Direct Hit! click ok to continue attack");
           alienHull5-=2;
           document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull5} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
           if (alienHull5 <= 0){
               let response  = alert('Great Job! You have protected the planet from an alien invasion! Click ok to face the next alien onslaught!');
               gameIntro(); 
           }
           sixthAttack();
        }
           else {
           let response = alert("You missed! click ok to proceed");
            alien5();
    }
                       
                        
    function sixthAttack(){
        let nextShot= Number(prompt("Strike again quickly...choose a number 1-10: "));     
            if(Math.random() * nextShot > 5) {
                let response = alert("Great Job...You have protected the planet from an alien invasion! Click ok to face the next alien onslaught!");
                alienHull5-=2;
                document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull5} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
            if (alienHull5 <= 0) {
                let response  = alert('Great Job...You have protected the planet from an alien invasion! Click ok to face the next alien onslaught!');
            }
                gameIntro();
            }
            else {
                let response = alert("You missed! click ok to proceed");
                alien5();
             }
    }

    function alien5(){
        let alienAttack = Number(prompt("Enter a number 1-10 for defensive maneuvers: "));
        if (Math.ceil(Math.random() * alienAttack > 5)) {
            let response = alert("Direct Hit...hull damaged! click ok to improve defense");
            hull-=2;
            document.getElementsByClassName('playerStats')[0].innerHTML= `Hull : ${hull} <br> FirePower : 5 <br> Accuracy : .7 <br>`;
            if (hull <= 0){
                let response = alert("All is lost...Game Over!!!!")
                gameIntro();
            }
            alien5();
        }
        else {
            let response2= alert("You blocked their attack...get ready to counter...press ok");
            counterAttack5();
        }
        document.getElementsByClassName('playerStats').innerHTML= `Hull : ${hull} <br> FirePower : 5 <br> Accuracy : .7 <br>`;
    }

    function counterAttack5(){
        let counter = Number(prompt("Ready...aim...fire...enter a number 1-10: "));
        if (Math.ceil(Math.random() * counter > 4)) {
            let response = alert("Direct Hit...alien ship destroyed! You have protected the planet from an alien invasion! Click ok to face the next alien onslaught!");
            alienHull5-=2;
            document.getElementsByClassName("enemyStats")[0].innerHTML=`Hull : ${alienHull5} <br> FirePower : 3 <br> Accuracy : .6 <br>`;
            if (alienHull5 <= 0){
                let response = alert('Great shot! Alien ship destroyed! You have protected the planet from an alien invasion! Click ok to face the next alien onslaught!');
            }
            gameIntro();
        }
    else {
        let response = alert("You missed! click ok to prepare for defense");
                alien5();
        }
    }
    }