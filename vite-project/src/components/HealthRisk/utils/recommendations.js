export const generateRecommendations = (score, answers) => {
  const recommendations = [];

  // Add location-based recommendations
  if (answers.ipLocation) {
    if (answers.ipLocation.isUrban) {
      recommendations.push(
        'Your urban location may expose you to higher pollution levels'
      );
    }

    // Add country-specific recommendations
    if (answers.ipLocation.country) {
      switch (answers.ipLocation.country) {
        case 'China':
        case 'India':
          recommendations.push(
            'Your region often experiences high pollution levels. Consider using air quality tracking apps'
          );
          break;
        case 'United States':
          recommendations.push(
            'Check the EPA\'s AirNow website for local air quality updates'
          );
          break;
        default:
          recommendations.push(
            'Monitor local air quality reports regularly'
          );
      }
    }
  }

  // Add risk level based recommendations
  if (score >= 65) {
    recommendations.push(
      'Consider limiting outdoor activities on high pollution days',
      'Wear N95 masks when air quality is poor',
      'Install air purifiers in your home',
      'Monitor air quality daily'
    );

    if (answers.activity === 'sedentary') {
      recommendations.push('Consider indoor exercise to improve respiratory health');
    }
  } else if (score >= 35) {
    recommendations.push(
      'Stay informed about air quality in your area',
      'Consider reducing outdoor activities when air quality is poor',
      'Keep windows closed on high pollution days'
    );

    if (answers.activity !== 'veryActive') {
      recommendations.push('Regular exercise can help improve your respiratory health');
    }
  } else {
    recommendations.push(
      'Maintain awareness of air quality',
      'Continue your healthy activity level',
      'Stay active while monitoring air quality alerts'
    );
  }

  // Add condition-specific recommendations
  if (answers.preExisting.includes('Asthma')) {
    recommendations.push('Keep rescue inhaler readily available');
  }
  if (answers.preExisting.includes('COPD') || answers.preExisting.includes('Lung Disease')) {
    recommendations.push('Consult with your healthcare provider about an air quality action plan');
  }

  return recommendations;
}; 