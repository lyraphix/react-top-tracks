import React from "react";
//import styles from "./TrackList.module.css";
//make individual CSS for each component..
import styles from '@/styles/Home.module.css'

const TrackList = ({ tracks }) => {
  return (
    <div className={styles.tracklist}>
      <ul className={styles.tracklist__list}>
        {tracks.map((track) => (
          <div key={track.id} className={styles.tracklist__item}>
            <div className={styles.tracklist__item_title}>{track}</div>
            <div className={styles.tracklist__item_artist}>{track.artist}</div>
            <div className={styles.tracklist__item_duration}>{track.duration}</div>
          </div>
        ))}
      </ul>
      <span>
            PLACEHOLDER TO TEST SCROLLABILITY AND FONT

      These terms and conditions ("Terms") govern your use of the application ("App") that handles Spotify data. By using the App, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the App.

                Use of the App
                The App is intended solely for your personal, non-commercial use. You may use the App only for the purpose of handling your Spotify data, and you may not use the App for any other purpose. You are solely responsible for any use of the App, and you agree to use the App in accordance with these Terms.

                User Account
                In order to use the App, you must have a valid Spotify account. You must provide accurate and complete information when creating your account. You are responsible for maintaining the confidentiality of your account information, and you agree to notify us immediately if you become aware of any unauthorized use of your account.

                Data Privacy
                The App may collect and use certain data related to your use of Spotify, including but not limited to your listening history, playlists, and other data related to your account. By using the App, you agree that we may collect and use this data in accordance with our privacy policy.

                Intellectual Property
                The App and its content, including but not limited to text, graphics, images, and software, are the property of the App developer or its licensors, and are protected by copyright and other intellectual property laws. You may not use the App or its content for any commercial purpose without the prior written consent of the App developer.

                Limitation of Liability
                The App developer will not be liable for any damages arising from your use of the App or your inability to use the App, including but not limited to direct, indirect, incidental, consequential, or punitive damages.

                Indemnification
                You agree to indemnify and hold the App developer harmless from any claims, damages, or other liabilities arising from your use of the App or your violation of these Terms.

                Termination
                The App developer may terminate your use of the App at any time for any reason. Upon termination, you must cease all use of the App and delete any copies of the App that you have downloaded.

                Changes to these Terms
                The App developer may update these Terms from time to time. If we make any material changes to these Terms, we will notify you by email or by posting a notice on our website. Your continued use of the App after such changes constitutes your acceptance of the new Terms.

                Governing Law
                These Terms are governed by the laws of the state in which the App developer is located, without regard to its conflict of law provisions. Any dispute arising under these Terms will be resolved in the state or federal courts located in that state.

                Entire Agreement
                These Terms constitute the entire agreement between you and the App developer regarding your use of the App, and supersede all prior agreements or understandings, whether written or oral. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
              </span>

    </div>
  );
};

export default TrackList;
