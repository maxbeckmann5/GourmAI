import React from 'react';
import image2 from "../images/istockphoto-1446043855-2048x2048.jpg"
import image3 from "../images/happy-1836445_960_720.jpg"

function Testimonials() {
  const testimonials = [
    {
      name: "Emily Johnson",
      text: "I found a fantastic recipe with just a few ingredients!",
      image: image2,
    },
    {
      name: "Michael Smith",
      text: "This service transformed my cooking experience completely!",
      image: image3,
    },
  ];

  return (
    <section className="testimonials">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <p>"{testimonial.text}"</p>
          <h4>{testimonial.name}</h4>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;
