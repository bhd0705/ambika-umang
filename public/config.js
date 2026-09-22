/* ════════════════════════════════════════════════════════════════════════
   WEDDING CONFIG  —  EDIT EVERYTHING HERE
   ────────────────────────────────────────────────────────────────────────
   Change values below, save, and refresh the browser.

   • Dates: "YYYY-MM-DD"  (e.g. "2026-12-12")
   • Turn sections off via  sections: { …: false }
   • Photos & icons: files in  public/assets/
   ════════════════════════════════════════════════════════════════════════ */

window.__WEDDING_CONFIG__ = {

  couple: {
    bride:    "Aarav",
    groom:    "Meera",
    date:     "2026-12-12",
    venue:    "The Oberoi Udaivilas, Udaipur",
    whatsapp: "910000000000",
    hashtag:  "#AaravMeeraNoor"
  },

  invite: {
    parentsOrder: "bride_first",
    brideFather:  "Mr. Rajesh Sharma",
    brideMother:  "Mrs. Kavita Sharma",
    groomFather:  "Mr. Sanjay Kapoor",
    groomMother:  "Mrs. Neeta Kapoor",
    showGrandparents: false,
    brideGF: "Late Smt. Kamla Kapoor & Shri Harish Kapoor",
    brideGM: "",
    groomGF: "Smt. Leela Sharma & Shri Mohan Sharma",
    groomGM: ""
  },

  events: [
    {
      id: "mehendi",
      icon: "assets/event/pn-evt-ico-mehendi-x-v01.webp",
      name: "Mehendi",
      date: "2026-12-11",
      time: "4:00 PM",
      venue: "Lotus Courtyard",
      desc: "Greens & florals encouraged",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Oberoi+Udaivilas+Udaipur+Rajasthan"
    },
    {
      id: "haldi",
      icon: "assets/event/pn-evt-ico-haldi-x-v01.webp",
      name: "Haldi",
      date: "2026-12-12",
      time: "10:00 AM",
      venue: "Poolside Courtyard",
      desc: "Yellow / ivory tones",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Oberoi+Udaivilas+Udaipur+Rajasthan"
    },
    {
      id: "sangeet",
      icon: "assets/event/pn-evt-ico-sangeet-x-v01.webp",
      name: "Sangeet",
      date: "2026-12-12",
      time: "7:30 PM",
      venue: "Royal Ballroom",
      desc: "An evening of music and performances",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Oberoi+Udaivilas+Udaipur+Rajasthan"
    },
    {
      id: "shaadi",
      icon: "assets/event/pn-evt-ico-shaadi-x-v01.webp",
      name: "Shaadi",
      date: "2026-12-13",
      time: "9:30 AM",
      venue: "Lake Mandap",
      desc: "Traditional Indian attire",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Oberoi+Udaivilas+Udaipur+Rajasthan"
    },
    {
      id: "reception",
      icon: "assets/event/pn-evt-ico-reception-x-v01.webp",
      name: "Reception",
      date: "2026-12-13",
      time: "7:30 PM",
      venue: "Palace Lawns",
      desc: "Candlelit dinner and celebration",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Oberoi+Udaivilas+Udaipur+Rajasthan"
    },
    {
      id: "vidaai",
      icon: "assets/event/pn-evt-ico-vidaai-x-v01.webp",
      name: "Vidaai",
      date: "2026-12-14",
      time: "9:00 AM",
      venue: "Main Courtyard",
      desc: "A quiet farewell with blessings",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=The+Oberoi+Udaivilas+Udaipur+Rajasthan"
    }
  ],

  story: {
    show: true,
    storyMode: "story",
    storyText: "A monsoon evening in Udaipur, a marigold archway, and a girl laughing in the rain — that was all it took. Three years, countless chai mornings, and one nervous rooftop proposal in Jaipur later, Aarav & Meera are ready to begin their most beautiful chapter yet.",
    tags: []
  },

  gallery: {
    show: true,
    layout: "4",
    photos: [
      "assets/Demo/Arch_Demo2.webp",
      "assets/Demo/Arch_demo.webp",
      "assets/Demo/landscape_demo.webp",
      "assets/Demo/hero-arch_demo.webp"
    ]
  },

  thingsToKnow: [
    {
      id: "dresscode",
      label: "Dress Code",
      value: "Festive Indian elegance. Sarees, lehengas and sherwanis are warmly encouraged."
    },
    {
      id: "venue",
      label: "Venue",
      value: "The Oberoi Udaivilas, Udaipur. All celebrations take place within the palace grounds."
    },
    {
      id: "hotel",
      label: "Stay Options",
      value: "A curated block of rooms has been reserved. Please book by 1st November 2026."
    },
    {
      id: "hashtag",
      label: "Wedding Hashtag",
      value: "Share your favourite moments with #AaravMeeraNoor."
    }
  ],

  rsvp: {
    mode: "whatsapp",
    heading: "JOIN US?",
    subtext: "We've saved a seat for you — at our table, in our hearts, and under the royal sky. Come celebrate with us as we begin this new chapter together.",
    btnText: "YES, I'LL BE THERE"
  },

  closing: {
    eyebrow: "With all our love",
    tagline: "You make this moment complete."
  },

  music: {
    enabled: true,
    src:  "assets/song/Template_09.mp3",
    name: "Template 09"
  },

  footer: {
    showCredit: false,
    creditText: "Crafted with love",
    creditUrl: ""
  },

  sections: {
    events: true,
    couple: true,
    gallery: true,
    thingsToKnow: true,
    rsvp: true,
    closing: true
  }

  // calendarUrls auto-generated from couple.date + venue when omitted
};
