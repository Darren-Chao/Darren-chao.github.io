document.addEventListener('DOMContentLoaded', () => {

  // =========================================
  // === 0. MOBILE DETECTION =================
  // =========================================
  const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  if (isMobile) {
    document.querySelectorAll('#typing-text .line').forEach(line => {
      line.style.opacity = '1';
      line.style.whiteSpace = 'normal';
    });
    const ws = document.getElementById('walk-sprite');
    const ds = document.getElementById('dust-sprite');
    if (ws) ws.style.display = 'none';
    if (ds) ds.style.display = 'none';

    document.addEventListener('touchend', (e) => {
      const el = e.target.closest('a, button, .nav-btn, .social-btn, .resume-btn, .project-card');
      if (el) setTimeout(() => el.blur(), 300);
    }, { passive: true });
  }


  // =========================================
  // === 1. CUSTOM CURSOR ====================
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
    if (follower) { follower.style.top = e.clientY + 'px'; follower.style.left = e.clientX + 'px'; }
  });
  document.addEventListener('mouseover', (e) => {
    const t = e.target;
    const clickable = t.closest('a') || t.closest('button') || t.closest('.social-btn') ||
      t.closest('.nav-btn') || t.closest('.download-btn') ||
      t.closest('.modal-close-btn') || t.closest('.lightbox-back-btn') ||
      t.closest('.illustrations-grid img') || t.closest('.exp-tab');  // ← add this
    setCursorState(clickable ? 'point' : 'arrow');
  });
  function isInteractive(el) {
    return el.closest('a') || el.closest('button') || el.closest('.social-btn') ||
      el.closest('.nav-btn') || el.closest('.download-btn') ||
      el.closest('.modal-close-btn') || el.closest('.lightbox-back-btn') ||
      el.closest('.illustrations-grid img') || el.closest('.exp-tab');  // ← add this
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
    idle: 'assets/sprite/idle.webp',
    jump: 'assets/sprite/jump.webp',
  };

  const WALK_SPEED_NORMAL = 160;
  const TEXT_GAP = 18;

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
    const lineTop = lineEl.offsetTop;
    const lineHeight = lineEl.offsetHeight;
    const baseline = lineTop + lineHeight * 0.82;
    return baseline - sprite.offsetHeight;
  }

  function placeSprite(x, lineEl) {
    sprite.style.left = x + 'px';
    sprite.style.top = getSpriteTop(lineEl) + 'px';
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
    const x = measureTextWidth(idleLineEl.textContent, idleLineEl) + TEXT_GAP;
    const top = getSpriteTop(idleLineEl);
    sprite.style.transition = 'none';
    sprite.style.left = x + 'px';
    sprite.style.top = top + 'px';
  });

  let isJumping = false;
  sprite.addEventListener('mouseenter', () => {
    if (isJumping || walkInterval) return;
    isJumping = true;
    doIdleJump(() => { isJumping = false; });
  });

  function doIdleJump(onDone) {
    const baseTop = parseFloat(sprite.style.top) || 0;
    const PEAK_OFFSET = sprite.offsetHeight * 1.2;
    const RISE_MS = 220;
    const FALL_MS = 220;

    sprite.src = SPRITES.jump;
    sprite.style.transition = `top ${RISE_MS}ms cubic-bezier(0.2, 0.8, 0.4, 1)`;
    sprite.style.top = (baseTop - PEAK_OFFSET) + 'px';

    setTimeout(() => {
      sprite.style.transition = `top ${FALL_MS}ms cubic-bezier(0.4, 0, 0.8, 0.6)`;
      sprite.style.top = baseTop + 'px';
      setTimeout(() => {
        sprite.style.transition = 'none';
        sprite.style.transform = 'scaleX(1.25) scaleY(0.75)';
        setTimeout(() => {
          sprite.style.transition = 'transform 0.12s ease';
          sprite.style.transform = 'scale(1)';
          setTimeout(() => {
            sprite.style.transition = 'none';
            sprite.src = SPRITES.idle;
            if (onDone) onDone();
          }, 120);
        }, 60);
      }, FALL_MS);
    }, RISE_MS);
  }

  function doTeleportJump(line1X, line1El, line2X, line2El, onDone) {
    const baseLine1 = getSpriteTop(line1El);
    const baseLine2 = getSpriteTop(line2El);
    const PEAK_OFFSET = sprite.offsetHeight * 1.0;
    const RISE_MS = 230;
    const FADE_MS = 130;
    const FALL_MS = 260;

    sprite.src = SPRITES.jump;
    sprite.style.transition = `top ${RISE_MS}ms cubic-bezier(0.2, 0.9, 0.4, 1)`;
    sprite.style.top = (baseLine1 - PEAK_OFFSET) + 'px';

    setTimeout(() => {
      sprite.style.transition = `transform ${FADE_MS}ms ease-in, opacity ${FADE_MS}ms ease-in`;
      sprite.style.transform = 'scale(0)';
      sprite.style.opacity = '0';

      setTimeout(() => {
        sprite.style.transition = 'none';
        sprite.style.left = line2X + 'px';
        sprite.style.top = (baseLine2 - PEAK_OFFSET) + 'px';
        sprite.style.transform = 'scale(0)';

        void sprite.offsetWidth;

        sprite.style.transition = `transform ${FADE_MS}ms ease-out, opacity ${FADE_MS}ms ease-out`;
        sprite.style.transform = 'scale(1)';
        sprite.style.opacity = '1';

        setTimeout(() => {
          sprite.style.transition = `top ${FALL_MS}ms cubic-bezier(0.4, 0, 0.8, 0.6)`;
          sprite.style.top = baseLine2 + 'px';

          setTimeout(() => {
            sprite.style.transition = 'none';
            sprite.style.transform = 'scaleX(1.25) scaleY(0.75)';
            setTimeout(() => {
              sprite.style.transition = 'transform 0.12s ease';
              sprite.style.transform = 'scale(1)';
              setTimeout(() => {
                sprite.style.transition = 'none';
                sprite.src = SPRITES.idle;
                if (onDone) onDone();
              }, 120);
            }, 60);
          }, FALL_MS);
        }, FADE_MS);
      }, FADE_MS);
    }, RISE_MS);
  }


  // =========================================
  // === 3. TYPING + SPRITE WALKING ==========
  // =========================================
  const lines = document.querySelectorAll('#typing-text .line');
  const TYPING_SPEED = 40;
  const LINE_PAUSE = 300;

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
    if (isMobile) return;
    if (!lines.length) return;

    const line1 = lines[0];
    const line2 = lines[1];

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {

        sprite.classList.add('walking');
        placeSprite(TEXT_GAP, line1);
        sprite.style.opacity = '1';
        sprite.style.transform = 'scale(1)';
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

            sprite.classList.remove('walking');
            stopWalking();

            setTimeout(() => {
              isJumping = true;
              const line1X = parseFloat(sprite.style.left) || TEXT_GAP;

              doTeleportJump(line1X, line1, TEXT_GAP, line2, () => {
                isJumping = false;

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
                      idleLineEl = line2;
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
  // === 4. DEEP LINKING & NAVIGATION ========
  // =========================================
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.tab-section');

  const renderExperiences = () => {
    const container = document.querySelector('.experience-folder-container');
    if (!container || !experienceData) return;
    container.innerHTML = '';

    // Folder Tabs (selection)
    const folderTabs = document.createElement('div');
    folderTabs.className = 'experience-tabs';
    
    experienceData.forEach((exp, i) => {
      const tab = document.createElement('div');
      tab.className = `exp-tab ${i === 0 ? 'active' : ''}`;
      tab.dataset.id = exp.id;
      tab.style.backgroundImage = `url('${exp.tabAsset}')`;
      tab.addEventListener('click', () => {
        document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        updateDossier(exp);
      });
      folderTabs.appendChild(tab);
    });
    container.appendChild(folderTabs);

    const dossier = document.createElement('div');
    dossier.className = 'dossier-folder';
    container.appendChild(dossier);

    const updateDossier = (exp) => {
      dossier.style.backgroundImage = `url('${exp.folderAsset || 'assets/experiences/base.webp'}')`;
      dossier.innerHTML = `
        <div class="dossier-inner">
          <div class="dossier-sheet">
            <div class="dossier-header">
              <h3>MISSION REPORT: ${exp.company.toUpperCase()}</h3>
              <div class="dossier-meta">
                <span>ROLE: ${exp.role.toUpperCase()}</span>
                <span>TIMELINE: ${exp.timeline}</span>
              </div>
            </div>
            <div class="dossier-content">
              <h4>OBJECTIVE BRIEF</h4>
              <p>${exp.missionBriefing}</p>
              <h4>OPERATIONAL INTEL</h4>
              <ul class="dossier-list">
                ${exp.keyNotes.map(note => `<li>${note}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    };
    updateDossier(experienceData[0]);
  };

  navBtns.forEach(btn => {
    btn.addEventListener('mousedown', () => btn.classList.add('pressing'));
    btn.addEventListener('mouseup', () => btn.classList.remove('pressing'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('pressing'));

    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      switchTab(targetId);
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

  let hasDealt = false;
  function runDealingAnimation() {
    if (hasDealt) return;
    hasDealt = true;

    const cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;

    if (isMobile) {
      cards.forEach(card => {
        const rot = Math.random() * 20 - 10;
        card.style.transition = 'none';
        card.style.transform = `translate(0px,100px) rotateZ(${rot}deg) scale(0.5)`;
        card.style.opacity = '0';
      });
      setTimeout(() => {
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            card.style.transform = 'translate(0,0) rotateZ(0deg) scale(1)';
            card.style.opacity = '1';
            setTimeout(() => { card.style.transform = ''; }, 650);
          }, i * 100);
        });
      }, 100);
      return;
    }

    // Desktop Shuffling Animation
    cards.forEach(card => {
      card.style.transition = 'none';
      card.style.transform = 'none';
      card.style.translate = 'none';
      card.style.opacity = '0';
      card.style.pointerEvents = 'none';
    });

    if (window._dealerScrollListener) {
      window.removeEventListener('scroll', window._dealerScrollListener);
    }
    const initialScrollY = window.scrollY;
    document.documentElement.style.setProperty('--scroll-comp-y', '0px');
    window._dealerScrollListener = () => {
      document.documentElement.style.setProperty('--scroll-comp-y', `${window.scrollY - initialScrollY}px`);
    };
    window.addEventListener('scroll', window._dealerScrollListener, { passive: true });

    // Force layout to get accurate grid positions
    void cards[0].offsetWidth;

    const deckData = Array.from(cards).map((card, i) => {
      const rect = card.getBoundingClientRect();
      return { card, rect, initialIndex: i };
    });

    const centerX = window.innerWidth / 2;

    // Gather cards into a stack at the bottom of the screen
    deckData.forEach(({ card, rect, initialIndex }) => {
      const dx = centerX - (rect.left + rect.width / 2);
      // Place center of card so that top 2/3 is visible
      const targetCenterY = window.innerHeight - (rect.height / 6);
      const dy = targetCenterY - (rect.top + rect.height / 2);
      const rot = Math.random() * 20 - 10;
      card.style.transform = `translate(${dx}px, ${dy}px) rotateZ(${rot}deg)`;
      card.style.translate = `0px var(--scroll-comp-y, 0px)`;
      card.style.zIndex = cards.length - initialIndex;
    });

    // Fade in the center stack and start shuffling
    setTimeout(() => {
      deckData.forEach(({ card }) => {
        card.style.transition = 'opacity 0.3s ease';
        card.style.opacity = '1';
      });

      let shuffleCount = 0;
      const maxShuffles = 6;

      const shuffleInterval = setInterval(() => {
        shuffleCount++;
        deckData.forEach(({ card, rect, initialIndex }) => {
          const dx = centerX - (rect.left + rect.width / 2);
          const targetCenterY = window.innerHeight - (rect.height / 6);
          const dy = targetCenterY - (rect.top + rect.height / 2);

          let offsetX, offsetY, rot;
          if (shuffleCount === maxShuffles) {
            // Square up the deck for the final deal
            offsetX = Math.random() * 10 - 5;
            offsetY = Math.random() * 10 - 5;
            rot = Math.random() * 6 - 3;
          } else {
            // Split out and pull in to simulate shuffling
            const isOut = shuffleCount % 2 === 1;
            const side = initialIndex % 2 === 0 ? -1 : 1;
            const spread = isOut ? 80 : 10;

            offsetX = (side * spread) + (Math.random() * 30 - 15);
            offsetY = Math.random() * 30 - 15;
            rot = (side * (isOut ? 15 : 5)) + (Math.random() * 20 - 10);
          }

          card.style.transition = 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          // POV style, keep the scale at 1
          card.style.transform = `translate(${dx + offsetX}px, ${dy + offsetY}px) rotateZ(${rot}deg)`;

          // Randomize z-index occasionally
          if (shuffleCount % 2 === 0 && Math.random() > 0.5) {
            card.style.zIndex = Math.floor(Math.random() * cards.length);
          }
        });

        if (shuffleCount >= maxShuffles) {
          clearInterval(shuffleInterval);

          // Deal out to grid positions
          setTimeout(() => {
            deckData.forEach(({ card, initialIndex }, arrayIndex) => {
              setTimeout(() => {
                card.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), translate 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
                card.style.transform = 'translate(0px, 0px) rotateZ(0deg)';
                card.style.translate = '0px 0px';
                card.style.zIndex = '';

                setTimeout(() => {
                  card.style.transform = '';
                  card.style.translate = '';
                  card.style.pointerEvents = '';

                  // Clean up listener after the very last card lands
                  if (arrayIndex === deckData.length - 1) {
                    window.removeEventListener('scroll', window._dealerScrollListener);
                  }
                }, 650);
              }, initialIndex * 120);
            });
          }, 300);
        }
      }, 160);
    }, 50);
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
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalGallery = document.getElementById('modal-gallery');
  const closeBtn = document.getElementById('modal-close-btn');

  // -----------------------------------------
  // Helper: build the metadata bar
  // -----------------------------------------
  function buildMetadataBar(data) {
    if (!data.metadata) return null;
    const { role, timeline, collaborators, tools } = data.metadata;
    const bar = document.createElement('div');
    bar.className = 'project-metadata-bar';

    const items = [
      { label: 'Role', value: role },
      { label: 'Timeline', value: timeline },
      { label: 'Collaborators', value: collaborators },
      { label: 'Tools & Skills', value: tools },
    ];

    items.forEach(item => {
      if (!item.value) return;
      const cell = document.createElement('div');
      cell.className = 'metadata-cell';
      const label = document.createElement('div');
      label.className = 'metadata-label';
      label.textContent = item.label;
      const valueWrap = document.createElement('div');
      valueWrap.className = 'metadata-value';
      item.value.split(',').forEach(part => {
        const line = document.createElement('div');
        line.textContent = part.trim();
        valueWrap.appendChild(line);
      });
      cell.appendChild(label);
      cell.appendChild(valueWrap);
      bar.appendChild(cell);
    });
    return bar;
  }

  const switchTab = (targetId, updateHash = true) => {
    const navBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
    if (!navBtn) return;

    const alreadyActive = navBtn.classList.contains('active');
    navBtns.forEach(b => b.classList.remove('active'));
    navBtn.classList.add('active');

    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');

    if (targetId === 'experience') renderExperiences();
    if (targetId === 'projects' && !alreadyActive) runDealingAnimation();

    if (updateHash) {
      history.pushState(null, null, `#${targetId}`);
    }
  };

  const handleHashChange = () => {
    const hash = window.location.hash.substring(1);
    if (!hash) {
      switchTab('projects', false);
      return;
    }

    if (hash.startsWith('p-')) {
      const pid = hash.substring(2);
      switchTab('projects', false);
      openProjectById(pid, false);
    } else {
      closeProjectModal(false);
      switchTab(hash, false);
    }
  };

  window.addEventListener('popstate', handleHashChange);

  // -----------------------------------------
  // Helper: Open Modal by Project ID
  // -----------------------------------------
  const openProjectById = (pid, updateHash = true) => {
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
      let heroMediaInserted = false;
      let metadataInserted = false;

      data.content.forEach(block => {
        if ((block.type === 'image' || block.type === 'video') && !heroMediaInserted) {
          heroMediaInserted = true;
          const heroWrap = document.createElement('div');
          if (block.type === 'image') {
            heroWrap.className = 'content-image-block modal-hero-image';
            const img = document.createElement('img');
            img.src = block.src; img.alt = data.title; img.loading = 'lazy';
            heroWrap.appendChild(img);
          } else {
            heroWrap.className = 'content-video-block modal-hero-image';
            const video = document.createElement('video');
            video.autoplay = true; video.muted = true; video.loop = true; video.playsInline = true;
            video.setAttribute('webkit-playsinline', 'true');
            if (block.webm) { const s = document.createElement('source'); s.src = block.webm; s.type = 'video/webm'; video.appendChild(s); }
            if (block.mp4) { const s = document.createElement('source'); s.src = block.mp4; s.type = 'video/mp4'; video.appendChild(s); }
            heroWrap.appendChild(video);
          }
          modalDesc.appendChild(heroWrap);

          if (data.liveSite) {
            const linkWrap = document.createElement('div');
            linkWrap.className = 'modal-live-link';
            linkWrap.style.textAlign = 'center'; linkWrap.style.margin = '20px 0 10px 0';
            linkWrap.style.fontFamily = "'Nunito', sans-serif"; linkWrap.style.fontSize = '1.1rem';
            linkWrap.innerHTML = `Visit <a href="${data.liveSite}" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline; font-weight: 700;">site</a>`;
            modalDesc.appendChild(linkWrap);
          }
          if (!metadataInserted) {
            metadataInserted = true;
            const bar = buildMetadataBar(data);
            if (bar) modalDesc.appendChild(bar);
          }
          return;
        }

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
          } else { p.innerHTML = (block.text || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
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
        else if (block.type === 'video') {
          const vc = document.createElement('div'); vc.className = `content-video-block ${block.size || 'medium'}`;
          const video = document.createElement('video');
          video.autoplay = true; video.muted = true; video.loop = true; video.playsInline = true;
          video.setAttribute('webkit-playsinline', 'true');
          if (block.webm) { const s = document.createElement('source'); s.src = block.webm; s.type = 'video/webm'; video.appendChild(s); }
          if (block.mp4) { const s = document.createElement('source'); s.src = block.mp4; s.type = 'video/mp4'; video.appendChild(s); }
          vc.appendChild(video); modalDesc.appendChild(vc);
        }
        else if (block.type === 'images-row') {
          const rc = document.createElement('div'); rc.className = 'content-images-row';
          block.images.forEach(src => { const img = document.createElement('img'); img.src = src; img.alt = data.title; img.loading = 'lazy'; rc.appendChild(img); });
          modalDesc.appendChild(rc);
        }
      });

      if (!metadataInserted) {
        const bar = buildMetadataBar(data);
        if (bar) modalDesc.insertBefore(bar, modalDesc.firstChild);
      }
    } else {
      modalDesc.textContent = data.fullDesc || '';
      (data.galleryImages || []).forEach(src => { const img = document.createElement('img'); img.src = src; img.loading = 'lazy'; modalGallery.appendChild(img); });
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const rowImgs = modalDesc.querySelectorAll('.content-images-row img');
    let loaded = 0;
    if (rowImgs.length > 0) {
      rowImgs.forEach(img => {
        if (img.complete) { loaded++; if (loaded === rowImgs.length) equalizeImageRows(); }
        else { img.addEventListener('load', () => { loaded++; if (loaded === rowImgs.length) equalizeImageRows(); }); }
      });
    }

    if (updateHash) {
      history.pushState(null, null, `#p-${pid}`);
    }
  };

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-id');
      openProjectById(pid);
    });
  });

  const closeProjectModal = (updateHash = true) => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    const modal = document.querySelector('.project-modal');
    if (modal) modal.scrollTop = 0;

    if (updateHash) {
      const currentTab = document.querySelector('.nav-btn.active').getAttribute('data-target');
      history.pushState(null, null, `#${currentTab}`);
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', () => closeProjectModal());
  if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeProjectModal(); });

  // Handle initial page load
  handleHashChange();

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


  // =========================================
  // === 7. CRAFTS GALLERY & LIGHTBOX ========
  // =========================================
  const craftsSection = document.getElementById('crafts');
  if (craftsSection) {
    const lightbox = document.createElement('div'); lightbox.className = 'illustration-lightbox';
    const lightboxImg = document.createElement('img'); lightboxImg.className = 'lightbox-img';
    const backBtn = document.createElement('button'); backBtn.className = 'lightbox-back-btn'; backBtn.textContent = '← Back';
    lightbox.appendChild(backBtn); lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => { lightboxImg.src = ''; }, 300);
    };
    backBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

    // Smooth scroll for hero links
    craftsSection.querySelectorAll('.craft-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Helper: load images from a specific folder into a grid
    const loadCategory = (folder, targetGridId, fileList) => {
      const grid = document.getElementById(targetGridId)?.querySelector('.illustrations-grid');
      if (!grid) return;
      grid.innerHTML = '';
      fileList.forEach((file) => {
        const img = document.createElement('img');
        img.src = `assets/${folder}/${file}`;
        img.addEventListener('click', () => {
          lightboxImg.src = img.src;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
        grid.appendChild(img);
      });
    };

    // Dioramas and Stuff (combined from assets/crafts)
    const dioramaAndStuffFiles = [
      'IMG_0828 2.webp', 'IMG_0829 2.webp', 'IMG_0830 2.webp', 'IMG_0831 2.webp',
      'IMG_0832 2.webp', 'IMG_0833 2.webp', 'IMG_0834 2.webp', 'IMG_0835 2.webp',
      'IMG_0836 2.webp', 'IMG_0837 2.webp', 'IMG_0838 2.webp', 'IMG_0839 2.webp',
      'IMG_0842 2.webp', 'IMG_1430.webp', 'IMG_1831.webp', 'IMG_2033.webp',
      'IMG_2183.webp', 'IMG_2785.webp', 'IMG_5548.webp', 'IMG_5650.webp',
      'IMG_6097.webp', 'IMG_7004.webp', 'IMG_7009.webp'
    ];
    loadCategory('crafts', 'dioramas-and-stuff-section', dioramaAndStuffFiles);

    // Ceramics
    const ceramicsFiles = [
      'Darren-Chao greenware 1.png .webp', 'Darren-Chao greenware 2.webp', 'Darren-Chao greenware 3.webp',
      'Darren-Chao handbuilding wood fired.webp', 'Darren-Chao reduction 1.webp', 'Darren-Chao reduction 2.webp',
      'Darren-Chao reduction 3.webp', 'Darren-Chao reduction 4.webp', 'Darren-Chao reduction 5.webp',
      'Darren-Chao reduction 6.webp', 'Darren-Chao reduction 7.webp', 'Darren-Chao woodfired 1.webp',
      'Darren-Chao woodfired 2.webp', 'Darren-Chao woodfired 3.webp', 'Darren-Chao woodfired 4.webp',
      'Darren-Chao woodfired 5.webp', 'IMG_0698 3.webp', 'IMG_0699 3.webp', 'IMG_0827 2.webp'
    ];
    loadCategory('ceramics', 'ceramics-section', ceramicsFiles);

    // Draw
    const drawFiles = [
      '1.webp', '10.webp', '11.webp', '12.webp', '13.webp', '14.webp',
      '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp', '8.webp', '9.webp',
      'E98A8A96-46E7-4F36-A71A-54493E62149B.webp', 'IMG_0332.webp', 'IMG_0333.webp',
      'IMG_0840 2.webp', 'IMG_5654.webp'
    ];
    loadCategory('assorted-illustrations', 'draw-section', drawFiles);

    // -----------------------------------------
    // Preload all crafts images in the background
    // so they're already cached when the user opens the tab.
    // We stagger with requestIdleCallback (or setTimeout fallback)
    // to avoid blocking the main thread during the initial page load.
    // -----------------------------------------
    const preloadQueue = [
      ...dioramaAndStuffFiles.map(f => `assets/crafts/${f}`),
      ...ceramicsFiles.map(f => `assets/ceramics/${f}`),
      ...drawFiles.map(f => `assets/assorted-illustrations/${f}`),
    ];

    const runPreload = () => {
      preloadQueue.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(runPreload, { timeout: 3000 });
    } else {
      setTimeout(runPreload, 1500);
    }

    // CTA Listener for Projects -> Crafts
    document.querySelectorAll('.cta-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        const navBtn = document.querySelector(`.nav-btn[data-target="${target}"]`);
        if (navBtn) {
          navBtn.click();
          window.scrollTo(0, 0);
        }
      });
    });
  }


  // =========================================
  // === 8. ABOUT CARD 3D TILT ===============
  // =========================================
  const aboutCardWrapper = document.querySelector('.about-card-wrapper');
  const aboutCard = document.querySelector('.about-card-inner');
  const glare = document.querySelector('.about-card-glare');

  if (aboutCardWrapper && aboutCard) {
    aboutCardWrapper.addEventListener('mousemove', (e) => {
      const rect = aboutCardWrapper.getBoundingClientRect();
      const rotateX = (((e.clientY - rect.top) / rect.height) - 0.5) * -20;
      const rotateY = (((e.clientX - rect.left) / rect.width) - 0.5) * 20;
      aboutCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      if (glare) glare.style.background = `linear-gradient(${125 + rotateY * 2}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`;
    });
    aboutCardWrapper.addEventListener('mouseleave', () => { aboutCard.style.transform = 'rotateX(0) rotateY(0) scale(1)'; });
  }

});