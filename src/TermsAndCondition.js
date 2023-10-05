import React, { useState } from "react";
import "./TermsAndCondition.css"



export default function TermsAndCondition() {
    const [termsText] = useState(`
    These Terms and Conditions ("Terms") outline the agreement between [Your Company Name] ("we," "us," or "our") and you, the prospective client, for the creation of a sample website at no charge. By engaging with our services, you agree to comply with these Terms.
    1. Free Website Development:
    We commit to providing you with a free website development service. There will be no financial charges or fees from our side for the creation of this website.
    2. Usage of Sample Website:
    The sample website we create will serve two primary purposes:
      a. Business Portfolio: We will utilize this project to showcase our expertise and skills to potential clients and partners. The sample website may include non-sensitive information about your business.
      b. Interview Demonstrations: If necessary, we may utilize this project in job interviews to demonstrate our capabilities. However, we assure you that only a limited portion of the sample work will be shared with interviewers, ensuring the confidentiality of sensitive data.
    3. Request for Feedback:
    We encourage you to provide us with constructive feedback on the project. Your input is invaluable to us as it aids in improving our services and contributes to the enhancement of the technology sector as a whole. We are committed to delivering high-quality work for your benefit and the betterment of the tech society.
    4. Confidentiality:
    We prioritize the protection of your sensitive information. Any data shared with us will be handled with the utmost care and confidentiality. We will not disclose sensitive information without your explicit consent.
    5. Modification of Terms:
    We reserve the right to modify these Terms at any time. Any changes will be communicated to you in a timely manner, and your continued use of our services constitutes acceptance of the revised Terms.
    6. Termination of Services:
    You have the right to terminate our services at any time. We, too, may cease our services if there is a breach of these Terms or for any other reason we deem necessary.
    7. Governing Law:
    These Terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
    Contact Information:
    If you have any questions or concerns regarding these Terms and Conditions, please contact us at [Your Contact Information].
    By engaging with our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
  `);

    return (
        <div className="terms-container">
            <h1 className="terms-title">Terms and Conditions</h1>
            <div className="terms-content">
                <pre>{termsText}</pre>
            </div>
        </div>
    )

}