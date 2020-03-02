# LoLstats:

### The Why:

A few years back, I randomly heard about a game that a few co-workers played. They mentioned a game called League of Legends which is a game I hadnt heard of previously. After looking up some reviews, I found out that League of Legends was considered one of the largest e-sports games around and actually had a larger viewership for their championship matches (around the world) than the Superbowl. 

Fast forward a few years and I am still playing League of Legends. Because of the massive amount of characters, character abilities, items, item abilities, etc... the game always seems to be changing, and I wanted a way to track my progress as I continued to play and evolve my play style. This is where LoLstats became a reality.

### The Purpose:

Because of my love for stats and trends, I wanted to create an application that could help me see specific stats in a quick glance. To start, the layout just had to be simple and easy to read so that I could quickly look up my previous stats, as well as my opponents while the next game loaded. From there, I decided that I wanted more information and wanted to build out basic trends based on previous games. This is when I decided to move this from a front-end React application to a full stack application involving a Node.js API and SQL database. 

### How It Works:

Functionality is meant to be extremely simple. Just enter in a username and press search. You will get a screen like the one below that gives you data back from the Riot (the company behind League of Legends) API and automatically displays the required data. 

![https://github.com/kDurg/LoLstats/blob/master/screenshots/lolStatsDashboard.PNG?raw=true](https://github.com/kDurg/LoLstats/blob/master/screenshots/lolStatsDashboard.PNG?raw=true)

### Tech And Challenges:

This application has gone through a TON of changes since I first started to design it while I was attending a web development boot camp. Initially the application was created using HTML, CSS and Javascript, but then quickly became a React/ Express/ Node/ SQL program to improve performance and experience. 

Because of the API structure and limits set by Riot games, I found myself having to be creative with storing data to be used for separate calls. To start receiving data, I needed to capture the username of the gamer, which would return a Riot-specific ID. With that ID, I could gather recent game information such as players in each game, win/loss status and basic stats. Using the user's ID in conjunction with a specific game ID (also Riot specific), I was able to get an in-depth breakdown of specific data, such as damage done, gold spent, and individual items that were used in the game by the user. Finally, after receiving all that data, I was able to query another API (data dragon) which returned assets such as character images, item images and description data. Because of all these API calls and basic logic methods, the front-end started to slow down which sparked the idea to set up a server that would not only take care of required data handling, but also to store data into a SQL database for faster data gathering and analyzation. 

### Future Improvements:

- [ ]  Host front-end website (currently only runs locally)
- [ ]  Bridge Front-end with API and Database
- [ ]  Create login page with 1st time data grabs to build Trends page
- [ ]  Tie Trends page to Live-game page