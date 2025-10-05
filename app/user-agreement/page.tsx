import { TPolicyTemplate } from '../interface/policy';
import PolicyTemplate from '../shared/PolicyTemplate';

const page = () => {
    const privacyPolicy: TPolicyTemplate = {
        title: "User Agreement",
        description: "Have questions or need assistance? We're here to help. Reach out to us anytime — whether it's about product inquiries, support, or partnership opportunities.",
        policyName: "User Agreement",
        effectiveDate: "23April, 2025",
        text: "By creating an account and using our website, you agree to the terms of this User Agreement. Our platform connects buyers and sellers of medical equipment. As a user, you agree to use the platform responsibly and only for legal purposes. You are responsible for the information you provide, including your personal details, product listings, and transaction actions. You agree not to post any false, misleading, or harmful content. Sellers must ensure their products are genuine, safe, and allowed under applicable laws. Buyers must make purchases in good faith and not misuse or abuse the platform. We reserve the right to monitor activities, remove content, or suspend accounts if any rules are violated or if any suspicious or fraudulent activity is detected. We are not directly responsible for the products listed or sold on the site but aim to keep the platform fair and secure for all users. By continuing to use the website, you accept this agreement and any future updates we may make. If you disagree with any part of this agreement, please do not use the platform. For questions or help, feel free to contact us at [your@email.com] or call [your phone number]."
    }
    return (
        <div>
            <PolicyTemplate policy={privacyPolicy}></PolicyTemplate>
        </div>
    );
};

export default page;