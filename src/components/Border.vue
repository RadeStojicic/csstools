!<template>
  <div class="border_container page">
    <div class="backgroundBorderC">
      <div class="titleBorder">
        <div class="titleBorderContainer">
          <div>
            <h1>Category/Border</h1>
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
      <div class="borderTool">
        <div class="optionsBorder">
          <h1 class="borderText">Settings</h1>
          <div class="tools">
            <div class="borderRadius">
              <p>Border radius:</p>
              <input
                v-model="value"
                class="slider"
                type="range"
                min="0"
                max="50"
                step="1"
              />
            </div>
            <div class="borderWidth">
              <p>Border width:</p>
              <input
                v-model="borderWidth"
                class="sliderWidth"
                type="range"
                min="1"
                max="30"
                step="1"
                :style="{ backgroundColor: borderColor }"
              />
            </div>
            <div class="borderStyle">
              <p>Border style:</p>
              Solid
              <input
                v-model="borderStyle"
                class="borderStyle"
                type="radio"
                value="solid"
              />
              Dashed
              <input
                v-model="borderStyle"
                class="borderStyle"
                type="radio"
                value="dashed"
              />
              Double
              <input
                v-model="borderStyle"
                class="borderStyle"
                type="radio"
                value="double"
              />
              Dotted
              <input
                v-model="borderStyle"
                class="borderStyle"
                type="radio"
                value="dotted"
              />
            </div>
            <div class="borderColor">
              <p>Border color:</p>
              <input
                class="inputBorderColor"
                type="color"
                placeholder="#111111"
                v-model="borderColor"
              />
            </div>
          </div>
        </div>
        <div class="secondBorder">
          <div class="previewBorderContainer">
            <h1 class="previewBorderText">Preview</h1>

            <div
              :style="{
                borderRadius: value + 'px',
                borderColor: borderColor,
                borderWidth: borderWidth + 'px',
                borderStyle: borderStyle,
              }"
              class="element"
            ></div>
          </div>
          <div class="resultBorder">
            <div class="copyContainerBorder">
              <h1 class="resultBorderText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoard()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextBorder">
              <code
                ><span style="color: #bef264;">border-radius:</span>
                {{ value }}%;
              </code>
              <code>
                <span style="color: #bef264;">border-width:</span>
                {{ borderWidth }}px;
              </code>
              <code>
                <span style="color: #bef264;">border-style:</span>
                {{ borderStyle }};</code
              >
              <code>
                <span style="color: #bef264;">border-color:</span>
                {{ borderColor }};</code
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
      value: 0,
      borderWidth: 1,
      borderColor: "#ffffff",
      borderStyle: "solid",
      copied: "copied",
    };
  },
  methods: {
    copyToClipBoard() {
      navigator.clipboard.writeText(
        "border-radius: " +
          this.value +
          "%; " +
          "border-width: " +
          this.borderWidth +
          "px; " +
          "border-style: " +
          this.borderStyle +
          "; " +
          "border-color:" +
          this.borderColor +
          "; "
      );
      alert("Copied to clipboard!");
    },
  },
};
</script>

<style>
.border_container {
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #1d263d;
}

.titleBorder {
  background-color: rgb(96, 10, 255);
}

.titleBorderContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.borderStyle input {
  margin-right: 20px;
}

.borderStyle p {
  margin-bottom: 15px;
}

.titleBorderContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleBorder h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.sliderWidth {
  width: 100%;
}
.inputBorderColor {
  width: 100%;
  height: 20px;
  background: #f12711;
  background: -webkit-linear-gradient(to right, #f12711, #f5af19);
  background: linear-gradient(to right, #f12711, #f5af19);
  -webkit-appearance: none;
  padding: 21px;
  background-color: #353945;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}

.inputBorderColor::-webkit-color-swatch-wrapper {
  padding: 0;
}
.inputBorderColor::-webkit-color-swatch {
  border: none;
  border-radius: 50%;
}

.borderTool input {
  margin-top: 10px;
}

.copyContainerBorder {
  display: flex;
  justify-content: space-between;
}

.copyContainerBorder button {
  padding: 10px;
  border: 1px #ffffff solid;
  background-color: transparent;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  cursor: pointer;
}

.copyContainerBorder button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.element {
  padding: 50px;
  border-style: solid;
  height: 200px;
}

.tools div {
  margin-top: 20px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.tools p {
  font-size: 0.9vw;
}

.slider {
  width: 100%;
}

.borderTool {
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

.borderText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsBorder {
  flex: 1;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondBorder {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
}

.previewBorderText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewBorder {
  height: 200px;
}

.resultTextBorder {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.resultTextBorder code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
}

.resultBorder {
  margin-top: 40px;
}

.resultBorderText {
  color: white;
}
</style>
