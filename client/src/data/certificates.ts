/**
 * Certificates / recognitions data sourced from
 * "Learn About Us From Different Perspectives" (38 items).
 * Images from the PDF are in /certificates/ (1.jpg through 38.jpg; 3, 9, 10, 12, 13 are .png).
 */

export interface Certificate {
  id: number;
  title: string;
  shortDescription: string;
  year?: string;
  image: string;
}

const certImage = (id: number) =>
  [3, 9, 10, 12, 13].includes(id) ? `/certificates/${id}.png` : `/certificates/${id}.jpg`;

export const certificates: Certificate[] = [
  {
    id: 1,
    year: "2025",
    title: "Committee Member, World Mediation Foundation & World Mediation Day Foundation",
    shortDescription: "Appointed as a Committee Member for global mediation initiatives.",
    image: certImage(1),
  },
  {
    id: 2,
    year: "2024",
    title: "Global Peace and Wellness Ambassador, House of Lords, UK Parliament",
    shortDescription: "Honoured as a Global Peace and Wellness Ambassador by the UK Parliament.",
    image: certImage(2),
  },
  {
    id: 3,
    year: "2024",
    title: "Ambassador For Global Peace and Humanity",
    shortDescription: "Honoured as an Ambassador For Global Peace and Humanity.",
    image: certImage(3),
  },
  {
    id: 4,
    title: "Himalayan Samarpan Meditation Shibir at UN Headquarters",
    shortDescription: "Meditation programme held at the United Nations Headquarters.",
    image: certImage(4),
  },
  {
    id: 5,
    year: "2017",
    title: "Gratitude & Acknowledgement by Prime Minister of Sri Lanka",
    shortDescription: "Recognition and gratitude from the Prime Minister of Sri Lanka.",
    image: certImage(5),
  },
  {
    id: 6,
    year: "2020",
    title: "Discourse on Invitation by Ministry of AYUSH, Government of India",
    shortDescription: "Invited by the Ministry of AYUSH for a discourse.",
    image: certImage(6),
  },
  {
    id: 7,
    year: "2024",
    title: "Appreciation & Recognition by Nepal Sansad (Parliament) Shibir",
    shortDescription: "Appreciation and recognition from the Parliament of Nepal.",
    image: certImage(7),
  },
  {
    id: 8,
    year: "2024",
    title: "Appreciation by Gandaki Province Assembly Shibir",
    shortDescription: "Appreciation from the Gandaki Province Assembly.",
    image: certImage(8),
  },
  {
    id: 9,
    year: "2020",
    title: "Tourism Goodwill Ambassador by Nepal Tourism Board",
    shortDescription: "Facilitated as a Tourism Goodwill Ambassador by Nepal Tourism Board.",
    image: certImage(9),
  },
  {
    id: 10,
    year: "2024",
    title: "Himalayan Samarpan Meditation Week by Governor of Colorado State",
    shortDescription: "Meditation Week announced by the Governor of Colorado State.",
    image: certImage(10),
  },
  {
    id: 11,
    year: "2024",
    title: "Himalayan Samarpan Meditation Week by Mayor of Jersey City",
    shortDescription: "Meditation Week announced by the Mayor of Jersey City (New Jersey).",
    image: certImage(11),
  },
  {
    id: 12,
    title: "Maharashtra Mantralaya",
    shortDescription: "Recognition from Maharashtra Mantralaya.",
    image: certImage(12),
  },
  {
    id: 13,
    title: "BARC",
    shortDescription: "Recognition from BARC (Bhabha Atomic Research Centre).",
    image: certImage(13),
  },
  {
    id: 14,
    title: "UN Headquarters, Vienna",
    shortDescription: "Recognition at UN Headquarters, Vienna.",
    image: certImage(14),
  },
  {
    id: 15,
    title: "PM Modiji",
    shortDescription: "Recognition from the Prime Minister of India.",
    image: certImage(15),
  },
  {
    id: 16,
    title: "Ministry of AYUSH",
    shortDescription: "Recognition from the Ministry of AYUSH, Government of India.",
    image: certImage(16),
  },
  {
    id: 17,
    title: "ICAR",
    shortDescription: "Recognition from ICAR (Indian Council of Agricultural Research).",
    image: certImage(17),
  },
  {
    id: 18,
    title: "ADA",
    shortDescription: "Recognition from ADA.",
    image: certImage(18),
  },
  {
    id: 19,
    title: "Dr Wellcon",
    shortDescription: "Recognition from Dr Wellcon.",
    image: certImage(19),
  },
  {
    id: 20,
    title: "AIIMS",
    shortDescription: "Recognition from AIIMS (All India Institute of Medical Sciences).",
    image: certImage(20),
  },
  {
    id: 21,
    title: "High Court Bar, Nagpur",
    shortDescription: "Recognition from the High Court Bar, Nagpur.",
    image: certImage(21),
  },
  {
    id: 22,
    title: "CM Gujarat",
    shortDescription: "Recognition from the Chief Minister of Gujarat.",
    image: certImage(22),
  },
  {
    id: 23,
    title: "Gujarat Legislative Assembly",
    shortDescription: "Recognition from the Gujarat Legislative Assembly.",
    image: certImage(23),
  },
  {
    id: 24,
    title: "Goa Legislative Assembly",
    shortDescription: "Recognition from the Goa Legislative Assembly.",
    image: certImage(24),
  },
  {
    id: 25,
    title: "Maharashtra Legislative Assembly",
    shortDescription: "Recognition from the Maharashtra Legislative Assembly.",
    image: certImage(25),
  },
  {
    id: 26,
    title: "Gujarat State Yog Board",
    shortDescription: "Recognition from the Gujarat State Yoga Board.",
    image: certImage(26),
  },
  {
    id: 27,
    title: "Children University",
    shortDescription: "Recognition from Children University.",
    image: certImage(27),
  },
  {
    id: 28,
    title: "Reliance",
    shortDescription: "Recognition from Reliance.",
    image: certImage(28),
  },
  {
    id: 29,
    title: "TCS",
    shortDescription: "Recognition from Tata Consultancy Services.",
    image: certImage(29),
  },
  {
    id: 30,
    title: "L&T",
    shortDescription: "Recognition from Larsen & Toubro.",
    image: certImage(30),
  },
  {
    id: 31,
    title: "DIAT",
    shortDescription: "Recognition from Defence Institute of Advanced Technology.",
    image: certImage(31),
  },
  {
    id: 32,
    title: "INS",
    shortDescription: "Recognition from Indian Naval Service.",
    image: certImage(32),
  },
  {
    id: 33,
    title: "ADA",
    shortDescription: "Recognition from ADA.",
    image: certImage(33),
  },
  {
    id: 34,
    title: "Army",
    shortDescription: "Recognition from the Indian Army.",
    image: certImage(34),
  },
  {
    id: 35,
    title: "Goa Police HQ",
    shortDescription: "Recognition from Goa Police Headquarters.",
    image: certImage(35),
  },
  {
    id: 36,
    title: "MH Police HQ",
    shortDescription: "Recognition from Maharashtra Police Headquarters.",
    image: certImage(36),
  },
  {
    id: 37,
    title: "Air Force Jaisalmer",
    shortDescription: "Recognition from the Air Force, Jaisalmer.",
    image: certImage(37),
  },
  {
    id: 38,
    title: "Learn About Us From Different Perspectives",
    shortDescription: "A collection of recognitions and certificates from institutions worldwide.",
    image: certImage(38),
  },
];
