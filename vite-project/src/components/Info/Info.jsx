import './info.css';

const Info = () => {
  return (
    <div className="app-content">
      <div className="info-card">
        <section className="info-section">
          <h2>Why is Air Pollution Dangerous?</h2>
          <p>
            Air pollution is a serious environmental health threat that affects everyone, particularly vulnerable populations like children, elderly, and those with pre-existing health conditions. When we breathe polluted air, harmful particles and chemicals enter our respiratory system and can penetrate deep into our lungs and bloodstream.
          </p>
        </section>

        <section className="info-section">
          <h2>Health Effects</h2>
          <div className="info-grid">
            <div className="info-box">
              <h3>Immediate Effects</h3>
              <ul>
                <li>Irritation of eyes, nose, and throat</li>
                <li>Wheezing, coughing, and breathing difficulties</li>
                <li>Chest tightness and discomfort</li>
                <li>Fatigue and dizziness</li>
                <li>Worsening of asthma and allergies</li>
              </ul>
            </div>
            <div className="info-box">
              <h3>Long-term Health Risks</h3>
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
          <h2>Protecting Yourself</h2>
          <div className="info-grid">
            <div className="info-box">
              <h3>Daily Monitoring</h3>
              <ul>
                <li>Check local air quality index (AQI) daily</li>
                <li>Plan outdoor activities when air quality is better</li>
                <li>Stay informed about air quality alerts</li>
              </ul>
            </div>
            <div className="info-box">
              <h3>Indoor Protection</h3>
              <ul>
                <li>Use air purifiers with HEPA filters</li>
                <li>Keep windows closed during high pollution periods</li>
                <li>Maintain good ventilation when air quality is good</li>
                <li>Regular cleaning to reduce indoor pollutants</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>High-Risk Groups</h2>
          <div className="info-box">
            <ul>
              <li>Children: Developing lungs are more vulnerable to damage</li>
              <li>Elderly: More susceptible to respiratory problems</li>
              <li>Pregnant Women: Increased risk of complications</li>
              <li>People with Asthma: More sensitive to air pollutants</li>
              <li>Heart/Lung Disease Patients: Higher risk of symptoms</li>
            </ul>
          </div>
        </section>

        <section className="info-section">
          <h2>When to Seek Medical Help</h2>
          <div className="info-box alert-box">
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
    </div>
  );
};

export default Info; 