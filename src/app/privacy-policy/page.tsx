import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Your privacy is important to us.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-4xl">
            <CardHeader className="items-center text-center">
              <ShieldCheck className="h-12 w-12 text-primary" />
              <CardTitle className="text-2xl font-headline pt-4">Our Commitment to Your Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-muted-foreground p-6 md:p-8 space-y-4">
               <p>This privacy policy sets out how SABAL uses and protects any information that you give when you use this website. SABAL is committed to ensuring that your privacy is protected.</p>
              
              <h3 className="font-semibold text-foreground">1. Information We Collect</h3>
              <p>We may collect the following information: name, contact information including email address, demographic information such as postcode, and other information relevant to volunteer registrations or donations.</p>

              <h3 className="font-semibold text-foreground">2. How We Use Information</h3>
              <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons: internal record keeping, to improve our programs and services, and to send periodic emails about our work or other information which we think you may find interesting.</p>

              <h3 className="font-semibold text-foreground">3. Security</h3>
              <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
              
              <h3 className="font-semibold text-foreground">4. Controlling Your Personal Information</h3>
              <p>We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. You may request details of personal information which we hold about you under the Data Protection Act 1998.</p>

              <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible. We will promptly correct any information found to be incorrect.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
