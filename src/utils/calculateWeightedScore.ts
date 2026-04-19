type ReviewType = 'restaurant' | 'cafe' | 'album' | 'media' | 'cinema' | 'anime';

interface IndividualRating {
  overall?: number;
  taste?: number;
  ambiance?: number;
  originality?: number;
  vibe?: number;
  production?: number;
  technicality?: number;
}

export function calculateWeightedScore(type: ReviewType, rating: IndividualRating, reviewer: 'josie' | 'partner' = 'josie'): number {
  if ((type === 'media' || type === 'cinema' || type === 'anime') && rating.overall !== undefined) {
    return rating.overall;
  }
  
  if (type === 'restaurant') {
    const taste = rating.taste ?? 0;
    const ambiance = rating.ambiance ?? 0;
    const originality = rating.originality ?? 0;
    
    if (reviewer === 'josie') {
      return (taste * 0.5) + (ambiance * 0.25) + (originality * 0.25);
    } else {
      return (taste * 0.6) + (ambiance * 0.1) + (originality * 0.3);
    }
  }

  if (type === 'cafe') {
    const taste = rating.taste ?? 0;
    const ambiance = rating.ambiance ?? 0;
    const originality = rating.originality ?? 0;

    if (reviewer === 'josie') {
      return (taste * 0.3) + (ambiance * 0.5) + (originality * 0.2);
    } else {
      return (taste * 0.35) + (ambiance * 0.3) + (originality * 0.35);
    }
  }
  
  if (type === 'album') {
    const vibe = rating.vibe ?? 0;
    const production = rating.production ?? 0;
    const technicality = rating.technicality ?? 0;
    // Weights: 40% vibe, 30% production, 30% technicality
    return (vibe * 0.4) + (production * 0.3) + (technicality * 0.3);
  }

  return 0;
}

export function getCombinedAverage(
  type: ReviewType, 
  josieRating: IndividualRating, 
  partnerRating?: IndividualRating
): number {
  const josieScore = calculateWeightedScore(type, josieRating, 'josie');
  
  if (!partnerRating) {
    return josieScore;
  }
  
  const partnerScore = calculateWeightedScore(type, partnerRating, 'partner');
  return (josieScore + partnerScore) / 2;
}
