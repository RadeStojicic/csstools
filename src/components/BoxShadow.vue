!<template>
  <div class="BoxShadow_container page">
    <div class="backgroundBoxShadow">
      <div class="titleBoxShadow">
        <div class="titleBoxShadowContainer">
          <div>
            <h1>Category/BoxShadow</h1>
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
      <div class="BoxShadowTool">
        <div class="optionsBoxShadow">
          <h1 class="BoxShadowText">Settings</h1>
          <div class="toolsBoxShadow">
            <div class="colorBoxShadowContainer">
              <p>Color</p>
              <section class="bsInputContainer">
                <input
                  class="boxshadowColorTool"
                  type="color"
                  v-model="colorBoxShadow"
                  name="color"
                  value="#000000"
                />
              </section>
            </div>
            <div>
              <p>Inset</p>
              <div class="radioBoxShadow">
                <p>Yes</p>
                <input
                  v-model="insetBS"
                  class="insetBS"
                  type="radio"
                  value="inset"
                />
                <p>No</p>
                <input
                  v-model="insetBS"
                  class="insetBS"
                  type="radio"
                  value=""
                />
              </div>
            </div>
            <div>
              <p>Horizontal offset</p>
              <input
                class="boxshadowHorizontalTool"
                type="range"
                min="-100"
                max="100"
                step="1"
                v-model="horizontalBS"
                value="1"
              />
            </div>
            <div>
              <p>Vertical offset</p>
              <input
                class="boxshadowVerticalTool"
                type="range"
                min="-100"
                max="100"
                step="1"
                v-model="verticalBS"
                value="5"
              />
            </div>
            <div>
              <p>Blur</p>
              <input
                class="boxshadowBlurTool"
                type="range"
                min="0"
                max="50"
                v-model="blurBS"
                value="10"
              />
            </div>
            <div>
              <p>Spread</p>
              <input
                class="boxshadowSpreadTool"
                type="range"
                min="0"
                max="50"
                step="1"
                v-model="spreadBS"
              />
            </div>
          </div>
        </div>
        <div class="secondBoxShadow">
          <div class="previewBoxShadowContainer">
            <h1 class="previewBoxShadowText">Preview</h1>

            <div
              :style="{
                'box-shadow':
                  horizontalBS +
                  'px ' +
                  verticalBS +
                  'px ' +
                  blurBS +
                  'px ' +
                  spreadBS +
                  'px ' +
                  colorBoxShadow +
                  ' ' +
                  insetBS,
              }"
              class="elementBoxShadow"
            ></div>
          </div>
          <div class="resultBoxShadow">
            <div class="copyContainerBoxShadow">
              <h1 class="resultBoxShadowText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardBS()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextBoxShadow">
              <code
                ><span style="color: #bef264;">box-shadow: </span>
                {{ horizontalBS }}px {{ verticalBS }}px {{ blurBS }}px
                {{ spreadBS }}px {{ colorBoxShadow }} {{ insetBS }};</code
              >
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
      horizontalBS: 5,
      verticalBS: 5,
      blurBS: 10,
      spreadBS: 1,
      colorBoxShadow: "#1d263d",
      insetBS: "",
    };
  },
  methods: {
    copyToClipBoardBS() {
      navigator.clipboard.writeText(
        "box-shadow: " +
          this.horizontalBS +
          "px " +
          this.verticalBS +
          "px " +
          this.blurBS +
          "px " +
          this.spreadBS +
          "px " +
          this.colorBoxShadow
      );
      alert("Copied to clipboard!");
    },
  },
};
</script>

<style>
.BoxShadow_container {
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #1d263d;
}

.titleBoxShadow {
  background-color: rgb(96, 10, 255);
}
.titleBoxShadowContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.BoxShadowStyle input {
  margin-right: 20px;
}

.BoxShadowStyle p {
  margin-bottom: 15px;
}

.titleBoxShadowContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleBoxShadow h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.boxshadowHorizontalTool {
  width: 100%;
  margin-top: 10px;
}

.boxshadowVerticalTool {
  width: 100%;
  margin-top: 10px;
}

.insetBS {
  margin-right: 20px;
}

.boxshadowBlurTool {
  width: 100%;
  margin-top: 10px;
}
.boxshadowSpreadTool {
  width: 100%;
  margin-top: 10px;
}
.boxshadowColorTool {
  width: 40px;
  height: 40px;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #353945;
  color: white;
}

.radioBoxShadow {
  display: flex;
  align-items: center;
}
.radioBoxShadow p {
  margin-right: 5px;
}

.bsInputContainer {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.copyContainerBoxShadow {
  display: flex;
  justify-content: space-between;
}

.copyContainerBoxShadow button {
  padding: 10px;
  border: 1px #ffffff solid;
  background-color: transparent;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  cursor: pointer;
}

.copyContainerBoxShadow button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementBoxShadow {
  padding: 50px;
  background-color: white;
  height: 200px;
  width: 50%;
  margin: auto;
}

.toolsBoxShadow div {
  margin-top: 20px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.toolsBoxShadow p {
  font-size: 0.9vw;
}

.BoxShadowTool {
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

.BoxShadowText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsBoxShadow {
  flex: 1;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondBoxShadow {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
}

.previewBoxShadowText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewBoxShadow {
  height: 200px;
}

.resultTextBoxShadow {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.resultTextBoxShadow code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
}

.resultBoxShadow {
  margin-top: 40px;
}

.resultBoxShadowText {
  color: white;
}
</style>
