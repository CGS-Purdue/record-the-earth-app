import React, { Component } from 'react';
import { ImageBackground,View } from 'react-native';
import { CenterColView, PadView,RootView } from '../../Components/Views';
import { Theme } from '../../Theme';
import { ThemeColors } from './Colors';

const _assets = Theme.Assets;
const _styles = Theme.Styles;

class TestScreen extends Component {
  constructor(props) {
    super(props);
  }

  rendeonComponentDidMount(){
  }

  const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={_styles.bgImg} source={_assets.images.img_background}>
        <RootView>
            <CenterColView>
            <ColorsShow colors={Theme.Colors.REDS} >
            <ColorsShow colors={Theme.Colors.GREENS} />
            <ColorsShow colors={Theme.Colors.BLUES} />
            <ColorsShow colors={Theme.Colors.YELLOWS} />
            <ColorsShow colors={Theme.Colors.GRAYS} />
            <ColorsShow colors={Theme.Colors.SHADES_DARK} />
            <ColorsShow colors={Theme.Colors.SHADES_LIGH} />
            <ColorsShow colors={Theme.Colors.EMPTYCOLORS} />
          </CenterColView>
          <ColorsShow colors={Theme.Colors.REDS} />
        </RootView>
      </ImageBackground>
    );
  }
}

export { TestScreen };
