# Contribute

DBH Docs is an unofficial project that was made to help other DBH members by providing tutorials. It is written, moderated and operated by the same DBH members. You can help and expand it by adding more information about DBH and stuff related to that.

# Custom markdown

There are some extra markdown widgets that can make your page look cooler they are as below!

## Copy

Copy markdown widget is used to copy the given text. An example can be found [here](//help.dbh.wtf/beginner/proxying/). It's an inline element so it can be placed anywhere just like bold, strikethrough, underline and hyperlink markdown.

```text
??text??

??JavaScript was invented by Brendan Eich in 1995 and became an ECMA standard in 1997.??
```

## Page

Page markdown widget is used to display a hyperlink button redirecting to an another page. It differs from a hyperlink by its position. Standard hyperlink is an inline element while the page markdown widget is a block element that fits very well with note-like markdown. It may not be mentioned but still can be a redirecting button. A simple example can be found [here](//help.dbh.wtf/introduction/).

```text
p{link} Page name

p{/introduction/} Introduction
```

## Extended Page

Extended page widget is an extended version of page widget that can be used to display a custom [fontawesome](//fontawesome.com/icons) icon. An example can be seen below.

```text
p{icon ++ link} Page name

p{fa-solid fa-handshake-angle ++ /contribute/} Contribute
```

## Tip

A tip markdown widget was made to describe any additional or advanced information given as a note. To use it describe the type of a tip like `**Note**` or `**Pro Tip**` following with colon and the text. Examples of a tip can be found [here](//help.dbh.wtf/getting-started/) and [here](//help.dbh.wtf/credits/).

```text
t{**Tip Type**: text}

t{**Note/Good To Know/etc**: It is a block element!}
```

## User

User markdown widget is a multi-line block element used to share the profile of a contributor or any other person. It is mostly used as a way to describe yourself. [This](//help.dbh.wtf/credits/) is an example. Never use this widget or text to share who made the current page. It is okay to leave the field empty as it will not display it. You should not add any other fields but these, write them in a random order or make them inline.

```text
u{
'card': 'link';
'desc': 'What you did to the project';
'github': 'github name';
'name': 'your name';
'pfp': 'link';
'twitter': 'twitter name';
}

u{
'card': '';
'desc': 'The one who made pages, suggested great ideas and managed documentation.';
'github': 'omxpro';
'name': 'Omxpro';
'pfp': '//cdn.discordapp.com/avatars/248470317540966443/9b6b0df02be56630e73751698a3980a6?size=512';
'twitter': '';
}
```

# Test markdown

To test your markdown page in-time use the [markdowntohtml](//markdowntohtml.com/) website.

To compare markdown syntax and its visual look on the website use pages given below. They describes all markdown features as well as custom markdown widgets:

> [Markdown test page](//help.dbh.wtf/markdown/)

> [Github: Markdown test page](//github.com/DBH-Docs/Documentation/blob/main/docs/markdown.md)

# Requirements

Make sure after you make edits you go into `/views/summary.md` and edit it to add your edited documents in it. An example is below. Can't figure out? Checkout raw [/views/summary.md](//github.com/DBH-Docs/Documentation/blob/main/views/summary.md) for more examples or create an issue for help:

```text
[[ +-Category name-+
++ fontawesome icon ++ /link/ ++ Page name ++
]]
```

> **Note**: In the path you must not include .md extension. Also the path starts from /docs so you don't need to input `/docs` in "link" field. Example: `/server/software/gitea/`

# Credits

Add yourself to credits that is located in `/docs/credits.md` using the user markdown widget (above)!

> [Documentation: Pull Requests](//github.com/DBH-Docs/Documentation/pulls/)
