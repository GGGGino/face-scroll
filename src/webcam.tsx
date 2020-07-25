/**
 *
 */
export async function getBrowserWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: { facingMode: "user" } });
    console.log(stream);
  } catch(err) {
    console.warn('errore assimilazione webcam');
  }
}
