'use client'
import ReactPlayer from 'react-player';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.video_container}>
          {/* <video src="dance1.mp4" /> */}
          <ReactPlayer  muted={true}
                        loop={true}
                        width="640px"
                        height="640px"
                        playing={true}
                        controls={false}
                        url="video/dance2.mp4" />
        </div>
        
        {/* This is me, also me section. */}
        <div className={styles.me_container}>
          <div className={styles.me_text}>
            {/* point up : &#128070;
                pointing right : &#128073;
                point left : &#128072;
                point down : &#128071; */}
            <p >
              &#128070; This is me!<br />
              <br />
            </p>
          </div>
          <div className={styles.me_also_text}>
            <p>
              This is also me &#128071;<br />
              <br />
            </p>
          </div>

          {/* Profile, current and past experiences */}
          <div className={styles.about_text}>
            <p>
            <span className={styles.text_bold}>A little about me: </span><br />
            High-level rhythm dance game player (In The Groove, Pump It Up), playing since 2018.<br />
            Member of the rhythm game community and Discord since its creation in 2019.<br />
            I speak three languages: English, Cantonese, Korean (&lt;- self-learned, I'm not Korean!).<br />
            <br /><br />
            
            <span className={styles.text_bold}>Currently: </span><br />
            Searching for co-operative work experience &#40;Let me know if you've got one!&#41;.<br />
            Working on this website, learning and gaining experience with Next and React.<br />
            Computer Systems Technology diploma program, second-time student at BCIT.<br />
            <br /><br />

            <span className={styles.text_bold}>Previously:</span><br />
            Department Manager at <a className={styles.link_text} href="https://assimarket.ca/" target="_blank">Assi Market</a>.<br />
            Four years of undergraduate studies in Electrical Engineering, Bachelor's program at BCIT.<br />
            <br /><br />
            </p>
          </div>
        </div>
        
      </div>
    </>
  )
}