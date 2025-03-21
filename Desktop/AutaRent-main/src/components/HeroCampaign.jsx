import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Campaign.css';

const campaigns = [
  { id: 1, code: "ROADTRIP25", discount: 25, hint: "Epic roads await...", description: "Plan a 3+ day adventure with 25% off!" },
  { id: 2, code: "WEEKEND15", discount: 15, hint: "Quick escapes...", description: "15% off weekend rentals." },
  { id: 3, code: "FAMILY20", discount: 20, hint: "Family journeys...", description: "20% off SUVs & minivans." },
  { id: 4, code: "TOGG30", discount: 30, hint: "Turkey’s pride in red...", description: "30% off with TOGG’s passion! Celebrate our national gem in style." },
  { id: 5, code: "GREEN10", discount: 10, hint: "Green travels...", description: "10% off hybrids & electrics." },
  { id: 6, code: "BLUE40", discount: 40, hint: "Big savings...", description: "40% off your next rental! One-time offer." }
];

const Campaign = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const navigate = useNavigate();

  const selectBox = (campaign) => {
    if (!selectedCampaign) {
      setSelectedCampaign(campaign);
    }
  };

  const handleButtonClick = () => {
    if (selectedCampaign) {
      navigate("/all-cars", { state: { campaignCode: selectedCampaign.code } });
      setSelectedCampaign(null);
    }
  };

  const visibleCampaigns = campaigns.filter(campaign => campaign.code !== "BLUE40");

  return (
    <div className="campaign-container">
      <img src="/camp.jpg" alt="background" className="background-image" />
      <div className="campaign-boxes">
        {visibleCampaigns.map((campaign, index) => (
          <div
            key={campaign.id}
            className={`campaign-box campaign-${index + 1} ${selectedCampaign?.id === campaign.id ? 'expanded' : ''} ${selectedCampaign && selectedCampaign.id !== campaign.id ? 'disabled' : ''}`}
            onClick={() => selectBox(campaign)}
          >
            <div className="campaign-hint">
              {campaign.hint}
            </div>
            {selectedCampaign?.id === campaign.id && (
              <div className="campaign-details">
                <h3>{campaign.code}</h3>
                <p>{campaign.description}</p>
                <p className="discount-text">{campaign.discount}% OFF</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedCampaign && (
        <button className="select-car-button" onClick={handleButtonClick}>
          Pick a Car to Use Your Campaign!
        </button>
      )}
    </div>
  );
};

export default Campaign;