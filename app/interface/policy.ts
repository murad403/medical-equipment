export type TPolicyTemplate = {
    title: string;
    description: string;
    policyName: string;
    effectiveDate: string;
    text: string;
}

export type TPolicyTemplateProps = {
    policy: TPolicyTemplate;
}