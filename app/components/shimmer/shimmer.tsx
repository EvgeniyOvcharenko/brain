import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  createShimmerPlaceholder,
  ShimmerPlaceholderProps,
} from "react-native-shimmer-placeholder";
import { useTheme } from "styled-components/native";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const Shimmer = React.memo<ShimmerPlaceholderProps>(
  (props): JSX.Element => {
    const theme = useTheme();
    const defaultShimmerColors = [
      theme.colors.shimmer.first,
      theme.colors.shimmer.second,
      theme.colors.shimmer.first,
      theme.colors.shimmer.second,
      theme.colors.shimmer.first,
    ];

    const location = [0.1, 0.3, 0.5, 0.7, 0.9].slice(
      0,
      props?.shimmerColors?.length || 5
    );

    return (
      <ShimmerPlaceholder
        shimmerColors={defaultShimmerColors}
        location={location}
        duration={1500}
        shimmerStyle={styles.shimmer}
        style={[styles.shimmer, props.style]}
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  shimmer: {
    flex: 1,
    width: "100%",
  },
});
