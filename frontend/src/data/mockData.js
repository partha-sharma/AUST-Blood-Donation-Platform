// This file contains fake data that looks exactly like our future API will send.

export const mockEligibilityData = {
  isEligible: true,
  lastDonationDate: "2024-06-15T00:00:00.000Z",
};

export const mockRequestMailsData = [
  {
    _id: "req1", bloodGroup: "B+", bagsNeeded: 3, isRepost: false,
    postedBy: { name: "Mohammad Ali", department: "EEE", year: "2nd Year" },
    location: "Square Hospital",
    description: "Thalassemia patient needs regular transfusion."
  },
  {
    _id: "req2", bloodGroup: "B+", bagsNeeded: 1, isRepost: true,
    postedBy: { name: "Fatima Ahmed", department: "BBA", year: "4th Year" },
    location: "Dhaka Medical College",
    description: "Scheduled surgery next week."
  }
];

export const mockAcceptedMailsData = [
  {
    _id: "offer1",
    request: {
      bloodGroup: "B+", bagsAccepted: 1,
      postedBy: { name: "Sarah Khan", email: "sarah.khan@aust.edu", phone: "+8801711223344" },
      location: "AUST Medical Center"
    }
  }
];