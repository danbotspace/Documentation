# What is Node.js?
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. [Source: Wikipedia](https://en.wikipedia.org/wiki/Node.js)

In this document we will show you how to create one, install dependencies and upload your files. 

> If you are going to host a Discord bot, we recommend you using [RedDiscordBot](https://help.dbh.wtf/server/rdb) if you don't know how to code. If you know how to code but don't know how to code a Discord.js bot, visit [this web](https://discordjs.guide).

# Creating the server
To create a server, we suppose that you've already [created and linked an account into the panel.](https://help.dbh.wtf/getting-started)

In that case, go to DBH server and run this command:

For a free server: `DBH!server create nodejs [optional server name]`

For a donator server: `DBH!server create-donator nodejs [optional name]`

# Configuration
## 1.- Adding package.json
If you are going to install dependencies into the server, which most likely you will, we are going to show you 2 methods to create a package.json file. **(If you already have created one into your project skip this step)**

### Creating the file manually (recommended if you only want to install dependencies)

Log in into the [panel](https://panel.danbot.host), go to your server, then open the server's files by clicking the folder icon (fig. 1) on the left bar. You now should be in this empty page:

![panel showing empty server files](/content/file-manager.png)

Now click in New File (fig. 2). Now you can create a new file. Give it the name of `package.json` and insert this code (replace it with your own dependencies):

```
{
    "dependencies": {
        "dependency": "1.0.0",
        "another-one": "3.2.1"
    }
}
```

Then save the file and you're ready to continue with the next step.

### Creating the file via `npm init` (recommended if you want to set package.json with all the fields)

Please make sure to have installed [node and npm](https://nodejs.org) first. Then, in your computer, press Win + R, and type `cmd`. In the Command Prompt, type `cd Desktop` then Enter, and then `npm init` then Enter again. With this commands you will going to create a package.json file into your desktop. Now you should see this prompt:

![A cmd prompt that has executed npm init](/content/npm-init.png)

Now you need to type the fields that the prompt asks you. Press Enter once you filled a field to fill the next one.

> **Pro tip:** The text that is between brackets is the default value, so if you don't type anything it will automatically put that value into the file.

Once you have filled everything, a package.json file should appear in your desktop.

Now, log in into the [panel](https://panel.danbot.host), go to your server, then open the server's files by clicking the folder icon (fig. 1) on the left bar. You now should be in this empty page:

![panel showing empty server files](/content/file-manager.png)

(Please ignore fig. 2)

Now click on upload and select that file, or drag the file from the desktop to the web.

And, finally if you want to add dependencies to your package.json file please check *Creating a package.json file manually*.

## 2. Uploading or creating your code files

> **Pro tip:** If you are going to open a port, you can only open one. To get that port use `process.env.SERVER_PORT`.
### Create from scratch

If you don't have anything coded yet, and you want to code it by the way, go to the panel, your server and then files. There you have three buttons: Create directory, Upload, and New File. Click New File. There you can code your app. 

When you finish coding, put the file's name `index.js` and save.

And you're done!

### Upload the code files

If you already made a bot and you just want to upload it, you need to Compress it (into a .zip, or .tar.gz file) and then upload. **Make sure to not upload `node_modules` folder as they are going to get installed automatically into the server.** Then when the upload finished, click the 3 dots on the file and click the "uncompress" option. **Make sure that index.js is in the root folder.**

If it's just a file just upload it.

# Conclusion

And here's the end of the document! Please consider on opening a PR into our [GitHub Repository](https://github.com/DBH-Docs/Documentation).