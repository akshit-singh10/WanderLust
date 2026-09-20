const sampleListings = [
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    "image": {
      "url": "https://picsum.photos/seed/cozy-beachfront-cottage/800/600",
      "filename": "listingimage"
    },
    "price": 1500,
    "location": "Malibu",
    "country": "United States",
    "category": "trending"
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    "image": {
      "url": "https://picsum.photos/seed/modern-loft-in-downtown/800/600",
      "filename": "listingimage"
    },
    "price": 1200,
    "location": "New York City",
    "country": "United States",
    "category": "rooms"
  },
  {
    "title": "Mountain Retreat",
    "description": "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    "image": {
      "url": "https://picsum.photos/seed/mountain-retreat/800/600",
      "filename": "listingimage"
    },
    "price": 1000,
    "location": "Aspen",
    "country": "United States",
    "category": "mountains"
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    "image": {
      "url": "https://picsum.photos/seed/historic-villa-in-tuscany/800/600",
      "filename": "listingimage"
    },
    "price": 2500,
    "location": "Florence",
    "country": "Italy",
    "category": "iconic"
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    "image": {
      "url": "https://picsum.photos/seed/secluded-treehouse-getaway/800/600",
      "filename": "listingimage"
    },
    "price": 800,
    "location": "Portland",
    "country": "United States",
    "category": "camping"
  },
  {
    "title": "Beachfront Paradise",
    "description": "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    "image": {
      "url": "https://picsum.photos/seed/beachfront-paradise/800/600",
      "filename": "listingimage"
    },
    "price": 2000,
    "location": "Cancun",
    "country": "Mexico",
    "category": "swimming"
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    "image": {
      "url": "https://picsum.photos/seed/rustic-cabin-by-the-lake/800/600",
      "filename": "listingimage"
    },
    "price": 900,
    "location": "Lake Tahoe",
    "country": "United States",
    "category": "camping"
  },
  {
    "title": "Luxury Penthouse with City Views",
    "description": "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    "image": {
      "url": "https://picsum.photos/seed/luxury-penthouse-with-city-views/800/600",
      "filename": "listingimage"
    },
    "price": 3500,
    "location": "Los Angeles",
    "country": "United States",
    "category": "rooms"
  },
  {
    "title": "Ski-In/Ski-Out Chalet",
    "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    "image": {
      "url": "https://picsum.photos/seed/ski-in-ski-out-chalet/800/600",
      "filename": "listingimage"
    },
    "price": 3000,
    "location": "Verbier",
    "country": "Switzerland",
    "category": "mountains"
  },
  {
    "title": "Safari Lodge in the Serengeti",
    "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    "image": {
      "url": "https://picsum.photos/seed/safari-lodge-in-the-serengeti/800/600",
      "filename": "listingimage"
    },
    "price": 4000,
    "location": "Serengeti National Park",
    "country": "Tanzania",
    "category": "farms"
  },
  {
    "title": "Historic Canal House",
    "description": "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    "image": {
      "url": "https://picsum.photos/seed/historic-canal-house/800/600",
      "filename": "listingimage"
    },
    "price": 1800,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "iconic"
  },
  {
    "title": "Private Island Retreat",
    "description": "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    "image": {
      "url": "https://picsum.photos/seed/private-island-retreat/800/600",
      "filename": "listingimage"
    },
    "price": 10000,
    "location": "Fiji",
    "country": "Fiji",
    "category": "boats"
  },
  {
    "title": "Charming Cottage in the Cotswolds",
    "description": "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    "image": {
      "url": "https://picsum.photos/seed/charming-cottage-in-the-cotswolds/800/600",
      "filename": "listingimage"
    },
    "price": 1200,
    "location": "Cotswolds",
    "country": "United Kingdom",
    "category": "farms"
  },
  {
    "title": "Historic Brownstone in Boston",
    "description": "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    "image": {
      "url": "https://picsum.photos/seed/historic-brownstone-in-boston/800/600",
      "filename": "listingimage"
    },
    "price": 2200,
    "location": "Boston",
    "country": "United States",
    "category": "iconic"
  },
  {
    "title": "Beachfront Bungalow in Bali",
    "description": "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    "image": {
      "url": "https://picsum.photos/seed/beachfront-bungalow-in-bali/800/600",
      "filename": "listingimage"
    },
    "price": 1800,
    "location": "Bali",
    "country": "Indonesia",
    "category": "swimming"
  },
  {
    "title": "Mountain View Cabin in Banff",
    "description": "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    "image": {
      "url": "https://picsum.photos/seed/mountain-view-cabin-in-banff/800/600",
      "filename": "listingimage"
    },
    "price": 1500,
    "location": "Banff",
    "country": "Canada",
    "category": "mountains"
  },
  {
    "title": "Art Deco Apartment in Miami",
    "description": "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    "image": {
      "url": "https://picsum.photos/seed/art-deco-apartment-in-miami/800/600",
      "filename": "listingimage"
    },
    "price": 1600,
    "location": "Miami",
    "country": "United States",
    "category": "rooms"
  },
  {
    "title": "Tropical Villa in Phuket",
    "description": "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    "image": {
      "url": "https://picsum.photos/seed/tropical-villa-in-phuket/800/600",
      "filename": "listingimage"
    },
    "price": 3000,
    "location": "Phuket",
    "country": "Thailand",
    "category": "swimming"
  },
  {
    "title": "Historic Castle in Scotland",
    "description": "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    "image": {
      "url": "https://picsum.photos/seed/historic-castle-in-scotland/800/600",
      "filename": "listingimage"
    },
    "price": 4000,
    "location": "Scottish Highlands",
    "country": "United Kingdom",
    "category": "castles"
  },
  {
    "title": "Desert Oasis in Dubai",
    "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    "image": {
      "url": "https://picsum.photos/seed/desert-oasis-in-dubai/800/600",
      "filename": "listingimage"
    },
    "price": 5000,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "category": "swimming"
  },
  {
    "title": "Rustic Log Cabin in Montana",
    "description": "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    "image": {
      "url": "https://picsum.photos/seed/rustic-log-cabin-in-montana/800/600",
      "filename": "listingimage"
    },
    "price": 1100,
    "location": "Montana",
    "country": "United States",
    "category": "camping"
  },
  {
    "title": "Beachfront Villa in Greece",
    "description": "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    "image": {
      "url": "https://picsum.photos/seed/beachfront-villa-in-greece/800/600",
      "filename": "listingimage"
    },
    "price": 2500,
    "location": "Mykonos",
    "country": "Greece",
    "category": "swimming"
  },
  {
    "title": "Eco-Friendly Treehouse Retreat",
    "description": "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    "image": {
      "url": "https://picsum.photos/seed/eco-friendly-treehouse-retreat/800/600",
      "filename": "listingimage"
    },
    "price": 750,
    "location": "Costa Rica",
    "country": "Costa Rica",
    "category": "camping"
  },
  {
    "title": "Historic Cottage in Charleston",
    "description": "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    "image": {
      "url": "https://picsum.photos/seed/historic-cottage-in-charleston/800/600",
      "filename": "listingimage"
    },
    "price": 1600,
    "location": "Charleston",
    "country": "United States",
    "category": "iconic"
  },
  {
    "title": "Modern Apartment in Tokyo",
    "description": "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    "image": {
      "url": "https://picsum.photos/seed/modern-apartment-in-tokyo/800/600",
      "filename": "listingimage"
    },
    "price": 2000,
    "location": "Tokyo",
    "country": "Japan",
    "category": "rooms"
  },
  {
    "title": "Lakefront Cabin in New Hampshire",
    "description": "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    "image": {
      "url": "https://picsum.photos/seed/lakefront-cabin-in-new-hampshire/800/600",
      "filename": "listingimage"
    },
    "price": 1200,
    "location": "New Hampshire",
    "country": "United States",
    "category": "camping"
  },
  {
    "title": "Luxury Villa in the Maldives",
    "description": "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    "image": {
      "url": "https://picsum.photos/seed/luxury-villa-in-the-maldives/800/600",
      "filename": "listingimage"
    },
    "price": 6000,
    "location": "Maldives",
    "country": "Maldives",
    "category": "boats"
  },
  {
    "title": "Ski Chalet in Aspen",
    "description": "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    "image": {
      "url": "https://picsum.photos/seed/ski-chalet-in-aspen/800/600",
      "filename": "listingimage"
    },
    "price": 4000,
    "location": "Aspen",
    "country": "United States",
    "category": "mountains"
  },
  {
    "title": "Secluded Beach House in Costa Rica",
    "description": "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    "image": {
      "url": "https://picsum.photos/seed/secluded-beach-house-in-costa-rica/800/600",
      "filename": "listingimage"
    },
    "price": 1800,
    "location": "Costa Rica",
    "country": "Costa Rica",
    "category": "swimming"
  },
  {
    "title": "Igloo Stay in Lapland",
    "description": "Sleep under the northern lights in a glass-roofed igloo. A once-in-a-lifetime arctic experience in the snowy wilderness of Finland.",
    "image": {
      "url": "https://picsum.photos/seed/igloo-stay-in-lapland/800/600",
      "filename": "listingimage"
    },
    "price": 3200,
    "location": "Rovaniemi",
    "country": "Finland",
    "category": "arctic"
  },
  {
    "title": "Northern Lights Cabin in Tromsø",
    "description": "A heated arctic cabin with panoramic windows, perfect for aurora watching. Includes reindeer sledding nearby.",
    "image": {
      "url": "https://picsum.photos/seed/northern-lights-cabin-in-troms/800/600",
      "filename": "listingimage"
    },
    "price": 2800,
    "location": "Tromsø",
    "country": "Norway",
    "category": "arctic"
  },
  {
    "title": "Glacier Dome Camp in Iceland",
    "description": "Stay in a transparent dome camp facing a glacier, with front-row views of the aurora borealis dancing overhead.",
    "image": {
      "url": "https://picsum.photos/seed/glacier-dome-camp-in-iceland/800/600",
      "filename": "listingimage"
    },
    "price": 2600,
    "location": "Vatnajökull",
    "country": "Iceland",
    "category": "arctic"
  },
  {
    "title": "Geodesic Dome Retreat in Joshua Tree",
    "description": "A stylish geodesic dome home set in the desert, blending modern design with stargazing views.",
    "image": {
      "url": "https://picsum.photos/seed/geodesic-dome-retreat-in-joshua-tree/800/600",
      "filename": "listingimage"
    },
    "price": 1400,
    "location": "Joshua Tree",
    "country": "United States",
    "category": "domes"
  },
  {
    "title": "Transparent Dome in the Scottish Highlands",
    "description": "A glass-domed pod nestled in the hills, offering an immersive night under the stars with full comfort.",
    "image": {
      "url": "https://picsum.photos/seed/transparent-dome-in-the-scottish-highlands/800/600",
      "filename": "listingimage"
    },
    "price": 1300,
    "location": "Cairngorms",
    "country": "United Kingdom",
    "category": "domes"
  },
  {
    "title": "Desert Bubble Dome in Rajasthan",
    "description": "Sleep under the stars in a transparent bubble dome overlooking the golden dunes of the Thar Desert.",
    "image": {
      "url": "https://picsum.photos/seed/desert-bubble-dome-in-rajasthan/800/600",
      "filename": "listingimage"
    },
    "price": 1500,
    "location": "Jaisalmer",
    "country": "India",
    "category": "domes"
  },
  {
    "title": "Houseboat Stay in Kerala Backwaters",
    "description": "Drift along the serene backwaters of Alleppey in a traditional houseboat, complete with home-cooked Kerala meals.",
    "image": {
      "url": "https://picsum.photos/seed/houseboat-stay-in-kerala-backwaters/800/600",
      "filename": "listingimage"
    },
    "price": 6500,
    "location": "Alleppey",
    "country": "India",
    "category": "boats"
  },
  {
    "title": "Heritage Haveli in Jaipur",
    "description": "Stay in a beautifully restored royal haveli with intricate frescoes, courtyards, and a rooftop view of the Pink City.",
    "image": {
      "url": "https://picsum.photos/seed/heritage-haveli-in-jaipur/800/600",
      "filename": "listingimage"
    },
    "price": 5200,
    "location": "Jaipur",
    "country": "India",
    "category": "iconic"
  },
  {
    "title": "Tea Estate Bungalow in Munnar",
    "description": "Wake up amid rolling tea plantations in this colonial-era bungalow, surrounded by misty hills and cool mountain air.",
    "image": {
      "url": "https://picsum.photos/seed/tea-estate-bungalow-in-munnar/800/600",
      "filename": "listingimage"
    },
    "price": 4200,
    "location": "Munnar",
    "country": "India",
    "category": "mountains"
  },
  {
    "title": "Riverside Camp in Rishikesh",
    "description": "Camp beside the Ganges with mountain views, bonfire evenings, and easy access to white-water rafting.",
    "image": {
      "url": "https://picsum.photos/seed/riverside-camp-in-rishikesh/800/600",
      "filename": "listingimage"
    },
    "price": 1800,
    "location": "Rishikesh",
    "country": "India",
    "category": "camping"
  },
  {
    "title": "Farmstay in Coorg",
    "description": "Live among coffee plantations on a working organic farm, with fresh farm meals and guided plantation walks.",
    "image": {
      "url": "https://picsum.photos/seed/farmstay-in-coorg/800/600",
      "filename": "listingimage"
    },
    "price": 2600,
    "location": "Coorg",
    "country": "India",
    "category": "farms"
  },
  {
    "title": "Beach Villa in Goa",
    "description": "A private pool villa just steps from the sand, ideal for sun-soaked days and lively evenings by the Arabian Sea.",
    "image": {
      "url": "https://picsum.photos/seed/beach-villa-in-goa/800/600",
      "filename": "listingimage"
    },
    "price": 5800,
    "location": "Goa",
    "country": "India",
    "category": "swimming"
  },
  {
    "title": "Modern Apartment in Mumbai",
    "description": "A sleek, centrally located apartment with skyline views — perfect for exploring the city that never sleeps.",
    "image": {
      "url": "https://picsum.photos/seed/modern-apartment-in-mumbai/800/600",
      "filename": "listingimage"
    },
    "price": 3800,
    "location": "Mumbai",
    "country": "India",
    "category": "rooms"
  },
  {
    "title": "Heritage Fort Stay in Jodhpur",
    "description": "Stay within the walls of a converted fort-palace, with panoramic views over the Blue City below.",
    "image": {
      "url": "https://picsum.photos/seed/heritage-fort-stay-in-jodhpur/800/600",
      "filename": "listingimage"
    },
    "price": 6000,
    "location": "Jodhpur",
    "country": "India",
    "category": "castles"
  },
  {
    "title": "Himalayan Trekker's Lodge in Manali",
    "description": "A rustic wooden lodge at the base of the Himalayas, ideal for trekkers and mountain lovers seeking crisp air and pine forests.",
    "image": {
      "url": "https://picsum.photos/seed/himalayan-trekker-s-lodge-in-manali/800/600",
      "filename": "listingimage"
    },
    "price": 2400,
    "location": "Manali",
    "country": "India",
    "category": "mountains"
  },
  {
    "title": "Trending Boutique Stay in Udaipur",
    "description": "A lakeside boutique property with rooftop dining, currently one of the most booked stays in the City of Lakes.",
    "image": {
      "url": "https://picsum.photos/seed/trending-boutique-stay-in-udaipur/800/600",
      "filename": "listingimage"
    },
    "price": 4500,
    "location": "Udaipur",
    "country": "India",
    "category": "trending"
  },
  {
    "title": "Backwater Cottage in Kumarakom",
    "description": "A tranquil cottage on the banks of Vembanad Lake, surrounded by coconut groves and paddy fields.",
    "image": {
      "url": "https://picsum.photos/seed/backwater-cottage-in-kumarakom/800/600",
      "filename": "listingimage"
    },
    "price": 3200,
    "location": "Kumarakom",
    "country": "India",
    "category": "swimming"
  },
  {
    "title": "Colonial Bungalow in Darjeeling",
    "description": "A charming hillside bungalow with views of Kanchenjunga, surrounded by tea gardens and misty pine forests.",
    "image": {
      "url": "https://picsum.photos/seed/colonial-bungalow-in-darjeeling/800/600",
      "filename": "listingimage"
    },
    "price": 3600,
    "location": "Darjeeling",
    "country": "India",
    "category": "mountains"
  },
  {
    "title": "Royal Palace Suite in Udaipur",
    "description": "Stay in a wing of a converted lakeside palace, complete with marble interiors and views over Lake Pichola.",
    "image": {
      "url": "https://picsum.photos/seed/royal-palace-suite-in-udaipur/800/600",
      "filename": "listingimage"
    },
    "price": 8500,
    "location": "Udaipur",
    "country": "India",
    "category": "castles"
  },
  {
    "title": "Spice Plantation Stay in Wayanad",
    "description": "A working spice farm offering guided walks through pepper, cardamom, and coffee plantations, with organic farm meals.",
    "image": {
      "url": "https://picsum.photos/seed/spice-plantation-stay-in-wayanad/800/600",
      "filename": "listingimage"
    },
    "price": 2200,
    "location": "Wayanad",
    "country": "India",
    "category": "farms"
  },
  {
    "title": "Desert Camp in Jaisalmer",
    "description": "Camp among the dunes with cultural performances, camel rides, and a bonfire dinner under a star-filled sky.",
    "image": {
      "url": "https://picsum.photos/seed/desert-camp-in-jaisalmer/800/600",
      "filename": "listingimage"
    },
    "price": 2000,
    "location": "Jaisalmer",
    "country": "India",
    "category": "camping"
  },
  {
    "title": "City Loft in Bengaluru",
    "description": "A modern, centrally located loft close to the city's tech hubs, cafes, and nightlife.",
    "image": {
      "url": "https://picsum.photos/seed/city-loft-in-bengaluru/800/600",
      "filename": "listingimage"
    },
    "price": 3000,
    "location": "Bengaluru",
    "country": "India",
    "category": "rooms"
  },
  {
    "title": "Taj-View Heritage Room in Agra",
    "description": "Wake up to sweeping views of the Taj Mahal from this heritage property just minutes from the monument.",
    "image": {
      "url": "https://picsum.photos/seed/taj-view-heritage-room-in-agra/800/600",
      "filename": "listingimage"
    },
    "price": 4800,
    "location": "Agra",
    "country": "India",
    "category": "iconic"
  },
  {
    "title": "Houseboat Escape in Srinagar",
    "description": "A traditional Kashmiri houseboat on Dal Lake, with wood-carved interiors and views of the surrounding mountains.",
    "image": {
      "url": "https://picsum.photos/seed/houseboat-escape-in-srinagar/800/600",
      "filename": "listingimage"
    },
    "price": 5000,
    "location": "Srinagar",
    "country": "India",
    "category": "boats"
  },
  {
    "title": "Trending Rooftop Stay in Jodhpur",
    "description": "A buzzing rooftop guesthouse overlooking the Blue City and Mehrangarh Fort, currently a top pick with travelers.",
    "image": {
      "url": "https://picsum.photos/seed/trending-rooftop-stay-in-jodhpur/800/600",
      "filename": "listingimage"
    },
    "price": 3400,
    "location": "Jodhpur",
    "country": "India",
    "category": "trending"
  },
  {
    "title": "Glass Dome Stay in Lonavala",
    "description": "A hillside geodesic dome with panoramic valley views, popular for weekend getaways from Mumbai and Pune.",
    "image": {
      "url": "https://picsum.photos/seed/glass-dome-stay-in-lonavala/800/600",
      "filename": "listingimage"
    },
    "price": 2800,
    "location": "Lonavala",
    "country": "India",
    "category": "domes"
  },
  {
    "title": "Backwater Villa in Kochi",
    "description": "A private pool villa along the waterways of Kochi, blending colonial charm with modern comforts.",
    "image": {
      "url": "https://picsum.photos/seed/backwater-villa-in-kochi/800/600",
      "filename": "listingimage"
    },
    "price": 4600,
    "location": "Kochi",
    "country": "India",
    "category": "swimming"
  },
  {
    "title": "Mountain Homestay in Shimla",
    "description": "A cozy pine-wood homestay with valley views, home-cooked Himachali food, and easy access to the Mall Road.",
    "image": {
      "url": "https://picsum.photos/seed/mountain-homestay-in-shimla/800/600",
      "filename": "listingimage"
    },
    "price": 2600,
    "location": "Shimla",
    "country": "India",
    "category": "mountains"
  },
  {
    "title": "Fort Palace in Bikaner",
    "description": "A desert fort-turned-hotel with ornate durbar halls, turrets, and panoramic views of the old city.",
    "image": {
      "url": "https://picsum.photos/seed/fort-palace-in-bikaner/800/600",
      "filename": "listingimage"
    },
    "price": 5500,
    "location": "Bikaner",
    "country": "India",
    "category": "castles"
  },
  {
    "title": "Organic Farmstay in Nashik",
    "description": "Stay amid vineyards and orchards on a working organic farm, with wine-tasting tours nearby.",
    "image": {
      "url": "https://picsum.photos/seed/organic-farmstay-in-nashik/800/600",
      "filename": "listingimage"
    },
    "price": 2400,
    "location": "Nashik",
    "country": "India",
    "category": "farms"
  },
  {
    "title": "Riverside Camping in Coorg",
    "description": "Riverside tents nestled in coffee country, with bonfire nights and guided nature treks.",
    "image": {
      "url": "https://picsum.photos/seed/riverside-camping-in-coorg/800/600",
      "filename": "listingimage"
    },
    "price": 1700,
    "location": "Coorg",
    "country": "India",
    "category": "camping"
  },
  {
    "title": "Serviced Apartment in Hyderabad",
    "description": "A spacious, well-connected apartment near HITEC City, ideal for both business and leisure stays.",
    "image": {
      "url": "https://picsum.photos/seed/serviced-apartment-in-hyderabad/800/600",
      "filename": "listingimage"
    },
    "price": 2800,
    "location": "Hyderabad",
    "country": "India",
    "category": "rooms"
  },
  {
    "title": "Iconic Lakeside Stay in Nainital",
    "description": "A landmark property overlooking Naini Lake, walking distance from the Mall Road and boat club.",
    "image": {
      "url": "https://picsum.photos/seed/iconic-lakeside-stay-in-nainital/800/600",
      "filename": "listingimage"
    },
    "price": 3900,
    "location": "Nainital",
    "country": "India",
    "category": "iconic"
  },
  {
    "title": "Shikara Houseboat in Dal Lake",
    "description": "A smaller, intimate shikara-style houseboat experience with personalized service and mountain views.",
    "image": {
      "url": "https://picsum.photos/seed/shikara-houseboat-in-dal-lake/800/600",
      "filename": "listingimage"
    },
    "price": 4200,
    "location": "Srinagar",
    "country": "India",
    "category": "boats"
  },
  {
    "title": "Trending Beach Shack in Gokarna",
    "description": "A laid-back beach shack popular with backpackers, just steps from Om Beach's golden sand.",
    "image": {
      "url": "https://picsum.photos/seed/trending-beach-shack-in-gokarna/800/600",
      "filename": "listingimage"
    },
    "price": 1900,
    "location": "Gokarna",
    "country": "India",
    "category": "trending"
  },
  {
    "title": "Valley Dome Stay in Manali",
    "description": "A snug transparent dome tucked in an apple orchard, with unobstructed views of the surrounding peaks.",
    "image": {
      "url": "https://picsum.photos/seed/valley-dome-stay-in-manali/800/600",
      "filename": "listingimage"
    },
    "price": 3100,
    "location": "Manali",
    "country": "India",
    "category": "domes"
  },
  {
    "title": "Cliffside Villa in Santorini",
    "description": "Whitewashed villa perched on the caldera cliffs, with an infinity pool overlooking the Aegean Sea.",
    "image": {
      "url": "https://picsum.photos/seed/cliffside-villa-in-santorini/800/600",
      "filename": "listingimage"
    },
    "price": 3400,
    "location": "Santorini",
    "country": "Greece",
    "category": "iconic"
  },
  {
    "title": "Alpine Chalet in Interlaken",
    "description": "A timber chalet framed by snow-capped peaks, close to paragliding and lake activities.",
    "image": {
      "url": "https://picsum.photos/seed/alpine-chalet-in-interlaken/800/600",
      "filename": "listingimage"
    },
    "price": 2900,
    "location": "Interlaken",
    "country": "Switzerland",
    "category": "mountains"
  },
  {
    "title": "Overwater Bungalow in Bora Bora",
    "description": "Step straight from your deck into turquoise lagoon waters in this iconic overwater bungalow.",
    "image": {
      "url": "https://picsum.photos/seed/overwater-bungalow-in-bora-bora/800/600",
      "filename": "listingimage"
    },
    "price": 7000,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "category": "swimming"
  },
  {
    "title": "Vineyard Farmhouse in Napa Valley",
    "description": "A working vineyard estate offering wine tastings, rolling hills, and farm-to-table dinners.",
    "image": {
      "url": "https://picsum.photos/seed/vineyard-farmhouse-in-napa-valley/800/600",
      "filename": "listingimage"
    },
    "price": 2600,
    "location": "Napa Valley",
    "country": "United States",
    "category": "farms"
  },
  {
    "title": "Riverside Glamping Tent in Queenstown",
    "description": "Luxury glamping tents beside a glacial river, with adventure sports right on the doorstep.",
    "image": {
      "url": "https://picsum.photos/seed/riverside-glamping-tent-in-queenstown/800/600",
      "filename": "listingimage"
    },
    "price": 2100,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "camping"
  },
  {
    "title": "Medieval Castle Stay in Bavaria",
    "description": "Sleep within stone turrets and grand halls of a real medieval castle deep in the Bavarian forest.",
    "image": {
      "url": "https://picsum.photos/seed/medieval-castle-stay-in-bavaria/800/600",
      "filename": "listingimage"
    },
    "price": 4700,
    "location": "Bavaria",
    "country": "Germany",
    "category": "castles"
  },
  {
    "title": "Canal Boat in Amsterdam",
    "description": "A cozy houseboat moored along Amsterdam's historic canals, with bikes included for city exploring.",
    "image": {
      "url": "https://picsum.photos/seed/canal-boat-in-amsterdam/800/600",
      "filename": "listingimage"
    },
    "price": 2300,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "boats"
  },
  {
    "title": "Trending Loft in Berlin",
    "description": "An industrial-chic loft in a converted warehouse, in one of Berlin's most talked-about neighborhoods right now.",
    "image": {
      "url": "https://picsum.photos/seed/trending-loft-in-berlin/800/600",
      "filename": "listingimage"
    },
    "price": 1700,
    "location": "Berlin",
    "country": "Germany",
    "category": "trending"
  },
  {
    "title": "Snow Dome Cabin in Hokkaido",
    "description": "A heated dome cabin surrounded by snow-covered pines, with hot spring access nearby.",
    "image": {
      "url": "https://picsum.photos/seed/snow-dome-cabin-in-hokkaido/800/600",
      "filename": "listingimage"
    },
    "price": 3300,
    "location": "Hokkaido",
    "country": "Japan",
    "category": "arctic"
  },
  {
    "title": "City Studio in Singapore",
    "description": "A compact, ultra-modern studio in the heart of Singapore, close to hawker centers and skyline views.",
    "image": {
      "url": "https://picsum.photos/seed/city-studio-in-singapore/800/600",
      "filename": "listingimage"
    },
    "price": 2400,
    "location": "Singapore",
    "country": "Singapore",
    "category": "rooms"
  },
  {
    "title": "Backwater Dome Stay in Alleppey",
    "description": "A transparent dome floating beside the backwaters, blending Kerala charm with a modern stargazing experience.",
    "image": {
      "url": "https://picsum.photos/seed/backwater-dome-stay-in-alleppey/800/600",
      "filename": "listingimage"
    },
    "price": 3600,
    "location": "Alleppey",
    "country": "India",
    "category": "domes"
  },
  {
    "title": "Riverside Farmstay in Sikkim",
    "description": "An organic terrace farm nestled in the eastern Himalayas, with cardamom fields and mountain views.",
    "image": {
      "url": "https://picsum.photos/seed/riverside-farmstay-in-sikkim/800/600",
      "filename": "listingimage"
    },
    "price": 2300,
    "location": "Sikkim",
    "country": "India",
    "category": "farms"
  },
  {
    "title": "Iconic Heritage Hotel in Mysuru",
    "description": "A palace-adjacent heritage property with royal architecture, minutes from Mysuru Palace itself.",
    "image": {
      "url": "https://picsum.photos/seed/iconic-heritage-hotel-in-mysuru/800/600",
      "filename": "listingimage"
    },
    "price": 4400,
    "location": "Mysuru",
    "country": "India",
    "category": "iconic"
  },
  {
    "title": "Beachfront Rooms in Pondicherry",
    "description": "French-colonial rooms steps from the promenade, with pastel facades and beachfront cafes nearby.",
    "image": {
      "url": "https://picsum.photos/seed/beachfront-rooms-in-pondicherry/800/600",
      "filename": "listingimage"
    },
    "price": 3100,
    "location": "Pondicherry",
    "country": "India",
    "category": "rooms"
  },
  {
    "title": "Fort Camping in Chittorgarh",
    "description": "Tents pitched near the historic fort ramparts, with guided heritage walks and campfire storytelling.",
    "image": {
      "url": "https://picsum.photos/seed/fort-camping-in-chittorgarh/800/600",
      "filename": "listingimage"
    },
    "price": 1600,
    "location": "Chittorgarh",
    "country": "India",
    "category": "camping"
  },
  {
    "title": "Palace Castle Stay in Gwalior",
    "description": "A restored palace wing with domed ceilings, mirror work, and sweeping views of Gwalior Fort.",
    "image": {
      "url": "https://picsum.photos/seed/palace-castle-stay-in-gwalior/800/600",
      "filename": "listingimage"
    },
    "price": 5300,
    "location": "Gwalior",
    "country": "India",
    "category": "castles"
  },
  {
    "title": "Lagoon Swim Villa in Andaman",
    "description": "A beachfront villa on Havelock Island with direct access to calm turquoise lagoon waters.",
    "image": {
      "url": "https://picsum.photos/seed/lagoon-swim-villa-in-andaman/800/600",
      "filename": "listingimage"
    },
    "price": 6200,
    "location": "Havelock Island",
    "country": "India",
    "category": "swimming"
  },
  {
    "title": "Ganges Houseboat in Varanasi",
    "description": "A traditional wooden boat moored along the ghats, offering sunrise views over the sacred Ganges.",
    "image": {
      "url": "https://picsum.photos/seed/ganges-houseboat-in-varanasi/800/600",
      "filename": "listingimage"
    },
    "price": 3700,
    "location": "Varanasi",
    "country": "India",
    "category": "boats"
  },
  {
    "title": "Trending Hilltop Stay in Mussoorie",
    "description": "A currently popular cloud-view cottage on the ridge, known for its sunset terrace and mountain mist.",
    "image": {
      "url": "https://picsum.photos/seed/trending-hilltop-stay-in-mussoorie/800/600",
      "filename": "listingimage"
    },
    "price": 2700,
    "location": "Mussoorie",
    "country": "India",
    "category": "trending"
  },
  {
    "title": "Pine Forest Mountain Lodge in Kasol",
    "description": "A riverside wooden lodge in the Parvati Valley, popular with trekkers and backpackers alike.",
    "image": {
      "url": "https://picsum.photos/seed/pine-forest-mountain-lodge-in-kasol/800/600",
      "filename": "listingimage"
    },
    "price": 1900,
    "location": "Kasol",
    "country": "India",
    "category": "mountains"
  },
  {
    "title": "Orchard Farmstay in Himachal",
    "description": "Stay among apple orchards in a family-run farmhouse, with fresh harvests and valley walks.",
    "image": {
      "url": "https://picsum.photos/seed/orchard-farmstay-in-himachal/800/600",
      "filename": "listingimage"
    },
    "price": 2100,
    "location": "Kullu",
    "country": "India",
    "category": "farms"
  },
  {
    "title": "Boutique Rooms in Chandigarh",
    "description": "Minimalist designer rooms in India's planned city, close to Sukhna Lake and the Rock Garden.",
    "image": {
      "url": "https://picsum.photos/seed/boutique-rooms-in-chandigarh/800/600",
      "filename": "listingimage"
    },
    "price": 2700,
    "location": "Chandigarh",
    "country": "India",
    "category": "rooms"
  },
  {
    "title": "Beach Camping in Varkala",
    "description": "Clifftop tents overlooking the Arabian Sea, with yoga sessions and beach bonfires included.",
    "image": {
      "url": "https://picsum.photos/seed/beach-camping-in-varkala/800/600",
      "filename": "listingimage"
    },
    "price": 1500,
    "location": "Varkala",
    "country": "India",
    "category": "camping"
  },
  {
    "title": "Iconic Gateway View Stay in Mumbai",
    "description": "A landmark heritage property overlooking the Gateway of India and the Arabian Sea promenade.",
    "image": {
      "url": "https://picsum.photos/seed/iconic-gateway-view-stay-in-mumbai/800/600",
      "filename": "listingimage"
    },
    "price": 5600,
    "location": "Mumbai",
    "country": "India",
    "category": "iconic"
  },
  {
    "title": "Dome Camp in Spiti Valley",
    "description": "A high-altitude transparent dome offering some of the clearest night skies in the Himalayas.",
    "image": {
      "url": "https://picsum.photos/seed/dome-camp-in-spiti-valley/800/600",
      "filename": "listingimage"
    },
    "price": 3400,
    "location": "Spiti Valley",
    "country": "India",
    "category": "domes"
  },
  {
    "title": "Palace Castle Retreat in Orchha",
    "description": "A riverside fort-palace with Mughal-era architecture, overlooking the Betwa River.",
    "image": {
      "url": "https://picsum.photos/seed/palace-castle-retreat-in-orchha/800/600",
      "filename": "listingimage"
    },
    "price": 4900,
    "location": "Orchha",
    "country": "India",
    "category": "castles"
  },
  {
    "title": "Swimming Pool Resort in Pune",
    "description": "A resort-style stay just outside the city with a large pool, gardens, and weekend brunches.",
    "image": {
      "url": "https://picsum.photos/seed/swimming-pool-resort-in-pune/800/600",
      "filename": "listingimage"
    },
    "price": 3300,
    "location": "Pune",
    "country": "India",
    "category": "swimming"
  },
  {
    "title": "Backwater Boat Stay in Kollam",
    "description": "A quieter alternative to Alleppey, this houseboat drifts through peaceful Kollam backwaters.",
    "image": {
      "url": "https://picsum.photos/seed/backwater-boat-stay-in-kollam/800/600",
      "filename": "listingimage"
    },
    "price": 3900,
    "location": "Kollam",
    "country": "India",
    "category": "boats"
  },
  {
    "title": "Trending Cafe-Stay in Dharamshala",
    "description": "A cafe-guesthouse hybrid with mountain views, popular among digital nomads and backpackers right now.",
    "image": {
      "url": "https://picsum.photos/seed/trending-cafe-stay-in-dharamshala/800/600",
      "filename": "listingimage"
    },
    "price": 1800,
    "location": "Dharamshala",
    "country": "India",
    "category": "trending"
  },
  {
    "title": "Valley View Cottage in Ooty",
    "description": "A colonial-style cottage surrounded by eucalyptus groves and rolling tea estates in the Nilgiris.",
    "image": {
      "url": "https://picsum.photos/seed/valley-view-cottage-in-ooty/800/600",
      "filename": "listingimage"
    },
    "price": 2500,
    "location": "Ooty",
    "country": "India",
    "category": "mountains"
  },
  {
    "title": "Dairy Farmstay in Anand",
    "description": "Experience rural Gujarat on a working dairy farm, with bullock cart rides and farm-fresh meals.",
    "image": {
      "url": "https://picsum.photos/seed/dairy-farmstay-in-anand/800/600",
      "filename": "listingimage"
    },
    "price": 1400,
    "location": "Anand",
    "country": "India",
    "category": "farms"
  },
  {
    "title": "Skyline Rooms in Gurugram",
    "description": "Contemporary high-rise rooms with city skyline views, close to Cyber Hub's dining and nightlife.",
    "image": {
      "url": "https://picsum.photos/seed/skyline-rooms-in-gurugram/800/600",
      "filename": "listingimage"
    },
    "price": 3200,
    "location": "Gurugram",
    "country": "India",
    "category": "rooms"
  },
  {
    "title": "Jungle Camping in Jim Corbett",
    "description": "Safari-style tented camps on the edge of Corbett National Park, with wildlife spotting drives.",
    "image": {
      "url": "https://picsum.photos/seed/jungle-camping-in-jim-corbett/800/600",
      "filename": "listingimage"
    },
    "price": 2900,
    "location": "Jim Corbett",
    "country": "India",
    "category": "camping"
  },
  {
    "title": "Iconic Ghat View Stay in Rishikesh",
    "description": "A landmark riverside property with direct views of Laxman Jhula and the Ganga Aarti ceremony.",
    "image": {
      "url": "https://picsum.photos/seed/iconic-ghat-view-stay-in-rishikesh/800/600",
      "filename": "listingimage"
    },
    "price": 3300,
    "location": "Rishikesh",
    "country": "India",
    "category": "iconic"
  },
  {
    "title": "Pool Villa in Alibaug",
    "description": "A weekend private-pool villa a short ferry ride from Mumbai, popular for group getaways.",
    "image": {
      "url": "https://picsum.photos/seed/pool-villa-in-alibaug/800/600",
      "filename": "listingimage"
    },
    "price": 6800,
    "location": "Alibaug",
    "country": "India",
    "category": "swimming"
  }
];

module.exports = { data: sampleListings };