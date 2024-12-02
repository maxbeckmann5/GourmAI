function FAQ() {
  const faqs = [
    { question: "How does it work?", answer: "Enter your ingredients, and our generator creates recipes tailored to you." },
    { question: "Is it free to use?", answer: "Yes, it's completely free!" },
    { question: "Can I save recipes?", answer: "Currently, we don't have this feature but are working on it." },
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-item">
        <h4>How does it work?</h4>
        <p>Enter your ingredients, and our generator creates recipes tailored to you.</p>
      </div>
      <div className="faq-item">
        <h4>Is it free to use?</h4>
        <p>Yes, it's completely free!</p>
      </div>
      <div className="faq-item">
        <h4>Can I save recipes?</h4>
        <p>Currently, we don't have this feature but are working on it.</p>
      </div>
    </section>

  );
}

export default FAQ;
