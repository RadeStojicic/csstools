!<template>
  <div class="pallete">
    <div class="background">
      <div class="titleColor">
        <div class="titleColorContainer">
          <div>
            <h1>Category/BackgroundColor</h1>
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

      <div class="hero">
        <div class="optionsPallete">
          <h1 class="colorText">Settings</h1>
          <div class="colorBG">
            <p class="colorBgTitle">Background Color</p>
            <section class="colorBgContainer">
              <input class="color" v-model="color" type="color" name="color" />
              <p style="margin-left:10px;">{{ color }}</p>
            </section>
          </div>
          <div class="hideText">
            Click the button and change the background color!
          </div>
        </div>

        <div class="secondPallete">
          <div class="previewPalleteContainer">
            <h1 class="previewPalleteText">Preview</h1>
            <div
              :style="{ backgroundColor: color }"
              class="previewPallete"
            ></div>
          </div>
          <div class="codePallete">
            <div class="copyContainerBgColor">
              <h1 class="codePalleteText">Result</h1>
              <button class="ctcButton" @click="copyToClipBoardColor()">
                Copy to clipboard
              </button>
            </div>

            <div class="inputsBG">
              <div>
                <code
                  ><span style="color: #bef264;">background-color:</span>
                  {{ color }};
                </code>
              </div>
              <div>
                <code
                  ><span v-on="convertToRGB()" style="color: #bef264;"
                    >background-color:</span
                  >
                  {{ rgb }};
                </code>
              </div>
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
      color: "#141b2c",
      rgb: "",
    };
  },
  methods: {
    convertToRGB() {
      this.rgb =
        "rgb(" +
        this.color
          .match(/[A-Za-z0-9]{2}/g)
          .map(function(v) {
            return parseInt(v, 16);
          })
          .join(",") +
        ")";
    },
    copyToClipBoardColor() {
      this.convertToRGB();
      navigator.clipboard.writeText(
        "background-color: " +
          this.color +
          "; " +
          "background-color: " +
          this.rgb +
          "; "
      );
      alert("Copied to clipboard!");
    },
  },
};
</script>

<style>
.background {
  width: 85vw;
  position: absolute;
  top: 0;
  right: 0;
  height: 1100px;
  background-color: whitesmoke;
}
.titleColor {
  background-color: rgb(96, 10, 255);
  background-image: url("../assets/navbarDesign.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.portfolioLink {
  position: fixed;
  right: 5px;
  bottom: 5px;
  border-radius: 5px;
  background-color: rgb(96, 10, 255);
}
.portfolioLink i {
  color: rgb(255, 255, 255);
  font-size: 1vw;
  padding: 10px;
}
.portfolioLink:hover {
  border-radius: 50px;
  transition: 1.5s;
  cursor: pointer;
}
.titleColorContainer {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.titleColorContainer div i {
  font-size: 1vw;
  color: white;
  padding: 5px;
}

.titleColor h1 {
  font-size: 1.2vw;
  color: rgb(255, 255, 255);
  padding: 15px 0px 15px 15px;
  text-align: right;
}

.hero {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
  align-items: flex-start;
  width: 80%;
}

.copyContainerBgColor {
  display: flex;
  justify-content: space-between;
}
.copyContainerBgColor button {
  padding: 10px;
  border: 1px #1d263d solid;
  background-color: transparent;
  border-radius: 5px;
  color: #1d263dec;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 30px;
}
.copyContainerBgColor button:hover {
  background-color: rgba(233, 233, 233, 0.171);
}
.colorBG {
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
}

.colorBgTitle {
  font-size: 0.9vw;
  color: #1d263d;
}

.codePallete {
  color: #ffffff;
}
.colorBgContainer {
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.color {
  width: 40px;
  height: 40px;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #353945;
  color: white;
  cursor: pointer;
}

.codePalleteText {
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1d263d;
}

.inputsBG {
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 10px;
  font-weight: 500;
  font-size: 0.9vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.inputsBG div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #353945;
  width: 100%;
}
.inputsBG div code {
  padding: 10px;
}

.colorText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsPallete {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: -1px 2px 5px 3px #7070700e;
}
.optionsPallete div {
  padding: 10px;
}
.secondPallete {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: -1px 2px 5px 3px #7070700e;
}

.previewPalleteText {
  color: #1d263d;
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewPallete {
  height: 200px;
}
.hideText {
  visibility: hidden;
  position: absolute;
}

.hideText::after {
  content: "";
  position: absolute;
  top: -20px;
  left: 10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid rgba(14, 25, 36, 0.719);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.colorBG:hover + .hideText {
  animation: effect 1s infinite 0.5s;
  position: absolute;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  font-size: 0.7vw;
  outline: 1px rgba(14, 25, 36, 0.719) solid;
  color: rgb(85, 85, 85);
  margin-left: 10px;
  margin-top: 5px;
}

@keyframes effect {
  0% {
    visibility: visible;
  }
}

@media (max-width: 1800px) {
  .hero {
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin: auto;
    width: 80%;
    height: auto;
    position: relative;
    margin: 30px 0;
    height: auto;
  }

  .background {
    width: 80vw;
    height: 1080px;
    padding-bottom: 30px;
    margin: 0px auto;
  }
}
@media (max-width: 1300px) {
  .hero {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 30px 0;
    height: auto;
    padding-bottom: 30px;
  }
  .hideText {
    display: none;
  }
  .background {
    width: 100%;
    height: 1080px;
    margin: 80px auto;
    z-index: -1;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleColorContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }

  .titleColorContainer div i {
    font-size: 1.6vw;

    padding: 10px;
  }

  .titleColor h1 {
    font-size: 1.6vw;

    padding: 15px 0px 15px 15px;
    text-align: right;
  }

  .color {
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 18px;
  }

  .colorBG {
    width: 100%;
  }
  .colorBgTitle {
    font-size: 1.5vw;
  }
  .codePalleteText {
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .inputsBG {
    border-radius: 5px;
    padding: 20px 10px 20px 10px;
    font-weight: 500;
    font-size: 1.5vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .inputsBG div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 10px;
  }
  .inputsBG div code {
    padding: 15px;
  }

  .colorText {
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .optionsPallete {
    flex: 1;

    border-radius: 5px;
    width: 65%;
    margin: auto;
  }
  .secondPallete {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;

    margin: 10px auto;
    height: auto;
    border-radius: 5px;
    width: 65%;
  }

  .previewPalleteText {
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .previewPallete {
    height: 200px;
  }
}
@media (min-width: 3000px) and (max-width: 8040px) {
  .background {
    height: 2160px;
    width: 80vw;
  }
}
@media (min-width: 2048px) and (max-width: 3000px) {
  .background {
    height: 1200px;
    width: 80vw;
  }
}
@media (max-width: 1800px) {
  .background {
    width: 80vw;
  }
  .hero {
    top: 35%;
  }
}
@media (max-width: 1300px) {
  .background {
    width: 100vw;
    height: 1500px;
  }
  .portfolioLink {
    display: none;
  }
  .hero {
    top: 50%;
  }
}
@media (max-width: 1080px) {
  .hero {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 0;
    height: auto;
    padding-bottom: 30px;
  }

  .background {
    width: 100%;
    height: 1500px;
    padding-bottom: 30px;
    margin: 80px auto;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleColorContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }

  .titleColorContainer div i {
    font-size: 2.5vw;
    padding: 10px;
  }

  .titleColor h1 {
    font-size: 2.5vw;
    padding: 15px 0px 15px 15px;
    text-align: right;
  }

  .color {
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 18px;
  }

  .colorBG {
    width: 100%;
  }
  .colorBgTitle {
    font-size: 2vw;
  }

  .codePalleteText {
    font-size: 2.5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .inputsBG {
    border-radius: 5px;
    padding: 20px 10px 20px 10px;
    font-weight: 500;
    font-size: 2vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .inputsBG div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 10px;
  }
  .inputsBG div code {
    padding: 10px;
  }

  .colorText {
    font-size: 2.5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .optionsPallete {
    flex: 1;

    border-radius: 5px;
    width: 85%;
    margin: auto;
  }
  .secondPallete {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;

    margin: 10px auto;
    height: auto;
    border-radius: 5px;
    width: 85%;
  }

  .previewPalleteText {
    font-size: 2.5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .previewPallete {
    height: 200px;
  }
}
@media (max-width: 780px) {
  .hero {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;

    height: auto;
    padding-bottom: 30px;
  }

  .background {
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

  .titleColorContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0px 12px 0px;
  }

  .titleColorContainer div i {
    font-size: 2.7vw;

    padding: 10px;
  }

  .titleColor h1 {
    font-size: 2.7vw;

    padding: 15px 0px 15px 15px;
    text-align: right;
  }

  .color {
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 18px;
  }

  .colorBG {
    width: 100%;
  }
  .colorBgTitle {
    font-size: 2.5vw;
  }

  .codePalleteText {
    font-size: 3vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .inputsBG {
    border-radius: 5px;
    padding: 20px 10px 20px 10px;
    font-weight: 500;
    font-size: 2.5vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .inputsBG div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 10px;
  }
  .inputsBG div code {
    padding: 10px;
  }

  .colorText {
    font-size: 3vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .optionsPallete {
    flex: 1;

    border-radius: 5px;
    width: 95%;
    margin: auto;
  }
  .secondPallete {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;

    margin: 10px auto;
    height: auto;
    border-radius: 5px;
    width: 95%;
  }

  .previewPalleteText {
    font-size: 3vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .previewPallete {
    height: 200px;
  }
}
@media (max-width: 600px) {
  .hero {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    position: relative;
    margin: 0;
    height: auto;
    padding-bottom: 30px;
  }
  .colorBgTitle {
    font-size: 3.5vw;
  }

  .background {
    width: 100%;
    height: 1080px;
    margin: 80px auto;
    z-index: -1;
  }
  .navBarClassic {
    display: none;
  }
  .responsiveNav {
    display: block;
  }

  .titleColorContainer {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px 15px 0px;
  }

  .titleColorContainer div i {
    font-size: 4.5vw;

    padding: 10px;
  }

  .titleColor h1 {
    font-size: 4vw;

    padding: 15px 0px 15px 15px;
    text-align: right;
  }

  .color {
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 18px;
  }

  .colorBG {
    width: 100%;
  }

  .codePalleteText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .inputsBG {
    border-radius: 5px;
    padding: 2.5vw 1.5vw 2.5vw 1.5vw;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .inputsBG div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 10px;
    font-size: 3.3vw;
  }
  .inputsBG div code {
    padding: 10px;
  }

  .colorText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .optionsPallete {
    flex: 1;

    border-radius: 5px;
    width: 95%;
    margin: auto;
  }
  .secondPallete {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;

    margin: 10px auto;
    height: auto;
    border-radius: 5px;
    width: 95%;
  }

  .previewPalleteText {
    font-size: 5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .previewPallete {
    height: 200px;
  }
}
</style>
