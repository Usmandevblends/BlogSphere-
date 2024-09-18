import React, { useRef, useState } from "react";

function Gagetsblog() {
  const [isPlaying, setIsPlaying] = useState(0);
  const ref = useRef(null)



  const handleonclick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if(nextIsPlaying) {
      ref.current.play();
    }else {
      ref.current.pause();
    }

   };
  return (
    <section className="gblog-sec mb-5">
      <div className="container mx-auto">
          <button
            onClick={handleonclick}
            className="bg-slate-600 text-white border p-2 mt-5  mb-s">{isPlaying ? 'Pause' : 'Play'}</button>
          <video
            width="250"
            ref={ref}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}>
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"/>
          </video>
          <br></br>
      </div>
    </section>
  );
}

export default Gagetsblog;
