import React from 'react';
import './CompanyCard.css'

const CompanyCard = ({company}) => {
  return (
    <div className="CompanyCard">
      <div>
        <h1 className="CompanyCard-name">{company.name}</h1>
        <img className="CompanyCard-img" src={company.logoUrl} />
      </div>
      <div className="CompanyCard-description">{company.description}</div>
    </div>
  )
}

export default CompanyCard;