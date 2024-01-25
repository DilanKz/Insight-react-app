const articles = [
    {
        "id": 1,
        "title": "Global Perspectives on the Petrol Crisis",
        "tags": ["GlobalIssues", "CurrentAffairs", "Politics"],
        "body": "In recent times, the global petrol crisis has spurred debates and discussions on its far-reaching implications. Countries worldwide grapple with fluctuating prices, impacting both economies and everyday lives. This blog delves into the root causes, potential solutions, and the geopolitical dynamics surrounding this critical issue."
    },
    {
        "id": 2,
        "title": "Culinary Journeys: Exploring World Cuisines",
        "tags": ["Cuisine", "Exploration", "Travel"],
        "body": "Embark on a gastronomic adventure as we traverse the globe to discover diverse and delectable cuisines. From the spicy streets of Bangkok to the savory delights of Italy, this blog explores the cultural richness embedded in each dish and the stories behind the culinary traditions that make our world a flavorful tapestry."
    },
    {
        "id": 3,
        "title": "Wildlife Wonders Around the Globe",
        "tags": ["Wildlife", "Nature", "Travel"],
        "body": "Join us on a virtual safari as we marvel at the incredible diversity of wildlife around the world. From the majestic elephants of Africa to the elusive snow leopards of the Himalayas, this blog celebrates the beauty of nature and the importance of conservation efforts to preserve these wonders for future generations."
    },
    {
        "id": 4,
        "title": "Cultural Heritage Sites: A Global Odyssey",
        "tags": ["Heritage", "History", "Travel"],
        "body": "Explore the tapestry of human history by visiting some of the world's most captivating cultural heritage sites. From the ancient pyramids of Egypt to the architectural marvels of Machu Picchu, this blog takes you on a journey through time, unraveling the stories behind these iconic landmarks."
    },
    {
        "id": 5,
        "title": "Sustainable Tourism Trends Worldwide",
        "tags": ["Sustainability", "Tourism", "Conservation"],
        "body": "Discover how the travel industry is evolving towards sustainability. This blog examines global trends in eco-friendly tourism, showcasing initiatives that promote conservation, community engagement, and responsible travel practices. Uncover the transformative power of sustainable tourism for both the environment and local communities."
    },
    {
        "id": 6,
        "title": "Ancient Cities: A Journey Through Time and Continents",
        "tags": ["History", "Archaeology", "Travel"],
        "body": "Step back in time and explore the remnants of ancient civilizations. From the ruins of Rome to the mysteries of Petra, this blog takes you on a journey through the rich history and architectural wonders of ancient cities across continents."
    },
    {
        "id": 7,
        "title": "Empowering Women Across Borders",
        "tags": ["Empowerment", "SocialImpact", "Stories"],
        "body": "Uncover inspiring stories of women breaking barriers and making a difference worldwide. This blog highlights initiatives, challenges, and triumphs in the global movement towards empowering women across diverse cultures and societies."
    },
    {
        "id": 8,
        "title": "Global Art Scene: Exploring Creativity Worldwide",
        "tags": ["Art", "Culture", "Creativity"],
        "body": "Immerse yourself in the vibrant world of art across borders. From contemporary galleries in New York to street art in Berlin, this blog explores the diverse forms of creative expression that shape the global art scene and contribute to cultural richness."
    },
    {
        "id": 9,
        "title": "Thrilling Adventures Around the World",
        "tags": ["Adventure", "Outdoors", "Travel"],
        "body": "Embark on adrenaline-pumping adventures as we explore thrilling activities around the world. From bungee jumping in New Zealand to trekking the Inca Trail, this blog captures the excitement of global adventures and the breathtaking landscapes that serve as their backdrop."
    },
    {
        "id": 10,
        "title": "Tech Innovations Shaping the Future Globally",
        "tags": ["Technology", "Innovation", "GlobalTrends"],
        "body": "Stay ahead of the curve with insights into the latest technological innovations shaping the global landscape. This blog explores breakthroughs in artificial intelligence, robotics, and other cutting-edge technologies that have the potential to revolutionize industries and societies worldwide."
    },
    {
        "id": 11,
        "title": "Revolutionizing Education on a Global Scale",
        "tags": ["Education", "GlobalEducation", "Learning"],
        "body": "Explore the transformative trends in global education that are reshaping traditional learning paradigms. From online learning platforms to innovative teaching methods, this blog delves into the evolving landscape of education on a global scale."
    },
    {
        "id": 12,
        "title": "Global Political Landscapes: Insights and Analysis",
        "tags": ["Politics", "WorldAffairs", "Governance"],
        "body": "Gain a deeper understanding of the intricate political landscapes shaping our world. This blog provides insights and analysis on global political events, diplomatic relations, and governance structures, offering a comprehensive view of the complex forces at play."
    },
    {
        "id": 13,
        "title": "Sports Buzz: Highlights from Around the World",
        "tags": ["Sports", "Athletics", "GlobalCompetition"],
        "body": "Dive into the thrilling world of sports with highlights from competitions around the globe. From the Olympics to major league showdowns, this blog captures the excitement, triumphs, and memorable moments that define the global sports scene."
    },
    {
        "id": 14,
        "title": "Global Art Scene: Exploring Creativity Worldwide",
        "tags": ["Art", "Culture", "Creativity"],
        "body": "Immerse yourself in the vibrant world of art across borders. From contemporary galleries in New York to street art in Berlin, this blog explores the diverse forms of creative expression that shape the global art scene and contribute to cultural richness."
    },
    {
        "id": 15,
        "title": "Thrilling Adventures Around the World",
        "tags": ["Adventure", "Outdoors", "Travel"],
        "body": "Embark on adrenaline-pumping adventures as we explore thrilling activities around the world. From bungee jumping in New Zealand to trekking the Inca Trail, this blog captures the excitement of global adventures and the breathtaking landscapes that serve as their backdrop."
    },
    {
        "id": 16,
        "title": "Tech Innovations Shaping the Future Globally",
        "tags": ["Technology", "Innovation", "GlobalTrends"],
        "body": "Stay ahead of the curve with insights into the latest technological innovations shaping the global landscape. This blog explores breakthroughs in artificial intelligence, robotics, and other cutting-edge technologies that have the potential to revolutionize industries and societies worldwide."
    },
    {
        "id": 17,
        "title": "Revolutionizing Education on a Global Scale",
        "tags": ["Education", "GlobalEducation", "Learning"],
        "body": "Explore the transformative trends in global education that are reshaping traditional learning paradigms. From online learning platforms to innovative teaching methods, this blog delves into the evolving landscape of education on a global scale."
    },
    {
        "id": 18,
        "title": "Global Political Landscapes: Insights and Analysis",
        "tags": ["Politics", "WorldAffairs", "Governance"],
        "body": "Gain a deeper understanding of the intricate political landscapes shaping our world. This blog provides insights and analysis on global political events, diplomatic relations, and governance structures, offering a comprehensive view of the complex forces at play."
    },
    {
        "id": 19,
        "title": "Sports Buzz: Highlights from Around the World",
        "tags": ["Sports", "Athletics", "GlobalCompetition"],
        "body": "Dive into the thrilling world of sports with highlights from competitions around the globe. From the Olympics to major league showdowns, this blog captures the excitement, triumphs, and memorable moments that define the global sports scene."
    },
    {
        "id": 20,
        "title": "Sports Buzz: Highlights from Around the World",
        "tags": ["Sports", "Athletics", "GlobalCompetition"],
        "body": "Dive into the thrilling world of sports with highlights from competitions around the globe. From the Olympics to major league showdowns, this blog captures the excitement, triumphs, and memorable moments that define the global sports scene."
    },
    {
        "id": 21,
        "title": "Sports Buzz: Highlights from Around the World",
        "tags": ["Sports", "Athletics", "GlobalCompetition"],
        "body": "Dive into the thrilling world of sports with highlights from competitions around the globe. From the Olympics to major league showdowns, this blog captures the excitement, triumphs, and memorable moments that define the global sports scene."
    },
    {
        "id": 22,
        "title": "Sports Buzz: Highlights from Around the World",
        "tags": ["Sports", "Athletics", "GlobalCompetition"],
        "body": "Dive into the thrilling world of sports with highlights from competitions around the globe. From the Olympics to major league showdowns, this blog captures the excitement, triumphs, and memorable moments that define the global sports scene."
    },
    {
        "id": 23,
        "title": "Sports Buzz: Highlights from Around the World",
        "tags": ["Sports", "Athletics", "GlobalCompetition"],
        "body": "Dive into the thrilling world of sports with highlights from competitions around the globe. From the Olympics to major league showdowns, this blog captures the excitement, triumphs, and memorable moments that define the global sports scene."
    }
]

const tags =[
    {
        "_id": "1",
        "name": "Food",
        "subtags": [
            "Cultural foods",
            "Western foods",
            "Vegetarian cuisine",
            "Famous dishes",
            "Popular desserts",
            "Healthy Eating",
            "Cooking Tips",
            "Local Cuisine"
        ]
    },
    {
        "_id": "2",
        "name": "Travel",
        "subtags": [
            "Adventure",
            "Cultural exploration",
            "Beach destinations",
            "Famous landmarks",
            "Off-the-beaten-path",
            "Solo Travel",
            "Travel Tips",
            "Budget Travel"
        ]
    },
    {
        "_id": "3",
        "name": "Sport",
        "subtags": [
            "Football",
            "American football",
            "Wrestling",
            "Formula",
            "Tennis",
            "Badminton",
            "Cricket",
            "Swimming",
            "Popular sports events",
            "Athlete spotlights",
            "Extreme Sports",
            "Sports Analysis"
        ]
    },
    {
        "_id": "4",
        "name": "Technology",
        "subtags": [
            "Programming",
            "Artificial intelligence",
            "Cybersecurity",
            "Innovative tech",
            "Future tech trends",
            "Cloud Computing",
            "DevOps",
            "Software Engineering",
            "Tech Industry News",
            "Camera Gear",
            "Photography Software",
            "Editing Tools"
        ]
    },
    {
        "_id": "5",
        "name": "Music",
        "subtags": [
            "Rock",
            "Hip-hop",
            "Classical",
            "Chart-topping hits",
            "Up-and--coming artists",
            "Music Production",
            "Album Reviews"
        ]
    },
    {
        "_id": "6",
        "name": "Science",
        "subtags": [
            "Astronomy",
            "Biology",
            "Physics",
            "Groundbreaking discoveries",
            "Scientific breakthroughs",
            "Environmental Science",
            "Chemistry",
            "Earth Science"
        ]
    },
    {
        "_id": "8",
        "name": "Programming",
        "subtags": [
            "Web development",
            "Data science",
            "Mobile app development",
            "Coding best practices",
            "Coding Challenges",
            "Programming Languages",
            "Code Reviews",
            "Software Architecture"
        ]
    },
    {
        "_id": "9",
        "name": "Photography",
        "subtags": [
            "Landscape Photography",
            "Portrait Photography",
            "Street Photography",
            "Wildlife Photography",
            "Photography Tips",
            "Digital Art",
            "Graphic Design",
            "Illustration",
            "Artistic Techniques",
            "Creative Process",
            "Multimedia Art",
            "Visual Storytelling"
        ]
    }
]




module.exports = {articles,tags}