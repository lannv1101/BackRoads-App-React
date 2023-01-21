import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';
export const PageLinks = [
  {  id: 1, href : '#home', text : 'home'},
  {  id: 2, href : '#about', text : 'about'},
  {  id: 3, href : '#services', text : 'services'},
  {  id: 4, href : '#tours', text : 'tours'},
]

export const socialLinks = [
  {id: 1, href :'https://www.facebook.com', icon :'fab fa-facebook'},
  {id: 2, href :'https://www.twitter.com', icon :'fab fa-twitter'},
  {id: 3, href :'https://www.instagram.com', icon :'fab fa-squarespace'},
]
export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  
  // rest of the objects
]

export const tours = [
  {id:1,
   imgSrc:tour1,
   date:'august 26th, 2020',
   title:'Tibet Adventure',
   text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
   map:'china',
   days:'6 days',
   money:'from $2100',
  },
  {id:2,
    imgSrc:tour2,
    date:'august 26th, 2020',
    title:'Tibet Adventure',
    text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    map:'china',
    days:'6 days',
    money:'from $2100',
   },
   {id:3,
    imgSrc:tour3,
    date:'october 1th, 2020',
    title:'best of java',
    text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    map:'chinindonesiaa',
    days:'11 days',
    money:'from $2120',
   },
   {id:4,
    imgSrc:tour4,
    date:'august 26th, 20223',
    title:'xplore hong kong',
    text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    map:'hong kong',
    days:'10 days',
    money:'from $5000',
   },
   {id:5,
    imgSrc:tour5,
    date:'december 26th, 2020',
    title:'kenya highlights',
    text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    map:'kenya',
    days:'30 days',
    money:'from $20100',
   },

   {id:6,
    imgSrc:tour6,
    date:'december 26th, 2020',
    title:'kenya highlights6',
    text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    map:'kenya',
    days:'30 days',
    money:'from $20100',
   },
]