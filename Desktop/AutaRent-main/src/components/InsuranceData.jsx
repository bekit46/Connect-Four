// Bu dosya sigorta seçenekleri verilerini içerir
// Hem PricingCards hem de SummarySection bileşenlerinde kullanılabilir

export const insuranceOptions = [
  {
    id: 'basic',
    name: 'Basic Insurance',
    price: 40,
    description: 'Basic Insurance for safest option',
    features: [
      'Covers minor damages up to $1,000.',
      '24/7 customer support.',
      'Basic roadside assistance.',
      'Limited theft protection.'
    ],
    popular: false
  },
  {
    id: 'standard',
    name: 'Standard Insurance',
    price: 50,
    description: 'Standart Insurance for optimum safety.',
    features: [
      'Includes all Basic Insurance features.',
      'Covers damages up to $2,000.',
      'Comprehensive roadside assistance.',
      'Partial coverage for stolen items.',
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium Insurance',
    price: 60,
    description: 'Premium Insurance for safest option.',
    features: [
      'Includes all Standard & Basic Insurance.',
      'Full coverage for accidents and damages.',
      'Unlimited roadside assistance.',
      'Full theft protection for valuables.',
    ],
    popular: false
  }
];

export const insuranceDetails = {
  basic: { name: 'Basic Insurance', price: 40 },
  standard: { name: 'Standard Insurance', price: 50 },
  premium: { name: 'Premium Insurance', price: 60 }
};
