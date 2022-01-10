!<template>
  <div class="Cursor_container page">
    <div class="backgroundCursor">
      <div class="titleCursor">
        <div class="titleCursorContainer">
          <div>
            <h1>Category/Cursor</h1>
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
      <div class="CursorTool">
        <div class="optionsCursor">
          <h1 class="CursorText">Settings</h1>
          <div class="toolsCursor">
            <div>
              <p>Cursor Type</p>
              <section
                @click="showDropDownCursor"
                class="positionDropDownCursor"
                ref="divClick"
              >
                <section class="">
                  {{ activeCursor }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section style="display: none;" class="itemsDropDownCursor">
                <section
                  @click="replaceClassCursor(), helpCursor()"
                  class="notActiveCursor secCURSOR"
                  ref=""
                >
                  help
                </section>
                <section
                  @click="replaceClassCursor(), pointerCursor()"
                  class="notActiveCursor secCURSOR"
                  ref=""
                >
                  pointer
                </section>
                <section
                  @click="replaceClassCursor(), waitCursor()"
                  class="notActiveCursor secCURSOR"
                  ref=""
                >
                  wait
                </section>
                <section
                  @click="replaceClassCursor(), crossHairCursor()"
                  class="activeCursor secCURSOR"
                  ref="secCURSOR"
                >
                  crosshair
                </section>
                <section
                  @click="replaceClassCursor(), zoomInCursor()"
                  class="notActiveCursor secCURSOR"
                  ref=""
                >
                  zoom-in
                </section>
                <section
                  @click="replaceClassCursor(), notAllowedCursor()"
                  class="notActiveCursor secCURSOR"
                  ref=""
                >
                  not-allowed
                </section>
              </section>
            </div>
          </div>
        </div>
        <div class="secondCursor">
          <div class="previewCursorContainer">
            <h1 class="previewCursorText">Preview</h1>

            <div
              :style="{
                cursor: activeCursor,
              }"
              class="elementCursor"
            >
              Move over this element to see the cursor style.
            </div>
          </div>
          <div class="resultCursor">
            <div class="copyContainerCursor">
              <h1 class="resultCursorText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardBS()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextCursor">
              <code
                ><span style="color: #bef264;">cursor: </span>
                {{ activeCursor }};</code
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
      activeCursor: "crosshair",
    };
  },
  methods: {
    copyToClipBoardBS() {
      navigator.clipboard.writeText("cursor: " + this.activeCursor + ";");
      alert("Copied to clipboard!");
    },
    showDropDownCursor() {
      let itemsDropDownCursor = document.querySelector(".itemsDropDownCursor");
      if (itemsDropDownCursor.style.display == "none") {
        itemsDropDownCursor.style.display = "block";
      } else {
        itemsDropDownCursor.style.display = "none";
      }
    },

    replaceClassCursor() {
      let cursorSections = document.querySelectorAll(".secCURSOR");
      for (let i = 0; i < cursorSections.length; i++) {
        cursorSections[i].addEventListener("click", function() {
          let currentCursor = document.getElementsByClassName("activeCursor");
          currentCursor[0].className = currentCursor[0].className.replace(
            "activeCursor",
            ""
          );
          this.className += " activeCursor";
        });
        let dropCursorContainer = document.querySelector(
          ".itemsDropDownCursor"
        );
        dropCursorContainer.style.display = "none";
      }
    },
    helpCursor() {
      this.activeCursor = "help";
    },
    pointerCursor() {
      this.activeCursor = "pointer";
    },
    waitCursor() {
      this.activeCursor = "wait";
    },
    crossHairCursor() {
      this.activeCursor = "crosshair";
    },
    zoomInCursor() {
      this.activeCursor = "zoom-in";
    },
    notAllowedCursor() {
      this.activeCursor = "not-allowed";
    },
  },
  mounted() {
    this.$refs.secCURSOR.click();
  },
};
</script>

<style>
.Cursor_container {
  width: 85vw;
  position: absolute;
  top: 0;
  right: 0;
  background-color: whitesmoke;
}
.backgroundCursor {
  height: 1100px;
}

.titleCursor {
  background-color: rgb(96, 10, 255);
  background-image: url("../assets/navbarDesign.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.titleCursorContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.CursorStyle input {
  margin-right: 20px;
}

.CursorStyle p {
  margin-bottom: 15px;
}

.titleCursorContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleCursor h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.CursorHorizontalTool {
  width: 100%;
  margin-top: 10px;
}

.CursorVerticalTool {
  width: 100%;
  margin-top: 10px;
}

.insetBS {
  margin-right: 20px;
}

.copyContainerCursor {
  display: flex;
  justify-content: space-between;
}

.copyContainerCursor button {
  padding: 10px;
  border: 1px #1d263d solid;
  background-color: transparent;
  border-radius: 5px;
  color: #1d263d;
  font-weight: 400;
  cursor: pointer;
}

.copyContainerCursor button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementCursor {
  padding: 50px;
  border: none;
  height: 200px;
  width: 100%;
  margin: auto;
  background-color: #1d263d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  color: white;
}

.toolsCursor div {
  margin-top: 20px;
  background-color: whitesmoke;
  padding: 10px;
}

.toolsCursor p {
  font-size: 0.9vw;
  color: #1d263d;
}

.CursorTool {
  position: absolute;
  top: 40%;
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

.CursorText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsCursor {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: #1d263d;
}
.secondCursor {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
}

.previewCursorText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewCursor {
  height: 200px;
}

.resultTextCursor {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 10px;
}

.resultTextCursor code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
  overflow-wrap: break-word;
}

.resultCursor {
  margin-top: 40px;
}

.resultCursorText {
  color: #1d263d;
}

.positionDropDownCursor {
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
.positionDropDownCursor i {
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

.itemsDropDownCursor {
  background-color: white;
  animation: 0.5s opacityDrop ease-in-out;
}

.itemsDropDownCursor section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}

.itemsDropDownCursor section:hover {
  background-color: rgb(228, 228, 228);
}
.activeCursor {
  background-color: rgb(228, 228, 228);
}

@media (min-width: 3000px) and (max-width: 8040px) {
  .Cursor_container {
    height: 2160px;
    width: 80vw;
  }
}
@media (min-width: 2048px) and (max-width: 3000px) {
  .Cursor_container {
    height: 1200px;
    width: 80vw;
  }
}
@media (max-width: 1800px) {
  .Cursor_container {
    width: 80vw;
  }
}
@media (max-width: 1500px) {
  .CursorTool {
    width: 90%;
    gap: 50px;
  }
  .cursorText {
    font-size: 2vw;
  }
  .previewCursorText {
    font-size: 2vw;
  }
  .resultCursorText {
    font-size: 2vw;
  }
  .resultTextCursor code {
    font-size: 1vw;
  }
  .toolsCursor p {
    font-size: 1.2vw;
  }
  .elementCursor {
    font-size: 1.2vw;
  }
}
@media (max-width: 1300px) {
  .portfolioLink {
    display: none;
  }
  .CursorTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 100px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .Cursor_container {
    width: 100%;
    height: 1500px;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleCursorContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleCursorContainer h1 {
    font-size: 1.6vw;
  }
  .titleCursor div i {
    font-size: 1.6vw;
    padding: 10px;
  }

  .resultCursorText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .CursorText {
    font-size: 2vw;
  }
  .previewCursorText {
    font-size: 2vw;
  }
  .toolsCursor p {
    font-size: 1.6vw;
  }
  .optionsCursor {
    width: 90%;
  }
  .secondCursor {
    width: 90%;
  }

  .resultCursor code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 1.5vw;
    overflow-wrap: break-word;
  }
  .elementCursor {
    font-size: 1.5vw;
  }
}
@media (max-width: 1080px) {
  .CursorTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 100px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .Cursor_container {
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

  .titleCursorContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleCursorContainer h1 {
    font-size: 2.5vw;
  }
  .titleCursor div i {
    font-size: 2.5vw;
    padding: 10px;
  }

  .resultCursorText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .CursorText {
    font-size: 2.6vw;
  }
  .previewCursorText {
    font-size: 2.6vw;
  }
  .toolsCursor p {
    font-size: 2vw;
  }
  .optionsCursor {
    width: 90%;
  }
  .secondCursor {
    width: 90%;
  }

  .resultCursor code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
  .elementCursor {
    font-size: 1.5vw;
  }
}
@media (max-width: 780px) {
  .CursorTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 100px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .Cursor_container {
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

  .titleCursorContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleCursorContainer h1 {
    font-size: 2.7vw;
  }
  .titleCursor div i {
    font-size: 2.7vw;
    padding: 10px;
  }

  .resultCursorText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .CursorText {
    font-size: 3.5vw;
  }
  .previewCursorText {
    font-size: 3.5vw;
  }
  .toolsCursor p {
    font-size: 2.3vw;
  }
  .optionsCursor {
    width: 90%;
  }
  .secondCursor {
    width: 90%;
  }

  .resultCursor code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
  .elementCursor {
    font-size: 2vw;
  }
}
@media (max-width: 600px) {
  .CursorTool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 80px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .Cursor_container {
    width: 100%;
    height: 1300px;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleCursorContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleCursorContainer h1 {
    font-size: 4vw;
  }
  .titleCursor div i {
    font-size: 4.5vw;
    padding: 10px;
  }

  .resultCursorText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .CursorText {
    font-size: 5vw;
  }
  .previewCursorText {
    font-size: 5vw;
  }
  .toolsCursor p {
    font-size: 3.3vw;
  }
  .optionsCursor {
    width: 90%;
  }
  .secondCursor {
    width: 90%;
  }

  .resultCursor code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
  .elementCursor {
    font-size: 3.3vw;
  }
}
</style>
