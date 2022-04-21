let plugin = {
  install(app) {
    app.config.globalProperties.$name = "fdw";
  },
};
export default {
  plugin,
};
