import { BrowserClip } from "@donkeyclip/motorcortex";
function setSpeech() {
  return new Promise(function (resolve, reject) {
    let synth = window.speechSynthesis;
    let id;

    id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
}
export default class VideoClip extends BrowserClip {
  get html() {
    return `<div data-initiator="text-to-speech">yooooo</div>`;
  }

  get css() {
    return ``;
  }

  setVolume(volume) {
    this.video.volume = volume;
  }

  onAfterRender() {
    const ref = { entity: {} };
    this.setCustomEntity("speech", ref);
    setSpeech().then((voices) => {
      const synth = window.speechSynthesis;
      const msg = new SpeechSynthesisUtterance(this.attrs.text);
      // msg.voice = voices[this.attrs.voice]; // Note: some voices don’t support altering params
      console.log(voices);
      msg.voice = voices.find((voice) => voice.name === this.attrs.voice);
      msg.voiceURI = this.attrs.voiceURI;
      msg.volume = this.attrs.volume; // 0 to 1
      msg.rate = this.attrs.rate; // 0.1 to 10
      msg.pitch = this.attrs.pitch; //0 to 2
      msg.text = this.attrs.text;
      msg.lang = this.attrs.lang;
      (this.context.getElements(`!#speech`)[0] || {}).entity = {
        msg,
        synth,
      };
    });

    //   */
    //   setTimeout(() => {
    //     video.crossOrigin = "anonymous";
    //     const res = that.DescriptiveIncident.volumeChangeSubscribe(
    //       that.id,
    //       that.setVolume.bind(that)
    //     );
    //     that.setVolume(res);
    //   }, 0);
    // }
  }
}
