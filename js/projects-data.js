// js/projects-data.js

const projectsData = [
  {
    id: "jukebox",
    title: "Jukebox 2.0",
    shortDesc: "An interactive music device that translates color input into sound.",
    cardImage: "assets/project-cards/jukebox.png",
    
    content: [
      {
        type: "image",
        src: "assets/project-images/jukebox/1.png",
        size: "large" // Options: small, medium, large, full
      },
      {
        type: "text",
        heading: "Overview",
        text: "Jukebox 2.0 is an interactive record player that translates hand drawn color doodles into melodies, enabling people with no musical training to compose music through simple, physical interaction. By mapping color to sound, the system reframes music making from a technical skill into an intuitive, playful experience and invites users to explore composition through drawing rather than notation."
      },
      {
        type: "text",
        text: "This project was developed as a collaboration between Ellie Na and Yang Tian."
      },
      {
        type: "text",
        text: "The project addresses a core accessibility gap in music. Many people remain passive listeners because traditional instruments and software require prior knowledge. Jukebox 2.0 lowers this barrier by allowing anyone, including children, beginners, or individuals with cognitive decline, to engage in expressive creation using only markers and paper."
      },
      {
        type: "text",
        text: "Built as a two week sprint, the piece was exhibited as part of a “Connections” exhibition highlighting new ways technology can bridge people and creative expression."
      },
      {
        type: "image",
        src: "assets/project-images/jukebox/5.png",
        size: "small" // Options: small, medium, large, full
      },
      {
        type: "text",
        text: "Users draw linear color patterns on paper and feed them through the device. A color sensor reads the hues and converts them into musical tones in real time. Playback alternates between speakers, producing a dynamic melody that reflects the visual composition."
      },
      {
        type: "list",
        heading: "System flow:",
        items: [
          "Input: Physical color drawings read via RGB color sensor",
          {
            text: "Processing:",
            subItems: [
              "Convert RGB to hue",
              "Categorize hue into tonal groups",
              "Map to corresponding notes"
            ]
          },
          "Output: Layered tones played through speakers as the strip moves"
        ]
      },
      {
        type: "text",
        heading: "Process",
        text: "The project progressed through rapid prototyping and continuous refinement. We began with breadboard prototypes to validate sensing and sound mapping, then iterated through four enclosure designs to improve proportions, usability, and internal layout. The color to sound algorithm was revised multiple times to achieve stronger musical coherence. As the system matured, we transitioned to a custom hand soldered PCB for reliability, refined the acoustic output through testing different tonal palettes and playback behaviors, and completed final fabrication that integrated electronics, mechanism, and enclosure into a cohesive object."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/jukebox/2.png",
          "assets/project-images/jukebox/3.png",
          "assets/project-images/jukebox/4.png"
        ]
      },
      {
        type: "text",
        text: "The final artifact demonstrates how physical interaction and computational translation can open creative practices to broader audiences. By connecting color, motion, and sound, Jukebox 2.0 creates an approachable pathway into music making and transforms drawing into composition."
      },
      {
        type: "image",
        src: "assets/project-images/jukebox/6.png",
        size: "medium" // Options: small, medium, large, full
      },
      {
        type: "list",
        heading: "Skills and Contributions",
        items: [
          "3D modeling and enclosure design",
          "Embedded programming and signal processing",
          "Sensor integration and hardware prototyping",
          "Custom PCB design and hand soldering",
          "Mechanical mechanism development using a hand crank system",
          "Sound mapping and interaction design",
          "Final fabrication and assembly"
        ]
      },
    ]
  },
  
  {
    id: "steadystix",
    title: "Steady Stix",
    shortDesc: "A redesigned pair of chopsticks that improves stability for trembling hands.",
    cardImage: "assets/project-cards/steady-stix.png",
    
    content: [
      {
        type: "image",
        src: "assets/project-images/steadystix/1.png",
        size: "large"
      },
      {
        type: "text",
        heading: "Overview and Background",
        text: "Steady Stix is a two week personal sprint exploring how to make chopsticks more usable for people with hand tremors while preserving the familiarity and cultural meaning of traditional utensils. Chopsticks require precise fingertip control and coordination, which can be difficult for elderly users, often leading to frustration or loss of confidence during meals. The goal was to create a solution that feels natural, discreet, and respectful, allowing users to maintain independence without drawing attention."
      },
      {
        type: "text",
        heading: "User Research and Personal Investigation",
        text: "Research focused on hand biomechanics, tremor behavior, and where the hand retains strength even when fine motor control declines. A key insight was that the muscle between the thumb and index finger remains relatively strong, suggesting an opportunity to create a subtle anchoring feature that reduces slipping without requiring extra effort. Observations and informal testing emphasized the importance of making the utensil feel like normal chopsticks rather than a specialized tool."
      },
      {
        type: "text",
        text: "I pushed myself to explore a wide range of directions to avoid settling too quickly, generating multiple concepts and filtering out ideas that felt bulky, unfamiliar, or stigmatizing."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/steadystix/2.png",
          "assets/project-images/steadystix/3.png",
          "assets/project-images/steadystix/4.png"
        ]
      },
      {
        type: "text",
        text: "Low fidelity prototyping was done using existing chopsticks and air dry clay to quickly test grip concepts, anchoring shapes, and interaction feel. This allowed rapid iteration before committing to more refined forms."
      },
      {
        type: "text",
        text: "During this stage, key constraints were defined around usability, familiarity, elegance, manufacturability, and minimal force requirements."
      },
      {
        type: "list",
        heading: "Constraints",
        items: [
          "Must function similarly to traditional chopstick and feel similar to native users (intuitive, and does not feel like a new utensil)",
          "Must have an anchoring point to the hand that prevents chopsticks from slipping",
          "Must be easily manufactured (molded) and cheap",
          "Must be able to pick up food that are usually eaten with chopsticks (tested with food phantoms)",
          "Must be elegant and not draw attention to it. (does not scream disability, resembles normal chopsticks)",
          "Must not need too much force from fingertips to function",
          "Must be food safe",
          "Must be easy to clean",
          "Must be lightweight, easy to carry around",
          "Must survive multiple uses (be reusable for a long long time)"
        ]
      },
      {
        type: "text",
        heading: "Physical Prototyping and Refinement",
        text: "The project then moved into higher fidelity prototyping through 3D printing, refining geometry, balance, and the connection between the sticks to ensure an intuitive axis of rotation."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/steadystix/5.png",
          "assets/project-images/steadystix/6.png",
          "assets/project-images/steadystix/7.png"
        ]
      },
      {
        type: "text",
        text: "Specifications such as weight, durability, material safety, and long term usability were formalized during this phase, alongside repeated testing to ensure the interaction closely matched traditional chopsticks."
      },
      {
        type: "list",
        heading: "Specifications",
        items: [
          "Less than 20g",
          "Total length: 230mm",
          "Maximum width (at hinge area): 30mm",
          "Maximum open distance between tips: 100 mm",
          {
            text: "Material must be food-safe, non-toxic, and dishwasher safe.",
            subItems: [
              "Prototype with PLA, Intended material: PPS"
            ]
          },
          "Must maintain structural integrity up to 80°C (for hot food use).",
          "Must withstand 100,000 open-close cycles without fracture or loss of elasticity.",
          "Axis of flexure: located 25% of total length from the top (opposite of food end)",
          "Edges must have radius ≥ 0.5 mm (no sharp edges)",
          "Expected lifespan: ≥ 2 years or 100,000 use cycles under normal household use."
        ]
      },
      {
        type: "text",
        heading: "Final Outcome",
        text: "The final design is sleek, lightweight, and visually indistinguishable from a refined pair of chopsticks. The subtle stabilization feature supports steadier use without signaling assistive intent, helping remove any sense of stigma and allowing users to dine with confidence."
      },
      {
        type: "list",
        heading: "Skills Demonstrated",
        items: [
          "User research and ergonomic analysis",
          "Rapid prototyping and iterative testing",
          "Low fidelity exploration",
          "3D modeling and form development",
          "Physical prototyping and fabrication",
          "Constraint definition and specification development",
          "Human centered design thinking"
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
        type: "image",
        src: "assets/project-images/sand-siege/1.png",
        size: "large"
      },
      {
        type: "text",
        heading: "Overview",
        text: "Sand Siege is a collaborative project with Angela Zhang, Aubrey Wong, Sage Rebello, and Tong Song focused on reimagining sandcastle play as a creative and competitive beach game for kids."
      },
      {
        type: "text",
        text: "We began by observing that most sandcastle kits feel repetitive and prescriptive, often limiting creativity to the shapes provided by buckets and molds. Our goal was to design a system that encourages open ended building while introducing light competition and game mechanics to make a day at the beach more engaging."
      },
      {
        type: "text",
        text: "Inspired by modular building systems and puzzle logic, we created a game where players build sand structures, hide treasure items, and take turns attacking or building using action prompts, blending imaginative play with simple strategy."
      },
      {
        type: "text",
        heading: "Gameplay and System",
        text: "Players construct bases using modular sand bricks, place treasures within their structures, and take turns rolling a die that determines actions such as building, attacking, or modifying the playfield. A hand powered catapult is used to launch sand and attempt to knock down opponents' structures or reveal treasures."
      },
      {
        type: "text",
        text: "The rules were intentionally designed to be understandable with minimal reading so children can quickly start playing."
      },
      {
        type: "list",
        heading: "Key Design Considerations",
        items: [
          "Make gameplay intuitive without heavy instructions",
          "Ensure pieces are large, visible, and safe for beach environments",
          "Prevent parts from being easily washed away",
          "Design sand interaction to be safe and low force",
          "Encourage creativity rather than constrain building"
        ]
      },
      {
        type: "text",
        text: "A standout feature is the catapult, which only functions when anchored into sand. On hard surfaces it cannot stand, reinforcing that the toy belongs to the beach context. The launching action is powered purely by children's hands rather than springs or rubber bands, keeping forces gentle and safe."
      },
      {
        type: "text",
        heading: "Prototyping the Bricks",
        text: "We iterated extensively on the modular building blocks, starting with cardboard prototypes to explore scale, ergonomics, and play patterns. This helped us quickly test how children might stack, carry, and connect pieces."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/sand-siege/2.png",
          "assets/project-images/sand-siege/3.png",
          "assets/project-images/sand-siege/4.png",
          "assets/project-images/sand-siege/5.png"
        ]
      },
      {
        type: "text",
        text: "We explored connection strategies including magnets, which were abandoned due to corrosion risks near saltwater. The design shifted toward pressure fit connections, leading to multiple rounds of 3D modeling and printing to refine tolerances."
      },
      {
        type: "text",
        heading: "Testing and Iteration",
        text: "Field testing at the beach revealed critical insights. Early versions included interior bumps that trapped sand and prevented smooth release, so the geometry was redesigned to allow clean packing and dumping. We repeatedly tested fit, durability, and usability in real sand conditions until the system felt reliable and satisfying."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/sand-siege/6.png",
          "assets/project-images/sand-siege/7.png",
          "assets/project-images/sand-siege/8.png"
        ]
      },
      {
        type: "text",
        heading: "Outcome",
        text: "The final system is a playful, modular game that transforms sandcastle building into a social experience that blends creativity, strategy, and physical play. By grounding the mechanics in the natural affordances of sand and children's intuition, Sand Siege creates a flexible play environment that feels both structured and open ended."
      },
      {
        type: "list",
        heading: "Skills Demonstrated",
        items: [
          "Collaborative design and teamwork",
          "Play research and user testing with children",
          "Game design and rule development",
          "Rapid prototyping from cardboard to 3D printing",
          "Mechanical thinking and context specific design",
          "Iteration through field testing",
          "Design for safety and environmental conditions"
        ]
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
        type: "image",
        src: "assets/project-images/dripless/1.png",
        size: "large"
      },
      {
        type: "text",
        heading: "Background",
        text: "Over 4000 years after the invention of the umbrella, the indoor experience of using one has barely changed. People still carry wet umbrellas into buildings where they drip onto floors, create slipping hazards, and soak bags or furniture. Traditional umbrella stands collect water but remain messy and unreliable, while plastic sleeves trap moisture and create environmental waste. Neither approach meaningfully solves the problem."
      },
      {
        type: "text",
        text: "DripLess rethinks this everyday moment by creating a clean, fast, contact free way to remove water from umbrellas at building entryways, helping keep shared spaces safer and easier to maintain."
      },
      {
        type: "text",
        heading: "Need",
        text: "Who: People entering universities, offices, and other high traffic public buildings in rainy climates."
      },
      {
        type: "text",
        text: "Current situation: Wet umbrellas are brought indoors, creating mess, safety risks, and custodial burden."
      },
      {
        type: "text",
        text: "Improved situation: A compact mechanical drying device that quickly removes water without plastic waste, reducing friction for both users and facilities."
      },
      {
        type: "text",
        heading: "View",
        text: "People need a simple, intuitive way to remove water from their umbrella immediately upon entering a building."
      },
      {
        type: "text",
        heading: "Ideation and Exploration",
        text: "We generated over 60 visualizations exploring attachments, drop off stations, wall mounted systems, and standalone devices. Early exploration focused on understanding how people naturally handle umbrellas when transitioning indoors and what interactions feel effortless."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/dripless/2.png",
          "assets/project-images/dripless/3.png",
          "assets/project-images/dripless/4.png"
        ]
      },
      {
        type: "text",
        text: "Through filtering, we ruled out personal attachments due to umbrella variability, at home solutions because they address the problem too late, and wall mounted concepts that created awkward interactions. This process led us toward a shared, ground based public device."
      },
      {
        type: "text",
        heading: "Prototyping Journey",
        text: "Early prototypes explored form, height, and interaction using rough constructions to test how users approach the device while carrying bags. We examined different layouts, spinning concepts, and mechanical pathways to translate foot input into rotational motion."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/dripless/5.png",
          "assets/project-images/dripless/6.png",
          "assets/project-images/dripless/7.png"
        ]
      },
      {
        type: "text",
        text: "As the concept matured, we developed mechanism focused prototypes to refine gear ratios, bowl geometry, and pedal ergonomics, ensuring reliable drying without electricity."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/dripless/8.png",
          "assets/project-images/dripless/9.png"
        ]
      },
      {
        type: "list",
        heading: "Constraints",
        items: [
          "Public space deployability with safe operation around water",
          "No electricity, fully mechanical operation",
          "Fabrication using laser cut parts, 3D printing, and off the shelf hardware",
          "Accommodation of varied folding umbrella sizes",
          "Compact footprint within entryway circulation"
        ]
      },
      {
        type: "list",
        heading: "Specifications",
        items: [
          "Each pedal cycle produces 3 to 6 bowl revolutions",
          "Removes at least 80 percent of surface water after three cycles",
          "Base footprint within 24 by 18 inches",
          "Stable containment of water during operation"
        ]
      },
      {
        type: "text",
        heading: "Surveys, Tests, and Verification",
        text: "We surveyed over 40 participants and found that more than 85 percent own folding umbrellas, guiding our decision to design specifically for compact umbrellas."
      },
      {
        type: "text",
        text: "User tests with simple mockups revealed that people prefer a quick drop in motion without bending or carefully positioning the umbrella, especially when carrying bags."
      },
      {
        type: "text",
        text: "We measured water retention by weighing umbrellas before and after simulated rain, confirming that rotational drying significantly reduces dripping. Iterative testing refined bowl geometry to maximize water removal while preventing splashing."
      },
      {
        type: "text",
        text: "Final verification placed the prototype in a lobby environment where real users interacted with it and provided feedback on usability and clarity."
      },
      {
        type: "text",
        heading: "Filter → Verify → Validate",
        text: "Filter: Narrowed from many concepts to a shared public device based on feasibility and impact."
      },
      {
        type: "text",
        text: "Verify: Tested mechanical approaches and confirmed that pedal powered rotation is safe, quiet, and effective compared to powered air systems."
      },
      {
        type: "text",
        text: "Validate: User feedback confirmed that the step action feels intuitive and satisfying, and that visible mechanics help users understand how the device works."
      },
      {
        type: "text",
        heading: "Final Refined Prototype",
        text: "DripLess uses a pedal powered mechanism to convert vertical foot motion into controlled rotation. A two part bowl stabilizes the umbrella while centrifugal force sheds water into a lower basin, balancing drying performance, containment, and maintainability."
      },
      {
        type: "list",
        heading: "Skills Demonstrated",
        items: [
          "Laser cutting and digital fabrication",
          "3D modeling and iterative CAD development",
          "Gear design and mechanical systems creation",
          "User research and usability testing",
          "Woodworking and physical fabrication",
          "Rapid prototyping and iteration",
          "Systems thinking for public space deployment"
        ]
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
        type: "image",
        src: "assets/project-images/costumes/1.png",
        size: "large"
      },
      {
        type: "text",
        heading: "Overview",
        text: "This ongoing exploration investigates how different materials, patterning techniques, and fabrication workflows can be used to bring character designs to life through wearable costumes. Across multiple builds, the focus has been on developing technical proficiency in translating visual concepts into physical forms while balancing durability, comfort, and visual accuracy."
      },
      {
        type: "text",
        text: "Working primarily with high density EVA foam alongside fabric, cardboard, paints, and embedded electronics, each costume served as a testbed for new construction methods, surface finishing techniques, and structural solutions."
      },
      {
        type: "text",
        heading: "Materials and Technical Scope",
        text: "Materials: High density EVA foam, fabric, cardboard, spray paint, acrylic paint, iron powder, electronic components, hot glue, contact cement, recycled materials"
      },
      {
        type: "text",
        text: "Skills involved: 3D pattern making, foam fabrication, surface finishing, structural assembly, electronics integration"
      },
      {
        type: "text",
        heading: "Sketches and Template Creation",
        text: "Designs typically begin as digital sketches, followed by template development through cardboard mockups or digital patterning. This stage focuses on translating complex shapes into flat patterns that can be cut, formed, and assembled."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/costumes/2.png",
          "assets/project-images/costumes/3.png"
        ]
      },
      {
        type: "text",
        heading: "Fabrication Process",
        text: "EVA foam is used extensively due to its ability to be heat formed, carved, and finished into durable lightweight structures. Fabrication involves cutting patterns, heat shaping, laminating layers, and reinforcing stress points, often incorporating recycled materials to reduce waste. Surface finishing includes priming, painting, and texture work to achieve realistic effects."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/costumes/4.png",
          "assets/project-images/costumes/5.png",
        ]
      },
            {
        type: "images-row",
        images: [
          "assets/project-images/costumes/6.png",
          "assets/project-images/costumes/7.png"
        ]
      },
      {
        type: "text",
        heading: "Project Evolution and Takeaways"
      },
      {
        type: "text",
        heading: "Costume 1 — Material and Finish Exploration",
        text: "The first build explored a range of materials including foam, cardboard, and fabric, alongside spray painting and hand painting techniques. The goal was to understand how different materials behave structurally and visually."
      },
      {
        type: "image",
        src: "assets/project-images/costumes/8.png",
        size: "small"
      },
      {
        type: "text",
        heading: "Costume 2 — Pattern Complexity and Surface Effects",
        text: "This costume pushed template creation further and introduced advanced finishing methods such as using iron powder to create convincing rust textures. Assembly techniques improved through transitioning from hot glue to contact cement for stronger bonds."
      },
      {
        type: "text",
        text: "Video: https://youtube.com/shorts/FTA3at0dS10"
      },
      {
        type: "image",
        src: "assets/project-images/costumes/9.png",
        size: "medium"
      },
      {
        type: "text",
        heading: "Costume 3 — Mobility and Textile Integration",
        text: "Focus shifted toward improving wearability and comfort, incorporating fabrics and learning sewing fundamentals. Pattern making became more sophisticated to accommodate movement while maintaining visual fidelity."
      },
      {
        type: "text",
        text: "Video: https://youtu.be/VdazJukZR2Q"
      },
      {
        type: "image",
        src: "assets/project-images/costumes/10.png",
        size: "medium"
      },
      {
        type: "text",
        heading: "Costume 4 — Detail Fidelity and Electronics Integration",
        text: "This build emphasized accuracy to an existing character design, requiring careful attention to detail. Basic circuitry was integrated to power blinking LED eyes, introducing electronics into the fabrication workflow."
      },
      {
        type: "text",
        text: "Video: https://youtube.com/shorts/ntudqSLgeD4"
      },
      {
        type: "image",
        src: "assets/project-images/costumes/11.png",
        size: "medium"
      },
      {
        type: "list",
        heading: "Technical Skills Demonstrated",
        items: [
          "EVA foam patterning, heat forming, and structural fabrication",
          "Advanced surface finishing including texture simulation and weathering",
          "Spray painting, acrylic painting, and specialty effects (rust simulation with iron powder)",
          "Adhesive selection and bonding strategies (hot glue vs contact cement)",
          "3D pattern development and template translation",
          "Sewing fundamentals and textile integration",
          "Electronics integration (LED circuits, wiring, basic power systems)",
          "Iterative prototyping and build refinement",
          "Material experimentation and sustainable sourcing"
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
        type: "image",
        src: "assets/project-images/freelens/1.png",
        size: "large"
      },
      {
        type: "text",
        heading: "Overview",
        text: "FreeLens is a concept extension to Expensify designed to help freelancers track expenses at the project level, reduce administrative burden, and avoid missed tax deductions. Our team designed a streamlined experience that allows users to capture receipts, automatically organize spending, and separate personal and business finances. The project culminated in an investment style pitch demonstrating product strategy, market opportunity, and user value."
      },
      {
        type: "text",
        text: "This project was developed as a collaboration between Ellie Na, Crystal Wang, Shelly Liu, Veronica Cargay, and Darren Chao."
      },
      {
        type: "text",
        heading: "My Role",
        text: "Collaborated on user research, feature definition, workflow design, and high fidelity interface development in Figma. Contributed to shaping the product direction and refining the experience through iterative design."
      },
      {
        type: "text",
        heading: "Problem Context — Why This Matters",
        text: "Freelancing is rapidly growing, yet financial tooling has not kept pace."
      },
      {
        type: "list",
        items: [
          "~70.4 million freelancers in the U.S. today, projected to exceed 90 million by 2028",
          "Freelancers spend roughly 10–20% of their time on administrative tasks",
          "About 60% report taxes and financial management as a top struggle",
          "On average, freelancers overpay taxes by ~21% due to missed deductions"
        ]
      },
      {
        type: "text",
        text: "Existing tools create friction:"
      },
      {
        type: "list",
        items: [
          "Receipts are scattered across devices",
          "Expenses don't map cleanly to projects",
          "Personal and business spending gets mixed",
          "Manual entry wastes time and causes errors",
          "Corporate tools feel clunky for independent work"
        ]
      },
      {
        type: "text",
        text: "This represents a large and growing market with clear unmet needs."
      },
      {
        type: "text",
        heading: "Solution — What We Designed",
        text: "FreeLens introduces a freelancer first workflow:"
      },
      {
        type: "list",
        items: [
          "Snap and save receipts directly into projects",
          "AI powered search to find records instantly",
          "Automatic tagging to reduce manual input",
          "Clear spend visibility per project",
          "Dedicated separation of personal and business finances",
          "Insights to prevent missed deductions"
        ]
      },
      {
        type: "text",
        text: "Goal: reduce stress, save time, and improve financial clarity."
      },
      {
        type: "text",
        heading: "Interface Design",
        text: "We focused on clarity and speed, minimizing cognitive load while surfacing key actions like receipt capture and project tracking."
      },
      {
        type: "image",
        src: "assets/project-images/freelens/2.png",
        size: "large"
      },
      {
        type: "text",
        heading: "Design Process & Team Collaboration",
        text: "We iterated collaboratively in Figma, exploring layouts, defining components, and refining interaction patterns through critique and testing."
      },
      {
        type: "image",
        src: "assets/project-images/freelens/3.png",
        size: "large"
      },
      {
        type: "text",
        heading: "User Workflow Mapping",
        text: "We mapped end to end workflows to ensure the experience remained intuitive, from snapping a receipt to reviewing project reports."
      },
      {
        type: "image",
        src: "assets/project-images/freelens/4.png",
        size: "large"
      },
      {
        type: "text",
        heading: "Market Opportunity & Positioning",
        text: "FreeLens expands beyond corporate expense tools by targeting independent workers directly."
      },
      {
        type: "list",
        items: [
          "Project level tracking provides a clear differentiator",
          "Automation reduces administrative overhead",
          "Freelancer focused design builds trust and loyalty",
          "Positioned to capture a growing segment underserved by existing solutions"
        ]
      },
      {
        type: "text",
        heading: "Outcome",
        text: "The project was presented as an investment pitch outlining user insights, feature roadmap, and strategic positioning. It demonstrates how thoughtful UX and automation can unlock meaningful efficiency gains for freelancers."
      },
      {
        type: "list",
        heading: "Skills Demonstrated",
        items: [
          "UI/UX design",
          "User research",
          "Product strategy",
          "Information architecture",
          "Interaction design",
          "Workflow mapping",
          "Figma prototyping",
          "Collaborative design",
          "Data informed problem framing",
          "Pitch storytelling"
        ]
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
        type: "image",
        src: "assets/project-images/folded-reality/1.png",
        size: "large"
      },
      {
        type: "text",
        heading: "Overview",
        text: "Folded Reality is an exploration of transforming flat materials into an immersive mechanical world through pop up structures and digital fabrication. The project investigates how careful folding, cutting, and assembly can create a sense of discovery, inviting the viewer to open the book as if stepping through a doorway into another dimension. Combining hand craft with laser cutting across paper, wood, and acrylic, the final piece presents a portal like scene where a creature emerges from within, blurring the boundary between page and environment."
      },
      {
        type: "text",
        heading: "Intent",
        text: "I wanted the experience of opening the book to feel cinematic and slightly magical, as if uncovering a hidden world tucked inside an ordinary object."
      },
      {
        type: "text",
        heading: "Origins — Interest in Pop Up Structures",
        text: "This project grew out of an early fascination with pop up books and the intricate engineering behind folds, joints, and motion. Through initial exploration, I studied how simple cuts and hinges could create volume, movement, and surprise. These experiments helped me understand the mechanical logic behind transforming a flat sheet into a dynamic spatial experience."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/folded-reality/2.png",
          "assets/project-images/folded-reality/3.png"
        ]
      },
      {
        type: "text",
        heading: "Workflow — Sketching Through Making",
        text: "The process began with hands on experimentation. I sketched by cutting paper directly, playing with random shapes, folds, and connections to see how forms behaved in motion. This tactile approach allowed unexpected ideas to emerge quickly."
      },
      {
        type: "text",
        text: "Once a promising structure appeared, I carefully disassembled it, documented the parts, and translated them into precise templates in Adobe Illustrator. This step allowed me to understand the geometry behind each fold and prepare for digital fabrication."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/folded-reality/4.png",
          "assets/project-images/folded-reality/5.png"
        ]
      },
      {
        type: "text",
        heading: "Iteration — Laser Cut Prototyping",
        text: "Using Illustrator files, I laser cut paper prototypes and repeatedly assembled them to test alignment, motion, and durability. Multiple iterations were produced to refine proportions, improve fold behavior, and ensure the mechanism opened smoothly."
      },
      {
        type: "text",
        text: "This stage was critical in bridging intuition with precision, allowing rapid testing while maintaining accuracy."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/folded-reality/6.png",
          "assets/project-images/folded-reality/7.png",
          "assets/project-images/folded-reality/8.png"
        ]
      },
      {
        type: "text",
        heading: "Final Fabrication — Templates to Object",
        text: "After refining the mechanism, I hand illustrated the visual elements, printed them, and laser cut the final components. The book structure itself was fabricated from laser cut wood, with hinges installed so the object opens like a door, reinforcing the idea of entering another space."
      },
      {
        type: "text",
        text: "Laser cut and etched acrylic elements were integrated to evoke a portal, adding depth and contrast between materials. Final assembly required careful alignment to ensure smooth motion and structural stability."
      },
      {
        type: "images-row",
        images: [
          "assets/project-images/folded-reality/9.png",
          "assets/project-images/folded-reality/10.png",
          "assets/project-images/folded-reality/11.png"
        ]
      },
      {
        type: "list",
        heading: "Challenges",
        items: [
          "Preventing thin wood panels from warping after laser cutting",
          "Maintaining alignment of larger pop up elements through repeated opening",
          "Precisely registering printed graphics with laser cut geometry",
          "Balancing structural strength with delicate motion"
        ]
      },
      {
        type: "text",
        text: "These constraints pushed me to refine both fabrication technique and assembly strategy."
      },
      {
        type: "text",
        heading: "Outcome",
        text: "Folded Reality demonstrates how digital fabrication can expand traditional paper engineering into a multi material experience. The final piece invites viewers to engage physically, revealing a layered environment that unfolds through interaction."
      },
      {
        type: "list",
        heading: "Skills Demonstrated",
        items: [
          "Laser cutting across paper, wood, and acrylic",
          "Physical prototyping and iterative testing",
          "Adobe Illustrator template development",
          "Mechanical paper engineering",
          "Precision assembly",
          "Material integration",
          "Hinged construction",
          "Visual storytelling through objects",
          "Craft driven experimentation"
        ]
      }
    ]
  }
];