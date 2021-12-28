---
title: "Choosing Blog Platform"
date: 2021-12-22T15:09:54-10:00
draft: true
---
Ok, I know this blog so far is only about blogging, which is never a good sign, but I spent about a week looking at various platforms and frameworks, so there has to be something useful in all of that.<!--more-->

I ended up using static site generator [Hugo](https://gohugo.io/) and [Github Pages](https://pages.github.com/) as a hosting, mostly for irrational reasons.

At first I wanted to use one of the blogging platforms like [Medium](https://medium.com), because I really really didn't want to spend any time building a blog, messing with design etc. I wanted to write posts.

But! The whole idea of writing posts in markdown instead of rich text editor, and having pretty much full control over how the site looks while paying nothing firmly got stuck in my head as soon as I realized that was an option. I'll cover blogging platforms later, because I did spend some time looking at them as well. Let's cover static site generators first.

# Static site generators
What people usually mean by "static site" is just a bunch of html, javascript and css files that don't have to talk to any service or database on the backend.

That means some restrictions on what you can do - e.g. you can't let users enter something on your website (that'll require a database to store what they entered).

But with simplicity you get a lot of nice things as well. For example, hosting a static site is super easy - you just need to upload your files somewhere, and make sure DNS points to that location. There are plenty of options for that, and some of them come completely free, like Github pages. S3, Google Storage and dozens of other cloud providers can do that for free or almost free, charging you only for bytes read, which is not a problem at all if nobody reads your blog.

The other big advantage is that there's almost no support overhead - you don't have to monitor your backend and database, most security vulnerabilities do not apply (you do have to keep your client javascript libraries updated, I guess), and hackers won't try to steal your server for their botnet or use your db to store their data.

The "generator" part of "static site generator" usually means that you don't have to deal with all or some of the boring parts of creating a fully functional good looking website. In the simplest case, you provide text files with your site content, pick a look for your site by choosing from one of the supported themes, set a few configuration parameters, run a magic build command and boom, you have your website. That fits blogs really well, because navigation and site layout are usually very straightforward.

Some static site generators like Gatsby take that a bit further, and allow you to talk to content management systems (that is, databases), have an API, learn React and GraphQL, provide CSS etc. At which point I'm not sure why they even call themselves "static site generators", but ok, that's just one of the many things I don't understand about Gatsby (more on that later).

## Static site generator options
I only really looked at three: Jekyll, Hugo and Gatsby. If you want to see what else is available, one strategy is to look at what cloud hosting providers support (e.g. [Netlify](https://docs.netlify.com/configure-builds/common-configurations/) or [Render](https://render.com/docs/static-sites#get-started)), and that'll give you a pretty good picture of what's current and is relatively popular.

### Jekyll
[Jekyll](https://jekyllrb.com/) is the oldest one. It's an open-source project written in Ruby, and it was specifically created with blogs in mind. It works exactly as I described above. You need to set a few config parameters  and your content in markdown or html, and you're done.  It's a default (or at least very well supported) option for Github Pages, so in theory you can get your blog running very fast. It also has a lot of themes to choose from, and a lot of them are fairly minimalistic, which I liked a lot.

I checked all of the random blogs I happened to read in the past several months, and some of them run on Jekyll - e.g. [patio11](https://www.kalzumeus.com/archive/)'s and [Andrej Karpathy](http://karpathy.github.io/)'s. Also [Tom Preston-Werner](https://tom.preston-werner.com/)'s - not surprising, since he's the creator of Jekyll and cofounder of Github, among other things.

If I were completely rational, I should've used Jekyll and saved myself several days of going down various rabbit holes. However, pretty quickly after I started using it, two things have become clear:

- I realized that I didn't want to use Ruby, like, at all. At least not unless somebody was paying me to do that (and then it's totally fine, sure, why not). I just set up rbenv, ran bundler, casually resolved some missing gem or version conflict thing, and that somehow brought up some deeply buried unpleasant memories from years ago, and generally I wasn't super excited about dealing with that on a regular basis.

- Jekyll uses [Liquid](https://shopify.github.io/liquid/) as templating language. The language itself is totally fine - anyone who worked with Jinja for Python projects will hardly notice any difference. But the terminology they use in documentation is really odd. Like, why would you call something like `{% if n == 2 %}` a tag? This is misleading, no? Same with "object" ?\
Anyway, this is super minor, and there's probably some historical context that explains that, but that did make me wonder how other frameworks do things.

One other thing that people often mention about Jekyll is that the build (converting your files into a full fledged website) is pretty slow. This is supposed to be addressed in the newer version, which Github chose not to support natively (there are well-documented workarounds for that, though). Not a concern for me, but might be an issue for sites with a lot of content.

### Hugo
[Hugo](https://gohugo.io) is slightly newer than Jekyll, and is written in Go. It works very similarly to Jekyll. One thing that won me over is that you just need one executable to do all the work. No need to deal with Ruby versions, gem versions, MacOS upgrades and other madness. On the negative side,
- the templating language looks pretty bad. Like, instead of writing\
`{% if paginator.TotalPages > 1 %}`\
you write\
`{{ if gt paginator.TotalPages 1}}`.\
Do they use Polish notation? Idk, but it looks like it.\
And `for` operator is called `range`, I think? Anyway, at first I thought that was a deal breaker (and to think that I didn't like Liquid's _terminology_), but then I convinced myself that I won't be using template language when writing posts, so why care.
- There are a lot of themes to choose from, but they are less minimalistic and seem to put more emphasis on features, which means that there's a lot of config settings to deal with. A lot of the popular themes are from Asia, which has the unfortunate side effect that they don't look as neat on websites that use English. I spent too much time browsing various themes and ended up cloning one of them and manually tweaking it to fit my needs. Jekyll's default theme looks great to me out of the box, but tastes differ.

### Gatsby
[Gatsby](https://www.gatsbyjs.com/) was mentioned as one of the new choices for blogs in Venkatesh Rao's post [A Text Renaisance](https://www.ribbonfarm.com/2020/02/24/a-text-renaissance/), so I assumed it was a newer and better alternative to Jekyll (which was also mentioned there). They sort of support this confusion by positioning themselves as static site generator and using "blog site" as an example in their [tutorial](https://www.gatsbyjs.com/docs/tutorial/). There are several blogs in their showcase, including [Dan Abramov's](https://overreacted.io/).

I tried going through the tutorial and gave up pretty quickly. It's weird. They try to target non-engineers (there are sections on what HTML is and how Git works). They then proceed to teach people about React, CSS, GraphQL, MDX etc, etc, etc. Well, I'm sure you can do without GraphQL if you only need a "blog site".\
I thought the whole thing of site generators was to help people avoid writing a bunch of html (it being wrapped in React makes it worse for a beginner, not better). And if I'm willing to write React components, why would I need a generator on top of it?

Anyway, I'm sure this is all good and useful, I just wish they explained the value proposition a little better or maybe put it someplace more visible on their website.

# Hosting
I chose [Github Pages](https://pages.github.com/) because they do exactly what I want - convert a repository into a static site and host it for free. It's not too hard to configure Github Workflow to run Hugo build after I push my changes to remote, and they show up on the website less than a minute after that.

# Comments section
One very popular example of dynamic content that doesn't work well with static websites is the comments section. You have to store comments in some database, after all. You can work around that by integrating with something like [Disqus](https://disqus.com/), and they will store your comments in _their_ database.

The problem is that dealing with comments on a public blog is a really messy affair in 2021 - I don't think you'll survive without moderation for long (and don't even think about allowing random people to upload images, this will turn very ugly very quickly). I guess Disqus and the likes provide some automated moderation as a service, but that obviously can't be free - some services charge you a monthly fee, Disqus may show ads instead.

Now that I started to pay attention to that, a lot of blogs that are self-hosted just don't have comments sections. Instead they redirect readers to Twitter (and let Twitter deal with the moderation). That doesn't seem like a great solution - there's already enough friction preventing people from leaving meaningful and useful feedback, and sending them to Twitter doesn't help with that at all. For now I'll stick with that, though. If you know how to reach me outside of Twitter, by all means do - I will appreciate your feedback in any form, and I mean it.


# Blog platforms
[Medium](https://medium.com) still seems to be the most popular platform, if you just need to have a blog and don't care about customization. I didn't want to use them because of the occasional "create an account to read that" wall that I hit when I try to read other people's blogs hosted there.

[Ghost](https://ghost.org) positions themselves as "Medium, but done right", and some of their arguments sound convincing to me, I guess. I liked their text editor more than Medium's - you can type there in markdown, insert code fragments etc (Medium most likely does that too and I just couldn't figure out how). I couldn't convince myself that $100+/year for my blog was reasonable, but I'd probably consider it as a pretty solid choice for a company blog, for example.

I also liked the general principles behind [Write.as](https://write.as/) (minimalism, yay), but their text editor is pretty basic even in the paid version.

There are some other options - Substack (do you want to get an email every time I write something? Not yet, I guess), Blogger (really odd choice for anything that's even mildly important to you, given Google's stellar track record of killing products; they can also show ads on your blog, how nice of them), Tumblr and probably many others.

# What about Wordpress, Drupal and the likes?
These seem to have much higher maintenance overhead than static sites without providing any of the benefits of blog platforms. There have been quite a few security vulnerabilities in Wordpress and its plugins, so I'd have to regularly upgrade all that stuff if I chose to self-host. There are some Wordpress-as-a-service products, but I haven't looked into them at all.

# The end!
Do you have a favorite blogging platform or static site generator? Did I get something terribly wrong? Let me know on [Twitter](https://twitter.com/dkishylau) .
