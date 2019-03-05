import {Dimensions, PixelRatio, Platform} from 'react-native';

const ScreenW = Dimensions.get('window').width
const ScreenH = Dimensions.get('window').height

const defaultW = 720
const defaultH = 1080

const scaleW = ScreenW / defaultW
const scaleH = ScreenH / defaultH
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

export default class Class {

    static getWidth(x) {
        return x * scaleW
    }

    static getHeight(x) {
        return x * scaleH
    }

    static getTextSize(x) {
        const scale = Math.min(scaleW, scaleH)
        return x * scale
    }

    static isIphoneX() {
        return (Platform.OS === "ios" &&
            ((ScreenH === X_HEIGHT && ScreenW === X_WIDTH) ||
                (ScreenH === X_WIDTH && ScreenW === X_HEIGHT))
        )

    }
}

