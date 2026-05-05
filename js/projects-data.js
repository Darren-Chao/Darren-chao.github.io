// js/projects-data.js

const projectsData = [
  {
    id: "node",
    title: "NODE",
    modalTitle: "NODE",
    shortDesc: "How Can We Bridge the Gap Between Design and Engineering?",
    cardDesc: "A modular design engineering kit that lets students design cardboard creations using plug-and-play electronics.",
    cardImage: "assets/project-cards/node.webp",

    metadata: {
      role: "Lead Product Designer, Hardware & Software Specialist",
      timeline: "Ongoing",
      collaborators: "Jialong Lai, Ruijia Diao",
      tools: "Arduino, 3D Printing, Laser Cutting, User Research, Physical Fabrication"
    },

    content: [
      { type: "image", src: "assets/project-images/node/1.webp", size: "large", caption: "Final NODE truck build using cardboard structure, motors, and NODE connectors." },
      { type: "text", text: "<span class=\"notice-tag\">NOTICE:</span> This is an **ongoing project**. What’s shown here is a working system in development, not a finalized product. The final product would be showcased at the **RISD Grad Show from 5/22 to 5/30**" },
      { type: "text", heading: "Overview", level: "primary", text: "NODE is a **modular robotics system designed for middle school students** to learn **design, engineering, and iteration** through building physical, interactive cardboard structures." },
      { type: "text", text: "The system combines **cardboard-based construction, plug-and-play electronics, and simple programming** to help students move from physical ideas to working systems." },
      { type: "text", text: "At its core, NODE is trying to answer a simple question: **what if building robots felt as natural as building with cardboard?**" },

      { type: "image", src: "assets/project-images/node/kit-lay-flat.webp", size: "large", caption: "NODE starter kit components including motors, connectors, and microcontroller unit." },
      { type: "text", heading: "What the system includes", level: "secondary", text: "The NODE system is made up of three main parts:" },
      { type: "list", items: ["A central microcontroller module (the “brain”)", "DC motors with color-coded plug-and-play connections", "Custom structural connectors for cardboard construction"] },
      { type: "text", text: "The kit also includes pre-cut cardboard for the first guided build, which is a small truck designed to introduce movement, structure, and basic system thinking." },
      { type: "text", text: "The first guided build is a **small truck** because it is familiar and easy to understand, providing a natural entry point into robotics through simple movement and structure." },

      { type: "text", heading: "Why this matters", level: "secondary", text: "Most robotics kits today fall into **two extremes**." },
      { type: "text", text: "They are either **highly structured and restrictive**, or **completely open-ended but overwhelming** for beginners." },
      { type: "text", text: "NODE sits in the middle." },
      { type: "text", text: "It gives students **enough structure to succeed early on, but enough openness to start inventing** once they understand the basics." },
      { type: "text", text: "The goal is not just to build a robot. It is to help students **understand how physical systems behave and how design decisions affect outcomes**." },

      { type: "text", heading: "Who this is for", level: "secondary", text: "NODE is designed for **middle school students**, but it also works in **high school classrooms, maker environments, and home learning setups**." },
      { type: "text", text: "It is especially useful in settings where students are new to engineering concepts and need something tangible to start from." },
      { type: "text", text: "Teachers can use it for structured lessons, while individual users can explore it more freely." },

      { type: "text", heading: "Why cardboard", level: "secondary", text: "Cardboard is often the first prototyping material for designers and engineers." },
      { type: "text", text: "It is **fast, cheap, and forgiving**, which makes it ideal for early-stage experimentation." },
      { type: "text", text: "In NODE, **cardboard is not just a base material. It is part of the learning process**." },
      { type: "text", text: "Students can **test structure, strength, movement, and design ideas quickly** without worrying about cost or permanence." },
      { type: "text", text: "They can also combine it with glue, tape, drawing, and other materials to extend or reinforce their builds." },

      { type: "text", heading: "How it works", level: "secondary", text: "Students start with a **guided build: a simple cardboard truck**." },
      { type: "text", text: "This first project introduces the core system step by step:" },
      { type: "list", items: ["building structure", "connecting motors", "seeing movement happen in real time"] },
      { type: "text", text: "Once complete, students can connect the system to a computer and begin adjusting behavior like speed and direction." },
      { type: "text", text: "From there, the system **gradually becomes more open-ended, encouraging students to modify, redesign, and eventually build their own projects**." },

      { type: "text", heading: "Landing page and product system", level: "primary", text: "As part of the project, I also designed a full landing page to communicate the system and simulate how this product would launch in real world scenarios." },
      { type: "text", text: "It connects education, makers, and product information into one ecosystem." },
      { type: "iframe", src: "https://darrenchao.com/node.github.io/" },
      { type: "text", text: "[Click here to open the landing page in a new tab ↗](https://darrenchao.com/node.github.io/)" },

      { type: "text", heading: "Design process", level: "primary", text: "This project went through **multiple physical and digital iterations across hardware, structure, and system design**." },

      { type: "text", heading: "Connector system iteration", level: "secondary", text: "We started with a more **boxy connector design**, but it was difficult for students to assemble and sometimes **caused sharp edges** during use." },
      { type: "images-row", images: ["assets/project-images/node/connector-iteration-1.webp", "assets/project-images/node/connector-iteration-2.webp", "assets/project-images/node/connector-iteration-3.webp"], caption: "Evolution of NODE connectors from early rigid geometry to final claw-based flexible system." },
      { type: "text", text: "We moved toward a **rounded claw-based system** that grips cardboard more safely and allows for faster assembly and disassembly." },
      { type: "text", text: "The final design uses a **tension-based mechanism** where inserting cardboard naturally tightens the grip, making the structure more stable once built." },

      { type: "text", heading: "Motor system iteration", level: "secondary", text: "We initially used generic DC motors, but later moved toward a **more controlled modular motor unit with a protective shell**." },
      { type: "images-row", images: ["assets/project-images/node/dc-motor-without-shell.webp", "assets/project-images/node/dc-motor-with-shell.webp"], caption: "Motor system evolution showing exposed motor prototype and final protected modular casing." },
      { type: "text", text: "The updated design allows for **dual-direction mounting and better structural integration** into cardboard builds." },
      { type: "text", text: "This also made it easier for students to **think in terms of directional motion instead of just wiring**." },

      { type: "text", heading: "Microcontroller unit", level: "secondary", text: "The system is built around an **Arduino Uno**, which I used as a starting point for rapid prototyping. I began on a breadboard, designing a **custom motor control circuit** since most off-the-shelf drivers only support two DC motors. Using N2222 transistors, I was able to **control four motors directly through PWM signals** from the Arduino, allowing for speed control without adding unnecessary complexity." },
      { type: "text", text: "I then moved on to designing a **self-contained power system** using a LiPo battery. Since the battery outputs around 3.7V, I integrated a **5V step-up converter** to properly power the system. Once the circuit was stable, I transitioned from breadboard to a **soldered prototyping PCB** to improve durability, reduce wiring complexity, and make the system more compact. I also integrated a **power switch and USB-C support** for both data and charging." },

      { 
        type: "images-row", 
        images: [
          { src: "assets/project-images/node/microcontroller-pcb-initial-drawing.webp", caption: "Initial circuit planning for custom motor control." },
          { src: "assets/project-images/node/microcontroller-breadboard.webp", caption: "Breadboard prototype used to validate motor control and power system." },
          { src: "assets/project-images/node/microcontoller-pcb-soldered.webp", caption: "Soldered prototyping PCB consolidating the full system." }
        ]
      },

      { type: "text", heading: "Housing iterations", level: "secondary", text: "In parallel with the electronics, I iterated on the enclosure design." },
      { type: "text", text: "The housing needed to:" },
      { type: "list", items: ["fit the battery, PCB, and wiring", "expose USB ports correctly", "include a power switch", "support color-coded motor outputs", "remain safe and easy for students to handle"] },
      { type: "text", text: "I went through **multiple shell iterations to balance internal constraints with external usability**. This is still an active area of development." },
      { type: "image", src: "assets/project-images/node/microcontroller-shell-iteration.webp", size: "large", caption: "Iterative development of the NODE microcontroller enclosure." },

      { type: "text", heading: "System testing", level: "secondary", text: "We tested how students interact with the system, especially **how easily they can attach connectors and understand movement feedback**." },
      { type: "image", src: "assets/project-images/node/user-test-placeholder.webp", size: "large", caption: "Early user testing with students assembling and modifying builds." },
      { type: "text", text: "This **informed decisions around connector tightness, motor responsiveness, and overall usability**." },
      { type: "text", heading: "Packaging and system design", level: "secondary", text: "We also designed a **fold-out toolkit style box that opens into an organized workspace**." },
      { type: "text", text: "The goal was to make the kit feel like a **usable workstation rather than just storage**." },
      {
        type: "images-row",
        images: [
          { src: "assets/project-images/node/package-concept-render.webp", caption: "Render of NODE packaging designed as a fold-out toolkit." },
          { src: "assets/project-images/node/package-template.webp", caption: "Production template used for cutting and structuring packaging design." },
          { src: "assets/project-images/node/box-prototype.webp", caption: "Physical mock-up of fold-out packaging system." }
        ]
      },
      { type: "text", text: "We are currently in the process of making it to scale with production methods in mind, including using a UV printer to create the logo." },

      { type: "text", heading: "Branding and system identity", level: "secondary", text: "The visual identity was designed to feel **playful but still technical**." },
      { type: "text", text: "We explored multiple color systems and settled on green, white, pink, and gray as a way to balance clarity and approachability." },
      { type: "text", text: "The goal was to **avoid making it feel like a “toy kit” or an overly technical engineering tool**." },


      { type: "text", heading: "Current status", level: "primary", text: "NODE is still in active development." },
      { type: "text", text: "We are currently iterating on:" },
      { type: "list", items: ["microcontroller shell design", "curriculum and instruction booklet", "production readiness of components", "packaging and manufacturing workflow"] },
      { type: "text", text: "We are also speaking with educators to refine how the system fits into real classroom environments." }
    ]
  },

  {
    id: "jukebox",
    title: "Jukebox 2.0",
    modalTitle: "Jukebox 2.0",
    shortDesc: "How Might We Make Music Creating Easier and More Fun For Kids?",
    cardDesc: "An interactive music device that translates color input into sound.",
    cardImage: "assets/project-cards/jukebox.webp",

    metadata: {
      role: "Hardware Developer",
      timeline: "2 Weeks",
      collaborators: "Ellie Na, Yang Tian",
      tools: "Arduino, Custom PCB, Color Sensor, 3D Printing, Soldering"
    },

    content: [
      { type: "image", src: "assets/project-images/jukebox/1.webp", size: "large" },
      { type: "text", heading: "Context", text: "Many people never try composing music because traditional instruments and software require training. We wanted to explore whether **music creation could start from something much more familiar**." },
      { type: "text", text: "Drawing felt like the most natural place to begin. Children and beginners already use colors and patterns to express ideas, so we asked **whether those drawings could become music**." },
      { type: "text", heading: "The Idea", text: "Jukebox 2.0 is an interactive record player that **translates hand drawn color doodles into melodies**. Instead of writing musical notes, users draw long color patterns on paper and feed the strip into the device." },
      { type: "text", text: "A **color sensor reads the hues** as the paper moves through the mechanism. The system converts those colors into tonal groups and maps them to musical notes. The resulting melody **directly reflects the visual rhythm of the drawing**, turning color patterns into sound." },
      { type: "text", text: "The piece **reframes music making as a playful, intuitive activity**." },
      { type: "text", text: "The project was later exhibited as part of the **Connections** exhibition, which explored how **technology can bridge people and creative expression**." },
      { type: "image", src: "assets/project-images/jukebox/5.webp", size: "small" },
      { type: "text", heading: "Early Prototyping", text: "Development began with **rapid experimentation** to validate the sensing and sound system. I built early **breadboard prototypes that combined an RGB color sensor, microcontroller, and simple audio output** to test how color data could translate into tones." },
      { 
        type: "images-row", 
        images: [
          { src: "assets/project-images/jukebox/2.webp", caption: "CAD Model of Jukebox2.0" },
          { src: "assets/project-images/jukebox/3.webp", caption: "Circuit Prototype and Testing on Breadboard" },
          { src: "assets/project-images/jukebox/4.webp", caption: "Breadboard Connected to Jukebox Prototype" }
        ] 
      },
      { type: "text", text: "At the same time, we started exploring the physical form of the object through **quick enclosure sketches and 3D models**. We iterated through several shapes and proportions to create something that felt **playful and understandable as an interactive device** rather than a traditional instrument." },
      { type: "text", text: "The **color to sound algorithm was revised multiple times** to create melodies that felt more musically coherent while still preserving the spontaneity of drawing." },
      { type: "text", heading: "Final Fabrication", text: "As the system matured, I transitioned the electronics from prototyping boards to a **custom PCB** for stability and cleaner integration. I **soldered and assembled** the board, integrated the sensing and audio components." },
      { type: "text", text: "The final build **combined electronics, mechanical components, and a carefully fabricated enclosure**. Each part was finished and assembled by hand, bringing together sensing, sound, and motion into a cohesive object." },
      { type: "text", text: "The final artifact demonstrates how **physical interaction and computational translation can open creative practices to broader audiences, turning simple color doodles into musical compositions**." },
      { type: "image", src: "assets/project-images/jukebox/6.webp", size: "medium", caption: "The Team" }
    ]
  },

  {
    id: "steadystix",
    title: "Steady Stix",
    modalTitle: "Steady Stix",
    shortDesc: "Designing with Empathy for my Grandfather's Trembling Hands",
    cardDesc: "A redesigned pair of chopsticks that improves stability for trembling hands.",
    cardImage: "assets/project-cards/steady-stix.webp",

    metadata: {
      role: "Product Developer",
      timeline: "2 Weeks",
      collaborators: "Solo",
      tools: "Rhino, 3D Printing, Air Dry Clay, User Research"
    },

    content: [
      { type: "image", src: "assets/project-images/steadystix/1.webp", size: "large" },
      { type: "text", heading: "Overview and Background", text: "Steady Stix explores how to **make chopsticks more usable for people with hand tremors while preserving the familiarity and cultural meaning of traditional utensils**. Chopsticks require precise fingertip control and coordination, which can be difficult for elderly users, often leading to **frustration or loss of confidence during meals**. The goal was to create a solution that feels **natural, discreet, and respectful**, allowing users to maintain independence without drawing attention." },
      { type: "text", heading: "User Research and Personal Investigation", text: "Research focused on **hand biomechanics, tremor behavior**, and where the hand retains strength even when fine motor control declines. A key insight was that **the muscle between the thumb and index finger remains relatively strong**, suggesting an opportunity to create a **subtle anchoring feature that reduces slipping without requiring extra effort**. Observations and informal testing emphasized the importance of making the utensil **feel like normal chopsticks rather than a specialized tool**." },
      { type: "text", text: "I pushed myself to **explore a wide range of directions** to avoid settling too quickly, generating multiple concepts and filtering out ideas that felt bulky, unfamiliar, or stigmatizing." },
      { type: "images-row", images: ["assets/project-images/steadystix/2.webp", "assets/project-images/steadystix/3.webp", "assets/project-images/steadystix/4.webp"], caption: "Initial Sketches and Form Ideation" },
      { type: "text", text: "**Low fidelity prototyping** was done using existing chopsticks and air dry clay to quickly test grip concepts, anchoring shapes, and interaction feel. This allowed **rapid iteration** before committing to more refined forms." },
      { type: "text", text: "During this stage, **key constraints were defined** around usability, familiarity, elegance, manufacturability, and minimal force requirements." },
      { type: "list", heading: "Constraints", items: ["Must function similarly to traditional chopstick and feel similar to native users (intuitive, and does not feel like a new utensil)", "Must have an anchoring point to the hand that prevents chopsticks from slipping", "Must be easily manufactured (molded) and cheap", "Must be able to pick up food that are usually eaten with chopsticks (tested with food phantoms)", "Must be elegant and not draw attention to it. (does not scream disability, resembles normal chopsticks)", "Must not need too much force from fingertips to function", "Must be food safe", "Must be easy to clean", "Must be lightweight, easy to carry around", "Must survive multiple uses (be reusable for a long long time)"] },
      { type: "text", heading: "Physical Prototyping and Refinement", text: "The project then moved into **higher fidelity prototyping through 3D printing**, refining geometry, balance, and the connection between the sticks to ensure an **intuitive axis of rotation**." },
      { type: "images-row", images: ["assets/project-images/steadystix/5.webp", "assets/project-images/steadystix/6.webp", "assets/project-images/steadystix/7.webp"], caption: "Physical Prototype Iteration" },
      { type: "text", text: "Specifications such as **weight, durability, material safety, and long term usability** were formalized during this phase, alongside repeated testing to ensure the interaction **closely matched traditional chopsticks**." },
      { type: "list", heading: "Specifications", items: ["Less than 20g", "Total length: 230mm", "Maximum width (at hinge area): 30mm", "Maximum open distance between tips: 100 mm", { text: "Material must be food-safe, non-toxic, and dishwasher safe.", subItems: ["Prototype with PLA, Intended material: PPS"] }, "Must maintain structural integrity up to 80\u00b0C (for hot food use).", "Must withstand 100,000 open-close cycles without fracture or loss of elasticity.", "Axis of flexure: located 25% of total length from the top (opposite of food end)", "Edges must have radius \u2265 0.5 mm (no sharp edges)", "Expected lifespan: \u2265 2 years or 100,000 use cycles under normal household use."] },
      { type: "text", heading: "Final Outcome", text: "The final design is **sleek, lightweight, and visually indistinguishable from a refined pair of chopsticks**. The subtle stabilization feature supports steadier use **without signaling assistive intent**, helping remove any sense of stigma and allowing users to **dine with confidence**." },
      { type: "image", src: "assets/project-images/steadystix/123.webp", size: "large", caption: "Final Chopsticks - the SteadyStix" }
    ]
  },

  {
    id: "costumes",
    title: "Costumes",
    modalTitle: "Costumes",
    shortDesc: "My Most Original Passion for Making!",
    cardDesc: "A multi-year exploration of wearable design and character expression.",
    cardImage: "assets/project-cards/costume.webp",

    metadata: {
      role: "Physical Fabricator",
      timeline: "Multi-Year",
      collaborators: "Solo",
      tools: "EVA Foam, Sewing, LED Electronics, Spray Paint, Laser Cutter"
    },

    content: [
      { type: "image", src: "assets/project-images/costumes/1.webp", size: "large" },
      { type: "text", heading: "Overview", level: "primary", text: "This ongoing exploration investigates how different materials, patterning techniques, and fabrication workflows can be used to **bring character designs to life through wearable costumes**. Across multiple builds, the focus has been on developing technical proficiency in **translating visual concepts into physical forms** while balancing durability, comfort, and visual accuracy." },
      { type: "text", text: "Working primarily with **high density EVA foam** alongside fabric, cardboard, paints, and embedded electronics, each costume served as a **testbed for new construction methods, surface finishing techniques, and structural solutions**." },
      { type: "text", heading: "Design process", level: "primary" },
      { type: "text", heading: "Materials and Technical Scope", level: "secondary", text: "Materials: **High density EVA foam, fabric, cardboard, spray paint, acrylic paint, iron powder, electronic components**, hot glue, contact cement, recycled materials" },
      { type: "text", text: "Skills involved: **3D pattern making, foam fabrication, surface finishing, structural assembly, electronics integration**" },
      { type: "text", heading: "Sketches and Template Creation", level: "secondary", text: "Designs typically begin as digital sketches, followed by **template development through cardboard mockups or digital patterning**. This stage focuses on **translating complex shapes into flat patterns** that can be cut, formed, and assembled." },
      { type: "images-row", images: ["assets/project-images/costumes/2.webp", "assets/project-images/costumes/3.webp"] },
      { type: "text", heading: "Fabrication Process", level: "secondary", text: "EVA foam is used extensively due to its ability to be **heat formed, carved, and finished into durable lightweight structures**. Fabrication involves cutting patterns, heat shaping, laminating layers, and reinforcing stress points, often **incorporating recycled materials to reduce waste**. Surface finishing includes **priming, painting, and texture work** to achieve realistic effects." },
      { type: "images-row", images: ["assets/project-images/costumes/4.webp", "assets/project-images/costumes/5.webp"] },
      { type: "images-row", images: ["assets/project-images/costumes/6.webp", "assets/project-images/costumes/7.webp"] },
      { type: "text", heading: "Costumes", level: "primary" },
      { type: "text", heading: "Costume 1 — Material and Finish Exploration", level: "secondary", text: "The first build explored a range of materials including **foam, cardboard, and fabric**, alongside **spray painting and hand painting techniques**. The goal was to understand how different materials behave structurally and visually." },
      { type: "image", src: "assets/project-images/costumes/8.webp", size: "small" },
      { type: "text", heading: "Costume 2 — Pattern Complexity and Surface Effects", level: "secondary", text: "This costume pushed template creation further and introduced **advanced finishing methods such as using iron powder to create convincing rust textures**. Assembly techniques improved through **transitioning from hot glue to contact cement** for stronger bonds." },
      { type: "text", text: "Video: https://youtube.com/shorts/FTA3at0dS10" },
      { type: "image", src: "assets/project-images/costumes/9.webp", size: "medium" },
      { type: "text", heading: "Costume 3 — Mobility and Textile Integration", level: "secondary", text: "Focus shifted toward **improving wearability and comfort**, incorporating fabrics and learning sewing fundamentals. **Pattern making became more sophisticated** to accommodate movement while maintaining visual fidelity." },
      { type: "text", text: "Video: https://youtu.be/VdazJukZR2Q" },
      { type: "image", src: "assets/project-images/costumes/10.webp", size: "medium" },
      { type: "text", heading: "Costume 4 — Detail Fidelity and Electronics Integration", level: "secondary", text: "This build emphasized **accuracy to an existing character design**, requiring careful attention to detail. **Basic circuitry was integrated to power blinking LED eyes**, introducing electronics into the fabrication workflow." },
      { type: "text", text: "Video: https://youtube.com/shorts/ntudqSLgeD4" },
      { type: "image", src: "assets/project-images/costumes/11.webp", size: "medium" },
    ]
  },

  {
    id: "sandsiege",
    title: "Sand Siege",
    modalTitle: "Sand Siege",
    shortDesc: "Making a Beach Day More Competitive... and Fun!",
    cardDesc: "A modular beach game that reimagines sandcastle building as collaborative play.",
    cardImage: "assets/project-cards/sand-siege.webp",

    metadata: {
      role: "Product Developer",
      timeline: "3 Weeks",
      collaborators: "Angela Zhang, Aubrey Wong, Sage Rebello, Tong Song",
      tools: "3D Printing, Cardboard Prototyping, Fusion 360, User Testing"
    },

    content: [
      { type: "image", src: "assets/project-images/sand-siege/1.webp", size: "large" },
      { type: "text", heading: "Overview", text: "Sand Siege **reimagines sandcastle play as a creative and competitive beach game for kids**." },
      { type: "text", text: "We began by observing that most sandcastle kits feel **repetitive and prescriptive**, often limiting creativity to the shapes provided by buckets and molds. Our goal was to design a system that **encourages open ended building while introducing light competition and game mechanics** to make a day at the beach more engaging." },
      { type: "text", text: "Inspired by modular building systems and puzzle logic, we created **a game where players build sand structures, hide treasure items, and take turns attacking or building** using action prompts, blending imaginative play with simple strategy." },
      { type: "text", heading: "Gameplay and System", text: "Players construct bases using **modular sand bricks**, place treasures within their structures, and take turns rolling a die that determines actions such as building, attacking, or modifying the playfield. A **hand powered catapult** is used to launch sand and attempt to knock down opponents' structures or reveal treasures." },
      { type: "text", text: "The rules were intentionally designed to be **understandable with minimal reading** so children can quickly start playing." },
      { type: "list", heading: "Key Design Considerations", items: ["Make gameplay intuitive without heavy instructions", "Ensure pieces are large, visible, and safe for beach environments", "Prevent parts from being easily washed away", "Design sand interaction to be safe and low force", "Encourage creativity rather than constrain building"] },
      { type: "text", text: "A standout feature is the catapult, which **only functions when anchored into sand**. On hard surfaces it cannot stand, reinforcing that the toy belongs to the beach context. The launching action is **powered purely by children's hands** rather than springs or rubber bands, keeping forces gentle and safe." },
      { type: "text", heading: "Prototyping the Bricks", text: "We iterated extensively on the modular building blocks, **starting with cardboard prototypes** to explore scale, ergonomics, and play patterns. This helped us quickly test how children might stack, carry, and connect pieces." },
      { type: "images-row", images: ["assets/project-images/sand-siege/2.webp", "assets/project-images/sand-siege/3.webp", "assets/project-images/sand-siege/4.webp", "assets/project-images/sand-siege/5.webp"] },
      { type: "text", text: "We explored connection strategies including magnets, which were **abandoned due to corrosion risks near saltwater**. The design shifted toward **pressure fit connections**, leading to multiple rounds of 3D modeling and printing to refine tolerances." },
      { type: "text", heading: "Testing and Iteration", text: "**Field testing at the beach** revealed critical insights. Early versions included **interior bumps that trapped sand** and prevented smooth release, so the geometry was redesigned to allow clean packing and dumping. We repeatedly tested fit, durability, and usability in **real sand conditions** until the system felt reliable and satisfying." },
      { type: "images-row", images: ["assets/project-images/sand-siege/6.webp", "assets/project-images/sand-siege/7.webp", "assets/project-images/sand-siege/8.webp"] },
      { type: "text", heading: "Outcome", text: "The final system is a playful, modular game that **transforms sandcastle building into a social experience** that blends creativity, strategy, and physical play. By grounding the mechanics in the **natural affordances of sand and children's intuition**, Sand Siege creates a flexible play environment that feels both structured and open ended." },
    ]
  },

  {
    id: "dripless",
    title: "Dripless",
    modalTitle: "Dripless",
    shortDesc: "Rethinking an Overlooked Everyday Moment through Iterative Design",
    cardDesc: "A hands-free umbrella-drying system developed through rapid prototyping.",
    cardImage: "assets/project-cards/dripless.webp",

    metadata: {
      role: "Product Developer",
      timeline: "3 Weeks",
      collaborators: "Angela Zhang",
      tools: "Laser Cutter, 3D Printing, Fusion 360, User Research, Prototyping"
    },

    content: [
      { type: "image", src: "assets/project-images/dripless/1.webp", size: "large" },
      { type: "text", heading: "Background", text: "Over 4000 years after the invention of the umbrella, **the indoor experience of using one has barely changed**. People still carry wet umbrellas into buildings where they drip onto floors, create slipping hazards, and soak bags or furniture. Traditional umbrella stands collect water but remain messy and unreliable, while **plastic sleeves trap moisture and create environmental waste**. Neither approach meaningfully solves the problem." },
      { type: "text", text: "DripLess rethinks this everyday moment by creating a **clean, fast, contact free way to remove water from umbrellas** at building entryways, helping keep shared spaces safer and easier to maintain." },
      { type: "text", heading: "Need", text: "Who: **People entering universities, offices, and other high traffic public buildings** in rainy climates." },
      { type: "text", text: "Current situation: Wet umbrellas are brought indoors, creating **mess, safety risks, and custodial burden**." },
      { type: "text", text: "Improved situation: A **compact mechanical drying device** that quickly removes water without plastic waste, reducing friction for both users and facilities." },
      { type: "text", heading: "View", text: "People need a **simple, intuitive way to remove water from their umbrella** immediately upon entering a building." },
      { type: "text", heading: "Ideation and Exploration", text: "We generated **over 60 visualizations** exploring attachments, drop off stations, wall mounted systems, and standalone devices. Early exploration focused on understanding **how people naturally handle umbrellas when transitioning indoors** and what interactions feel effortless." },
      { type: "images-row", images: ["assets/project-images/dripless/2.webp", "assets/project-images/dripless/3.webp", "assets/project-images/dripless/4.webp"] },
      { type: "text", text: "Through filtering, we **ruled out personal attachments, at home solutions, and wall mounted concepts** that created awkward interactions. This process led us toward a **shared, ground based public device**." },
      { type: "text", heading: "Prototyping Journey", text: "Early prototypes explored **form, height, and interaction** using rough constructions to test how users approach the device while carrying bags. We examined **different layouts, spinning concepts, and mechanical pathways** to translate foot input into rotational motion." },
      { type: "images-row", images: ["assets/project-images/dripless/5.webp", "assets/project-images/dripless/6.webp", "assets/project-images/dripless/7.webp"] },
      { type: "text", text: "As the concept matured, we developed **mechanism focused prototypes to refine gear ratios, bowl geometry, and pedal ergonomics**, ensuring reliable drying without electricity." },
      { type: "images-row", images: ["assets/project-images/dripless/8.webp", "assets/project-images/dripless/9.webp"] },
      { type: "list", heading: "Constraints", items: ["Public space deployability with safe operation around water", "No electricity, fully mechanical operation", "Fabrication using laser cut parts, 3D printing, and off the shelf hardware", "Accommodation of varied folding umbrella sizes", "Compact footprint within entryway circulation"] },
      { type: "list", heading: "Specifications", items: ["Each pedal cycle produces 3 to 6 bowl revolutions", "Removes at least 80 percent of surface water after three cycles", "Base footprint within 24 by 18 inches", "Stable containment of water during operation"] },
      { type: "text", heading: "Surveys, Tests, and Verification", text: "We **surveyed over 40 participants** and found that more than 85 percent own folding umbrellas, guiding our decision to design specifically for compact umbrellas." },
      { type: "text", text: "User tests revealed that people prefer a **quick drop in motion without bending** or carefully positioning the umbrella, especially when carrying bags." },
      { type: "text", text: "We **measured water retention by weighing umbrellas before and after simulated rain**, confirming that rotational drying significantly reduces dripping. Iterative testing refined bowl geometry to maximize water removal while preventing splashing." },
      { type: "text", text: "**Final verification placed the prototype in a lobby environment** where real users interacted with it and provided feedback on usability and clarity." },
      { type: "text", heading: "Filter \u2192 Verify \u2192 Validate", text: "Filter: **Narrowed from many concepts to a shared public device** based on feasibility and impact." },
      { type: "text", text: "Verify: Tested mechanical approaches and confirmed that **pedal powered rotation is safe, quiet, and effective** compared to powered air systems." },
      { type: "text", text: "Validate: User feedback confirmed that the **step action feels intuitive and satisfying**, and that visible mechanics help users understand how the device works." },
      { type: "text", heading: "Final Refined Prototype", text: "DripLess uses a **pedal powered mechanism to convert vertical foot motion into controlled rotation**. A two part bowl stabilizes the umbrella while **centrifugal force sheds water into a lower basin**, balancing drying performance, containment, and maintainability." },
    ]
  },

  {
    id: "idleearth",
    title: "Idle Earth",
    modalTitle: "Idle Earth",
    shortDesc: "A Living World Built from Every Visitor",
    cardDesc: "Every visitor creates a digital self that continues living on Earth while you're away.",
    cardImage: "assets/project-cards/idle-earth.webp",

    metadata: {
      role: "Front-End Developer",
      timeline: "Ongoing",
      collaborators: "Solo",
      tools: "Three.js, Google Firebase, AI Agent Simulation, JavaScript"
    },

    liveSite: "https://idle-earth-601582214608.us-west1.run.app/",
    content: [
      {
        type: "video",
        webm: "assets/project-images/idle-earth/video.webm",
        mp4: "assets/project-images/idle-earth/video.mp4"
      },
      { type: "text", heading: "Inspiration", text: "I was inspired by the idea that people often leave little digital artifacts online and return to them from time to time. But most of these artifacts **stay completely static**. They do not change, they do not really represent a person over time, and they do not give someone much reason to keep checking back. I started wondering if **artificial intelligence could create something more alive**. Instead of leaving a static trace online, what if people could **anchor a small digital version of themselves** somewhere on the internet that continues evolving." },
      { type: "text", heading: "Overview", text: "Idle Earth is a **web experience where users create a small AI-driven digital self** that lives on a shared virtual planet. Users define attributes like age, personality, and identity traits, and **the system generates a small agent that continues living on the platform**. It is not really a game. Instead, users create their digital self and occasionally return to see what it has been up to. Over time, **the planet slowly fills with these small autonomous digital lives**, creating a quiet world populated by many different users." },
      { type: "images-row", images: ["assets/project-images/idle-earth/3.webp", "assets/project-images/idle-earth/4.webp"] },
      { type: "text", heading: "Process", text: "The project combines a **custom visual environment with an AI-driven simulation layer**. I built the interactive Earth using **3D rendering and hand-drawn visual assets**, then integrated an AI system that **generates updates about each digital self over time**. Users log in, create their digital self, and can later return to view its activity log. Each visit updates the state of the world and reveals what their digital self is currently doing, while other users appear on the planet with **limited, privacy-safe summaries**." },
    ]
  },

  {
    id: "folded",
    title: "Folded Reality",
    modalTitle: "Folded Reality",
    shortDesc: "A Pop-Up World Built from Paper, Wood, and Light",
    cardDesc: "An exploration of popup book mechanics using laser-cut paper and wood.",
    cardImage: "assets/project-cards/folded-reality.webp",

    metadata: {
      role: "Physical Fabricator",
      timeline: "3 Weeks",
      collaborators: "Solo",
      tools: "Laser Cutter, Adobe Illustrator, Paper Engineering, Acrylic, Wood"
    },

    content: [
      { type: "image", src: "assets/project-images/folded-reality/1.webp", size: "large" },
      { type: "text", heading: "Overview", text: "Folded Reality is an exploration of **transforming flat materials into an immersive mechanical world** through pop up structures and digital fabrication. The project investigates how **careful folding, cutting, and assembly can create a sense of discovery**, inviting the viewer to open the book as if stepping through a doorway into another dimension. Combining hand craft with **laser cutting across paper, wood, and acrylic**, the final piece presents a portal like scene where a creature emerges from within, blurring the boundary between page and environment." },
      { type: "text", heading: "Intent", text: "I wanted the experience of opening the book to feel **cinematic and slightly magical**, as if uncovering a hidden world tucked inside an ordinary object." },
      { type: "text", heading: "Origins \u2014 Interest in Pop Up Structures", text: "This project grew out of an early fascination with pop up books and **the intricate engineering behind folds, joints, and motion**. Through initial exploration, I studied how simple cuts and hinges could create **volume, movement, and surprise**. These experiments helped me understand the **mechanical logic behind transforming a flat sheet into a dynamic spatial experience**." },
      { type: "images-row", images: ["assets/project-images/folded-reality/2.webp", "assets/project-images/folded-reality/3.webp"] },
      { type: "text", heading: "Workflow \u2014 Sketching Through Making", text: "The process began with **hands on experimentation**. I sketched by cutting paper directly, playing with random shapes, folds, and connections to see how forms behaved in motion. This **tactile approach allowed unexpected ideas to emerge quickly**." },
      { type: "text", text: "Once a promising structure appeared, I carefully disassembled it, documented the parts, and **translated them into precise templates in Adobe Illustrator**. This step allowed me to understand the geometry behind each fold and prepare for digital fabrication." },
      { type: "images-row", images: ["assets/project-images/folded-reality/4.webp", "assets/project-images/folded-reality/5.webp"] },
      { type: "text", heading: "Iteration \u2014 Laser Cut Prototyping", text: "Using Illustrator files, I **laser cut paper prototypes and repeatedly assembled them** to test alignment, motion, and durability. Multiple iterations were produced to **refine proportions, improve fold behavior, and ensure the mechanism opened smoothly**." },
      { type: "text", text: "This stage was critical in **bridging intuition with precision**, allowing rapid testing while maintaining accuracy." },
      { type: "images-row", images: ["assets/project-images/folded-reality/6.webp", "assets/project-images/folded-reality/7.webp", "assets/project-images/folded-reality/8.webp"] },
      { type: "text", heading: "Final Fabrication \u2014 Templates to Object", text: "After refining the mechanism, I hand illustrated the visual elements, printed them, and **laser cut the final components**. The book structure itself was **fabricated from laser cut wood**, with hinges installed so the object opens like a door, reinforcing the idea of entering another space." },
      { type: "text", text: "**Laser cut and etched acrylic elements** were integrated to evoke a portal, adding depth and contrast between materials. Final assembly required **careful alignment to ensure smooth motion and structural stability**." },
      { type: "images-row", images: ["assets/project-images/folded-reality/9.webp", "assets/project-images/folded-reality/10.webp", "assets/project-images/folded-reality/11.webp"] },
      { type: "list", heading: "Challenges", items: ["Preventing thin wood panels from warping after laser cutting", "Maintaining alignment of larger pop up elements through repeated opening", "Precisely registering printed graphics with laser cut geometry", "Balancing structural strength with delicate motion"] },
      { type: "text", text: "These constraints pushed me to **refine both fabrication technique and assembly strategy**." },
      { type: "text", heading: "Outcome", text: "Folded Reality demonstrates how **digital fabrication can expand traditional paper engineering into a multi material experience**. The final piece invites viewers to engage physically, **revealing a layered environment that unfolds through interaction**." },
    ]
  },

  {
    id: "freelens",
    title: "FreeLens",
    modalTitle: "FreeLens",
    shortDesc: "A Finance Tool Built Around the Freelancer, Encouraging Independence",
    cardDesc: "A finance-tracking app concept designed to help freelancers manage expenses.",
    cardImage: "assets/project-cards/freelens.webp",

    metadata: {
      role: "UX / UI Designer",
      timeline: "1 Month",
      collaborators: "Ellie Na, Crystal Wang, Shelly Liu, Veronica Cargay",
      tools: "Figma, User Research, Interaction Design, Information Architecture"
    },

    content: [
      { type: "image", src: "assets/project-images/freelens/1.webp", size: "large" },
      { type: "text", heading: "Overview", text: "FreeLens is a **concept extension to Expensify** designed to help freelancers **track expenses at the project level, reduce administrative burden, and avoid missed tax deductions**. The project involved designing a streamlined experience that allows users to capture receipts, automatically organize spending, and separate personal and business finances, culminating in an **investment style pitch** demonstrating product strategy, market opportunity, and user value." },
      { type: "text", heading: "My Role", text: "Collaborated on **user research, feature definition, workflow design, and high fidelity interface development in Figma**. Contributed to shaping the product direction and refining the experience through iterative design." },
      { type: "text", heading: "Problem Context \u2014 Why This Matters", text: "Freelancing is rapidly growing, yet **financial tooling has not kept pace**." },
      { type: "list", items: ["~70.4 million freelancers in the U.S. today, projected to exceed 90 million by 2028", "Freelancers spend roughly 10\u201320% of their time on administrative tasks", "About 60% report taxes and financial management as a top struggle", "On average, freelancers overpay taxes by ~21% due to missed deductions"] },
      { type: "text", text: "Existing tools create friction:" },
      { type: "list", items: ["Receipts are scattered across devices", "Expenses don't map cleanly to projects", "Personal and business spending gets mixed", "Manual entry wastes time and causes errors", "Corporate tools feel clunky for independent work"] },
      { type: "text", text: "This represents **a large and growing market with clear unmet needs**." },
      { type: "text", heading: "Solution \u2014 What We Designed", text: "FreeLens introduces a **freelancer first workflow**:" },
      { type: "list", items: ["Snap and save receipts directly into projects", "AI powered search to find records instantly", "Automatic tagging to reduce manual input", "Clear spend visibility per project", "Dedicated separation of personal and business finances", "Insights to prevent missed deductions"] },
      { type: "text", text: "Goal: **reduce stress, save time, and improve financial clarity**." },
      { type: "text", heading: "Interface Design", text: "We focused on **clarity and speed**, minimizing cognitive load while surfacing key actions like **receipt capture and project tracking**." },
      { type: "image", src: "assets/project-images/freelens/2.webp", size: "large" },
      { type: "text", heading: "Design Process & Team Collaboration", text: "We iterated collaboratively in Figma, **exploring layouts, defining components, and refining interaction patterns** through critique and testing." },
      { type: "image", src: "assets/project-images/freelens/3.webp", size: "large" },
      { type: "text", heading: "User Workflow Mapping", text: "We **mapped end to end workflows** to ensure the experience remained intuitive, from snapping a receipt to reviewing project reports." },
      { type: "image", src: "assets/project-images/freelens/4.webp", size: "large" },
      { type: "text", heading: "Market Opportunity & Positioning", text: "FreeLens **expands beyond corporate expense tools** by targeting independent workers directly." },
      { type: "list", items: ["Project level tracking provides a clear differentiator", "Automation reduces administrative overhead", "Freelancer focused design builds trust and loyalty", "Positioned to capture a growing segment underserved by existing solutions"] },
      { type: "text", heading: "Outcome", text: "The project was presented as an **investment pitch outlining user insights, feature roadmap, and strategic positioning**. It demonstrates how **thoughtful UX and automation can unlock meaningful efficiency gains** for freelancers." },
    ]
  },

  {
    id: "foodiecam",
    title: "FoodieCam",
    modalTitle: "FoodieCam",
    shortDesc: "The Camera Eats First? Saving Memories as Recipes!",
    cardDesc: "A camera that saves food as printed recipes.",
    cardImage: "assets/project-cards/foodiecam.webp",

    metadata: {
      role: "Hardware Developer",
      timeline: "Ongoing",
      collaborators: "Solo",
      tools: "Arduino, Computer Vision, Thermal Printer, AI API, 3D Printing"
    },

    content: [
      { type: "image", src: "assets/project-images/foodiecam/1.webp", size: "medium" },
      { type: "text", heading: "Overview", text: "I've always liked saving memories as physical artifacts, like Polaroids or small souvenirs. When it comes to food, though, we usually just take photos; **the camera eats first**. But photos only capture how something looked, **not what it tasted like**." },
      { type: "text", text: "FoodieCam explores a different way of preserving food memories: **saving them in a form you can recreate later**. The camera uses **computer vision and an AI API** to recognize a dish and generate a recipe, which is **printed instantly as a receipt**." },
      { type: "text", text: "Built using an **Arduino Uno Q, AI image recognition and computer vision, and a thermal receipt printer**, the device turns a quick food photo into a physical recipe — so you can **relive the meal by cooking it again**." }
    ]
  },


];