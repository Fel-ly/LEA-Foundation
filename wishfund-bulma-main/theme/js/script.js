(function ($) {
  "use strict";

  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  if ($(window).width() < 1024) {
    $(".navbar-menu .has-dropdown").on("click", function (e) {
      $(this).children(".navbar-dropdown").toggle();
    });
  }

  // Remove or comment out the modalVideo initialization
// $(".videoplay").modalVideo();

// If you need to retain the slick slider functionality, keep this part
$(".portfolio-single-slider").slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});


  $(".clients-logo").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".testimonial-wrap").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".gallery-wrap").each(function () {
    $(this)
      .find(".gallery-popup")
      .magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  });
  $(document).ready(function() {
    $('.gallery-popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300
      }
    });
  });
  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(50.97797382271958, -114.107718560791),
      // styles: style_array_here
    };
    map = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );
  }

  var google_map_canvas = $("#map-canvas");

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, "load", initialize);
  }

  // Counter

  $(".counter-stat").counterUp({
    delay: 10,
    time: 1000,
  });
})(jQuery);
document.addEventListener('DOMContentLoaded', function() {
  const introItems = document.querySelectorAll('.intro-item');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
    );
  }

  function handleScroll() {
    introItems.forEach(item => {
      if (isElementInViewport(item)) {
        if (!item.classList.contains('visible')) {
          item.classList.add('visible');
        }
      } else {
        item.classList.remove('visible'); // Remove class when out of view to reset the animation
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check to handle items already in view
});
AOS.init({
  duration: 800, // duration of the animation
  once: true,    // whether animation should happen only once
});
document.addEventListener('DOMContentLoaded', function() {
  // Select all project items
  const projectItems = document.querySelectorAll('.project-item');

  // Intersection Observer callback function
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.2 // Adjust this value as needed
  });

  // Observe each project item
  projectItems.forEach(item => {
    item.classList.add('animate');
    observer.observe(item);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const slideshowItems = document.querySelectorAll('.slideshow-item');
  let currentIndex = 0;

  function showSlide(index) {
    slideshowItems.forEach((item, i) => {
      item.style.opacity = (i === index) ? '1' : '0';
    });
  }

  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideshowItems.length;
    showSlide(currentIndex);
  });

  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideshowItems.length) % slideshowItems.length;
    showSlide(currentIndex);
  });

  // Initial slide
  showSlide(currentIndex);

  // Optional: Auto-slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slideshowItems.length;
    showSlide(currentIndex);
  }, 5000); // Change slide every 5 seconds
})
document.addEventListener('DOMContentLoaded', () => {
  const slideshowItems = document.querySelectorAll('.slideshow-item');
  let currentIndex = 0;

  function showSlide(index) {
    slideshowItems.forEach((item, i) => {
      item.style.opacity = (i === index) ? '1' : '0';
    });
  }

  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideshowItems.length;
    showSlide(currentIndex);
  });

  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideshowItems.length) % slideshowItems.length;
    showSlide(currentIndex);
  });

  // Initial slide
  showSlide(currentIndex);

  // Optional: Auto-slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slideshowItems.length;
    showSlide(currentIndex);
  }, 5000); // Change slide every 5 seconds
});
$(document).ready(function(){
  $('.projects-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
});
$(document).ready(function(){
  $('.projects-columns').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust as needed
    slidesToScroll: 1,
    arrows: true, // Hide arrows if not needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach((item, index) => {
      if (index > 0) {
          const prevItem = timelineItems[index - 1];

          const line = document.createElement('div');
          line.classList.add('timeline-line');

          document.querySelector('.timeline').appendChild(line);

          const itemRect = item.getBoundingClientRect();
          const prevItemRect = prevItem.getBoundingClientRect();

          const lineWidth = itemRect.left - prevItemRect.right;
          line.style.width = `${lineWidth}px`;

          const lineHeight = itemRect.top - prevItemRect.bottom;
          line.style.height = `${lineHeight}px`;

          line.style.position = 'absolute';
          line.style.top = `${prevItemRect.bottom}px`;
          line.style.left = `${prevItemRect.right}px`;

          line.style.backgroundColor = '#f89d35';
      }
  });
});
 // Example function to change image source
 function changeImage(imageUrl) {
  document.getElementById('about-image').src = imageUrl;
}

// Example usage (you can call this function based on user interaction)
changeImage('images/about/LEA-18.jpg');
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
document.addEventListener('DOMContentLoaded', function() {
  const messages = [
    "Coding Dreams Into Reality",
    "Empowering the Future with Technology",
    "Building a Technological Tomorrow"
  ];

  let currentIndex = 0;
  const messageElement = document.getElementById('slider-message');

  function changeMessage() {
    currentIndex = (currentIndex + 1) % messages.length;
    messageElement.textContent = messages[currentIndex];
  }

  setInterval(changeMessage, 4000); // Change message every 4 seconds (adjust as needed)
});

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.item');

  function checkVisibility() {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check on initial load
});
document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

  document.addEventListener('DOMContentLoaded', function() {
    const icon = document.querySelector('.icon');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          icon.classList.add('spin');
        } else {
          icon.classList.remove('spin');
        }
      });
    });
    
    observer.observe(icon);
  });

// Initialize ScrollReveal
ScrollReveal().reveal('.project', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  interval: 200, // Staggered reveal for multiple elements
});
document.addEventListener('DOMContentLoaded', function() {
  function updateCountdown() {
      const countdownElements = document.querySelectorAll('.countdown');
      const now = new Date();

      countdownElements.forEach(el => {
          const eventDate = new Date(el.getAttribute('data-event-date'));
          const timeDifference = eventDate - now;

          if (timeDifference > 0) {
              const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
              const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

              el.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
          } else {
              el.innerText = 'Event Started';
          }
      });
  }

  setInterval(updateCountdown, 1000);
});
// js/script.js

document.addEventListener('DOMContentLoaded', function () {
  const events = document.querySelectorAll('.event-item');

  events.forEach(event => {
      event.addEventListener('click', () => {
          // Example: Show an alert with event details
          const title = event.querySelector('h3').textContent;
          const date = event.querySelector('p').textContent;
          alert(`Event: ${title}\nDate: ${date}`);
      });
  });
});
document.getElementById('events-timeline').addEventListener('scroll', function() {
  let timeline = this;
  if (timeline.scrollLeft + timeline.clientWidth >= timeline.scrollWidth) {
      alert('You have reached the end of the events list!');
  }
});




