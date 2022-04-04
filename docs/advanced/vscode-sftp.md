# SFTP connection using VS Code

In computing, the SSH File Transfer Protocol(SFTP) is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed by the Internet Engineering Task Force as an extension of the Secure Shell protocol version 2.0 to provide secure file transfer capabilities.

p{//en.wikipedia.org/wiki/SSH_File_Transfer_Protocol} Source: Wikipedia

---

## Installing required extension

In order to connect to sftp using Visual Studio Code make sure you have the SFTP plugin fork by `Natizyskunk`, as the original plugin is discontinued and broken.

![VSC extension, image by blox#8880](//cdn.discordapp.com/attachments/898041892279836692/931186965842378802/unknown.png)

## Setting up

To start setting up the configuration click `Ctrl + Shift + P`, then type `SFTP: Config`. That will open a file named `sftp.json`. There you will need to edit the "host", "port", "username", and "password". All of those can be found in the Settings tab in your server:

![Settings tab](/content/vscode-sftp/settings-tab.png)

t{**Note**: Make sure you are editing files in `Explorer` and not `SFTP: Explorer`. The remote explorer is only used to view files, not edit.}

## Synchronize files

To sync files from the panel to your folder, press `Ctrl + Shift + P`, and type `Sync Remote`, choose the one that is named `SFTP: Sync Remote -> Local`, press enter, then wait until all the files are synchronized.

t{**Good To Know**: If `uploadOnSave` is set to `true`, in `sftp.json` then every time a file is saved when you're editing in Visual Studio Code, it will automatically be uploaded to the server.}