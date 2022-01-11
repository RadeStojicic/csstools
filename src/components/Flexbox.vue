!<template>
  <div class="Flexbox_container page">
    <div class="backgroundFlexbox">
      <div class="titleFlexbox">
        <div class="titleFlexboxContainer">
          <div>
            <h1>Category/Flexbox</h1>
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
      <div class="FlexboxTool">
        <div class="optionsFlexbox">
          <h1 class="FlexboxText">Settings</h1>
          <div class="toolsFlexbox">
            <div>
              <p>Flex Direction</p>
              <section
                @click="showDropDownFlexDirection"
                class="positionDropDownFD"
                ref="divClick"
              >
                <section class="">
                  {{ activeFlexDirection }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section
                style="display: none;"
                class="itemsDropDownFlexDirection"
              >
                <section
                  @click="replaceClassFlexDirection(), rowReverseFD()"
                  class="notActiveFlexDirection secFD"
                  ref=""
                >
                  row-reverse
                </section>
                <section
                  @click="replaceClassFlexDirection(), rowFD()"
                  class="activeFlexDirection secFD"
                  ref="secFD"
                >
                  row
                </section>
                <section
                  @click="replaceClassFlexDirection(), columnFD()"
                  class="notActiveFlexDirection secFD"
                  ref=""
                >
                  column
                </section>
                <section
                  @click="replaceClassFlexDirection(), columnReverseFD()"
                  class="notActivePosition secFD"
                  ref=""
                >
                  column-reverse
                </section>
              </section>
            </div>
            <div>
              <p>Justify Content</p>
              <section
                @click="showDropDownJustifyContent"
                class="positionDropDownJC"
                ref="divClick"
              >
                <section class="">
                  {{ activeJustifyContent }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section
                style="display: none;"
                class="itemsDropDownJustifyContent"
              >
                <section
                  @click="replaceClassJustifyContent(), flexStartJC()"
                  class="notActiveJustifyContent secJC"
                  ref=""
                >
                  flex-start
                </section>
                <section
                  @click="replaceClassJustifyContent(), flexEndJC()"
                  class="notActiveJustifyContent secJC"
                  ref=""
                >
                  flex-end
                </section>
                <section
                  @click="replaceClassJustifyContent(), centerJC()"
                  class="activeJustifyContent secJC"
                  ref="secJS"
                >
                  center
                </section>
                <section
                  @click="replaceClassJustifyContent(), spaceBetweenJC()"
                  class="notActiveJustifyContent secJC"
                  ref=""
                >
                  space-between
                </section>
                <section
                  @click="replaceClassJustifyContent(), spaceAroundJC()"
                  class="notActiveJustifyContent secJC"
                  ref=""
                >
                  space-around
                </section>
                <section
                  @click="replaceClassJustifyContent(), spaceEvenlyJC()"
                  class="notActiveJustifyContent secJC"
                  ref=""
                >
                  space-evenly
                </section>
              </section>
            </div>
            <div>
              <p>Align Items</p>
              <section
                @click="showDropDownAlignItems"
                class="positionDropDownAI"
                ref="divClick"
              >
                <section class="">
                  {{ activeAlignItems }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section style="display: none;" class="itemsDropDownAlignItems">
                <section
                  @click="replaceClassAlignItems(), flexStartAI()"
                  class="notActiveAlignItems secAI"
                  ref=""
                >
                  flex-start
                </section>
                <section
                  @click="replaceClassAlignItems(), flexEndAI()"
                  class="notActiveAlignItems secAI"
                  ref=""
                >
                  flex-end
                </section>
                <section
                  @click="replaceClassAlignItems(), centerAI()"
                  class="activeAlignItems secAI"
                  ref="secAI"
                >
                  center
                </section>
                <section
                  @click="replaceClassAlignItems(), stretchAI()()"
                  class="notActiveAlignItems secAI"
                  ref=""
                >
                  stretch
                </section>
              </section>
            </div>
            <div>
              <p>Gap</p>
              <input
                class="rotateTool"
                type="range"
                min="0"
                max="20"
                step="1"
                v-model="flexGap"
                value="5"
              />
            </div>
          </div>
        </div>
        <div class="secondFlexbox">
          <div class="previewFlexboxContainer">
            <h1 class="previewFlexboxText">Preview</h1>

            <div
              :style="{
                flexDirection: activeFlexDirection,
                justifyContent: activeJustifyContent,
                alignItems: activeAlignItems,
                gap: flexGap + 'px',
              }"
              class="elementFlexbox"
            >
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
          <div class="resultFlexbox">
            <div class="copyContainerFlexbox">
              <h1 class="resultFlexboxText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardBS()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextFlexBox">
              <code><span style="color: #bef264;">display: </span>flex; </code>
              <code
                ><span style="color: #bef264;">flex-direction: </span
                >{{ activeFlexDirection }};
              </code>
              <code
                ><span style="color: #bef264;">justify-content: </span
                >{{ activeJustifyContent }};
              </code>
              <code
                ><span style="color: #bef264;">align-items: </span
                >{{ activeAlignItems }};
              </code>
              <code
                ><span style="color: #bef264;">gap: </span>{{ flexGap }}px;
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
      FlexboxAmount: 1,
      activeFlexDirection: "row",
      activeJustifyContent: "center",
      activeAlignItems: "center",
      flexGap: 5,
    };
  },
  methods: {
    copyToClipBoardBS() {
      navigator.clipboard.writeText(
        "display: flex; " +
          "flex-direction: " +
          this.activeFlexDirection +
          "; " +
          "justify-content: " +
          this.activeJustifyContent +
          "; " +
          "align-items: " +
          this.activeAlignItems +
          "; " +
          "gap: " +
          this.flexGap +
          "px;"
      );
      alert("Copied to clipboard!");
    },
    showDropDownFlexDirection() {
      let itemsDropDownFlexDirection = document.querySelector(
        ".itemsDropDownFlexDirection"
      );
      if (itemsDropDownFlexDirection.style.display == "none") {
        itemsDropDownFlexDirection.style.display = "block";
      } else {
        itemsDropDownFlexDirection.style.display = "none";
      }
      document.querySelector(".itemsDropDownJustifyContent").style.display =
        "none";
      document.querySelector(".itemsDropDownAlignItems").style.display = "none";
    },
    replaceClassFlexDirection() {
      let flexDirectionSections = document.querySelectorAll(".secFD");

      for (let i = 0; i < flexDirectionSections.length; i++) {
        flexDirectionSections[i].addEventListener("click", function() {
          let currentFlexDirection = document.getElementsByClassName(
            "activeFlexDirection"
          );
          currentFlexDirection[0].className = currentFlexDirection[0].className.replace(
            "activeFlexDirection",
            ""
          );
          this.className += " activeFlexDirection";
        });
        let dropFlexDirectionContainer = document.querySelector(
          ".itemsDropDownFlexDirection"
        );
        dropFlexDirectionContainer.style.display = "none";
      }
    },
    showDropDownJustifyContent() {
      let itemsDropDownJustifyContent = document.querySelector(
        ".itemsDropDownJustifyContent"
      );
      if (itemsDropDownJustifyContent.style.display == "none") {
        itemsDropDownJustifyContent.style.display = "block";
      } else {
        itemsDropDownJustifyContent.style.display = "none";
      }
      document.querySelector(".itemsDropDownFlexDirection").style.display =
        "none";
      document.querySelector(".itemsDropDownAlignItems").style.display = "none";
    },
    replaceClassJustifyContent() {
      let justifyContentSections = document.querySelectorAll(".secJC");

      for (let i = 0; i < justifyContentSections.length; i++) {
        justifyContentSections[i].addEventListener("click", function() {
          let currentJustifyContent = document.getElementsByClassName(
            "activeJustifyContent"
          );
          currentJustifyContent[0].className = currentJustifyContent[0].className.replace(
            "activeJustifyContent",
            ""
          );
          this.className += " activeJustifyContent";
        });
        let dropJustifyContentContainer = document.querySelector(
          ".itemsDropDownJustifyContent"
        );
        dropJustifyContentContainer.style.display = "none";
      }
    },
    showDropDownAlignItems() {
      let itemsDropDownAlignItems = document.querySelector(
        ".itemsDropDownAlignItems"
      );
      if (itemsDropDownAlignItems.style.display == "none") {
        itemsDropDownAlignItems.style.display = "block";
      } else {
        itemsDropDownAlignItems.style.display = "none";
      }
      document.querySelector(".itemsDropDownFlexDirection").style.display =
        "none";
      document.querySelector(".itemsDropDownJustifyContent").style.display =
        "none";
    },
    replaceClassAlignItems() {
      let alignItemsSections = document.querySelectorAll(".secAI");

      for (let i = 0; i < alignItemsSections.length; i++) {
        alignItemsSections[i].addEventListener("click", function() {
          let currentAlignItem = document.getElementsByClassName(
            "activeAlignItems"
          );
          currentAlignItem[0].className = currentAlignItem[0].className.replace(
            "activeAlignItems",
            ""
          );
          this.className += " activeAlignItems";
        });
        let dropAlignItemContainer = document.querySelector(
          ".itemsDropDownAlignItems"
        );
        dropAlignItemContainer.style.display = "none";
      }
    },
    rowReverseFD() {
      this.activeFlexDirection = "row-reverse";
    },
    rowFD() {
      this.activeFlexDirection = "row";
    },
    columnFD() {
      this.activeFlexDirection = "column";
    },
    columnReverseFD() {
      this.activeFlexDirection = "column-reverse";
    },
    flexStartJC() {
      this.activeJustifyContent = "flex-start";
    },
    flexEndJC() {
      this.activeJustifyContent = "flex-end";
    },
    centerJC() {
      this.activeJustifyContent = "center";
    },
    spaceBetweenJC() {
      this.activeJustifyContent = "space-between";
    },
    spaceAroundJC() {
      this.activeJustifyContent = "space-around";
    },
    spaceEvenlyJC() {
      this.activeJustifyContent = "space-evenly";
    },
    flexStartAI() {
      this.activeAlignItems = "flex-start";
    },
    flexEndAI() {
      this.activeAlignItems = "flex-end";
    },
    centerAI() {
      this.activeAlignItems = "center";
    },
    stretchAI() {
      this.activeAlignItems = "stretch";
    },
  },
  mounted() {
    this.$refs.secFD.click();
    this.$refs.secJC.click();
    this.$$refs.secAI.click();
  },
};
</script>

<style>
.Flexbox_container {
  width: 85vw;
  position: absolute;
  top: 0;
  right: 0;
  background-color: whitesmoke;
}
.backgroundFlexbox {
  height: 1100px;
}
.titleFlexbox {
  background-color: rgb(96, 10, 255);
  background-image: url("../assets/navbarDesign.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.titleFlexboxContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.FlexboxStyle input {
  margin-right: 20px;
}

.FlexboxStyle p {
  margin-bottom: 15px;
}

.titleFlexboxContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleFlexbox h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.rotateTool {
  width: 100%;
  margin-top: 10px;
}

.copyContainerFlexbox {
  display: flex;
  justify-content: space-between;
}

.copyContainerFlexbox button {
  padding: 10px;
  border: 1px #1d263d solid;
  background-color: transparent;
  border-radius: 5px;
  color: #1d263d;
  font-weight: 400;
  cursor: pointer;
}

.copyContainerFlexbox button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementFlexbox {
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  margin-top: 50px;
}
.elementFlexbox div {
  background-color: #1d263d;
  width: 8vw;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
}

.toolsFlexbox div {
  margin-top: 20px;
  background-color: whitesmoke;
  padding: 10px;
}

.toolsFlexbox p {
  font-size: 0.9vw;
  color: #1d263d;
}

.FlexboxTool {
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

.FlexboxText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsFlexbox {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondFlexbox {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.previewFlexboxText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewFlexbox {
  height: 200px;
}

.resultTextFlexBox {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 10px;
}

.resultTextFlexBox code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
}

.resultFlexbox {
  margin-top: 40px;
}

.resultFlexboxText {
  color: #1d263d;
}

.itemsDropDownFlexDirection section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
  color: #1d263d;
}

.itemsDropDownFlexDirection section:hover {
  background-color: rgb(228, 228, 228);
}
.activeFlexDirection {
  background-color: rgb(228, 228, 228);
}

.itemsDropDownJustifyContent section:hover {
  background-color: rgb(228, 228, 228);
}
.activeJustifyContent {
  background-color: rgb(228, 228, 228);
}
.itemsDropDownJustifyContent section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}

.positionDropDownFD {
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
.positionDropDownJC {
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
.positionDropDownAI {
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
.itemsDropDownFlexDirection {
  background-color: rgb(255, 255, 255);
  animation: 0.5s opacityDrop ease-in-out;
  color: #1d263d;
}
.itemsDropDownJustifyContent {
  background-color: rgb(255, 255, 255);
  animation: 0.5s opacityDrop ease-in-out;
  color: #1d263d;
}
.itemsDropDownAlignItems {
  background-color: rgb(255, 255, 255);
  animation: 0.5s opacityDrop ease-in-out;
  color: #1d263d;
}
.itemsDropDownAlignItems section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}
.itemsDropDownAlignItems section:hover {
  background-color: rgb(228, 228, 228);
}
.activeAlignItems {
  background-color: rgb(228, 228, 228);
}

@keyframes opacityDrop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (min-width: 3000px) and (max-width: 8040px) {
  .Flexbox_container {
    height: 2160px;
    width: 80vw;
  }
}
@media (min-width: 2048px) and (max-width: 3000px) {
  .Flexbox_container {
    height: 1200px;
    width: 80vw;
  }
}
@media (max-width: 1800px) {
  .Flexbox_container {
    width: 80vw;
  }
  .FlexboxTool {
    top: 40%;
  }
  .titleFlexboxContainer h1 {
    font-size: 1.2vw;
  }
  .titleFlexbox div i {
    font-size: 1.2vw;
  }
}
@media (max-width: 1500px) {
  .FlexboxTool {
    width: 90%;
    gap: 50px;
  }
  .FlexboxText {
    font-size: 2vw;
  }
  .previewFlexboxText {
    font-size: 2vw;
  }
  .resultFlexboxText {
    font-size: 2vw;
  }
  .resultTextFlexBox code {
    font-size: 1vw;
  }
  .toolsFlexbox p {
    font-size: 1.2vw;
  }
  .titleFlexboxContainer h1 {
    font-size: 1.3vw;
  }
  .titleFlexbox div i {
    font-size: 1.3vw;
  }
}
@media (max-width: 1300px) {
  .portfolioLink {
    display: none;
  }
  .FlexboxTool {
    top: 45%;
  }
  .FlexboxTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 300px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .Flexbox_container {
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

  .titleFlexboxContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleFlexboxContainer h1 {
    font-size: 1.6vw;
  }
  .titleFlexbox div i {
    font-size: 1.6vw;
    padding: 10px;
  }

  .resultFlexboxText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .FlexboxText {
    font-size: 2vw;
  }
  .previewFlexboxText {
    font-size: 2vw;
  }
  .toolsFlexbox p {
    font-size: 1.6vw;
  }
  .optionsFlexbox {
    width: 90%;
  }
  .secondFlexbox {
    width: 90%;
  }

  .resultFlexbox code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 1.5vw;
    overflow-wrap: break-word;
  }
  .elementFlexbox {
    font-size: 1.5vw;
  }
}
@media (max-width: 1080px) {
  .FlexboxTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 280px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .Flexbox_container {
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

  .titleFlexboxContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleFlexboxContainer h1 {
    font-size: 2.5vw;
  }
  .titleFlexbox div i {
    font-size: 2.5vw;
    padding: 10px;
  }

  .resultFlexboxText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .FlexboxText {
    font-size: 2.6vw;
  }
  .previewFlexboxText {
    font-size: 2.6vw;
  }
  .toolsFlexbox p {
    font-size: 2vw;
  }
  .optionsFlexbox {
    width: 90%;
  }
  .secondFlexbox {
    width: 90%;
  }

  .resultFlexbox code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
  .elementFlexbox {
    font-size: 1.5vw;
  }
}
@media (max-width: 780px) {
  .FlexboxTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 270px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .Flexbox_container {
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

  .titleFlexboxContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleFlexboxContainer h1 {
    font-size: 2.7vw;
  }
  .titleFlexbox div i {
    font-size: 2.7vw;
    padding: 10px;
  }

  .resultFlexboxText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .FlexboxText {
    font-size: 3.5vw;
  }
  .previewFlexboxText {
    font-size: 3.5vw;
  }
  .toolsFlexbox p {
    font-size: 2.3vw;
  }
  .optionsFlexbox {
    width: 90%;
  }
  .secondFlexbox {
    width: 90%;
  }

  .resultFlexbox code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
  .elementFlexbox {
    font-size: 2vw;
  }
}
@media (max-width: 600px) {
  .FlexboxTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 280px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .Flexbox_container {
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

  .titleFlexboxContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleFlexboxContainer h1 {
    font-size: 4vw;
  }
  .titleFlexbox div i {
    font-size: 4.5vw;
    padding: 10px;
  }

  .resultFlexboxText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .FlexboxText {
    font-size: 5vw;
  }
  .previewFlexboxText {
    font-size: 5vw;
  }
  .toolsFlexbox p {
    font-size: 3.3vw;
  }
  .optionsFlexbox {
    width: 90%;
  }
  .secondFlexbox {
    width: 90%;
  }

  .resultFlexbox code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
  .elementFlexbox {
    font-size: 3.3vw;
  }
}
</style>
