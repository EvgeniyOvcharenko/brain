import { Dimensions, Image } from "react-native";
const { width, height } = Dimensions.get("window");

class DeviceUiInfo {
  static screenSize = { width, height };
  static guidelineBaseWidth = 390;
  static guidelineBaseHeight = 844;

  static scale(size: number): number {
    return (this.screenSize.width / this.guidelineBaseWidth) * size;
  }

  static moderateScale(size: number, factor = 0.5): number {
    return size + (this.scale(size) - size) * factor;
  }

  static scaleHeight(size: number): number {
    return this.screenSize.height * (size / this.guidelineBaseHeight);
  }

  static moderateImageSizeScale(source: number): {
    width: number;
    height: number;
  } {
    const { height: imageHeight, width: imageWidth } =
      Image.resolveAssetSource(source);
    return {
      width:
        (imageWidth * Dimensions.get("window").width) / this.guidelineBaseWidth,
      height:
        (imageHeight * Dimensions.get("window").height) /
        this.guidelineBaseHeight,
    };
  }
}

export default DeviceUiInfo;
