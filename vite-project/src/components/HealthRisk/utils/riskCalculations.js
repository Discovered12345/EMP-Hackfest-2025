export const calculateRiskScore = (answers) => {
  let score = 0;
  // Multipliers affect the final risk score based on different factors
  let multipliers = {
    activityBenefit: 1,    // Physical activity can reduce risk
    locationRisk: 1,       // Location type affects exposure
    ageFactor: 1,          // Age affects vulnerability
    ipLocationRisk: 1      // Geographical location affects risk
  };

  // Age-based risk factors
  const age = parseInt(answers.age);
  if (age < 12) multipliers.ageFactor = 1.2;      // Children more vulnerable
  else if (age < 20) multipliers.ageFactor = 0.9;  // Teenagers more resilient
  else if (age < 40) multipliers.ageFactor = 0.8;  // Young adults most resilient
  else if (age < 60) multipliers.ageFactor = 1.0;  // Middle age baseline
  else if (age < 75) multipliers.ageFactor = 1.3;  // Seniors more vulnerable
  else multipliers.ageFactor = 1.5;                // Elderly most vulnerable

  // Activity level affects risk - more active = lower risk
  switch (answers.activity) {
    case 'veryActive': multipliers.activityBenefit = 0.7; break;  // 30% reduction
    case 'active': multipliers.activityBenefit = 0.8; break;      // 20% reduction
    case 'moderate': multipliers.activityBenefit = 0.9; break;    // 10% reduction
    case 'sedentary': multipliers.activityBenefit = 1.2; break;   // 20% increase
  }

  // Base risk calculation from health conditions
  if (answers.preExisting.includes('None')) {
    score += 20;  // Baseline risk for healthy individuals
  } else {
    // Each condition adds to base risk
    answers.preExisting.forEach(condition => {
      switch (condition) {
        case 'Asthma': score += 25; break;         // Respiratory sensitivity
        case 'COPD': score += 30; break;           // Severe respiratory condition
        case 'Heart Disease': score += 28; break;   // Cardiovascular vulnerability
        case 'Lung Disease': score += 30; break;    // Severe respiratory condition
        case 'Allergies': score += 15; break;       // Mild sensitivity
      }
    });
  }

  // Location type affects exposure risk
  switch (answers.location) {
    case 'Urban (City Center)': multipliers.locationRisk = 1.3; break;  // Higher pollution
    case 'Industrial Area': multipliers.locationRisk = 1.4; break;      // Highest risk
    case 'Suburban': multipliers.locationRisk = 1.1; break;             // Moderate risk
    case 'Coastal': multipliers.locationRisk = 0.9; break;              // Better air quality
    case 'Rural': multipliers.locationRisk = 0.8; break;                // Best air quality
    case 'High Altitude': multipliers.locationRisk = 1.1; break;        // Mixed factors
  }

  // IP Location impact
  if (answers.ipLocation) {
    if (answers.ipLocation.isUrban) {
      multipliers.ipLocationRisk *= 1.2;
    }

    const latitude = Math.abs(answers.ipLocation.latitude);
    if (latitude > 30 && latitude < 50) {
      multipliers.ipLocationRisk *= 1.1;
    }

    switch (answers.ipLocation.country) {
      case 'China':
      case 'India':
        multipliers.ipLocationRisk *= 1.3;
        break;
      case 'Canada':
      case 'New Zealand':
      case 'Iceland':
        multipliers.ipLocationRisk *= 0.8;
        break;
    }
  }

  // Daily exposure impact
  switch (answers.exposure) {
    case 'minimal': score += 10; break;
    case 'moderate': score += 20; break;
    case 'high': score += 35; break;
  }

  // Apply all risk factors to calculate final score
  score = score * multipliers.ageFactor * multipliers.activityBenefit * 
          multipliers.locationRisk * multipliers.ipLocationRisk;

  // Normalize score to 0-100 scale
  const normalizedScore = Math.min(Math.round(score / 2), 100);

  return {
    score: normalizedScore,
    risk: normalizedScore < 35 ? 'Low' : normalizedScore < 65 ? 'Moderate' : 'High'
  };
};

const calculateLocationRisk = (answers, multipliers) => {
  // Location type impact
  switch (answers.location) {
    case 'Urban (City Center)': multipliers.locationRisk = 1.3; break;
    case 'Industrial Area': multipliers.locationRisk = 1.4; break;
    case 'Suburban': multipliers.locationRisk = 1.1; break;
    case 'Coastal': multipliers.locationRisk = 0.9; break;
    case 'Rural': multipliers.locationRisk = 0.8; break;
    case 'High Altitude': multipliers.locationRisk = 1.1; break;
  }

  // IP Location impact
  if (answers.ipLocation) {
    calculateIpLocationRisk(answers.ipLocation, multipliers);
  }
};

const getRiskLevel = (score) => {
  if (score < 35) return 'Low';
  if (score < 65) return 'Moderate';
  return 'High';
}; 