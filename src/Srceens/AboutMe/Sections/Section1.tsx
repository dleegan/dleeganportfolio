import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
  Linking,
} from 'react-native';
import {FontFamily} from '../../../Assets/Fonts';
import Images from '../../../Assets/Images';
import Colors from '../../../Assets/Styles/Colors';
import Collapser from '../../../Components/Collapser';
import Image from '../../../Components/Image';
import ItemSelection from '../../../Components/ItemSelection';
import Text from '../../../Components/Text';
import TreeCollapser from '../../../Components/TreeCollapser';

let ContactInfo = [
  {
    icon: Images.mail,
    action: () => Linking.openURL(`mailto:leegandupros@gmail.com`),
    title: 'leegandupros@gmail.com',
  },
  {
    icon: Images.phone,
    action: () => Linking.openURL(`tel:+33767348080`),
    title: '+33767348080',
  },
];

let findMeLinks = [
  {action: '', title: 'Facebook'},
  {action: '', title: 'Instagram'},
];

let dataSchema = {
  title: 'personal-info',
  items: [
    {title: 'bio'},
    {title: 'education'},
    {title: 'professional-exp'},
    {
      title: 'interests',
      items: [{title: 'nothing'}, {title: 'stupide-things'}],
    },
  ],
};

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
        <TreeCollapser.CSub data={dataSchema} />
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
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          {React.Children.toArray(
            findMeLinks.map((item: any, _index: number) => {
              return (
                <TouchableOpacity style={{flexDirection: 'row', marginTop: 10}}>
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

// const layout = useWindowDimensions();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011627',
  },
});

export default Section1;
