!<template>
  <div class="TransformRotate_container page">
    <div class="backgroundTransformRotate">
      <div class="titleTransformRotate">
        <div class="titleTransformRotateContainer">
          <div>
            <h1>Category/Rotate</h1>
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
      <div class="TransformRotateTool">
        <div class="optionsTransformRotate">
          <h1 class="TransformRotateText">Settings</h1>
          <div class="toolsTransformRotate">
            <div>
              <p>Angle</p>
              <input
                class="rotateTool"
                type="range"
                min="0"
                max="360"
                step="1"
                v-model="angleRotate"
                value="1"
              />
            </div>
          </div>
        </div>
        <div class="secondTransformRotate">
          <div class="previewTransformRotateContainer">
            <h1 class="previewTransformRotateText">Preview</h1>

            <div
              :style="{
                transform: 'rotate(' + angleRotate + 'deg' + ')',
              }"
              class="elementTransformRotate"
            ></div>
          </div>
          <div class="resultTransformRotate">
            <div class="copyContainerTransformRotate">
              <h1 class="resultTransformRotateText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardBS()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextRotate">
              <code
                ><span style="color: #bef264;">transform:</span>
                <span style="color: #fffb7a"> rotate</span>(<span
                  style="color: #bdd1ff"
                  >{{ angleRotate }}deg</span
                >);</code
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
      angleRotate: 10,
    };
  },
  methods: {
    copyToClipBoardBS() {
      navigator.clipboard.writeText(
        "transform: " + "rotate(" + this.angleRotate + "deg" + ");"
      );
      alert("Copied to clipboard!");
    },
  },
};
</script>

<style>
.TransformRotate_container {
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #1d263d;
}
.backgroundTransformRotate {
  height: 100ch;
}
.titleTransformRotate {
  background-color: rgb(96, 10, 255);
}
.titleTransformRotateContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.TransformRotateStyle input {
  margin-right: 20px;
}

.TransformRotateStyle p {
  margin-bottom: 15px;
}

.titleTransformRotateContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleTransformRotate h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.rotateTool {
  width: 100%;
  margin-top: 10px;
}

.copyContainerTransformRotate {
  display: flex;
  justify-content: space-between;
}

.copyContainerTransformRotate button {
  padding: 10px;
  border: 1px #ffffff solid;
  background-color: transparent;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  cursor: pointer;
}

.copyContainerTransformRotate button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementTransformRotate {
  background-color: white;
  height: 200px;
  width: 50%;
  margin: auto;
}

.toolsTransformRotate div {
  margin-top: 20px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.toolsTransformRotate p {
  font-size: 0.9vw;
}

.TransformRotateTool {
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

.TransformRotateText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsTransformRotate {
  flex: 1;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondTransformRotate {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
}

.previewTransformRotateText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewTransformRotate {
  height: 200px;
}

.resultTextRotate {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.resultTextRotate code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
}

.resultTransformRotate {
  margin-top: 40px;
}

.resultTransformRotateText {
  color: white;
}
@media (max-width: 1300px) {
  .TransformRotateTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    background-color: #1d263d;
    position: relative;
    margin: 0px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .TransformRotate_container {
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

  .titleTransformRotateContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleTransformRotateContainer h1 {
    font-size: 1.6vw;
  }
  .titleTransformRotate div i {
    font-size: 1.6vw;
    color: white;
    padding: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .resultTransformRotateText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .TransformRotateText {
    font-size: 2vw;
  }
  .previewTransformRotateText {
    font-size: 2vw;
  }
  .toolsTransformRotate p {
    font-size: 1.6vw;
  }
  .optionsTransformRotate {
    width: 90%;
  }
  .secondTransformRotate {
    width: 90%;
  }

  .resultTransformRotate code {
    margin-top: 10px;
    background-color: #353945;
    padding: 12px;
    color: white;
    border: none;
    font-size: 1.5vw;
    overflow-wrap: break-word;
  }
  .elementTransformRotate {
    font-size: 1.5vw;
  }
}
@media (max-width: 1080px) {
  .TransformRotateTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    background-color: #1d263d;
    position: relative;
    margin: 0px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .TransformRotate_container {
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

  .titleTransformRotateContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleTransformRotateContainer h1 {
    font-size: 2.5vw;
  }
  .titleTransformRotate div i {
    font-size: 2.5vw;
    color: white;
    padding: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .resultTransformRotateText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .TransformRotateText {
    font-size: 2.6vw;
  }
  .previewTransformRotateText {
    font-size: 2.6vw;
  }
  .toolsTransformRotate p {
    font-size: 2vw;
  }
  .optionsTransformRotate {
    width: 90%;
  }
  .secondTransformRotate {
    width: 90%;
  }

  .resultTransformRotate code {
    margin-top: 10px;
    background-color: #353945;
    padding: 12px;
    color: white;
    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
  .elementTransformRotate {
    font-size: 1.5vw;
  }
}
@media (max-width: 780px) {
  .TransformRotateTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    background-color: #1d263d;
    position: relative;
    margin: 0px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .TransformRotate_container {
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

  .titleTransformRotateContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleTransformRotateContainer h1 {
    font-size: 2.7vw;
  }
  .titleTransformRotate div i {
    font-size: 2.7vw;
    color: white;
    padding: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .resultTransformRotateText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .TransformRotateText {
    font-size: 3.5vw;
  }
  .previewTransformRotateText {
    font-size: 3.5vw;
  }
  .toolsTransformRotate p {
    font-size: 2.3vw;
  }
  .optionsTransformRotate {
    width: 90%;
  }
  .secondTransformRotate {
    width: 90%;
  }

  .resultTransformRotate code {
    margin-top: 10px;
    background-color: #353945;
    padding: 12px;
    color: white;
    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
  .elementTransformRotate {
    font-size: 2vw;
  }
}
@media (max-width: 600px) {
  .TransformRotateTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    background-color: #1d263d;
    position: relative;
    margin: 0px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .TransformRotate_container {
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

  .titleTransformRotateContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleTransformRotateContainer h1 {
    font-size: 4vw;
  }
  .titleTransformRotate div i {
    font-size: 4.5vw;
    color: white;
    padding: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .resultTransformRotateText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .TransformRotateText {
    font-size: 5vw;
  }
  .previewTransformRotateText {
    font-size: 5vw;
  }
  .toolsTransformRotate p {
    font-size: 3vw;
  }
  .optionsTransformRotate {
    width: 90%;
  }
  .secondTransformRotate {
    width: 90%;
  }

  .resultTransformRotate code {
    margin-top: 10px;
    background-color: #353945;
    padding: 12px;
    color: white;
    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
  .elementTransformRotate {
    font-size: 3vw;
  }
}
</style>
