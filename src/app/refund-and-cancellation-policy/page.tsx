import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';

export default function RefundCancellationPolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Refund & Cancellation Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Details regarding refunds and cancellations for donations.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-4xl">
            <CardHeader className="items-center text-center">
              <RotateCcw className="h-12 w-12 text-primary" />
              <CardTitle className="text-2xl font-headline pt-4">Donation Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-muted-foreground p-6 md:p-8 space-y-4">
              
              <h3 className="font-semibold text-foreground">1. General Policy</h3>
              <p>SABAL is grateful for all donations received in support of our social development work. As a non-profit organization, we rely on the generosity of our supporters. All donations are considered final and non-refundable.</p>

              <h3 className="font-semibold text-foreground">2. Cancellation of Donations</h3>
              <p>Once a donation is made, it cannot be canceled. The transaction is considered complete upon successful processing.</p>

              <h3 className="font-semibold text-foreground">3. Errors in Donation Amount</h3>
              <p>Should you make an error in your donation amount, please contact us within 24 hours of the transaction. You can reach us at <a href="mailto:sabalngo21@gmail.com" className="text-primary hover:underline">sabalngo21@gmail.com</a>. We will review the case and may be able to assist if the funds have not yet been allocated to a specific project.</p>
              
              <h3 className="font-semibold text-foreground">4. Tax Receipts</h3>
              <p>For all donations made, SABAL will provide a receipt for tax purposes as applicable under Indian law. Please ensure that you provide accurate contact and personal information to receive your receipt.</p>
              
              <p>We appreciate your understanding and your commitment to our cause. Your support helps us bring ability and liberty to vulnerable communities.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
