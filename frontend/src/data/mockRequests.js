// frontend/src/data/mockRequests.js

// The structure now mirrors the data coming from our backend API.
export const mockBloodRequests = [
  {
    _id: 'mock_1', // Using string IDs to be consistent with MongoDB
    bloodGroup: 'B+',
    user: {
      fullName: 'Sarah Khan',
      department: 'CSE',
      yearPosition: '3rd Year',
    },
    quantity: 1,
    hospital: 'AUST Medical Center',
    message: 'Emergency surgery needed for my father. Any help would be greatly appreciated.',
    // We'll leave out timestamps (createdAt) for mocks to differentiate them.
  },
  {
    _id: 'mock_2',
    bloodGroup: 'O-',
    user: {
      fullName: 'Mohammad Ali',
      department: 'EEE',
      yearPosition: '2nd Year',
    },
    quantity: 3,
    hospital: 'Square Hospital',
    message: 'Thalassemia patient needs regular transfusion. Please help if eligible.',
  },
  {
    _id: 'mock_3',
    bloodGroup: 'A+',
    user: {
      fullName: 'Fatima Ahmed',
      department: 'BBA',
      yearPosition: '4th Year',
    },
    quantity: 1,
    hospital: 'Dhaka Medical College',
    message: 'Scheduled surgery next week. Thank you for considering.',
  },
];