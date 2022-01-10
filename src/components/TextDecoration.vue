!<template>
  <div class="textDecoration_container page">
    <div class="backgroundtextDecoration">
      <div class="titletextDecoration">
        <div class="titletextDecorationContainer">
          <div>
            <h1>Category/TextDecoration</h1>
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
      <div class="textDecorationTool">
        <div class="optionstextDecoration">
          <h1 class="textDecorationText">Settings</h1>
          <div class="toolstextDecoration">
            <div class="colortextDecorationContainer">
              <p>Color</p>
              <section class="bsInputContainerTD">
                <input
                  class="textDecorationColorTool"
                  type="color"
                  v-model="colortextDecoration"
                  name="color"
                  value="#000000"
                />
                <p style="margin-left: 10px;">{{ colortextDecoration }}</p>
              </section>
              <div class="hideTextDecorationText">
                Click and change the color of the line!
              </div>
            </div>
            <div>
              <p>Line</p>
              <section
                @click="showDropDownLine"
                class="positionDropDownDDL"
                ref="divClick"
              >
                <section class="">
                  {{ activeLineVar }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section style="display: none;" class="itemsDropDownLine">
                <section
                  @click="replaceClassLine(), overline()"
                  class="notActiveLine secLine"
                  ref=""
                >
                  overline
                </section>
                <section
                  @click="replaceClassLine(), underline()"
                  class="notActiveLine secLine"
                  ref="secLine"
                >
                  underline
                </section>
                <section
                  @click="replaceClassLine(), lineThrough()"
                  class="activeLine secLine"
                  ref=""
                >
                  line-through
                </section>
              </section>
            </div>
            <div>
              <p>Style</p>
              <section
                @click="showDropDownLineStyle"
                class="positionDropDownDDLS"
                ref="divClick"
              >
                <section class="">
                  {{ activeLineStyleVar }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section style="display: none;" class="itemsDropDownLineStyle">
                <section
                  @click="replaceClassLineStyle(), doubleLine()"
                  class="notActiveLineStyle secLineStyle"
                  ref=""
                >
                  double
                </section>
                <section
                  @click="replaceClassLineStyle(), dottedLine()"
                  class="notActiveLineStyle secLineStyle"
                  ref=""
                >
                  dotted
                </section>
                <section
                  @click="replaceClassLineStyle(), solidLine()"
                  class="activeLineStyle secLineStyle"
                  ref="secLineStyle"
                >
                  solid
                </section>
                <section
                  @click="replaceClassLineStyle(), dashedLine()"
                  class="notActiveLineStyle secLineStyle"
                  ref=""
                >
                  dashed
                </section>
                <section
                  @click="replaceClassLineStyle(), wavyLine()"
                  class="notActiveLineStyle secLineStyle"
                  ref=""
                >
                  wavy
                </section>
              </section>
            </div>
          </div>
        </div>
        <div class="secondtextDecoration">
          <div class="previewtextDecorationContainer">
            <h1 class="previewtextDecorationText">Preview</h1>

            <p
              :style="{
                textDecorationLine: activeLineVar,
                textDecorationColor: colortextDecoration,
                textDecorationStyle: activeLineStyleVar,
              }"
              class="elementtextDecoration"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              cumque, assumenda amet voluptatibus id natus repudiandae!
            </p>
          </div>
          <div class="resulttextDecoration">
            <div class="copyContainertextDecoration">
              <h1 class="resulttextDecorationText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardBS()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextTextDecoration">
              <code
                ><span style="color: #bef264;">text-decoration: </span
                >{{ activeLineVar }} {{ activeLineStyleVar }}
                {{ colortextDecoration }};
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colortextDecoration: "#1d263d",
      activeLineVar: "underline",
      activeLineStyleVar: "solid",
    };
  },
  methods: {
    copyToClipBoardBS() {
      navigator.clipboard.writeText(
        "text-decoration: " +
          this.activeLineVar +
          " " +
          this.activeLineStyleVar +
          " " +
          this.colortextDecoration +
          ";"
      );
      alert("Copied to clipboard!");
    },
    showDropDownLine() {
      let itemsDropDownLine = document.querySelector(".itemsDropDownLine");
      if (itemsDropDownLine.style.display == "none") {
        itemsDropDownLine.style.display = "block";
      } else {
        itemsDropDownLine.style.display = "none";
      }
      document.querySelector(".itemsDropDownLineStyle").style.display = "none";
    },
    showDropDownLineStyle() {
      let itemsDropDownLineStyle = document.querySelector(
        ".itemsDropDownLineStyle"
      );
      if (itemsDropDownLineStyle.style.display == "none") {
        itemsDropDownLineStyle.style.display = "block";
      } else {
        itemsDropDownLineStyle.style.display = "none";
      }
      document.querySelector(".itemsDropDownLine").style.display = "none";
    },
    replaceClassLine() {
      let lineSections = document.querySelectorAll(".secLine");

      for (let i = 0; i < lineSections.length; i++) {
        lineSections[i].addEventListener("click", function() {
          let currentPosition = document.getElementsByClassName("activeLine");
          currentPosition[0].className = currentPosition[0].className.replace(
            "activeLine",
            ""
          );
          this.className += " activeLine";
        });
        let dropLineContainer = document.querySelector(".itemsDropDownLine");
        dropLineContainer.style.display = "none";
      }
    },
    replaceClassLineStyle() {
      let lineStyleSections = document.querySelectorAll(".secLineStyle");

      for (let i = 0; i < lineStyleSections.length; i++) {
        lineStyleSections[i].addEventListener("click", function() {
          let currentPosition = document.getElementsByClassName(
            "activeLineStyle"
          );
          currentPosition[0].className = currentPosition[0].className.replace(
            "activeLineStyle",
            ""
          );
          this.className += " activeLineStyle";
        });
        let dropLineStyleContainer = document.querySelector(
          ".itemsDropDownLineStyle"
        );
        dropLineStyleContainer.style.display = "none";
      }
    },
    overline() {
      this.activeLineVar = "overline";
    },
    underline() {
      this.activeLineVar = "underline";
    },
    lineThrough() {
      this.activeLineVar = "line-through";
    },
    doubleLine() {
      this.activeLineStyleVar = "double";
    },
    dottedLine() {
      this.activeLineStyleVar = "dotted";
    },
    dashedLine() {
      this.activeLineStyleVar = "dashed";
    },
    solidLine() {
      this.activeLineStyleVar = "solid";
    },
    wavyLine() {
      this.activeLineStyleVar = "wavy";
    },
  },
  mounted() {
    this.$refs.secLine.click();
    this.$refs.secLineStyle.click();
  },
};
</script>

<style>
.textDecoration_container {
  width: 85vw;
  position: absolute;
  top: 0;
  right: 0;
  background-color: whitesmoke;
}
.backgroundtextDecoration {
  height: 1100px;
}

.titletextDecoration {
  background-color: rgb(96, 10, 255);
  background-image: url("../assets/navbarDesign.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.titletextDecorationContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.textDecorationStyle input {
  margin-right: 20px;
}

.textDecorationStyle p {
  margin-bottom: 15px;
}

.titletextDecorationContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titletextDecoration h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.textDecorationHorizontalTool {
  width: 100%;
  margin-top: 10px;
}

.textDecorationVerticalTool {
  width: 100%;
  margin-top: 10px;
}
.textDecorationBlurTool {
  width: 100%;
  margin-top: 10px;
}
.textDecorationSpreadTool {
  width: 100%;
  margin-top: 10px;
}
.textDecorationColorTool {
  width: 40px;
  height: 40px;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #353945;
  color: white;
  cursor: pointer;
}

.copyContainertextDecoration {
  display: flex;
  justify-content: space-between;
}

.copyContainertextDecoration button {
  padding: 10px;
  border: 1px #1d263d solid;
  background-color: transparent;
  border-radius: 5px;
  color: #1d263d;
  font-weight: 400;
  cursor: pointer;
}

.copyContainertextDecoration button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementtextDecoration {
  width: 100%;
  margin: auto;
  color: #1d263d;
  font-size: 0.9vw;
  background-color: whitesmoke;
  padding: 15px;
  height: 150px;
}

.toolstextDecoration div {
  margin-top: 20px;
  background-color: whitesmoke;
  padding: 10px;
}

.toolstextDecoration p {
  font-size: 0.9vw;
  color: #1d263d;
}

.textDecorationTool {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
  align-items: flex-start;
  width: 80%;
}

.textDecorationText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionstextDecoration {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondtextDecoration {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.previewtextDecorationText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewtextDecoration {
  height: 200px;
}

.resultTextTextDecoration {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 10px;
}

.resultTextTextDecoration code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
}

.resulttextDecoration {
  margin-top: 40px;
}

.resulttextDecorationText {
  color: #1d263d;
}

.itemsDropDownLine {
  background-color: white;
  -webkit-animation: 0.5s opacityDrop ease-in-out;
  animation: 0.5s opacityDrop ease-in-out;
  color: #1d263d;
}

.itemsDropDownLine section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}
.itemsDropDownLine section:hover {
  background-color: rgb(228, 228, 228);
}
.activeLine {
  background-color: rgb(228, 228, 228);
}

.itemsDropDownLineStyle {
  background-color: white;
  -webkit-animation: 0.5s opacityDrop ease-in-out;
  animation: 0.5s opacityDrop ease-in-out;
  color: #1d263d;
}

.itemsDropDownLineStyle section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}
.itemsDropDownLineStyle section:hover {
  background-color: rgb(228, 228, 228);
}
.activeLineStyle {
  background-color: rgb(228, 228, 228);
}

.positionDropDownDDL {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.226);
  border-radius: 2px;
  color: #1d263d;
}
.positionDropDownDDLS {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.226);
  border-radius: 2px;
  color: #1d263d;
}
.hideTextDecorationText {
  visibility: hidden;
  position: absolute;
}
.bsInputContainerTD {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.hideTextDecorationText::after {
  content: "";
  position: absolute;
  top: -20px;
  left: 10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid rgba(14, 25, 36, 0.719);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.bsInputContainerTD:hover + .hideTextDecorationText {
  animation: effectC 1s infinite 0.5s;
  position: absolute;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  font-size: 0.7vw;
  outline: 1px rgba(14, 25, 36, 0.719) solid;
  color: rgb(85, 85, 85);
  margin-left: 0px;
  margin-top: 15px;
}
@keyframes effectC {
  0% {
    visibility: visible;
  }
}
@media (min-width: 3000px) and (max-width: 8040px) {
  .textDecoration_container {
    height: 2160px;
    width: 80vw;
  }
}
@media (min-width: 2048px) and (max-width: 3000px) {
  .textDecoration_container {
    height: 1200px;
    width: 80vw;
  }
}
@media (max-width: 1800px) {
  .textDecoration_container {
    width: 80vw;
  }
  .textDecorationTool {
    top: 35%;
  }
}
@media (max-width: 1500px) {
  .textDecorationTool {
    width: 90%;
    gap: 50px;
  }
  .textDecorationText {
    font-size: 2vw;
  }
  .previewtextDecorationText {
    font-size: 2vw;
  }
  .resulttextDecorationText {
    font-size: 2vw;
  }
  .resultTextTextDecoration code {
    font-size: 1vw;
  }
  .toolstextDecoration p {
    font-size: 1.2vw;
  }
  .elementtextDecoration {
    font-size: 1.2vw;
  }
}
@media (max-width: 1300px) {
  .portfolioLink {
    display: none;
  }
  .textDecorationTool {
    top: 45%;
  }
  .textDecorationTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 130px auto;
    height: auto;
    padding-bottom: 30px;
  }
  .hideTextDecorationText {
    display: none;
  }
  .textDecoration_container {
    width: 100%;
    height: 1500px;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titletextDecorationContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titletextDecorationContainer h1 {
    font-size: 1.6vw;
  }
  .titletextDecorationContainer div i {
    font-size: 1.6vw;
    padding: 10px;
  }

  .resulttextDecorationText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .textDecorationText {
    font-size: 2vw;
  }
  .previewtextDecorationText {
    font-size: 2vw;
  }
  .toolstextDecoration p {
    font-size: 1.6vw;
  }
  .optionstextDecoration {
    width: 90%;
  }
  .secondtextDecoration {
    width: 90%;
  }

  .resultTextTextDecoration code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 1.7vw;
    overflow-wrap: break-word;
  }
  .elementtextDecoration {
    font-size: 1.5vw;
  }
}
@media (max-width: 1080px) {
  .textDecorationTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 130px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .textDecoration_container {
    width: 100%;
    height: 1500px;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titletextDecorationContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titletextDecorationContainer h1 {
    font-size: 2.5vw;
  }
  .titletextDecorationContainer div i {
    font-size: 2.5vw;
    padding: 10px;
  }

  .resulttextDecorationText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .textDecorationText {
    font-size: 2.6vw;
  }
  .previewtextDecorationText {
    font-size: 2.6vw;
  }
  .toolstextDecoration p {
    font-size: 2vw;
  }
  .optionstextDecoration {
    width: 90%;
  }
  .secondtextDecoration {
    width: 90%;
  }

  .resultTextTextDecoration code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
  .elementtextDecoration {
    font-size: 1.9vw;
  }
}
@media (max-width: 780px) {
  .textDecorationTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 130px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .textDecoration_container {
    width: 100%;
    height: 1500px;

    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titletextDecorationContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titletextDecorationContainer h1 {
    font-size: 2.7vw;
  }
  .titletextDecorationContainer div i {
    font-size: 2.7vw;
    padding: 10px;
  }

  .resulttextDecorationText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .textDecorationText {
    font-size: 3.5vw;
  }
  .previewtextDecorationText {
    font-size: 3.5vw;
  }
  .toolstextDecoration p {
    font-size: 2.3vw;
  }
  .optionstextDecoration {
    width: 90%;
  }
  .secondtextDecoration {
    width: 90%;
  }

  .resultTextTextDecoration code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
  .elementtextDecoration {
    font-size: 2.4vw;
  }
}
@media (max-width: 600px) {
  .textDecorationTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 130px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .textDecoration_container {
    width: 100%;
    height: 1500px;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titletextDecorationContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titletextDecorationContainer h1 {
    font-size: 4vw;
  }
  .titletextDecorationContainer div i {
    font-size: 4.5vw;
    padding: 10px;
  }

  .resulttextDecorationText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .textDecorationText {
    font-size: 5vw;
  }
  .previewtextDecorationText {
    font-size: 5vw;
  }
  .toolstextDecoration p {
    font-size: 3.5vw;
  }
  .optionstextDecoration {
    width: 90%;
  }
  .secondtextDecoration {
    width: 90%;
  }
  .resultTextTextDecoration {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .resultTextTextDecoration code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
  .elementtextDecoration {
    font-size: 3.5vw;
    line-height: 1.5em;
  }
}
</style>
