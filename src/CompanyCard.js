import React from 'react';
import {Link} from 'react-router-dom';
import './CompanyCard.css'

/** CompanyCard component for Jobly app
 * Renders a card displaying the company name, logo, and description
 * Card links to /companies/:handle route which render CompanyDetail component
 */

const CompanyCard = ({handle, name, logoUrl, description}) => {

  return (
    <Link to={`/companies/${handle}`}>
      <div className="CompanyCard">
        <div>
          <h1 className="CompanyCard-name">{name}</h1>
          {logoUrl ? <img className="CompanyCard-img" src={logoUrl} alt={name} /> : null}
        </div>
        <p className="CompanyCard-description">{description}</p>
      </div>
    </Link>
  )
}

export default CompanyCard;