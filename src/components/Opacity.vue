!<template>
  <div class="Opacity_container page">
    <div class="backgroundOpacity">
      <div class="titleOpacity">
        <div class="titleOpacityContainer">
          <div>
            <h1>Category/Opacity</h1>
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
      <div class="OpacityTool">
        <div class="optionsOpacity">
          <h1 class="OpacityText">Settings</h1>
          <div class="toolsOpacity">
            <div>
              <p>Amount</p>
              <input
                class="rotateTool"
                type="range"
                min="0"
                max="1"
                step="0.01"
                v-model="opacityAmount"
                value="1"
              />
            </div>
          </div>
        </div>
        <div class="secondOpacity">
          <div class="previewOpacityContainer">
            <h1 class="previewOpacityText">Preview</h1>

            <div
              :style="{
                opacity: opacityAmount,
              }"
              class="elementOpacity"
            ></div>
          </div>
          <div class="resultOpacity">
            <div class="copyContainerOpacity">
              <h1 class="resultOpacityText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardBS()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextOpacity">
              <code
                ><span style="color: #bef264;">opacity:</span>
                {{ opacityAmount }};
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
      opacityAmount: 1,
    };
  },
  methods: {
    copyToClipBoardBS() {
      navigator.clipboard.writeText("opacity: " + this.opacityAmount + ";");
      alert("Copied to clipboard!");
    },
  },
};
</script>

<style>
.Opacity_container {
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #1d263d;
}
.backgroundOpacity {
  height: 100ch;
}

.titleOpacity {
  background-color: rgb(96, 10, 255);
}
.titleOpacityContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.OpacityStyle input {
  margin-right: 20px;
}

.OpacityStyle p {
  margin-bottom: 15px;
}

.titleOpacityContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleOpacity h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.rotateTool {
  width: 100%;
  margin-top: 10px;
}

.copyContainerOpacity {
  display: flex;
  justify-content: space-between;
}

.copyContainerOpacity button {
  padding: 10px;
  border: 1px #ffffff solid;
  background-color: transparent;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  cursor: pointer;
}

.copyContainerOpacity button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementOpacity {
  background-color: white;
  height: 200px;
  width: 50%;
  margin: auto;
}

.toolsOpacity div {
  margin-top: 20px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.toolsOpacity p {
  font-size: 0.9vw;
}

.OpacityTool {
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

.OpacityText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsOpacity {
  flex: 1;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondOpacity {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
}

.previewOpacityText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewOpacity {
  height: 200px;
}

.resultTextOpacity {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.resultTextOpacity code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
}

.resultOpacity {
  margin-top: 40px;
}

.resultOpacityText {
  color: white;
}

@media (max-width: 1300px) {
  .OpacityTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    background-color: #1d263d;
    position: relative;
    margin: 20px auto;
    height: auto;
    padding-bottom: 30px;
  }
  .imageUrl {
    font-size: 1.5vw;
  }

  .Opacity_container {
    width: 100%;
    height: 100%;
    background-color: #1d263d;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }
  .titleColor {
    background-color: rgb(96, 10, 255);
  }

  .titleOpacityContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleOpacityContainer h1 {
    font-size: 1.6vw;
  }
  .titleOpacity div i {
    font-size: 1.6vw;
    color: white;
    padding: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .resultOpacityText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .OpacityText {
    font-size: 2vw;
  }
  .previewOpacityText {
    font-size: 2vw;
  }
  .toolsOpacity p {
    font-size: 1.6vw;
  }
  .optionsOpacity {
    width: 90%;
  }
  .secondOpacity {
    width: 90%;
  }

  .resultOpacity code {
    margin-top: 10px;
    background-color: #353945;
    padding: 12px;
    color: white;
    border: none;
    font-size: 1.5vw;
    overflow-wrap: break-word;
  }
  .elementOpacity {
    font-size: 1.5vw;
  }
}
@media (max-width: 1080px) {
  .OpacityTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    background-color: #1d263d;
    position: relative;
    margin: 20px auto;
    height: auto;
    padding-bottom: 30px;
  }
  .imageUrl {
    font-size: 1.8vw;
  }
  .Opacity_container {
    width: 100%;
    height: 100%;
    background-color: #1d263d;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }
  .titleColor {
    background-color: rgb(96, 10, 255);
  }

  .titleOpacityContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleOpacityContainer h1 {
    font-size: 2.5vw;
  }
  .titleOpacity div i {
    font-size: 2.5vw;
    color: white;
    padding: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .resultOpacityText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .OpacityText {
    font-size: 2.6vw;
  }
  .previewOpacityText {
    font-size: 2.6vw;
  }
  .toolsOpacity p {
    font-size: 2vw;
  }
  .optionsOpacity {
    width: 90%;
  }
  .secondOpacity {
    width: 90%;
  }

  .resultOpacity code {
    margin-top: 10px;
    background-color: #353945;
    padding: 12px;
    color: white;
    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
  .elementOpacity {
    font-size: 1.5vw;
  }
}
@media (max-width: 780px) {
  .OpacityTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    background-color: #1d263d;
    position: relative;
    margin: 20px auto;
    height: auto;
    padding-bottom: 30px;
  }
  .imageUrl {
    font-size: 2vw;
  }
  .Opacity_container {
    width: 100%;
    height: 100%;
    background-color: #1d263d;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }
  .titleColor {
    background-color: rgb(96, 10, 255);
  }

  .titleOpacityContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleOpacityContainer h1 {
    font-size: 2.7vw;
  }
  .titleOpacity div i {
    font-size: 2.7vw;
    color: white;
    padding: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .resultOpacityText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .OpacityText {
    font-size: 3.5vw;
  }
  .previewOpacityText {
    font-size: 3.5vw;
  }
  .toolsOpacity p {
    font-size: 2.3vw;
  }
  .optionsOpacity {
    width: 90%;
  }
  .secondOpacity {
    width: 90%;
  }

  .resultOpacity code {
    margin-top: 10px;
    background-color: #353945;
    padding: 12px;
    color: white;
    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
  .elementOpacity {
    font-size: 2vw;
  }
}
@media (max-width: 600px) {
  .OpacityTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    background-color: #1d263d;
    position: relative;
    margin: 20px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .imageUrl {
    font-size: 2.5vw;
  }

  .Opacity_container {
    width: 100%;
    height: 100%;
    background-color: #1d263d;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }
  .titleColor {
    background-color: rgb(96, 10, 255);
  }

  .titleOpacityContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleOpacityContainer h1 {
    font-size: 4vw;
  }
  .titleOpacity div i {
    font-size: 4.5vw;
    color: white;
    padding: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .resultOpacityText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .OpacityText {
    font-size: 5vw;
  }
  .previewOpacityText {
    font-size: 5vw;
  }
  .toolsOpacity p {
    font-size: 3vw;
  }
  .optionsOpacity {
    width: 90%;
  }
  .secondOpacity {
    width: 90%;
  }

  .resultOpacity code {
    margin-top: 10px;
    background-color: #353945;
    padding: 12px;
    color: white;
    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
  .elementOpacity {
    font-size: 3vw;
  }
}
</style>
