const campaignsData = [
    {
      "id": 1,
      "code": "ROADTRIP25",
      "discount": 25,
      "discountType": "percentage",
      "hint": "Epic roads await...",
      "description": "Plan a 3+ day adventure with 25% off! Discover Turkey."
    },
    {
      "id": 2,
      "code": "WEEKEND15",
      "discount": 15,
      "discountType": "percentage",
      "hint": "Quick escapes...",
      "description": "15% off weekend rentals. Explore freely!"
    },
    {
      "id": 3,
      "code": "FAMILY20",
      "discount": 20,
      "discountType": "percentage",
      "hint": "Family journeys...",
      "description": "20% off SUVs & minivans. Comfort for all!",
      "applicableCarType": ["suv", "minivan"]
    },
    {
      "id": 4,
      "code": "TOGG30",
      "discount": 30,
      "discountType": "percentage",
      "hint": "Turkey’s pride in red...",
      "description": "30% off with TOGG’s passion! Celebrate our national gem in style.",
      "applicableBrand": "togg"
    },
    {
      "id": 5,
      "code": "GREEN10",
      "discount": 10,
      "discountType": "percentage",
      "hint": "Green travels...",
      "description": "10% off hybrids & electrics. Go eco!",
      "applicableFuel": ["electric", "hybrid"]
    },
    {
      "id": 6,
      "code": "BLUE40",
      "discount": 40,
      "discountType": "percentage",
      "hint": "Stunning blue vibes...",
      "description": "40% OFF on your choice of stunning blue cars!",
      "applicableColor": "blue"
    }
  ];
  
  export default campaignsData;