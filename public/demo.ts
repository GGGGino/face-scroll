import * as tfjs from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl'
import {stampa, getBrowserWebcam, getFacePosition} from '../src';

tfjs.setBackend('webgl').then(() => {
  const mainVideo: HTMLVideoElement = document.getElementById("mainVideo") as HTMLVideoElement;
  const mainImg: HTMLImageElement = document.getElementById("mainImg") as HTMLImageElement;

  console.log(mainVideo);

  getBrowserWebcam().then((mediaStream: MediaStream) => {
    mainVideo.srcObject = mediaStream;
  });

  mainVideo.addEventListener('click', (event) => {
    console.log('clicked');
    getFacePosition(mainVideo);
  });

  console.log(stampa()); //ciaoo
});
