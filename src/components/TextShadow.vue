!<template>
  <div class="textShadow_container page">
    <div class="backgroundtextShadow">
      <div class="titletextShadow">
        <div class="titletextShadowContainer">
          <div>
            <h1>Category/TextShadow</h1>
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
      <div class="textShadowTool">
        <div class="optionstextShadow">
          <h1 class="textShadowText">Settings</h1>
          <div class="toolstextShadow">
            <div class="colortextShadowContainer">
              <p>Color</p>
              <section class="bsInputContainerTS">
                <input
                  class="textShadowColorTool"
                  type="color"
                  v-model="colortextShadow"
                  name="color"
                  value="#000000"
                />
                <p style="margin-left: 10px;">{{ colortextShadow }}</p>
              </section>
              <div class="hideTextShadowText">
                Click and change the color of the text shadow!
              </div>
            </div>
            <div>
              <p>Horizontal Offset</p>
              <input
                class="textShadowHorizontalTool"
                type="range"
                min="-20"
                max="20"
                step="1"
                v-model="horizontalTextShadow"
              />
            </div>
            <div>
              <p>Vertical Offset</p>
              <input
                class="textShadowVerticalTool"
                type="range"
                min="-20"
                max="20"
                step="1"
                v-model="verticalTextShadow"
              />
            </div>
            <div>
              <p>Blur</p>
              <input
                class="blurTextShadow"
                type="range"
                min="0"
                max="20"
                step="1"
                v-model="blurTextShadow"
              />
            </div>
          </div>
        </div>
        <div class="secondtextShadow">
          <div class="previewtextShadowContainer">
            <h1 class="previewtextShadowText">Preview</h1>

            <p
              :style="{
                textShadow:
                  horizontalTextShadow +
                  'px ' +
                  verticalTextShadow +
                  'px ' +
                  blurTextShadow +
                  'px ' +
                  colortextShadow,
              }"
              class="elementtextShadow"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              cumque, assumenda amet voluptatibus id natus repudiandae!
            </p>
          </div>
          <div class="resulttextShadow">
            <div class="copyContainertextShadow">
              <h1 class="resulttextShadowText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardBS()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextTextShadow">
              <code
                ><span style="color: #bef264;">text-shadow: </span
                >{{ horizontalTextShadow }}px {{ verticalTextShadow }}px
                {{ blurTextShadow }}px {{ colortextShadow }};
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
      colortextShadow: "#949494",
      horizontalTextShadow: 5,
      verticalTextShadow: 5,
      blurTextShadow: 5,
    };
  },
  methods: {
    copyToClipBoardBS() {
      navigator.clipboard.writeText(
        "text-shadow: " +
          this.horizontalTextShadow +
          "px " +
          this.verticalTextShadow +
          "px " +
          this.blurTextShadow +
          "px " +
          this.colortextShadow +
          ";"
      );
      alert("Copied to clipboard!");
    },
  },
  mounted() {},
};
</script>

<style>
.textShadow_container {
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: whitesmoke;
}
.backgroundtextShadow {
  height: 1000px;
}
.titletextShadow {
  background-color: rgb(96, 10, 255);
}
.titletextShadowContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.textShadowStyle input {
  margin-right: 20px;
}

.textShadowStyle p {
  margin-bottom: 15px;
}

.titletextShadowContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titletextShadow h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.textShadowHorizontalTool {
  width: 100%;
  margin-top: 10px;
}

.textShadowVerticalTool {
  width: 100%;
  margin-top: 10px;
}
.blurTextShadow {
  width: 100%;
  margin-top: 10px;
}

.textShadowColorTool {
  width: 40px;
  height: 40px;
  padding: 5px;
  border: none;
  font-size: 18px;
  background-color: #353945;
  color: white;
  cursor: pointer;
}

.copyContainertextShadow {
  display: flex;
  justify-content: space-between;
}

.copyContainertextShadow button {
  padding: 10px;
  border: 1px #1d263d solid;
  background-color: transparent;
  border-radius: 5px;
  color: #1d263d;
  font-weight: 400;
  cursor: pointer;
}

.copyContainertextShadow button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementtextShadow {
  width: 100%;
  margin: auto;
  color: #1d263d;
  font-size: 0.9vw;
  background-color: whitesmoke;
  padding: 15px;
  height: 150px;
}

.toolstextShadow div {
  margin-top: 20px;
  background-color: whitesmoke;
  padding: 10px;
}

.toolstextShadow p {
  font-size: 0.9vw;
  color: #1d263d;
}

.textShadowTool {
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

.textShadowText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionstextShadow {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondtextShadow {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.previewtextShadowText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewtextShadow {
  height: 200px;
}

.resultTextTextShadow {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 10px;
}

.resultTextTextShadow code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
}

.resulttextShadow {
  margin-top: 40px;
}

.resulttextShadowText {
  color: #1d263d;
}

.itemsDropDownShadow {
  background-color: rgba(226, 226, 226, 0.158);
  -webkit-animation: 0.5s opacityDrop ease-in-out;
  animation: 0.5s opacityDrop ease-in-out;
}

.itemsDropDownShadow section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}
.itemsDropDownShadowStyle {
  background-color: rgba(226, 226, 226, 0.158);
  -webkit-animation: 0.5s opacityDrop ease-in-out;
  animation: 0.5s opacityDrop ease-in-out;
}

.itemsDropDownShadowStyle section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}
.bsInputContainerTS {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.hideTextShadowText {
  visibility: hidden;
  position: absolute;
}

.hideTextShadowText::after {
  content: "";
  position: absolute;
  top: -20px;
  left: 10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid rgba(14, 25, 36, 0.719);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.bsInputContainerTS:hover + .hideTextShadowText {
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
@media (max-width: 1800px) {
  .textShadow_container {
    width: 80vw;
  }
}
@media (max-width: 1300px) {
  .textShadowTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 150px auto;
    height: auto;
    padding-bottom: 30px;
  }
  .hideTextShadowText {
    display: none;
  }
  .textShadow_container {
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

  .titletextShadowContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titletextShadowContainer h1 {
    font-size: 1.6vw;
  }
  .titletextShadow div i {
    font-size: 1.6vw;
    padding: 10px;
  }

  .resulttextShadowText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .textShadowText {
    font-size: 2vw;
  }
  .previewtextShadowText {
    font-size: 2vw;
  }
  .toolstextShadow p {
    font-size: 1.6vw;
  }
  .optionstextShadow {
    width: 90%;
  }
  .secondtextShadow {
    width: 90%;
  }

  .resulttextShadow code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 1.5vw;
    overflow-wrap: break-word;
  }
  .elementtextShadow {
    font-size: 1.5vw;
  }
}
@media (max-width: 1080px) {
  .textShadowTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 140px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .textShadow_container {
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

  .titletextShadowContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titletextShadowContainer h1 {
    font-size: 2.5vw;
  }
  .titletextShadow div i {
    font-size: 2.5vw;
    padding: 10px;
  }

  .resulttextShadowText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .textShadowText {
    font-size: 2.6vw;
  }
  .previewtextShadowText {
    font-size: 2.6vw;
  }
  .toolstextShadow p {
    font-size: 2vw;
  }
  .optionstextShadow {
    width: 90%;
  }
  .secondtextShadow {
    width: 90%;
  }

  .resulttextShadow code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
  .elementtextShadow {
    font-size: 2vw;
  }
}
@media (max-width: 780px) {
  .textShadowTool {
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

  .textShadow_container {
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

  .titletextShadowContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titletextShadowContainer h1 {
    font-size: 2.7vw;
  }
  .titletextShadow div i {
    font-size: 2.7vw;
    padding: 10px;
  }

  .resulttextShadowText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .textShadowText {
    font-size: 3.5vw;
  }
  .previewtextShadowText {
    font-size: 3.5vw;
  }
  .toolstextShadow p {
    font-size: 2.3vw;
  }
  .optionstextShadow {
    width: 90%;
  }
  .secondtextShadow {
    width: 90%;
  }

  .resulttextShadow code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
  .elementtextShadow {
    font-size: 2.5vw;
  }
}
@media (max-width: 600px) {
  .textShadowTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 120px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .textShadow_container {
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

  .titletextShadowContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titletextShadowContainer h1 {
    font-size: 4vw;
  }
  .titletextShadow div i {
    font-size: 4.5vw;
    padding: 10px;
  }

  .resulttextShadowText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .textShadowText {
    font-size: 5vw;
  }
  .previewtextShadowText {
    font-size: 5vw;
  }
  .toolstextShadow p {
    font-size: 3vw;
  }
  .optionstextShadow {
    width: 90%;
  }
  .secondtextShadow {
    width: 90%;
  }

  .resulttextShadow code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
  .elementtextShadow {
    font-size: 3.3vw;
  }
}
</style>
