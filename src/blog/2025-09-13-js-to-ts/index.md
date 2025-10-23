---
title: javascript to typescript
date: 2025-09-13
permalink: /blog/js-to-ts/
---

more or less on a whim, i decided to convert the workings of my website from javascript (js) to typescript (ts), mostly because i've heard great things about ts and wanted to give it a shot, but also because i wanted a mediocre-size programming project to work on. this definitely isn't going to be a step-by-step guide (because gatsby has documentation on converting your site to ts, see [links that were helpful](#links-that-were-helpful)), i figured i'd just collect some resources that i found quite helpful during the process and mention things that i struggled with. i'm writing this blog post as i do it, so warning that it's probably a bit stream-of-consciousness

### stuff that was annoying

- i wanted to customize the data types of certain nodes i grabbed from contentful, since i wanted to enforce that some data would always be present/required. however, it took a lot of trial and error to figure out the proper way to set these, and even then, the specific things i wanted to do (namely specify that *associations* would always be present) i couldn't figure out how to do, unfortunately. for example, every art piece on the [art page](https://sabi.pink/art) is an art piece in contentful that has an associated *artist*. i was able to mark the artist names as required and the links as optional, but i couldn't actually mark the artist *association* as non-nullable
- even with the graphql typegen, i still found myself having to manually create types for each node since i map each node to a react component. it took me a while to figure out that i could just infer the type of the node by grabbing the first element of the `ReadonlyArray` that `nodes` returns. i just *narrowly* avoided going down a hella long stack overflow and documentation rabbithole
- when querying for gatsby image data, it will return either `GatsbyImageData` or `undefined`. the react component responsible for displaying gatsby images doesn't allow `undefined`, and it took me forever to figure out i could just tack a `!` onto the end of an attribute to essentially tell the ts compiler "hey i know this will always exist"

<a id="links-that-were-helpful"></a>
### links that were helpful

- [using react children props with ts](https://blog.logrocket.com/react-children-prop-typescript/)
- [the ts documentation on objects](https://www.typescriptlang.org/docs/handbook/2/objects.html) (because documentation is usually helpful)
- [gatsbyjs documentation on ts](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#pageprops) (again, because documentation is _usually_ helpful)
- [gatsbyjs documentation on graphql typgen for ts](https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/) (this was actually quite helpful because it meant i didn't have to manually figure out how to type queries on my page)
- [gatsbyjs documentation on node customization](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#defining-child-relations) (this wasn't super helpful, but we got there in the end ig)

### reflection

all-in-all, i found this project actually to be quite fun, regardless of it being a bit frustrating, but it's mostly me complaining for no reason lol. in the future, if i work on another project that is js-based, i'll reach for ts instead when i can (but i still prefer using ruby or python, admittedly. ideally, i'd use ruby with static typing). i thought that converting my site, though small and relatively basic, would take a few weeks and multiple incremental PRs (i named the branch `ts-start` because i thought it'd be just setting the foundation for ts), but i was actually able to knock it out within a few hours spread across a weekend. is it a bit of a scuffed implementation? absolutely, but it works lol. admittedly, while the benefits of converting this site to ts are not immediately clear, i think this was a great bit of practice for learning about ts, and surprisingly forced me to learn a bit more about gatsby's inner workings as well
