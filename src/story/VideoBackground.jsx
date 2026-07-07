// Fullscreen looping film behind the whole story — it provides all visual
// depth for the hero, and a scrim inside <main> darkens it for the chapters.
const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4';

const VideoBackground = () => (
  <div className="video-bg" aria-hidden="true">
    <video src={VIDEO_SRC} autoPlay loop muted playsInline />
  </div>
);

export default VideoBackground;
