let courses = [
  {
    id: "1",
    name: "Web Development",
    instructor_id: "2",
    cost: "300",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Digital Marketting",
    instructor_id: "3",
    cost: "230",
    rating: 3.0,
  },
  {
    id: "3",
    name: "Data Analytics",
    instructor_id: "3",
    cost: "345",
    rating: 3.9,
  },
  {
    id: "4",
    name: "Cyber Security",
    instructor_id: "1",
    cost: "341",
    rating: 3.1,
  },
  {
    id: "5",
    name: "Mobile Apps",
    instructor_id: "2",
    cost: "465",
    rating: 2.1,
  },
  {
    id: "6",
    name: "Artificial Intelligence",
    instructor_id: "4",
    cost: "604",
    rating: 5.0,
  },
  {
    id: "7",
    name: "Maching Learning",
    instructor_id: "5",
    cost: "345",
    rating: 2.5,
  },
  {
    id: "8",
    name: "Dev Ops",
    instructor_id: "1",
    cost: "567",
    rating: 2.6,
  },
  {
    id: "9",
    name: "Backend Development",
    instructor_id: "6",
    rating: 3.1,
  },
];

let students = [
  {
    id: "1",
    name: "Emmanuel Smith",
    level: "100",
    courses: [
      { course_id: "1", completionLevel: "20.5" },
      { course_id: "8", completionLevel: "45.5" },
    ],
    hasDiscount: true,
  },
  {
    id: "2",
    name: "Robert Taylor",
    level: "200",
    courses: [
      { course_id: "2", completionLevel: "56.6" },
      { course_id: "3", completionLevel: " 67.1" },
      { course_id: "6", completionLevel: "77.5" },
    ],
    hasDiscount: true,
  },
  {
    id: "3",
    name: "Emly Lastone",
    level: "100",
    courses: [
      { course_id: "2", completionLevel: "45.6" },
      { course_id: "1", completionLevel: "99.7" },
    ],
    hasDiscount: true,
  },
  {
    id: "4",
    name: "Clement Sams",
    level: "300",
    courses: [
      { course_id: "9", completionLevel: "67.78" },
      {
        course_id: "5",
        completionLevel: "88.7",
      },
    ],
    hasDiscount: true,
  },
  {
    id: "5",
    name: "Lius Gracias",
    level: "100",
    courses: [{ course_id: "8", completionLevel: "77.1" }],
    hasDiscount: false,
  },
  {
    id: "6",
    name: "Jeniffer Baido",
    level: "200",
    courses: [{ course_id: "4", completionLevel: "22.4" }],
    hasDiscount: false,
  },
  {
    id: "7",
    name: "Natash Gamad",
    level: "300",
    courses: [
      { course_id: "3", completionLevel: "86.9" },
      {
        course_id: "1",
        completionLevel: "33.3",
      },
    ],
    hasDiscount: true,
  },
  {
    id: "8",
    name: "Paul Graham",
    level: "100",
    courses: [
      { course_id: "2", completionLevel: "99.3" },
      {
        course_id: "5",
        completionLevel: "77.9",
      },
    ],
    hasDiscount: false,
  },
  {
    id: "9",
    name: "Musti Madasd",
    level: "300",
    courses: [{ course_id: "9", completionLevel: "100" }],
    hasDiscount: false,
  },
  {
    id: "10",
    name: "Victor Bruce",
    level: "200",
    courses: [
      { course_id: "3", completionLevel: "88.0" },
      {
        course_id: "4",
        completionLevel: "33.2",
      },
    ],
    hasDiscount: true,
  },
  {
    id: "11",
    name: "Lilian Taylor",
    level: "200",
    courses: [{ course_id: "8", completionLevel: "44.4" }],
    hasDiscount: true,
  },
  {
    id: "12",
    name: "Smith Chef",
    level: "100",
    courses: [
      { course_id: "1", completionLevel: "12.4" },
      {
        course_id: "2",
        completionLevel: "44.1",
      },
    ],
  },
];

let instructors = [
  {
    id: "1",
    name: "Eric Taylor",
    courses: [{ course_id: "1" }, { course_id: "5" }],
  },
  {
    id: "2",
    name: "Janet Timas",
    courses: [{ course_id: "4" }, { course_id: "8" }, { course_id: "9" }],
  },
  {
    id: "3",
    name: "Graceful Dean",
    courses: [{ course_id: "3" }, { course_id: "5" }],
  },
  {
    id: "4",
    name: "Cyndi Gams",
    courses: [{ course_id: "2" }],
  },
  {
    id: "5",
    name: "Bobby James",
    courses: [{ course_id: "7" }, { course_id: "2" }],
  },
  {
    id: "6",
    name: "Rita Dubois",
    courses: [{ course_id: "9" }],
  },
];

export default { courses, students, instructors };
