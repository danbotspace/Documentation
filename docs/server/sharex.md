# What is ShareX
ShareX can be used to capture full screen or partial screenshots (which can be exported into various image formats), such as rectangle capture and window capture. It can also record animated GIF files and video using FFmpeg.

In this document we will show you how to create one, configure it and upload your first screenshot. 

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

- **key**: Here you can set up the main keys. **If your server is going to be public leave this empty but if not just put random numbers and letters as we will set up later the admin key**

- **domain**: This is important as if not set correctly, server won't work and deny all the incoming conexions. If you proxied the server, just type the proxied domain. But if you didn't and you want to use the server's default domain, insert it **without the port**. Example: `dono-03.danbot.host`

- **public**: This options allows you to upload the files and see them ONLY with a key. `true` for uploads without key and `false` to accept uploads only with key.

- **port** and **securePort**: **IMPORTANT STEP** Here you need to put the server's port if not it won't work.

This are the important settings. For more info of another values please visit [the official github repo](https://github.com/TannerReynolds/ShareX-Upload-Server#configuration).

## Private configuration (only you can use the server)

So, you want to create a private ShareX server, right? In that case, follow this steps

## Public configuration (everyone can use your server)