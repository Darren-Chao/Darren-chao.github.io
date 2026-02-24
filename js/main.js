document.addEventListener('DOMContentLoaded', () => {
  
  // =========================================
  // === 1. CUSTOM CURSOR LOGIC ============
  // =========================================
  const mainCursor = document.getElementById('main-cursor');
  const cursorArrow = document.getElementById('cursor-arrow');
  const cursorPoint = document.getElementById('cursor-point');
  const cursorClick = document.getElementById('cursor-click');
  const follower = document.getElementById('cursor-follower');
  
  let isClicking = false;
  
  function setCursorState(state) {
    if (isClicking) return;
    cursorArrow.classList.remove('active');
    cursorPoint.classList.remove('active');
    cursorClick.classList.remove('active');
    if (state === 'arrow') cursorArrow.classList.add('active');
    if (state === 'point') cursorPoint.classList.add('active');
    if (state === 'click') cursorClick.classList.add('active');
  }

  document.addEventListener('mousemove', (e) => {
    mainCursor.style.opacity = 1;
    mainCursor.style.top = e.clientY + 'px';
    mainCursor.style.left = e.clientX + 'px';
    if(follower) {
      follower.style.top = e.clientY + 'px';
      follower.style.left = e.clientX + 'px';
    }
  });

  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    const isClickable = target.closest('a') || 
                        target.closest('button') || 
                        target.closest('.social-btn') || 
                        target.closest('.nav-btn') ||
                        target.closest('.download-btn') ||
                        target.closest('.modal-close-btn') ||
                        target.closest('.lightbox-back-btn') ||
                        target.closest('.illustrations-grid img');
    if (isClickable) {
      setCursorState('point');
    } else {
      setCursorState('arrow');
    }
  });

  function isInteractive(element) {
    return element.closest('a') || 
           element.closest('button') || 
           element.closest('.social-btn') || 
           element.closest('.nav-btn') ||
           element.closest('.download-btn') ||
           element.closest('.modal-close-btn') ||
           element.closest('.lightbox-back-btn') ||
           element.closest('.illustrations-grid img');
  }

  document.addEventListener('mousedown', (e) => {
    if (isInteractive(e.target)) {
      isClicking = true;
      cursorArrow.classList.remove('active');
      cursorPoint.classList.remove('active');
      cursorClick.classList.add('active');
      mainCursor.style.transform = "scale(0.9)";
    }
  });

  document.addEventListener('mouseup', () => {
    if (isClicking) {
      mainCursor.style.transform = "scale(1)";
      setTimeout(() => {
        isClicking = false;
        const hoveredEl = document.elementFromPoint(
          parseInt(mainCursor.style.left), 
          parseInt(mainCursor.style.top)
        );
        if (hoveredEl && isInteractive(hoveredEl)) {
          setCursorState('point');
        } else {
          setCursorState('arrow');
        }
      }, 150); 
    }
  });


  // =========================================
  // === 2. TYPING EFFECT ====================
  // =========================================
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


  // =========================================
  // === 3. TAB SWITCHING ====================
  // =========================================
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.tab-section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const alreadyActive = btn.classList.contains('active');
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
      if (targetId === 'projects' && !alreadyActive) {
        runDealingAnimation();
      }
    });
  });


  // =========================================
  // === 4. POPULATE & ANIMATE PROJECTS ======
  // =========================================
  const projectsContainer = document.querySelector('.projects-container');
  
  if (projectsContainer && typeof projectsData !== 'undefined') {
    projectsContainer.innerHTML = ''; 

    projectsData.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card custom-card text-black';
      card.setAttribute('data-id', project.id);

      // Derive hover image path by inserting -hover before the extension
      const hoverImage = project.cardImage.replace(/(\.\w+)$/, '-hover$1');
      
      card.innerHTML = `
        <img src="${project.cardImage}" class="card-bg-img" alt="${project.title}">
        <img src="${hoverImage}" class="card-hover-img" alt="${project.title} hover">
        <div class="project-text overlay-text">
          <h3>${project.title}</h3>
          <p>${project.shortDesc}</p>
        </div>
      `;
      projectsContainer.appendChild(card);
    });
  }

  function runDealingAnimation() {
    const cards = document.querySelectorAll('.project-card'); 
    if (cards.length === 0) return;

    cards.forEach((card) => {
      const randomRot = Math.random() * 20 - 10; 
      card.style.transition = 'none'; 
      card.style.transform = `translate(0px, 100px) rotateZ(${randomRot}deg) scale(0.5)`;
      card.style.opacity = '0';
    });

    setTimeout(() => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
          card.style.transform = 'translate(0, 0) rotateZ(0deg) scale(1)';
          card.style.opacity = '1';
          setTimeout(() => { card.style.transform = ''; }, 650); 
        }, index * 100); 
      });
    }, 100); 
  }

  runDealingAnimation();

  // ===== Examine Card Logic =====
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      document.body.classList.add('examining'); 
      if(follower) follower.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
      document.body.classList.remove('examining');
      if(follower) follower.classList.remove('active');
    });
  });


  // =========================================
  // === 5. PROJECT MODAL LOGIC ============
  // =========================================
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalGallery = document.getElementById('modal-gallery');
  const closeBtn = document.getElementById('modal-close-btn');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-id');
      const data = projectsData.find(p => p.id === pid);

      if (data) {
        modalTitle.textContent = data.title;
        modalDesc.innerHTML = '';
        modalGallery.innerHTML = '';
        
        if (data.content && data.content.length > 0) {
          data.content.forEach(block => {
            
            if (block.type === 'text') {
              const textBlock = document.createElement('div');
              textBlock.className = 'content-text-block';
              if (block.heading) {
                const heading = document.createElement('h4');
                heading.textContent = block.heading;
                textBlock.appendChild(heading);
              }
              const paragraph = document.createElement('p');
              const urlRegex = /(https?:\/\/[^\s]+)/g;
              const text = block.text;
              if (text && urlRegex.test(text)) {
                const parts = text.split(urlRegex);
                parts.forEach(part => {
                  if (part.match(urlRegex)) {
                    const link = document.createElement('a');
                    link.href = part;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.textContent = part;
                    link.style.color = '#0066cc';
                    link.style.textDecoration = 'underline';
                    paragraph.appendChild(link);
                  } else {
                    paragraph.appendChild(document.createTextNode(part));
                  }
                });
              } else {
                paragraph.textContent = text || '';
              }
              textBlock.appendChild(paragraph);
              modalDesc.appendChild(textBlock);
            }
            
            else if (block.type === 'list') {
              const listBlock = document.createElement('div');
              listBlock.className = 'content-list-block';
              if (block.heading) {
                const heading = document.createElement('h4');
                heading.textContent = block.heading;
                listBlock.appendChild(heading);
              }
              const ul = document.createElement('ul');
              ul.className = 'content-list';
              block.items.forEach(item => {
                const li = document.createElement('li');
                if (typeof item === 'string') {
                  li.textContent = item;
                } else if (item.text) {
                  li.innerHTML = item.text;
                  if (item.subItems && item.subItems.length > 0) {
                    const subUl = document.createElement('ul');
                    subUl.className = 'content-sublist';
                    item.subItems.forEach(subItem => {
                      const subLi = document.createElement('li');
                      subLi.textContent = subItem;
                      subUl.appendChild(subLi);
                    });
                    li.appendChild(subUl);
                  }
                }
                ul.appendChild(li);
              });
              listBlock.appendChild(ul);
              modalDesc.appendChild(listBlock);
            }
            
            else if (block.type === 'image') {
              const imgContainer = document.createElement('div');
              imgContainer.className = `content-image-block ${block.size || 'medium'}`;
              const img = document.createElement('img');
              img.src = block.src;
              img.alt = data.title;
              imgContainer.appendChild(img);
              modalDesc.appendChild(imgContainer);
            }
            
            else if (block.type === 'images-row') {
              const rowContainer = document.createElement('div');
              rowContainer.className = 'content-images-row';
              block.images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = data.title;
                rowContainer.appendChild(img);
              });
              modalDesc.appendChild(rowContainer);
            }
          });
        } else {
          modalDesc.textContent = data.fullDesc || '';
          if (data.galleryImages && data.galleryImages.length > 0) {
            data.galleryImages.forEach(src => {
              const img = document.createElement('img');
              img.src = src;
              modalGallery.appendChild(img);
            });
          }
        }
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
      }
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    const modal = document.querySelector('.project-modal');
    if (modal) modal.scrollTop = 0;
  };
  
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  if(modalOverlay) modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });


  // =========================================
  // === 6. ILLUSTRATIONS & LIGHTBOX =======
  // =========================================
  const galleryGrid = document.querySelector('.illustrations-grid');
  
  if (galleryGrid) {
    const lightbox = document.createElement('div');
    lightbox.className = 'illustration-lightbox';
    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-img';
    const backBtn = document.createElement('button');
    backBtn.className = 'lightbox-back-btn';
    backBtn.textContent = '← Back'; 
    lightbox.appendChild(backBtn);
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => { lightboxImg.src = ''; }, 300);
    };

    backBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    galleryGrid.innerHTML = ''; 
    for (let i = 1; i <= 14; i++) {
      const img = document.createElement('img');
      img.src = `assets/assorted-illustrations/${i}.png`;
      img.loading = "lazy"; 
      img.style.opacity = '0';
      img.style.animation = `fadeIn 0.5s ease forwards ${i * 0.1}s`; 
      img.addEventListener('click', () => {
        lightboxImg.src = img.src; 
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
      galleryGrid.appendChild(img);
    }
  }


  // =========================================
  // === 7. ABOUT ME 3D TILT ===============
  // =========================================
  const aboutCardWrapper = document.querySelector('.about-card-wrapper');
  const aboutCard = document.querySelector('.about-card-inner');
  const glare = document.querySelector('.about-card-glare');

  if (aboutCardWrapper && aboutCard) {
    aboutCardWrapper.addEventListener('mousemove', (e) => {
      const rect = aboutCardWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10; 
      const rotateY = ((x - centerX) / centerX) * 10;  
      aboutCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      if(glare) {
        glare.style.background = `linear-gradient(${125 + rotateY * 2}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`;
      }
    });
    aboutCardWrapper.addEventListener('mouseleave', () => {
      aboutCard.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
  }
});