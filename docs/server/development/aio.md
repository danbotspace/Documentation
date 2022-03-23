# All In One

`All In One` is a unique server type that contains several features that distinguish it from other `Development`(`Bot` & Codeserver) server types. This type brings all of the other types in a 1 single type and lets user interact with console.

# Console

In the `Startup` you might find out startup command is `bash`! This lets you interact with unix-like OS commands, git, npm, py, java etc. up until you "launch" the server e.g. `node .`.

# Bash

Bash(Bourne-Again SHell) is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used as the default login shell for most Linux distributions.

p{https://en.wikipedia.org/wiki/Bash_(Unix_shell)} Source: Wikipedia

There is a way to launch the language on startup. You just have to create a .sh file e.g. `start.sh` where your commands will be stored. New line may stands for a new command so you just have to implement as many commands as you want:

![start.sh])(/content/aio/start.sh.png)

After that you must change your startup command to `bash [your_file_name].sh` or in my case to `bash start.sh`.

t{**Note**: Lines after the "launch" command will be ignored!}

p{https://www.youtube.com/watch?v=I4EWvMFj37g} Youtube: Bash in 100 Seconds
