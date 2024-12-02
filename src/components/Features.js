import React from 'react';
import { FaRegSmile, FaSearch, FaLeaf } from 'react-icons/fa';

function Features() {
  const features = [
    { icon: <FaRegSmile />, title: 'Personalized Suggestions', description: 'Get recipe suggestions based on your ingredients.' },
    { icon: <FaSearch />, title: 'Search Filters', description: 'Easily filter recipes by dietary preferences.' },
    { icon: <FaLeaf />, title: 'Healthy Choices', description: 'Choose healthier recipes tailored to your needs.' },
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-box">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
