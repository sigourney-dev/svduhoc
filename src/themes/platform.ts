import {Dimensions, PixelRatio, Platform as PlatformBase} from 'react-native';

const {width, height} = Dimensions.get('window');

class PBase {
  readonly deviceWidth = width;

  readonly deviceHeight = height;

  readonly platform = PlatformBase.OS;

  readonly borderWidth = 1.5 / PixelRatio.getPixelSizeForLayoutSize(1);

  readonly baseScreenWith = 414;

  readonly baseScreenHeight = 896;

  readonly select = PlatformBase.select;

  // readonly OS = PlatformBase.OS;
  readonly scaleWidth = this.deviceWidth / this.baseScreenWith;

  readonly scaleHeight = this.deviceHeight / this.baseScreenHeight;

  readonly scale =
    this.deviceWidth < 720 ? this.scaleWidth : this.scaleHeight - 0.1;

  readonly SizeScale = (size = 12): number => this.scale * size;

  readonly hs = (size = 12): number => this.scaleWidth * size;

  readonly vs = (size = 12): number => this.scaleHeight * size;

  readonly headerHeight = this.SizeScale(50);

  readonly version = PlatformBase.Version;

  readonly footerMarginBottom = this.SizeScale(55);
}

export const Platform = new PBase();
export const ms = Platform.SizeScale;
export const {hs} = Platform; // horizontal scale
export const {vs} = Platform; // vertical scale
export const vsFactor = (size: number, factor = 1.6) =>
  size * (1 - factor * (1 - vs(1)));
