!<template>
  <div class="pallete">
    <div class="background">
      <div class="titleColor">
        <div class="titleColorContainer">
          <div>
            <h1>Category/BackgroundColor</h1>
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
      <div class="hero">
        <div class="optionsPallete">
          <h1 class="colorText">Settings</h1>
          <div class="colorBG">
            <input class="color" v-model="color" type="color" name="color" />
            <p>{{ color }}</p>
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
            <div>
              <h1 class="codePalleteText">Result</h1>
            </div>

            <div class="inputsBG">
              <div>
                <code
                  ><span style="color: #bef264;">background-color:</span>
                  {{ color }};
                </code>
                <button @click="copyHex()" class="copyHex">Copy</button>
              </div>
              <div>
                <code
                  ><span v-on="convertToRGB()" style="color: #bef264;"
                    >background-color:</span
                  >
                  {{ rgb }};
                </code>

                <button @click="copyRgb()" class="copyRGB">Copy</button>
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
      color: "#ffffff",
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
    copyRgb() {
      navigator.clipboard.writeText("background-color: " + this.rgb + ";");
      alert("Copied to clipboard!");
    },
    copyHex() {
      navigator.clipboard.writeText("background-color: " + this.color + ";");
      alert("Copied to clipboard!");
    },
  },
};
</script>

<style>
.background {
  width: 86%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #1d263d;
}
.titleColor {
  background-color: rgb(96, 10, 255);
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

.rgb {
  padding: 21px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
}
.hero {
  position: absolute;
  top: 50%;
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
.copyRGB {
  padding: 13px;
  background-color: rgb(19, 19, 26);
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  margin-left: 10px;
  width: 100px;
}

.copyHex {
  padding: 13px;
  background-color: rgb(19, 19, 26);
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  margin-left: 10px;
  width: 100px;
}

.hexContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.color {
  width: 50px;
  height: 50px;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #353945;
  color: white;
}

#hex {
  font-size: 0.9vw;
}
#rgb {
  font-size: 0.9vw;
}

.colorBG {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
}
.colorBG p {
  margin-left: 10px;
}

.codePallete {
  color: rgb(255, 255, 255);
}

.codePalleteText {
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.inputsBG {
  background-color: rgba(233, 233, 233, 0.171);
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
  color: rgb(255, 255, 255);
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.optionsPallete {
  flex: 1;
  background-color: rgba(233, 233, 233, 0.171);
  padding: 20px;
  border-radius: 5px;
}
.secondPallete {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgba(233, 233, 233, 0.171);
  padding: 20px;
  border-radius: 5px;
}

.previewPalleteText {
  color: rgb(255, 255, 255);
  font-size: 1.5vw;
  font-weight: 600;
  margin-bottom: 20px;
}

.previewPallete {
  height: 200px;
}
@media (max-width: 1800px) {
  .hero {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: auto;
    background-color: #1d263d;
    position: relative;
    margin: 30px 0;
    height: auto;
    padding-bottom: 30px;
  }

  .background {
    width: 85vw;
    height: 100ch;
    background-color: #1d263d;
    z-index: -1;
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
    background-color: #1d263d;
    position: relative;
    margin: 30px 0;
    height: auto;
    padding-bottom: 30px;
  }

  .background {
    width: 100%;
    height: 100ch;
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
    color: white;
    padding: 10px;
  }

  .titleColor h1 {
    font-size: 1.6vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }

  .rgb {
    padding: 21px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18px;
  }

  .copyRGB {
    padding: 13px;
    background-color: rgb(19, 19, 26);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    width: 100px;
  }

  .copyHex {
    padding: 13px;
    background-color: rgb(19, 19, 26);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    width: 100px;
  }

  .hexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color {
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #353945;
    color: white;
  }

  #hex {
    font-size: 0.9vw;
  }
  #rgb {
    font-size: 0.9vw;
  }

  .colorBG {
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
  }
  .colorBG p {
    margin-left: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .codePalleteText {
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .inputsBG {
    background-color: rgba(233, 233, 233, 0.171);
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
    background-color: #353945;
    width: 100%;
    margin-top: 10px;
  }
  .inputsBG div code {
    padding: 15px;
  }

  .colorText {
    color: rgb(255, 255, 255);
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .optionsPallete {
    flex: 1;
    background-color: rgba(233, 233, 233, 0.171);
    border-radius: 5px;
    width: 65%;
    margin: auto;
  }
  .secondPallete {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: rgba(233, 233, 233, 0.171);
    margin: 10px auto;
    height: auto;
    border-radius: 5px;
    width: 65%;
  }

  .previewPalleteText {
    color: rgb(255, 255, 255);
    font-size: 2vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .previewPallete {
    height: 200px;
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
    background-color: #1d263d;
    position: relative;
    margin: 0;
    height: auto;
    padding-bottom: 30px;
  }

  .background {
    width: 100%;
    height: 100ch;
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
    color: white;
    padding: 10px;
  }

  .titleColor h1 {
    font-size: 2.5vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }

  .rgb {
    padding: 21px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18px;
  }

  .copyRGB {
    padding: 13px;
    background-color: rgb(19, 19, 26);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    width: 100px;
  }

  .copyHex {
    padding: 13px;
    background-color: rgb(19, 19, 26);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    width: 100px;
  }

  .hexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color {
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #353945;
    color: white;
  }

  #hex {
    font-size: 0.9vw;
  }
  #rgb {
    font-size: 0.9vw;
  }

  .colorBG {
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
  }
  .colorBG p {
    margin-left: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .codePalleteText {
    font-size: 2.5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .inputsBG {
    background-color: rgba(233, 233, 233, 0.171);
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
    background-color: #353945;
    width: 100%;
    margin-top: 10px;
  }
  .inputsBG div code {
    padding: 10px;
  }

  .colorText {
    color: rgb(255, 255, 255);
    font-size: 2.5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .optionsPallete {
    flex: 1;
    background-color: rgba(233, 233, 233, 0.171);
    border-radius: 5px;
    width: 85%;
    margin: auto;
  }
  .secondPallete {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: rgba(233, 233, 233, 0.171);
    margin: 10px auto;
    height: auto;
    border-radius: 5px;
    width: 85%;
  }

  .previewPalleteText {
    color: rgb(255, 255, 255);
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
    background-color: #1d263d;
    position: relative;
    margin: 0;
    height: auto;
    padding-bottom: 30px;
  }

  .background {
    width: 100%;
    height: 100ch;
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
    color: white;
    padding: 10px;
  }

  .titleColor h1 {
    font-size: 2.7vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }

  .rgb {
    padding: 21px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18px;
  }

  .copyRGB {
    padding: 13px;
    background-color: rgb(19, 19, 26);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    width: 100px;
  }

  .copyHex {
    padding: 13px;
    background-color: rgb(19, 19, 26);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    width: 100px;
  }

  .hexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color {
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #353945;
    color: white;
  }

  #hex {
    font-size: 0.9vw;
  }
  #rgb {
    font-size: 0.9vw;
  }

  .colorBG {
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
  }
  .colorBG p {
    margin-left: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .codePalleteText {
    font-size: 3vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .inputsBG {
    background-color: rgba(233, 233, 233, 0.171);
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
    background-color: #353945;
    width: 100%;
    margin-top: 10px;
  }
  .inputsBG div code {
    padding: 10px;
  }

  .colorText {
    color: rgb(255, 255, 255);
    font-size: 3vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .optionsPallete {
    flex: 1;
    background-color: rgba(233, 233, 233, 0.171);
    border-radius: 5px;
    width: 95%;
    margin: auto;
  }
  .secondPallete {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: rgba(233, 233, 233, 0.171);
    margin: 10px auto;
    height: auto;
    border-radius: 5px;
    width: 95%;
  }

  .previewPalleteText {
    color: rgb(255, 255, 255);
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
    background-color: #1d263d;
    position: relative;
    margin: 0;
    height: auto;
    padding-bottom: 30px;
  }

  .background {
    width: 100%;
    height: 100ch;
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
    color: white;
    padding: 10px;
  }

  .titleColor h1 {
    font-size: 4vw;
    color: rgb(255, 255, 255);
    padding: 15px 0px 15px 15px;
    text-align: right;
  }

  .rgb {
    padding: 21px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18px;
  }

  .copyRGB {
    padding: 13px;
    background-color: rgb(19, 19, 26);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    width: 100px;
  }

  .copyHex {
    padding: 13px;
    background-color: rgb(19, 19, 26);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    width: 100px;
  }

  .hexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color {
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #353945;
    color: white;
  }

  #hex {
    font-size: 0.9vw;
  }
  #rgb {
    font-size: 0.9vw;
  }

  .colorBG {
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
  }
  .colorBG p {
    margin-left: 10px;
  }

  .codePallete {
    color: rgb(255, 255, 255);
  }

  .codePalleteText {
    font-size: 4vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .inputsBG {
    background-color: rgba(233, 233, 233, 0.171);
    border-radius: 5px;
    padding: 2.5vw 1.5vw 2.5vw 1.5vw;
    font-weight: 500;
    font-size: 3.2vw;
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
    margin-top: 10px;
  }
  .inputsBG div code {
    padding: 10px;
  }

  .colorText {
    color: rgb(255, 255, 255);
    font-size: 4.5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .optionsPallete {
    flex: 1;
    background-color: rgba(233, 233, 233, 0.171);
    border-radius: 5px;
    width: 95%;
    margin: auto;
  }
  .secondPallete {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: rgba(233, 233, 233, 0.171);
    margin: 10px auto;
    height: auto;
    border-radius: 5px;
    width: 95%;
  }

  .previewPalleteText {
    color: rgb(255, 255, 255);
    font-size: 4.5vw;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .previewPallete {
    height: 200px;
  }
}
</style>
