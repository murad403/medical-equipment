import banner from "../../../public/subtract.jpg";

const ContactBanner = () => {
    return (
        <div className="bg-cover bg-center h-[200px] md:h-[300px] lg:h-[370px] w-full bg-no-repeat flex items-center justify-center flex-col text-center text-title" style={{backgroundImage: `url(${banner.src})`}}>
            <h2 className='text-3xl md:text-4xl lg:text-[43px] font-bold'>Contact <span className='text-hard'>Us</span> </h2>
            <p className='md:text-[16px] text-[14px] mt-2'>Have questions or need assistance? We're here to help. Reach out to us anytime — whether it's <br /> about product inquiries, support, or partnership opportunities.</p>
        </div>
    );
};

export default ContactBanner;