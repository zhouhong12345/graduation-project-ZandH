import { Dimensions } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;//屏幕总宽度（dp）
const uiWidthPx = 640;//设计稿总宽度（px）

function pxToDp(uiElementPx) {
    return uiElementPx * deviceWidthDp / uiWidthPx;
}

export default pxToDp;