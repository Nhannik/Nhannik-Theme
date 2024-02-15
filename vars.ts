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
        50:"#F4F4F4",
        100:"#E0E0E0",
        200:"#C6C6C6",
        300:"#A8A8A8",
        400:"#8D8D8D",
        500:"#6F6F6F",
        600:"#525252",
        700:"#393939",
        800:"#262626",
        900:"#161616"
      },
  
  
      // green colors
      green:{
        50:"#DEFBE6",
        100:"#A7F0BA",
        200:"#6FDC8C",
        300:"#42BE65",
        400:"#24A148",
        500:"#198038",
        600:"#0E6027",
        700:"#044317",
        800:"#022D0D",
        900:"#071908"
      },
  
      // red colors
      red:{
        50:"#FFF1F1",
        100:"#FFD7D9",
        200:"#FFB3B8",
        300:"#FF8389",
        400:"#FA4D56",
        500:"#DA1E28",
        600:"#A2191F",
        700:"#750E13",
        800:"#520408",
        900:"#2D0709"
      },
  
      // yellow colors
      yellow:{
        50:"#FFF7D6",
        100:"#F8E6A0",
        200:"#F5CD47",
        300:"#E2B203",
        400:"#CF9F02",
        500:"#B38600",
        600:"#946F00",
        700:"#7F5F01",
        800:"#533F04",
        900:"#332E1B"
      },
  
      // orange colors
      orange:{
        50:"#FFF2E8",
        100:"#FFD9BE",
        200:"#FFB784",
        300:"#FF832B",
        400:"#EB6200",
        500:"#BA4E00",
        600:"#8A3800",
        700:"#5E2900",
        800:"#3E1A00",
        900:"#231000"
      },

      // teal colors
      teal:{
        50:"#D9FBFB",
        100:"#9EF0F0",
        200:"#3DDBD9",
        300:"#08BDBA",
        400:"#009D9A",
        500:"#007D79",
        600:"#005D5D",
        700:"#004144",
        800:"#022B30",
        900:"#081A1C"
      },

      // lime colors
      lime:{
        50:"#EFFFD6",
        100:"#D3F1A7",
        200:"#B3DF72",
        300:"#08BDBA",
        400:"#82B536",
        500:"#6A9A23",
        600:"#5B7F24",
        700:"#4C6B1F",
        800:"#37471F",
        900:"#28311B"
      },

      // cyan colors
      cyan:{
        50:"#E7F9FF",
        100:"#C6EDFB",
        200:"#9DD9EE",
        300:"#6CC3E0",
        400:"#42B2D7",
        500:"#2898BD",
        600:"#227D9B",
        700:"#206A83",
        800:"#164555",
        900:"#1E3137"
      },

      // purple colors
      purple:{
        50:"#F3F0FF",
        100:"#DFD8FD",
        200:"#B8ACF6",
        300:"#9F8FEF",
        400:"#8F7FF7",
        500:"#8270DB",
        600:"#6E5DC6",
        700:"#5E4DB2",
        800:"#352C63",
        900:"#2B273F"
      },

      // magenta colors
      magenta:{
        50:"#FFECF8",
        100:"#FDD0EC",
        200:"#F797D2",
        300:"#E774BB",
        400:"#DA62AC",
        500:"#CD519D",
        600:"#AE4787",
        700:"#943D73",
        800:"#50253F",
        900:"#3D2232"
      },
  
      // blue colors
      blue:{
        50:"#E9F2FF",
        100:"#CCE0FF",
        200:"#85B8FF",
        300:"#579DFF",
        400:"#388BFF",
        500:"#006FEE",
        600:"#005AD9",
        700:"#0050BF",
        800:"#09327C",
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
        light:mainColor.white,
        blue:mainColor.blue[500],
        secondary:mainColor.neutral[600],
        success:mainColor.green[400],
        warning:mainColor.orange[500],
        error:mainColor.red[500],
        disabled:mainColor.neutral[400],
      },
      // ## border colors ##
      border :{ 
        focus :mainColor.blue[600] ,
        selected:mainColor.blue[500],
        brand:mainColor.blue[500],
        "brand-dark":mainColor.blue[900],
        subtle:mainColor.neutral[200],
        strong:mainColor.neutral[400],
        error:mainColor.red[400],
        warning:mainColor.orange[500],
        success:mainColor.green[400],
        light:mainColor.white,
        disabled:mainColor.neutral[100],
      },
      // ## background colors ##
      background:{
        layer1:mainColor.white,
        "layer1-hover":mainColor.neutral[50],
        layer2:mainColor.neutral[50],
        "layer2-hover":mainColor.neutral[100],
        layer3:mainColor.neutral[200],
        "layer3-hover":mainColor.neutral[300],
        "layer3-selected":mainColor.neutral[400],
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
        placeholder:mainColor.neutral[400],
        oncolor:mainColor.white,
        brand:mainColor.blue[500],
        "brand-dark":mainColor.blue[800],
        link:mainColor.blue[600],
        "link-hover":mainColor.blue[700],
        error:mainColor.red[500],
        warning:mainColor.orange[400],
        success:mainColor.green[400],
        disabled:mainColor.neutral[400]
      },
      // ## button colors ##
      button:{
        primary:mainColor.blue[500],
        "primary-hover":mainColor.blue[700],
        "primary-selected":mainColor.blue[800],
  
        secondary:mainColor.neutral[50],
        "secondary-hover":mainColor.neutral[100],
        "secondary-selected":mainColor.neutral[200],
  
        tertiary:mainColor.white,
        "tertiary-hover":mainColor.blue[50],
        "tertiary-selected":mainColor.blue[100],
  
        danger:mainColor.red[500],
        "danger-hover":mainColor.red[600],
        "danger-selected":mainColor.red[700],
  
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
          bg:mainColor.blue[100],
          hover:mainColor.blue[200],
          text:mainColor.blue[800],
          stroke:mainColor.blue[200]
        },
        "dark-blue":{
          bg:mainColor.blue[300],
          hover:mainColor.blue[400],
          text:mainColor.blue[900],
          stroke:mainColor.blue[400]
        },
        purple:{
          bg:mainColor.purple[100],
          hover:mainColor.purple[200],
          text:mainColor.purple[800],
          stroke:mainColor.purple[200]
        },
        "dark-purple":{
          bg:mainColor.purple[300],
          hover:mainColor.purple[400],
          text:mainColor.purple[900],
          stroke:mainColor.purple[400]
        },
        yellow:{
          bg:mainColor.yellow[100],
          hover:mainColor.yellow[200],
          text:mainColor.yellow[800],
          stroke:mainColor.yellow[200]
        },
        "dark-yellow":{
          bg:mainColor.yellow[200],
          hover:mainColor.yellow[300],
          text:mainColor.yellow[900],
          stroke:mainColor.yellow[300]
        },
        cyan:{
          bg:mainColor.cyan[100],
          hover:mainColor.cyan[200],
          text:mainColor.cyan[800],
          stroke:mainColor.cyan[200]
        },
        "dark-cyan":{
          bg:mainColor.cyan[300],
          hover:mainColor.cyan[400],
          text:mainColor.cyan[900],
          stroke:mainColor.cyan[400]
        },
        red:{
          bg:mainColor.red[100],
          hover:mainColor.red[200],
          text:mainColor.red[700],
          stroke:mainColor.red[200]
        },
        "dark-red":{
          bg:mainColor.red[300],
          hover:mainColor.red[400],
          text:mainColor.red[900],
          stroke:mainColor.red[400]
        },
        lime:{
          bg:mainColor.lime[100],
          hover:mainColor.lime[200],
          text:mainColor.lime[800],
          stroke:mainColor.lime[200]
        },
        "dark-lime":{
          bg:mainColor.lime[300],
          hover:mainColor.lime[400],
          text:mainColor.lime[900],
          stroke:mainColor.lime[400]
        },
        green:{
          bg:mainColor.green[100],
          hover:mainColor.green[200],
          text:mainColor.green[700],
          stroke:mainColor.green[200]
        },
        "dark-green":{
          bg:mainColor.green[300],
          hover:mainColor.green[400],
          text:mainColor.green[900],
          stroke:mainColor.green[400]
        },
        teal:{
          bg:mainColor.teal[100],
          hover:mainColor.teal[200],
          text:mainColor.teal[700],
          stroke:mainColor.teal[200]
        },
        "dark-teal":{
          bg:mainColor.teal[300],
          hover:mainColor.teal[400],
          text:mainColor.teal[900],
          stroke:mainColor.teal[400]
        },
        orange:{
          bg:mainColor.orange[100],
          hover:mainColor.orange[200],
          text:mainColor.orange[700],
          stroke:mainColor.orange[200]
        },
        "dark-orange":{
          bg:mainColor.orange[300],
          hover:mainColor.orange[400],
          text:mainColor.orange[900],
          stroke:mainColor.orange[400]
        },
        magenta:{
          bg:mainColor.magenta[100],
          hover:mainColor.magenta[200],
          text:mainColor.magenta[800],
          stroke:mainColor.magenta[200]
        },
        "dark-magenta":{
          bg:mainColor.magenta[300],
          hover:mainColor.magenta[400],
          text:mainColor.magenta[900],
          stroke:mainColor.magenta[400]
        },
        gray:{
          bg:mainColor.neutral[100],
          hover:mainColor.neutral[200],
          text:mainColor.neutral[900],
          stroke:mainColor.neutral[200]
        },
        "dark-gray":{
          bg:mainColor.neutral[700],
          hover:mainColor.neutral[600],
          text:mainColor.neutral[50],
          stroke:mainColor.neutral[900]
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
  const  Theme = {colors,borderRadius,fontSize:fontSize as never,screens};
  
  
  // exporting the theme as module [commonjs]
  module.exports = Theme ;
  
  