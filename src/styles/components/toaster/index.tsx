import styled from "@emotion/styled";
import StoreModel from "../../../models/store-model";
import useStore from "../../../state-management/store";
import appTheme from "../../../configs/theme";

interface ToasterBodyWrapperProps {
  justifyContent: "center" | "space-between";
}

const ToasterBodyWrapper = styled.div<ToasterBodyWrapperProps>(
  ({ justifyContent }) => {
    const darkMode: StoreModel["darkMode"] = useStore<StoreModel["darkMode"]>(
      (store: StoreModel) => store.darkMode
    );
    const theme = appTheme(darkMode);

    return {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      justifyContent: 'flex-start',
      alignItems: "center",
      gap: justifyContent === "center" ? undefined : theme.spacing.spacingXs,
      "> .title": {
        boxSizing: "border-box",
        height: "max-content",
        width: "100%",
        fontSize: "0.75rem",
        fontWeight: 600,
        textTransform: "capitalize",
        lineHeight: '1.25rem'
      },
      "> .caption": {
        boxSizing: "border-box",
        height: "max-content",
        width: "100%",
        fontSize: "0.75rem",
        fontWeight: 400,
        textTransform: "capitalize",
      },
    };
  }
);

export default ToasterBodyWrapper;
