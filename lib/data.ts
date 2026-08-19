export const EVENT_DATE = "2026-09-22T09:00:00";
export const GOOGLE_FORM_URL = "https://forms.gle/dXK6HxxzKqLkJHmJ8";

export type EventItem = {
  num: string;
  name: string;
  desc: string;
};

export const technicalEvents: EventItem[] = [
  {
    num: "01",
    name: "Mind Wave",
    desc: "Paper presentation — pitch your biomedical research and innovation to an expert panel.",
  },
  {
    num: "02",
    name: "Alpha Build",
    desc: "Hackathon-style build event — design and prototype a working biomedical solution on the clock.",
  },
  {
    num: "03",
    name: "Hire Hunt",
    desc: "Interview-simulation event that tests technical depth and on-the-spot problem solving.",
  },
];

export const nonTechnicalEvents: EventItem[] = [
  {
    num: "04",
    name: "Twist & Think",
    desc: "A fast-paced general quiz with a biomedical twist woven through every round.",
  },
  {
    num: "05",
    name: "Echo Beats",
    desc: "Music & lyrics round that rewards quick ears and quicker recall.",
  },
  {
    num: "06",
    name: "Mystery Merge",
    desc: "Connections-style puzzle event — find the hidden thread linking the clues.",
  },
];

export const specialEvents: EventItem[] = [
  {
    num: "SP",
    name: "Fun Games",
    desc: "A room full of light, casual games running throughout the day.",
  },
  {
    num: "SP",
    name: "Medical Camp",
    desc: "Free basic health check-up camp open to all participants and visitors.",
  },
];

export type TimelineRow = {
  time: string;
  title: string;
  desc: string;
};

export const timeline: TimelineRow[] = [
  { time: "08:00 AM", title: "Registration & Welcome", desc: "Check-in, kits, and campus orientation." },
  { time: "09:00 AM", title: "Inauguration", desc: "Opening ceremony with the Convener and Chief Guests." },
  { time: "09:45 AM – 04:00 PM", title: "All Events Live", desc: "Technical, non-technical, and special events run in parallel across venues." },
  { time: "01:00 PM", title: "Lunch", desc: "Veg & non-veg lunch served on campus." },
  { time: "04:30 PM", title: "Valedictory & Prizes", desc: "Results, certificates, and closing address." },
];

export type Coordinator = {
  role: string;
  name: string;
  sub: string;
};

export const coordinators: Coordinator[] = [
  { role: "Convener", name: "Dr. T. Senthil", sub: "Professor / BME" },
  { role: "Co-Convenor", name: "Dr. J. Babitha Thangamalar", sub: "Associate Professor / BME" },
  { role: "Association Incharge", name: "Mrs. T. Saranya", sub: "AP / BME" },
  { role: "Association Incharge", name: "Mrs. T. Ajitha Ranjith", sub: "AP / BME" },
  { role: "Association Incharge", name: "Mr. Balasubramanian", sub: "AP / BME" },
  { role: "Faculty Coordinator", name: "Mr. T. Karthik", sub: "AP / BME" },
  { role: "Faculty Coordinator", name: "Mrs. A. R. Devi", sub: "AP / BME" },
  { role: "Student Coordinator", name: "M. Dinesh", sub: "IV / BME" },
  { role: "Student Coordinator", name: "S. Hari Ram Muthu", sub: "IV / BME" },
  { role: "Student Coordinator", name: "Benny Joshwa", sub: "III / BME" },
  { role: "Student Coordinator", name: "Jaheer Mohammad", sub: "III / BME" },
];
