import React from 'react';
import './AirQualityInfo.css';

const AirQualityInfo = () => {
  return (
    <div className="air-quality-info">
      <h2>Air Pollution: Health Impacts & Protection</h2>
      
      <section className="info-section">
        <h3>Why is Air Pollution Dangerous?</h3>
        <p>
          Air pollution is a serious environmental health threat that affects everyone, 
          particularly vulnerable populations like children, elderly, and those with 
          pre-existing health conditions. When we breathe polluted air, harmful particles 
          and chemicals enter our respiratory system and can penetrate deep into our lungs 
          and bloodstream.
        </p>
      </section>

      <section className="info-section">
        <h3>Health Effects</h3>
        <div className="effects-grid">
          <div className="effect-item">
            <h4>Immediate Effects</h4>
            <ul>
              <li>Irritation of eyes, nose, and throat</li>
              <li>Wheezing, coughing, and breathing difficulties</li>
              <li>Chest tightness and discomfort</li>
              <li>Fatigue and dizziness</li>
              <li>Worsening of asthma and allergies</li>
            </ul>
          </div>
          <div className="effect-item">
            <h4>Long-term Health Risks</h4>
            <ul>
              <li>Chronic respiratory diseases</li>
              <li>Cardiovascular problems</li>
              <li>Reduced lung function</li>
              <li>Increased risk of lung cancer</li>
              <li>Potential neurological effects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h3>Protecting Yourself</h3>
        <div className="protection-methods">
          <div className="method-item">
            <h4>Daily Monitoring</h4>
            <ul>
              <li>Check local air quality index (AQI) daily</li>
              <li>Plan outdoor activities when air quality is better</li>
              <li>Stay informed about air quality alerts</li>
            </ul>
          </div>
          
          <div className="method-item">
            <h4>Indoor Protection</h4>
            <ul>
              <li>Use air purifiers with HEPA filters</li>
              <li>Keep windows closed during high pollution periods</li>
              <li>Maintain good ventilation when air quality is good</li>
              <li>Regular cleaning to reduce indoor pollutants</li>
            </ul>
          </div>
          
          <div className="method-item">
            <h4>Outdoor Protection</h4>
            <ul>
              <li>Wear appropriate masks (N95 or better) when needed</li>
              <li>Avoid exercise near high-traffic areas</li>
              <li>Reduce outdoor activities during poor air quality</li>
              <li>Stay indoors during severe pollution events</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h3>High-Risk Groups</h3>
        <div className="risk-groups">
          <ul>
            <li><strong>Children:</strong> Developing lungs are more vulnerable to damage</li>
            <li><strong>Elderly:</strong> More susceptible to respiratory problems</li>
            <li><strong>Pregnant Women:</strong> Increased risk of complications</li>
            <li><strong>People with Asthma:</strong> More sensitive to air pollutants</li>
            <li><strong>Heart/Lung Disease Patients:</strong> Higher risk of symptoms</li>
          </ul>
        </div>
      </section>

      <section className="info-section">
        <h3>When to Seek Medical Help</h3>
        <div className="warning-signs">
          <p>Contact a healthcare provider if you experience:</p>
          <ul>
            <li>Difficulty breathing or shortness of breath</li>
            <li>Persistent coughing or wheezing</li>
            <li>Unusual fatigue or dizziness</li>
            <li>Chest pain or tightness</li>
            <li>Rapid heartbeat</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AirQualityInfo; 