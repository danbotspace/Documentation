# What is Gitea?

Apart from a Git with a cup of Tea:

> Gitea is an open-source forge software package for hosting software development version control using Git as well as other collaborative features like bug tracking, wikis and code review. It supports self-hosting but also provides a free public first-party instance.

p{fa-brands fa-wikipedia-w ++ https://en.wikipedia.org/wiki/Gitea} Source: Wikipedia

---

We ask you to read entirely this document because if you skip one step you might break the server and you will need to reinstall everything.

# Creating the server

To create a server, we suppose that you've already [created and linked an account into the panel.](https://help.dbh.wtf/getting-started)

In that case, go to DBH server and run this command:

For a free server: `DBH!server create gitea [optional server name]`

For a donator server: `DBH!server create-donator gitea [optional server name]`

t{**Note:** This server might take up to 2 minutes installing, so we ask you to be patient until it installs. However, this doesn't mean that it will be auto-configurated, it just installs the configuration files. That's it.}

![gitea server installing](/content/gitea/server-installing.jpg)

# Configuration

Once the server has installed, go to files, then open `custom` folder and finally open `app.ini`.

t{**Temporary note:** Gitea has a SSL bug, so your navigator won't access the server via the server's default domain because the SSL certificate is broken. **We recommend you to proxy the domain.** If you tested this bug and now it's solved, please open an Issue or a PR in our [github repository](https://github.com/DBH-Docs/Documentation).}

Now, edit the domain (just replace the 0.0.0.0) with your Proxied domain (if you have) or the server's default domain **WITHOUT** the port. It should look something like this:

![gitea server app.ini](/content/gitea/gitea-appini.png)

## Creating a Database

In the gitea's configuration you will be asked to create a database. Luckly, DBH offers you 2 free databases per server. For creating one go to the panel, click on your server, then click "Databases" and then "New Database". Give it a name and click *Create Database*.

![database creation](/content/gitea/database-create.png)

Once you've created your server, you will be able to see your DB's information, and should look like this: 

![database details](/content/gitea/database-details.jpg)

If you click the eye, you will be able to see more details, including DB password.

## Configurating server

Now start the server. Starting the server for first time also takes time, please wait patiently.

Once the server started, copy the server's domain (or the proxied one) and open it in a new tab of your navigator.

Now you should be prompted the gitea's configuration page.

t{**Pro tip:** You can leave the page and the server won't break, but please note that all the changes you've made won't be saved until you install it.}

![gitea inital configuration](/content/gitea/gitea-initial-config.png)

### Database Settings

**Database Type:** Select the DB type, in this case leave it as MySQL.

**Host:** In DB's details, copy the *"endpoint"* in DB's details in panel. It should be something like `51.161.33.34:3306`.

**Username & Password:** This username is **NOT** your's, it's the DB username that you can find in the DB's details in the panel.

**Database Name:** Here you will paste the DB's name by clicking the name in the panel.

### General Settings

**Site Title:** You can give it a name or just leave it like that.

**Repository Root Path, Git LFS Root Path & Run As Username:** LEAVE IT AS DEFAULT. It's your fault if you edit them and gitea doesn't work.

**Server Domain:** If you seted it up in `app.ini` you won't need to worry about this, except it's incorrect you should edit it.

**Gitea HTTP Listen Port:** LEAVE IT AS DEFAULT.

**Gitea Base URL:** Leave it as default. **If it's proxied, just remove the port.**

### Optional Settings

We won't cover this at all as this settings are not needed, anyways **you should read this for important info**.

#### Email Settings

This setting is not needed as Gitea is intended to be working for private use, but if you want you can add a email server so you can get updates of your repositories.

#### Server and Third-Party Service Settings

Here you can set up Services that will work with Gitea. Hover your mouse in any option for more information.

#### Administrator Account Settings

You can add right now an admin account, but if you don't, **the first account created will be admin as default.**


# Configuration & Installation conclusion

After clicking "install" you should be patient and **wait** until Gitea gets insalled succefully. You can see the progress in the server's logs.

## 504 Gateway Time-out and 503 Bad Gateway

This is a very common error and when installing this error can appear. This is due to server still installing and maybe rebooting. **DON'T RELOAD OR PRESS F5 AS YOU WILL START THE PROCCES AGAIN OR BREAK THE INSTALLATION.** To reload just type again the server's doman, **NEVER RELOAD**. 

Once the server has installed you should see this:

![gitea installed succefully](/content/gitea/gitea-installed-main-page.png)

Now you can reload the web safely.
