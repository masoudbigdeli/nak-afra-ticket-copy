import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";
import appTheme from "../../configs/theme";
import useStore from "../../state-management/store";
import StoreModel from "../../models/store-model";
import mediaQuery from "./media-query";

const CustomToastContainer = styled(ToastContainer)(() => {
  const darkMode: StoreModel["darkMode"] = useStore<StoreModel["darkMode"]>(
    (store: StoreModel) => store.darkMode
  );
  const dir: StoreModel["language"]["dir"] = useStore<
    StoreModel["language"]["dir"]
  >((store: StoreModel) => store.language.dir);
  const theme = appTheme(darkMode);

  return {
    "&.custom-toast-container": {
      padding: 0,
      top: "3rem",
      width: "88%",
      maxWidth: "88%",
      [mediaQuery("portraitSmartphone", "max")]: {
        left: "0rem",
        right: "0rem",
        marginInline: "auto",
        maxWidth: "88%",
      },
      [mediaQuery("landscapeSmartphone", "min")]: {
        maxWidth: "31.35rem",
      },
      "> .Toastify__toast": {
        direction: dir,
        height: "3.5rem",
        padding: theme.spacing.spacingS,
        borderRadius: theme.radious.radiousXxs,
        display: "flex",
        alignItems: "center",
        maxHeight: "max-content",
        minHeight: "max-content",
        "> .Toastify__toast-body": {
          padding: 0,
          margin: 0,
          height: "max-content",
          display: "flex",
          alignItems: "center",
        },
        "> .Toastify__close-button": {
          height: "2rem",
          width: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 1,
          "> svg": {
            opacity: 1,
          },
        },
      },

      "> .toast-body-container-error": {
        color: theme.color.ordinalColors.redError[500],
        background: theme.color.ordinalColors.redError[50],
        border: `1px solid ${theme.color.ordinalColors.redError[500]}`,
        "> .Toastify__close-button > svg": {
          color: theme.color.ordinalColors.redError[500],
        },
      },
      "> .toast-body-container-success": {
        color: theme.color.ordinalColors.greenSuccess[600],
        background: theme.color.ordinalColors.greenSuccess[50],
        border: `1px solid ${theme.color.ordinalColors.greenSuccess[600]}`,
        "> .Toastify__close-button > svg": {
          color: theme.color.ordinalColors.greenSuccess[600],
        },
      },
      "> .toast-body-container-warning": {
        color: theme.color.ordinalColors.orange[600],
        background: theme.color.ordinalColors.orange[50],
        border: `1px solid ${theme.color.ordinalColors.orange[600]}`,
        "> .Toastify__close-button > svg": {
          color: theme.color.ordinalColors.orange[600],
        },
      },
      "> .toast-body-container-info": {
        color: theme.color.ordinalColors.blue[600],
        background: theme.color.ordinalColors.blue[50],
        border: `1px solid ${theme.color.ordinalColors.blue[600]}`,
        "> .Toastify__close-button > svg": {
          color: theme.color.ordinalColors.blue[600],
        },
      },
    },
  };
});

export default CustomToastContainer;
