!<template>
  <div class="Cursor_container page">
    <div class="backgroundCursor">
      <div class="titleCursor">
        <div class="titleCursorContainer">
          <div>
            <h1>Category/Cursor</h1>
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
      <div class="CursorTool">
        <div class="optionsCursor">
          <h1 class="CursorText">Settings</h1>
          <div class="toolsCursor">
            <div>
              <p>Cursor Type</p>
              <div
                @click="showDropDownCursor"
                class="positionDropDown"
                ref="divClick"
              >
                <section class="">
                  {{ activeCursor }}
                </section>
                <i class="fas fa-caret-down"></i>
              </div>
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
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #1d263d;
}

.titleCursor {
  background-color: rgb(96, 10, 255);
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

.imageUrl {
  padding: 10px;
  border: none;
  outline: none;
  background-color: white;
  font-size: 0.9vw;
  width: 100%;
}

.bsInputContainer {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.copyContainerCursor {
  display: flex;
  justify-content: space-between;
}

.copyContainerCursor button {
  padding: 10px;
  border: 1px #ffffff solid;
  background-color: transparent;
  border-radius: 5px;
  color: white;
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
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
}

.toolsCursor div {
  margin-top: 20px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 10px;
}

.toolsCursor p {
  font-size: 0.9vw;
}

.CursorTool {
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

.CursorText {
  color: white;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsCursor {
  flex: 1;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondCursor {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgba(245, 245, 245, 0.158);
  padding: 20px;
  border-radius: 5px;
  max-width: 50%;
}

.previewCursorText {
  color: white;
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
  background-color: rgba(245, 245, 245, 0.158);
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
.activeCursor {
  background-color: rgba(226, 226, 226, 0.24);
}
.itemsDropDownCursor {
  background-color: rgba(226, 226, 226, 0.158);
  animation: 0.5s opacityDrop ease-in-out;
}

.itemsDropDownCursor section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
}
</style>
