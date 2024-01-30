// #### This file is just for tailwindCSS configuration #### 

// function to covert from hex to rgba 

const toRgba : (hex:string,alpha?:number)=>string  = (hex,alpha=1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha/100})`;
  }
  
  
  
  
  // main colors 
  const mainColor = {
      transparent: 'transparent',
      current: 'currentColor',
  
      // colors
      white:"#FFFFFF",
      black:"#000000",
  
      // neutral colors
      neutral:{
        50:"#F2F2F2",
        100:"#E6E6E6",
        200:"#D9D9D9",
        300:"#CCCCCC",
        400:"#BFBFBF",
        500:"#999999",
        600:"#808080",
        700:"#666666",
        800:"#4D4D4D",
        900:"#262626"
      },
  
  
      // green colors
      green:{
        50:"#ECF8EF",
        100:"#C6EBD0",
        200:"#A0DEB2",
        300:"#7AD193",
        400:"#55C474",
        500:"#42BE65",
        600:"#0E6027",
        700:"#0A471D",
        800:"#062E13",
        900:"#031408"
      },
  
      // red colors
      red:{
        50:"#FBE8E9",
        100:"#F4BBBE",
        200:"#EC8E93",
        300:"#E56168",
        400:"#DE343D",
        500:"#DA1E28",
        600:"#99151C",
        700:"#6D0F14",
        800:"#42090C",
        900:"#160304"
      },
  
      // yellow colors
      yellow:{
        50:"#FEFCE8",
        100:"#FDEDD3",
        200:"#FAE496",
        300:"#FAD658",
        400:"#FAC91C",
        500:"#F5A524",
        600:"#C4841D",
        700:"#936316",
        800:"#62420E",
        900:"#312107"
      },
  
      // orange colors
      orange:{
        50:"#FFDABF",
        100:"#FFC195",
        200:"#FFA86A",
        300:"#FAD658",
        400:"#FF8F40",
        500:"#FF832B",
        600:"#B35C1E",
        700:"#804216",
        800:"#4D280D",
        900:"#1A0D04"
      },
  
      // blue colors
      blue:{
        50:"#E9F4FF",
        100:"#BDDEFF",
        200:"#91C8FF",
        300:"#65B2FF",
        400:"#399CFF",
        500:"#006FEE",
        600:"#006FEE",
        700:"#005BC4",
        800:"#002E62",
        900:"#001731"
      },
  }
  
  // Transparent colors 
  const TransparentColors = {
    "green":'rgba(191,255,209,0.3)',
    "green-light":'rgba(66,190,101,0.1)',
  
    "blue":'rgba(140,198,255,0.3)',
    "blue-light":'rgba(140,198,255,0.1)',
    "blue-dark":'rgba(25,102,178,0.1)',
  
    "orange":'rgba(255,242,233,0.3)',
    "orange-light":'rgba(255,131,43,0.1)',
  
    "red":'rgba(255,191,195,0.3)',
    "red-light":'rgba(250,77,86,0.1)',
  }
  
  // color tokens 
  const colors = { ...mainColor,
        
  
      // ## icon colors ##
      icon:{
        dark:"#262626",
        light:mainColor.blue[50],
        blue:mainColor.blue[500],
        secondary:mainColor.neutral[600],
        success:mainColor.green[400],
        error:mainColor.red[500],
        warning:mainColor.orange[500],
        disabled:mainColor.neutral[400],
      },
      // ## border colors ##
      border :{ 
        focus :mainColor.blue[600] ,
        selected:mainColor.blue[500],
        brand:mainColor.blue[500],
        dark:mainColor.blue[900],
        "brand-darker":mainColor.blue[800],
        error:mainColor.red[400],
        warning:mainColor.orange[500],
        success:mainColor.green[400],
        subtle:mainColor.neutral[200],
        strong:mainColor.neutral[400],
        disabled:mainColor.neutral[100],
        light:mainColor.white,
        "notification-information":mainColor.blue[100],
        "notification-error":mainColor.red[200],
        "notification-warning":mainColor.yellow[400],
        'notification-success':mainColor.green[500]
      },
      // ## background colors ##
      background:{
        layer1:mainColor.white,
        "layer1-hover":mainColor.neutral[50],
        layer2:mainColor.neutral[50],
        "layer2-hover":mainColor.neutral[100],
        layer3:mainColor.neutral[200],
        "layer3-hover":mainColor.neutral[300],
        selected:mainColor.neutral[400],
        brand:mainColor.blue[500],
        "brand-dark":mainColor.blue[900],
        "brand-light":mainColor.blue[100],
        inverse:mainColor.neutral[900],
        "inverse-hover":mainColor.neutral[800]
      },
      // ## text colors ##
      text:{
        primary:mainColor.neutral[900],
        secondary:mainColor.neutral[600],
        placeholder:mainColor.neutral[300],
        oncolor:mainColor.white,
        brand:mainColor.blue[500],
        "brand-dark":mainColor.blue[800],
        link:mainColor.blue[600],
        "link-hover":mainColor.blue[700],
        error:mainColor.red[500],
        warning:mainColor.orange[500],
        success:mainColor.green[500],
        disabled:mainColor.neutral[300]
      },
      // ## button colors ##
      button:{
        primary:mainColor.blue[500],
        "primary-hover":mainColor.blue[700],
        "primary-Selected":mainColor.blue[800],
  
        secondary:mainColor.neutral[600],
        "secondary-hover":mainColor.neutral[700],
        "secondary-Selected":mainColor.neutral[800],
  
        tertiary:'transparent',
        "tertiary-hover":mainColor.neutral[50],
        "tertiary-Selected":mainColor.neutral[100],
  
        danger:mainColor.red[500],
        "danger-hover":mainColor.red[600],
        "danger-Selected":mainColor.red[700],
  
        disabled:mainColor.neutral[100],
      },
      // notifications 
      notification:{
        'brand-transparent':TransparentColors["blue-dark"],
  
        'information':TransparentColors["blue"],
        'information-light':TransparentColors["blue-light"],
        'information-border':mainColor.blue[100],
  
        'warning':TransparentColors["orange"],
        'warning-light':TransparentColors["orange-light"],
        'warning-border':mainColor.orange[400],
  
        'success':TransparentColors["green"],
        'success-light':TransparentColors["green-light"],
        'success-border':mainColor.green[500],
  
        'error':TransparentColors["red"],
        'error-light':TransparentColors["red-light"],
        'error-border':mainColor.red[200],
      },
  
      // Miscellaneous colors
      miscellaneous:{
        white10:'rgba(255, 255, 255, 0.1)',
        white50:'rgba(255, 255, 255, 0.5)',
        black10:'rgba(0, 0, 0, 0.1)',
        black25:'rgba(0, 0, 0, 0.25)',
        black40:'rgba(0, 0, 0, 0.4)'
      },
      // ## field colors ##
      field:{
        background:mainColor.neutral[50],
        selected:mainColor.neutral[50],
        hover:mainColor.neutral[100],
        disabled:mainColor.neutral[100]
      },
  
      // Transparent colors
    
      "transparent-colors":{...TransparentColors},
  
       // ## tag colors ##
      // blue purple cool-gray magenta gray warm-gray orange red cyan green teal dark-gray
      tag:{
        blue:{
          bg:"#D0E2FF",
          stroke:"#B2D0FF",  
          text:"#05122D"
        },
        purple:{
          bg:"#E8DAFF",
          stroke:"#CFB2FF",  
          text:"#0B0218"
        },
        "cool-gray":{
          bg:"#CDD3DA",
          stroke:"#ADBCCC",  
          text:"#0B0E10"
        },
        magenta:{
          bg:"#FFD6E8",
          stroke:"#FFB2D4",  
          text:"#2D0416"
        },
        gray:{
          bg:"#E0E0E0",
          stroke:"#C7C7C7",  
          text:"#161616"
        },
        "warm-gray":{
          bg:"#F1E9E7",
          stroke:"#CCC4C2",  
          text:"#0B052D"
        },
        orange:{
          bg:"#FFE0C3",
          stroke:"#FFC691",  
          text:"#2B1706"
        },
        red:{
          bg:"#FFD7D9",
          stroke:"#FFBFC2",  
          text:"#2B0607"
        },
        cyan:{
          bg:"#BAE6FF",
          stroke:"#99DAFF",  
          text:"#041D33"
        },
        green:{
          bg:"#A7F0BA",
          stroke:"#8AE5A2",  
          text:"#021D0A"
        },
        teal:{
          bg:"#9EF0F0",
          stroke:"#81E5E5",  
          text:"#052F2F"
        },
        "dark-gray":{
          bg:"#393939",
          stroke:"#0D0D0D",  
          text:"#FFFFFF"
        },
      }
  }
  
  
  
  // screens
  const screens={
      '2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }
  
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
  
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
  };
  
  // font sizes
  const fontSize  = {
      xs:['10px','auto'],
      sm: ['12px','16px'],
      base: ['14px','20px'],
      md: ['16px','24px'],
      xl: ['20px','28px'],
      '2xl': ['28px','36px'],
      '3xl': ['32px','40px'],
      '4xl': ['42px','50px'],
      '5xl': ['54px','64px'],
  };
  
  // border radius
  const borderRadius ={
      "sm":"2px",
      "md":"5px",
      "lg":"10px",
      "xl":"30px",
      "full":"50%"
  };
  
  // theme for tailwindCSS config
  const  theme = {colors,borderRadius,fontSize:fontSize as never ,screens};
  
  
  // exporting the theme as module [commonjs]
  module.exports = theme ;
  
  