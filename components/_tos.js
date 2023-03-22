import * as React from "react";
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Tos = () => {

  const vector = "/landing/vector1.svg";
  const vector1 = "/landing/vector.svg";

  return (
    <div className={styles.all}>


      <div className={styles.landing} style={{ marginLeft: 0 }}>
        <div className={styles.flexcontainer}>

        </div>

        <div className={styles.flexcontainer}>
          <div className={styles.flexcontainer1}>
            <div className={styles.catabsolutecontainer} style={{ marginRight: "15%" }}>
              <span className={styles.meetyour} style={{ fontWeight: 400, color: "#dcdffb" }}>Terms and Conditions</span>
              <span className={styles.gettheplaylistjus} style={{ fontSize: 15, lineHeight: 1.5 }}>
                Musaic provides our services to our customers with the utmost care and attention to detail. However, there are certain risks associated with using our product/service, and we cannot guarantee the outcome or results of your use.

                Therefore, we hereby disclaim any and all liability for any damages, losses, or injuries arising from the use of our product/service. By using our product/service, you agree to hold Musaic harmless from any and all claims, damages, or other liabilities that may arise as a result of your use.

                Furthermore, our liability for any claims arising from the use of our product/service shall be limited to the cost of the product/service. In no event shall we be liable for any consequential, incidental, or punitive damages arising from the use of our product/service.

                By using our product/service, you acknowledge that you have read and understood this disclaimer and that you agree to be bound by its terms.
              </span>

              <span className={styles.gettheplaylistjus} style={{ marginTop: -20, fontSize: 15, lineHeight: 1.5 }}>
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
          </div>
        </div>

      </div>
      <span className={styles.num20238bitsterms}>
        <span className={styles.num20238bitstermsbtext}>@2023 8BITS</span>
      </span>

    </div>
  );
};
export default Tos;
