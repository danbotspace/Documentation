# Tickets system

A ticketing system is a management tool that processes and catalogs customer service requests. Tickets, also known as cases or issues, need to be properly stored alongside relevant user information. A DBH ticket system relies on its channels in the server. Currently DBH ticket system provides a way to create/close ticket, upgrade/downgrade level, add/remove user from the ticket.

## Submitting a ticket

In order to submit a ticket, you have to create one and provide any information related to the hosting-related only issue. A benefit from it is that you get a less crowded place to contact support. To create a ticket use the command:

??DBH!ticket new??

## Contacting administrators only

Since moderation doesn't have all the permissions over DBH there's an option to "upgrade" the ticket to let only administrators see it:

??DBH!ticket upgrade??

To revert the changes use the following command:

??DBH!ticket downgrade??

t{**Good To Know**: Your case might already exist in the [Issue Tracker](/issue-tracker/) page!}

## Want to add someone to see your ticket?

Sometimes it is necessary to add a non-staff member to the ticket. For such cases you need the "add" command

??DBH!ticket add??&lt;User ID&gt;

### Removing an unnecessary user

You also can remove any member (including moderation) using the following command:

??DBH!ticket remove??&lt;User ID&gt;

## Issue solved

If your case/issue is now solved, you need to close the ticket using the command:

??DBH!ticket close??

This is required to be done due to the possible Discord ticket category overflow.

t{**Good To Know**: If you ever wanted to make a billion channels in the server you can't. The channel limit per server is 500 while the channel limit per category is 50. Category is also counted as a channel!}

Having solved but not closed tickets may lead to a warn or a ban!

![Closing a ticket](/content/tickets/ticket-close.png)