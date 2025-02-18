import { useState, useEffect } from 'react';
import { calculateRiskScore } from './utils/riskCalculations';
import { generateRecommendations } from './utils/recommendations';
import { useLocationData } from './hooks/useLocationData';
import AssessmentForm from './components/AssessmentForm';
import ResultsDisplay from './components/ResultsDisplay';
import LocationInfo from './components/LocationInfo';
import './healthRisk.css';

const HealthRisk = () => {
  // State to store user's answers and location data
  const [answers, setAnswers] = useState({
    age: '',
    preExisting: [],
    activity: '',
    exposure: '',
    location: '',
    ipLocation: null  // Stores geolocation data from IP
  });

  const [result, setResult] = useState(null);
  // Custom hook to fetch user's location from IP
  const { loading, locationData } = useLocationData();

  // Update answers when location data is received
  useEffect(() => {
    if (locationData) {
      setAnswers(prev => ({
        ...prev,
        ipLocation: locationData
      }));
    }
  }, [locationData]);

  // Handle form submission and calculate risk
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Calculate base risk score
      const riskAssessment = calculateRiskScore(answers);
      // Generate personalized recommendations based on score and answers
      const recommendations = generateRecommendations(riskAssessment.score, answers);
      
      setResult({
        ...riskAssessment,
        recommendations
      });
    } catch (error) {
      console.error('Error calculating risk:', error);
    }
  };

  return (
    <div className="health-risk-container">
      <h1>Sky Scanner Health Risk Assessment</h1>
      
      {/* Show loading state while fetching location data */}
      {loading ? (
        <div className="loading">Loading your location data...</div>
      ) : (
        <>
          {/* Display user's detected location */}
          <LocationInfo locationData={locationData} />
          
          {/* Toggle between form and results */}
          {!result ? (
            <AssessmentForm 
              answers={answers}
              setAnswers={setAnswers}
              onSubmit={handleSubmit}
            />
          ) : (
            <ResultsDisplay 
              result={result}
              onReset={() => setResult(null)}  // Allow retaking assessment
            />
          )}
        </>
      )}
    </div>
  );
};

export default HealthRisk; 