var userCollection = {
  105523861001: "Abdul Aziz",
  105523861002: "Abdul Hakkem bin talha jabri",
  105523861003: "Abdul Qadeer",
  105523861004: "Amritho Sarkar",
  105523861005: "Animesh datta",
  105523861006: "Anugandula sai krishna",
  105523861007: "ayan ahmed ansari",
  105523861008: "biswanath bala",
  105523861009: "dhuha Fatima",
  105523861010: "Hajera nawaz",
  105523861011: "Hassan ahmed baig",
  105523861012: "Kamble vijay shankar",
  105523861013: "Khaja khan",
  105523861014: "Kishor mandal",
  105523861015: "k thirumalesh",
  105523861016: "lingala thirumal",
  105523861017: "mareboina pavan kumar",
  105523861018: "meesala david raju",
  105523861019: "mohammed abdul basith",
  105523861020: "mohammed ayaz ahmed qureshi",
  105523861021: "mohammed faizan",
  105523861022: "mohammed hussain qureshi",
  105523861023: "mohammed hussnain ali",
  105523861024: "mohammed ismail ahmed",
  105523861025: "mohammed maaz ahmed",
  105523861026: "mohammed mateen",
  105523861027: "mohammed mohiuddin",
  105523861028: "mohammed muzammil",
  105523861029: "mohammed sadiq",
  105523861030: "mohammed shoaib",
  105523861031: "mohammed siraj",
  105523861032: "mohd abdul rahman dawela",
  105523861033: "mohd mahaboob ali",
  105523861034: "mohd muzammil quraishi",
  105523861035: "mohd nabeel ahmed",
  105523861036: "Namani hrushikesh",
  105523861037: "naseer khan",
  105523861038: "niranjan kawale",
  105523861039: "pikkalkar arun",
  105523861040: "Not found",
  105523861041: "R varun",
  105523861042: "saba zareen",
  105523861043: "Sadiq mehdi ali khan",
  105523861044: "sareem mehdi khan",
  105523861045: "shaik abdus saboor",
  105523861046: "shaik amer",
  105523861047: "shaikh kaif shaikh moin",
  105523861048: "shaik shajahan",
  105523861049: "shaik suleman",
  105523861050: "shiva kumar lingala",
  105523861051: "siram thrilokya",
  105523861052: "syed adnan",
  105523861053: "syed ibrahim zabiullah",
  105523861054: "syed mohammed hussain jafri",
  105523861055: "syed mohammed mahedi reyan",
  105523861056: "syed omer",
  105523861057: "syed ravish ali",
  105523861058: "syed yadullah",
  105523861059: "ubaid ur rahman",
  105523861060: "wajeeda zainub",


};

// predefined data

// paper code

const paper_id01 = 103;
const paper_id02 = 107;
const paper_id03 = 102;
const paper_id04 = 106;
const paper_id05 = 108;
// targeting paper code elements
let paperCode01 = document.getElementById("paper_id01");
let paperCode02 = document.getElementById("paper_id02");
let paperCode03 = document.getElementById("paper_id03");
let paperCode04 = document.getElementById("paper_id04");
let paperCode05 = document.getElementById("paper_id05");

// subject names

const Subject01 = "Effective Communication";
const Subject02 = "Mathematical Foundations of Computer Science";
const Subject03 = "Effective Communication";
const Subject04 = "Programming in C";
const Subject05 = "Introduction to Web Technology";
// targeting subjects by id
let subjName01 = document.getElementById("Subject01");
let subjName02 = document.getElementById("Subject02");
let subjName03 = document.getElementById("Subject03");
let subjName04 = document.getElementById("Subject04");
let subjName05 = document.getElementById("Subject05");

// credits data
let gradeData = ["O", "A+", "A", "B"];
let creditsData = [3, 4, 5];

let credits01 = document.getElementById("creadits01");
let credits02 = document.getElementById("creadits02");
let credits03 = document.getElementById("creadits03");
let credits04 = document.getElementById("creadits04");
let credits05 = document.getElementById("creadits05");

let grade1 = document.getElementById("grade1");
let grade2 = document.getElementById("grade2");
let grade3 = document.getElementById("grade3");
let grade4 = document.getElementById("grade4");
let grade5 = document.getElementById("grade5");

function creditsRandom(creditReturn) {
  if (!creditReturn || creditReturn.length === 0) {
    console.error("List is undefined or empty.");
    return null;
  }

  const randomIndex = Math.floor(Math.random() * creditReturn.length);
  return creditReturn[randomIndex];
}
const creditsSupport = creditsRandom(creditsData);
const gradeSupport = creditsRandom(gradeData);

// gpa section
const gpaList = [
  8.0, 8.1, 8.2, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 9.0, 9.1, 9.2, 9.3, 9.4, 9.5,
  9.6, 9.7, 9.8, 9.9, 10.0,
];
const gpaValue = document.getElementById("gpa");

// getting data through html
const course_details = "BCA(CBCS)";
const medium_details = "ENGLISH";
function inputTag() {
  const gender_male = "MALE";
  const gender_Female = "Female";
  const gender = document.getElementById("gender");
  const nameOutput = document.getElementById("NameOutput");
  const searchInput = document.getElementById("inputHall");
  const searchInputValue = searchInput.value;
  const HallTicketNumber = searchInputValue;
  const getData = userCollection[HallTicketNumber];
  const getDataFinal = getData.toUpperCase();

  // course

  const course = document.getElementById("course");
  course.textContent = course_details;

  //   GENDER

  nameOutput.textContent = getDataFinal;
  gender.textContent = gender_male;

  //   printing hallticket number

  const hallTicketNo = document.getElementById("hallTicket");
  hallTicketNo.textContent = HallTicketNumber;

  //   medium

  const medium = document.getElementById("medium");
  medium.textContent = medium_details;

  // subjects names
  subjName01.innerHTML = Subject01.toUpperCase();
  subjName02.innerHTML = Subject02.toUpperCase();
  subjName03.innerHTML = Subject03.toUpperCase();
  subjName04.innerHTML = Subject04.toUpperCase();
  subjName05.innerHTML = Subject05.toUpperCase();

  // paper code
  paperCode01.textContent = paper_id01;
  paperCode02.textContent = paper_id02;
  paperCode03.textContent = paper_id03;
  paperCode04.textContent = paper_id04;
  paperCode05.textContent = paper_id05;

  // credits data rendering

  credits01.textContent = creditsRandom(creditsData);
  credits02.textContent = creditsRandom(creditsData);
  credits03.textContent = creditsRandom(creditsData);
  credits04.textContent = creditsRandom(creditsData);
  credits05.textContent = creditsRandom(creditsData);

  // grade data rendering

  grade1.textContent = creditsRandom(gradeData);
  grade2.textContent = creditsRandom(gradeData);
  grade3.textContent = creditsRandom(gradeData);
  grade4.textContent = creditsRandom(gradeData);
  grade5.textContent = creditsRandom(gradeData);

  // gpa value

  gpaValue.textContent = "PASSED- " + creditsRandom(gpaList);
}