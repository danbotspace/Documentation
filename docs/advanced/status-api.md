# Status API

Status API represents status for each node as well as for proxy, panel, mail server etc.
> Not to be confused with [Hetrix Uptime](//uptime.danbot.host/) page!

---

# About web page

![Visual Status Page Appearance](/content/status-api/appearance.png)

A visual appearance can be found using the following link:

p{//status.danbot.host/} Service Status

Basically, page shows you column order, name, type, location, uptime, load, network and CPU/RAM/SSD usage for every item. This page may show you different from `🚦╏node-status` information. And the reason is that the status page gets information directly from the DBH Daemon and channel gets information by checking servers on the panel.

t{**Good To Know**: status is updated every second}

# An API

You may get information for these items using its API:

p{//status.danbot.host/json/stats.json} JSON Service Status
t{**Warning**: Amount of items in the list is updated as soon as new node appears.}

A simple example of getting information using [Node.js](/server/development/nodejs) `node-fetch` v3 package:

```js
import fetch from 'node-fetch';
fetch('https://status.danbot.host/json/stats.json').then(y => y.json()).then(y => y.servers.find(x => x.name == "Dono-01"));
```

Where output is:

```json
{
    "name": "Dono-01",
    "type": "Dedicated",
    "host": "Dono-01",
    "location": "US",
    "online4": true,
    "online6": false,
    "uptime": "12 days",
    "load": 3.02,
    "network_rx": 0,
    "network_tx": 0,
    "cpu": 11,
    "memory_total": 65864620,
    "memory_used": 21825360,
    "swap_total": 1048568,
    "swap_used": 410880,
    "hdd_total": 858061,
    "hdd_used": 193299,
    "custom": ""
}
```

# Object values

The first 3 keys are quite easy to understand. The following keys may need explanation.
* "location" key has [iso country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) as it's value.
* "online4" shows if IPv4 responds.
* "online6" shows if IPv6 responds.
* "uptime" returns humanized uptime. Sometimes uptime does not reset when it's down, so the actual uptime might be lesser.
* "load" "It's like ping ig" ~Artiom
* "network_rx" gives an information about network receive in various units, smallest is bits. This shows wrong information for nodes.
* "network_tx" gives an information about network transmit in various units, smallest is bits. This shows wrong information for nodes.
* "cpu" usage of the cpu with it's unit as percent.
* "memory_total" RAM's total memory in kilobytes.
* "memory_used" RAM's used memory in kilobytes.
* "swap_total" RAM's total swap in kilobytes.
* "swap_used" RAM's used swap in kilobytes.
* "hdd_total" SSD's total storage in megabytes.
* "hdd_used" SSD's used storage in megabytes.
* "custom" may show nothing.

In fact if the node is down it will give different output:

```json
{
    "name": "Dono-01",
    "type": "Dedicated",
    "host": "Dono-01",
    "location": "US",
    "online4": false,
    "online6": false
}
```

In this case some keys are removed.

> You might already found unix timestamp value for "updated" at the end of the json string. This was the time when it was updated aka the time you requested information about status.

![Last updated](/content/status-api/last-updated.png)
