import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import VideoPluginDefinition from "../src/";
const VideoPlugin = loadPlugin(VideoPluginDefinition);

const MyClip = new HTMLClip({
  host: document.getElementById("clip"),
  id: "my-root-clip",
  html: `<div id="video-container"></div>`,
  css: `
    #video-container{
        width: 1280px;
        height: 720px;
    }
  `,
  containerParams: {
    width: "1280px",
    height: "720px",
  },
});

const VideoClip = new VideoPlugin.Clip(
  {
    voice: "Sandy (English (UK))",
    voiceURI: "native",
    volume: 1,
    rate: 0.8,
    pitch: 1,
    text: "matrix of any object (camera,scene,light or any entity) you can do it by using the ObjectAnimation Effect",
  },
  {
    selector: "#video-container",
    id: "videoClip",
  }
);

const Playback = new VideoPlugin.Playback({
  selector: "!#speech",
  duration: 10000,
});

MyClip.addIncident(VideoClip, 0);
VideoClip.addIncident(Playback, 0);
new Player({ clip: MyClip });
