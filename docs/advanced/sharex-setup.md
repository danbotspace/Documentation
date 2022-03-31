# ShareX setup

This guide provides an information on what **ShareX** is, how to set it up using DBH as it's "host" and how to add effects.

## What ShareX is?

[ShareX](https://getsharex.com/) is a free and open source program available on windows that lets you capture or record any area of your screen and share it with a single press of a key with a feature of uploading it to host.

## What's the benefit of having ShareX installed?

**ShareX** provides a feature of uploading media to a host that can bypass uploading limits of media to any of the messengers like Discord using legal way or having screenshots stored not on a desktop. Having custom frame effects like this is dope right?

![Frame example](/content/sharex/frame-effect.png)

t{**Note**: ShareX is only available on Windows.}

# How to setup?

Before creating a **ShareX** server you have to install **ShareX** program on your pc using it's [official website page](https://getsharex.com/)

![Download ShareX](/content/sharex/getsharex.com.png)

## Create a server

In order to learn on how to create a **ShareX** server please visit [this page](/server/sharex)!

## Manage files

Your File Manager on the panel should look like this where `.sxcu` files will be used soon.

![File Manager](/content/sharex/sharex-file-manager.png)

By opening these files you will find similar "templates":

> Images_and_Files.sxcu
```json
{
  "Version": "12.4.0",
  "Name": "Images_and_Files",
  "DestinationType": "ImageUploader, FileUploader",
  "RequestMethod": "POST",
  "RequestURL": "http://[YOUR_DOMAIN]/api/files",
  "Body": "MultipartFormData",
  "Arguments": {
    "key": "YOUR_PASSWORD"
  },
  "FileFormName": "fdata"
}
```
> Text.sxcu
```json
{
  "Version": "12.4.0",
  "Name": "Text",
  "DestinationType": "TextUploader",
  "RequestMethod": "POST",
  "RequestURL": "http://[YOUR_DOMAIN]/api/paste",
  "Body": "MultipartFormData",
  "Arguments": {
    "key": "YOUR_PASSWORD"
  },
  "FileFormName": "fdata"
}
```
> URL_Shortener.sxcu
```json
{
  "Version": "12.4.0",
  "Name": "URL_Shortener",
  "DestinationType": "URLShortener",
  "RequestMethod": "POST",
  "RequestURL": "http://[YOUR_DOMAIN]/api/shortener",
  "Headers": {
    "url": "$input$"
  },
  "Body": "MultipartFormData",
  "Arguments": {
    "key": "YOUR_PASSWORD"
  },
  "FileFormName": "fdata"
}
```

t{**Note**: You have to either install these files or copy text in clipboard to import uploader settings soon.}

Consider changing `[YOUR_DOMAIN]` field in "RequestURL" to your [proxied](/beginner/proxying) domain. If you want your **ShareX** space to be private you have to set your own password in "key"! In `src/config.json` make sure to change "public", "port", "securePort", "domain" and "key"

![config.json](/content/sharex/sharex-config.png)

## Launch and configurate ShareX

Finish installation of **ShareX** and launch the program. What you have to do right now is configurate "Destinations":

![Destinations](/content/sharex/sharex-destinations.png)

There you have to import your changed files: `Text.sxcu`, `Images_and_Files.sxcu`, `URL_Shortener.sxcu`.

After all done, change uploader settings as in the picture

![Uploader](/content/sharex/uploader.png)

Move back and change destination uploaders to "Custom ... uploader" for every service

![Custom destination](/content/sharex/custom-uploader.png)

After all done you must configure "After..." triggers

![Trigger on capture](/content/sharex/trigger-1.png)

![Trigger on upload](/content/sharex/trigger-2.png)

## Adding frame effect

Frame effect can be automatically added if **you add it in "After capture task"**! To create/import these frames you have to open the Effects settings in "Task Settings"

![Manage effects](/content/sharex/manage-effects.png)

You can manually make your own cool frame effect just like I did but using [official website](https://getsharex.com/image-effects/) you can install other frame effects!

![My cool custom frame](/content/sharex/custom-frame.png)

## Start the server

After saving all stuff you're ready to share your cool screenshots made using **ShareX**!

t{**Note**: If you wish you can easily configure hotkeys as well.}
