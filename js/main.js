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

  typeAllLines(lines);

  // ===== SPA Tabs =====
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabSections = document.querySelectorAll('.tab-section');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tabSections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });

  // ===== Cursor Follower Logic =====
  const cursorFollower = document.getElementById('cursor-follower');
  
  // Track mouse movement globally to update cursor position
  document.addEventListener('mousemove', (e) => {
    cursorFollower.style.top = e.clientY + 'px';
    cursorFollower.style.left = e.clientX + 'px';
  });

  // ===== Project Cards Logic =====
  const overlay = document.createElement('div');
  overlay.classList.add('project-modal-overlay');
  document.body.appendChild(overlay);

  document.querySelectorAll('.project-card').forEach(card => {
    
    // 1. Handle Cursor Hover Effects
    card.addEventListener('mouseenter', () => {
      cursorFollower.classList.add('active');
    });
    
    card.addEventListener('mouseleave', () => {
      cursorFollower.classList.remove('active');
    });

    // 2. Handle Card Click (Modal Open)
    card.addEventListener('click', () => {
      // Get project info
      const projectTitle = card.querySelector('.project-text h3').textContent;
      const projectDesc = card.querySelector('.project-text p').innerHTML;
      
      // Note: We are grabbing the thumbnail here. 
      // If you want high-res images from hidden details, you can query .project-details img instead.
      const projectImages = Array.from(card.querySelectorAll('.project-image img')).map(img => img.src);

      // Force cursor to hide when modal opens
      cursorFollower.classList.remove('active');

      // Clear overlay
      overlay.innerHTML = '';

      // Create modal content
      const modal = document.createElement('div');
      modal.classList.add('project-modal');

      // Back button
      const backBtn = document.createElement('button');
      backBtn.classList.add('back-btn');
      backBtn.textContent = '← Back';
      modal.appendChild(backBtn);

      // Project title
      const titleEl = document.createElement('h3');
      titleEl.textContent = projectTitle;
      modal.appendChild(titleEl);

      // Project images
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

      // Project description (grab full content if available, otherwise summary)
      const descEl = document.createElement('p');
      const fullDetails = card.querySelector('.project-details p');
      
      if(fullDetails) {
         descEl.innerHTML = fullDetails.innerHTML;
      } else {
         descEl.innerHTML = projectDesc;
      }
      modal.appendChild(descEl);

      // Add modal to overlay
      overlay.appendChild(modal);

      // Show overlay and modal
      overlay.style.display = 'flex';
      setTimeout(() => modal.classList.add('active'), 20);

      // Close Logic
      const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 300);
      };

      backBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent bubbling
        closeModal();
      });

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeModal();
        }
      });
    });
  });
});