import React, { useState } from 'react';
import { FaRobot, FaMicrophone, FaStop, FaChevronDown } from 'react-icons/fa';


function Melody() {
  const [isListening, setIsListening] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the AI assistant work?",
      answer: "Our AI uses advanced natural language processing to understand your queries about electronics and provide accurate responses."
    },
    {
      question: "What devices can I sell through this platform?",
      answer: "You can sell smartphones, laptops, tablets, gaming consoles, and other consumer electronics in good condition."
    },
    {
      question: "How is the pricing determined?",
      answer: "Our AI analyzes market trends, device condition, and specifications to suggest fair market prices."
    },
    {
      question: "Is my conversation with the AI secure?",
      answer: "Yes, all communications are encrypted and we don't store personal data without your consent."
    }
  ];

  return (
    <div className="ai-assistant-container">
      {/* Futuristic background elements */}
      <div className="circuit-bg"></div>
      <div className="holographic-line"></div>
      <div className="floating-dots"></div>
      
      <div className="ai-assistant-content">
        {/* Page Title */}
        <div className="ai-title-container">
          <h1 className="ai-title">NibbleStore Assistant</h1>
          <div className="title-divider"></div>
        </div>

        {/* AI Agent Section */}
        <div className="ai-agent-section">
          <div className="ai-icon-container">
            <FaRobot className="ai-icon" />
            <div className={`pulse-ring ${isListening ? 'listening' : ''}`}></div>
          </div>
          
          <div className="image-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="grid-item" style={{ backgroundImage: `url(https://source.unsplash.com/random/300x300/?tech,${item})` }}></div>
            ))}
          </div>
        </div>

        {/* Voice Controls */}
        <div className="voice-controls">
          <button 
            className={`voice-btn start-btn ${isListening ? 'active' : ''}`}
            onClick={() => setIsListening(true)}
          >
            <FaMicrophone /> {isListening ? 'Listening...' : 'Start Conversation'}
          </button>
          <button 
            className="voice-btn stop-btn"
            onClick={() => setIsListening(false)}
            disabled={!isListening}
          >
            <FaStop /> End Conversation
          </button>
        </div>

        {/* Frequently Asked Questions */}
        <div className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-card ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <FaChevronDown className={`faq-arrow ${activeFaq === index ? 'rotated' : ''}`} />
                </div>
                {activeFaq === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Melody;