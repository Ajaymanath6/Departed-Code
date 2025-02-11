/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],

  theme: {
    //screens: {},

    extend: {
      // artemis color config start
      // colors: {
      //   primary: {
      //     //vintageblue-
      //     50: "#F9F9F9",
      //     100: "#D8E6EC",
      //     200: "#005C87",
      //     300: "#90B7CA",
      //     400: "#6CA0B8",
      //     500: "#009EBD", //eg: input focus
      //     600: "#005C87",
      //     700: "#005C87", //eg: primary main btn color
      //     800: "#004B6E", //eg: filled btn hover
      //     900: "#005C87",
      //   },
      //   secondary: {
      //     //royalblue-
      //     50: "#C0E7EF",
      //     100: "#E5F5F8", //banner color case detail page
      //     200: "#CCECF2", // full gauge bottom 10% bg //detail page tag color (unrepresented)
      //     300: "#90B7CA",
      //     400: "#6CA0B8",
      //     500: "#72C3D4", //eg: hover for Document Requested btn
      //     600: "",
      //     700: "#009EBD", //eg: secondary main //full gauge bottom 10%
      //     800: "", //case detail tag color
      //     900: "#005C87",
      //   },
      //   red: {
      //     50: "#FFE7E7",
      //     100: "#EDCFD9",
      //     200: "#F6E7EC", //banner color case detail page
      //     300: "#C81E1E",
      //     400: "#C9D7E6",
      //     500: "#667683",
      //     600: "#B2273F", //top 20% for full gauge
      //     700: "#A71042", //top 10 for full gauge
      //     800: "#C9D7E6",
      //     900: "#667683",
      //   },
      //   pink: {
      //     50: "",
      //     100: "",
      //     200: "",
      //     300: "#F5EAFB",
      //     400: "",
      //     500: "",
      //     600: "#EAD6F7",
      //     700: "#B541FC",
      //     800: "",
      //     900: "",
      //   },
      //   green: {
      //     50: "#DEF7EC",
      //     100: "#EDCFD9",
      //     200: "#D5EBEC", //full gauge bottom 20%
      //     300: "#DEE9E7", //full gauge bottom 30%
      //     400: "#C9D7E6",
      //     500: "#589385", //full gauge bottom 30%
      //     600: "#C9D7E6",
      //     700: "#2C99A1", //full gauge bottom 20%
      //     800: "#C9D7E6",
      //     900: "#667683",
      //   },
      //  random: {
      //     1: '#D62D5E',
      //     2: '#8C33C0',
      //     3: '#FFB300',
      //     4: '#00C4E5',
      //     5: '#7A0F2D',
      //     6: '#C226A3',
      //     7: '#FFCA28',
      //     8: '#25B0D3',
      //     9: '#5D1535',
      //     10: '#9C27B0',
      //     11: '#FFC107',
      //     12: '#00BCD4',
      //     13: '#4A0E24',
      //     14: '#673AB7',
      //     15: '#FFA000',
      //     16: '#0097A7',
      //     17: '#2C0615',
      //     18: '#512DA8',
      //     19: '#F57C00',
      //     20: '#00ACC1',
      //     21: '#1A0309',
      //     22: '#311B92',
      //     23: '#EF6C00',
      //     24: '#0097A7',
      //     25: '#4A148C',
      //     26: '#FF5722',
      //     27: '#00838F',
      //     28: '#6A1B9A',
      //     29: '#F4511E',
      //     30: '#0277BD',
      //     31: '#8E24AA',
      //     32: '#E64A19',
      //     33: '#006064',
      //     34: '#4527A0',
      //     35: '#DD2C00',
      //   },
      //   orange: {
      //     50: "",
      //     100: "#F8E6D6", //full gauge middle 40% -50%, bottom 40%,//notification bg
      //     200: "",
      //     300: "#F4DDD7", //full gauge middle 40% -50%
      //     400: "#F1CDAD", //in main searchbar below filter chip Ai btn
      //     500: "",
      //     600: "",
      //     700: "#DD8332",
      //     800: "#E7B281",
      //     900: "#C75538", //full gauge top 30%
      //   },
      //   Mdblue: {
      //     //Midnight blue
      //     50: "#E5E8EC",
      //     100: "#D9DEE3",
      //     200: "#D9DEE3",
      //     300: "#A9B3BC",
      //     400: "#909DA8",
      //     500: "#788694",
      //     600: "#667683", //shade-06 (dropdown select outline), most text color(gray-500 to this Mdblue-600),
      //     700: "#001A31", //dark text color (eg:Document order has failed ).. this color pallete is in hold
      //     800: "#001121",
      //     900: "#000910",
      //   },
      //   yellow: {
      //     50: "#FFFFF",
      //     100: "#FDFDEA",
      //     200: "#C9D7E6",
      //     300: "#C9D7E6",
      //     400: "#C9D7E6",
      //     500: "#DD8332",
      //     600: "#F8E00B",
      //     700: "#DD8332",
      //     800: "#C9D7E6",
      //     900: "#492D02",
      //   },
      //   // gray: {
      //   //   50: "#FFFFFF", //hover bg for dropdown, accordian label,
      //   //   100: "#F6F9FC", //eg: bg gray tag//focus for stroked btn
      //   //   200: "#C9D7E6", //eg: accordian border
      //   //   300: "#D6DEE6", //eg: input border
      //   //   400: "#667683", //inputfield placeholder from below(gray-500)
      //   //   500: "#667683", //eg: accordian label text & accordian icons (& other icons) ()
      //   //   600: "#ABBDD1",
      //   //   700: "#001A31",
      //   //   800: "#667683", //eg: badge btn text same as hexacode used of '500'
      //   //   900: "#001A31", //dark texts(eg:input label, inputfield text, plain btn text big text)
      //   // },
      //   gray: {
      //     50: "#FFFFFF",
      //     100: "#F6F9FC", //shade-01
      //     200: "#EAEEF2", //shade-02
      //     300: "#D6DEE6", //shade-03
      //     400: "#C9D7E6", //shade-04
      //     500: "",
      //     600: "#ABBDD1", //shade-05 (outline btn select)
      //     700: "#D0CFCD", //smokey gray
      //     800: "#DEE5EB", // search tag hover
      //     900: "#667683", //popup overlay color default
      //     //shade-06 is in "Mdblue"
      //   },
      //   //"tailwindCSS.colorDecorators": true ,
      //   tag_unrep: "#CCECF2",
      //   tag_property: "#E9D6F8",
      //   tag_other: "#EDCFD9",
      //   tag_important: "#CCDEE7",

      //   profile: "#E4833E",
      //   dark_gray: "#001A31", //text color

      //   section_gray: "#F8F9FB", //for semantic section bg

      //   plan_comman: {
      //     desc: "#001A31", //ideal for personal
      //     unit: "#667683", //$,month
      //     price: "#001A31", //49
      //     content: "#001A31", //feature ul list
      //   },
      //   personal: {
      //     //personal
      //     header_bg: "#F6F9FC", //header-bg
      //     title: "#005C87", //personal
      //     btn: "#005C87", //getitnow
      //     btnhover: "#005C87", //getitnow
      //     feat_icon: "#005C87", //feature icons
      //   },
      //   professional: {
      //     //professional
      //     header_bg: "#F2FDFF", //header-bg
      //     title: "#009EBD", //personal
      //     btn: "#009EBD", //getitnow
      //     btnhover: "#009EBD", //getitnow
      //     feat_icon: "#009EBD", //feature icons
      //   },
      //   premium: {
      //     //premium
      //     header_bg: "#FFF5EC", //header-bg
      //     title: "#DD8332", //personal
      //     btn: "#DD8332", //getitnow
      //     btnhover: "#DD8332", //getitnow
      //     feat_icon: "#DD8332", //feature icons
      //   },
      //   //customShadow: "rgba(0, 26, 49, 0.20)",

      //   utilities: {
      //     summary: "#FFF5EC",
      //     highlight: "#FCE3C8",
      //   },
      // },
      // artemis color config end

      // project color config from dev start
      colors: {
        primary: {
          //vintageblue-
          50: "#F9F9F9",
          100: "#D8E6EC",
          200: "#005C87",
          300: "#90B7CA",
          400: "#6CA0B8",
          500: "#009EBD", //eg: input focus
          600: "#005C87",
          700: "#005C87", //eg: primary main btn color
          800: "#004B6E", //eg: filled btn hover
          900: "#005C87",
        },
        secondary: {
          //royalblue-
          50: "#C0E7EF",
          100: "#E5F5F8",
          200: "#CCECF2",
          300: "#90B7CA",
          400: "#6CA0B8",
          500: "#72C3D4", //eg: hover for Document Requested btn
          600: "#005C87",
          700: "#009EBD", //eg: secondary main
          800: "#004463",
          900: "#005C87",
        },
        red: {
          50: "#FFE7E7",
          100: "#EDCFD9",
          200: "#F6E7EC",
          300: "#C81E1E",
          400: "#C9D7E6",
          500: "#667683",
          600: "#B2273F",
          700: "#A71042",
          800: "#C9D7E6",
          900: "#667683",
        },
        green: {
          50: "#DEF7EC",
          100: "#EDCFD9",
          200: "#D5EBEC",
          300: "#DEE9E7",
          400: "#C9D7E6",
          500: "#589385",
          600: "#C9D7E6",
          700: "#2C99A1",
          800: "#C9D7E6",
          900: "#667683",
        },
        orange: {
          50: "",
          100: "#F8E6D6", //full gauge middle 40% -50%, bottom 40%
          200: "",
          300: "#F4DDD7", //full gauge middle 40% -50%
          400: "#F1CDAD", // AI search chip bg color
          500: "",
          600: "",
          700: "#DD8332",
          800: "#E7B281", // hover state for AI search chip
          900: "#C75538", //full gauge top 30%
        },
        Mdblue: {
          //Midnight blue
          50: "#E5E8EC",
          100: "#D9DEE3",
          200: "#D9DEE3",
          300: "#A9B3BC",
          400: "#909DA8",
          500: "#788694",
          600: "#667683", //shade-06 (dropdown select outline), most text color,
          700: "#001A31", //dark text color (eg:Document order has failed ).. this color pallete is in hold
          800: "#001121",
          900: "#000910",
        },
        yellow: {
          50: "#FFFFF",
          100: "#FDFDEA",
          200: "#C9D7E6",
          300: "#C9D7E6",
          400: "#C9D7E6",
          500: "#DD8332",
          600: "#C9D7E6",
          700: "#DD8332",
          800: "#C9D7E6",
          900: "#492D02",
        },
        gray: {
          50: "#FFFFFF",
          100: "#F6F9FC", //shade-01
          200: "#EAEEF2", //shade-02
          300: "#D6DEE6", //shade-03
          400: "#C9D7E6", //shade-04
          500: "",
          600: "#ABBDD1", //shade-05 (outline btn select)
          700: "#D0CFCD", //smokey gray
          800: "#DEE5EB",
          900: "#667683", //popup overlay color default
          //shade-06 is in "Mdblue"
        },
        tag_unrep: "#CCECF2",
        tag_property: "#E9D6F8",
        tag_other: "#EDCFD9",
        tag_important: "#CCDEE7",

        profile: "#E4833E",
        dark_gray: "#001A31", //text color
        section_gray: "#F8F9FB",

        plan_comman: {
          desc: "#001A31", //ideal for personal
          unit: "#667683", //$,month
          price: "#001A31", //49
          content: "#001A31", //feature ul list
        },
        personal: {
          //personal
          header_bg: "#F6F9FC", //header-bg
          title: "#005C87", //personal
          btn: "#005C87", //getitnow
          btnhover: "#005C87", //getitnow
          feat_icon: "#005C87", //feature icons
        },
        professional: {
          //professional
          header_bg: "#F2FDFF", //header-bg
          title: "#009EBD", //personal
          btn: "#009EBD", //getitnow
          btnhover: "#009EBD", //getitnow
          feat_icon: "#009EBD", //feature icons
        },
        premium: {
          //premium
          header_bg: "#FFF5EC", //header-bg
          title: "#DD8332", //personal
          btn: "#DD8332", //getitnow
          btnhover: "#DD8332", //getitnow
          feat_icon: "#DD8332", //feature icons
        },

        utilities: {
          summary: "#FFF5EC",
          highlight: "#FCE3C8",
        },
      },
      // project color config from dev end

      animation: {
        "spin-slow": "spin 1s linear infinite",
        "draw-check": "drawCheck 1.5s ease-in-out forwards",
      },

      maxWidth: {
        // seventeen: "17% !important", // custom class="max-w-twenty"
        // thirtyfive: "35% !important",
        // sixty: "60% !important",

        twenty: "20% !important",
        fiftyseven: "57% !important",
        thirtytwo: "32% !important",
      },
      fontSize: {
        thirtytwo: [
          "2rem",
          {
            lineHeight: "2.4rem",
          },
        ],
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      ringWidth: {
        4: "1px", // Adjust the value here to control the width (e.g., '6px', '8px')
        2: "1px",
      },

      screens: {
        //takes min-width
        sm: "700px", //both works, applied in intuitive tab, in welcome page 4 video
        md: "900px",
        mdm: { max: "1366px" }, //will ONLY apply from 0 to 1366px eg: max:p-4
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          //md: "1080px", works
          //lg: "1440px",
          lg: "1517px",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
