import { Feather } from "@expo/vector-icons";

import { Colors } from "../../utils/Colors";
import { Pressable } from "../../components/Pressable";

const Back = ({ navigation, style, ...otherProps }) => {
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
