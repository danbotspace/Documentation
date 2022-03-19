# What is Gitea?

Apart from a Git with a cup of Tea:

> Gitea is an open-source forge software package for hosting software development version control using Git as well as other collaborative features like bug tracking, wikis and code review. It supports self-hosting but also provides a free public first-party instance.

[Source: Wikipedia](https://en.wikipedia.org/wiki/Gitea)

----

We ask you to read entirely this document because if you skip one step you might break the server and you will need to reinstall everything.

# Creating the server

To create a server, we suppose that you've already [created and linked an account into the panel.](https://help.dbh.wtf/getting-started)

In that case, go to DBH server and run this command:

For a free server: `DBH!server create gitea [optional server name]`

For a donator server: `DBH!server create-donator gitea [optional server name]`

> **Note:** This server might take up to 2 minutes installing, so we ask you to be patient until it installs. However, this doesn't mean that it will be auto-configurated, it just installs the configuration files. That's it.

![gitea server installing](/content/server-installing.jpg)

# Configuration

Once the server has installed, go to files, then open `custom` folder and finally open `app.ini`.

> **TEMPORAL NOTE:** Gitea haves a SSL bug, so your navigator won't access the server via the sevrer's default domain because the SSL cert is broken. **We recommend you to proxy the domain.** If you tested this bug and now it's solved, please open an Issue or a PR in our [github repo](https://github.com/DBH-Docs/Documentation).

Now, edit the domain (just replace the 0.0.0.0) with your Proxied domain (if you have) or the server's default domain **WITHOUT** the port. It should look something like this:

![gitea server app.ini](/content/gitea-appini.png)

Now start the server. Starting the server for first time also takes time, please wait patiently again.

Once the server started, copy the server's domain (or the proxied one) and open it in a new tab of your navigator.

Now you should be prompted the gitea's configuration page.

> **Pro tip:** You can leave the page and the server won't break, but please note that all the changes you've made won't be saved until you install it.

## Creating a Database

In the gitea's configuration you will be asked to create a database. Luckly, DBH offers you 2 free databases per server. For creating one go to the panel, click on your server, then click "Databases" and then "New Database".