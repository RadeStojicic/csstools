!<template>
  <div class="BackgroundGradient_container page">
    <div class="backgroundBackgroundGradient">
      <div class="titleBackgroundGradient">
        <div class="titleBackgroundGradientContainer">
          <div>
            <h1>Category/BackgroundGradient</h1>
          </div>
          <div>
            <a href="https://github.com/RadeStojicic" target="_blank">
              <i class="fab fa-github"></i
            ></a>
            <a href="https://www.facebook.com/rade.stojicic" target="_blank"
              ><i class="fab fa-facebook-square"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/rade-stojicic-098883222/"
              target="_blank"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a href="https://www.instagram.com/radee_st/" target="_blank"
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
              <section class="GradientInputContainer">
                <input
                  class="GradientColorTool"
                  type="color"
                  v-model="color1"
                  name="color"
                  value="#000000"
                />
              </section>
            </div>
            <div>
              <p>Color 2</p>
              <section class="GradientInputContainer">
                <input
                  class="GradientColorTool"
                  type="color"
                  v-model="color2"
                  name="color"
                  value="#ffffff"
                />
              </section>
            </div>
            <div v-if="this.activeGradientTypeVar == 'linear'">
              <p>Angle</p>
              <div>
                <input
                  class="angleGradientTool"
                  type="range"
                  v-model="angle"
                  name="color"
                  min="0"
                  max="360"
                />
              </div>
              <section class="angleIcons">
                <i @click="angle = '90'" class="fas fa-arrow-right"></i>
                <i @click="angle = '270'" class="fas fa-arrow-left"></i>
                <i @click="angle = '180'" class="fas fa-arrow-down"></i>
                <i @click="angle = '360'" class="fas fa-arrow-up"></i>
              </section>
            </div>
            <div>
              <p>Type</p>
              <div
                @click="showDropDownGradientType"
                class="positionDropDown"
                ref="divClick"
              >
                <section class="">
                  {{ activeGradientTypeVar }}
                </section>
                <i class="fas fa-caret-down"></i>
              </div>
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

            <div class="resultText">
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
  height: 100vh;
  background-color: #1d263d;
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

.imageUrl {
  padding: 10px;
  border: none;
  outline: none;
  background-color: white;
  font-size: 0.9vw;
  width: 100%;
}

.GradientInputContainer {
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
  border: 1px #ffffff solid;
  background-color: transparent;
  border-radius: 5px;
  color: white;
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
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.toolsBackgroundGradient p {
  font-size: 0.9vw;
}

.BackgroundGradientTool {
  position: absolute;
  top: 50%;
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
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsBackgroundGradient {
  flex: 1;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondBackgroundGradient {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
  max-width: 50%;
}

.previewBackgroundGradientText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewBackgroundGradient {
  height: 200px;
  background-color: rgb(255, 255, 255);
  width: 100%;
}

.resultText {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.resultText code {
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
  color: white;
}

.positionDropDown {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.positionDropDown i {
  color: #c9cdd8;
}

.itemsDropDownPosition {
  background-color: rgba(226, 226, 226, 0.158);
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

.activePosition {
  background-color: rgba(226, 226, 226, 0.24);
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

.activeRepeat {
  background-color: rgba(226, 226, 226, 0.24);
}

.itemsDropDownRepeat {
  background-color: rgba(226, 226, 226, 0.158);
  animation: 0.5s opacityDrop ease-in-out;
}
.itemsDropDownRepeat section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
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

.activeSize {
  background-color: rgba(226, 226, 226, 0.24);
  border: 1px rgba(0, 119, 255, 0.356) solid;
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

.GradientInputContainer {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.GradientColorTool {
  width: 40px;
  height: 40px;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #353945;
  color: white;
}
.angleIcons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.angleIcons i {
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.185);
  cursor: pointer;
}
.angleIcons i:hover {
  background-color: rgba(255, 255, 255, 0.226);
}

.angleGradientTool {
  width: 100%;
  margin-top: 20px;
}

.itemsDropDownGradientType {
  background-color: rgba(226, 226, 226, 0.158);
  -webkit-animation: 0.5s opacityDrop ease-in-out;
  animation: 0.5s opacityDrop ease-in-out;
}

.itemsDropDownGradientType section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}

.activeGradientType {
  background-color: rgba(226, 226, 226, 0.24);
}
</style>
