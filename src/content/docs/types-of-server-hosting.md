---
title: Types of server hosting
---

There are lots of ways we can host a website, or other program.

## Shared server nodes

often, for small sites, a company or person will rent some space of a server
from a hosting company, and then their files will be hosted on that server,
which also hosts many other websites for other people at the same time.

## Dedicated server nodes

Sometimes, **dedicated** servers are used, which means that the company or
  person has the whole server to themselves, and they don't have to share it
  with anyone else. This is much more expensive though and often, you need to
  manage the server yourself.

## Cloud delivery networks

Certain companies provide something called a *cloud delivery network* (or
CDN as you might have heard it). That's where you have a network of servers
all around the world, and when a user tries to access your website, the CDN
that's nearest to the user will respond to that request.

- This is much faster, because the data doesn't have to travel as far.
- it also means that if one server goes down, the other servers can still
  respond to requests, so your website won't go down just because one server
  has a problem. This is especially important for big websites that get a lot
  of traffic, because if one server goes down, it doesn't usually affect the
  whole website, and the other servers can still respond to requests.
- However, only **static** sites can usually be hosted on a CDN. A static site
  is one that just contains a set of files, e.g. HTML files, CSS stylesheets
  and Javascript code. It **does not** rely on a central server to generate the
  files upon request.

> This website is hosted on a CDN! That's why, assuming your internet connection
> isn't absolutely terrible, it should load within about 1/20th of a second (or
> 50 milliseconds) from anywhere in the world - assuming you're not really
> really far from the nearest *cloudflare* server, which is the CDN that I
> use.  
> The reason it loads so fast is also partly because there's no annoying
> Javascript on this website, and the HTML files are very small, so they can be
> sent to your browser very quickly. All HTML files on the site are less than
> 20KB in size, and the entire website can be loaded with just that file - so
> 20KB.

