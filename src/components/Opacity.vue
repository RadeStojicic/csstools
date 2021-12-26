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

            <div class="resultText">
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
}

.resultOpacity {
  margin-top: 40px;
}

.resultOpacityText {
  color: white;
}
</style>
