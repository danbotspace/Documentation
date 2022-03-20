# Creating A Discord Bot

This guide provides a step by step explanation on how to create and deploy your Discord bot to your DBH server.
t{**Note**: We expect you to already know basics of coding.}

## Creating your bot
Visit [Discord Developer Portal](https://discord.com/developers/applications) in order to create an application. As soon as you open `Applications` section in the sidebar you will see a cool blurple button that says `New Application`! In order to create a bot/application you have to click it and decide on a name:

![Creating an application](/content/new-application.png)

t{**Good To Know**: You might need a cool profile picture for your bot so in order to get one click on an `App Icon` and upload the file.}

As soon as your Application is done you have to head to the `Bot` section in the sidebar. An another cool blurple button waits for you to be clicked. After that your bot will be created! Great but now your server must connect to this bot, that's why now you have to get a "Token". That's easy as well, click `Reset Token` and then copy the weird looking string just by clicking another button `Copy`!

t{**Note**: Sharing token is dangerous since it lets anyone else to connect to your bot. Each time you reset the token access to the previous one gets lost.}

## Create the server

This isn't a big deal as well, there are many server types you can choose from. Python, Node.js, Java, Red Discord Bot and an AIO that contains all previously written types. To create one head to:

p{/getting-started} Getting Started

In order to find more about the egg you're interested in go to:

p{/server/intro} Introduction To Server Types

If you already had one or created one install any of the [Discord API wrappers](https://discord.com/developers/docs/topics/community-resources) and follow their instructions on how to code a bot.

## Invite the bot

As if you know every bot can be invited using an invite link. Getting one requires you to get back to the Discord Developer Portal and select `OAuth2 > URL Generator` section in the sidebar. In the "scopes" you must choose `bot` and its permissions. You will see a "Generated URL" that will be used to invite your bot. Copy one and paste it in your browser and follow given instructions.

And there you have it! Your own very cool bot.

If you want to get your bot invited to DBH, please read 

p{/advanced/dbh-api} DBH API
