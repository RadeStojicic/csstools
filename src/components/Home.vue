!<template>
  <div class="palleteHome">
    <div class="backgroundHome">
      <div class="titleHome">
        <div class="titleHomeContainer">
          <div>
            <h1>Category/Home</h1>
          </div>
          <div>
            <a
              alt="github account"
              href="https://github.com/RadeStojicic"
              target="_blank"
            >
              <i class="fab fa-github"></i
            ></a>
            <a
              alt="facebook account"
              href="https://www.facebook.com/rade.stojicic"
              target="_blank"
              ><i class="fab fa-facebook-square"></i
            ></a>
            <a
              alt="linkedin account"
              href="https://www.linkedin.com/in/rade-stojicic-098883222/"
              target="_blank"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a
              alt="instagram account"
              href="https://www.instagram.com/radee_st/"
              target="_blank"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>
        <div class="portfolioLink">
          <a href="https://www.radestojicic.com/" target="_blank"
            ><i class="fas fa-external-link-alt"></i
          ></a>
        </div>
      </div>
      <div class="headingHome">
        <h1>Quick & Simple CSS Generator - Online Tools</h1>
        <h2>(CSS Tools That Generate Code)</h2>
        <p>
          Quick and easy CSS tools designed to learn CSS in a practical way.
          Make your site more attractive and learn new CSS options!
        </p>
      </div>
      <div class="containerHome">
        <router-link to="/background-color">
          <div title="Background Color" class="bgColorHomeContainer">
            <div class="bgColorImage">
              <i class="fas fa-palette"></i>
            </div>
            <div class="bgColorHomeText">
              <h1>Background Color</h1>
              <p>
                Change the background color using Background Color Tool.
                Generator gives you code in hex and rgb formats.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/background-image">
          <div title="Background Image" class="bgImageHomeContainer">
            <div class="bgImageImage">
              <i class="fas fa-image"></i>
            </div>
            <div class="bgImageHomeText">
              <h1>Background Image</h1>
              <p>
                Upload your Background Image in this Generator and experiment
                with the settings!
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/background-gradient">
          <div title="Background Gradient" class="bgGradientHomeContainer">
            <div class="bgGradientImage">
              <i class="fas fa-tint"></i>
            </div>
            <div class="bgGradientHomeText">
              <h1>Background Gradient</h1>
              <p>
                Background Gradient Generator is a tool that lets you create a
                custom gradient background.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/border">
          <div title="Border" class="bgBoxShadowHomeContainer">
            <div class="bgBorderImage">
              <i class="fas fa-border-all"></i>
            </div>
            <div class="bgBorderHomeText">
              <h1>Border</h1>
              <p>
                Use Border Generator to make custom border style shown in
                preview section.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/box-shadow">
          <div title="Box Shadow" class="bgBoxShadowHomeContainer">
            <div class="bgBoxShadowImage">
              <i class="fas fa-box-open"></i>
            </div>
            <div class="bgBoxShadowHomeText">
              <h1>Box Shadow</h1>
              <p>
                Experiment with the box shadow settings and see how they work.
                The Generator will display your result in preview section.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/text-decoration">
          <div title="Text Decoration" class="bgTextDecorationHomeContainer">
            <div class="bgTextDecorationImage">
              <i class="fas fa-underline"></i>
            </div>
            <div class="bgTextDecorationHomeText">
              <h1>Text Decoration</h1>
              <p>
                Text design is very important in typography, so the Text
                Decoration Generator is there to help you.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/text-shadow">
          <div title="Text Shadow" class="bgTextShadowHomeContainer">
            <div class="bgTextShadowImage">
              <i class="fas fa-font"></i>
            </div>
            <div class="bgTextShadowHomeText">
              <h1>Text Shadow</h1>
              <p>
                Manipulate the shadow on the text simply and quickly using Text
                Shadow Generator.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/transform-rotate">
          <div title="Rotate" class="bgRotateHomeContainer">
            <div class="bgRotateImage">
              <i class="fas fa-sync-alt"></i>
            </div>
            <div class="bgRotateHomeText">
              <h1>Rotate</h1>
              <p>
                Rotate Generator uses the transform property to rotate your
                element by any angles. This tool uses degrees.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/opacity">
          <div title="Opacity" class="bgOpacityHomeContainer">
            <div class="bgOpacityImage">
              <i class="fas fa-feather-alt"></i>
            </div>
            <div class="bgOpacityHomeText">
              <h1>Opacity</h1>
              <p>
                Opacity Generator uses the transform property to change opacity
                of your element.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/flexbox">
          <div title="Flexbox" class="bgFlexboxHomeContainer">
            <div class="bgFlexboxImage">
              <i class="fab fa-buromobelexperte"></i>
            </div>
            <div class="bgFlexboxHomeText">
              <h1>Flexbox</h1>
              <p>
                Visually see how CSS flexbox works. Experiment with the settings
                of Generator and learn Flexbox quickly.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/image-filter">
          <div title="Image Filter" class="bgImageFilterHomeContainer">
            <div class="bgImageFilterImage">
              <i class="fas fa-images"></i>
            </div>
            <div class="bgImageFilterHomeText">
              <h1>Image Filter</h1>
              <p>
                Have you ever wondered how to edit an image in CSS? Upload your
                image and try this Generator.
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
        <router-link to="/cursor">
          <div title="Cursor" class="bgCursorHomeContainer">
            <div class="bgCursorImage">
              <i class="fas fa-mouse-pointer"></i>
            </div>
            <div class="bgCursorHomeText">
              <h1>Cursor</h1>
              <p>
                This Generator will help you to see how different cursor types
                look. Hurry up and test it!
              </p>
              <p class="seeGenerator">See Generator</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.backgroundHome {
  width: 85vw;
  position: absolute;
  top: 0;
  right: 0;
  height: 1100px;
  background-color: whitesmoke;
}
.containerHome {
  width: 80%;
  margin: auto;
  height: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow: auto;
  gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin-top: 80px;
  padding: 50px;
  background-color: rgb(255, 255, 255);
  box-shadow: -1px 2px 5px 3px #7070700e;
}
.headingHome {
  width: 80%;
  margin: auto;
  margin-top: 80px;
}
.containerHome div {
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 2px 5px 3px #5f5f5f0e;
}

.portfolioLink {
  position: fixed;
  right: 5px;
  bottom: 5px;
  border-radius: 5px;
  background-color: rgb(96, 10, 255);
}
.portfolioLink i {
  color: rgb(255, 255, 255);
  font-size: 1vw;
  padding: 10px;
}
.portfolioLink:hover {
  border-radius: 50px;
  transition: 1.5s;
  cursor: pointer;
}

.titleHome {
  background-color: rgb(96, 10, 255);
  background-image: url("../assets/navbarDesign.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.titleHomeContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.titleHomeContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleHome h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}
.headingHome h1 {
  font-size: 3vw;
  color: #1d263dec;
}
.headingHome h2 {
  margin-top: 30px;
  margin-bottom: 20px;
  color: rgb(87, 87, 87);
}
.seeGenerator {
  text-align: right;
  width: 100%;
  color: rgb(255, 4, 109);
}

/* BACKGROUND COLOR */

.bgColorHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgColorHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgColorImage {
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-image: url("../assets/bgColorBackground.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bgColorHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgColorHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgColorHomeText p {
  margin-top: 20px;
  line-height: 22px;
}
/* BACKGROUND IMAGE */

.bgImageHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgImageHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgImageImage {
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-image: linear-gradient(
      to bottom,
      rgba(96, 10, 255, 0.6),
      rgba(0, 0, 255, 0.6)
    ),
    url("https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgImageHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgImageHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgImageHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* BACKGROUND GRADIENT */

.bgGradientHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgGradientHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgGradientImage {
  background: linear-gradient(
    90deg,
    rgb(255, 4, 109) 0%,
    rgb(96, 10, 255) 100%
  );
  font-size: 3vw;
}
.bgGradientHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgGradientHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgGradientHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* BORDER */

.bgBorderHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgBorderHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgBorderImage {
  background-image: linear-gradient(
      to bottom,
      rgba(40, 24, 131, 0.548) 0%,
      rgba(143, 86, 250, 0.568) 100%
    ),
    url("../assets/borderBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 3vw;
}
.bgBorderHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgBorderHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgBorderHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* BOX SHADOW */

.bgBoxShadowHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgBoxShadowHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgBoxShadowImage {
  background-color: rgb(255, 10, 71);
  font-size: 3vw;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 10, 104, 0.8),
      rgba(115, 0, 161, 0.8)
    ),
    url("../assets/boxShadowBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgBoxShadowHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgBoxShadowHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgBoxShadowHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* TEXT DECORATION */

.bgTextDecorationHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgTextDecorationHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgTextDecorationImage {
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-image: linear-gradient(
      to bottom,
      rgba(83, 10, 255, 0.8),
      rgba(115, 0, 161, 0.8)
    ),
    url("../assets/textDecorationBackground.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgTextDecorationHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgTextDecorationHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgTextDecorationHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* TEXT SHADOW */

.bgTextShadowHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgTextShadowHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgTextShadowImage {
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-image: linear-gradient(
      to bottom,
      rgba(115, 0, 161, 0.8),
      rgba(255, 10, 71, 0.6)
    ),
    url("../assets/textShadowBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgTextShadowHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgTextShadowHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgTextShadowHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* ROTATE */

.bgRotateHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgRotateHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgRotateImage {
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-image: linear-gradient(
      to bottom,
      rgba(83, 10, 255, 0.8),
      rgba(83, 0, 161, 0.8)
    ),
    url("../assets/rotateBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgRotateHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}

.bgRotateHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgRotateHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* OPACITY */

.bgOpacityHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgOpacityHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgOpacityImage {
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-image: linear-gradient(
      to bottom,
      rgba(214, 6, 93, 0.8),
      rgba(255, 10, 71, 0.6)
    ),
    url("../assets/opacityBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgOpacityHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgOpacityHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgOpacityHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* FLEXBOX */

.bgFlexboxHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgFlexboxHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgFlexboxImage {
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-image: linear-gradient(
      to bottom,
      rgba(96, 8, 212, 0.8),
      rgba(20, 128, 230, 0.8)
    ),
    url("../assets/flexboxBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgFlexboxHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgFlexboxHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgFlexboxHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* IMAGE FILTER */

.bgImageFilterHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgImageFilterHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgImageFilterImage {
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-image: linear-gradient(
      to bottom,
      rgba(105, 1, 44, 0.8),
      rgba(151, 3, 40, 0.6)
    ),
    url("../assets/imageFilterBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgImageFilterHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgImageFilterHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgImageFilterHomeText p {
  margin-top: 20px;
  line-height: 22px;
}

/* CURSOR */

.bgCursorHomeContainer {
  display: flex;
  flex-direction: column;
}
.bgCursorHomeContainer:hover {
  transform: scale(1.01);
  transition: 0.2s;
}

.bgCursorImage {
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-color: rgb(96, 10, 255);
  font-size: 3vw;
  background-image: linear-gradient(
      to bottom,
      rgba(39, 8, 212, 0.719),
      rgba(8, 45, 212, 0.877)
    ),
    url("../assets/cursorBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgCursorHomeText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: rgb(17, 16, 16);
  text-align: left;
  padding: 15px;
}
.bgCursorHomeText h1 {
  font-size: 1vw;
  width: 100%;
  font-weight: bold;
}
.bgCursorHomeText p {
  margin-top: 20px;
  line-height: 22px;
}
@media (min-width: 3000px) and (max-width: 8040px) {
  .backgroundHome {
    height: 2160px;
    width: 80vw;
  }
}
@media (min-width: 2048px) and (max-width: 3000px) {
  .backgroundHome {
    height: 1200px;
    width: 80vw;
  }
}
@media (max-width: 1800px) {
  .backgroundHome {
    width: 80vw;
  }
  .containerHome {
    width: 90%;
    margin: auto;
    height: 60%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: auto;
    gap: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    margin-top: 80px;
    padding: 50px;
    background-color: rgb(255, 255, 255);
    box-shadow: -1px 2px 5px 3px #7070700e;
  }
  .headingHome {
    width: 90%;
    margin: auto;
    margin-top: 80px;
  }
  .containerHome div {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 2px 5px 3px #5f5f5f0e;
  }
  .containerHome div p {
    font-size: 1vw;
  }
  .containerHome h1 {
    font-size: 1.2vw;
  }
  .bgBorderHomeText {
    padding: 10px;
  }
  .bgColorHomeText {
    padding: 10px;
  }
  .bgBorderHomeText {
    padding: 10px;
  }
  .bgImageHomeText {
    padding: 10px;
  }
  .bgGradientHomeText {
    padding: 10px;
  }
  .bgBoxShadowHomeText {
    padding: 10px;
  }
  .bgTextDecorationHomeText {
    padding: 10px;
  }
  .bgTextShadowHomeText {
    padding: 10px;
  }
  .bgTextDecorationHomeText {
    padding: 10px;
  }
  .bgRotateHomeText {
    padding: 10px;
  }
  .bgOpacityHomeText {
    padding: 10px;
  }
  .bgFlexboxHomeText {
    padding: 10px;
  }
  .bgCursorHomeText {
    padding: 10px;
  }
  .bgImageFilterHomeText {
    padding: 10px;
  }
  .titleHomeContainer {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleHomeContainer div i {
    font-size: 1.5vw;
    color: white;
    padding: 5px;
  }

  .titleHome h1 {
    font-size: 1.5vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }
}
@media (max-width: 1400px) {
  .containerHome {
    padding: 20px;
  }
}
@media (max-width: 1300px) {
  .backgroundHome {
    width: 100%;
    height: 1500px;
    margin: 80px auto;
    z-index: -1;
  }
  .portfolioLink {
    display: none;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }
  .containerHome {
    z-index: -1;
  }
  .containerHome {
    width: 90%;
    margin: auto;
    height: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: auto;
    gap: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    margin-top: 80px;
    padding: 50px;
    background-color: rgb(255, 255, 255);
    box-shadow: -1px 2px 5px 3px #7070700e;
  }
  .headingHome {
    width: 90%;
    margin: auto;
    margin-top: 80px;
  }
  .containerHome div {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 2px 5px 3px #5f5f5f0e;
  }
  .containerHome div p {
    font-size: 1.3vw;
  }
  .containerHome div h1 {
    font-size: 1.5vw;
  }
  .containerHome div i {
    font-size: 4vw;
  }
  .titleHomeContainer {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleHomeContainer div i {
    font-size: 1.8vw;
    color: white;
    padding: 7px;
  }

  .titleHome h1 {
    font-size: 2vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }
}
@media (max-width: 1080px) {
  .containerHome {
    width: 90%;
    margin: auto;
    height: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: auto;
    gap: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    margin-top: 80px;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: -1px 2px 5px 3px #7070700e;
  }
  .headingHome {
    width: 90%;
    margin: auto;
    margin-top: 80px;
  }
  .containerHome div {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 2px 5px 3px #5f5f5f0e;
  }
  .containerHome div p {
    font-size: 1.5vw;
  }
  .containerHome div h1 {
    font-size: 1.7vw;
  }
  .containerHome div i {
    font-size: 4vw;
  }

  .titleHomeContainer {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleHomeContainer div i {
    font-size: 2.5vw;
    color: white;
    padding: 7px;
  }

  .titleHome h1 {
    font-size: 2.5vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }
  .headingHome h1 {
    font-size: 4vw;
    color: #1d263dec;
  }
}
@media (max-width: 780px) {
  .containerHome {
    width: 90%;
    margin: auto;
    height: 60%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    overflow: auto;
    gap: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    margin-top: 80px;
    padding: 30px;
    background-color: rgb(255, 255, 255);
    box-shadow: -1px 2px 5px 3px #7070700e;
  }

  .headingHome h1 {
    font-size: 4vw;
    color: #1d263dec;
  }
  .headingHome {
    width: 90%;
    margin: auto;
    margin-top: 80px;
  }
  .containerHome div {
    width: 90%;
    height: 400px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 2px 5px 3px #5f5f5f0e;
  }
  .containerHome div p {
    font-size: 2vw;
  }
  .containerHome div h1 {
    font-size: 2.2vw;
  }
  .containerHome div i {
    font-size: 4vw;
  }

  .titleHomeContainer {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleHomeContainer div i {
    font-size: 3vw;
    color: white;
    padding: 7px;
  }

  .titleHome h1 {
    font-size: 3vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }
}

@media (max-width: 600px) {
  .containerHome {
    width: 95%;
    margin: auto;
    height: 60%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    overflow: auto;
    gap: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    margin-top: 80px;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: -1px 2px 5px 3px #7070700e;
  }
  .backgroundHome {
    height: 1080px;
  }
  .headingHome {
    width: 90%;
    margin: auto;
    margin-top: 80px;
  }
  .containerHome div {
    width: 100%;
    height: 400px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 2px 5px 3px #5f5f5f0e;
  }
  .containerHome div p {
    font-size: 3vw;
  }
  .containerHome div h1 {
    font-size: 4vw;
  }
  .containerHome div i {
    font-size: 8vw;
  }

  .titleHomeContainer {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleHomeContainer div i {
    font-size: 4vw;
    color: white;
    padding: 7px;
  }

  .titleHome h1 {
    font-size: 4vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }
  .titleHome h1 {
    font-size: 5vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }
  .headingHome {
    margin-top: 60px;
  }
  .headingHome h1 {
    font-size: 6vw;
    color: #1d263dec;
  }
  .headingHome h2 {
    margin-top: 30px;
    margin-bottom: 20px;
    color: rgb(87, 87, 87);
  }
}
</style>
