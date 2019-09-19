import { StyleSheet     } from 'react-native'
import { ThemeColors    } from '../Colors'
import { Layout         } from '../Layout'
import { UtilityStyles  } from './UtilityStyles'
import { br, m, p       } from './LayoutStyles'

const SurveyDescTitleText = {
   color: ThemeColors.WHITE
};

const TextInputStyle = Object.assign({
    borderBottomLeftRadius: 1 ,
    borderBottomRightRadius: 1 ,
    borderTopLeftRadius: 1 ,
    borderTopRightRadius: 1 ,
  },
  ThreeLineMultiIinputText,
  br.br_w1,
);


const ThreeLineMultiIinputText = {
    flex: 1,
    flexShrink: 0,
    flexGrow: 1,
    width: '100%',
    height:
      Layout.SPACING_UNIT_2 +
      Layout.SPACING_UNIT_2 +
      Layout.TEXT_SIZE +
      Layout.TEXT_SIZE,
    borderColor: ThemeColors.INPUT_BORDER,
    backgroundColor: ThemeColors.INPUT_BG,
    color: ThemeColors.BLU_200,
    fontSize: Layout.TEXT_SIZE,
    lineHeight: Layout.LINE_HEIGHT_1,
    marginLeft: 0,
    marginTop: Layout.SPACING_UNIT_2,
    marginBottom: Layout.SPACING_UNIT_2,
    marginRight: Layout.SPACING_UNIT_1,
    paddingLeft: 0,
    paddingRight: Layout.SPACING_UNIT_2,
    paddingTop: Layout.SPACING_UNIT_2,
    paddingBottom: Layout.SPACING_UNIT_2,
};


const SurveyDescInputTextContainer = Object.assign({
    borderBottomLeftRadius: 1 ,
    borderBottomRightRadius: 1 ,
    borderTopLeftRadius: 1 ,
    borderTopRightRadius: 1 ,
    flex: 1,
  },
  UtilityStyles.stretch,
  br.br_w1,
  m.mb20,
);


const SurveyStyles = StyleSheet.create({
  survey_desc_title: SurveyDescTitleText,
  survey_desc_textinput: ThreeLineMultiIinputText,
  survey_desc_textinput_container: SurveyDescInputTextContainer,
});


export { SurveyStyles }
