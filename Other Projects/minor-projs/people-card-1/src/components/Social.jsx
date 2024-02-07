import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Social(props) {
  const { insta, mail, linkedin, whatsapp } = props;

  return (
    <div>
      <p className='text-[30px]'>
        <a href={mail}>
          <FiMail />
        </a>
      </p>
      <p className='text-[30px]'>
        <a href={whatsapp}>
          <FaWhatsapp />
        </a>
      </p>
      <p className='text-[30px]'>
        <a href={linkedin}>
          <FaLinkedinIn />
        </a>
      </p>
      <p className='text-[30px]'>
        <a href={insta}>
          <FaInstagram />
        </a>
      </p>
    </div>
  );
}
