# Wordpress

WordPress is a free and open-source content management system (CMS) written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes. WordPress was originally created as a blog-publishing system but has evolved to support other web content types including more traditional mailing lists and forums, media galleries, membership sites, learning management systems (LMS) and online stores. One of the most popular content management system solutions in use, WordPress is used by 42.8% of the top 10 million websites as of October 2021.

p{//en.wikipedia.org/wiki/WordPress} Source: Wikipedia

---

# Create and setup the server

To have a cool looking **Wordpress** website you need 3 things: domain, server and database.

In order to create the server you need a server type. The one you need is [Nginx](/server/web-hosting/nginx)!

## Get the wordpress

Since Nginx isn't only **Wordpress** you need more than just creating the server. You can download the **Wordpress** via their official download page:

p{//wordpress.org/download/} Download Wordpress

There you can download the **Wordpress** zip archive or you can just use [this link](//wordpress.org/latest.zip) to its latest version.

## Upload the archive

As soon as you downloaded wordpress.zip you can now open the [panel](//pane.danbot.host/) and upload the archive in the main root `/home/container`. After that unarchive the file and delete the `webroot` folder. By deleting it you're going to replace it with the wordpress one. Rename the wordpress folder to `webroot`.

![Replacement of the folder](/content/wordpress/replacement.png)

# Proxy the domain

Check the proxying page to know how to proxy the domain to your DBH server

p{/beginner/proxying} Proxying

Just in case you want to use the default given domain (`https://[NODE].danbot.host:[PORT]/`) you will most likely get the error

![Website error - Secure Connection Failed from Firefox](/content/wordpress/error-website.png)

# Final setup

So now all you have to do is setup the **Wordpress**. Start the server and head to your website using the domain. Choose the preffered language, click `Continue`. Since **Wordpress** uses either MySQL or MariaDB you need to declare following items:
1. Database name
2. Database username
3. Database password
4. Database host
5. Table prefix (if you want to run more than one WordPress in a single database)

If you don't have a database, guess you need one. For that head to "Databases" tab on the server panel. From there click "NEW DATABASE" and think of a good name like "Wordpress"! When you're done get all the information fields and fill them as in the pictures:

![Fields information](/content/wordpress/fields.png)

![Filled example](/content/wordpress/wordpress-data.png)

## Finish the installation

After you've done, finish the installation: add the "site name", "author", "password" and "email". It can be whatever you want. Now you're ready to go and make your very own beautiful **Wordpress** website using its huge world of plugins and themes with DBH! You can check an example of a working DBH wordpress website here:

p{//wordpress.rick-roll.xyz/} Example - wordpress.rick-roll.xyz