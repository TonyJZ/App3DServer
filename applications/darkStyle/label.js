//ES5语法



//ES6
class Label {
    constructor(data = {}) {
        this.labelType = data.labelType || "common";
        this.name = data.name || "---";
        this.title = data.title || "标题";
        this.theme = data.theme || "normal";
        this.info = data.info || {
            state: "正常"
        };
        this.position = data.position || {
            x: -1000,
            y: -2000
        };
    }
    createLabel(id) {
        let temp =
      `<div id="${id}" class="${this.labelType}-wrap ${this.theme}" style="left:${this.position.x}px;top:${this.position.y}px">`;
        if (this.labelType === "common") {//通用label
          temp = `
            <div id="${id}" class="common-box">
              <span>${this.name}</span>       
            </div>
          `              
        }else if(this.labelType === "commonBlue"){//蓝色通用label  用于水滴的label
        let str = '';
        // console.log(JSON.parse(this.name))
        JSON.parse(this.name).forEach((v,i)=>{
          str += (`<li>${(v.value-0)?(v.value-0).toFixed(2):v.value} ${v.unit}</li>`)
        });
          temp = `
            <ul id="${id}" class="common-box common-blue">   
                 ${str}
            </ul>
          `
        }else if(this.labelType === "chartBox"){//图表label
          temp = `
            <div id="${id}" class="common-box">
              <div id="${id}-chart" class="chart-box">
              </div>  
            </div>
          ` 
        }else if(this.labelType === "mainLine"){//多行label
            let str = '';
            JSON.parse(this.name).forEach((v,i)=>{
              str += (`<li meterid="${v.meterId}">${v.meterCode}</li>`)
            });
            
            temp = `
              <div id="${id}" class="common-box">
                <div class="title">${this.title}</div>
                <ul class="main-line-box">
                  ${str}
                <ul>     
              </div>
            `        
        }else if (this.labelType === "valve") {//阀门
          temp +=
          `
                <div class="dot">
                  <div class="${this.labelType}">
                    <span>${this.name}</span>
                    <span>${this.info.state}</span>
                  </div>
                </div>
              </div>
            `;
        } else if (this.labelType === "pump") {//泵
            temp +=
        `
            <div class="dot">
              <div class="pump">
                <p style="background: url(assets/label-icon/pump-${this.theme}.png) no-repeat left center / contain;">${this.info.state}</p>
                <p>${this.name}</p>
                <p><span>${this.info.pressure}MPa</span> <span>${this.info.speed}m³/h</span></p>
                
              </div>
            </div>
          </div>
        `;
        } else if (this.labelType === "tank") {//油罐
            temp +=
        `
            <div class="dot">
              <div class="tanks" style="background-image: url(assets/label-icon/tank-${this.theme}-left.png),url(assets/label-icon/tank-${this.theme}-right.png);
                background-position:left center,right center;
                background-size:contain,contain;
                background-clip:border-box,border-box;
                background-repeat:no-repeat,no-repeat;">
                <div class="bg" style="background:url(assets/label-icon/tank-${this.theme}-mid.png) repeat center center / contain"></div>
                <div class="data-box">
                  <div>${this.name}</div>
                  <div>
                    <span>${this.info.height}mm</span>
                    <span>${this.info.bulk}m³</span>
                    <span>${this.info.temperature}℃</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        }else if(this.labelType === "monitoring-center"){//暗黑主题  监测中心
          temp = `
            <div id="${id}" class="monitoring-center">
              <p class="title">${this.name}</p>
              <table>
                <tbody>
                  <tr class="noise">
                    <td>噪音</td>
                    <td>：</td>
                    <td class="${this.info.noise>80?'warning':''} ">${this.info.noise}dB</td>
                  </tr>
                  <tr class="pm">
                    <td>PM2.5</td>
                    <td>：</td>
                    <td>${this.info['PM2.5']}</td>
                  </tr>
                </tbody>
              </table>
              <img class="arrow" src="./assets/darkStyleImg/icon_down_blue@2x.png" alt="">
            </div>
          `
        }else if(this.labelType === "dark-danger"){//暗黑主题危险
          temp = `
            <div id="${id}"  class="dark-danger">
              ${this.name}
              <img class="arrow" src="./assets/darkStyleImg/icon_down_red@2x.png" alt="">
            </div>
          `
        }else if(this.labelType === "main-building"){//暗黑主题主体建筑
          temp = `
            <div id="${id}" class="main-building" >
              <div class="dot">
                <div class="content-box" style="background:url(${this.info.bgUrl}) no-repeat center center/100%">

                </div>
              </div>
            </div>
          `
        }

        $("#parent").append(temp);

    }

    updateLabel(id, data = {}) {
        if (data.position) {
            $("#" + id).css({
                left: data.position.x + "px",
                top: data.position.y + "px"
            });
        }
        if (data.theme) {
            $("#" + id).attr("class", this.labelType + "-wrap").addClass(data.theme);
        }

    }

    removeLabel(id) {
        $("#" + id).remove();
    }
}


/* function createIcon(id, imgUrl) {
  let div = document.createElement(id);
  div.id =                id;
  div.style.position =    "absolute";
  div.style.color =       "#fff";
  div.style.padding =     "10px";
  div.style.margin =      "0px";
  div.style.height =      "20px";
  div.style.width =       "20px";
  div.style.cursor =      "pointer";
  div.style["border-radius"] =    "50% 50% 2px 50%";
  div.style["font-family"] =      "Courier New";
  div.style["font-size"] =        "large";

  div.style["z-index"] = "100";
  let pic = document.createElement("img");
  pic.style.position =    "absolute";
  pic.style.left =        "6px";
  pic.style.top =         "6px";
  pic.style.height =      "28px";
  pic.setAttribute("src", imgUrl);
  div.appendChild(pic);
  $("#parent").append(div);
  
  return div;
} */

