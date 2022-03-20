# Installing

Firstly run the commands to install DBH-Docs to your local machine.

# Git clone

```
git clone https://github.com/DBH-Docs/Documentation
```

# Make edits

After that. Start editing the code

# Extra

There are some extra markdown widgets that can make your page look cooler they are as below:

> Page

`p{link} text goes here`

> Tip

`t{text goes here}`

To see all markdown expressions head to these pages:

p{/markdown} Origin: Markdown
p{https://github.com/DBH-Docs/Documentation/blob/main/docs/markdown.md} GitHub: Markdown

# Requirements

Make sure after you make edits you go into /layout/summary.md and edit it to add your edited documents in it. An example is below. Can't figure out? Checkout `/layout/summary.md` for more examples or create a issue for help:

```
    * *Category name*
    [Documentation name](/path/to/docs)
```

t{**Note**: in the path you must not include .md extension. And also the path starts from /docs so you don't need to input /docs as the first thing. Example: /server/software/git-ea.md}

# Testing

To test your changes run **node index.js** go to your web browser to test it.

# Credits

Add yourself to credits that is located on: `/docs/credits.md`
Don't forget to keep it short as we need space for more contributers


# Making a PR

Make a PR in [https://github.com/DBH-Docs/Documentation/pulls](https://github.com/DBH-Docs/Documentation/pulls) and explain what you changed. if your changes are approved Congrats. You just became a contributor.

# Thanks

Well that's basically it. I hope you enjoy the journey of becoming a contributor. Thanks for contributing and have a good day/night. Can't wait to see what you become in the future...
