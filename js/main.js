window.addEventListener('DOMContentLoaded', () => {
  // ===== Typing effect =====
  const lines = document.querySelectorAll('#typing-text .line');
  const typingSpeed = 40;
  const lineDelay = 400;

  function typeLine(line, callback) {
    const text = line.textContent;
    line.textContent = '';
    line.style.opacity = 1;
    let i = 0;

    function typeChar() {
      if (i < text.length) {
        line.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, typingSpeed);
      } else {
        setTimeout(callback, lineDelay);
      }
    }
    typeChar();
  }

  function typeAllLines(lines, index = 0) {
    if (index >= lines.length) return;
    typeLine(lines[index], () => typeAllLines(lines, index + 1));
  }

  if(lines.length > 0) {
      typeAllLines(lines);
  }

  // ===== SPA Tabs =====
  // Updated selector to match the new 'nav-btn' class
  const tabButtons = document.querySelectorAll('.nav-btn');
  const tabSections = document.querySelectorAll('.tab-section');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      
      // Remove 'active' from all buttons (reverts them to default/hover state)
      tabButtons.forEach(b => b.classList.remove('active'));
      
      // Add 'active' to clicked button (locks it in 'press' state)
      btn.classList.add('active');
      
      // Show correct section
      tabSections.forEach(sec => sec.classList.remove('active'));
      const targetSection = document.getElementById(target);
      if(targetSection) targetSection.classList.add('active');
    });
  });

  // ===== Cursor Follower Logic =====
  const cursorFollower = document.getElementById('cursor-follower');
  
  if(cursorFollower) {
      document.addEventListener('mousemove', (e) => {
        cursorFollower.style.top = e.clientY + 'px';
        cursorFollower.style.left = e.clientX + 'px';
      });
  }

  // ===== Project Cards Logic =====
  const overlay = document.createElement('div');
  overlay.classList.add('project-modal-overlay');
  document.body.appendChild(overlay);

  document.querySelectorAll('.project-card').forEach(card => {
    
    card.addEventListener('mouseenter', () => {
      if(cursorFollower) cursorFollower.classList.add('active');
    });
    
    card.addEventListener('mouseleave', () => {
      if(cursorFollower) cursorFollower.classList.remove('active');
    });

    card.addEventListener('click', () => {
      const projectText = card.querySelector('.project-text h3');
      const projectTitle = projectText ? projectText.textContent : 'Project';
      const projectP = card.querySelector('.project-text p');
      const projectDesc = projectP ? projectP.innerHTML : '';
      
      const projectImages = Array.from(card.querySelectorAll('.project-image img')).map(img => img.src);

      if(cursorFollower) cursorFollower.classList.remove('active');

      overlay.innerHTML = '';

      const modal = document.createElement('div');
      modal.classList.add('project-modal');

      const backBtn = document.createElement('button');
      backBtn.classList.add('back-btn');
      backBtn.textContent = '← Back';
      modal.appendChild(backBtn);

      const titleEl = document.createElement('h3');
      titleEl.textContent = projectTitle;
      modal.appendChild(titleEl);

      if (projectImages.length > 0) {
        const imagesContainer = document.createElement('div');
        imagesContainer.classList.add('details-images');
        projectImages.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          imagesContainer.appendChild(img);
        });
        modal.appendChild(imagesContainer);
      }

      const descEl = document.createElement('p');
      const fullDetails = card.querySelector('.project-details p');
      
      if(fullDetails) {
         descEl.innerHTML = fullDetails.innerHTML;
      } else {
         descEl.innerHTML = projectDesc;
      }
      modal.appendChild(descEl);

      overlay.appendChild(modal);

      overlay.style.display = 'flex';
      setTimeout(() => modal.classList.add('active'), 20);

      const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 300);
      };

      backBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
      });

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeModal();
        }
      });
    });
  });

  // ===== About Me Card 3D Tilt Logic =====
  const aboutWrapper = document.getElementById('about-card-3d');
  
  if (aboutWrapper) {
    const aboutInner = aboutWrapper.querySelector('.about-card-inner');

    aboutWrapper.addEventListener('mousemove', (e) => {
      const rect = aboutWrapper.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;

      const rotateY = mouseX / 10; 
      const rotateX = mouseY / 10 * -1; 

      aboutInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    aboutWrapper.addEventListener('mouseleave', () => {
      aboutInner.style.transform = `rotateX(0) rotateY(0) scale(1)`;
    });
  }
});