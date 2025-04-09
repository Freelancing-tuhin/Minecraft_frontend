import React, { useEffect } from "react";

const HomeVideoSection = () => {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      const video = document.getElementById("customVideo");
      if (video) {
        // eslint-disable-next-line no-undef
        // @ts-ignore eslint-disable-next-line
        video.play().catch((error: any) => {
          console.error("Video autoplay failed:", error.message);
        });
      }
    });
  }, []);

  return (
    <div className="">
      <div className="feed-grid-section full-height">
        <div className="container w-container">
          <div
            data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de462"
            className="w-layout-grid apple-grid"
          >
            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de463-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de463"
              className="apple-grid-block mobile-portrait-hidden"
            >
              <div className="emebedcode-for-reels w-embed">
                <video
                  id="customVideo1"
                  autoPlay
                  loop
                  muted
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    borderRadius: 40,
                  }}
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                >
                  <source
                    src="https://kwad.in/htassets/spoiler.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de465"
              className="apple-grid-block mobile-hidden"
            >
              <div className="emebedcode-for-reels w-embed">
                <video
                  id="customVideo1"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    borderRadius: 40,
                  }}
                >
                  <source
                    src="https://kwad.in/htassets/old.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de467-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de467"
              className="apple-grid-block green hg-strangers mobile-portrait-hidden"
            >
              <div
                data-poster-url="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4,https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="background-video w-background-video w-background-video-atom"
              >
                <video
                  id="0e0903e1-b122-6092-c7ad-41f9f01de468-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg")',
                  }}
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
              </div>
              <div className="mute-unmute-icon-div" />
            </div>
            <div
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de46a"
              className="apple-grid-block tablet-hidden hg-friends"
            >
              <div
                data-poster-url="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4,https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="background-video w-background-video w-background-video-atom"
              >
                <video
                  id="0e0903e1-b122-6092-c7ad-41f9f01de46b-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg")',
                  }}
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
              </div>
            </div>
            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de46c-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de46c"
              className="apple-grid-block mobile-portrait-hidden hg-care"
            >
              <div
                data-poster-url="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4,https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="background-video w-background-video w-background-video-atom"
              >
                <video
                  id="0e0903e1-b122-6092-c7ad-41f9f01de46d-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg")',
                  }}
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
              </div>
            </div>
            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de46e-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de46e"
              className="apple-grid-block green tablet-hidden"
            >
              <div className="emebedcode-for-reels w-embed">
                <video
                  id="customVideo1"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{ width: "100%", height: "auto", cursor: "pointer" }}
                >
                  <source
                    src="https://kwad.in/htassets/next.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de470-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de470"
              className="apple-grid-block"
            >
              <div className="emebedcode-for-reels w-embed">
                <video
                  id="customVideo1"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    borderRadius: 40,
                  }}
                >
                  <source
                    src="https://kwad.in/htassets/asha.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mute-unmute-icon-div">
                <div className="mute-icon-wrapper">
                  <p className="category">Click to Mute/Unmute</p>
                </div>
              </div>
            </div>
            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de476-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de476"
              className="apple-grid-block tablet-hidden"
            >
              <div className="emebedcode-for-reels w-embed">
                <video
                  id="customVideo1"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    borderRadius: 40,
                  }}
                >
                  <source
                    src="https://kwad.in/htassets/real.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de478-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de478"
              className="apple-grid-block mobile-portrait-hidden hg-getreal"
            >
              <div
                data-poster-url="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4,https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="background-video w-background-video w-background-video-atom"
              >
                <video
                  id="0e0903e1-b122-6092-c7ad-41f9f01de479-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg")',
                  }}
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
              </div>
            </div>
            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de47a-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de47a"
              className="apple-grid-block green mobile-portrait-hidden hg-everybody"
            >
              <div
                data-poster-url="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4,https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="background-video w-background-video w-background-video-atom"
              >
                <video
                  id="0e0903e1-b122-6092-c7ad-41f9f01de47b-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-poster-00001.jpg")',
                  }}
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/673c5de1d567c640830fd97b%2F673f12c1e97fd1995c4168f7_1_1-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
              </div>
            </div>

            <div
              className="apple-grid-block hg-meaningfull hgmg mobile-portrait-hidden"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de47c"
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de47c-3890e283"
            />

            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de47e-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de47e"
              className="apple-grid-block tablet-hidden hg-irl"
            >
              <div className="emebedcode-for-reels w-embed">
                <video
                  id="customVideo1"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    borderRadius: 40,
                  }}
                >
                  <source
                    src="https://kwad.in/htassets/irlgif.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div
              id="w-node-_0e0903e1-b122-6092-c7ad-41f9f01de480-3890e283"
              data-w-id="0e0903e1-b122-6092-c7ad-41f9f01de480"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="apple-grid-block tablet-hidden"
            >
              <div className="emebedcode-for-reels w-embed">
                <video
                  id="customVideo1"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.muted = !video.muted;
                  }}
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    borderRadius: 40,
                  }}
                >
                  <source
                    src="https://kwad.in/htassets/pineapple.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideoSection;
