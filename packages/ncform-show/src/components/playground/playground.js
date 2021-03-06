/**
 * <playground></playground>
 */
export default {
  /* ====================== 生命周期 ====================== */

  created() {
    // 在这里做一些跟DOM无关的初始化, 比如获取初始化数据
  },

  mounted() {
    // 在这里做一些跟DOM有关的初始化
    setTimeout(() => {
      this.createEditor();
      this.templateChange("0");
    }, 0);
  },

  destroyed() {
    // 在这里销毁无用的资源，比如setTimeout返回的值
  },

  /* ====================== 引用组件 ====================== */

  components: {},

  /* ====================== 数据绑定 ====================== */

  props: {},

  data() {
    return {
      jsonValue: "",
      ncformSchema: {
        type: "object",
        properties: {
          username: {
            type: "string",
            ui: {
              columns: 6,
              label: "username"
            }
          }
        }
      },
      ncformValue: {},

      selectVal: "0",
      options: [
        {
          value: "0",
          label: "基础使用"
        },
        {
          value: "1",
          label: "基础使用-丰富显示"
        },
        {
          value: "2",
          label: "基础使用-多列布局"
        },
        {
          value: "22",
          label: "基础使用-媒体预览"
        },
        {
          value: "3",
          label: "基础使用-标签居左"
        },
        {
          value: "4",
          label: "基础使用-校验规则"
        },
        {
          value: "5",
          label: "基础使用-数组类型"
        },
        {
          value: "6",
          label: "基础使用-表格数组"
        },
        {
          value: "7",
          label: "基础使用-标签数组"
        },
        {
          value: "8",
          label: "高级玩法-控件交互 dx表达式"
        },
        {
          value: "9",
          label: "高级玩法-数组项交互 dx表达式"
        },
        {
          value: "10",
          label: "高级玩法-下拉框值交互 dx表达式"
        },
        {
          value: "101",
          label: "高级玩法-校验关联 dx表达式"
        },
        {
          value: "11",
          label: "高级玩法-自定义校验规则 dx表达式"
        },
        {
          value: "12",
          label: "高级玩法-全局常量 dx表达式"
        }
      ],
      templates: {
        "0": {
          type: "object",
          properties: {
            name: {
              type: "string"
            },
            email: {
              type: "string"
            },
            age: {
              type: "integer"
            },
            adult: {
              type: "boolean"
            }
          }
        },
        "1": {
          type: "object",
          properties: {
            name: {
              type: "string",
              ui: {
                label: "姓名",
                description: "请填写你的姓名",
                placeholder: "姓名"
              }
            },
            email: {
              type: "string",
              ui: {
                label: "邮件"
              }
            },
            age: {
              type: "integer",
              default: 18,
              ui: {
                label: "年龄"
              }
            },
            adult: {
              type: "boolean",
              ui: {
                label: "是否成年",
                help: {
                  show: true,
                  text: "?",
                  content: "成年才可以玩农药啊"
                }
              }
            }
          }
        },
        "2": {
          type: "object",
          properties: {
            firstname: {
              type: "string",
              ui: {
                columns: 3,
                label: "姓名",
                placeholder: "姓"
              }
            },
            lastname: {
              type: "string",
              ui: {
                columns: 3,
                showLabel: false,
                placeholder: "名"
              }
            },
            email: {
              type: "string",
              ui: {
                columns: 6,
                label: "邮件"
              }
            },
            age: {
              type: "integer",
              ui: {
                columns: 6,
                label: "年龄"
              }
            },
            adult: {
              type: "boolean",
              ui: {
                columns: 6,
                label: "是否成年",
                help: {
                  show: true,
                  text: "?",
                  content: "成年才可以玩农药啊"
                }
              }
            }
          }
        },

        "22": {
          type: "object",
          properties: {
            image: {
              type: "string",
              default:
                "https://upload-images.jianshu.io/upload_images/2195795-e3c500e4b7d17b2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              ui: {
                label: "图片",
                columns: 6,
                preview: {
                  type: "image",
                  value: "dx: {{$self}}",
                  clearable: true,
                  outward: {
                    width: 150,
                    height: 150,
                    shape: "circle"
                  }
                }
              }
            },
            video: {
              type: "string",
              default: "https://www.w3schools.com/html/mov_bbb.mp4",
              ui: {
                label: "视频",
                columns: 6,
                preview: {
                  type: "video"
                }
              }
            },
            audio: {
              type: "string",
              default: "https://www.w3schools.com/html/mov_bbb.mp4",
              ui: {
                label: "音频",
                columns: 6,
                preview: {
                  type: "audio"
                }
              }
            },
            link: {
              type: "string",
              default: "https://www.baidu.com",
              ui: {
                label: "链接",
                columns: 6,
                preview: {
                  type: "link"
                }
              }
            }
          }
        },

        "3": {
          type: "object",
          properties: {
            firstname: {
              type: "string",
              ui: {
                label: "姓名",
                placeholder: "姓"
              }
            },
            lastname: {
              type: "string",
              ui: {
                showLabel: false,
                placeholder: "名"
              }
            },
            email: {
              type: "string",
              ui: {
                label: "邮件"
              }
            },
            age: {
              type: "integer",
              ui: {
                label: "年龄"
              }
            },
            adult: {
              type: "boolean",
              ui: {
                label: "是否成年",
                help: {
                  show: true,
                  text: "?",
                  content: "成年才可以玩农药啊"
                }
              }
            }
          },
          ui: {
            widgetConfig: {
              layout: "h"
            }
          }
        },
        "4": {
          type: "object",
          properties: {
            name: {
              type: "string",
              ui: {
                label: "姓名",
                description: "请填写你的姓名",
                placeholder: "姓名"
              },
              rules: {
                required: true,
                minLength: 10
              }
            },
            email: {
              type: "string",
              ui: {
                label: "邮件"
              },
              rules: {
                required: true,
                email: {
                  value: true,
                  errMsg: "请填写有效的邮件地址"
                }
              }
            },
            age: {
              type: "integer",
              ui: {
                label: "年龄"
              }
            },
            adult: {
              type: "boolean",
              ui: {
                label: "是否成年",
                help: {
                  show: true,
                  text: "?",
                  content: "成年才可以玩农药啊"
                }
              }
            }
          }
        },
        "5": {
          type: "object",
          properties: {
            user: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    ui: {
                      label: "姓名",
                      description: "请填写你的姓名",
                      placeholder: "姓名"
                    },
                    rules: {
                      required: true
                    }
                  },
                  email: {
                    type: "string",
                    ui: {
                      label: "邮件"
                    },
                    rules: {
                      required: true,
                      email: true
                    }
                  },
                  age: {
                    type: "integer",
                    ui: {
                      label: "年龄"
                    }
                  },
                  adult: {
                    type: "boolean",
                    ui: {
                      label: "是否成年",
                      help: {
                        show: true,
                        text: "?",
                        content: "成年才可以玩农药啊"
                      }
                    }
                  }
                },
                ui: {
                  label: "用户"
                }
              },
              ui: {
                showLegend: false,
                noLabelSpace: true
              }
            }
          }
        },
        "6": {
          type: "object",
          properties: {
            user: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    ui: {
                      label: "姓名",
                      description: "请填写你的姓名",
                      placeholder: "姓名"
                    },
                    rules: {
                      required: true
                    }
                  },
                  email: {
                    type: "string",
                    ui: {
                      label: "邮件"
                    },
                    rules: {
                      required: true,
                      email: true
                    }
                  },
                  age: {
                    type: "integer",
                    ui: {
                      label: "年龄"
                    }
                  },
                  adult: {
                    type: "boolean",
                    ui: {
                      label: "是否成年",
                      help: {
                        show: true,
                        text: "?",
                        content: "成年才可以玩农药啊"
                      }
                    }
                  }
                }
              },
              ui: {
                showLegend: false,
                noLabelSpace: true,
                widget: "array-table",
                widgetConfig: {
                  disableCollapse: true
                }
              }
            }
          }
        },
        "7": {
          type: "object",
          properties: {
            user: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    ui: {
                      label: "姓名",
                      description: "请填写你的姓名",
                      placeholder: "姓名"
                    },
                    rules: {
                      required: true
                    }
                  },
                  email: {
                    type: "string",
                    ui: {
                      label: "邮件"
                    },
                    rules: {
                      required: true,
                      email: true
                    }
                  },
                  age: {
                    type: "integer",
                    ui: {
                      label: "年龄"
                    }
                  },
                  adult: {
                    type: "boolean",
                    ui: {
                      label: "是否成年",
                      help: {
                        show: true,
                        text: "?",
                        content: "成年才可以玩农药啊"
                      }
                    }
                  }
                },
                ui: {
                  label: "用户"
                }
              },
              ui: {
                showLegend: false,
                noLabelSpace: true,
                widget: "array-tabs"
              }
            }
          }
        },
        "8": {
          type: "object",
          properties: {
            age: {
              type: "integer",
              ui: {
                label: "年龄",
                description: "大于18岁才能继续填写"
              }
            },
            gameInfo: {
              type: "object",
              properties: {
                game: {
                  type: "string",
                  ui: {
                    label: "喜欢游戏",
                    description: "填写解锁"
                  }
                },
                gameAge: {
                  type: "integer",
                  ui: {
                    label: "游戏年龄",
                    disabled: "dx: !{{$root.gameInfo.game}}"
                  }
                }
              },
              ui: {
                legend: "游戏信息",
                hidden: "dx: !{{$root.age}} || {{$root.age}} < 18"
              }
            }
          }
        },
        "9": {
          type: "object",
          properties: {
            user: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  adult: {
                    type: "boolean",
                    ui: {
                      label: "是否成年",
                      help: {
                        show: true,
                        text: "?"
                      }
                    }
                  },
                  gameName: {
                    type: "string",
                    ui: {
                      label: "喜欢游戏",
                      disabled: "dx: !{{$root.user[i].adult}}"
                    }
                  },
                  gameAge: {
                    type: "integer",
                    ui: {
                      label: "游戏年龄",
                      disabled: "dx: !{{$root.user[i].adult}}"
                    }
                  }
                }
              },
              ui: {
                showLegend: false,
                noLabelSpace: true,
                widget: "array-table"
              }
            }
          }
        },
        "10": {
          type: "object",
          properties: {
            province: {
              type: "string",
              ui: {
                label: "省份",
                widget: "select",
                widgetConfig: {
                  itemLabelField: "name", // 项数据表示label的字段
                  itemValueField: "id", // 项数据表示value的字段
                  enumSourceRemote: {
                    // 远程数据源
                    remoteUrl: "/api/test/getProvinces", // 如果是远程访问，则填写该url
                    paramName: "keyword" // 请求参数名，默认是keyword
                  }
                }
              }
            },
            city: {
              type: "string",
              ui: {
                label: "城市",
                widget: "select",
                widgetConfig: {
                  itemLabelField: "name", // 项数据表示label的字段
                  itemValueField: "id", // 项数据表示value的字段
                  enumSourceRemote: {
                    // 远程数据源
                    remoteUrl: "/api/test/getCities", // 如果是远程访问，则填写该url
                    paramName: "keyword", // 请求参数名，默认是keyword
                    otherParams: {
                      provinceId: "dx: {{$root.province}}"
                    }
                  }
                }
              }
            }
          }
        },
        "101": {
          type: "object",
          properties: {
            isRequired: {
              type: "boolean",
              ui: {
                label: "是否必填",
                linkFields: [
                  {
                    fieldPath: "num_1",
                    rules: ["required"]
                  },
                  {
                    fieldPath: "num_2",
                    rules: ["required"]
                  }
                ]
              }
            },
            num_1: {
              type: "number",
              ui: {
                description: "num_1 >= num_2",
                columns: 6,
                linkFields: [
                  {
                    fieldPath: "num_2",
                    rules: ["maximum"]
                  }
                ]
              },
              rules: {
                required: {
                  value: "dx: {{$root.isRequired}}"
                },
                minimum: {
                  value: "dx: {{$root.num_2}} || 0",
                  errMsg: "num_1 >= num_2"
                }
              }
            },
            num_2: {
              type: "number",
              ui: {
                columns: 6,
                linkFields: [
                  {
                    fieldPath: "num_1",
                    rules: ["minimum"]
                  }
                ]
              },
              rules: {
                required: {
                  value: "dx: {{$root.isRequired}}"
                },
                maximum: {
                  value: "dx: {{$root.num_1}} || 0",
                  errMsg: "num_2 <= num_1"
                }
              }
            }
          }
        },
        "11": {
          type: "object",
          properties: {
            startTime: {
              type: "string",
              ui: {
                widget: "date-picker"
              },
              rules: {
                customRule: [
                  {
                    script:
                      "dx: !{{$root.endTime}} || {{$root.endTime}} >= {{$root.startTime}}", // 支持dx表达式
                    errMsg: "开始日期必须小于等于结束日期", // 验证错误信息
                    linkItems: [
                      // 当触发校验时，同时触发这些关联的项进行校验
                      {
                        fieldPath: "endTime", // 关联项
                        customRuleIdx: 0 // 触发该项的自定义验证规则的索引
                      }
                    ]
                  }
                ]
              }
            },
            endTime: {
              type: "string",
              ui: {
                widget: "date-picker"
              },
              rules: {
                customRule: [
                  {
                    script:
                      "dx: !{{$root.startTime}} || {{$root.endTime}} >= {{$root.startTime}}", // 支持dx表达式
                    errMsg: "结束日期必须大于等于开始日期", // 验证错误信息
                    linkItems: [
                      // 当触发校验时，同时触发这些关联的项进行校验
                      {
                        fieldPath: "startTime", // 关联项
                        customRuleIdx: 0 // 触发该项的自定义验证规则的索引
                      }
                    ]
                  }
                ]
              }
            },
            arrayItems: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  startTime: {
                    type: "string",
                    ui: {
                      widget: "date-picker"
                    },
                    rules: {
                      customRule: [
                        {
                          script:
                            "dx: !{{$root.arrayItems[i].endTime}} || {{$root.arrayItems[i].endTime}} >= {{$root.arrayItems[i].startTime}}", // 支持dx表达式
                          errMsg: "开始日期必须小于等于结束日期", // 验证错误信息
                          linkItems: [
                            // 当触发校验时，同时触发这些关联的项进行校验
                            {
                              fieldPath: "arrayItems[i].endTime", // 关联项
                              customRuleIdx: 0 // 触发该项的自定义验证规则的索引
                            }
                          ]
                        }
                      ]
                    }
                  },
                  endTime: {
                    type: "string",
                    ui: {
                      widget: "date-picker"
                    },
                    rules: {
                      customRule: [
                        {
                          script:
                            "dx: !{{$root.arrayItems[i].startTime}} || {{$root.arrayItems[i].endTime}} >= {{$root.arrayItems[i].startTime}}", // 支持dx表达式
                          errMsg: "结束日期必须大于等于开始日期", // 验证错误信息
                          linkItems: [
                            // 当触发校验时，同时触发这些关联的项进行校验
                            {
                              fieldPath: "arrayItems[i].startTime", // 关联项
                              customRuleIdx: 0 // 触发该项的自定义验证规则的索引
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              },
              ui: {
                showLabel: false,
                legend: "数组项",
                widget: "array-table",
                widgetConfig: {
                  collapsed: true
                }
              }
            }
          }
        },
        "12": {
          type: "object",
          properties: {
            age: {
              type: "string",
              ui: {
                placeholder: 'dx: "年龄必须大于" + {{$const.ageLimit}}'
              },
              rules: {
                customRule: [
                  {
                    script: "dx: {{$root.age}} > {{$const.ageLimit}}", // 支持dx表达式
                    errMsg: "请填写正确的年龄" // 验证错误信息
                  }
                ]
              }
            }
          },
          globalConfig: {
            constants: {
              ageLimit: 18
            }
          }
        }
      }
    };
  },

  /* ====================== 事件处理 ====================== */

  methods: {
    createEditor() {
      this.$options.editor = window.ace.edit(this.$refs.editor);
      this.$options.editor.$blockScrolling = Infinity;
    },
    templateChange(v) {
      this.$options.editor.setValue(
        JSON.stringify(this.$data.templates[v], null, 2),
        1
      );
      this.$data.ncformSchema = JSON.parse(this.$options.editor.getValue());
      this.$data.ncformValue = {};
    },
    createForm() {
      const value = this.$options.editor.getValue();
      try {
        this.$data.ncformSchema = JSON.parse(value);
      } catch (err) {
        alert("不是有效的JSON数据.");
        throw new Error(`createForm Error:${err}`);
      }
    },
    getFormData() {
      this.$ncformValidate("preview-form").then(res => {
        if (res.result) {
          const data = JSON.stringify(this.$data.ncformValue, null, 2);
          alert(data);
        }
      });
    }
  },

  watch: {}
};
