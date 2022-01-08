!<template>
  <div class="page">
    <div class="navbarClassic">
      <h1 class="title">
        <a href="#"
          >CodeGen<span style="color:rgb(255, 4, 109);  font-weight: ;"
            >CSS</span
          ></a
        >
      </h1>

      <div class="toolsNavBar">
        <div class="homeContainer">
          <router-link to="/background-color">
            <div>
              <span>Home</span>
              <i class="fas fa-home"></i>
            </div>
          </router-link>
        </div>
        <ul>
          <div class="dropdownParentBG">
            <div
              ref="bgDropDown"
              @click="dropBackgroundContent()"
              class="backgroundDropdown"
            >
              <p>Background</p>
              <i class="fas fa-chevron-down down1"></i>
              <i style="display: none;" class="fas fa-chevron-up up1"></i>
            </div>
          </div>
          <div style="display: block;" class="backgroundLinks">
            <router-link to="/background-color"
              ><li>Background Color</li></router-link
            >
            <router-link to="/background-image"
              ><li>Background Image</li></router-link
            >
            <router-link to="/background-gradient"
              ><li>Background Gradient</li></router-link
            >
          </div>
          <div class="dropdownParentBox">
            <div
              ref="boxDropDown"
              @click="dropBoxContent()"
              class="boxDropdown"
            >
              <p>Box</p>
              <i class="fas fa-chevron-down down2"></i>
              <i style="display: none;" class="fas fa-chevron-up up2"></i>
            </div>
          </div>
          <div style="display:block;" class="boxLinks">
            <router-link to="/border"><li>Border</li></router-link>
            <router-link to="/box-shadow"><li>Box Shadow</li></router-link>
          </div>
          <div class="dropdownParentText">
            <div @click="dropTextContent()">
              <p>Text</p>
              <i style="display: none;" class="fas fa-chevron-up up3"></i>
              <i class="fas fa-chevron-down down3"></i>
            </div>
          </div>
          <div style="display: block;" class="textLinks">
            <router-link to="/text-decoration"
              ><li>Text Decoration</li></router-link
            >
            <router-link to="/text-shadow"><li>Text Shadow</li></router-link>
          </div>
          <div class="dropdownParentTransform">
            <div @click="dropTransformContent()">
              <p>Transform</p>
              <i class="fas fa-chevron-down down4"></i>
              <i style="display: none;" class="fas fa-chevron-up up4"></i>
            </div>
          </div>
          <div style="display: block;" class="transformLinks">
            <router-link to="/transform-rotate"><li>Rotate</li></router-link>
            <router-link to="/opacity"><li>Opacity</li></router-link>
          </div>
          <div class="dropdownParentLayout">
            <div @click="dropLayoutContent()">
              <p>Layout</p>
              <i class="fas fa-chevron-down down5"></i>
              <i style="display: none;" class="fas fa-chevron-up up5"></i>
            </div>
          </div>
          <div style="display: block;" class="layoutLinks">
            <router-link to="/flexbox"><li>Flexbox</li></router-link>
          </div>
          <div class="dropdownParentFilter">
            <div @click="dropFilterContent()">
              <p>Filter</p>
              <i class="fas fa-chevron-down down6"></i>
              <i style="display: none;" class="fas fa-chevron-up up6"></i>
            </div>
          </div>
          <div style="display:block;" class="filterLinks">
            <router-link to="/image-filter"><li>Image Filter</li></router-link>
          </div>
          <div class="dropdownParentOther">
            <div @click="dropOtherContent()">
              <p>Other</p>
              <i class="fas fa-chevron-down down7"></i>
              <i style="display: none;" class="fas fa-chevron-up up7"></i>
            </div>
          </div>
          <div style="display: block;" class="otherLinks">
            <router-link to="/cursor"><li>Cursor</li></router-link>
          </div>
        </ul>
      </div>
      <footer class="footerClassic">
        <div>
          <p>CodeGen <i class="far fa-copyright"></i> 2022, by Rade</p>
        </div>
      </footer>
    </div>
    <div class="responsiveNav">
      <div class="headerResponsiveNav">
        <h1 class="titleRes">
          <a href="#"
            >CodeGen<span style="color:rgb(255, 4, 109);">CSS</span></a
          >
        </h1>
        <div>
          <i @click="showNav()" class="fas fa-bars"></i>
          <i style="display:none;" @click="showNav()" class="fas fa-times"></i>
        </div>
      </div>
    </div>
    <div class="navBarLinksFooter" style="display:none">
      <ul class="responsiveLinks">
        <p>Background</p>
        <router-link to="/background-color"
          ><li>Background Color</li></router-link
        >
        <router-link to="/background-image"
          ><li>Background Image</li></router-link
        >
        <router-link to="/background-gradient"
          ><li>Background Gradient</li></router-link
        >
        <p>Box</p>
        <router-link to="/border"><li>Border</li></router-link>
        <router-link to="/box-shadow"><li>Box Shadow</li></router-link>
        <p>Text</p>
        <router-link to="/text-decoration"
          ><li>Text Decoration</li></router-link
        >
        <router-link to="/text-shadow"><li>Text Shadow</li></router-link>
        <p>Transform</p>
        <router-link to="/transform-rotate"><li>Rotate</li></router-link>
        <router-link to="/opacity"><li>Opacity</li></router-link>
        <p>Layout</p>
        <router-link to="/flexbox"><li>Flexbox</li></router-link>
        <p>Filter</p>
        <router-link to="/image-filter"><li>Image Filter</li></router-link>
        <p>Other</p>
        <router-link to="/cursor"><li>Cursor</li></router-link>
      </ul>
      <footer class="responsiveFooter">
        <div>
          <p>CodeGen <i class="far fa-copyright"></i> 2022, by Rade</p>
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
      allLinks.addEventListener("click", () => {
        allLinks.style.display = "none";
        hamburger.style.display = "block";
        close.style.display = "none";
      });
    },
    dropBackgroundContent() {
      let backgroundLinks = document.querySelector(".backgroundLinks");
      let iconUp = document.querySelector(".up1");
      let iconDown = document.querySelector(".down1");

      if (backgroundLinks.style.display == "block") {
        backgroundLinks.style.display = "none";
        iconDown.style.display = "block";
        iconUp.style.display = "none";
        backgroundLinks.classList.remove("animationDropDown");
        backgroundLinks.classList.add("animationUpDropDown");
      } else {
        backgroundLinks.style.display = "block";
        iconDown.style.display = "none";
        iconUp.style.display = "block";
        backgroundLinks.classList.add("animationDropDown");
      }
    },
    dropBoxContent() {
      let boxLinks = document.querySelector(".boxLinks");
      let iconUp = document.querySelector(".up2");
      let iconDown = document.querySelector(".down2");

      if (boxLinks.style.display == "block") {
        boxLinks.style.display = "none";
        iconDown.style.display = "block";
        iconUp.style.display = "none";
        boxLinks.classList.remove("animationDropDown");
        boxLinks.classList.add("animationUpDropDown");
      } else {
        boxLinks.style.display = "block";
        iconDown.style.display = "none";
        iconUp.style.display = "block";
        boxLinks.classList.add("animationDropDown");
      }
    },
    dropTextContent() {
      let textLinks = document.querySelector(".textLinks");
      let iconUp = document.querySelector(".up3");
      let iconDown = document.querySelector(".down3");

      if (textLinks.style.display == "block") {
        textLinks.style.display = "none";
        iconDown.style.display = "block";
        iconUp.style.display = "none";
        textLinks.classList.remove("animationDropDown");
        textLinks.classList.add("animationUpDropDown");
      } else {
        textLinks.style.display = "block";
        iconDown.style.display = "none";
        iconUp.style.display = "block";
        textLinks.classList.add("animationDropDown");
      }
    },
    dropTransformContent() {
      let transformLinks = document.querySelector(".transformLinks");
      let iconUp = document.querySelector(".up4");
      let iconDown = document.querySelector(".down4");

      if (transformLinks.style.display == "block") {
        transformLinks.style.display = "none";
        iconDown.style.display = "block";
        iconUp.style.display = "none";
        transformLinks.classList.remove("animationDropDown");
        transformLinks.classList.add("animationUpDropDown");
      } else {
        transformLinks.style.display = "block";
        iconDown.style.display = "none";
        iconUp.style.display = "block";
        transformLinks.classList.add("animationDropDown");
      }
    },
    dropLayoutContent() {
      let layoutLinks = document.querySelector(".layoutLinks");
      let iconUp = document.querySelector(".up5");
      let iconDown = document.querySelector(".down5");

      if (layoutLinks.style.display == "block") {
        layoutLinks.style.display = "none";
        iconDown.style.display = "block";
        iconUp.style.display = "none";
        layoutLinks.classList.remove("animationDropDown");
        layoutLinks.classList.add("animationUpDropDown");
      } else {
        layoutLinks.style.display = "block";
        iconDown.style.display = "none";
        iconUp.style.display = "block";
        layoutLinks.classList.add("animationDropDown");
      }
    },
    dropFilterContent() {
      let filterLinks = document.querySelector(".filterLinks");
      let iconUp = document.querySelector(".up6");
      let iconDown = document.querySelector(".down6");

      if (filterLinks.style.display == "block") {
        filterLinks.style.display = "none";
        iconDown.style.display = "block";
        iconUp.style.display = "none";
        filterLinks.classList.remove("animationDropDown");
        filterLinks.classList.add("animationUpDropDown");
      } else {
        filterLinks.style.display = "block";
        iconDown.style.display = "none";
        iconUp.style.display = "block";
        filterLinks.classList.add("animationDropDown");
      }
    },
    dropOtherContent() {
      let otherLinks = document.querySelector(".otherLinks");
      let iconUp = document.querySelector(".up7");
      let iconDown = document.querySelector(".down7");

      if (otherLinks.style.display == "block") {
        otherLinks.style.display = "none";
        iconDown.style.display = "block";
        iconUp.style.display = "none";
        otherLinks.classList.remove("animationDropDown");
        otherLinks.classList.add("animationUpDropDown");
      } else {
        otherLinks.style.display = "block";
        iconDown.style.display = "none";
        iconUp.style.display = "block";
        otherLinks.classList.add("animationDropDown");
      }
    },
  },
  mounted() {},
};
</script>

<style>
.navbarClassic {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #0f1629;
  font-weight: 500;
  list-style: none;
  z-index: 1000;
  display: block;
  width: 15vw;
  overflow: auto;
  user-select: none;
}

a {
  text-decoration: none;
  color: white;
}

.title {
  color: white;
  font-size: 1.4vw;
  padding: 25px 20px 5px 10px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  background-color: #0f1629;
}

.homeContainer div {
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgb(255, 255, 255);
  padding: 15px 10px 15px 10px;
  background-color: #0c1325;
}

.homeContainer i {
  margin-right: 20px;
}

.toolsNavBar {
  margin-top: 20px;
  background-image: url("../assets/navbarDesign.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #18233f83;
}
.toolsNavBar ul {
  height: 80vh;
  padding-bottom: 15px;
  overflow-y: scroll;
  width: 95%;
}
/*scrollbar */

.toolsNavBar ::-webkit-scrollbar {
  width: 10px;
}
/* Track */
.toolsNavBar ::-webkit-scrollbar-track {
  box-shadow: inset 30px 30px 30px #141b2c;
}
.toolsNavBar ::-webkit-scrollbar-thumb {
  /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    rgb(7, 26, 44),
    rgb(7, 26, 44)
  );
  /* Chrome 10-25, Safari 5.1-6 */
  background-color: rgb(192, 192, 192);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.toolsNavBar p {
  color: rgb(255, 255, 255);
  font-size: 0.9vw;
  padding: 10px;
  font-weight: bold;
  margin-top: 5px;
  width: 100%;
}
.toolsNavBar ul {
  position: relative;
  top: 0px;
}
.toolsNavBar li {
  padding: 10px 10px 10px 15px;
  color: rgb(226, 226, 226);
  font-size: 0.78vw;
  width: 100%;
  font-weight: 500;
}
.toolsNavBar li:hover {
  background-color: rgba(112, 112, 112, 0.034);
}
.footerClassic {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-top: 0px;
  padding-bottom: 10px;
  background-color: #0f1629;
}

.footerClassic div {
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
  width: 100%;
  margin: 0px auto;
  padding-top: 15px;
  padding-left: 10px;
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

.titleRes {
  color: white;
  font-size: 5.5vw;
  font-weight: bold;
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
  user-select: none;
}
.responsiveLinks li {
  padding: 15px 10px 15px 25px;
  color: white;
  width: 100%;
  user-select: none;
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
  user-select: none;
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
.dropdownParentBG {
  width: 100%;
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
}
.dropdownParentBG div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
}
.dropdownParentBG i {
  color: rgb(209, 209, 209);
  font-size: 0.6vw;
}
.dropdownParentBG div:hover {
  background-color: rgba(195, 231, 255, 0.062);
}

.dropdownParentBox {
  width: 100%;
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
}
.dropdownParentBox div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
}
.dropdownParentBox i {
  color: rgb(209, 209, 209);
  font-size: 0.6vw;
}
.dropdownParentBox div:hover {
  background-color: rgba(195, 231, 255, 0.062);
}
.dropdownParentText {
  width: 100%;
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
}
.dropdownParentText div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
}
.dropdownParentText i {
  color: rgb(209, 209, 209);
  font-size: 0.6vw;
}
.dropdownParentText div:hover {
  background-color: rgba(195, 231, 255, 0.062);
}
.dropdownParentTransform {
  width: 100%;
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
}
.dropdownParentTransform div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
}
.dropdownParentTransform i {
  color: rgb(209, 209, 209);
  font-size: 0.6vw;
}
.dropdownParentTransform div:hover {
  background-color: rgba(195, 231, 255, 0.062);
}
.dropdownParentLayout {
  width: 100%;
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
}
.dropdownParentLayout div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
}
.dropdownParentLayout i {
  color: rgb(209, 209, 209);
  font-size: 0.6vw;
}
.dropdownParentLayout div:hover {
  background-color: rgba(195, 231, 255, 0.062);
}
.dropdownParentFilter {
  width: 100%;
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
}
.dropdownParentFilter div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
}
.dropdownParentFilter i {
  color: rgb(209, 209, 209);
  font-size: 0.6vw;
}

.dropdownParentFilter div:hover {
  background-color: rgba(195, 231, 255, 0.062);
}
.dropdownParentOther {
  width: 100%;
  border-top: 1px rgba(128, 128, 128, 0.39) solid;
}
.dropdownParentOther div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-right: 10px;
  cursor: pointer;
}
.dropdownParentOther div:hover {
  background-color: rgba(195, 231, 255, 0.062);
}
.dropdownParentOther i {
  color: rgb(209, 209, 209);
  font-size: 0.6vw;
}

.animationDropDown {
  animation: 350ms slideDown ease-in-out forwards;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@media (min-width: 2000px) {
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
    width: 20vw;
  }

  a {
    text-decoration: none;
    color: white;
  }
  .homeContainer div {
    display: flex;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: rgb(255, 255, 255);
    padding: 25px;
    background-color: #0c1325;
    width: 100%;
    font-size: 0.8vw;
  }
  .title {
    font-size: 1.4vw;
    padding: 1vw;
  }
  .toolsNavBar {
    margin-top: 0;
  }
  .toolsNavBar p {
    color: rgb(103, 187, 255);
    font-size: 0.8vw;
    padding: 0.4vw;
  }
  .toolsNavBar li {
    padding: 0.5vw 0.5vw 0.5vw 1vw;
    color: white;
    font-size: 0.8vw;
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
    width: 100%;

    padding: 0.5vw;
  }
  .footerClassic p {
    color: rgb(172, 172, 172);
    font-size: 0.8vw;
    margin-top: 5px;
  }
  .toolsNavBar ul {
    height: 80vh;
    padding-bottom: 10px;
    overflow-y: scroll;
    width: 95%;
  }
}
@media (max-width: 1800px) {
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
    width: 20vw;
    overflow: auto;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .title {
    font-size: 1.8vw;
    padding: 1vw;
  }

  .toolsNavBar {
    margin-top: 0;
  }
  .toolsNavBar p {
    color: rgb(255, 255, 255);
    font-size: 1.1vw;
    padding: 1vw;
    margin-top: 5px;
    font-weight: bold;
  }
  .homeContainer {
    font-size: 1.1vw;
  }
  .toolsNavBar li {
    padding: 0.65vw 0.5vw 0.6vw 1.3vw;
    color: white;
    font-size: 1vw;
    border-top: 1px rgba(128, 128, 128, 0.39) solid;
    width: 100%;
  }
  .toolsNavBar li:hover {
    background-color: rgba(41, 41, 41, 0.178);
  }
  .toolsNavBar ul i {
    font-size: 0.8vw;
  }

  .footerClassic p {
    color: rgb(172, 172, 172);
    font-size: 0.9vw;
    margin-top: 5px;
  }
}
@media (max-width: 1300px) {
  .navbarClassic {
    display: none;
  }
  .responsiveNav {
    display: flex;
  }
  .headerResponsiveNav {
    display: flex;
  }
  .titleRes {
    font-size: 2.5vw;
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
    font-size: 2vw;
    font-weight: bold;
  }
  .responsiveLinks {
    position: relative;
    top: 20px;
  }
  .responsiveLinks p {
    color: rgb(255, 255, 255);
    font-size: 1.4vw;
    padding: 15px 10px 10px 10px;
    margin-left: 10px;
    font-weight: bold;
    border-top: 1px rgba(128, 128, 128, 0.39) solid;
  }

  .headerResponsiveNav p {
    color: white;
    font-size: 2.6vw;
    font-weight: bold;
  }
  .responsiveLinks li {
    font-size: 1.3vw;
  }

  .responsiveFooter p {
    color: rgb(172, 172, 172);
    font-size: 1.3vw;
    margin-top: 20px;
    font-style: italic;
    padding: 1vw;
    margin-left: 10px;
  }
  .responsiveFooter {
    margin: 50px auto;
  }

  .responsiveFooter div {
    border-top: 1px rgba(128, 128, 128, 0.39) solid;
    width: 100%;
    margin: auto;
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
  .titleRes {
    font-size: 3.5vw;
  }

  .fa-bars {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 3vw;
    margin-right: 20px;
  }
  .fa-times {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 3.2vw;
    margin-right: 20px;
  }
  .headerResponsiveNav p {
    color: white;
    font-size: 3vw;
    font-weight: bold;
  }
  .responsiveLinks p {
    color: rgb(255, 255, 255);
    font-size: 2.2vw;
    padding: 15px 10px 10px 10px;
    margin-left: 10px;
    font-weight: bold;
    border-top: 1px rgba(128, 128, 128, 0.39) solid;
  }

  .responsiveFooter p {
    color: rgb(172, 172, 172);
    font-size: 1.8vw;
    margin-top: 10px;
    font-style: italic;
    padding: 0px 10px 0px 10px;
  }
  .responsiveLinks li {
    font-size: 2vw;
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
  .titleRes {
    font-size: 4.5vw;
  }

  .fa-bars {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 4.5vw;
    margin-right: 20px;
  }
  .fa-times {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 4.7vw;
    margin-right: 20px;
  }
  .headerResponsiveNav p {
    color: white;
    font-size: 4.5vw;
    font-weight: bold;
  }
  .responsiveLinks p {
    color: rgb(255, 255, 255);
    font-size: 2.5vw;
    padding: 15px 10px 10px 10px;
    margin-left: 10px;
    font-weight: bold;
    border-top: 1px rgba(128, 128, 128, 0.39) solid;
  }

  .responsiveFooter p {
    color: rgb(172, 172, 172);
    font-size: 2.3vw;
    margin-top: 10px;
    font-style: italic;
    padding: 0px 10px 0px 10px;
  }
  .responsiveLinks li {
    font-size: 2.4vw;
  }
}
@media (max-width: 600px) {
  .titleRes {
    font-size: 5.5vw;
  }

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
    font-size: 5.5vw;
    font-weight: bold;
  }
  .fa-bars {
    font-size: 5.5vw;
  }
  .fa-times {
    font-size: 5.6vw;
  }
  .responsiveLinks p {
    color: rgb(255, 255, 255);
    font-size: 3.8vw;
    padding: 15px 10px 10px 10px;
    margin-left: 10px;
    font-weight: bold;
    border-top: 1px rgba(128, 128, 128, 0.39) solid;
  }

  .responsiveFooter p {
    color: rgb(172, 172, 172);
    font-size: 3.2vw;
    margin-top: 10px;
    font-style: italic;
    padding: 0px 10px 0px 10px;
  }
  .responsiveLinks li {
    font-size: 3.5vw;
    padding: 20px 10px 20px 25px;
  }
}
</style>
