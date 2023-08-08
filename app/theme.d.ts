import { TypographyOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    myVariant1: React.CSSProperties;
    myVariant2: React.CSSProperties;
    myVariant3: React.CSSProperties;
    myVariant4: React.CSSProperties;
    myVariant5: React.CSSProperties;
    myVariant6: React.CSSProperties;
    myVariant7: React.CSSProperties;
    myVariant8: React.CSSProperties;
    myVariant9: React.CSSProperties;
    myVariant10:React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    myVariant1?: React.CSSProperties;
    myVariant2?: React.CSSProperties;
    myVariant3?: React.CSSProperties;
    myVariant4?: React.CSSProperties;
    myVariant5?: React.CSSProperties;
    myVariant6?: React.CSSProperties;
    myVariant7?: React.CSSProperties;
    myVariant8?: React.CSSProperties;
    myVariant9?: React.CSSProperties;
    myVariant10?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    myVariant1: true;
    myVariant2: true;
    myVariant3: true;
    myVariant4: true;
    myVariant5: true;
    myVariant6: true;
    myVariant7: true;
    myVariant8: true;
    myVariant9: true;
    myVariant10: true;
  }
}
