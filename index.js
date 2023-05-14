import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';

AOS.init();

let typed = new Typed(".first-text", {
  stings: ["Programmer", "Gamer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})