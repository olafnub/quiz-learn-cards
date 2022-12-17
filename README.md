# How to Study
## Learning terms easier and creating a good study knowledge
Welcome! This website is here to help you learn how to study more efficiently and effectively (unless you already have a technique that works for you).

At the end of the website, there's a flash card game you you can use to study for terms. How it works is that you type in your terms and definitions. And at the end you can start the game. Once the game is running, you will be given random terms and definitions and you'll have
to match whatever term card you have ontop to your bottom card definitions! "Stop" will stop your game but you'll still be able to have your terms and definitions. In order to reset <strong>everything</strong> click the "clear all" button on the bottom near the log.


## Easter Eggs
In one of the last problems I had to solve for this project to be done, my alert would alert "correct!" and also "try again" at the same time when I clicked the terms during my second round/game. I had a hard time trying to figure out what the problem was. And searched lots on google and moved around things in my code. I knew I shoud've just tested the code with a replica example on a <a href="https://jsfiddle.net/">code testing website</a> but I kept pushing it back because that meant I had to replicate everything and do more work-- and I didn't want to do that. Finally, after many tries (and my gf not responding to my texts) I decided to give it a try on a tester. Luckily I found the answer when I was playing around with the tester, and realized my code would essentially run the "click" twice instead of once during the second round of game. It would run twice because the "click" would run again ontop of the first time it was executed. And so when second round came, and I pressed a button, the website would pop up "correct" and also "try again!" even though I clicked the right answer. 
<img width="500" alt="alert_twice_bug" src="https://user-images.githubusercontent.com/101077165/208219107-8dd18e3c-80cb-4256-b171-5ef40389ea24.png">
