import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

const ShowFootetLinks = ({ links, external }) => {
  return links.map((link) => (
    <li className="footer__ul__li" key={link.id}>
      {external ? (
        <>
          <BsChevronRight size={12}/>
          <a href={link.route} target="_blank">
            {link.name}
          </a>
        </>
      ) : (
        <>
          <BsChevronRight size={12}/>
          <Link
            to={
              link.hasOwnProperty('route') ? link.route : `/details/${link.id}`
            }
          >
            {link.name}
          </Link>
        </>
      )}
    </li>
  ));
};

export default ShowFootetLinks;
