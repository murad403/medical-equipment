import { TPolicyTemplate } from '../interface/policy';
import PolicyTemplate from '../shared/PolicyTemplate';

const page = () => {
    const privacyPolicy: TPolicyTemplate = {
        title: "Our Terms & Conditions",
        description: "Have questions or need assistance? We're here to help. Reach out to us anytime — whether it's about product inquiries, support, or partnership opportunities.",
        policyName: "Terms and Conditions",
        effectiveDate: "23April, 2025",
        text: "By using our platform, you agree to follow these terms and conditions. Our website allows registered users to buy and sell medical equipment. All users must provide accurate and truthful information during registration and while listing products. As a seller, you are responsible for the legality, quality, and safety of the products you upload. As a buyer, you should review product details carefully before purchasing. We reserve the right to remove listings or suspend accounts that violate our rules or involve suspicious activity. Users must not use our platform for any illegal or harmful purposes. Payments made through the site must follow our approved methods, and all transactions are subject to our fees and commission policies. We may update these terms from time to time, and continuing to use the platform means you accept any changes. If you have any questions or disagreements with these terms, please contact us before using the website."
    }
    return (
        <div>
            <PolicyTemplate policy={privacyPolicy}></PolicyTemplate>
        </div>
    );
};

export default page;