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
              Welcome to Musaic, a web application that allows you to create custom Spotify playlists using a unique phrase that filters your songs with the OpenAI API.
              
              By using our application, you agree to the following terms and conditions:
              </span>

              <span className={styles.gettheplaylistjus} style={{ marginTop: -20, fontSize: 15, lineHeight: 1.5 }}>
              1. Acceptance of Terms
              <br /> By accessing or using Musaic, you agree to these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, please do not use the application.
              <br /> 
              2. Use of Application
              <br /> Musaic is intended solely for your personal, non-commercial use. You may use Musaic only for the purpose of handling your Spotify data, and you may not use the it for any other purpose.
              <br /> 
              3. User Account
              <br /> In order to use Musaic, you must have a valid Spotify account. You must provide accurate and complete information when creating your account. You are responsible for maintaining the confidentiality of your account information, and you agree to notify us immediately if you become aware of any unauthorized use of your account.
              <br /> 
              4. Data Privacy
              <br /> Musaic may collect and use certain data related to your use of Spotify, including but not limited to your listening history, playlists, and other data related to your account. We respect your privacy and are committed to protecting your personal information. Our Privacy Policy governs the collection and use of your personal information through the application .By using Musaic, you agree that we may collect and use this data in accordance with our privacy policy.
              <br /> 
              5. Intellectual Property
              <br /> Musaic and all of its contents, including but not limited to text, graphics, logos, and software, are the property of Musaic and its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, display, sell, or otherwise exploit any of the application's content without our prior written consent.
              <br /> 
              6. Disclaimer of Warranties
              <br /> Musaic is provided on an "as is" and "as available" basis, without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the application will meet your requirements, be error-free, or operate without interruption.
              <br /> 
              7. Limitation of Liability
              <br /> Musaic, Team 8-Bits, and its affiliates will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from your use of the application or inability to use the application.
              <br /> 
              8. Changes to Terms of Service
              <br /> We reserve the right to modify or revise these Terms of Service at any time, and your continued use of the application following any changes constitutes your acceptance of the modified terms.
              <br /> 
              9. Governing Law and Dispute Resolution
              <br /> These Terms of Service and any dispute arising out of or related to them will be governed by and construed in accordance with the laws of the state where Musaic is headquartered, without regard to its conflict of laws principles. Any dispute arising out of or related to these Terms of Service will be resolved exclusively through arbitration in accordance with the rules of the American Arbitration Association.
              <br /> 
              <br /> 
              By using Musaic, you agree to these terms and conditions.
              </span>

            </div>
          </div>
        </div>

      </div>
  

    </div>
  );
};
export default Tos;
