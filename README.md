# MotorCortex-Video

**Table of Contents**

- [MotorCortex-Video](#motorcortex-video)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [Clip](#clip)
  - [Playback](#playback)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://kissmybutton.github.io/motorcortex-video/demo/)

# Intro / Features
Using MotorCortex-Video you can add video and many video effects in your clips.

The Plugin exposes three Incidents in total:
- the video Clip
- the Playback incident
- the VideoEffect incident

# Getting Started

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-video
# OR
$ yarn add @kissmybutton/motorcortex-video
```

## Importing and loading

```javascript
import { loadPlugin } from "@kissmybutton/motorcortex";
import MCVideo from "@kissmybutton/motorcortex-video";
const VideoPlugin = loadPlugin(MCVideo);
```

# Creating Incidents
## Clip

The Clip is used to create a new video clip and you can pass to it all of the core video information such as the source and the size:

```javascript
const VideoClip = new VideoPlugin.Clip(
  {
    sources: [
      "http://path/to/the/video/file.mp4",
      "./path/to/the/video/file.ogg", // alternative source for browser compatibility issues
    ],
    width: 640,
    height: 360,
  },
  {
    selector: ".your-selector", // or host: your-host
  }
);
```
### Clip Attrs


- sources: an array of sources to be used for your video. Is expected to be an array as you might need to pass more than one sources (e.g. an mp4 and an ogg)
- width: (optional / defaults to 640). The desired width of the video in pixels. You only need to define it by an integer
- height (optional / defaults to 360). The desired height of the video in pixels. You only need to define it by an integer
- startFrom (optional / defaluts to 0). If passed the video will be loaded directly with start on the specified millisecond
- ⚠️ audio (optional, defaults to false). The videos always render muted unnless you explicitly set audio to true 

## Playback

The Playback Incident is used to define the execution of the video. The only thing to set is the duration.

```javascript
const Playback = new VideoPlugin.Playback({
  selector: "!#video", // that's mandatory, it should always have the value "!#video" and it targets the video of the VideoPlugin.Clip
  duration: 20000, // the duration of the playback in milliseconds
});
```
#### IMPORTANT 
All `Playback Incidents` should have as a `selector` : `!#video`

# Adding Incidents in your clip
```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
