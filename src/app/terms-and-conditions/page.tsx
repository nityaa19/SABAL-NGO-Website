import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Terms &amp; Conditions</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Please read our terms and conditions carefully. Last updated: April 20, 2022
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-4xl">
            <CardHeader className="items-center text-center">
              <FileText className="h-12 w-12 text-primary" />
              <CardTitle className="text-2xl font-headline pt-4">Terms &amp; Conditions</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-muted-foreground p-6 md:p-8 space-y-4">
              <p>Please read these terms and conditions carefully before using Our Service.</p>

              <h2 className="font-semibold text-foreground">Interpretation and Definitions</h2>
              <h3 className="font-semibold text-foreground">Interpretation</h3>
              <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

              <h3 className="font-semibold text-foreground">Definitions</h3>
              <p>For the purposes of these Terms and Conditions:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Country</strong> refers to: Bihar, India</li>
                <li><strong>Company</strong> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to SABAL NGO, Govind Nagar, Ward No. 03, Near Galaxy Convent School, Takiya, Sasaram, Rohtas, BIHAR, 821113.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Terms and Conditions</strong> (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created by authorised members of SABL NGO</li>
                <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
                <li><strong>Website</strong> refers to SABAL NGO, accessible from https://sabal.in and/or www.sabl.in</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>

              <h2 className="font-semibold text-foreground">Acknowledgment</h2>
              <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the SABAL NGO. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
              <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
              <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service. However, for general guidance, research, project, welfare and any other purpose which shall be termend as non-distructive is not bounded by any minimum and/or maximum age limit.</p>
              <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
              
              <h2 className="font-semibold text-foreground">Links to Other Websites</h2>
              <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
              <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
              <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>

              <h2 className="font-semibold text-foreground">Termination</h2>
              <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
              <p>Upon termination, Your right to use the Service will cease immediately.</p>

              <h2 className="font-semibold text-foreground">Limitation of Liability</h2>
              <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven’t purchased anything through the Service.</p>
              <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
              <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party’s liability will be limited to the greatest extent permitted by law.</p>

              <h2 className="font-semibold text-foreground">“AS IS” and “AS AVAILABLE” Disclaimer</h2>
              <p>The Service is provided to You “AS IS” and “AS AVAILABLE” and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
              <p>Without limiting the foregoing, neither the Company nor any of the company’s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
              <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>

              <h2 className="font-semibold text-foreground">Governing Law</h2>
              <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>

              <h2 className="font-semibold text-foreground">Disputes Resolution</h2>
              <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute formally by contacting the Company via different modes of communication.</p>

              <h2 className="font-semibold text-foreground">Severability and Waiver</h2>
              <h3 className="font-semibold text-foreground">Severability</h3>
              <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
              <h3 className="font-semibold text-foreground">Waiver</h3>
              <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party’s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>

              <h2 className="font-semibold text-foreground">Translation Interpretation</h2>
              <p>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
              
              <h2 className="font-semibold text-foreground">Terms and Conditions for Donation</h2>
              <p>We will use your donation at our discretion but within our stated charitable objectives. Before we can process a donation you must provide us with (i) your name, address and email address; and (ii) details of payment mode you wish to use to fund the donation. We will use this information to process your donation. It is your responsibility to ensure you have provided us with the correct information.</p>
              <p>When you submit your payment details, these details will be transferred to our payment provider, and your payment data will be collected and processed securely by them. We won’t share your personal details with any other third party other than is set out in our Privacy Policy. Our Privacy Policy forms part of these Donation Payment Terms and Conditions and by agreeing to these Terms and Conditions you are also agreeing to the way we use and protect your personal information in line with our Privacy Policy. These Donation Payment Terms and Conditions will apply to one time and successive donations.</p>
              <p>We reserve the right to amend these Donation Payment Terms and Conditions at any time.</p>
              <p>These Donation Payment Terms and Conditions are governed by Indian law and are subject to the exclusive jurisdiction of the Indian courts.</p>
              <p>If you make an error in your donation please contact us either by email at contact@sabal.in, by phone at +91-8936855589</p>
              <p>If you become aware of fraudulent, Kindly inform us either by email at contact@sabal.in, by phone at +91-8936855589</p>

              <h2 className="font-semibold text-foreground">Changes to These Terms and Conditions</h2>
              <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
              <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>

              <h2 className="font-semibold text-foreground">Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>By email: contact@sabal.in</li>
                <li>By visiting this page on our website: https://sabal.in/contact</li>
                <li>By phone number: +91-8936855589</li>
                <li>By mail: Govind Nagar, Ward No. 03, Near Galaxy Convent School, Takiya, Sasaram, Rohtas, BIHAR, 821113</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
