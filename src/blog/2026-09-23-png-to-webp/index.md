---
title: png to webp
tagline: webp isn't as bad as you think
date: 2026-09-23
post_tags:
  - site_update
slug: png-to-webp
---
i've been noticing that whenever i go to load my website on basically anything, you can visibly notice a few of the images loading in (using the index as an example: the background, the header, and my profile image). i got tired of watching it load, so i decided to try converting all my lossless images (all pngs) into webps; some i converted lossless, and others lossy, depending on how much smaller the resulting file was and how comparable the two looked. at first i tried doing this with ffmpeg, but quickly ran into issues with not having the proper encoder. short of trying to figure out the proper encoder, i decided to try google's cli tool [cwebp](https://developers.google.com/speed/webp/docs/cwebp), and found it worked pretty well (i put the commands i used at the bottom of this post)

i've kept around the pngs for now in case i need to revert for some reason, and i unfortunately can't reliably test page load speeds on a local dev environment, but hopefully things will load faster from here on?

also if you think webp is bad, it's honestly a pretty neat file format for storing high-quality images at filesizes decently smaller than png. my only issue with it is that it can encode *both* lossy *and* lossless, and i'm not sure how to reliably tell which is which. regardless, i think it's a good format for optimizing your website with, you shouldn't be afraid to give it a try

### converting images

#### lossy

```
cwebp -q 100 -m 6 -sharp_yuv input.png -o output.webp
```

- `-q` sets the quality
- `-m` sets the compression method (higher seems to be better?)
- `-sharp_yuv` uses more accurate RGB to YUV conversion (this is a noticeable difference)
- `-o` sets the output

#### lossless

```
cwebp -lossless input.png -o output.webp
```

- `-lossless` ~~i think it's fairly obvious what this flag does~~
