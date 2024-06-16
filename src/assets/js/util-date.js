export default {


    //如果时间是 一位数则补充0
    //1 返回 01
    dateIsSingle(date) {
        return date < 10 ? "0" + date : date;
    },

    //字符串型日期数组转字符串
    stringArrayToString(date) {
        return date instanceof Array && date.length === 2 ? date[0] + " - " + date[1] : "";
    },

    //时间转为年月日字符串
    dateToYMDString(date) {
        let year = date.getFullYear();
        let month = this.dateIsSingle(date.getMonth() + 1);
        let day = this.dateIsSingle(date.getDate());
        return year + "-" + month + "-" + day;
    },

    //跨月时间转化为 年月日 - 年月日
    rangeDateToYMDString(date) {
        let startDate = date[0];
        let endDate = date[1];
        let startYear = startDate.getFullYear();
        let startMonth = this.dateIsSingle(startDate.getMonth() + 1);
        let startDay = this.dateIsSingle(startDate.getDate());

        let endYear = endDate.getFullYear();
        let endMonth = this.dateIsSingle(endDate.getMonth() + 1);
        let endDay = this.dateIsSingle(endDate.getDate());
        return startYear + "-" + startMonth + "-" + startDay + " - " + endYear + "-" + endMonth + "-" + endDay;
    },

    //获取当前时间转化为 年月
    dateToYM: function (date) {
        let year = date.getFullYear();
        let month = this.dateIsSingle(date.getMonth() + 1);
        return year + "-" + month;
    },
    //获取周几
    getWeekDay: function (date) {
        var weekArray = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
        var week = weekArray[new Date(date).getDay()];//注意此处必须是先new一个Date
        return week;
    },
    dateSectionStrToDateArray: function (dateSectionStr) {
        let start = dateSectionStr.substring(0, dateSectionStr.length / 2).trim()
        let end = dateSectionStr.substring(dateSectionStr.length / 2 + 1).trim()
        let dateArray = new Array(2)
        return dateArray
    },

    //获取时间的前后 day 天的 String字符串
    getAroundDateToYMD: function (date, day) {
        const dateArray = new Array(2);
        let nowDate = new Date(date);
        dateArray[0] = this.dateToYMDString(new Date(nowDate.getTime() - 24 * 60 * 60 * 1000 * day))
        dateArray[1] = this.dateToYMDString(new Date(nowDate.getTime() + 24 * 60 * 60 * 1000 * day));
        return dateArray
    },
    //获取时间前后 day 天的日期
    getAroundDate: function (date, day) {
        const dateArray = new Array(2);
        const nowDate = new Date(date);
        dateArray[0] = new Date(nowDate.getTime() - 24 * 60 * 60 * 1000 * day);
        dateArray[1] = new Date(nowDate.getTime() + 24 * 60 * 60 * 1000 * day);
        return dateArray;
    },

    //获取当月第一天最后一天日期
    //返回 字符串数组
    getMonthStartEndDayStrArray() {
        let nowDate = new Date();
        let year = nowDate.getFullYear();
        let month = this.dateIsSingle(nowDate.getMonth() + 1);
        let lastDay = new Date(year, nowDate.getMonth()+1, 0).getDate();
        return [year + "-" + month + "-01", year + "-" + month + "-" + lastDay];
    },
    //获取当月第一天最后一天日期
    //返回 字符串
    getMonthStartEndDayStr() {
        let nowDate = new Date();
        let year = nowDate.getFullYear();
        let month = this.dateIsSingle(nowDate.getMonth() + 1);
        let lastDay = new Date(year, nowDate.getMonth()+1, 0).getDate();
        return year + "-" + month + "-01 - " + year + "-" + month + "-" + lastDay;
    },
    //获取当前月第一天和最后一天
    //返回Date型数组
    getMonthStartEndDayDateArray(){
        let oneDay=new Date();
        oneDay.setDate(1);
        let lastDay=new Date();
        lastDay.setMonth(lastDay.getMonth()+1)
        lastDay.setDate(0);
        return [oneDay,lastDay];
    },
    //获取当月第一天和今天的日期
    //发那会字符串
    getMonthStartTodayStr() {
        let nowDate = new Date();
        let year = nowDate.getFullYear();
        let month = this.dateIsSingle(nowDate.getMonth() + 1);
        let lastDay = new Date(year, nowDate.getMonth()+1, 0).getDate();
        return year + "-" + month + "-01 - " + year + "-" + month + "-" + nowDate.getDate();
    },
    //参数是 加了几天，结果返回2020-01-01这样格式的日期。
    addDayCount(date,AddDayCount) {
        date.setDate(date.getDate() + AddDayCount);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        return date.getFullYear() + "-" + month + "-" + day;
    },
    //获取当月日期 [2021-09,2021-09]
    //返回 字符串数组
    getMonthStrArray() {
        let nowDate = new Date();
        let year = nowDate.getFullYear();
        let month = this.dateIsSingle(nowDate.getMonth() + 1);
        return [year + "-" + month , year + "-" + month ];
    },
    //获取当月日期 "2021-09 - 2021-09"
    //返回 字符串
    getMonthStr() {
        let nowDate = new Date();
        let year = nowDate.getFullYear();
        let month = this.dateIsSingle(nowDate.getMonth() + 1);
        return year + "-" + month +" - "+ year + "-" + month ;
    },
}