---
title: "Building my own Flycut app"
date: 2022-05-15T13:19:37-07:00
draft: false
images:
    - "img/flycut.png"
summary: |
    I recently went down a little rabbit hole with clipboard managers on MacOS. I can't get the hours spent back,
    but here's a little summary in case it helps other people.
---

I recently went down a little rabbit hole with clipboard managers on MacOS. I can't get the hours spent back,
but here's a little summary in case it helps other people.

# Clipboard managers on MacOS
We engineers do a lot of copypaste. To be more efficient at that, it's very useful to have two things:
- a history of stuff you copied;
- an ability to choose and paste something from that history.

Since MacOS doesn't provide either of these, there's a small niche for "clipboard managers" - apps that keep track of clipboard history for you.

I haven't done a comprehensive analysis of the whole field, but in the past I've seen two apps recommended:
- [CopyClip](https://apps.apple.com/us/app/copyclip-clipboard-history/id595191960?mt=12)
- [Flycut](https://apps.apple.com/us/app/flycut-clipboard-manager/id442160987?mt=12)

You can also find similar functionality in some IDEs and in powerhouse apps like [Alfred](https://www.alfredapp.com/), but it's either limited or costs $$$.

I've used CopyClip in the past, and it didn't feel convenient enough - you have to click on the icon in the menu bar and select what you want to paste.
Flycut, on the other hand, does exactly what I'd expect it to - there's a `Ctrl-Shift-V` shortcut that lets you cycle through the clipboard and choose what needs to be pasted.
So, I really wanted to use it. But...

# The problem with password managers
Copying passwords into clipboard feels relatively secure. Some password managers go a bit further and clear the clipboard shortly after you copied a password.

However, it feels less secure with clipboard managers. A password can live in clipboard history for a very long time, its visible in plain text in history UI,
and the clipboard manager app may even store it on disk, just in case. Both CopyClip and Flycut acknowledge this problem.

CopyClip has a "skip list" of apps where copied content is not stored in clipboard history.

Flycut, on the other hand, has a rather low-level way of solving this problem - it allows to exclude certain "pasteboard types", which in theory should identify the fields with sensitive information.
As of the latest official release, 1.9.6, this doesn't really help with excluding 1Password, for example. There's also a heuristic based on the length and contents of copied content, but it only helps
if all your passwords are of the same length and follow the same rules of upper/lowercase letter, symbol and number in them. In short, not great.

# Open source to the rescue
Flycat is open-source, so you can follow the history of the problem over the years: [#117](https://github.com/TermiT/Flycut/pull/117), [#127](https://github.com/TermiT/Flycut/issues/127), [#225](https://github.com/TermiT/Flycut/issues/225), [#252](https://github.com/TermiT/Flycut/issues/252).

However, proposed fixes have never made it into the official release, and the last release was 2 years ago, so who knows when the next one is going to be.

One of the fixes, though, has been merged into the main branch, and there's a [recent comment](https://github.com/TermiT/Flycut/issues/252#issuecomment-1012974848) claiming that it does solve the problem, at least for 1Password, which is what I use.

All I had to do was download the source code and build the app. I've never developed MacOS apps, and have tried to stay as far as possible from Xcode, but how hard can it be?

Turns out, moderately hard.

# Building Flycut locally
When I tried building the app, it failed. The problem, I think, boils down to the following:
- the app needs to be signed;
- to sign an app, you need an Apple ID and a certificate;
- you can create _development_ certificate in XCode;
- however, because Flycut uses iCloud and push notifications, you have to use, like, a real certificate that you create through Apple Developer program;
- it costs $99 to enroll into Apple Developer program, which is a bit too much for an ability to copypaste more efficiently.

But! I personally need neither iCloud, nor push notifications, and after some struggle with XCode UI I managed to remove both from the app config.

The things were straightforward after that:
- Run "Archive" command to build a release version of the app.
- "Distribute" the resulting archive by copying it to some folder.
- Copy the app from that folder to Applications.

I [forked](https://github.com/ph-ph/Flycut) the repo to persist my changes in the settings, in case anyone else wants to try that route.

# The end
Do you have your own favorite clipboard manager, or can explain why it's a bad idea to use them at all? Let me know on [Twitter](https://twitter.com/dkishylau)
