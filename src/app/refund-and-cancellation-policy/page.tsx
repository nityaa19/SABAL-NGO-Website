import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | SABAL',
  description: 'Understand the refund and cancellation policy for donations made to SABAL. Learn about the conditions for returns and how to cancel your order.',
  keywords: ['refund policy', 'cancellation policy', 'donation refund', 'SABAL policy'],
};

export default function RefundCancellationPolicyPage() {
  return (
    <div className="bg-background animate-fadeIn">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Refund &amp; Cancellation Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Last updated: May 06, 2022
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-4xl">
            <CardHeader className="items-center text-center">
              <RotateCcw className="h-12 w-12 text-primary" />
              <CardTitle className="text-2xl font-headline pt-4">Donation Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-muted-foreground p-6 md:p-8 space-y-4">
              
              <p><strong>NOTE : We do not have any Pricing Policy as we are not selling any product in the name of SABAL</strong></p>
              <p>Thank you for donating at SABAL NGO !</p>
              <p>If, for any reason, You are not completely satisfied with a purchase/donation, We invite You to review our policy on refunds and returns.</p>
              <p>The following terms are applicable for all the products and services that belongs to SABAL NGO.</p>

              <h2 className="font-semibold text-foreground">Interpretation and Definitions</h2>
              <h3 className="font-semibold text-foreground">Interpretation</h3>
              <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

              <h3 className="font-semibold text-foreground">Definitions</h3>
              <p>For the purposes of this Return and Refund Policy:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>Company</strong> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to SABAL NGO, Govind Nagar, Ward no. 3, Near Galaxy Convent School, Takiya, Sasaram, Rohtas, BIHAR, 821113.</li>
                <li><strong>Goods</strong> refer to the items offered for sale on the Service. eg. Donations, Charity</li>
                <li><strong>Orders</strong> mean a request by You to Donate Us.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Website</strong> refers to SABAL NGO, accessible from https://sabal.in</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
              
              <h2 className="font-semibold text-foreground">Donation</h2>
              <p>You are entitled to donate as minimum as INR 1.00 as your contribution.</p>
              <p>We collect Your Name, Email, Contact & Address for donation.</p>
              <p>We will provide required certificates in return of donation as softcopy/hardcopy whichever required by the donor.</p>

              <h2 className="font-semibold text-foreground">Your Order Cancellation Rights</h2>
              <p>You are entitled to cancel Your Order within 7 days without giving any reason for doing so.</p>
              <p>The deadline for cancelling an Order is 7 days from the date on which You received the Goods and/or Services or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>
              <p>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>By email: contact@sabal.in</li>
                <li>By visiting this page on our website: https://sabal.in/contact</li>
                <li>By phone number: 8936855589</li>
                <li>By mail: Govind Nagar, Ward no. 3, Near Galaxy Convent School, Takiya, Sasaram, Rohtas, BIHAR, 821113</li>
              </ul>
              <p>We will reimburse You no later than 14 days from the day on which We receive the returned Goods and/or Services. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</p>
              <p>Here we SABAL NGO want to clarify that cancellation of DONATION is only possibile if you falls under below mentiond category.</p>
              <p><strong>CATEGORY 1 :</strong> If your donation was successful and you haven’t received your 80G certificate then you can claim the refund & cancellation within 7 days from the date of donation/payment.</p>
              <p><strong>CATEGORY 2 :</strong> If your donation was not successful because of any unforeseen reason then you can claim the refund & cancellation within 90 days from the date of donation/payment.</p>

              <h2 className="font-semibold text-foreground">Conditions for Returns of Goods</h2>
              <p>In order for the Goods to be eligible for a return, please make sure that:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>The Goods were purchased in the last 7 days</li>
                <li>The Goods are in the original form</li>
              </ul>
              <p>The following Goods cannot be returned:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
              </ul>
              <p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
              <p>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>

              <h2 className="font-semibold text-foreground">Returning Goods</h2>
              <p>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</p>
              <p>Govind Nagar, Ward no. 3,<br/>Near Galaxy Convent School,<br/>Takiya, Sasaram, Rohtas,<br/>BIHAR, 821113</p>
              <p>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</p>

              <h2 className="font-semibold text-foreground">Gifts</h2>
              <p>If the Goods were marked as a gift when purchased and then shipped directly to you, You’ll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</p>
              <p>If the Goods weren’t marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.</p>
              
              <h2 className="font-semibold text-foreground">Contact Us</h2>
              <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>By email: contact@sabal.in</li>
                <li>By visiting this page on our website: https://sabal.in/contact</li>
                <li>By phone number: 8936855589</li>
                <li>By Address: Govind Nagar, Ward no. 3, Near Galaxy Convent School, Takiya, Sasaram, Rohtas, BIHAR, 821113</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
