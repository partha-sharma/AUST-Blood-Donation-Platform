// frontend/src/data/mockRequests.js

export const mockBloodRequests = [
  {
    id: 1,
    bloodGroup: 'B+',
    postedBy: 'Sarah Khan',
    department: 'CSE',
    year: '3rd Year',
    bagsNeeded: 1,
    bagsRemaining: 1,
    location: 'AUST Medical Center',
    details: 'Emergency surgery needed for my father. Any help would be greatly appreciated.',
    postedAgo: '366d',
    isRepost: false,
    isUrgent: false,
    responded: true, // You've already responded to this one
  },
  {
    id: 2,
    bloodGroup: 'O-',
    postedBy: 'Mohammad Ali',
    department: 'EEE',
    year: '2nd Year',
    bagsNeeded: 3,
    bagsRemaining: 3,
    location: 'Square Hospital',
    details: 'Thalassemia patient needs regular transfusion. Please help if eligible.',
    postedAgo: '366d',
    isRepost: false,
    isUrgent: false,
    responded: false,
  },
  {
    id: 3,
    bloodGroup: 'A+',
    postedBy: 'Fatima Ahmed',
    department: 'BBA',
    year: '4th Year',
    bagsNeeded: 1,
    bagsRemaining: 1,
    location: 'Dhaka Medical College',
    details: 'Scheduled surgery next week. Thank you for considering.',
    postedAgo: '368d',
    isRepost: true, // This is a repost
    isUrgent: true, // Reposts are marked urgent
    responded: false,
  },
];