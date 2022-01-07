!<template>
  <div class="BackgroundGradient_container page">
    <div class="backgroundBackgroundGradient">
      <div class="titleBackgroundGradient">
        <div class="titleBackgroundGradientContainer">
          <div>
            <h1>Category/BackgroundGradient</h1>
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
      </div>
      <div class="BackgroundGradientTool">
        <div class="optionsBackgroundGradient">
          <h1 class="BackgroundGradientText">Settings</h1>
          <div class="toolsBackgroundGradient">
            <div>
              <p>Color 1</p>
              <section class="GradientInputContainer1">
                <input
                  class="GradientColorTool1"
                  type="color"
                  v-model="color1"
                  name="color"
                  value="#000000"
                />
                <p style="margin-left: 10px;">{{ color1 }}</p>
              </section>
              <div class="hideGradientText1">
                Click and change the first color!
              </div>
            </div>
            <div>
              <p>Color 2</p>
              <section class="GradientInputContainer2">
                <input
                  class="GradientColorTool2"
                  type="color"
                  v-model="color2"
                  name="color"
                  value="#ffffff"
                />
                <p style="margin-left: 10px;">{{ color2 }}</p>
              </section>
              <div class="hideGradientText2">
                Click and change the second color!
              </div>
            </div>
            <div v-if="this.activeGradientTypeVar == 'linear'">
              <p>Angle</p>
              <section class="divAngleGD">
                <input
                  class="angleGradientTool"
                  type="range"
                  v-model="angle"
                  name="color"
                  min="0"
                  max="360"
                />
              </section>
              <section class="angleIcons">
                <i @click="angle = '90'" class="fas fa-arrow-right"></i>
                <i @click="angle = '270'" class="fas fa-arrow-left"></i>
                <i @click="angle = '180'" class="fas fa-arrow-down"></i>
                <i @click="angle = '360'" class="fas fa-arrow-up"></i>
              </section>
            </div>
            <div>
              <p>Type</p>
              <section
                @click="showDropDownGradientType"
                class="positionDropDown"
                ref="divClick"
              >
                <section class="">
                  {{ activeGradientTypeVar }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section style="display: none;" class="itemsDropDownGradientType">
                <section
                  @click="replaceClassGradientType(), linear()"
                  class="activeGradientType secGradientType"
                  ref="secGradientType"
                >
                  linear
                </section>
                <section
                  @click="replaceClassGradientType(), radial()"
                  class="notActiveGradientType secGradientType"
                >
                  radial
                </section>
              </section>
            </div>
          </div>
        </div>
        <div class="secondBackgroundGradient">
          <div class="previewBackgroundGradientContainer">
            <h1 class="previewBackgroundGradientText">Preview</h1>
            <div
              v-if="this.activeGradientTypeVar == 'linear'"
              :style="{
                background:
                  'linear-gradient(' +
                  angle +
                  'deg, ' +
                  color1 +
                  ' ' +
                  stop1 +
                  ', ' +
                  color2 +
                  ' ' +
                  stop2 +
                  ')',
              }"
              class="elementBackgroundGradient"
            ></div>
            <div
              v-else
              :style="{
                background:
                  'radial-gradient(' +
                  color1 +
                  ' ' +
                  stop1 +
                  ', ' +
                  color2 +
                  ' ' +
                  stop2 +
                  ')',
              }"
              class="elementBackgroundGradient"
            ></div>
          </div>
          <div class="resultBackgroundGradient">
            <div class="copyContainerBackgroundGradient">
              <h1 class="resultBackgroundGradientText">Result</h1>
              <button
                v-if="this.activeGradientTypeVar == 'linear'"
                class="ctcButton"
                @click="copyToClipBoardGT()"
              >
                Copy to clipboard
              </button>
              <button v-else class="ctcButton" @click="copyToClipBoardGT2()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextGradient">
              <code v-if="this.activeGradientTypeVar == 'linear'"
                ><span style="color: #bef264;">background: </span>
                <span style="color: #fffb7a;">linear-gradient</span>(<span
                  style="color: #bdd1ff;"
                  >{{ angle }}deg , {{ color1 }} {{ stop1 }}, {{ color2 }}
                  {{ stop2 }}</span
                >);
              </code>
              <code v-else
                ><span style="color: #bef264;">background: </span>
                <span style="color: #fffb7a;">radial-gradient</span>(<span
                  style="color: #bdd1ff;"
                  >{{ color1 }} {{ stop1 }}, {{ color2 }} {{ stop2 }}</span
                >);
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
      angle: "90",
      color1: "#000000",
      stop1: "0%",
      color2: "#ffffff",
      stop2: "100%",
      activeGradientTypeVar: "linear",
    };
  },
  methods: {
    copyToClipBoardGT() {
      navigator.clipboard.writeText(
        "background: " +
          "linear-gradient(" +
          this.angle +
          "deg, " +
          this.color1 +
          " " +
          this.stop1 +
          ", " +
          this.color2 +
          " " +
          this.stop2 +
          ");"
      );
      alert("Copied to clipboard!");
    },
    copyToClipBoardGT2() {
      navigator.clipboard.writeText(
        "background: " +
          "linear-gradient(" +
          this.color1 +
          " " +
          this.stop1 +
          ", " +
          this.color2 +
          " " +
          this.stop2 +
          ");"
      );
      alert("Copied to clipboard!");
    },

    showDropDownGradientType() {
      let itemsDropDownGradientType = document.querySelector(
        ".itemsDropDownGradientType"
      );
      if (itemsDropDownGradientType.style.display == "none") {
        itemsDropDownGradientType.style.display = "block";
      } else {
        itemsDropDownGradientType.style.display = "none";
      }
    },
    replaceClassGradientType() {
      let gradientTypeSections = document.querySelectorAll(".secGradientType");

      for (let i = 0; i < gradientTypeSections.length; i++) {
        gradientTypeSections[i].addEventListener("click", function() {
          let currentPosition = document.getElementsByClassName(
            "activeGradientType"
          );
          currentPosition[0].className = currentPosition[0].className.replace(
            "activeGradientType",
            ""
          );
          this.className += " activeGradientType";
        });

        document.querySelector(".itemsDropDownGradientType").style.display =
          "none";
      }
    },
    linear() {
      this.activeGradientTypeVar = "linear";
    },
    radial() {
      this.activeGradientTypeVar = "radial";
    },
  },
  mounted() {
    this.$refs.secGradientType.click();
  },
};
</script>

<style>
.BackgroundGradient_container {
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: whitesmoke;
}
.backgroundBackgroundGradient {
  height: 1000px;
}

.titleBackgroundGradient {
  background-color: rgb(96, 10, 255);
}
.titleBackgroundGradientContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.BackgroundGradientStyle input {
  margin-right: 20px;
}

.BackgroundGradientStyle p {
  margin-bottom: 15px;
}

.titleBackgroundGradientContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleBackgroundGradient h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.BackgroundGradientHorizontalTool {
  width: 100%;
  margin-top: 10px;
}

.BackgroundGradientVerticalTool {
  width: 100%;
  margin-top: 10px;
}

.insetBS {
  margin-right: 20px;
}

.GradientInputContainer1 {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.GradientInputContainer2 {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.copyContainerBackgroundGradient {
  display: flex;
  justify-content: space-between;
}

.copyContainerBackgroundGradient button {
  padding: 10px;
  border: 1px #1d263d solid;
  background-color: transparent;
  border-radius: 5px;
  color: #1d263d;
  font-weight: 400;
  cursor: pointer;
}

.copyContainerBackgroundGradient button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementBackgroundGradient {
  padding: 50px;
  border: none;
  height: 200px;
  width: 100%;
  margin: auto;
}

.toolsBackgroundGradient div {
  margin-top: 20px;
  background-color: whitesmoke;
  padding: 10px;
}

.toolsBackgroundGradient p {
  font-size: 0.9vw;
}

.BackgroundGradientTool {
  position: absolute;
  top: 45%;
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

.BackgroundGradientText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsBackgroundGradient {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: #1d263d;
  box-shadow: -1px 2px 5px 3px #7070700e;
}
.secondBackgroundGradient {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  box-shadow: -1px 2px 5px 3px #7070700e;
}

.previewBackgroundGradientText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewBackgroundGradient {
  height: 200px;
  background-color: rgb(255, 255, 255);
  width: 100%;
}

.resultTextGradient {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: #1d263d;
  padding: 10px;
  background-color: whitesmoke;
}

.resultTextGradient code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
  overflow-wrap: break-word;
}

.resultBackgroundGradient {
  margin-top: 40px;
}

.resultBackgroundGradientText {
  color: #1d263d;
}

.positionDropDown {
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
}
.positionDropDown i {
  color: #1d263d;
}

.itemsDropDownPosition {
  animation: 0.5s opacityDrop ease-in-out;
}
@keyframes opacityDrop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.itemsDropDownPosition section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}

.repeatDropDown {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.repeatDropDown i {
  color: #c9cdd8;
}

.sizeDropDown {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.sizeDropDown i {
  color: #c9cdd8;
}

.itemsDropDownSize {
  background-color: rgba(226, 226, 226, 0.158);
  animation: 0.5s opacityDrop ease-in-out;
}

.itemsDropDownSize section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}

.GradientColorTool1 {
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
.GradientColorTool2 {
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
.angleIcons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.angleIcons i {
  padding: 12px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}
.angleIcons i:hover {
  background-color: rgba(238, 238, 238, 0.781);
}

.angleGradientTool {
  width: 100%;
}
.divAngleGD {
  background-color: white;
  padding: 20px;
  margin-top: 30px;
}

.itemsDropDownGradientType {
  background-color: rgb(255, 255, 255);
  -webkit-animation: 0.5s opacityDrop ease-in-out;
  animation: 0.5s opacityDrop ease-in-out;
}

.itemsDropDownGradientType section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}
.itemsDropDownGradientType section:hover {
  background-color: rgb(228, 228, 228);
}
.activeGradientType {
  background-color: rgb(228, 228, 228);
}

.hideGradientText1 {
  visibility: hidden;
  position: absolute;
}

.hideGradientText1::after {
  content: "";
  position: absolute;
  top: -20px;
  left: 10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid rgba(14, 25, 36, 0.719);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.GradientInputContainer1:hover + .hideGradientText1 {
  animation: effectB 1s infinite 0.5s;
  position: absolute;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  font-size: 0.7vw;
  outline: 1px rgba(14, 25, 36, 0.719) solid;
  color: rgb(85, 85, 85);
  margin-left: 0px;
  margin-top: 15px;
}
@keyframes effectB {
  0% {
    visibility: visible;
  }
}

.hideGradientText2 {
  visibility: hidden;
  position: absolute;
}

.hideGradientText2::after {
  content: "";
  position: absolute;
  top: -20px;
  left: 10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid rgba(14, 25, 36, 0.719);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.GradientInputContainer2:hover + .hideGradientText2 {
  animation: effectH 1s infinite 0.5s;
  position: absolute;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  font-size: 0.7vw;
  outline: 1px rgba(14, 25, 36, 0.719) solid;
  color: rgb(85, 85, 85);
  margin-left: 0px;
  margin-top: 15px;
}
@keyframes effectH {
  0% {
    visibility: visible;
  }
}

@media (max-width: 1800px) {
  .BackgroundGradient_container {
    width: 80vw;
  }
}
@media (max-width: 1300px) {
  .BackgroundGradientTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 220px auto;
    height: auto;
    padding-bottom: 30px;
  }
  .hideGradientText2 {
    display: none;
  }
  .hideGradientText1 {
    display: none;
  }
  .BackgroundGradient_container {
    width: 100%;
    height: 1500px;
    margin: 80px auto;
    z-index: -1;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleBackgroundGradientContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBackgroundGradientContainer h1 {
    font-size: 1.6vw;
  }
  .titleBackgroundGradient div i {
    font-size: 1.6vw;

    padding: 10px;
  }

  .resultBackgroundGradientText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .BackgroundGradientText {
    font-size: 2vw;
  }
  .previewBackgroundGradientText {
    font-size: 2vw;
  }
  .toolsBackgroundGradient p {
    font-size: 1.6vw;
  }
  .optionsBackgroundGradient {
    width: 90%;
  }
  .secondBackgroundGradient {
    width: 90%;
  }

  .resultTextGradient code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 1.7vw;
    overflow-wrap: break-word;
  }
}
@media (max-width: 1080px) {
  .BackgroundGradientTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;

    position: relative;
    margin: 220px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .BackgroundGradient_container {
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

  .titleBackgroundGradientContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBackgroundGradientContainer h1 {
    font-size: 2.5vw;
  }
  .titleBackgroundGradient div i {
    font-size: 2.5vw;

    padding: 10px;
  }

  .resultBackgroundGradientText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .BackgroundGradientText {
    font-size: 2.6vw;
  }
  .previewBackgroundGradientText {
    font-size: 2.6vw;
  }
  .toolsBackgroundGradient p {
    font-size: 2vw;
  }
  .optionsBackgroundGradient {
    width: 90%;
  }
  .secondBackgroundGradient {
    width: 90%;
  }

  .resultTextGradient code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
}
@media (max-width: 780px) {
  .BackgroundGradientTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;

    position: relative;
    margin: 200px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .BackgroundGradient_container {
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

  .titleBackgroundGradientContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBackgroundGradientContainer h1 {
    font-size: 2.7vw;
  }
  .titleBackgroundGradient div i {
    font-size: 2.7vw;

    padding: 10px;
  }

  .resultBackgroundGradientText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .BackgroundGradientText {
    font-size: 3.5vw;
  }
  .previewBackgroundGradientText {
    font-size: 3.5vw;
  }
  .toolsBackgroundGradient p {
    font-size: 2.3vw;
  }
  .optionsBackgroundGradient {
    width: 90%;
  }
  .secondBackgroundGradient {
    width: 90%;
  }

  .resultTextGradient code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
}
@media (max-width: 600px) {
  .BackgroundGradientTool {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;

    height: auto;
    padding-bottom: 30px;
    margin: 230px auto;
  }
  .BackgroundGradient_container {
    width: 100%;
    height: 1500px;
  }

  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleBackgroundGradientContainer {
    width: 98%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBackgroundGradientContainer h1 {
    font-size: 3.8vw;
  }
  .titleBackgroundGradient div i {
    font-size: 4.5vw;

    padding: 10px;
  }

  .resultBackgroundGradientText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .BackgroundGradientText {
    font-size: 5vw;
  }
  .previewBackgroundGradientText {
    font-size: 5vw;
  }
  .toolsBackgroundGradient p {
    font-size: 3vw;
  }
  .optionsBackgroundGradient {
    width: 90%;
  }
  .secondBackgroundGradient {
    width: 90%;
  }
  .resultTextGradient {
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    padding: 10px;
  }

  .resultTextGradient code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
}
</style>
