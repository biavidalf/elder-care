import { Feather } from "@expo/vector-icons";

import { Colors } from "../../utilities/Colors";
import { Pressable } from "../../components/Pressable";

const Back = ({ style, navigation, ...otherProps }) => {
  return (
    <Pressable
      activeOpacity={0.7}
      style={style}
      onPress={() => navigation.goBack()}
      {...otherProps}
    >
      <Feather name="chevron-left" size={32} color={Colors.BLACK} />
    </Pressable>
  );
};

export { Back };
