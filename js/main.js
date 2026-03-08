document.addEventListener('DOMContentLoaded', () => {

  // =========================================
  // === 1. CUSTOM CURSOR ====================
  // =========================================
  const mainCursor = document.getElementById('main-cursor');
  const cursorArrow = document.getElementById('cursor-arrow');
  const cursorPoint = document.getElementById('cursor-point');
  const cursorClick = document.getElementById('cursor-click');
  const follower    = document.getElementById('cursor-follower');
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
    mainCursor.style.top  = e.clientY + 'px';
    mainCursor.style.left = e.clientX + 'px';
    if (follower) { follower.style.top = e.clientY + 'px'; follower.style.left = e.clientX + 'px'; }
  });
  document.addEventListener('mouseover', (e) => {
    const t = e.target;
    const clickable = t.closest('a') || t.closest('button') || t.closest('.social-btn') ||
                      t.closest('.nav-btn') || t.closest('.download-btn') ||
                      t.closest('.modal-close-btn') || t.closest('.lightbox-back-btn') ||
                      t.closest('.illustrations-grid img');
    setCursorState(clickable ? 'point' : 'arrow');
  });
  function isInteractive(el) {
    return el.closest('a') || el.closest('button') || el.closest('.social-btn') ||
           el.closest('.nav-btn') || el.closest('.download-btn') ||
           el.closest('.modal-close-btn') || el.closest('.lightbox-back-btn') ||
           el.closest('.illustrations-grid img');
  }
  document.addEventListener('mousedown', (e) => {
    if (isInteractive(e.target)) {
      isClicking = true;
      cursorArrow.classList.remove('active');
      cursorPoint.classList.remove('active');
      cursorClick.classList.add('active');
      mainCursor.style.transform = 'scale(0.9)';
    }
  });
  document.addEventListener('mouseup', () => {
    if (isClicking) {
      mainCursor.style.transform = 'scale(1)';
      setTimeout(() => {
        isClicking = false;
        const hovered = document.elementFromPoint(parseInt(mainCursor.style.left), parseInt(mainCursor.style.top));
        setCursorState(hovered && isInteractive(hovered) ? 'point' : 'arrow');
      }, 150);
    }
  });


  // =========================================
  // === 2. SPRITE SYSTEM ====================
  // =========================================
  const sprite = document.getElementById('walk-sprite');
  const typingContainer = document.getElementById('typing-text');

  const SPRITES = {
    walk1: 'assets/sprite/walk1.webp',
    walk2: 'assets/sprite/walk2.webp',
    idle:  'assets/sprite/idle.webp',
    jump:  'assets/sprite/jump.webp',
  };

  const WALK_SPEED_NORMAL = 160;
  const TEXT_GAP          = 18;

  let walkFrame = 0, walkInterval = null;
  let idleLineEl = null;
  let animationDone = false;

  function setWalkSpeed(ms) {
    clearInterval(walkInterval);
    walkInterval = setInterval(() => {
      walkFrame = walkFrame === 0 ? 1 : 0;
      sprite.src = walkFrame === 0 ? SPRITES.walk1 : SPRITES.walk2;
    }, ms);
  }

  function stopWalking() {
    clearInterval(walkInterval);
    walkInterval = null;
    sprite.src = SPRITES.idle;
  }

  function getSpriteTop(lineEl) {
    const lineTop    = lineEl.offsetTop;
    const lineHeight = lineEl.offsetHeight;
    const baseline   = lineTop + lineHeight * 0.82;
    return baseline - sprite.offsetHeight;
  }

  function placeSprite(x, lineEl) {
    sprite.style.left = x + 'px';
    sprite.style.top  = getSpriteTop(lineEl) + 'px';
  }

  function measureTextWidth(text, refEl) {
    const s = document.createElement('span');
    const cs = getComputedStyle(refEl);
    s.style.cssText = `position:absolute;visibility:hidden;white-space:nowrap;
      font-family:${cs.fontFamily};font-size:${cs.fontSize};
      font-weight:${cs.fontWeight};letter-spacing:${cs.letterSpacing};`;
    s.textContent = text;
    document.body.appendChild(s);
    const w = s.getBoundingClientRect().width;
    document.body.removeChild(s);
    return w;
  }

  window.addEventListener('resize', () => {
    if (!animationDone || !idleLineEl) return;
    const x   = measureTextWidth(idleLineEl.textContent, idleLineEl) + TEXT_GAP;
    const top = getSpriteTop(idleLineEl);
    sprite.style.transition = 'none';
    sprite.style.left = x + 'px';
    sprite.style.top  = top + 'px';
  });

  // Idle hover → jump (manual arc, same as teleport jump)
  let isJumping = false;
  sprite.addEventListener('mouseenter', () => {
    if (isJumping || walkInterval) return;
    isJumping = true;
    doIdleJump(() => { isJumping = false; });
  });

  // Generic idle jump arc using JS — no CSS animation so we fully control timing
  function doIdleJump(onDone) {
    const baseTop = parseFloat(sprite.style.top) || 0;
    const PEAK_OFFSET = sprite.offsetHeight * 1.2; // how high above baseline
    const RISE_MS = 220;
    const FALL_MS = 220;

    sprite.src = SPRITES.jump;
    // Rise
    sprite.style.transition = `top ${RISE_MS}ms cubic-bezier(0.2, 0.8, 0.4, 1)`;
    sprite.style.top = (baseTop - PEAK_OFFSET) + 'px';

    setTimeout(() => {
      // Fall back
      sprite.style.transition = `top ${FALL_MS}ms cubic-bezier(0.4, 0, 0.8, 0.6)`;
      sprite.style.top = baseTop + 'px';

      setTimeout(() => {
        // Tiny squash on land
        sprite.style.transition = 'none';
        sprite.style.transform = 'scaleX(1.25) scaleY(0.75)';
        setTimeout(() => {
          sprite.style.transition = 'transform 0.12s ease';
          sprite.style.transform  = 'scale(1)';
          setTimeout(() => {
            sprite.style.transition = 'none';
            sprite.src = SPRITES.idle;
            if (onDone) onDone();
          }, 120);
        }, 60);
      }, FALL_MS);
    }, RISE_MS);
  }

  // Teleport jump: rises, shrinks+fades at peak, reappears on line2 mid-air, falls and lands
  function doTeleportJump(line1X, line1El, line2X, line2El, onDone) {
    const baseLine1 = getSpriteTop(line1El);
    const baseLine2 = getSpriteTop(line2El);
    const PEAK_OFFSET = sprite.offsetHeight * 1;
    const RISE_MS  = 230;
    const FADE_MS  = 130;
    const FALL_MS  = 260;

    // 1. Switch to jump sprite and rise
    sprite.src = SPRITES.jump;
    sprite.style.transition = `top ${RISE_MS}ms cubic-bezier(0.2, 0.9, 0.4, 1)`;
    sprite.style.top = (baseLine1 - PEAK_OFFSET) + 'px';

    // 2. At peak: shrink + fade out
    setTimeout(() => {
      sprite.style.transition = `transform ${FADE_MS}ms ease-in, opacity ${FADE_MS}ms ease-in`;
      sprite.style.transform  = 'scale(0)';
      sprite.style.opacity    = '0';

      // 3. While invisible: teleport position to line 2, same height above baseline
      setTimeout(() => {
        sprite.style.transition = 'none';
        sprite.style.left    = line2X + 'px';
        sprite.style.top     = (baseLine2 - PEAK_OFFSET) + 'px';
        sprite.style.transform = 'scale(0)';
        // still opacity 0

        void sprite.offsetWidth; // force reflow

        // 4. Expand + fade in — still in jump sprite, mid-air on line 2
        sprite.style.transition = `transform ${FADE_MS}ms ease-out, opacity ${FADE_MS}ms ease-out`;
        sprite.style.transform  = 'scale(1)';
        sprite.style.opacity    = '1';

        // 5. Fall down to line 2 baseline
        setTimeout(() => {
          sprite.style.transition = `top ${FALL_MS}ms cubic-bezier(0.4, 0, 0.8, 0.6)`;
          sprite.style.top = baseLine2 + 'px';

          // 6. Land: squash, switch to idle, then done
          setTimeout(() => {
            sprite.style.transition = 'none';
            sprite.style.transform  = 'scaleX(1.25) scaleY(0.75)';
            setTimeout(() => {
              sprite.style.transition = 'transform 0.12s ease';
              sprite.style.transform  = 'scale(1)';
              setTimeout(() => {
                sprite.style.transition = 'none';
                sprite.src = SPRITES.idle;
                if (onDone) onDone();
              }, 120);
            }, 60);
          }, FALL_MS);

        }, FADE_MS); // start falling as soon as he's reappeared

      }, FADE_MS); // invisible — reposition instantly
    }, RISE_MS);   // wait for rise to peak
  }


  // =========================================
  // === 3. TYPING + SPRITE WALKING ==========
  // =========================================
  const lines = document.querySelectorAll('#typing-text .line');
  const TYPING_SPEED = 40;
  const LINE_PAUSE   = 300;

  function typeLine(lineEl, onChar, onDone) {
    const fullText = lineEl.textContent;
    lineEl.textContent = '';
    lineEl.style.opacity = 1;
    let i = 0;
    function next() {
      if (i < fullText.length) {
        lineEl.textContent += fullText.charAt(i++);
        onChar(lineEl.textContent, lineEl);
        setTimeout(next, TYPING_SPEED);
      } else {
        setTimeout(onDone, LINE_PAUSE);
      }
    }
    next();
  }

  function startTypingSequence() {
    if (!lines.length) return;
    const line1 = lines[0];
    const line2 = lines[1];

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {

        // --- LINE 1: walk right as text types ---
        sprite.classList.add('walking');
        placeSprite(TEXT_GAP, line1);
        sprite.style.opacity    = '1';
        sprite.style.transform  = 'scale(1)';
        setWalkSpeed(WALK_SPEED_NORMAL);

        typeLine(
          line1,
          (currentText, lineEl) => {
            placeSprite(measureTextWidth(currentText, lineEl) + TEXT_GAP, lineEl);
          },
          () => {
            if (!line2) {
              sprite.classList.remove('walking');
              stopWalking();
              animationDone = true;
              idleLineEl = line1;
              return;
            }

            // Stop walking, go idle briefly
            sprite.classList.remove('walking');
            stopWalking();

            // Short idle pause, then teleport jump to line 2
            setTimeout(() => {
              isJumping = true;
              const line1X = parseFloat(sprite.style.left) || TEXT_GAP;

              doTeleportJump(line1X, line1, TEXT_GAP, line2, () => {
                isJumping = false;

                // Small settle, then walk and type line 2
                setTimeout(() => {
                  sprite.classList.add('walking');
                  setWalkSpeed(WALK_SPEED_NORMAL);

                  typeLine(
                    line2,
                    (currentText, lineEl) => {
                      placeSprite(measureTextWidth(currentText, lineEl) + TEXT_GAP, lineEl);
                    },
                    () => {
                      sprite.classList.remove('walking');
                      stopWalking();
                      animationDone = true;
                      idleLineEl    = line2;
                    }
                  );
                }, 150);
              });
            }, 400);
          }
        );

      });
    });
  }

  startTypingSequence();


  // =========================================
  // === 4. TAB SWITCHING ====================
  // =========================================
  const navBtns  = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.tab-section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId      = btn.getAttribute('data-target');
      const alreadyActive = btn.classList.contains('active');
      btn.classList.add('pressing');
      setTimeout(() => btn.classList.remove('pressing'), 200);
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
      if (targetId === 'projects' && !alreadyActive) runDealingAnimation();
    });
  });


  // =========================================
  // === 5. PROJECTS GRID & ANIMATION ========
  // =========================================
  const projectsContainer = document.querySelector('.projects-container');

  if (projectsContainer && typeof projectsData !== 'undefined') {
    projectsContainer.innerHTML = '';
    projectsData.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card custom-card text-black';
      card.setAttribute('data-id', project.id);
      const hoverImage = project.cardImage.replace(/(\.\w+)$/, '-hover$1');
      card.innerHTML = `
        <img src="${project.cardImage}" class="card-bg-img" alt="${project.title}">
        <img src="${hoverImage}" class="card-hover-img" alt="${project.title} hover">
        <div class="project-text overlay-text">
          <h3>${project.title}</h3>
          <p>${project.cardDesc || project.shortDesc}</p>
        </div>
      `;
      projectsContainer.appendChild(card);
    });
  }

  function runDealingAnimation() {
    const cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;
    cards.forEach(card => {
      const rot = Math.random() * 20 - 10;
      card.style.transition = 'none';
      card.style.transform  = `translate(0px,100px) rotateZ(${rot}deg) scale(0.5)`;
      card.style.opacity    = '0';
    });
    setTimeout(() => {
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
          card.style.transform  = 'translate(0,0) rotateZ(0deg) scale(1)';
          card.style.opacity    = '1';
          setTimeout(() => { card.style.transform = ''; }, 650);
        }, i * 100);
      });
    }, 100);
  }

  runDealingAnimation();

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => { document.body.classList.add('examining'); if (follower) follower.classList.add('active'); });
    card.addEventListener('mouseleave', () => { document.body.classList.remove('examining'); if (follower) follower.classList.remove('active'); });
  });


  // =========================================
  // === 6. PROJECT MODAL ====================
  // =========================================
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalTitle   = document.getElementById('modal-title');
  const modalDesc    = document.getElementById('modal-desc');
  const modalGallery = document.getElementById('modal-gallery');
  const closeBtn     = document.getElementById('modal-close-btn');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid  = card.getAttribute('data-id');
      const data = projectsData.find(p => p.id === pid);
      if (!data) return;

      modalTitle.textContent = data.shortDesc
        ? `${data.modalTitle || data.title} — ${data.shortDesc}`
        : (data.modalTitle || data.title);

      const existingSub = document.getElementById('modal-subtitle');
      if (existingSub) existingSub.remove();
      modalDesc.innerHTML = '';
      modalGallery.innerHTML = '';

      if (data.content && data.content.length > 0) {
        data.content.forEach(block => {
          if (block.type === 'text') {
            const tb = document.createElement('div'); tb.className = 'content-text-block';
            if (block.heading) { const h = document.createElement('h4'); h.textContent = block.heading; tb.appendChild(h); }
            const p = document.createElement('p');
            const urlRx = /(https?:\/\/[^\s]+)/g;
            if (block.text && urlRx.test(block.text)) {
              block.text.split(urlRx).forEach(part => {
                if (part.match(urlRx)) {
                  const a = document.createElement('a');
                  a.href = part; a.target = '_blank'; a.rel = 'noopener noreferrer';
                  a.textContent = part; a.style.color = '#0066cc'; a.style.textDecoration = 'underline';
                  p.appendChild(a);
                } else { p.appendChild(document.createTextNode(part)); }
              });
            } else { p.textContent = block.text || ''; }
            tb.appendChild(p); modalDesc.appendChild(tb);
          }
          else if (block.type === 'list') {
            const lb = document.createElement('div'); lb.className = 'content-list-block';
            if (block.heading) { const h = document.createElement('h4'); h.textContent = block.heading; lb.appendChild(h); }
            const ul = document.createElement('ul'); ul.className = 'content-list';
            block.items.forEach(item => {
              const li = document.createElement('li');
              if (typeof item === 'string') { li.textContent = item; }
              else if (item.text) {
                li.innerHTML = item.text;
                if (item.subItems && item.subItems.length) {
                  const sub = document.createElement('ul'); sub.className = 'content-sublist';
                  item.subItems.forEach(s => { const sli = document.createElement('li'); sli.textContent = s; sub.appendChild(sli); });
                  li.appendChild(sub);
                }
              }
              ul.appendChild(li);
            });
            lb.appendChild(ul); modalDesc.appendChild(lb);
          }
          else if (block.type === 'image') {
            const ic = document.createElement('div'); ic.className = `content-image-block ${block.size || 'medium'}`;
            const img = document.createElement('img'); img.src = block.src; img.alt = data.title; img.loading = 'lazy';
            ic.appendChild(img); modalDesc.appendChild(ic);
          }
          else if (block.type === 'images-row') {
            const rc = document.createElement('div'); rc.className = 'content-images-row';
            block.images.forEach(src => { const img = document.createElement('img'); img.src = src; img.alt = data.title; img.loading = 'lazy'; rc.appendChild(img); });
            modalDesc.appendChild(rc);
          }
        });
      } else {
        modalDesc.textContent = data.fullDesc || '';
        (data.galleryImages || []).forEach(src => { const img = document.createElement('img'); img.src = src; img.loading = 'lazy'; modalGallery.appendChild(img); });
      }

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';

      const rowImgs = modalDesc.querySelectorAll('.content-images-row img');
      let loaded = 0;
      if (!rowImgs.length) return;
      rowImgs.forEach(img => {
        if (img.complete) { loaded++; if (loaded === rowImgs.length) equalizeImageRows(); }
        else { img.addEventListener('load', () => { loaded++; if (loaded === rowImgs.length) equalizeImageRows(); }); }
      });
    });
  });

  function equalizeImageRows() {
    document.querySelectorAll('.content-images-row').forEach(row => {
      const imgs = Array.from(row.querySelectorAll('img'));
      if (!imgs.length) return;
      imgs.forEach(img => img.style.height = 'auto');
      const ready = imgs.filter(img => img.complete && img.naturalHeight > 0);
      if (!ready.length) return;
      const avg = ready.reduce((s, img) => s + img.offsetHeight, 0) / ready.length;
      imgs.forEach(img => { img.style.height = Math.round(avg) + 'px'; img.style.objectFit = 'contain'; });
    });
  }

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    const modal = document.querySelector('.project-modal');
    if (modal) modal.scrollTop = 0;
  };
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });


  // =========================================
  // === 7. ILLUSTRATIONS & LIGHTBOX =========
  // =========================================
  const galleryGrid = document.querySelector('.illustrations-grid');
  if (galleryGrid) {
    const lightbox    = document.createElement('div'); lightbox.className = 'illustration-lightbox';
    const lightboxImg = document.createElement('img'); lightboxImg.className = 'lightbox-img';
    const backBtn     = document.createElement('button'); backBtn.className = 'lightbox-back-btn'; backBtn.textContent = '← Back';
    lightbox.appendChild(backBtn); lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => { lightboxImg.src = ''; }, 300);
    };
    backBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

    galleryGrid.innerHTML = '';
    for (let i = 1; i <= 14; i++) {
      const img = document.createElement('img');
      img.src = `assets/assorted-illustrations/${i}.webp`;
      img.loading = 'lazy';
      img.style.opacity   = '0';
      img.style.animation = `fadeIn 0.5s ease forwards ${i * 0.1}s`;
      img.addEventListener('click', () => { lightboxImg.src = img.src; lightbox.classList.add('active'); document.body.style.overflow = 'hidden'; });
      galleryGrid.appendChild(img);
    }
  }


  // =========================================
  // === 8. ABOUT CARD 3D TILT ===============
  // =========================================
  const aboutCardWrapper = document.querySelector('.about-card-wrapper');
  const aboutCard        = document.querySelector('.about-card-inner');
  const glare            = document.querySelector('.about-card-glare');

  if (aboutCardWrapper && aboutCard) {
    aboutCardWrapper.addEventListener('mousemove', (e) => {
      const rect    = aboutCardWrapper.getBoundingClientRect();
      const rotateX = (((e.clientY - rect.top)  / rect.height) - 0.5) * -20;
      const rotateY = (((e.clientX - rect.left) / rect.width)  - 0.5) *  20;
      aboutCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      if (glare) glare.style.background = `linear-gradient(${125 + rotateY * 2}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`;
    });
    aboutCardWrapper.addEventListener('mouseleave', () => { aboutCard.style.transform = 'rotateX(0) rotateY(0) scale(1)'; });
  }

});