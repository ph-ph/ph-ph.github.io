---
title: "Hammerspoon"
date: 2022-10-03T09:44:42-07:00
draft: false
summary: |
    How to quickly add MacOS automations using Lua.
---

Another productivity post! This time I had to learn Lua so that I could switch to my headphones via keyboard shortcut.

# The problem
My MacBook Pro is often connected to 3 audio devices: its own built-in speakers, bluetooth headphones and an audio interface with another pair of headphones and potentially another microphone plugged into it. MacBook tries its best at guessing which audio device I want to use at any point in time, and sometimes it gets it wrong in non-obvious ways. Like, it would choose to use bluetooth headphones as an output device and audio interface as an input device - I've had several Zoom calls derailed by that, and though rare, it's pretty annoying.

It's possible that macOS will become smarter over time, but for now I really needed two simple things:
- a quick way to see exactly which device is used for input and output.
- a quick way to tell macOS to use the device of my choice.

"A quick way" usually means a keyboard shortcut - navigating audio settings UX in MacOS with a mouse is a frustrating experience, especially in the middle of an important video call.

# Hammerspoon
I was able to build exactly what I needed using [Hammerspoon](https://www.hammerspoon.org/). Hammerspoon allows you to write macOS automation scripts in Lua and bind them to keyboard shortcuts. It provides access to a wide range of APIs, from controlling window layout to managing various devices.

For my problem, I wrote a short [script in Lua](https://github.com/ph-ph/phph_configs/blob/master/init.lua) that configures 4 keybindings:
- 3 are used to select a specific audio device.
- The last one shows what's currently used for input and output, using a non-intrusive overlay text.

{{< figure src="/img/hammerspoon_overlay.png" caption="Overlay text showing my current input and output devices" >}}

The script is straightforward, but it does require some non-trivial knowledge about how audio device API works exactly, and which device ids should be used. Fortunately, Hammerspoon has a simple REPL console where I could play with API, inspect its outputs and test my assumptions. I also didn't know much about Lua, and having a quick and easy way to test my code made the whole coding experience rather fun.

For comparison, here's how the same problem is solved using AppleScript: https://plasticmind.com/code/audio-output-toggle-applescript/ . I think Lua code is easier to understand and is not as UI-dependent, and I love the fact that I don't have to use clunky Apple dev tools to develop my scripts, or port them to another laptop.

# More uses for Hammerspoon
I've been using my keyboard shortcuts for several months now, and I'm pretty happy with them - no more awkward Zoom meetings and clicking around device settings in GarageBand.

That said, I haven't used Hammerspoon for anything else yet. I think it's more due to the lack of imagination and not having a lot of workflows to automate. My typical workflow these days is opening a tab in Chrome or Slack and reading it 😭. I do think that it might be useful for doing quick stuff in time-sensitive situations, like hiding all the stuff except the browser window when you're about to share the screen. It can also help with automating complex setups - some people really like their apps to be arranged in a certain way on the screen, and not having to manually restore the layout after a reboot should be nice.
