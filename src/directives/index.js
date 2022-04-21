import dayjs from "dayjs";
//格式化时间戳
export default function registerFormatTime(app) {
  app.directive("format-time", {
    mounted(el, bingings) {
      let formatStr = bingings.value;
      if (!formatStr) {
        formatStr = "YYYY-MM-DD HH-ss-mm";
      }
      const value = el.textContent;
      const timeStamp = parseInt(value);
      if (timeStamp.length === 10) {
        timeStamp = timeStamp * 10;
      }
      el.textContent = dayjs(timeStamp).format(formatStr);
    },
  });
}
