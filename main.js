// Smooth scroll for anchor links (optional)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {
  
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });
  
  
  // Minor header shrink on scroll (looks elite)
  
  window.addEventListener('scroll', () => {
  
    const header = document.querySelector('.header');
  
    if (window.scrollY > 50) {
  
      header.style.padding = '10px 0';
  
      header.style.backgroundColor = '#0a0a0a';
  
    } else {
  
      header.style.padding = '20px 0';
  
      header.style.backgroundColor = '#0f0f0f';
  
    }
  
  });

  // Preloader control

window.addEventListener('load', () => {

    const preloader = document.getElementById('preloader');
  
    setTimeout(() => {
  
      preloader.style.opacity = '0';
  
      preloader.style.visibility = 'hidden';
  
    }, 2500); // 2.5 seconds
  
  });
  
  function decryptEffect(element, speed = 30) {

    const chars = "01@#$%*+<>|";
  
    const originalText = element.textContent;
  
    let iterations = 0;
  
    element.textContent = "";
  
  
    const interval = setInterval(() => {
  
      element.textContent = originalText
  
        .split("")
  
        .map((char, i) => {
  
          if (i < iterations) return originalText[i];
  
          return chars[Math.floor(Math.random() * chars.length)];
  
        })
  
        .join("");
  
  
      if (iterations >= originalText.length) clearInterval(interval);
  
      iterations += 1;
  
    }, speed);
  
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
  
    document.querySelectorAll(".decrypt").forEach(el => decryptEffect(el));
  
  });

  document.addEventListener("DOMContentLoaded", () => {

    const swipe = document.getElementById("terminal-swipe");
  
   
  
    // Trigger entry animation
  
    swipe.style.transform = "scaleY(1)";
  
    setTimeout(() => {
  
      swipe.style.transform = "scaleY(0)";
  
    }, 500);
  
  
    // Apply exit animation to all internal links
  
    document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="services"], a[href$=".html"]').forEach(link => {
  
      link.addEventListener("click", function (e) {
  
        e.preventDefault();
  
        const href = this.getAttribute("href");
  
  
        swipe.style.transform = "scaleY(1)";
  
        setTimeout(() => {
  
          window.location.href = href;
  
        }, 500);
  
      });
  
    });
  
  });