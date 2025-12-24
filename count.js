

// declare global constants
const reviewers = [  // reviewer list
    {
        "name": "Tuan",
        "color": { "mandatory": "rgb(244, 67, 54)", "optional": "rgba(244, 67, 54, 0.5)" },
        "students": [
            // to check
            "Michael Thomsen", "Michele Velastri",
            // sep25
            "Maximilian Rödiger", "Tom Schorn", "Mary Sprague", "Ali Ahmed", "Lior Peleg",
            // to check
            "Oleksandr Dovgusha",
            // aug25
            "Mohamed Tababi", "Ali Sahin", "Marharita Bykadorova", "Mario Franze",
            // july25
            "Danilo Proietto", "Aviv Avidan", "Vlad Grigoryev", "Jan-Paul Wass",
            // to check
            "Robert Vaduva",
            // may25
            "Dr Anuj Nandy", "Inka Janssen", "Ephson Effa Guakro Asare", "Fernando Curiel",
            "Gajanan Borade",
            // to check
            "Gregory Dearing", "Noel Yildiz", "Diego-uwe Zang",
            // apr25
            "Khesrau Noorzaie", "Lukas Borchmann", "Dennis Lahrmann", "Ronny Borries",
            "Youssef Maach", "Kristina Krauberger",
            // to check
            "Johannes Lewen", "Haryneide Dala", "Jan Donath", "Constantin Knappe",
            "Andrea Rusch",
            // mar25
            "Maximilian Hersam", "Patrick Zajonz", "Markus Huckriede", "Christian Dre",
            "Aline Janke",
            // to check
            "Sara Hajbane", "Raquel Leyva", "Robert Pluntke", "Jukka Talvio",
            // jan25
            "Lara Kamper",
            // dec24
            "Koray Akman", "Lee Stevenson", "Ateet Bahmani", "Phil Wolframm", "Moreno Barison",
            // nov24
            "Martha Pape", "Mohsen Ramezanzadeh", "Manasa Kempapuram", "Peyman Farahani",
            "Sarra Mabrouk", "Chris Hermann", "Denis Kreuzer",
            // oct24
            "Neha Singhal", "Stefanie Nguyen", "Reshma John", "Georgios Oikonomou",
            "Dimitar Dimitrov",
            // sep24
            "Marcos Nkwenti Cho", "Hoang Dang", "Amir Dehestani", "Marina Romero",
            "Mark Wernthaler", "Preethi Sivakumar", "Veronica Martinez-Gallego",
            "Kevin Hoffmann", "Lina Dahlhaus", "Jan-Philipp Gutt", "Christina Kloos",
            "Mohamad Kharata", "Ruslan Taran",
            // july24
            "Vladyslav Sakharnyi", "Evangelos Tsakoudis", "Sabahat Akcay", "Dolores Ramos",
            "Félix Bote", "Maciej Nogaj", "Maria Lazareva", "Farshid Mousavi",
            "Andreas Stoehr", "Siwar Ibrahim", "Gerald Ezeani", "Andre Schumacher",
            "Victorine Mara Mbondi", "Pooja Singh", "Dominik Valls", "David Unger",
            // may24 fulltime
            "Reza Barzegar", "Helge Friedel",
            // may24 fast paced
            "Mohammad Bayasi", "Ifeanyi Oraelosi", "Adrian Herzberger", "Alexander Kummerer",
            // mar24 fulltime
            "Divya Shahane", "Emanuele Napoli", "Alberto Ojeda", "Aruna Nadimpalli",
            "Ismail Mangal", "Artem Vologdin", "Felix Torres", "Edina Adzem",
            "Ahmed Abdirisak", "Maria Fischer", "Ines Rahrah", "Kamal Laarichi",
            "Yutaka Kobayashi", "Walter Cortes", "Elis Hnatiuk", "Antonio Guerrero",
            // mar24 fast paced
            "Varsha Rana", "Milos Tadic", "Mami Kurokawa", "Yadentra Mapuranga",
            // jan24 fulltime
            "Vasanthy Groney", "Mohammad Hiza", "Damien Lando", "Plamena Paskaleva",
            "Nebiel Mohammed",
            // jan24 fast paced
            "Jonas Happ", "Alireza Kargar", "Svea Schaefer",
        ]
    },
    {
        "name": "Nhung",
        "color": { "mandatory": "rgb(65, 105, 225)", "optional": "rgba(65, 105, 225, 0.5)" },
        "students": [
            // sep25
            "Bogdan-Valentin Vega", "Hasmik Hovhannisyan", "Fabienne Kuntz", "Schamja Shahaqa",
            "Obokhuai Imobighe Ehimika", "Srijana Kayastha",
            // aug25
            "Martin Siml", "Rassul Kaval", "Viktor Lammel", "Nils Anders",
            // july25
            "Marcel Erbas", "Ilyas Sülen", "Robert Ocarroll",
            // may25
            "Johnatan Kleefisch", "Lourdu Paulraj", "Manu Mohan",
            "Misael Romero", "Nithya Srinivasan",
            // apr25
            "Sandra Gharaibeh", "Precious Oladapo", "Francisco Hernandez", "Patrick Bauer", "Marie Hirte",
            // mar25
            "Alline Wamsser", "Recep Fincan", "Carina Amann", "Michael Flaig", "Eugen Iwliew",
            // dec24
            "Natalie Arras", "Reda Meaari", "Raquel Garcia Leyva", "Akshay Gite", "Luis Gómez",
            // nov24
            "Lee Taylor", "Daniel Brandt", "Melody Egwuchukwu", "Martin Enke", "Rim Saidi",
            // oct24
            "Hannes Pickel", "Lemont-Kim Mrutschock", "Yassine Aberchah",
            "Kehalit Mersha", "Milton Echeverri",
        ]
    },
    {
        "name": "Alejandro",
        "color": { "mandatory": "rgb(46, 139, 87)", "optional": "rgba(46, 139, 87, 0.5)" },
        "students": [
            // sep25
            "Ashish Kumar Singh", "Harun Ayartürk", "Jan Reichenbach",
            "Ammad Jamil Chaudhry", "Amer Sabbagh",
            // aug25
            "Sullivan Janisch", "Martyna Gudwilowicz", "Enes Atmaca", "Alexander Müller",
            // july25
            "Mohamed Azzam", "Muhammad Wörsdörfer", "Manish Bilgaye",
            // may25
            "Olga Chirkova", "Salman Rehman", "Sandra Spiegelberg",
            // mar25
            "Felix Glöß", "Paiman Davarifard", "Swaroop Yalagondahalli",
            "Michael Adjei", "Jens Mayer",
            // feb25
            "Denny Marx", "Phil Koj", "Beatriz Preuss", "Oleg Guzik", "Edouard Groell",
            // jan25,
            "Ehsan Mehrali", "Richard Ludwig", "Jürgen Kienesberger",
            "David Wyatt",
            // dec24
            "Denny Jauch", "Joshua Paoletti", "Patrick Lengties",
            // nov24
            "Amulya Bommaraboina", "Jon-Mark Hampson", "Lina Anaso", "Jacob Houkes",
            "Anca Afloroaei", "Stephen Russell", "Alex Bunting", "Amanda Matthews",
            // july24 (from Nhung)
            "Niveditha Pasumarthi", "Matthew Williams", "Piotr Kulbacki",
            "Sahelemariam Kitaw",
            // before july24 (from Nhung)
            "Aroosha Basharat", "Welat Eren", "Hassnien Shreen", "Wendy Valbuena", "Karim Maged",
            "Martin Reschke",
            // sep24
            "SairamVarma Gadiraju", "Gerardo Nolasco", "Yassine Aberchah", "Martin Kaiser",
            "Suma Hotti",
            // july24 + may24
            "Srimoyee Basu", "Marijana Iliev", "Xhefri Murati", "Essam Alshikh",
            "Johannes Schreiber", "Denys Lavrentiev", "Salvis Are", "Asmamaw Yehun",
            "Maximilian Schmidt", "Manvir Kunar", "Igor De Albuquerque", "Ann Varghese",
            "Ron Mccoy", "Lydia Dijkstra", "Abdallah Sawaeer", "Manuel Putzu",
            "Saskia Sack", "Tom Alexander", "Tom Bunzel", "Xiaoman Wu", "Alperen Yillikci",
            "Matthias Von Mach", "Yevhen Kifiuk", "Narayan Ghimire", "Fatemeh Sohrabi",
            "Yoann Claude", "Gerrit Hillebrecht", "Phillip Bauer", "Vashishth Shukla",
            "Sangamithra Muthamizhan", "Mohammed Al-Yassir", "Sophie Houser", "Andriy Bulashov",
            "Miroslav Lucic", "Matthias Buettner", "Goran Csonkity", "Daniel Siebert"
        ]
    },
    {
        "name": "Shahriar",
        "color": { "mandatory": "rgb(128, 128, 128)", "optional": "rgba(128, 128, 128, 0.5)" },
        "students": [
            // sep25
            "Mohamed Karim Oudrhiri", "Ulrich Riemenschneider", "Saeid Shafieian",
            "Heidi Cordero", "Vanessa Dreßler",
            // aug25
            "Laurin Schmidtmer", "Quincy Jefferson", "Shima Khaki", "Merve Battal",
            // july25
            "Grigor Muradyan", "Isabel Hohmann", "Marvin Sorgatz", "Fabian Reitzle",
            // june25
            "Andreas Kuhl", "Jason Bladt", "Eden Lavorato",
            "Thomas Merbach", "Philipp Rosenzweig", "Balthasar von Weymarn",
            // may25
            "Sabine Modjarrad", "Samuel Kugler", "Sargis Heiser", "Stefan Schubert",
            "Thomas Breckenfelder",
            // feb25
            "Martin Haferanke", "Giouxel Kasaika", "Johannes Tritt", "Marcos Devoto",
            "Omid Davoudi", "Thilan Stiller", "Ayelen Kirchhoff", "Adewale Martin Adedeji",
            "Tabea Erkelenz",
            // jan25
            "Yevheniia Belohai", "Dennis Charles", "Felix Ostermann",
            // nov24
            "Marco Leberling", "Richard Nürnberger", "Alexander Greif", "Marcel Mann",
            // before july24 (from Nhung)
            "Akshay Satheesh", "Okan Sechrin", "Hameedullah Shirzay",
            "Polina Vasiuk", "Lennart Zut", "Max Schmidt", "Ibrahim Bah", "Kimberly Canas",
            "Lais Domiciano", "Maria-Cristina Fadgyas", "Hadieh Bajestani",
            // oct24
            "Ali Al-Kheder", "Maik Scherder", "Joud Hajal", "Sven Sulzer",
            // sep24
            "Philipp Spitzley", "Grayson Earle", "Vitalii Ptichkin", "Gretchen Schadebrodt",
            "Jerome De Dios", "Love Okum", "Abigail Conteh", "Eike Eckold", "Oscar Cardenas",
            "Lea Von Freital", "Philipp Spitzley", "Nikola Brajkovic", "Katharina Burchin",
            "Jana Albrecht", "Kenneth Meier", "Nico Wittemann", "Christian Lesemann",
            "Benjamin Becker", "Marten Zöllner", "Lisa Koenen", "Felipe Pietzsch",
            "Volker Kolauch", "Michel Gaede",
            // july24
            "Hao Nguyen", "Tolga Uzun", "Florentine Moehrle", "Raza Ahmad",
            "Sukhrob Kadirov", "James Balloqui", "Kwangu Silupya", "Erick Maruhn",
            "Mircea-Ionut Ardelean", "Katarina Sauder", "Elena Bai", "Frederic Grignard",
            "Sam James", "Alireza Broujerdi", "Neringa Dijokaite", "Samantha Laguna",
        ]
    },
    {
        "name": "Tomer",
        "color": { "mandatory": "rgb(184, 134, 11)", "optional": "rgba(184, 134, 11, 0.5)" },
        "students": [
            // sep25
            "Posh Stegemann", "Samet Medik", "Matthias Riewe", "Atila Ulas", "Ingo Schütte",
            // aug25
            "Kilian Rutschke", "Alexander Reschke", "Kathrin Freytag", "Walter Ellis",
            // july25
            "Aleksandr Sudin", "Ledio Durmishaj", "Sebastian Schnichels",
            // may25
            "Valentin Ionescu", "Waad Hamoud", "Wenzheng Cai", "Zahra Rauf", "Abdullah Yüksekdag",
            // apr25
            "Ahmad Khalil", "Khesrau Noorzaie", "Rocco Drafz", "Florian Hoti", "Fabio Morena",
            // mar25
            "Janis Löns", "Jan Friedrich", "Anna Pohle", "Sebastian Hochstädt",
            "Julia Di Benedetto", "Dorian Nagaj", "Thomas Rennefeld",
            "Muharrem Topal", "Alexej Platizin", "Wanja Kneib",
            // feb25
            "André Weigel", "Nikolaus Wrede", "Maximilian Wiese", "Vasanthi Kuppuswamy",
            "Rahmatullah Armani", "Fabian Wohlgemuth", "Andrey Eremeev", "Nadim Almasri",
            "Saifan Aremenak", "Justus Decker",
            // jan25
            "Erik Kling", "Philipp Killer", "Finesa Shala", "Jithu Karuvan",
            "Muhammad Mohsin", "Liza Jauregui", "Sonam Panwar",
            // dec24
            "Marcel Bobolz", "Markus Beermann", "Andrew Owusu", "Margarita Moeslein",
            "Lukasz Trzcinski", "Xiaoheng Chen", "Nalan Kara", "Elinor Kotzott",
            "Alexander Thielemeier", "Gejtian Mustafa",
            // nov24
            "Nicoleta Burlacu", "Alexander Felsinger", "Alexander Krause", "Reiner Jaeger",
            "Otto Reifschneider", "Lukas Schiele", "Eugen Iwliew", "Viktoria Grolik",
            "Christian Matuszak", "Roman Kowalczyk",
            // oct24
            "Dean Didion", "Nemanja Milenkovic", "Fouad Gantri", "Ana Contreras",
            "Joshua Schmidt", "Nahom Zerezghi", "Eric Heinemann", "Aida Khabazvahed",
            // sep24
            "Natasha Teague", "Timothy McWilliams", "Martin Schneider", "Sahar Yasa",
            "Jorge Martinez", "Dominik Peukert", "Ruchi Puri", "Juliana Trombetta",
            "Ronny Seidel", "Robin Juchems", "Md Khondokar", "Sivaneswaran Sutharsan",
            "Denis Englert", "Lutz Oschkinat", "Harutyun Saribekyan", "Mario Rose",
            "Simon Heinrich",
        ]
    },
    {
        "name": "Shoval",
        "color": { "mandatory": "rgb(139, 0, 139)", "optional": "rgba(139, 0, 139, 0.5)" },
        "students": [
            // sep25
            "Burak Schmitz Ensan", "Majd Shoaip", "Murat Danis",
            "El Boulahfa", "Egbert Brendle",
            // aug25
            "Mark Lünnemann", "Claus Träger", "Sebastian Gusko", "Ibrahim Sefa",
            // july25
            "Andreas Glücks", "Albert Sauer", "Dennis Rowlin",
            // june25
            "Elizabeth Gyamfi", "Mandy Gerdel", "Lucas Peters", "Barzan Sindi",
            "Anas Sardarzai",
            // may25
            "Alexandra Hartung", "Aryan Sakhi", "Calvin Kuven",
            "Christian Von Zobel", "Christopher Rosa",
            // apr25
            "Martin Koch", "Dirk Kuga", "Lucas Rennebach",
            // feb25
            "Felix Kowalski", "Diego Castillo", "Dirk Fischer", "Wasim Alkousa", "Joshua Väth",
            // jan25
            "Michael Hindelang", "Paula Schweppe", "Suyanthan Ganeshalingam", "Nikita Förster",
            "Mert Zafer Mutlu",
            // dec24
            "David Kinter", "Sonar Marone", "Yaroslav Kravchuk", "Maria Dick",
            "Raffael Engelbart", "Manuel Steiert", "Sadia Aschrafi",
            "Gerd Furmanek", "Nico Schulze", "Nicolas Heyer", "Philippe Woodruff",
            "Marc Haske", "Mahnoosh Montazer", "Ozan Cicek",
            // nov24
            "Tom Faber", "Rafiq Mohammad", "Yusuf Bulukgiray", "Viktoria Titova",
            "Sandra Stoßberger", "Lars Engel", "Tim Oodes", "Daniel Kilders",
            "Sajda Tabassum", "Malgorzata Kielar",
            // oct24
            "Louise Debatin", "Mohamad Alarabi", "Kirill Rakhmatulin", "Daniil Kharaman",
            "Marcus Munkert", "Lisa Koenen", "Oguz Babayigit", "Andrea Ruiz", "Nicolas Quiñones",
            "Nikoloz Chachia",
        ]
    },
    {
        "name": "David",
        "color": { "mandatory": "rgb(210, 105, 30)", "optional": "rgba(210, 105, 30, 0.5)" },
        "students": [
            // sep25
            "Marcus Heller", "German Schreiner", "Carsten Ziggel", "Omid Moraveji", "Amir Dahan",
            // aug25
            "Christopher Sporn", "Friedrich Boss", "Mad Din", "Bastian Westholt",
            // july25
            "Adam Ibrahim", "Davut Zdemir", "Alena Drobner",
            // june25
            "Jonas Westphal", "Markus Haastert", "Eric Stangel", "Andreas Alexi",
            "Luka-Alexander Metz",
            // may25
            "Eric Drägerdt", "Felix Mönig", "Friedemann Mücket", "Henning Tepe", "Katy Lübben",
            // apr25
            "Tobias Drobisch", "Jakob Leibel", "Konrad Tesch", "Maxim Martin", "Inna Kylivnyk",
            // mar25
            "Stuart Mclean", "Haryneide Floriano", "Martin Siml", "Mad Din",
            "Veronika Filipova", "Kiran Dhuppe", "Jörn Achtelik", "Harshkumar Patel",
            "Abdelwahab Hamadi", "Joshua Swain",
            // feb25
            "Alina Marcus", "Anastasia Kießig", "Dominik Melzner", "Fran Vizcaíno",
            "Mustafa Ödecik", "Michael Fechner",
        ]
    },
    {
        "name": "Asaf",
        "color": { "mandatory": "rgb(121, 85, 72)", "optional": "rgba(121, 85, 72, 0.5)" },
        "students": [
            // june25
            "Abhisakh Sarma", "Sayed Mahbobi", "Charles Nema", "Johannes Mashegwana",
            // may25
            "Marc Maier", "Marcos Menozzi", "Moritz Brosch", "Nils Steinmetz",
            "Ronny Stößer",
            // apr24
            "Luna Schnepf", "Lars Willuweit", "Kai Hauser", "Christin Albrecht", "Abdo Almenwer",
            "Enrico Harder", "Victor von Reiche",
        ]
    },
    {
        "name": "Varsha",
        "color": { "mandatory": "rgb(188, 212, 1)", "optional": "rgba(188, 212, 1, 0.5)" },
        "students": [
            // sep25
            "Simon Schlachta", "Francis Koine", "Stefan Henning", "Davide Sciancalepore",
            "Ljubica Coric", "Aleksandar Gajic",
            // aug25
            "Jöran Gläser", "Alisa Bakovic", "Anastasia Foth", "Leon Von Detten",
            // july25
            "Emilio Quezada", "Rana Alnatsheh", "George Too", "Hamza Talbi",
            "Dmitrijs Kulikovskis",
            // june25
            "Andreas Straub", "Hannes Dieckmann", "Anuj Nandy", "Henrik Horn",
            "Michael Prempeh", "Peridian Tabe",
        ]
    },
];


function countStudentsPerReviewer(reviewers) {
  const counts = reviewers.map(r => ({
    name: r.name,
    count: Array.isArray(r.students) ? r.students.filter(Boolean).length : 0
  }));

  // Print summary per reviewer
  console.log("Student counts by reviewer:");
  counts.forEach(c => {
    console.log(`${c.name}: ${c.count}`);
  });

  // Print total
  const total = counts.reduce((sum, c) => sum + c.count, 0);
  console.log(`\nTotal students: ${total}`);

  return counts;
}

// Example usage:
countStudentsPerReviewer(reviewers);