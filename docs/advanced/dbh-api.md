# DBH API

DBH API is an Application Programming Interface used to share [Discord bot](/beginner/creating-a-bot) information to DBH using API post requests. This makes bot searchable using `DBH!info <bot id>` or viewable through [https://danbot.host/bots](https://danbot.host/bots)!

# API wrappers 

There's only one known official API wrapper related to DBH API. Basically it is an outdated [NPM package](//www.npmjs.com/package/danbot-hosting) that can be installed through console([AIO](/server/development/aio) only) or using `package.json` file by adding

```json
    "danbot-hosting": "^0.1.6"
```

in "dependencies".

In order to install package through console use this npm command: ??npm install danbot-hosting??

## Unofficial API wrappers

Here's a list of some unofficial API wrappers maintained by DBH members:

| Name                        | Package Type |
| --------------------------- | ------------ |
| [danbot-hosting-stats-poster](//www.npmjs.com/package/danbot-hosting-stats-poster) | NPM          |
| [danbot-hosting-py](//pypi.org/project/danbot-hosting-py/)           | PyPI         |
| [danbot-status](//pypi.org/project/danbot-status/)               | PyPI         |

# Obtain API key

In order to interact with API you need to get an API key. This requires you to do `DBH!apikey`. As soon as you do that bot should send DM looking like this:

![API Key example](/content/dbh-api/apikey.png)

t{**Note**: Given key is an example of using a command, it does not carry any important information so the key was already regenerated. To regenerate the key do `DBH!apikey regenerate` command!}

# Raw API usage

In order to make a raw API post post request you need to define a few json keys:

```js
let guild_count = client.guilds.cache.size || 0,
    user_count = client.users.cache.size || 0,
    requestBody = {
        id: client.user.id, // Client ID
        key: '[API KEY]',
        servers: guild_count.toString(), // Server count
        users: user_count.toString(), // User count
        clientInfo: client.user // Client information
    };
```

In my case I used [discord.js](//www.npmjs.com/package/discord.js) v13 to define them, you may find out more about how to make a post request here:

p{//github.com/danbot-devs/danbot-hosting/blob/master/src/DanBot.js} GitHub: DanBot.js

After that I have used `node-fetch` to make a post request:

```js
fetch(`https://danbot.host/api/bot/${client.user.id}/stats`,
    {
        method: "post",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json"
        }
    }
);
```

Now you can check your bot using `DBH!info <bot id>` command.

t{**Note**: If something is unsaid or if you want to add another package in the list of unofficial API wrappers consider heading to our [GitHub repository](//github.com/DBH-Docs/Documentation)}