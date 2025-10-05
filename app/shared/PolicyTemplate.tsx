import { TPolicyTemplateProps } from "../interface/policy";

const PolicyTemplate: React.FC<TPolicyTemplateProps> = ({policy}) => {
    // console.log(policy.title);
    return (
        <div className="">
            <div className="bg-gradient-to-l -z-10 to-hard from-normal text-center py-10 md:py-14 relative">
                <h2 className="text-2xl md:text-3xl lg:text-3xl text-white font-bold">{policy?.title}</h2>
                <p className="text-sm md:text-[15px]">{policy?.description.slice(0, 100)}</p>
                <p className="text-sm md:text-[15px]">{policy?.description.slice(100, policy.description.length)}</p>
            </div>
            <div className="flex justify-center">
                <div className="md:w-[80%] w-[92%] -mt-7 z-10 bg-normal rounded-xl p-5 space-y-3 md:space-y-5">
                    <h3 className="font-semibold text-lg">{policy?.policyName}</h3>
                    <p className="text-[15px]">Effective Date: {policy?.effectiveDate}</p>
                    <p className="text-[15px]">{policy?.text.slice(0, 550)}</p>
                    <p className="text-[15px]">{policy?.text.slice(550, 1000)}</p>
                    <p className="text-[15px]">{policy?.text.slice(1000, 1500)}</p>
                    <p className="text-[15px]">{policy?.text.slice(1500, policy?.text.length)}</p>
                </div>
            </div>
        </div>
    );
};

export default PolicyTemplate;