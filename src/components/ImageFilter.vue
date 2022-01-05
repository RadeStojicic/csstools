!<template>
  <div class="imageFilter_container page">
    <div class="backgroundimageFilter">
      <div class="titleimageFilter">
        <div class="titleimageFilterContainer">
          <div>
            <h1>Category/ImageFilter</h1>
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
      <div class="imageFilterToolContainer">
        <div class="optionsimageFilter">
          <h1 class="imageFilterText">Settings</h1>
          <div class="toolsimageFilter">
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
              <p>Blur</p>
              <input
                class="imageFilterTool"
                type="range"
                min="0"
                max="20"
                step="0.1"
                v-model="blurFilter"
                value="1"
              />
            </div>
            <div>
              <p>Brightness</p>
              <input
                class="imageFilterTool"
                type="range"
                min="0"
                max="10"
                step="0.1"
                v-model="brightnessFilter"
                value="1"
              />
            </div>
            <div>
              <p>Contrast</p>
              <input
                class="imageFilterTool"
                type="range"
                min="0"
                max="300"
                step="1"
                v-model="contrastFilter"
                value="1"
              />
            </div>
            <div>
              <p>Grayscale</p>
              <input
                class="imageFilterTool"
                type="range"
                min="0"
                max="100"
                step="1"
                v-model="grayscaleFilter"
                value="1"
              />
            </div>
            <div>
              <p>Hue-Rotate</p>
              <input
                class="imageFilterTool"
                type="range"
                min="0"
                max="360"
                step="1"
                v-model="hueRotateFilter"
                value="1"
              />
            </div>
            <div>
              <p>Invert</p>
              <input
                class="imageFilterTool"
                type="range"
                min="0"
                max="1"
                step="0.1"
                v-model="invertFilter"
                value="1"
              />
            </div>
            <div>
              <p>Saturate</p>
              <input
                class="imageFilterTool"
                type="range"
                min="0"
                max="300"
                step="1"
                v-model="saturateFilter"
                value="1"
              />
            </div>
          </div>
        </div>
        <div class="secondimageFilter">
          <div class="previewimageFilterContainer">
            <h1 class="previewimageFilterText">Preview</h1>

            <div
              :style="{
                backgroundImage: 'url(' + imageUrl + ')',
                filter:
                  'blur(' +
                  blurFilter +
                  'px) ' +
                  'brightness(' +
                  brightnessFilter +
                  ') ' +
                  'contrast(' +
                  contrastFilter +
                  '%) ' +
                  'grayscale(' +
                  grayscaleFilter +
                  '%) ' +
                  'hue-rotate(' +
                  hueRotateFilter +
                  'deg) ' +
                  'invert(' +
                  invertFilter +
                  ') ' +
                  'saturate(' +
                  saturateFilter +
                  '%)',
              }"
              class="elementimageFilter"
            ></div>
          </div>
          <div class="resultimageFilter">
            <div class="copyContainerimageFilter">
              <h1 class="resultimageFilterText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardBS()">
                Copy to clipboard
              </button>
            </div>

            <div class="resultTextImageFilter">
              <code
                ><span style="color: #bef264;">filter: </span>
                <span style="color:#">blur</span
                ><span style="color: #bdd1ff">({{ blurFilter }}px) </span>
                <span style="color:#">brightness</span
                ><span style="color: #bdd1ff">({{ brightnessFilter }}) </span>
                <span style="color:#">contrast</span
                ><span style="color: #bdd1ff">({{ contrastFilter }}%) </span
                ><span style="color:#">grayscale</span
                ><span style="color: #bdd1ff">({{ grayscaleFilter }}%) </span>
                <span style="color:#">hue-rotate</span
                ><span style="color: #bdd1ff">({{ hueRotateFilter }}deg) </span>
                <span style="color:#">invert</span
                ><span style="color: #bdd1ff">({{ invertFilter }}) </span>
                <span style="color:#">saturate</span
                ><span style="color: #bdd1ff">({{ saturateFilter }}%) </span>;
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
      imageUrl:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iakrd_gRdPCg/v0/-1x-1.jpg",
      blurFilter: 0,
      brightnessFilter: 1,
      contrastFilter: 100,
      grayscaleFilter: 0,
      hueRotateFilter: 0,
      invertFilter: 0,
      saturateFilter: 100,
    };
  },
  methods: {
    copyToClipBoardBS() {
      navigator.clipboard.writeText(
        "filter: " +
          "blur(" +
          this.blurFilter +
          "px) " +
          "brightness(" +
          this.brightnessFilter +
          ") " +
          "contrast(" +
          this.contrastFilter +
          "%) " +
          "grayscale(" +
          this.grayscaleFilter +
          "%) " +
          "hue-rotate(" +
          this.hueRotateFilter +
          "deg) " +
          "invert(" +
          this.invertFilter +
          ") " +
          "saturate(" +
          this.saturateFilter +
          "%);"
      );
      alert("Copied to clipboard!");
    },
  },
  mounted() {},
};
</script>

<style>
.imageFilter_container {
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: whitesmoke;
}
.backgroundimageFilter {
  height: 1000px;
}
.titleimageFilter {
  background-color: rgb(96, 10, 255);
}
.titleimageFilterContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.imageFilterStyle input {
  margin-right: 20px;
}

.imageFilterStyle p {
  margin-bottom: 15px;
}

.titleimageFilterContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleimageFilter h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.imageFilterHorizontalTool {
  width: 100%;
  margin-top: 10px;
}

.imageFilterVerticalTool {
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

.copyContainerimageFilter {
  display: flex;
  justify-content: space-between;
}

.copyContainerimageFilter button {
  padding: 10px;
  border: 1px #1d263d solid;
  background-color: transparent;
  border-radius: 5px;
  color: #1d263d;
  font-weight: 400;
  cursor: pointer;
}

.copyContainerimageFilter button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}

.elementimageFilter {
  padding: 50px;
  border: none;
  height: 200px;
  width: 100%;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.toolsimageFilter div {
  margin-top: 20px;
  background-color: whitesmoke;
  padding: 10px;
}

.toolsimageFilter p {
  font-size: 0.9vw;
  user-select: none;
  color: #1d263d;
}

.imageFilterToolContainer {
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

.imageFilterText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsimageFilter {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  color: white;
}
.secondimageFilter {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
}

.previewimageFilterText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewimageFilter {
  height: 200px;
}

.resultTextImageFilter {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 10px;
}

.resultTextImageFilter code {
  margin-top: 10px;
  background-color: #353945;
  padding: 12px;
  color: white;
  border: none;
  font-size: 0.9vw;
  overflow-wrap: break-word;
}

.resultimageFilter {
  margin-top: 40px;
}

.resultimageFilterText {
  color: #1d263d;
}
.imageFilterTool {
  width: 100%;
  margin-top: 10px;
}

@media (max-width: 1300px) {
  .imageFilterToolContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 380px auto;
    height: auto;
    padding-bottom: 30px;
  }
  .imageUrl {
    font-size: 1.5vw;
  }

  .imageFilter_container {
    width: 100%;
    height: 100%;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleimageFilterContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleimageFilterContainer h1 {
    font-size: 1.6vw;
  }
  .titleimageFilter div i {
    font-size: 1.6vw;
    padding: 10px;
  }

  .resultimageFilterText {
    font-size: 2vw;
    margin-bottom: 0px;
  }
  .imageFilterText {
    font-size: 2vw;
  }
  .previewimageFilterText {
    font-size: 2vw;
  }
  .toolsimageFilter p {
    font-size: 1.6vw;
  }
  .optionsimageFilter {
    width: 90%;
  }
  .secondimageFilter {
    width: 90%;
  }

  .resultimageFilter code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 1.5vw;
    overflow-wrap: break-word;
  }
  .elementimageFilter {
    font-size: 1.5vw;
  }
}
@media (max-width: 1080px) {
  .imageFilterToolContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 350px auto;
    height: auto;
    padding-bottom: 30px;
  }
  .imageUrl {
    font-size: 1.8vw;
  }
  .imageFilter_container {
    width: 100%;
    height: 100%;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleimageFilterContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleimageFilterContainer h1 {
    font-size: 2.5vw;
  }
  .titleimageFilter div i {
    font-size: 2.5vw;
    padding: 10px;
  }

  .resultimageFilterText {
    font-size: 2.6vw;
    margin-bottom: 0px;
  }
  .imageFilterText {
    font-size: 2.6vw;
  }
  .previewimageFilterText {
    font-size: 2.6vw;
  }
  .toolsimageFilter p {
    font-size: 2vw;
  }
  .optionsimageFilter {
    width: 90%;
  }
  .secondimageFilter {
    width: 90%;
  }

  .resultimageFilter code {
    margin-top: 10px;
    padding: 12px;
    color: white;
    border: none;
    font-size: 2vw;
    overflow-wrap: break-word;
  }
  .elementimageFilter {
    font-size: 1.5vw;
  }
}
@media (max-width: 780px) {
  .imageFilterToolContainer {
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
  .imageUrl {
    font-size: 2vw;
  }
  .imageFilter_container {
    width: 100%;
    height: 100%;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleimageFilterContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleimageFilterContainer h1 {
    font-size: 2.7vw;
  }
  .titleimageFilter div i {
    font-size: 2.7vw;
    padding: 10px;
  }

  .resultimageFilterText {
    font-size: 3.5vw;
    margin-bottom: 0px;
  }
  .imageFilterText {
    font-size: 3.5vw;
  }
  .previewimageFilterText {
    font-size: 3.5vw;
  }
  .toolsimageFilter p {
    font-size: 2.3vw;
  }
  .optionsimageFilter {
    width: 90%;
  }
  .secondimageFilter {
    width: 90%;
  }

  .resultimageFilter code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 2.5vw;
    overflow-wrap: break-word;
  }
  .elementimageFilter {
    font-size: 2vw;
  }
}
@media (max-width: 600px) {
  .imageFilterToolContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 310px auto;
    height: auto;
    padding-bottom: 30px;
  }

  .imageUrl {
    font-size: 3.2vw;
  }

  .imageFilter_container {
    width: 100%;
    height: 100%;
    z-index: -1;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleimageFilterContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }
  .titleimageFilterContainer h1 {
    font-size: 4vw;
  }
  .titleimageFilter div i {
    font-size: 4.5vw;
    padding: 10px;
  }

  .resultimageFilterText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .imageFilterText {
    font-size: 5vw;
  }
  .previewimageFilterText {
    font-size: 5vw;
  }
  .toolsimageFilter p {
    font-size: 3vw;
  }
  .optionsimageFilter {
    width: 90%;
  }
  .secondimageFilter {
    width: 90%;
  }

  .resultimageFilter code {
    margin-top: 10px;
    padding: 12px;
    border: none;
    font-size: 3.3vw;
    overflow-wrap: break-word;
  }
  .elementimageFilter {
    font-size: 3.3vw;
  }
}
</style>
