import * as blazeface from '@tensorflow-models/blazeface';

/**
 * Open the camera and catch the face
 */
export function stampa(): string {
  return 'pippo';
}

/**
 * Open the camera and catch the face
 */
export async function getBrowserWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: { facingMode: "user" } });
    console.log(stream);
  } catch(err) {
    console.warn('errore assimilazione webcam');
  }
}

/**
 * With the passed image we recognize the position
 */
export async function getFacePosition() {
  // Load the model.
  const model = await blazeface.load();

  // Pass in an image or video to the model. The model returns an array of
  // bounding boxes, probabilities, and landmarks, one for each detected face.

  const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
  const canvasElement: HTMLImageElement|null = document.querySelector("img");
  const predictions = await model.estimateFaces(canvasElement!, returnTensors);

  if (predictions.length > 0) {
    /*
    `predictions` is an array of objects describing each detected face, for example:

    [
      {
        topLeft: [232.28, 145.26],
        bottomRight: [449.75, 308.36],
        probability: [0.998],
        landmarks: [
          [295.13, 177.64], // right eye
          [382.32, 175.56], // left eye
          [341.18, 205.03], // nose
          [345.12, 250.61], // mouth
          [252.76, 211.37], // right ear
          [431.20, 204.93] // left ear
        ]
      }
    ]
    */

    for (let i = 0; i < predictions.length; i++) {
      const start: any = predictions[i].topLeft;
      const end: any = predictions[i].bottomRight;
      const size = [end[0] - start[0], end[1] - start[1]];

      // Render a rectangle over each detected face.
      // ctx.fillRect(start[0], start[1], size[0], size[1]);
    }
  }
}
