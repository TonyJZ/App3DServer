class Label {
  constructor(data) {
    this.labelType = data.labelType || 'valve';
    this.name = data.name || 'DA2';
    this.theme = data.theme || 'normal';
    this.info = data.info || {
      state: '正常'
    };
    this.position = data.position || {
      x: 100,
      y: 200
    };
  }
  createLabel(id) {
    let temp =
      `<div id="${id}" class="${this.labelType}-wrap ${this.theme}" style="left:${this.position.x}px;top:${this.position.y}px">`;
    if (this.labelType === 'valve') {
      temp +=
        `
              <div class="dot">
                <div class="valve">
                  <span>${this.name}</span>
                  <span>${this.info.state}</span>
                </div>
              </div>
            </div>
          `;
    } else if (this.labelType === 'pump') {
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
    }else if(this.labelType === 'tank'){
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
    }

    $('#parent').append(temp)

  }

  updateLabel(id, data = {}) {
    if (data.position) {
      $('#' + id).css({
        left: data.position.x + 'px',
        top: data.position.y + 'px'
      });
    }
    if (data.theme) {
      $('#' + id).attr('class', this.labelType + '-wrap').addClass(data.theme);
    }

  }

  removeLabel(id) {
    $('#' + id).remove();
  }
}

// let valveLabel = new Label({
//   labelType: 'valve'
// });
// let pumpLabel = new Label({
//   labelType: 'pump',
//   theme:'normal',
//   position:{
//     x:400,
//     y:200
//   },
//   info: {
//     state: '正常',
//     pressure: 600,
//     speed: 12.5
//   }
// });
// let tankLabel = new Label({
//   labelType: 'tank',
//   theme:'abnormal',
//   info:{
//     height:600,
//     bulk:80,
//     temperature:19.5
//   },
//   position:{
//     x:400,
//     y:400
//   },
// });
// valveLabel.createLabel('valve');
// pumpLabel.createLabel('pump');
// tankLabel.createLabel('tank');

// valveLabel.createLabel('valve1');
// valveLabel.updateLabel('valve1', {
//   theme: 'closed',
//   position: {
//     x: 100,
//     y: 400
//   },
// });
// setTimeout(function() {
//   valveLabel.removeLabel('valve1')
// }, 5000);
