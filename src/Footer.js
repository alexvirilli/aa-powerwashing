import React, { useEffect } from 'react';
import './Footer.css'; 

function Footer() {
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        // Downscroll
        footer.classList.add('hidden');
      } else {
        // Upscroll
        footer.classList.remove('hidden');
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <p>© 2024 A&A Powerwashing</p>
      <p>Email: aapowerwashers@gmail.com | Phone: (856) 281-2658</p>
      <div>
        Follow us:
        <a href="https://www.facebook.com/profile.php?id=61559772597900" target='_blank'>Facebook</a> 
        {/* <a href="https://twitter.com">Twitter</a> |
        <a href="https://instagram.com">Instagram</a> */}
        {/* maybe later */}
      </div>
    </footer>
  );
}

export default Footer;
