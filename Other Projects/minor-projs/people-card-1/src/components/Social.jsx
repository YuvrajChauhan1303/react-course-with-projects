import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Social(props) {
  const { insta, mail, linkedin, whatsapp } = props;

  return (
    <div className='flex gap-2'>
      <p className='text-[20px]'>
        <a href={mail}>
          <FiMail />
        </a>
      </p>
      <p className='text-[20px]'>
        <a href={whatsapp}>
          <FaWhatsapp />
        </a>
      </p>
      <p className='text-[20px]'>
        <a href={linkedin}>
          <FaLinkedinIn />
        </a>
      </p>
      <p className='text-[20px]'>
        <a href={insta}>
          <FaInstagram />
        </a>
      </p>
    </div>
  );
}
