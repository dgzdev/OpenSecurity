const doc = document;
const nav = navigator;

const GetUserProperties = () => {
    const UserTime = new Date();
    const UserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const UserLanguage = navigator.language;
    const UserBrowser = navigator.userAgent;
    const UserPlatform = navigator.platform; 
    const UserCookiesEnabled = navigator.cookieEnabled;
    const UserScreenResolution = `${window.screen.width}x${window.screen.height}`;
    const UserScreenColorDepth = window.screen.colorDepth;
    
    const Properties = {
        UserTime,
        UserTimeZone,
        UserLanguage,
        UserBrowser,
        UserPlatform,
        UserCookiesEnabled,
        UserScreenResolution,
        UserScreenColorDepth
    };
    return Properties;
}

class TimeManager {
    constructor() {}
    IsMorning(hours) {
        return hours >= 6 && hours < 12
    }
    IsAfternoon(hours) {
        return hours >= 12 && hours < 18
    }
    IsEvening(hours) {
        return hours >= 18 && hours < 24
    }
    IsNight(hours) {
        return hours >= 0 && hours < 6
    }

    GetMessage(hours) {
        const Morning = "Good Morning";
        const Afternoon = "Good Afternoon";
        const Evening = "Good Evening";
        const Night = "Good Night";

        // Use self to access class methods
        if (this.IsMorning(hours)) {
            return Morning;
        }
        else if (this.IsAfternoon(hours)) {
            return Afternoon;
        }
        else if (this.IsEvening(hours)) {
            return Evening;
        }
        else if (this.IsNight(hours)) {
            return Night;
        }
        return "Error! Please reload the page."
    }
}

var UserProperties = GetUserProperties();
var CurrentHours = UserProperties.UserTime.getHours();

const Timer = new TimeManager();
console.log(Timer.GetMessage(CurrentHours));



