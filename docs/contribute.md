# Installing
Firstly run the commands to install DBH-Docs to your local machine
# Git clone
```
git clone https://github.com/DBH-Docs/Documentation
```
# Make edits
After that. Start editing the code
#Extra
There are some extra tags/extension that can make your docs look cooler they are as below:

> LINK

`p{link} text goes here`

> NOTE

`t{text goes here}`

# Requirements
Make sure after you make edits you go into /layout/summary.md and edit it to add your edited documents in it. A example is below.
```
    * *Your Docs Name*
    [Name that will show on sidebar](/path/to/docs)
```
t{**Note**: in the path you must not include .md extension. And also the path starts from /docs so you don't need to input /docs as the first thing. Example: /server/software/git-ea.md}

# testing
To test your changes run **node index.js** go to your web browser to test it
# credits
Add yourself to credits that is located on: /docs/credits.md
Don't forget to keep it short as we need space for more contributers


# making a pr
Make a pr in https://github.com/DBH-Docs/Documentation/pulls and explain what you changed. if your changes are approved Congrats. You just became a contributor.

# Thanks

Well that's basically it. I hope you enjoy the journey of becoming a contributor. Thanks for contributing and have a good day/night. Can't wait to see what you become in the future...
