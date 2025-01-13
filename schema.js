const { buildSchema } = require("graphql");
const { v4: uuidv4 } = require("uuid");
const data = require("./data");

const schema = buildSchema(`
  type Query {
    company: Company
    department(name: String!): Department
    filterByRole(role: String!): [Person]
  }

  type Mutation {
    addPerson(departmentId: String!, groupId: String!, name: String!, role: String!, age: Int!, email: String!, phone: String!): Person
  }

  type Company {
    departments: [Department]
  }

  type Department {
    id: String
    name: String
    groups: [Group]
  }

  type Group {
    id: String
    name: String
    people: [Person]
  }

  type Person {
    id: String
    name: String
    role: String
    age: Int
    email: String
    phone: String
  }
`);

const root = {
  company: () => data.company,
  department: ({ name }) =>
    data.company.departments.find((dept) => dept.name === name),
  filterByRole: ({ role }) => {
    const people = [];
    data.company.departments.forEach((department) => {
      department.groups.forEach((group) => {
        group.people
          .filter((person) => person.role === role)
          .forEach((matchedPerson) => people.push(matchedPerson));
      });
    });
    return people;
  },
  addPerson: ({ departmentId, groupId, name, role, age, email, phone }) => {
    const dept = data.company.departments.find((d) => d.id === departmentId);
    if (!dept) throw new Error("Department not found");

    const grp = dept.groups.find((g) => g.id === groupId);
    if (!grp) throw new Error("Group not found");

    const newPerson = {
      id: uuidv4(),
      name,
      role,
      age,
      email,
      phone
    };
    grp.people.push(newPerson);
    return newPerson;
  }
};

module.exports = { schema, root };
