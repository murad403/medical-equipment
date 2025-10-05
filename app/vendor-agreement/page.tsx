import { TPolicyTemplate } from '../interface/policy';
import PolicyTemplate from '../shared/PolicyTemplate';

const page = () => {
    const privacyPolicy: TPolicyTemplate = {
        title: "Vendor Agreement",
        description: "Have questions or need assistance? We're here to help. Reach out to us anytime — whether it's about product inquiries, support, or partnership opportunities.",
        policyName: "Vendor Agreement",
        effectiveDate: "23April, 2025",
        text: `This Vendor Agreement outlines the terms between [Your Website Name] ("we", "our", "platform") and you ("vendor", "seller") regarding the use of our marketplace to list and sell medical equipment. By registering as a vendor, you agree to provide accurate business and contact information. You are fully responsible for the legality, quality, condition, and authenticity of the products you upload. All listings must comply with local laws and our platform’s policies. False or misleading listings, unsafe products, or unethical selling practices are strictly prohibited. Vendors agree to pay a commission fee of 10% on each completed sale, which will be automatically deducted. Payouts will be processed according to our withdrawal policy. Vendors must fulfill orders on time and provide necessary support to buyers if needed. We reserve the right to review and remove any listings or suspend vendor accounts that violate this agreement or involve suspicious activity. We are not liable for losses due to vendor negligence or unapproved product listings. This agreement may be updated at any time. Continued use of the platform means you accept the latest version of the terms. For any disputes, questions, or support, contact us at [your@email.com] or [your phone number].`
    }
    return (
        <div>
            <PolicyTemplate policy={privacyPolicy}></PolicyTemplate>
        </div>
    );
};

export default page;