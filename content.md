---
about:
  location: Los Angeles, CA
  github: https://github.com/ctsexton
  quote: Ever iterating, constantly learning, always improving.
  description: 
    - As a full stack developer, I focus on delivering user-friendly and reliable solutions rapidly. I am a generalist with a wide range of experience using modern web development and data analysis tools. 
    - I got my start as a programmer developing my own electronic musical instruments, and I wrote a <a target="_blank" href="https://ctsexton.github.io/camsexton_thesis2017.pdf">thesis</a> on user-interface design in music hardware and software. This knowledge translates well to building more general applications, so now I design all kinds of stuff.
  whatIBring:
    - A holistic understanding of <i>systems</i> - I make it my business to know how the small details fit into the bigger picture.
    - A preference for simple, easy to understand solutions explained with no technical jargon.
    - Working code. Readable & documented.
    - Humility, mentorship & paying it forward - I love both learning from others and sharing what I have learned. I also worked for several years as a (music) teacher and have a healthy skepticism for expensive code bootcamps.
skills:
  Frontend:
    - title: React
      icon: fab fa-react
    - title: Vue
      icon: fab fa-vuejs
    - title: Javascript
      icon: fab fa-js
    - title: CSS
      icon: fab fa-css3
  Backend:
    - title: Python
      icon: fab fa-python
    - title: Node
      icon: fab fa-node
    - title: Docker
      icon: fab fa-docker
    - title: SQL
      icon: fas fa-database
  Data Analysis:
    - title: Pandas
      icon: fas fa-table
    - title: QGIS
      icon: fas fa-compass
    - title: GeoJSON
      icon: fas fa-globe-americas
  Systems:
    - title: AWS
      icon: fab fa-aws
    - title: DigitalOcean
      icon: fab fa-digital-ocean
    - title: Google APIs
      icon: fab fa-google
experience:
  - title: RailStats LA
    role: Full Stack Developer
    time: June 2018 - present
    location: Los Angeles, CA
    tools: 
      - React
      - Next.js
      - Material-UI
      - Node.js
      - Express
      - Python
      - Pandas
      - QGIS
    link: https://la.railstats.org
    code: https://github.com/metro-ontime
    description: Performance tracking for the Los Angeles Metro Rail Network.
    bullets: 
      - Lead a partnership between Hack for LA & LA Metro to build an open-source on-time performance tool for the train network.
      - Architected & coded a data analysis engine in Python to track vehicle locations over time and run automated statistical analyses continuously.
      - Optimized Python execution on large data sets with Pandas and Numpy libraries, achieving low computation times under tight resource contraints.
      - Wrote unit tests to improve reliability, resulting in a robust codebase that copes with challenging time and scheduling conditions.
      - Using React and Highcharts, I developed the statistical summary and Marey Diagram views for the front end site.
    id: railstats
    image: demo.jpg
  - title: Fantasmo
    role: GIS Engineer
    time: Oct 2018 - Dec 2018
    location: Venice, CA (Remote)
    tools: 
      - Python
      - QGIS
      - Meshlab
      - Blender
      - GeoPandas
    link: https://fantasmo.io/
    description: The decentralized 3D map of the world.
    bullets: 
      - Worked with 3D mapping startup to transform geographic datasets.
      - I processed 3D point clouds, collected via cameras mounted on scooters, to produce GeoJSON files outlining major geographic features (streets, sidewalks, construction zones) on a map.
      - Used QGIS to refine and label GeoJSON documents.
      - Developed a CRS (coordinate reference system) tool in Python, which converts Cartesian coordinates to spherical/global coordinates in order to project arbitrary shapes onto maps.
    id: fantasmo
    image: fantasmo.jpg
  - title: White Rabbit ICOs
    role: Front End Developer
    time: Aug 2018 - Sep 2018
    location: Santa Monica, CA (Remote)
    description: ICO discovery site, Blockchain startup.
    tools: 
      - Ruby on Rails
      - PostgreSQL
    link: https://www.whiterabbiticos.com/icos/neo
    bullets: 
      - Implemented the NEO coin ICO discovery page on popular cryptocurrency ICO discovery/news site.
      - Refactored Ruby on Rails app to improve page routing and separate content from layout logic.
    id: whiterabbit
    image: whiterabbit.jpg
  - title: CTS Web Design
    role: Full Stack Developer
    time: Mar 2017 - present
    location: Los Angeles, CA
    description: Simple, fast, affordable websites for small business.
    tools: 
      - React
      - Vue.js
      - Node.js
      - Docker
      - Nginx
      - CockpitCMS
    link:
    bullets: 
      - Using React & Vue.js to rapidly develop high quality websites for small businesses.
      - Achieved 100% SEO and Best Practises scores with Google Lighthouse Website Audit tool.
      - I craft responsive, mobile-optimized page layouts with CSS - producing simple, clear and <i>content-focused</i> designs.
      - Reduced infrastructure setup time to under 5 minutes for each new website with Docker and CockpitCMS as a RESTful API to serve content.
    id: ctswebdesign
    image: whiterabbit.jpg
portfolio:
  - title: RailStats LA
    tools: 
      - React
      - Javascript
      - Python
      - Pandas
      - QGIS
    link: https://la.railstats.org
    code: https://github.com/metro-ontime/frontend
    bullets: 
      - React app providing frequently updating statistics on LA Metro rail on-time performance.
      - Marey diagrams provide a visual, intuitive comparison of train journeys with the schedule over time.
      - Responsive page layouts built with Material-UI, implementing Material Design best practices for mobile-first web applications.
    id: railstatsla
    image: railstats.jpg
  - title: Danny Fischer
    tools: 
      - OctoberCMS 
      - PHP
      - Google Calendar API
    link: https://dannyfischer.com.au/
    code: https://github.com/ctsexton/dannyfischer
    bullets: 
      - Artist site built with OctoberCMS. 
      - Responsive, bold and colorful design.
      - Google Calendar integration for Events page - client can create/update/delete events directly from the Google Calendar app.
    id: dannyfischer
    image: dannyfischer.jpg
  - title: Thomas Waltrich Music 
    tools: 
      - Vue
      - Vuetify
      - CockpitCMS
    link: https://thomaswaltrichmusic.com/
    code: https://github.com/ctsexton/tomwaltrich/
    bullets: 
      - Responsive site built with Vue.js and Vuetify.
      - Server-side rendering with Nuxt provides both excellent SEO and fast client-side loading.
      - CockpitCMS for simple and elegant content management, served over an API.
    id: thomaswaltrich
    image: waltrich.jpg
  - title: Audionamix
    tools: 
       - Vue 
       - Nuxt 
       - FontAwesome
    link: https://ctsexton.github.io/audionamix/
    code: https://github.com/ctsexton/audionamix
    bullets: 
      - Mock up product page for audio software. 
      - Fully responsive design built with Vue.js. 
      - A strong landing page layout for software products - specifies major software features and system requirements.
    id: audionamix
    image: audionamix.jpg
  - title: LA Metro Tracker
    tools: 
      - React
      - LA Metro API
    link: http://metro.camsexton.com/
    code: https://github.com/ctsexton/metro-tracker
    bullets: 
      - A bus tracking app for the LA metro made with React. 
      - Very fast and simple UI - input the bus line no. and see the most recent known positions of all buses on that line displayed on a map. 
      - Updates positions from NextBus API every 10 seconds.
    id: metro
    image: metro.jpg
  - title: Dashboard UI
    tools: 
      - Vue 
      - Nuxt
    link: https://ctsexton.github.io/dashboard/
    code: https://github.com/ctsexton/dashboard
    bullets: 
      - Built with Vue.js and Vuex. 
      - Custom settings panel and "HSL" slider component.
      - Click the cog icon to access the settings panel. 
      - All changes are auto-saved to local storage - so the user can reload the page or even restart their browser and keep their settings... without requiring a sign-up process. Neat!
    id: dashboard
    image: dashboard.jpg
education:
  - degree: Bachelor of Music Technology
    institution: Monash University, Australia
    year: 2017
    notes: <i>Ernst Morawetz Prize</i> for Best Student 2017
  - degree: Bachelor of Finance
    institution: Monash University, Australia
    year: 2015
    notes: <i>Dean's Recognition Award</i> (2014 & 2015) for outstanding academic results
---

