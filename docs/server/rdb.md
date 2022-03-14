# What is RedDiscordBot? (RDB)
Red discord bot is a multi moduler discord bot. It means that it just has some base of commands. And you can add more commands by adding a thing called cogs (we can say plugins in mc fashion 😎) it had over 550 cogs and has many commands by default.

# Creating a server
To create a server, go to DBH's discord server and type the commands below

`DBH!server create reddiscordbot Name`
↑ this is for the free node users.
**Replace Name with your bot's name/the name you want you server to have**

`DBH!server create-donator reddiscordbot Name`
↑ this is for the premium/donator users.
**Replace Name with your bot's name/the name you want you server to have**

# Configuration

# 1. Setup config.json

Firstly. Go to .config/Red-DiscordBot And delete that config.json. after that open your favourite code editor and paste in the code from below.
```
{
    "pterodactyl": {
        "DATA_PATH": "/home/container/.local/share/Red-DiscordBot/data/pterodactyl",
        "COG_PATH_APPEND": "cogs",
        "CORE_PATH_APPEND": "core",
        "STORAGE_TYPE": "JSON",
        "STORAGE_DETAILS": {}
    }
}
```

# 2. Setup token and prefix

**Token:** Go to your server's startup tab. In variables there should be a DISCORD BOT TOKEN. In that feild remove all the text and paste your discord bot token. And that's it
**Prefix** Go to your server's startup tab. In variables there should be a COMMAND PREFIX. In that remove everything and fill in your prefix.
# 2.1. Setting Owner
In your prefix variable after prefix add a **--owner** after that put a space and follow that by your user id.

# 2.2 Example
`./ --owner 248470317540966443 --dev` in here **./** Is my prefix. **--owner 248470317540966443** is my user id. **--dev** is used for some extra dev commands. In --owner replace my id with your id

# Conclusion

Well that's basically it. If I missed anything feel free to make a pr. Have fun using red
