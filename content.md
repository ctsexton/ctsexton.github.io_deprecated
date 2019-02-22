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
      - Python
      - Pandas
      - QGIS
    link: https://la.railstats.org
    code: https://github.com/metro-ontime
    description: Performance tracking engine and front end app for the Los Angeles Metro Rail Network.
    bullets: 
      - Worked as a Senior Developer, leading a partnership between Hack for LA & LA Metro.
      - Wrote a train network monitoring tool in Python (open source too!), which tracks vehicle positions over time and runs automated performance measurements, uploading results to AWS S3 on an hourly basis.
      - Optimized Python execution time on large data sets with Pandas and Numpy libraries.
      - Using React, I developed the statistical summary and trip visualizer pages for the front end.
      - Designed responsive page layouts with Material-UI, implementing Material Design best practices for mobile-first web applications.
    id: railstats
    image: demo.jpg
  - title: Fantasmo
    role: GIS Engineer
    time: Oct 2018 - Dec 2018
    location: Venice, CA (Remote)
    tools: 
      - Blender
      - QGIS
      - Python
      - GeoPandas
      - Meshlab
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
      - Vue.js
      - Docker
      - Nginx
      - CockpitCMS
    link:
    bullets: 
      - Using Vue.js with Nuxt to rapidly develop websites for small businesses.
      - I craft mobile-optimized page layouts with Vuetify and custom CSS, focusing on simple, creative and colorful designs.
      - Using Docker and CockpitCMS as a RESTful API to serve content, I reduced infrastructure setup time to under 5 minutes for each new website. The backend (hosted on AWS EC2), is extremely cheap to run and setup to automatically restart on failure.
    id: ctswebdesign
    image: whiterabbit.jpg
portfolio:
  - title: Thomas Waltrich Music 
    tools: 
      - Vue
      - Vuetify
      - CockpitCMS
    link: https://thomaswaltrichmusic.com/
    code: https://github.com/ctsexton/tomwaltrich/
    bullets: 
      - Responsive site built with Vue.js.
    id: thomaswaltrich
    image: waltrich.jpg
  - title: Danny Fischer
    tools: 
      - OctoberCMS 
      - Google Calendar API
    link: https://dannyfischer.com.au/
    code: https://github.com/ctsexton/dannyfischer
    bullets: 
      - Responsive site built with OctoberCMS. 
      - Plugins/components I coded include the Events plugin, album covers page, a "quote machine" written in Javascript, and a simple blog page. 
      - Danny is able to easily update the site content using simple back end forms.
    id: dannyfischer
    image: dannyfischer.jpg
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
      - Updates positions from NextBus API every 10 seconds. I use it every day!
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
      - Responsive UI that adapts to all screen sizes. 
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

