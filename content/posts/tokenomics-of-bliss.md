---
title: "Tokenomics of Bliss"
date: 2022-01-03T22:05:25-08:00
draft: true
---
I've spent a bit of time looking at various projects in crypto space and trying to make sense of them. This post tries to cover a vast part of space that is sometimes referred to as "tokenomics".<!--more-->

One of the recently popular ideas of web3 is roughly "let's give out tokens to millions of users for doing useful actions online, they will do the actions, and by that the value of the thing represented by tokens will go up, and everyone will get rich in the process". See Dror Poleg's [post](https://www.drorpoleg.com/in-praise-of-ponzis/), for example, or Matt Levine's [writing](https://www.bloomberg.com/opinion/articles/2021-12-21/there-s-inside-information-in-sec-filings) on that topic [^0].

[^0]: You'll have to get through the paywall and scroll to "Web 3". Linking to Bloomberg is hard.

I find it very hard to buy this idea at face value - it feels to me a bit like watching someone confidently multiplying asymptotic zero by asymptotic infinity and getting some large number as a result. It's not that they are necessarily wrong. You can do that, but there's a certain amount of rigor required to get something meaningful. Most of the stuff I've read about tokenomics is anything but rigorous.

You won't find the math level of rigor in this post either, but I think it's still useful to spell out some of the mechanics involved in token-based incentives. And if I get something wrong in the process, I hope it'll be easier to point out the error.

# Bliss as a toy example of token economics
I stumbled recently on a random crypto project that is just that, "let's reward users for taking actions online", taken quite literally. The project seems to be dormant, but it's real enough that someone cared to create a website and write a white paper. It also tries to use as many mechanisms of token economy as possible in the late 2021.

I'm going to use it as an example, not to make fun of it, but rather to avoid handwavy assertions about an abstract product with abstract functionality. A few places that elaborate the idea of "useful Ponzi" don't even use businesses as an example - they talk about viral stuff, like Gangam and Old Country Road videos. [Bliss](https://bliss.watch/) is as concrete product idea as it gets:

> 1. Watch breathing exercises to mint BLISS coin
> 2. Use BLISS to unlock more visuals
> 3. Exchange for other crypto or fiat
> 4. BLISS coin is given value from the sales of visuals as NFTs

Ok, let's suspend our disbelief (or excitement!?) for a bit and try to figure out how it actually works. Let's also ignore the point 4 about NFTs for a bit - if I understand it correctly, it makes the whole scheme even weirder from purely economic point of view. I'll come back to it later.

First, let's address some of the things that are not explicit in the description above, but are assumed anyway.

## BLISS is both an internal currency and a stock share of the project

On the surface, the coin/token is useful in just one way: you need it in order to buy "visuals", which are some sort of pretty animations that are displayed in the app while you're breathing and make the process of breathing more enjoyable.

However! One of the weird things about crypto in general is that these internal currency tokens almost always also represent, implicitly or explicitly, a stake in the success of the project [^01]. You don't buy BLISS only because you want to buy more "visuals". No, you also buy it if you believe that the whole project is going to grow, acquire more users and potentially change the world in some way[^1].

[^01]: To complicate things further, some crypto projects also have real stock that operates as any other stock in a privately owned company. Of course, you can't normally buy it, but you can always buy tokens.

[^1]: Cynical way of looking at it, of course, is that you don't expect any of these things to happen, but you do expect a lot of other people to believe in them and you buy $BLISS to sell it to them later. In any case, the value of the coin is associated not as much with the utility of the things you can buy with it, but with how the whole Bliss project is doing.

Finding analogies for this dual nature of tokens in non-crypto world is somewhat hard. Many businesses have some sort of internal currency in the form of credits or reward points, but these are almost always denominated in dollars and their value doesn't depend on how the company is doing. The idea of buying Delta frequent flyer points because you think Delta is going to grow 10x in the future is absurd - this is not how things work, you should buy Delta stock instead. Why do businesses denominate credits in dollars? Because that's way easier for customers and for traditional accounting. Imagine paying for Uber ride with shares of Uber - odd and pretty inconvenient!

A little less absurd example is buying a lot of currency of a country that you think is going to dominate the world in the future, but even this is pretty silly - CNY/USD exchange rate doesn't reflect how China economy grows relative to US economy. Again, it would make a lot more sense to buy stocks of Chinese companies or some other assets in China.

Why has the dual nature of tokens become so prevalent in crypto? I don't know, but some obvious explanations come to mind:

- If you separate internal currency token from the "stock" token, the latter immediately starts looking like a [security](https://www.investopedia.com/terms/h/howey-test.asp#:~:text=The%20Howey%20Test%20refers%20to,Securities%20Exchange%20Act%20of%201934.), and hence is subject to a ton of US regulations. Nobody wants to go that way.

- The other downside of separating currency from the "stock" is that pricing each of the parts becomes slightly more straightforward, which is likely to significantly drive down valuations for a lot of projects. \
How much are you willing to pay for a token that you can only use to pay for new "visuals"? Well, honestly not a lot. \
How much would you pay for a share of a startup? You'd probably want to know a bunch of details about financials, user base etc. \
Merging currency with stock in a single token allows you to avoid talking about what actually drives the value of that token.

## There's a secondary market for BLISS

You should be able to exchange BLISS for almost any other crypto asset on one of the many decentralized exchanges, as long as there are people willing to buy it (or, to be more accurate, willing to be a "liquidity provider" for your token). The consequence is that at any point there's some market price for your tokens and that market price can affect behavior of your users.

Again, this is different from a lot of real world examples, where internal currencies and shares of pre-IPO startups rarely have efficient markets that can determine their true price 24/7.

## BLISS can be staked
It seems that almost everything can be staked in crypto these days. Usually, it means that you can deposit your tokens into some pool in exchange for various benefits, like receiving rewards and participating in governance. In the case of BLISS, if you stake your tokens, you get [voting rights and some rewards](https://whitepaper.bliss.watch/economics/usdbliss-token#staking-and-governance). Note that voting and rewards make the tokens look even more like stock shares.

Where do rewards come from? In a lot of cases, the protocol just "prints" more tokens and distributes them to owners of staked tokens. Bliss instead is going to distribute a fraction of tokens minted for breathing, which makes rewards more random and the whole staking thing a little less appealing.

Staking has become super popular in crypto - most of the new protocols seem to have it, and some of the older ones also introduced it recently. While staking is a central part of Proof-of-Stake consensus protocols, for a lot of other products it's just a marketing/growth/incentive tool. I think the popularity of staking is driven at least in part by inherent conflict between stock and internal currency nature of tokens:

- From the internal currency point of view, you want people to use your tokens. The more they use them, the more demand there is on the secondary market. More demand makes the price go up or at least stabilizes it, making it less likely that the token price will go down to zero.

- From the stock point of view, you want people to hold as much as possible, constraining supply and driving the price up. This happens naturally if people expect the token price to keep going up - nobody wants to spend something today if they expect to be more valuable in the future. [Margins post](https://www.readmargins.com/p/bitcoin-and-buying-things) explains the problem in great detail.

So, uh, you want people to actively use the token, but at the same time to hold on to it. Staking allows you to do exactly that - people want to buy your tokens so that they can stake them and earn rewards (not sure if anybody buys so that they can vote, but ok, maybe), and mechanics of staking ensure that people don't rush to sell their tokens if the price suddenly goes down.

I guess the other way to look at it is that staking more or less removes the "internal currency" part of the token and turns it into dividend stock with some restrictions on how quickly you can sell it.

# Dynamics of BLISS

Given the rules of the system, how will the price of BLISS token evolve over time and what will affect it?

White paper authors are [honest](https://whitepaper.bliss.watch/economics/usdbliss-token) on this point:
> With all of the use cases of $BLISS, including governance and staking, it is unclear at this time what the ratio of burning to minting should be to sustain a healthy economy. But we are dedicated to making sure the Bliss economy thrives.

Ok, fair enough. But let's hypothesize a little bit.

## Optimistic scenario

- Users like the app and the "visuals", spend a lot of time breathing, and mint some BLISS tokens.

- However, they mostly hold on to the tokens (and stake them), because these are required to get access to new "visuals" in the future. But also because they just think Bliss project is going to grow into something really large and profitable.

- More people want to buy BLISS on the secondary market, either because they want to bet on the Bliss project success, make money by staking, or they want to get access to new "visuals", but can't afford to mint enough BLISS by breathing. Because there aren't a lot of sellers, the price of the token goes up.

- As the price of the token goes up, using the app and minting BLISS by breathing becomes more and more lucrative, attracting new users and pushing existing users to spend more time using the app.

- The flywheel of "more users -> firmer belief in success of the project & more demand for "visuals" -> higher token price -> more users" keeps spinning. The project grows and improves mental health of its users in the process.

## Pessimistic scenario(s)

- Maybe the "visuals" aren't great enough to justify buying BLISS to spend on them.

- Or the rewards for staking don't compensate for drops in BLISS price, and thus even fewer people want to buy the token for the purpose of staking.

- Or maybe the users choose to immediately sell BLISS tokens they minted by breathing, preferring less volatile assets.

- Or maybe the market thinks the whole project is not a great idea, and there's not enough demand for BLISS tokens. More likely, the market simply doesn't think anything about Bliss at all - default for any new project - which is also bad for demand.

- In any case, the market price of BLISS drops, making it less meaningful to mint BLISS by breathing, causing the user base and engagement to decline, pushing the token price further. "Death spiral" ensues.

## So, will it work?

The whole thing seems pretty complicated, especially in the long run. There are multiple forces at play. What's even worse, a lot of them are out of direct control of whoever is building Bliss. Motivating sustained demand for tokens on the secondary market is hard - you're not competing with similar products, you're competing for _attention_ with _everything else_ that's on the market. "Build better product -> get more users -> get more revenue -> make profit" economics of traditional businesses look super simple in comparison.

Things do look a lot simpler, though, if you can somehow guarantee that the price of BLISS goes up over time. Then all of the incentives kind of align and the product will grow even if it's not particularly good. That kind of explains the temptation to bolt on some Ponzi-like mechanics. The mechanics can be very simple - [bonding curves](https://coinmarketcap.com/alexandria/glossary/bonding-curve) were popular some time ago - or fairly involved, but the idea is the same: regardless of your product, things are so much better if the price goes up, that you should do whatever it takes to help it go up, even if it means cheating a bit.

My personal opinion is that with a lot of luck and some exceptional execution you can make that economic model work for you for a short period of time. This might be ok for viral videos and other content, but seems like a bad choice for running a sustainable business. You can survive longer as a Ponzi scheme, though - Bernie Madoff's scheme ran for [at least 17 years](https://www.investopedia.com/terms/b/bernard-madoff.asp)[^2].

[^2]: Yeah, mindblowing and also quite depressing.

Let's address few remaining points that are specific to Bliss and aren't representative of token economics in general.

# NFTs and liquidity

As any web3 project conceived in late 2021, Bliss acknowledges the existence of NFTs and tries to ride that wave. The way NFTs are integrated into the system is kind of weird, though. Maybe I just misunderstood the [following](https://whitepaper.bliss.watch/economics/liquidity):

> Unlike many other projects, Bliss will own its liquidity, allowing users to easily exchange between $BLISS and other cryptocurrencies. \
> \
> The sales from NFTs will be used to power the liquidity pools. Fees generated from liquidity pool operations will be used solely for marketing Bliss. \
> \
> With this novel mechanism, the more transactions that happen in the pools, the more money there is to market Bliss, the more users we can acquire for the app and holders for the NFTs.

They really make it sound like the only secondary market for BLISS will be some sort of internal exchange, and the only way for that exchange to get any liquidity is through the sale of NFTs of "visuals"? They don't explain how the exchange will work - my first guess would be something like Uniswap (explained in detail [here](https://medium.com/dragonfly-research/what-explains-the-rise-of-amms-7d008af1c399)), just because it's much easier to implement. In any case, is it going to look like this:

- Somebody buys NFT for 100 ETH (pretty good? kind of unlikely?)

- 100 ETH go into the "liquidity pool" of the exchange

- BLISS holders can now exchange their tokens for ETH. The more they buy ETH for BLISS, the less ETH is in the pool, and the worse the exchange rate is, so presumably they stop at some point.

- All BLISS holders now wait for the next NFT to sell and add more ETH to the exchange pool?

- Or the hope is that people will rush in to buy BLISS at a low price, and thus push the exchange rate towards the true value? Since the dynamics are so predictable (NFTs are sold once a month, I think), it's very easy for speculators to manipulate the price as much as they want.

- I'm confused.

The difference between this hypothetical internal exchange and Uniswap is that the latter offers much easier mechanisms for price arbitrage (it's a little unclear how you arbitrage BLISS if there's exactly one place where you can sell it ) and is not subject to weird and random liquidity infusions from the sales of NFTs.

NFTs are also [income streams](https://whitepaper.bliss.watch/how-it-works/3-nfts-give-usdbliss-value) of a sort (good luck projecting how much you're going to make from one). The sheer complexity of the schema makes my head hurt. In any case, if Bliss has some decent amount of users, like 100k, and they all breathe and earn BLISS regularly, how many NFTs will they have to sell and for how much to keep the whole thing going? I don't know, I'd just allow BLISS to be traded on all the major exchanges and hope for the best.

# Parameter values

It's hard not to notice the simplicity (naivety?) of [parameters](https://whitepaper.bliss.watch/economics/usdbliss-token#distribution-of-usdbliss) in Bliss economy:
> As $BLISS is minted it is distributed in the following ways: \
> 50% goes to the user who completed the visual breathing exercise \
> 20% goes to the NFT holder of the specific visual that generated the reward \
> 20% goes to power $BLISS staking rewards \
> 10% goes to the Team running Bliss operations

How did they come up with this 50/20/20/10 structure? Well, I guess you have to start somewhere. Makes me wonder how Airbnb and Uber determined their fee structure in the beginning. At least they could look at existing businesses operating roughly in the same space. Nowadays they certainly have huge teams of people who spend all their time slightly tweaking the fees to increase revenue while keeping the business sustainable. It's much harder to tweak the fee structure in a smart contract, let alone A/B test it.

It's unlikely that Bliss will live long enough to get to that level of sophistication (unless they are super lucky and 50/20/10/10 is _the right_ parameters). But I guess the experimentation and tuning in web3 world works differently - if the idea is good enough, there will be a bunch of similar projects, and maybe one of them will get the fee structure right, and will survive [^3]. I don't think this kind of experimentation is very efficient, but it may work if there's enough people willing to fund it.

[^3]: I'm not at all sure that's how things actually work, though. Nobody rushes to clone failed projects, and clones of successful projects tend to copy most of the parameters. But there's probably some slow tweaking and feedback going on - e.g. SushiSwap might've [influenced](https://cointelegraph.com/news/sushiswaps-liquidity-grab-actually-made-uniswap-stronger-data-shows) the current governance structure of Uniswap.

# The end!
Phew, that's a lot of words about silly project. However, I do think the ideas about dual nature of tokens and staking apply to a bunch of other stuff in web3/crypto. If I got them terribly wrong, let me know on [Twitter](https://twitter.com/dkishylau).
