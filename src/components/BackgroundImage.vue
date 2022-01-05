!<template>
  <div class="BackgroundImage_container page">
    <div class="backgroundBackgroundImage">
      <div class="titleBackgroundImage">
        <div class="titleBackgroundImageContainer">
          <div>
            <h1>Category/BackgroundImage</h1>
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
      <div class="BackgroundImageTool">
        <div class="optionsBackgroundImage">
          <h1 class="BackgroundImageText">Settings</h1>
          <div class="toolsBackgroundImage">
            <div class="imageUrlContainer">
              <p>Image URL</p>
              <section class="bsInputContainer">
                <input
                  class="imageUrl"
                  type="url"
                  v-model="imageUrl"
                  name="text"
                  value=""
                />
              </section>
            </div>
            <div>
              <p>Background Position</p>
              <section
                @click="showDropDownPosition"
                class="positionDropDownBI"
                ref="divClick"
              >
                <section class="">
                  {{ activePositionVar }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section style="display: none;" class="itemsDropDownPosition">
                <section
                  @click="replaceClassPosition(), leftPosition()"
                  class="notActivePosition sec"
                  ref=""
                >
                  left
                </section>
                <section
                  @click="replaceClassPosition(), topPosition()"
                  class="notActivePosition sec"
                  ref=""
                >
                  top
                </section>
                <section
                  @click="replaceClassPosition(), centerPosition()"
                  class="activePosition sec"
                  ref="sec"
                >
                  center
                </section>
                <section
                  @click="replaceClassPosition(), bottomPosition()"
                  class="notActivePosition sec"
                  ref=""
                >
                  bottom
                </section>
                <section
                  @click="replaceClassPosition(), rightPosition()"
                  class="notActivePosition sec"
                  ref=""
                >
                  right
                </section>
              </section>
            </div>
            <div>
              <p>Background Repeat</p>
              <section
                @click="showDropDownRepeat"
                class="repeatDropDownBI"
                ref="divClick"
              >
                <section class="">
                  {{ activeRepeatVar }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section style="display: none;" class="itemsDropDownRepeat">
                <section
                  @click="replaceClassRepeat(), bgRepeat()"
                  class="notActiveRepeat rep"
                >
                  repeat
                </section>

                <section
                  @click="replaceClassRepeat(), bgNoRepeat()"
                  class="activeRepeat rep"
                  ref="rep"
                >
                  no-repeat
                </section>
              </section>
            </div>
            <div>
              <p>Background Size</p>
              <section
                @click="showDropDownSize"
                class="sizeDropDownBI"
                ref="divClick"
              >
                <section class="">
                  {{ activeSizeVar }}
                </section>
                <i class="fas fa-caret-down"></i>
              </section>
              <section style="display: none;" class="itemsDropDownSize">
                <section
                  @click="replaceClassSize(), containSize()"
                  class="notActiveSize size"
                >
                  contain
                </section>
                <section
                  @click="replaceClassSize(), coverSize()"
                  class="activeSize size"
                  ref="size"
                >
                  cover
                </section>
                <section
                  @click="replaceClassSize(), autoSize()"
                  class="notActiveSize size"
                >
                  auto
                </section>
              </section>
            </div>
          </div>
        </div>
        <div class="secondBackgroundImage">
          <div class="previewBackgroundImageContainer">
            <h1 class="previewBackgroundImageText">Preview</h1>

            <div
              :style="{
                backgroundImage: 'url(' + imageUrl + ')',
                backgroundPosition: activePositionVar,
                backgroundRepeat: activeRepeatVar,
                backgroundSize: activeSizeVar,
              }"
              class="elementBackgroundImage"
            ></div>
          </div>
          <div class="resultBackgroundImage">
            <div class="copyContainerBackgroundImage">
              <h1 class="resultBackgroundImageText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardBS()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultText">
              <code
                ><span style="color: #bef264;">background-image: </span> url("{{
                  imageUrl
                }}");
              </code>
              <code
                ><span style="color: #bef264;">background-position: </span>
                {{ activePositionVar }};
              </code>
              <code
                ><span style="color: #bef264;">background-repeat: </span>
                {{ activeRepeatVar }};
              </code>
              <code
                ><span style="color: #bef264;">background-size: </span>
                {{ activeSizeVar }};
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
      imageUrl: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
      activePositionVar: "center",
      activeRepeatVar: "no-repeat",
      activeSizeVar: "cover",
    };
  },
  methods: {
    copyToClipBoardBS() {
      navigator.clipboard.writeText(
        "background-image: " +
          `url("` +
          this.imageUrl +
          `"); ` +
          "background-position: " +
          this.activePositionVar +
          "; " +
          "background-repeat: " +
          this.activeRepeatVar +
          "; " +
          "background-size: " +
          this.activeSizeVar +
          ";"
      );
      alert("Copied to clipboard!");
    },
    showDropDownPosition() {
      let itemsDropDownPosition = document.querySelector(
        ".itemsDropDownPosition"
      );
      if (itemsDropDownPosition.style.display == "none") {
        itemsDropDownPosition.style.display = "block";
      } else {
        itemsDropDownPosition.style.display = "none";
      }
      document.querySelector(".itemsDropDownRepeat").style.display = "none";
      document.querySelector(".itemsDropDownSize").style.display = "none";
    },
    showDropDownRepeat() {
      let itemsDropDownRepeat = document.querySelector(".itemsDropDownRepeat");
      if (itemsDropDownRepeat.style.display == "none") {
        itemsDropDownRepeat.style.display = "block";
      } else {
        itemsDropDownRepeat.style.display = "none";
      }
      document.querySelector(".itemsDropDownPosition").style.display = "none";
      document.querySelector(".itemsDropDownSize").style.display = "none";
    },
    showDropDownSize() {
      let itemsDropDownSize = document.querySelector(".itemsDropDownSize");
      if (itemsDropDownSize.style.display == "none") {
        itemsDropDownSize.style.display = "block";
      } else {
        itemsDropDownSize.style.display = "none";
      }
      document.querySelector(".itemsDropDownPosition").style.display = "none";
      document.querySelector(".itemsDropDownRepeat").style.display = "none";
    },
    replaceClassPosition() {
      let positionSections = document.querySelectorAll(".sec");

      for (let i = 0; i < positionSections.length; i++) {
        positionSections[i].addEventListener("click", function() {
          let currentPosition = document.getElementsByClassName(
            "activePosition"
          );
          currentPosition[0].className = currentPosition[0].className.replace(
            "activePosition",
            ""
          );
          this.className += " activePosition";
        });
        let dropPositionContainer = document.querySelector(
          ".itemsDropDownPosition"
        );
        dropPositionContainer.style.display = "none";
      }
    },
    replaceClassRepeat() {
      let repeatSections = document.querySelectorAll(".rep");

      for (let i = 0; i < repeatSections.length; i++) {
        repeatSections[i].addEventListener("click", function() {
          let currentPosition1 = document.getElementsByClassName(
            "activeRepeat"
          );
          currentPosition1[0].className = currentPosition1[0].className.replace(
            "activeRepeat",
            ""
          );
          this.className += " activeRepeat";
        });
        let dropPositionContainer1 = document.querySelector(
          ".itemsDropDownRepeat"
        );
        dropPositionContainer1.style.display = "none";
      }
    },
    replaceClassSize() {
      let sizeSections = document.querySelectorAll(".size");

      for (let i = 0; i < sizeSections.length; i++) {
        sizeSections[i].addEventListener("click", function() {
          let currentPosition1 = document.getElementsByClassName("activeSize");
          currentPosition1[0].className = currentPosition1[0].className.replace(
            "activeSize",
            ""
          );
          this.className += " activeSize";
        });
        let dropPositionContainer1 = document.querySelector(
          ".itemsDropDownSize"
        );
        dropPositionContainer1.style.display = "none";
      }
    },
    leftPosition() {
      this.activePositionVar = "left";
    },
    rightPosition() {
      this.activePositionVar = "right";
    },
    topPosition() {
      this.activePositionVar = "top";
    },
    bottomPosition() {
      this.activePositionVar = "bottom";
    },
    centerPosition() {
      this.activePositionVar = "center";
    },
    bgRepeat() {
      this.activeRepeatVar = "repeat";
    },
    bgNoRepeat() {
      this.activeRepeatVar = "no-repeat";
    },
    containSize() {
      this.activeSizeVar = "contain";
    },
    coverSize() {
      this.activeSizeVar = "cover";
    },
    autoSize() {
      this.activeSizeVar = "auto";
    },
  },
  mounted() {
    this.$refs.sec.click();
    this.$refs.rep.click();
    this.$refs.size.click();
  },
};
</script>

<style>
.BackgroundImage_container {
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: whitesmoke;
}
.backgroundBackgroundImage {
  height: 1000px;
}

.titleBackgroundImage {
  background-color: rgb(96, 10, 255);
}
.titleBackgroundImageContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.BackgroundImageStyle input {
  margin-right: 20px;
}

.BackgroundImageStyle p {
  margin-bottom: 15px;
}

.titleBackgroundImageContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleBackgroundImage h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.BackgroundImageHorizontalTool {
  width: 100%;
  margin-top: 10px;
}

.BackgroundImageVerticalTool {
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

.copyContainerBackgroundImage {
  display: flex;
  justify-content: space-between;
}

.copyContainerBackgroundImage button {
  padding: 10px;
  border: 1px #1d263d solid;
  background-color: transparent;
  border-radius: 5px;
  color: #1d263d;
  font-weight: 400;
  cursor: pointer;
}

.copyContainerBackgroundImage button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementBackgroundImage {
  padding: 50px;
  border: none;
  height: 200px;
  width: 100%;
  margin: auto;
}

.toolsBackgroundImage div {
  margin-top: 20px;
  background-color: whitesmoke;
  padding: 10px;
  color: #1d263d;
}

.toolsBackgroundImage p {
  font-size: 0.9vw;
  color: #1d263d;
}

.BackgroundImageTool {
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

.BackgroundImageText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsBackgroundImage {
  flex: 1;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondBackgroundImage {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 5px;
  width: 50%;
}

.previewBackgroundImageText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewBackgroundImage {
  height: 200px;
}

.resultText {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 10px;
}

.resultText code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
  overflow-wrap: break-word;
}

.resultBackgroundImage {
  margin-top: 40px;
}

.resultBackgroundImageText {
  color: #1d263d;
}

.positionDropDownBI {
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
.positionDropDownBI i {
  color: #1d263d;
}
.repeatDropDownBI {
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
.repeatDropDownBI i {
  color: #1d263d;
}
.sizeDropDownBI {
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
.sizeDropDownBI i {
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

.itemsDropDownPosition section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
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
  background-color: rgba(255, 255, 255, 0.158);
  animation: 0.5s opacityDrop ease-in-out;
}
.itemsDropDownRepeat section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
}

.sizeDropDown {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.sizeDropDown i {
  color: #c9cdd8;
}

.itemsDropDownSize {
  background-color: rgba(226, 226, 226, 0.158);
  animation: 0.5s opacityDrop ease-in-out;
}

.itemsDropDownSize section {
  border-top: 1px rgba(65, 61, 61, 0.24) solid;
  padding: 10px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
}
@media (max-width: 1300px) {
  .BackgroundImageTool {
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
  .imageUrl {
    font-size: 1.5vw;
  }

  .BackgroundImage_container {
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

  .titleBackgroundImageContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBackgroundImageContainer h1 {
    font-size: 1.6vw;
  }
  .titleBackgroundImage div i {
    font-size: 1.6vw;

    padding: 10px;
  }

  .resultBackgroundImageText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .BackgroundImageText {
    font-size: 2vw;
  }
  .previewBackgroundImageText {
    font-size: 2vw;
  }
  .toolsBackgroundImage p {
    font-size: 1.6vw;
  }
  .optionsBackgroundImage {
    width: 90%;
  }
  .secondBackgroundImage {
    width: 90%;
  }

  .resultText code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 1.7vw;
    overflow-wrap: break-word;
  }
}
@media (max-width: 1080px) {
  .BackgroundImageTool {
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
  .imageUrl {
    font-size: 1.8vw;
  }
  .BackgroundImage_container {
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

  .titleBackgroundImageContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBackgroundImageContainer h1 {
    font-size: 2.5vw;
  }
  .titleBackgroundImage div i {
    font-size: 2.5vw;

    padding: 10px;
  }

  .resultBackgroundImageText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .BackgroundImageText {
    font-size: 2.6vw;
  }
  .previewBackgroundImageText {
    font-size: 2.6vw;
  }
  .toolsBackgroundImage p {
    font-size: 2vw;
  }
  .optionsBackgroundImage {
    width: 90%;
  }
  .secondBackgroundImage {
    width: 90%;
  }

  .resultText code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
}
@media (max-width: 780px) {
  .BackgroundImageTool {
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
  .imageUrl {
    font-size: 2vw;
  }
  .BackgroundImage_container {
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

  .titleBackgroundImageContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBackgroundImageContainer h1 {
    font-size: 2.7vw;
  }
  .titleBackgroundImage div i {
    font-size: 2.7vw;

    padding: 10px;
  }

  .resultBackgroundImageText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .BackgroundImageText {
    font-size: 3.5vw;
  }
  .previewBackgroundImageText {
    font-size: 3.5vw;
  }
  .toolsBackgroundImage p {
    font-size: 2.3vw;
  }
  .optionsBackgroundImage {
    width: 90%;
  }
  .secondBackgroundImage {
    width: 90%;
  }

  .resultText code {
    margin-top: 10px;

    padding: 12px;

    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
}
@media (max-width: 600px) {
  .BackgroundImageTool {
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

  .imageUrl {
    font-size: 3vw;
  }

  .BackgroundImage_container {
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

  .titleBackgroundImageContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleBackgroundImageContainer h1 {
    font-size: 4vw;
  }
  .titleBackgroundImage div i {
    font-size: 4.5vw;
    padding: 10px;
  }

  .resultBackgroundImageText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .BackgroundImageText {
    font-size: 5vw;
  }
  .previewBackgroundImageText {
    font-size: 5vw;
  }
  .toolsBackgroundImage p {
    font-size: 3vw;
  }
  .optionsBackgroundImage {
    width: 90%;
  }
  .secondBackgroundImage {
    width: 90%;
  }
  .resultText {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .resultText code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
}
</style>
