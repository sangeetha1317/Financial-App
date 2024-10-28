export const transactions = [
  { 
      id: '1', 
      name: 'Chocolate', 
      amount: 30, 
      date: '13th Jul 2024', 
      category: 'Food', 
      paymentMethod: 'Credit Card', 
      description: 'Dark chocolate bar',
      card: { 
          cardType: 'Visa', 
          cardNumber: '**** **** **** 1234', 
          expiryDate: '12/25' 
      }
  },
  { 
      id: '2', 
      name: 'Gas', 
      amount: 90, 
      date: '2nd Aug 2024', 
      category: 'Transportation', 
      paymentMethod: 'Debit Card', 
      description: 'Filled up the tank',
      card: { 
          cardType: 'MasterCard', 
          cardNumber: '**** **** **** 5678', 
          expiryDate: '11/24' 
      }
  },
  { 
      id: '3', 
      name: 'Electricity', 
      amount: 800, 
      date: '14th Oct 2024', 
      category: 'Utilities', 
      paymentMethod: 'Bank Transfer', 
      description: 'Monthly electricity bill',
      card: null
  },
  { 
      id: '4', 
      name: 'Car Insurance', 
      amount: 90, 
      date: '16th Nov 2024', 
      category: 'Others', 
      paymentMethod: 'Credit Card', 
      description: 'Monthly insurance payment',
      card: { 
          cardType: 'Visa', 
          cardNumber: '**** **** **** 4321', 
          expiryDate: '10/26' 
      }
  },
  { 
      id: '5', 
      name: 'Groceries', 
      amount: 150, 
      date: '1st Sep 2024', 
      category: 'Food', 
      paymentMethod: 'Debit Card', 
      description: 'Weekly grocery shopping',
      card: { 
          cardType: 'Visa', 
          cardNumber: '**** **** **** 8765', 
          expiryDate: '03/27' 
      }
  },
  { 
      id: '6', 
      name: 'Rent', 
      amount: 1200, 
      date: '1st Oct 2024', 
      category: 'Utilities', 
      paymentMethod: 'Bank Transfer', 
      description: 'Monthly apartment rent',
      card: null
  },
  { 
      id: '7', 
      name: 'Internet', 
      amount: 60, 
      date: '5th Oct 2024', 
      category: 'Utilities', 
      paymentMethod: 'Credit Card', 
      description: 'Monthly internet bill',
      card: { 
          cardType: 'MasterCard', 
          cardNumber: '**** **** **** 1357', 
          expiryDate: '09/25' 
      }
  },
  { 
      id: '8', 
      name: 'Gym', 
      amount: 50, 
      date: '15th Sep 2024', 
      category: 'Others', 
      paymentMethod: 'Credit Card', 
      description: 'Monthly gym fee',
      card: { 
          cardType: 'Visa', 
          cardNumber: '**** **** **** 2468', 
          expiryDate: '08/26' 
      }
  },
  { 
      id: '9', 
      name: 'Dining Out', 
      amount: 70, 
      date: '20th Sep 2024', 
      category: 'Food', 
      paymentMethod: 'Cash', 
      description: 'Dinner with friends',
      card: null 
  },
  { 
      id: '10', 
      name: 'Shopping', 
      amount: 200, 
      date: '10th Aug 2024', 
      category: 'Clothing', 
      paymentMethod: 'Debit Card', 
      description: 'New clothes for the season',
      card: { 
          cardType: 'Visa', 
          cardNumber: '**** **** **** 3579', 
          expiryDate: '05/25' 
      }
  },
  { 
      id: '11', 
      name: 'Travel', 
      amount: 500, 
      date: '1st May 2024', 
      category: 'Others', 
      paymentMethod: 'Credit Card', 
      description: 'Flight tickets to vacation destination',
      card: { 
          cardType: 'MasterCard', 
          cardNumber: '**** **** **** 8642', 
          expiryDate: '01/27' 
      }
  },
  { 
      id: '12', 
      name: 'Pet Care', 
      amount: 80, 
      date: '3rd Apr 2024', 
      category: 'Others', 
      paymentMethod: 'Credit Card', 
      description: 'Vet visit and supplies',
      card: { 
        cardType: 'MasterCard', 
        cardNumber: '**** **** **** 8642', 
        expiryDate: '01/27' 
    }
  },
  { 
      id: '13', 
      name: 'Medical', 
      amount: 150, 
      date: '7th May 2024', 
      category: 'Health', 
      paymentMethod: 'Insurance', 
      description: 'Doctor’s appointment',
      card: null 
  },
  { 
      id: '14', 
      name: 'Fuel', 
      amount: 110, 
      date: '10th Aug 2024', 
      category: 'Transportation', 
      paymentMethod: 'Debit Card', 
      description: 'Fuel for the car',
      card: { 
          cardType: 'Visa', 
          cardNumber: '**** **** **** 1111', 
          expiryDate: '06/25' 
      }
  },
  { 
      id: '15', 
      name: 'Subscription', 
      amount: 25, 
      date: '20th Jul 2024', 
      category: 'Others', 
      paymentMethod: 'Credit Card', 
      description: 'Monthly streaming service subscription',
      card: { 
          cardType: 'MasterCard', 
          cardNumber: '**** **** **** 2222', 
          expiryDate: '04/26' 
      }
  },
  { 
      id: '16', 
      name: 'House Supplies', 
      amount: 40, 
      date: '12th Jun 2024', 
      category: 'Utilities', 
      paymentMethod: 'Cash', 
      description: 'Cleaning supplies and toiletries',
      card: null
  },
  { 
      id: '17', 
      name: 'Entertainment', 
      amount: 100, 
      date: '15th Mar 2024', 
      category: 'Others', 
      paymentMethod: 'Debit Card', 
      description: 'Movie tickets',
      card: { 
          cardType: 'Visa', 
          cardNumber: '**** **** **** 3333', 
          expiryDate: '02/27' 
      }
  },
  { 
      id: '18', 
      name: 'Clothing', 
      amount: 120, 
      date: '12th Nov 2024', 
      category: 'Clothing', 
      paymentMethod: 'Credit Card', 
      description: 'New winter jacket',
      card: { 
          cardType: 'MasterCard', 
          cardNumber: '**** **** **** 4444', 
          expiryDate: '11/25' 
      }
  },
  { 
      id: '19', 
      name: 'Gifts', 
      amount: 75, 
      date: '25th May 2024', 
      category: 'Others', 
      paymentMethod: 'Cash', 
      description: 'Birthday gift for a friend',
      card: null 
  },
  { 
      id: '20', 
      name: 'Home Repairs', 
      amount: 300, 
      date: '28th Feb 2024', 
      category: 'Utilities', 
      paymentMethod: 'Bank Transfer', 
      description: 'Fixing the leaking roof',
      card: null 
  },
];
