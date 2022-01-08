!<template>
  <div class="border_container page">
    <div class="backgroundBorderC">
      <div class="titleBorder">
        <div class="titleBorderContainer">
          <div>
            <h1>Category/Border</h1>
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
              <div class="hideBorderText">
                Click and change the color of the border!
              </div>
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
      borderColor: "#000000",
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
  width: 85vw;
  position: absolute;
  top: 0;
  right: 0;

  background-color: whitesmoke;
}
.backgroundBorderC {
  height: 1100px;
}
.titleBorder {
  background-color: rgb(96, 10, 255);
  background-image: url("../assets/navbarDesign.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  color: #1d263d;
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
  border: 1px #1d263d solid;
  background-color: transparent;
  border-radius: 5px;
  color: #1d263d;
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
  background-color: whitesmoke;
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
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsBorder {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: #1d263d;
}
.secondBorder {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.previewBorderText {
  color: #1d263d;
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
  background-color: whitesmoke;
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
  color: #1d263d;
}

.hideBorderText {
  visibility: hidden;
  position: absolute;
}

.hideBorderText::after {
  content: "";
  position: absolute;
  top: -20px;
  left: 10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid rgba(14, 25, 36, 0.719);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.inputBorderColor:hover + .hideBorderText {
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
@media (min-width: 3000px) and (max-width: 8040px) {
  .border_container {
    height: 2160px;
    width: 80vw;
  }
}
@media (min-width: 2048px) and (max-width: 3000px) {
  .border_container {
    height: 1200px;
    width: 80vw;
  }
}
@media (max-width: 1800px) {
  .border_container {
    width: 80vw;
  }
}
@media (max-width: 1300px) {
  .borderTool {
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
  .hideBorderText {
    display: none;
  }
  .border_container {
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

  .titleBorderContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBorderContainer h1 {
    font-size: 1.6vw;
  }
  .titleBorder div i {
    font-size: 1.6vw;

    padding: 10px;
  }

  .resultBorderText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .borderText {
    font-size: 2vw;
  }
  .previewBorderText {
    font-size: 2vw;
  }
  .toolsBorder p {
    font-size: 1.6vw;
  }
  .optionsBorder {
    width: 90%;
  }
  .secondBorder {
    width: 90%;
  }

  .resultTextBorder code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 1.5vw;
    overflow-wrap: break-word;
  }
  .elementBorder {
    font-size: 1.5vw;
  }
  .tools p {
    font-size: 1.5vw;
  }
}
@media (max-width: 1080px) {
  .borderTool {
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

  .border_container {
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

  .titleBorderContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBorderContainer h1 {
    font-size: 2.5vw;
  }
  .titleBorder div i {
    font-size: 2.5vw;

    padding: 10px;
  }

  .resultBorderText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .borderText {
    font-size: 2.6vw;
  }
  .previewBorderText {
    font-size: 2.6vw;
  }
  .toolsBorder p {
    font-size: 2vw;
  }
  .optionsBorder {
    width: 90%;
  }
  .secondBorder {
    width: 90%;
  }

  .resultTextBorder code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
  .elementborder {
    font-size: 1.5vw;
  }
  .tools p {
    font-size: 2vw;
  }
}
@media (max-width: 780px) {
  .borderTool {
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

  .border_container {
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

  .titleBorderContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBorderContainer h1 {
    font-size: 2.7vw;
  }
  .titleBorder div i {
    font-size: 2.7vw;

    padding: 10px;
  }

  .resultBorderText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .borderText {
    font-size: 3.5vw;
  }
  .previewBorderText {
    font-size: 3.5vw;
  }
  .toolsBorder p {
    font-size: 2.3vw;
  }
  .optionsBorder {
    width: 90%;
  }
  .secondBorder {
    width: 90%;
  }

  .resultTextBorder code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
  .elementborder {
    font-size: 2vw;
  }
  .tools p {
    font-size: 2.5vw;
  }
}
@media (max-width: 600px) {
  .borderTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 230px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .border_container {
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

  .titleBorderContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBorderContainer h1 {
    font-size: 4vw;
  }
  .titleBorder div i {
    font-size: 4.5vw;

    padding: 10px;
  }

  .resultBorderText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .borderText {
    font-size: 5vw;
  }
  .previewBorderText {
    font-size: 5vw;
  }
  .toolsBorder p {
    font-size: 3vw;
  }
  .optionsBorder {
    width: 90%;
  }
  .secondBorder {
    width: 90%;
  }

  .resultTextBorder code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
  .elementborder {
    font-size: 3vw;
  }
  .tools p {
    font-size: 3.3vw;
  }
}
</style>
