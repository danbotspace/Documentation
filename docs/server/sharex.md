# What is ShareX
ShareX can be used to capture full screen or partial screenshots (which can be exported into various image formats), such as rectangle capture and window capture. It can also record animated GIF files and video using FFmpeg.

In this document we will show you how to create a ShareX server, configure it and upload your first screenshot. 

# Creating the Serverserver
To create a server, we suppose that you've already [created and linked an account into the panel.](https://help.dbh.wtf/getting-started)

In that case, go to DBH server and run this command:

For a free server: `DBH!server create sharex [optional server name]`

For a donator server: `DBH!server create-donator sharex [optional server name]`

# Configuration
> **This is the most difficult step, so we ask you to dedicate some time to read this article entirely**

Once your server finished installing (it might take up to 2 minutes), go to the [panel](https://panel.danbot.host), then go to your server, and the to the files. Then open the `src` folder. Now open `config.json`. 

Now, we're going to explain the important settings that you might need to set up:

## General settings

- **key**: Here you can set up the main keys. **Before setting this up please go (on this doc) to your preferred configuration (private or public)**

- **domain**: This is important as if not set correctly, server won't work and deny all the incoming conexions. If you proxied the server, just type the proxied domain. But if you didn't and you want to use the server's default domain, insert it **without the port**. Example: `dono-03.danbot.host`

- **public**: This options allows you to upload the files and see them ONLY with a key. `true` for uploads without key and `false` to accept uploads only with key.

- **port** and **securePort**: **IMPORTANT STEP** Here you need to put the server's port if not it won't work.

This are the important settings. For more info of another values please visit [the official github repo](https://github.com/TannerReynolds/ShareX-Upload-Server#configuration).

### Private configuration (only you can use the server)

- Set `public` to false

- Set the key to anything random (this is because we won't use a non-admin key, i'll show you later how to set the admin one).

- Now, in `admin` object, set your personal key, set the maximum upload size to whatever in Mb [(Here's a convertor)](https://www.unitconverters.net/data-storage/mb-to-gb.htm) and in `allowed` you can set up all the file formats you want to upload.

### Public configuration (everyone can use your server)

- Set `public` to false

- Set key into `[""]` (default) to let everyone upload.

- Set your admin key.

## ShareX Discord Admin Bot

First, follow [this steps](https://discordpy.readthedocs.io/en/stable/discord.html) to create and invite your bot.

Once you created it, set the Token of the bot, the [ID of the channel and the IDs of the people](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) that can use the bot. Next set the bot's prefix and you're done.