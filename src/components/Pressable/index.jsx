import { useCallback } from "react";
import { Pressable as RNPressable } from "react-native";

export const Pressable = ({
  children,
  style,
  activeOpacity,
  disabled,
  ...otherProps
}) => {
  const _style = useCallback(
    ({ pressed }) => [{ opacity: pressed ? activeOpacity : 1 }, style && style],
    [style]
  );

  return (
    <RNPressable style={_style} disabled={disabled} {...otherProps}>
      {children}
    </RNPressable>
  );
};
