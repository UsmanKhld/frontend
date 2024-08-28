export const GPA = [
    { filter: "4.0" },
    { filter: "3.5" },
    { filter: "3.0" },
    { filter: "2.5" },
    { filter: "2.0" },
  ];

  export const SAT = [
    { filter: "1600" },
    { filter: "1500" },
    { filter: "1400" },
    { filter: "1300" },
    { filter: "1200" },
    { filter: "1100" },
    { filter: "1000" },
    { filter: "900" },
    
  ];

  export const ACT = [
    { filter: "34" },
    { filter: "30" },
    { filter: "26" },
    { filter: "22" },
    { filter: "18" },
    { filter: "18" },
  ];

  export const Race = [
    { filter: "White" },
    { filter: "African American" },
    { filter: "American Indian" },
    { filter: "Asian" },
    { filter: "Native Hawaiian" },
    { filter: "Pacific Islander" },
  ];

  export const Major = [
    { filter: "Engineering" },
    { filter: "Computer Science" },
    { filter: "Business" },
    { filter: "Psychology" },
    { filter: "Pre-med" },
    { filter: "Biology" },
    { filter: "Education" },
    { filter: "Math" },
    { filter: "Accounting" },
  ];

  const stateAbbreviations = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL",
    "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
    "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
    "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];
  
  export const State = stateAbbreviations.map(abbreviation => ({ filter: abbreviation }));

  export const Age = [
    { filter: "> 65" },
    { filter: "45-65" },
    { filter: "35-45" },
    { filter: "25-35" },
    { filter: "22-25" },
    { filter: "20-22" },
    { filter: "18-20" },
    { filter: "< 18" },
  ];

