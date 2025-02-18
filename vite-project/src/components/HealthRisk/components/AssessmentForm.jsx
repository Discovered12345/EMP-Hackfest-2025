import { preExistingConditions, locationTypes } from '../constants';

const AssessmentForm = ({ answers, setAnswers, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="risk-assessment-form">
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          value={answers.age}
          onChange={(e) => setAnswers({...answers, age: e.target.value})}
          required
          min="1"
          max="120"
        />
      </div>

      <div className="form-group">
        <label>Pre-existing Conditions (Select all that apply)</label>
        <div className="checkbox-group">
          {preExistingConditions.map(condition => (
            <label key={condition} className="checkbox-label">
              <input
                type="checkbox"
                checked={answers.preExisting.includes(condition)}
                onChange={(e) => {
                  if (e.target.checked) {
                    if (condition === 'None') {
                      setAnswers({...answers, preExisting: ['None']});
                    } else {
                      setAnswers({
                        ...answers, 
                        preExisting: [...answers.preExisting.filter(c => c !== 'None'), condition]
                      });
                    }
                  } else {
                    setAnswers({
                      ...answers,
                      preExisting: answers.preExisting.filter(c => c !== condition)
                    });
                  }
                }}
              />
              {condition}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Activity Level</label>
        <select
          value={answers.activity}
          onChange={(e) => setAnswers({...answers, activity: e.target.value})}
          required
        >
          <option value="">Select activity level</option>
          <option value="sedentary">Sedentary</option>
          <option value="moderate">Moderately Active</option>
          <option value="active">Active</option>
          <option value="veryActive">Very Active</option>
        </select>
      </div>

      <div className="form-group">
        <label>Daily Outdoor Exposure</label>
        <select
          value={answers.exposure}
          onChange={(e) => setAnswers({...answers, exposure: e.target.value})}
          required
        >
          <option value="">Select exposure level</option>
          <option value="minimal">Minimal (0-1 hours)</option>
          <option value="moderate">Moderate (2-4 hours)</option>
          <option value="high">High (4+ hours)</option>
        </select>
      </div>

      <div className="form-group">
        <label>Location Type</label>
        <select
          value={answers.location}
          onChange={(e) => setAnswers({...answers, location: e.target.value})}
          required
        >
          <option value="">Select your location type</option>
          {locationTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-button">Calculate Risk</button>
    </form>
  );
};

export default AssessmentForm; 