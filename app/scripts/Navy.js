const Navy = {

  showLevel(level) {
    document.body.classList.remove('show-level-0', 'show-level-1', 'show-level-2', 'show-level-3', 'show-level-4', 'show-level-5', 'show-level-6', 'show-level-7');
    document.body.classList.add(`show-level-${level}`);
  },

  displayRelatedSubmenu (target, submenus) {
    [].forEach.call(submenus, function (submenu) {
      submenu.classList.add('hidden');
    });
    target.classList.remove('hidden');

    // set focus on the `.back` button after the transition
    // 600ms is the duration of the sliding animation (find it in _navy.scss);
    setTimeout(function () { target.querySelector('.navy__back').focus() }, 610);
  },

  parseTree(ul, level) {
    let nextButtons = ul.querySelectorAll(':scope > li > .navy__has-children');
    if ( nextButtons.length === 0 ) return

    let backButtons = ul.querySelectorAll(':scope > li > ul > li > .navy__back');
    let submenus = ul.querySelectorAll(":scope > li > ul");

    [].forEach.call(nextButtons, function (btn) {
      btn.relatedMenu = btn.nextElementSibling

      // inject menu in it's respective slide:
      Navy.level[level+1].appendChild(btn.relatedMenu);

      btn.addEventListener('click', function () {
        Navy.showLevel(level+1);

        Navy.displayRelatedSubmenu(btn.relatedMenu, submenus);
        Navy.currentMenuLink = btn
      });

      // recursion for next navigation levels
      Navy.parseTree(btn.relatedMenu, level+1);
    });

    [].forEach.call(backButtons, function (btn) {
      btn.addEventListener('click', function () {
        Navy.showLevel(level);
      });
    });
  },

  buildSlides (target){
    document.body.classList.add('show-level-0');
    const targetElement = document.querySelector(target);

    Navy.currentMenuLink = undefined
    Navy.container = document.createElement('div');
    Navy.container.classList.add('navy');

    // create slides and inject them into .navy:
    Navy.level = []
    for (let i = 0; i < 8; i++) {
      Navy.level[i] = document.createElement('div');
      Navy.level[i].classList.add(`navy__level-${i}`);
      Navy.container.appendChild(Navy.level[i]);
    }
    targetElement.appendChild(Navy.container);
  },

  initMobile (navigationItems, target) {
    // build navy structure and inject it in the target:
    Navy.buildSlides(target);

    // inject navigations in the first slide:
    let navs = document.querySelectorAll(navigationItems);
    navs.forEach(function (nav) {
      Navy.level[0].appendChild(nav);

      // parse uls and start recursion:
      const ul = nav.querySelector('ul');
      Navy.parseTree(ul, 0);
    });
  },

  setDrawerXPosition (btn) {
    let rect = btn.getBoundingClientRect();
    Navy.drawer.style.transform = `translateX(${rect.left}px)`;
  },

  closeSubmenu(mainmenuBtn, relatedMenu, submenus) {
    Navy.drawer.classList.add('hidden');
    Navy.overlay.classList.add('hidden');
    mainmenuBtn.classList.remove('clicked');
    Navy.currentMenuBtn = undefined;
  },

  toggleSubmenu(mainmenuBtn, relatedMenu, submenus) {
    if (Navy.currentMenuBtn === undefined) {
      Navy.drawer.classList.remove('hidden');
      Navy.overlay.classList.remove('hidden');
      mainmenuBtn.classList.add('clicked');
      Navy.currentMenuBtn = mainmenuBtn;
    }
    else if (mainmenuBtn === Navy.currentMenuBtn) {
      Navy.drawer.classList.add('hidden');
      Navy.overlay.classList.add('hidden');
      mainmenuBtn.classList.remove('clicked');
      Navy.currentMenuBtn = undefined;
    }
    else {
      Navy.drawer.classList.remove('hidden');
      Navy.overlay.classList.remove('hidden');
      mainmenuBtn.classList.add('clicked');
      Navy.currentMenuBtn = undefined;
    }

    Navy.displayRelatedSubmenu(relatedMenu, submenus);
    Navy.showLevel(0);
    Navy.setDrawerXPosition(mainmenuBtn);
  },

  initDesktop(navigationItem, target, overlay) {
    // build navy structure and inject it in the target:
    Navy.buildSlides(target);
    Navy.drawer = document.querySelector(target);
    if (overlay) Navy.overlay = document.querySelector(overlay);
    Navy.currentMenuBtn = undefined;

    const nav = document.querySelector(navigationItem);
    const mainmenuBtns = nav.querySelectorAll(':scope > ul > li > a');
    const submenus = nav.querySelectorAll(':scope > ul > li > ul');
    const slide0 = Navy.drawer.querySelector(':scope > .navy > .navy__level-0');
    [].forEach.call(mainmenuBtns, function (mainmenuBtn) {

      // check if item has submenu
      mainmenuBtn.relatedMenu = mainmenuBtn.nextElementSibling
      if (!mainmenuBtn.relatedMenu) return

      // inject menu in slide 0:
      slide0.appendChild(mainmenuBtn.relatedMenu);

      // hide first .navy__back button:
      const firstBackBtn = mainmenuBtn.relatedMenu.querySelector(':scope > li > .navy__back')
      console.log('test', firstBackBtn)
      firstBackBtn.classList.add('hidden');

      // make first recursion:
      Navy.parseTree(mainmenuBtn.relatedMenu, 0);

      // add click events
      mainmenuBtn.addEventListener('click', function (event) {
        event.preventDefault();
        Navy.toggleSubmenu(mainmenuBtn, mainmenuBtn.relatedMenu, submenus)
        // TODO: show correct level if a submenu is .active
        // TODO: set correct height for the drawer
        // TODO: set correct x position for teh drawer
        // TODO: accessibility tab navigation
        // TODO: set active path
      });

      Navy.overlay.addEventListener('click', function (event) {
        event.preventDefault();
        Navy.closeSubmenu(mainmenuBtn, mainmenuBtn.relatedMenu, submenus)
      });


    });
  },
}

export default Navy