const { v4: uuidv4 } = require("uuid");

const data = {
  company: {
    departments: [
      {
        id: uuidv4(),
        name: "HR",
        groups: [
          {
            id: uuidv4(),
            name: "Recruitment",
            people: [
              {
                id: uuidv4(),
                name: "Alice",
                role: "Recruiter",
                age: 30,
                email: "alice@example.com",
                phone: "123-456-7890"
              },
              {
                id: uuidv4(),
                name: "Bob",
                role: "Coordinator",
                age: 28,
                email: "bob@example.com",
                phone: "987-654-3210"
              }
            ]
          }
        ]
      },
      {
        id: uuidv4(),
        name: "IT",
        groups: [
          {
            id: uuidv4(),
            name: "Development",
            people: [
              {
                id: uuidv4(),
                name: "Charlie",
                role: "Developer",
                age: 35,
                email: "charlie@example.com",
                phone: "456-789-0123"
              },
              {
                id: uuidv4(),
                name: "Dana",
                role: "Tester",
                age: 32,
                email: "dana@example.com",
                phone: "654-321-0987"
              }
            ]
          }
        ]
      }
    ]
  }
};

module.exports = data;
