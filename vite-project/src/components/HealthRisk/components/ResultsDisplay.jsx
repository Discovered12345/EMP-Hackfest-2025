const ResultsDisplay = ({ result, onReset }) => {
  return (
    <div className="results-container">
      <h2>Your Risk Assessment</h2>
      <div className={`risk-score ${result.risk.toLowerCase()}`}>
        <span className="score">{result.score}</span>
        <span className="risk-level">{result.risk} Risk</span>
      </div>
      
      <div className="recommendations">
        <h3>Recommendations</h3>
        <ul>
          {result.recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>

      <button 
        onClick={onReset} 
        className="reset-button"
      >
        Take Assessment Again
      </button>
    </div>
  );
};

export default ResultsDisplay; 