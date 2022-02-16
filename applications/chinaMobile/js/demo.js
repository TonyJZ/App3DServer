$(document).ready(function() {
    // first example
    $("#browser").treeview();

    // second example
    $("#navigation").treeview({
        persist: "location",
        collapsed: true,
        unique: true
    });

    $("#browser").on("click", "* li", function(e) {
        e.stopPropagation();
        // get device name
        let deviceName = $(this)
            .children("span")
            .attr("name");

        // if device does not exist do nothing
        if (!myApp.ifObjectExists(deviceName)) {
            return;
        }


        // close attribute box
        $(".tab-box").hide();
        $("li").removeClass("current");
        $(this).addClass("current");
        let title = $(this)
            .children(".file")
            .text();

        // Fly to the device:
        myApp.locate(deviceName);

        if (title.indexOf("UPS-") > -1) {
            $(".ups .dialog-header>i").text(title);
            $(".ups").fadeIn(300, function() {
                tabEvent(".ups");
            });
        } else if (title.indexOf("摄像头") > -1) {
            $(".sxt .dialog-header>i").text(title);
            $(".sxt").fadeIn(300, function() {
                tabEvent(".sxt");
            });
        } else if (title.indexOf("温湿度传感器") > -1) {
            $(".wdcgq .dialog-header>i").text(title);
            $(".wdcgq").fadeIn(300, function() {
                tabEvent(".wdcgq");
            });
        } else if (title.indexOf("烟感") > -1) {
            $(".yg .dialog-header>i").text(title);
            $(".yg").fadeIn(300, function() {
                tabEvent(".yg");
            });
        } else if (title.indexOf("配电柜") > -1) {
            $(".pdg .dialog-header>i").text(title);
            $(".pdg").fadeIn(300, function() {
                tabEvent(".pdg");
            });
        } else if (title.indexOf("漏水绳") > -1) {
            $(".lss .dialog-header>i").text(title);
            $(".lss").fadeIn(300, function() {
                tabEvent(".lss");
            });
        } else if (title.indexOf("蓄电池") > -1) {
            $(".xdc .dialog-header>i").text(title);
            $(".xdc").fadeIn(300, function() {
                tabEvent(".xdc");
            });
        } else if (title.indexOf("机房-A组列头柜01") > -1) { // Cabinet 1
            $(".cabinetA .dialog-header>i").text(title);
            $(".cabinetA").fadeIn(300, function() {
                tabEvent(".cabinetA");
            });
        } else if (title.indexOf("机房-B组列头柜01") > -1) { // Cabinet 1
            $(".cabinetB .dialog-header>i").text(title);
            $(".cabinetB").fadeIn(300, function() {
                tabEvent(".cabinetB");
            });
        } else if (title.indexOf("DELL PowerEdge 1U") > -1) { // Dell PowerEdge
            $(".dellPowerEdge .dialog-header>i").text(title);
            $(".dellPowerEdge").fadeIn(300, function() {
                tabEvent(".dellPowerEdge");
            });
        } else if (title.indexOf("交换机01") > -1) { // Switches
            $(".switch .dialog-header>i").text(title);
            $(".switch").fadeIn(300, function() {
                tabEvent(".switch");
            });
        } else {
            $(".default .dialog-header>i").text(title);
            $(".default").fadeIn(300, function() {
                tabEvent(".default");
            });
        }
        // $('.ups').fadeIn(300, function() {
        //   tabEvent()
        // })
    });
    //	侧边栏弹�收起
    $(".icon").click(function() {
        if ($(".tree-box").position().left === 64) {
            $(this).removeClass("hight-light");
            $(".tree-box").animate(
                {
                    left: -200
                },
                300
            );
            $(".footer-box").animate(
                {
                    bottom: 0
                },
                300
            );
        } else {
            $(this).addClass("hight-light");
            $(".tree-box").animate(
                {
                    left: 64
                },
                300
            );
            $(".footer-box").animate(
                {
                    bottom: -110
                },
                300
            );
        }
    });
    $(".title>span").click(function() {
        $(".icon").trigger("click");
    });
    //	弹窗关闭
    $(".dialog-header .close").click(function() {
        $(".dialog-box").fadeOut();
        $(".opc").fadeOut();
    });
    //	点击弹出表格弹窗
    $(".footer-box").on("click", ".click-device-box", function() {
        let devices = myApp.app3dApp.queryForObject("^(cabinet_[1-2]|server_[1-4]u|exchanger0[1-9]|camera00[1-7]|flood_detector00[0-9]|smoke_detector00[1-9]|temp_humidity_monitor00[1-3]|UPS00[1-9]|distribution_cabinet00[1-4]|battery0[0-2][0-9])$");
        myApp.app3dApp.showOutline(devices, 0x0061ff);
    });
    //	点击弹出图表弹窗
    $(".footer-box").on("click", ".click-chart-box", function() {
        $(".dialog-box").hide();
        var title = $(this)
            .children("i")
            .text();
        $(".chart-box .dialog-header i").text(title);
        $(".chart-box").fadeIn(300, function() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("charts"));
            // 指定图表的配置项和数�
            var option = {
                grid: {
                    show: false,
                    top: "20px",
                    left: "20px",
                    right: "20px",
                    bottom: "0px",
                    borderWidth: 0,
                    containLabel: true
                },
                xAxis: {
                    nameTextStyle: {
                        color: "#2A2E3F"
                    },
                    axisLabel: {
                        color: "#2A2E3F",
                        interval: 0,
                        formatter: function(value) {
                            var ret = ""; // 拼接加\n返回的类目项
                            var maxLength = 1; // 每项显示文字个数
                            var valLength = value.length; // X轴类目项的文字个�
                            var rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
                            if (rowN > 1) {
                                // 如果类目项的文字大于3,
                                for (var i = 0; i < rowN; i++) {
                                    var temp = ""; // 每次截取的字符串
                                    var start = i * maxLength; // 开始截取的位置
                                    var end = start + maxLength; // 结束截取的位�
                                    // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                    temp = value.substring(start, end) + "\n";
                                    ret += temp; // 凭借最终的字符�
                                }
                                return ret;
                            } else {
                                return value;
                            }
                        }
                    },
                    data: [
                        "服务器",
                        "机柜",
                        "温湿度传感器",
                        "列头柜",
                        "门禁",
                        "漏水",
                        "精密空调",
                        "烟感",
                        "UPS",
                        "摄像头",
                        "电池",
                        "适配电柜"
                    ]
                },
                yAxis: {
                    type: "value",
                    name: "",
                    nameTextStyle: {
                        color: "#2A2E3F"
                    },
                    axisLabel: {
                        color: "#2A2E3F"
                    }
                },
                series: [
                    {
                        name: "数量",
                        type: "bar",
                        barMaxWidth: "30px",
                        itemStyle: {
                            normal: {
                                color: "#7a8ad7"
                            }
                        },
                        data: [270, 80, 13, 12, 9, 4, 15, 14, 7, 24, 4, 6]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表�
            myChart.setOption(option);
        });
    });
    //	点击弹出表格弹窗
    $(".footer-box").on("click", ".click-table-box", function() {
        $(".dialog-box").hide();
        var title = $(this)
            .children("i")
            .text();
        $(".table-box .dialog-header i").text(title);
        $(".table-box").fadeIn();
    });
    //	点击弹出百分比弹�
    $(".footer-box").on("click", ".click-energy-box", function() {
        $(".dialog-box").hide();
        var title = $(this)
            .children("i")
            .text();
        $(".energy-box .dialog-header i").text(title);
	    $(".energy-box").fadeIn();
	    if (myApp.showingStorageSpace) {
            myApp.toggleStorageSpace();
        }
        myApp.energyCubeFeature.showEnergyCube(true);
    });

    $(".footer-box").on("click", ".click-storage-box", function() {
        $(".dialog-box").hide();
        var title = $(this)
            .children("i")
            .text();
        $(".percent-box .dialog-header i").text(title);
	    $(".percent-box").fadeIn();
	    myApp.energyCubeFeature.showEnergyCube(false);
        if (!myApp.showingStorageSpace) {
            myApp.toggleStorageSpace();
        }
    });

    $(".percent-box .close").click(function() {
        $(".percent-box").fadeOut();
        $(".opc").fadeOut();
	    if (myApp.showingStorageSpace) {
            myApp.toggleStorageSpace();
        }
	    myApp.energyCubeFeature.showEnergyCube(false);
    });

    $(".energy-box .close").click(function() {
        $(".energy-box").fadeOut();
	    $(".opc").fadeOut();
	    if (myApp.showingStorageSpace) {
            myApp.toggleStorageSpace();
        }
        myApp.energyCubeFeature.showEnergyCube(false);
    });

    //	tab栏弹窗交�
    //   tabEvent()
    function tabEvent(root) {
        $(".tab-list").unbind("click");
        $(".root-list").unbind("click");
        $(".tab-list").on("click", "li", function() {
            $(this)
                .addClass("selected")
                .siblings("li")
                .removeClass("selected");
            var index = $(this).index();
            $(root + " .content-list>li:eq(" + index + ")")
                .css("display", "block")
                .siblings("li")
                .css("display", "none");
        });
        $(".root-list").on("click", "li .root-icon", function() {
            if (
                $(this)
                    .text()
                    .trim() === "-"
            ) {
                $(this).text("+");
                $(this)
                    .parent("div")
                    .siblings(".sub-list")
                    .slideUp(100);
            } else {
                $(this).text("-");
                $(this)
                    .parent("div")
                    .siblings(".sub-list")
                    .slideDown(100);
            }
        });
    }
});
