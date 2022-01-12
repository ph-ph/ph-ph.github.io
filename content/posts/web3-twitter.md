---
title: "Mining data in Web3 Twitter"
date: 2022-01-11T09:21:59-08:00
draft: true
---
I spent several weeks in November-December building a data pipeline and a website to surface urls that trend on web3/crypto Twitter. This was a collaboration project with [Nadia](https://twitter.com/nseldeib) and [Jared](https://twitter.com/jaredcosulich) from [SPC](https://www.southparkcommons.com/). They were interested in making web3 development easier while I was interested in getting some non-trivial dataset to practice my data wrangling skills. In the end I learned a lot more about Google Cloud than about time series analysis or data visualization, but that was fun anyway.

The idea is simple: Twitter and especially the part of it that talks about crypto and web3 is a noisy and unstructured place. Yet it is often the primary source of information about new projects and ideas. Can we apply a bit of human curation and data analysis to extract something useful out of it? Like, a list of projects that are trending, or a list of users that are worth following?

In our case the "human curation" part was basically handpicking 30-ish Twitter users that are important in some way - it was a mix of VC crypto evangelists like Chris Dixon and Packy McCormick, NFT characters, DAO leaders etc (let's call them "influencers"). The list is obviously incomplete and biased, but the hope was that at scale some biases will cancel out and we'll get something meaningful.

The "data analysis" part was on me - I used Twitter API to download 100k+ tweets, ran basic data analysis to figure out what I could quickly extract from that data, and built a data processing pipeline to download fresh tweets and process them using BigQuery. I then built a super simple website that uses some of the data from BigQuery to show "trending" URLs.

You can check out the [website](https://web3twitter.dkishylau.com), the Google Colab [notebook](https://colab.research.google.com/drive/1fNKeNOsdhgbzkd3Z3dDquqmN9L86qeHg?usp=sharing) with data analysis and the [code](https://github.com/ph-ph/web3explorer) for the data pipeline and the website. Hopefully a lot of it is either self explanatory or unimportant or both, so I'm not going to explain all the mundane implementation details here. Instead, here's a few random observations.

# Web3 Twitter
First of all, I don't use Twitter. I probably rediscovered a bunch of things that are obvious to anyone who uses it a lot or has tried processing Twitter data.

The data is noisy, super redundant, sometimes hard to decipher without the inside knowledge. My first data batch was about 100k tweets, which sounds like a lot, but actually isn't, because a big chunk of those tweets were retweets and quotes and likes of other tweets. I haven't tried to properly deduplicate the data (because I assumed all these retweets were useful for my purposes and would amplify the signal), but I'd guess the "original content" was in the low 10s of thousands or even smaller.

All naive measures of tweet importance - likes, quotes, retweets, replies - don't always work for various reasons, the biggest one being that it's super easy to like/quote/retweet so a lot of users seem to be doing that almost automatically. There are more web3-specific reasons as well. For example, I assumed that tweets with a lot of replies would be important. Cryptopunks proved me wrong.

  {{< tweet user="punk6529" id="1455868499620999178" >}}

Retweets and quotes are an ok measure of tweet quality, but they completely fail when some viral meme comes into play. In terms of engagement, a funny cat picture beats an insightful web3 post by a couple of orders of magnitude, so just sorting everything by retweets or quotes will give you cats, not insightful posts.

What seems to work is looking at urls _mentioned_ by the influencers - these at least provide you some view into what people are talking about right now.

Simply looking at word frequencies might yield something useful as well. My naive frequency-based heuristic was able to pick out some trending terms (ConstitutionDAO and Thanksgiving were popular in November, which makes sense), but also didn't detect some of the projects that we expected to be trending.

One obvious way to improve the quality of the data is to add more influencers, and you can try to do that in a semi-automated way by just looking at the users that the influencers interact with a lot. I didn't have time to do that, though, and it ran the risk of hitting Twitter API monthly limit (and my budget for this project).

# Google cloud
It was the first time I tried to build something non-trivial on Google Cloud, and overall the experience was fairly positive. Documentation, although not perfect, does a great job of providing useful walkthroughs and code samples for popular tasks.

I had a bit of trouble figuring out which products to use. For example, there are 3 or 4 different Google products that look like they should be used to build data processing pipelines. I ended up using a combination of Workflow and Cloud Functions, and I'm fairly content with that choice. The pipeline required pretty much no tweaking or maintenance after the initial deployment - it's been running for almost a month and failed only once due to some random Twitter API errors.

I was surprised that a data pipeline that runs every day and downloads 100k tweets per month could fit into Google's free tier. In my case, running it has non-zero cost for two reasons:
- I'm using Firestore as a temporary storage for new tweets after I get them from the Twitter API. For simplicity I chose to store each tweet as a separate document, and that pushes the usage slightly above the free tier limits for document reads. A smarter way would've been to group multiple tweets in a document or store them somewhere else, like Google Storage.
- I wanted to enable HTTPS for my static website to make anonymous authentication work (to reduce the possibility of a rogue bot sending too much traffic to my Firestore db). That took several hours to configure, and apparently costs about $30 a month, which seems insane when you compare it to other hosting options.

Might be a personal preference, but while working on this project I realized how much easier it is for me to deal with data using SQL and structured tables. You don't need BigQuery to process 100k tweets - you can probably get away with Pandas and process everything in memory. But uploading everything to BQ had a nice "stabilizing" effect on both the pipeline and the exploratory data analysis in Google Colab - there was a bit less of typical data exploration spaghetti code. Even though some things are much more awkward to express in SQL, that awkwardness seemed to be well-contained in the pipeline and didn't leak into the data analysis part.

[Google Colab](https://colab.research.google.com/) was one of the primary reasons why I decided to implement the project on Google Cloud - I wanted to try it out and thought that it'd be straightforward to query things like BigQuery from it. Integration with Google Cloud works fine indeed, and there are a couple of useful features that come included - I liked a lot the filterable and sortable table view for outputs. On the other hand, Google somehow managed to make the UX worse than in Jupyter Notebooks, even though Colab is just a mod on top of them. A lot of it are really minor things - an extra keystroke required here, unnecessary whitespace there - but the overall authoring experience is clunky. I haven't used similar products like AWS Sagemaker, though, so maybe Colab isn't that bad in comparison.

Weird UX problems are not limited to Colab, though. More than once I had to look for the Ok/Submit button in Google Cloud configuration interfaces, only to find it in the lower right corner of my screen, far far away from all the input fields. Do they optimize for people using their console from mobile phones? Hard to say, but it definitely feels odd.

# The end
Let me know on [Twitter](https://twitter.com/dkishylau) if you have any questions or feedback!
