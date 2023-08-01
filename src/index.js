import VideoClip from "./VideoClip";
import VideoPlay from "./Incidents/VideoPlay";
import pkg from "../package.json";

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: VideoPlay,
      name: "Playback",
    },
  ],
  Clip: {
    exportable: VideoClip,
    attributesValidationRules: {
      voice: {
        optional: true,
        type: "string",
      },
      voiceURI: {
        optional: true,
        type: "string",
      },
      volume: {
        optional: true,
        type: "number",
        integer: true,
        min: 0,
        max: 1,
      },
      rate: {
        optional: true,
        type: "number",
        min: 0.1,
        max: 10,
      },
      pitch: {
        optional: true,
        type: "number",
        integer: true,
        min: 0.1,
        max: 10,
      },
      text: {
        optional: false,
        type: "string",
      },
    },
  },
  audio: "on",
};
