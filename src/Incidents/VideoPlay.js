import { MediaPlayback } from "@donkeyclip/motorcortex";

export default class VideoPlay extends MediaPlayback {
  play(/*millisecond*/) {
    this.element.entity.synth.speak(this.element.entity.msg);
    return true;
  }

  stop() {
    if (!this.element.entity.synth) return;
    this.element.entity.synth.pause();
  }

  onProgress(millisecond) {}
}
