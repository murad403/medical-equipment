import React from 'react';
import ContactBanner from '../components/contact/ContactBanner';
import ContactForm from '../components/contact/ContactForm';

const page = () => {
    return (
        <div className='space-y-10 md:space-y-16'>
            <ContactBanner></ContactBanner>
            <div className='px-4 md:px-14 lg:px-16'>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default page;