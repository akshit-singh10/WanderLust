const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "trending",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "rooms",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "iconic",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "camping",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "swimming",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "camping",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "rooms",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "mountains",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "farms",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "iconic",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "boats",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "farms",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "iconic",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "swimming",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "rooms",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "swimming",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "castles",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "swimming",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "camping",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "swimming",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "camping",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "iconic",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "rooms",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "camping",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "boats",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "mountains",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "swimming",
  },

  // --- Arctic & Dome listings ---
  {
    title: "Igloo Stay in Lapland",
    description:
      "Sleep under the northern lights in a glass-roofed igloo. A once-in-a-lifetime arctic experience in the snowy wilderness of Finland.",
    image: {
      url: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3200,
    location: "Rovaniemi",
    country: "Finland",
    category: "arctic",
  },
  {
    title: "Northern Lights Cabin in Tromsø",
    description:
      "A heated arctic cabin with panoramic windows, perfect for aurora watching. Includes reindeer sledding nearby.",
    image: {
      url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2800,
    location: "Tromsø",
    country: "Norway",
    category: "arctic",
  },
  {
    title: "Glacier Dome Camp in Iceland",
    description:
      "Stay in a transparent dome camp facing a glacier, with front-row views of the aurora borealis dancing overhead.",
    image: {
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2600,
    location: "Vatnajökull",
    country: "Iceland",
    category: "arctic",
  },
  {
    title: "Geodesic Dome Retreat in Joshua Tree",
    description:
      "A stylish geodesic dome home set in the desert, blending modern design with stargazing views.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1400,
    location: "Joshua Tree",
    country: "United States",
    category: "domes",
  },
  {
    title: "Transparent Dome in the Scottish Highlands",
    description:
      "A glass-domed pod nestled in the hills, offering an immersive night under the stars with full comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1300,
    location: "Cairngorms",
    country: "United Kingdom",
    category: "domes",
  },

  // --- India listings (batch 1) ---
  {
    title: "Desert Bubble Dome in Rajasthan",
    description:
      "Sleep under the stars in a transparent bubble dome overlooking the golden dunes of the Thar Desert.",
    image: {
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1500,
    location: "Jaisalmer",
    country: "India",
    category: "domes",
  },
  {
    title: "Houseboat Stay in Kerala Backwaters",
    description:
      "Drift along the serene backwaters of Alleppey in a traditional houseboat, complete with home-cooked Kerala meals.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 6500,
    location: "Alleppey",
    country: "India",
    category: "boats",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description:
      "Stay in a beautifully restored royal haveli with intricate frescoes, courtyards, and a rooftop view of the Pink City.",
    image: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5200,
    location: "Jaipur",
    country: "India",
    category: "iconic",
  },
  {
    title: "Tea Estate Bungalow in Munnar",
    description:
      "Wake up amid rolling tea plantations in this colonial-era bungalow, surrounded by misty hills and cool mountain air.",
    image: {
      url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4200,
    location: "Munnar",
    country: "India",
    category: "mountains",
  },
  {
    title: "Riverside Camp in Rishikesh",
    description:
      "Camp beside the Ganges with mountain views, bonfire evenings, and easy access to white-water rafting.",
    image: {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1800,
    location: "Rishikesh",
    country: "India",
    category: "camping",
  },
  {
    title: "Farmstay in Coorg",
    description:
      "Live among coffee plantations on a working organic farm, with fresh farm meals and guided plantation walks.",
    image: {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2600,
    location: "Coorg",
    country: "India",
    category: "farms",
  },
  {
    title: "Beach Villa in Goa",
    description:
      "A private pool villa just steps from the sand, ideal for sun-soaked days and lively evenings by the Arabian Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5800,
    location: "Goa",
    country: "India",
    category: "swimming",
  },
  {
    title: "Modern Apartment in Mumbai",
    description:
      "A sleek, centrally located apartment with skyline views — perfect for exploring the city that never sleeps.",
    image: {
      url: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3800,
    location: "Mumbai",
    country: "India",
    category: "rooms",
  },
  {
    title: "Heritage Fort Stay in Jodhpur",
    description:
      "Stay within the walls of a converted fort-palace, with panoramic views over the Blue City below.",
    image: {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 6000,
    location: "Jodhpur",
    country: "India",
    category: "castles",
  },
  {
    title: "Himalayan Trekker's Lodge in Manali",
    description:
      "A rustic wooden lodge at the base of the Himalayas, ideal for trekkers and mountain lovers seeking crisp air and pine forests.",
    image: {
      url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2400,
    location: "Manali",
    country: "India",
    category: "mountains",
  },
  {
    title: "Trending Boutique Stay in Udaipur",
    description:
      "A lakeside boutique property with rooftop dining, currently one of the most booked stays in the City of Lakes.",
    image: {
      url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4500,
    location: "Udaipur",
    country: "India",
    category: "trending",
  },

  // --- India listings (batch 2) ---
  {
    title: "Backwater Cottage in Kumarakom",
    description:
      "A tranquil cottage on the banks of Vembanad Lake, surrounded by coconut groves and paddy fields.",
    image: {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3200,
    location: "Kumarakom",
    country: "India",
    category: "swimming",
  },
  {
    title: "Colonial Bungalow in Darjeeling",
    description:
      "A charming hillside bungalow with views of Kanchenjunga, surrounded by tea gardens and misty pine forests.",
    image: {
      url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3600,
    location: "Darjeeling",
    country: "India",
    category: "mountains",
  },
  {
    title: "Royal Palace Suite in Udaipur",
    description:
      "Stay in a wing of a converted lakeside palace, complete with marble interiors and views over Lake Pichola.",
    image: {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 8500,
    location: "Udaipur",
    country: "India",
    category: "castles",
  },
  {
    title: "Spice Plantation Stay in Wayanad",
    description:
      "A working spice farm offering guided walks through pepper, cardamom, and coffee plantations, with organic farm meals.",
    image: {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2200,
    location: "Wayanad",
    country: "India",
    category: "farms",
  },
  {
    title: "Desert Camp in Jaisalmer",
    description:
      "Camp among the dunes with cultural performances, camel rides, and a bonfire dinner under a star-filled sky.",
    image: {
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2000,
    location: "Jaisalmer",
    country: "India",
    category: "camping",
  },
  {
    title: "City Loft in Bengaluru",
    description:
      "A modern, centrally located loft close to the city's tech hubs, cafes, and nightlife.",
    image: {
      url: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3000,
    location: "Bengaluru",
    country: "India",
    category: "rooms",
  },
  {
    title: "Taj-View Heritage Room in Agra",
    description:
      "Wake up to sweeping views of the Taj Mahal from this heritage property just minutes from the monument.",
    image: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4800,
    location: "Agra",
    country: "India",
    category: "iconic",
  },
  {
    title: "Houseboat Escape in Srinagar",
    description:
      "A traditional Kashmiri houseboat on Dal Lake, with wood-carved interiors and views of the surrounding mountains.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5000,
    location: "Srinagar",
    country: "India",
    category: "boats",
  },
  {
    title: "Trending Rooftop Stay in Jodhpur",
    description:
      "A buzzing rooftop guesthouse overlooking the Blue City and Mehrangarh Fort, currently a top pick with travelers.",
    image: {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3400,
    location: "Jodhpur",
    country: "India",
    category: "trending",
  },
  {
    title: "Glass Dome Stay in Lonavala",
    description:
      "A hillside geodesic dome with panoramic valley views, popular for weekend getaways from Mumbai and Pune.",
    image: {
      url: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2800,
    location: "Lonavala",
    country: "India",
    category: "domes",
  },
  {
    title: "Backwater Villa in Kochi",
    description:
      "A private pool villa along the waterways of Kochi, blending colonial charm with modern comforts.",
    image: {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4600,
    location: "Kochi",
    country: "India",
    category: "swimming",
  },
  {
    title: "Mountain Homestay in Shimla",
    description:
      "A cozy pine-wood homestay with valley views, home-cooked Himachali food, and easy access to the Mall Road.",
    image: {
      url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2600,
    location: "Shimla",
    country: "India",
    category: "mountains",
  },
  {
    title: "Fort Palace in Bikaner",
    description:
      "A desert fort-turned-hotel with ornate durbar halls, turrets, and panoramic views of the old city.",
    image: {
      url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5500,
    location: "Bikaner",
    country: "India",
    category: "castles",
  },
  {
    title: "Organic Farmstay in Nashik",
    description:
      "Stay amid vineyards and orchards on a working organic farm, with wine-tasting tours nearby.",
    image: {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2400,
    location: "Nashik",
    country: "India",
    category: "farms",
  },
  {
    title: "Riverside Camping in Coorg",
    description:
      "Riverside tents nestled in coffee country, with bonfire nights and guided nature treks.",
    image: {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1700,
    location: "Coorg",
    country: "India",
    category: "camping",
  },
  {
    title: "Serviced Apartment in Hyderabad",
    description:
      "A spacious, well-connected apartment near HITEC City, ideal for both business and leisure stays.",
    image: {
      url: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2800,
    location: "Hyderabad",
    country: "India",
    category: "rooms",
  },
  {
    title: "Iconic Lakeside Stay in Nainital",
    description:
      "A landmark property overlooking Naini Lake, walking distance from the Mall Road and boat club.",
    image: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3900,
    location: "Nainital",
    country: "India",
    category: "iconic",
  },
  {
    title: "Shikara Houseboat in Dal Lake",
    description:
      "A smaller, intimate shikara-style houseboat experience with personalized service and mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4200,
    location: "Srinagar",
    country: "India",
    category: "boats",
  },
  {
    title: "Trending Beach Shack in Gokarna",
    description:
      "A laid-back beach shack popular with backpackers, just steps from Om Beach's golden sand.",
    image: {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1900,
    location: "Gokarna",
    country: "India",
    category: "trending",
  },
  {
    title: "Valley Dome Stay in Manali",
    description:
      "A snug transparent dome tucked in an apple orchard, with unobstructed views of the surrounding peaks.",
    image: {
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3100,
    location: "Manali",
    country: "India",
    category: "domes",
  },

  // --- Additional listings (batch 3) ---
  {
    title: "Cliffside Villa in Santorini",
    description:
      "Whitewashed villa perched on the caldera cliffs, with an infinity pool overlooking the Aegean Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3400,
    location: "Santorini",
    country: "Greece",
    category: "iconic",
  },
  {
    title: "Alpine Chalet in Interlaken",
    description:
      "A timber chalet framed by snow-capped peaks, close to paragliding and lake activities.",
    image: {
      url: "https://images.unsplash.com/photo-1548704806-6a3d1b1a2f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2900,
    location: "Interlaken",
    country: "Switzerland",
    category: "mountains",
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description:
      "Step straight from your deck into turquoise lagoon waters in this iconic overwater bungalow.",
    image: {
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 7000,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "swimming",
  },
  {
    title: "Vineyard Farmhouse in Napa Valley",
    description:
      "A working vineyard estate offering wine tastings, rolling hills, and farm-to-table dinners.",
    image: {
      url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2600,
    location: "Napa Valley",
    country: "United States",
    category: "farms",
  },
  {
    title: "Riverside Glamping Tent in Queenstown",
    description:
      "Luxury glamping tents beside a glacial river, with adventure sports right on the doorstep.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2100,
    location: "Queenstown",
    country: "New Zealand",
    category: "camping",
  },
  {
    title: "Medieval Castle Stay in Bavaria",
    description:
      "Sleep within stone turrets and grand halls of a real medieval castle deep in the Bavarian forest.",
    image: {
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4700,
    location: "Bavaria",
    country: "Germany",
    category: "castles",
  },
  {
    title: "Canal Boat in Amsterdam",
    description:
      "A cozy houseboat moored along Amsterdam's historic canals, with bikes included for city exploring.",
    image: {
      url: "https://images.unsplash.com/photo-1584003564911-a5b1e5b2c2a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2300,
    location: "Amsterdam",
    country: "Netherlands",
    category: "boats",
  },
  {
    title: "Trending Loft in Berlin",
    description:
      "An industrial-chic loft in a converted warehouse, in one of Berlin's most talked-about neighborhoods right now.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1700,
    location: "Berlin",
    country: "Germany",
    category: "trending",
  },
  {
    title: "Snow Dome Cabin in Hokkaido",
    description:
      "A heated dome cabin surrounded by snow-covered pines, with hot spring access nearby.",
    image: {
      url: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3300,
    location: "Hokkaido",
    country: "Japan",
    category: "arctic",
  },
  {
    title: "City Studio in Singapore",
    description:
      "A compact, ultra-modern studio in the heart of Singapore, close to hawker centers and skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2400,
    location: "Singapore",
    country: "Singapore",
    category: "rooms",
  },

  // --- India listings (batch 3) ---
  {
    title: "Backwater Dome Stay in Alleppey",
    description:
      "A transparent dome floating beside the backwaters, blending Kerala charm with a modern stargazing experience.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3600,
    location: "Alleppey",
    country: "India",
    category: "domes",
  },
  {
    title: "Riverside Farmstay in Sikkim",
    description:
      "An organic terrace farm nestled in the eastern Himalayas, with cardamom fields and mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2300,
    location: "Sikkim",
    country: "India",
    category: "farms",
  },
  {
    title: "Iconic Heritage Hotel in Mysuru",
    description:
      "A palace-adjacent heritage property with royal architecture, minutes from Mysuru Palace itself.",
    image: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4400,
    location: "Mysuru",
    country: "India",
    category: "iconic",
  },
  {
    title: "Beachfront Rooms in Pondicherry",
    description:
      "French-colonial rooms steps from the promenade, with pastel facades and beachfront cafes nearby.",
    image: {
      url: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3100,
    location: "Pondicherry",
    country: "India",
    category: "rooms",
  },
  {
    title: "Fort Camping in Chittorgarh",
    description:
      "Tents pitched near the historic fort ramparts, with guided heritage walks and campfire storytelling.",
    image: {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1600,
    location: "Chittorgarh",
    country: "India",
    category: "camping",
  },
  {
    title: "Palace Castle Stay in Gwalior",
    description:
      "A restored palace wing with domed ceilings, mirror work, and sweeping views of Gwalior Fort.",
    image: {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5300,
    location: "Gwalior",
    country: "India",
    category: "castles",
  },
  {
    title: "Lagoon Swim Villa in Andaman",
    description:
      "A beachfront villa on Havelock Island with direct access to calm turquoise lagoon waters.",
    image: {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 6200,
    location: "Havelock Island",
    country: "India",
    category: "swimming",
  },
  {
    title: "Ganges Houseboat in Varanasi",
    description:
      "A traditional wooden boat moored along the ghats, offering sunrise views over the sacred Ganges.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3700,
    location: "Varanasi",
    country: "India",
    category: "boats",
  },
  {
    title: "Trending Hilltop Stay in Mussoorie",
    description:
      "A currently popular cloud-view cottage on the ridge, known for its sunset terrace and mountain mist.",
    image: {
      url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2700,
    location: "Mussoorie",
    country: "India",
    category: "trending",
  },
  {
    title: "Pine Forest Mountain Lodge in Kasol",
    description:
      "A riverside wooden lodge in the Parvati Valley, popular with trekkers and backpackers alike.",
    image: {
      url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1900,
    location: "Kasol",
    country: "India",
    category: "mountains",
  },
  {
    title: "Orchard Farmstay in Himachal",
    description:
      "Stay among apple orchards in a family-run farmhouse, with fresh harvests and valley walks.",
    image: {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2100,
    location: "Kullu",
    country: "India",
    category: "farms",
  },
  {
    title: "Boutique Rooms in Chandigarh",
    description:
      "Minimalist designer rooms in India's planned city, close to Sukhna Lake and the Rock Garden.",
    image: {
      url: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2700,
    location: "Chandigarh",
    country: "India",
    category: "rooms",
  },
  {
    title: "Beach Camping in Varkala",
    description:
      "Clifftop tents overlooking the Arabian Sea, with yoga sessions and beach bonfires included.",
    image: {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1500,
    location: "Varkala",
    country: "India",
    category: "camping",
  },
  {
    title: "Iconic Gateway View Stay in Mumbai",
    description:
      "A landmark heritage property overlooking the Gateway of India and the Arabian Sea promenade.",
    image: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5600,
    location: "Mumbai",
    country: "India",
    category: "iconic",
  },
  {
    title: "Dome Camp in Spiti Valley",
    description:
      "A high-altitude transparent dome offering some of the clearest night skies in the Himalayas.",
    image: {
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3400,
    location: "Spiti Valley",
    country: "India",
    category: "domes",
  },
  {
    title: "Palace Castle Retreat in Orchha",
    description:
      "A riverside fort-palace with Mughal-era architecture, overlooking the Betwa River.",
    image: {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4900,
    location: "Orchha",
    country: "India",
    category: "castles",
  },
  {
    title: "Swimming Pool Resort in Pune",
    description:
      "A resort-style stay just outside the city with a large pool, gardens, and weekend brunches.",
    image: {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3300,
    location: "Pune",
    country: "India",
    category: "swimming",
  },
  {
    title: "Backwater Boat Stay in Kollam",
    description:
      "A quieter alternative to Alleppey, this houseboat drifts through peaceful Kollam backwaters.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3900,
    location: "Kollam",
    country: "India",
    category: "boats",
  },
  {
    title: "Trending Cafe-Stay in Dharamshala",
    description:
      "A cafe-guesthouse hybrid with mountain views, popular among digital nomads and backpackers right now.",
    image: {
      url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1800,
    location: "Dharamshala",
    country: "India",
    category: "trending",
  },
  {
    title: "Valley View Cottage in Ooty",
    description:
      "A colonial-style cottage surrounded by eucalyptus groves and rolling tea estates in the Nilgiris.",
    image: {
      url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2500,
    location: "Ooty",
    country: "India",
    category: "mountains",
  },
  {
    title: "Dairy Farmstay in Anand",
    description:
      "Experience rural Gujarat on a working dairy farm, with bullock cart rides and farm-fresh meals.",
    image: {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1400,
    location: "Anand",
    country: "India",
    category: "farms",
  },
  {
    title: "Skyline Rooms in Gurugram",
    description:
      "Contemporary high-rise rooms with city skyline views, close to Cyber Hub's dining and nightlife.",
    image: {
      url: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3200,
    location: "Gurugram",
    country: "India",
    category: "rooms",
  },
  {
    title: "Jungle Camping in Jim Corbett",
    description:
      "Safari-style tented camps on the edge of Corbett National Park, with wildlife spotting drives.",
    image: {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2900,
    location: "Jim Corbett",
    country: "India",
    category: "camping",
  },
  {
    title: "Iconic Ghat View Stay in Rishikesh",
    description:
      "A landmark riverside property with direct views of Laxman Jhula and the Ganga Aarti ceremony.",
    image: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3300,
    location: "Rishikesh",
    country: "India",
    category: "iconic",
  },
  {
    title: "Pool Villa in Alibaug",
    description:
      "A weekend private-pool villa a short ferry ride from Mumbai, popular for group getaways.",
    image: {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 6800,
    location: "Alibaug",
    country: "India",
    category: "swimming",
  },
];

module.exports = { data: sampleListings };