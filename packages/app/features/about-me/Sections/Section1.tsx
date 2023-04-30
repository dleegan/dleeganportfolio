import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Linking,
} from 'react-native';
import Images from '../../../Assets/Images';
import Colors from '../../../Assets/Styles/Colors';
import Collapser from '../../../Components/Collapser';
import Image from '../../../Components/Image';
import ItemSelection from '../../../Components/ItemSelection';
import Text from '../../../Components/Text';
import TreeCollapser from '../../../Components/TreeCollapser';
import Links from '../../../Utils/Links';

let findMeLinks = [
  {
    action: () => Linking.openURL(Links.facebook),
    title: 'Facebook',
  },
  {
    action: () => Linking.openURL(Links.instagram),
    title: 'Instagram',
  },
];

let dataSchema = [
  {fileName: 'bio'},
  {fileName: 'education'},
  {fileName: 'professional-exp'},
  {
    folderName: 'interests',
    content: [{fileName: 'nothing'}, {fileName: 'stupide-things'}],
  },
];

const Section1 = () => {
  const [text, onChangeText] = useState('');
  const layout = useWindowDimensions();

  return (
    <View
      style={[
        layout.width >= 768 && {
          width: '16%',
          borderRightWidth: 1,
          borderRightColor: Colors.defaultBorder,
        },
      ]}>
      <Collapser
        childrenTitle={
          <ItemSelection title={'personal-info'} isSelected={false} />
        }
        childrenTitleSelected={
          <ItemSelection title={'personal-info'} isSelected={true} />
        }
        style={{}}
        hoverInStyles={{}}>
        <View
          style={{
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: Colors.defaultBorder,
          }}>
          <TreeCollapser data={dataSchema} />
        </View>
      </Collapser>

      <Collapser
        childrenTitle={
          <ItemSelection title={'find-me-also-in'} isSelected={false} />
        }
        childrenTitleSelected={
          <ItemSelection title={'find-me-also-in'} isSelected={true} />
        }
        style={{}}
        hoverInStyles={{}}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}>
          {React.Children.toArray(
            findMeLinks.map((item: any, _index: number) => {
              return (
                <TouchableOpacity
                  style={{flexDirection: 'row', marginTop: 10}}
                  onPress={() => item.action()}>
                  <Image
                    source={Images.link}
                    style={{
                      height: 15,
                      width: 15,
                      tintColor: '#fff',
                    }}
                  />
                  <Text style={{marginLeft: 5}}>{item.title}</Text>
                </TouchableOpacity>
              );
            }),
          )}
        </View>
      </Collapser>
    </View>
  );
};

export default Section1;
