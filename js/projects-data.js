// js/projects-data.js

const projectsData = [
  {
    id: "jukebox",
    title: "Jukebox 2.0",
    shortDesc: "An interactive music device that translates color input into sound.",
    cardImage: "assets/project-cards/jukebox.png",
    
    // NEW: Flexible content blocks! Mix text and images however you want
    content: [
      {
        type: "text",
        heading: "Overview",
        text: "Jukebox 2.0 is an exploration of synesthesia and accessibility in music creation. By scanning colors, users can generate corresponding musical notes, allowing for an intuitive, visual approach to composition."
      },
      {
        type: "image",
        src: "assets/projects/jukebox/hero.jpg",
        size: "large" // Options: small, medium, large, full
      },
      {
        type: "text",
        heading: "The Challenge",
        text: "Traditional music creation requires knowledge of music theory and instrumental technique. This creates a barrier for many people who want to express themselves musically but don't have formal training."
      },
      {
        type: "images-row",
        images: [
          "assets/projects/jukebox/sketch1.jpg",
          "assets/projects/jukebox/sketch2.jpg"
        ]
      },
      {
        type: "text",
        heading: "Solution",
        text: "The Jukebox uses a color sensor to detect hues and translates them into musical notes. Red might be C, orange is D, and so on. Users can paint, arrange colored objects, or use existing art to create melodies."
      },
      {
        type: "image",
        src: "assets/projects/jukebox/final.jpg",
        size: "full"
      }
    ]
  },
  
  {
    id: "steadystix",
    title: "Steady Stix",
    shortDesc: "A redesigned pair of chopsticks that improves stability for trembling hands.",
    cardImage: "assets/project-cards/steady-stix.png",
    
    content: [
      {
        type: "text",
        heading: "Project Overview",
        text: "Designed for individuals with Parkinson's or essential tremors, Steady Stix utilizes weighted ergonomics and a specialized grip mechanism to counteract hand tremors, restoring dignity and the joy of dining with chopsticks."
      },
      {
        type: "image",
        src: "assets/projects/steadystix/main.jpg",
        size: "large"
      },
      {
        type: "text",
        text: "Through research and user testing, we discovered that adding strategic weight distribution could significantly reduce the impact of tremors on eating."
      },
      {
        type: "images-row",
        images: [
          "assets/projects/steadystix/process1.jpg",
          "assets/projects/steadystix/process2.jpg",
          "assets/projects/steadystix/process3.jpg"
        ]
      }
    ]
  },
  
  {
    id: "sandsiege",
    title: "Sand Siege",
    shortDesc: "A modular beach game that reimagines sandcastle building as collaborative play.",
    cardImage: "assets/project-cards/sand-siege.png",
    
    content: [
      {
        type: "text",
        heading: "What is Sand Siege?",
        text: "Sand Siege gamifies the beach experience. It provides modular, interlocking plastic components that allow teams to build structures quickly, protecting their 'core' from rising tides or opposing teams. It combines physical activity with architectural strategy."
      },
      {
        type: "image",
        src: "assets/projects/sandsiege/gameplay.jpg",
        size: "full"
      }
    ]
  },
  
  {
    id: "dripless",
    title: "Dripless",
    shortDesc: "A hands-free umbrella-drying system developed through rapid prototyping.",
    cardImage: "assets/project-cards/dripless.png",
    
    content: [
      {
        type: "text",
        text: "Solving the issue of wet floors in public lobbies, Dripless is a mechanical solution that uses centrifugal force and microfiber absorption to dry umbrellas in seconds without using electricity."
      },
      {
        type: "image",
        src: "assets/projects/dripless/concept.jpg",
        size: "medium"
      }
    ]
  },
  
  {
    id: "costumes",
    title: "Costumes",
    shortDesc: "A multi-year exploration of wearable design and character expression.",
    cardImage: "assets/project-cards/costume.png",
    
    content: [
      {
        type: "text",
        text: "This collection showcases various fabrication techniques including sewing, foam-smithing, and 3D printing to bring fictional characters to life. It explores the relationship between the human body and sculptural forms."
      },
      {
        type: "images-row",
        images: [
          "assets/projects/costumes/costume1.jpg",
          "assets/projects/costumes/costume2.jpg"
        ]
      }
    ]
  },
  
  {
    id: "freelens",
    title: "FreeLens",
    shortDesc: "A finance-tracking app concept designed to help freelancers manage expenses.",
    cardImage: "assets/project-cards/freelens.png",
    
    content: [
      {
        type: "text",
        text: "FreeLens simplifies the complex world of freelance taxes. It automatically categorizes expenses, estimates quarterly tax payments, and generates invoices, allowing creatives to focus on their work rather than their spreadsheets."
      },
      {
        type: "image",
        src: "assets/projects/freelens/ui-mockup.jpg",
        size: "large"
      }
    ]
  },
  
  {
    id: "folded",
    title: "Folded Reality",
    shortDesc: "An exploration of popup book mechanics using laser-cut paper and wood.",
    cardImage: "assets/project-cards/folded-reality.png",
    
    content: [
      {
        type: "text",
        text: "Folded Reality tests the limits of laser cutting technology. By creating complex living hinges and interlocking joinery, this project turns rigid materials like wood and acrylic into fluid, foldable kinetic sculptures."
      },
      {
        type: "image",
        src: "assets/projects/folded/final-piece.jpg",
        size: "full"
      }
    ]
  }
];