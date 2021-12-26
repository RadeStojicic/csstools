!<template>
  <div class="page">
    <div class="navbarClassic">
      <h1 class="title">Css Tools</h1>
      <div class="toolsNavBar">
        <ul>
          <p>BACKGROUND</p>
          <router-link to="/background-color"
            ><li>Background Color</li></router-link
          >
          <router-link to="/background-image"
            ><li>Background Image</li></router-link
          >
          <router-link to="/background-gradient"
            ><li>Background Gradient</li></router-link
          >
          <p>BOX</p>
          <router-link to="/border"><li>Border</li></router-link>
          <router-link to="/box-shadow"><li>Box Shadow</li></router-link>
          <p>TEXT</p>
          <router-link to="/text-decoration"
            ><li>Text Decoration</li></router-link
          >
          <router-link to="/text-shadow"><li>Text Shadow</li></router-link>
          <p>TRANSFORM</p>
          <router-link to="/transform-rotate"><li>Rotate</li></router-link>
          <router-link to="/opacity"><li>Opacity</li></router-link>
          <p>LAYOUT</p>
          <router-link to="/flexbox"><li>Flexbox</li></router-link>
          <p>FILTER</p>
          <router-link to="/image-filter"><li>Image Filter</li></router-link>
          <p>OTHER</p>
          <router-link to="/cursor"><li>Cursor</li></router-link>
        </ul>
      </div>
      <footer class="footerClassic">
        <div>
          <p>CssTools <i class="far fa-copyright"></i> 2021, by Rade</p>
        </div>
      </footer>
    </div>
    <div class="responsiveNav">
      <div class="headerResponsiveNav">
        <p>CSS Tools</p>
        <div>
          <i @click="showNav()" class="fas fa-bars"></i>
          <i style="display:none;" @click="showNav()" class="fas fa-times"></i>
        </div>
      </div>
    </div>
    <div class="navBarLinksFooter" style="display:none">
      <ul class="responsiveLinks">
        <p>BACKGROUND</p>
        <router-link to="/background-color"
          ><li>Background Color</li></router-link
        >
        <router-link to="/background-image"
          ><li>Background Image</li></router-link
        >
        <router-link to="/background-gradient"
          ><li>Background Gradient</li></router-link
        >
        <p>BOX</p>
        <router-link to="/border"><li>Border</li></router-link>
        <router-link to="/box-shadow"><li>Box Shadow</li></router-link>
        <p>TEXT</p>
        <router-link to="/text-decoration"
          ><li>Text Decoration</li></router-link
        >
        <router-link to="/text-shadow"><li>Text Shadow</li></router-link>
        <p>TRANSFORM</p>
        <router-link to="/transform-rotate"><li>Rotate</li></router-link>
        <router-link to="/opacity"><li>Opacity</li></router-link>
        <p>LAYOUT</p>
        <router-link to="/flexbox"><li>Flexbox</li></router-link>
        <p>FILTER</p>
        <router-link to="/image-filter"><li>Image Filter</li></router-link>
        <p>OTHER</p>
        <router-link to="/cursor"><li>Cursor</li></router-link>
      </ul>
      <footer class="responsiveFooter">
        <div>
          <p>CssTools <i class="far fa-copyright"></i> 2021, by Rade</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showNav() {
      let allLinks = document.querySelector(".navBarLinksFooter");
      let hamburger = document.querySelector(".fa-bars");
      let close = document.querySelector(".fa-times");
      if (allLinks.style.display == "block") {
        allLinks.style.display = "none";
        hamburger.style.display = "block";
        close.style.display = "none";
      } else {
        allLinks.style.display = "block";
        hamburger.style.display = "none";
        close.style.display = "block";
      }
    },
  },
};
</script>

<style>
.navbarClassic {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #141b2c;
  font-weight: 500;
  list-style: none;
  z-index: 1000;
  display: block;
  width: 300px;
}

a {
  text-decoration: none;
  color: white;
}

.title {
  color: white;
  font-size: 1.4vw;
  padding: 20px;
  font-weight: bold;
}

.toolsNavBar {
  margin-top: 20px;
}
.toolsNavBar p {
  color: rgb(103, 187, 255);
  font-size: 0.77vw;
  padding: 10px;
  margin-top: 5px;
}
.toolsNavBar li {
  padding: 10px 10px 10px 20px;
  color: white;
  font-size: 0.8;
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
  width: 100%;
}
.toolsNavBar li:hover {
  background-color: rgba(41, 41, 41, 0.178);
}
.footerClassic {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footerClassic div {
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
  width: 95%;
  margin: auto;
  padding: 10px;
}
.footerClassic p {
  color: rgb(172, 172, 172);
  font-size: 0.9em;
  margin-top: 5px;
}

.responsiveNav {
  width: 100vw;
  height: 5em;
  top: 0;
  left: 0;
  background-color: #141b2c;
  overflow: hidden;
  display: none;
}

.navBarLinksFooter {
  width: 100vw;
  height: 100vh;
  background-color: #141b2c;
  overflow: scroll;
}
.fa-bars {
  display: flex;
  justify-content: flex-start;
  color: white;
  font-size: 5vw;
  margin-right: 20px;
}
.fa-times {
  display: flex;
  justify-content: flex-start;
  color: white;
  font-size: 5vw;
  margin-right: 20px;
}
.responsiveLinks a {
  text-decoration: none;
  color: white;
}
.responsiveLinks {
  position: relative;
  top: 20px;
}
.responsiveLinks p {
  color: rgb(103, 187, 255);
  font-size: 3.5vw;
  padding: 15px 10px 10px 10px;
  margin-left: 10px;
}
.responsiveLinks li {
  padding: 15px 10px 15px 25px;
  color: white;
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
  width: 100%;
}

.responsiveLinks li:hover {
  background-color: rgba(41, 41, 41, 0.178);
}
.headerResponsiveNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 15px;
  z-index: 2000;
  width: 100%;
  border-bottom: 1px rgba(255, 255, 255, 0.336) solid;
}
.headerResponsiveNav p {
  color: white;
  font-size: 5vw;
  font-weight: bold;
}
.responsiveFooter {
  width: 100%;
  margin: 30px auto;
  background-color: #141b2c;
  padding-bottom: 50px;
}

.responsiveFooter div {
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
  width: 95%;
  padding: 0px;
  margin: auto;
}
.responsiveFooter p {
  color: rgb(172, 172, 172);
  font-size: 3vw;
  margin-top: 10px;
  font-style: italic;
  padding: 0px 10px 0px 10px;
}
@media (max-width: 1680px) {
  .navbarClassic {
    display: none;
  }
  .responsiveNav {
    display: flex;
  }
  .headerResponsiveNav {
    display: flex;
  }
  .fa-bars {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 2vw;
    margin-right: 20px;
  }
  .fa-times {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 2.2vw;
    margin-right: 20px;
  }
  .headerResponsiveNav p {
    color: white;
    font-size: 2.2vw;
    font-weight: bold;
  }
}
@media (max-width: 1080px) {
  .navbarClassic {
    display: none;
  }
  .responsiveNav {
    display: flex;
  }
  .headerResponsiveNav {
    display: flex;
  }
  .fa-bars {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 2.7vw;
    margin-right: 20px;
  }
  .fa-times {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 2.9vw;
    margin-right: 20px;
  }
  .headerResponsiveNav p {
    color: white;
    font-size: 2.7vw;
    font-weight: bold;
  }
}
@media (max-width: 780px) {
  .navbarClassic {
    display: none;
  }
  .responsiveNav {
    display: flex;
  }
  .headerResponsiveNav {
    display: flex;
  }
  .fa-bars {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 4vw;
    margin-right: 20px;
  }
  .fa-times {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 4.2vw;
    margin-right: 20px;
  }
  .headerResponsiveNav p {
    color: white;
    font-size: 4vw;
    font-weight: bold;
  }
}
@media (max-width: 600px) {
  .navbarClassic {
    display: none;
  }
  .responsiveNav {
    display: flex;
  }
  .headerResponsiveNav {
    display: flex;
  }
  .headerResponsiveNav p {
    color: white;
    font-size: 5vw;
    font-weight: bold;
  }
  .fa-bars {
    font-size: 5vw;
  }
}
</style>
