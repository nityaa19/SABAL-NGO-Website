import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Terms & Conditions</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Please read our terms and conditions carefully.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-4xl">
            <CardHeader className="items-center text-center">
              <FileText className="h-12 w-12 text-primary" />
              <CardTitle className="text-2xl font-headline pt-4">Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-muted-foreground p-6 md:p-8 space-y-4">
              <p>Welcome to the SABAL website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern SABAL&apos;s relationship with you in relation to this website.</p>
              
              <h3 className="font-semibold text-foreground">1. Introduction</h3>
              <p>The term &apos;SABAL&apos; or &apos;us&apos; or &apos;we&apos; refers to the owner of the website. The term &apos;you&apos; refers to the user or viewer of our website. The use of this website is subject to the following terms of use.</p>

              <h3 className="font-semibold text-foreground">2. Use of the Website</h3>
              <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose.</p>

              <h3 className="font-semibold text-foreground">3. Donations</h3>
              <p>All donations made through our website are voluntary and non-refundable. We are grateful for your support. Please ensure you enter the correct amount you wish to donate. In case of an error, please contact us immediately.</p>
              
              <h3 className="font-semibold text-foreground">4. Intellectual Property</h3>
              <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
              
              <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
