/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],

  theme: {
    //screens: {},

    // extend: {
    //   // project color config from dev start
    //   colors: {
    //     primary: {
    //       //vintageblue-
    //       50: "#F9F9F9",
    //       100: "#D8E6EC",
    //       200: "#005C87",
    //       300: "#90B7CA",
    //       400: "#6CA0B8",
    //       500: "#009EBD", //eg: input focus
    //       600: "#005C87",
    //       700: "#005C87", //eg: primary main btn color
    //       800: "#004B6E", //eg: filled btn hover
    //       900: "#005C87",
    //     },
    //     secondary: {
    //       //royalblue-
    //       50: "#C0E7EF",
    //       100: "#E5F5F8",
    //       200: "#CCECF2",
    //       300: "#90B7CA",
    //       400: "#6CA0B8",
    //       500: "#72C3D4", //eg: hover for Document Requested btn
    //       600: "#005C87",
    //       700: "#009EBD", //eg: secondary main
    //       800: "#004463",
    //       900: "#005C87",
    //     },
    //     red: {
    //       50: "#FFE7E7",
    //       100: "#EDCFD9",
    //       200: "#F6E7EC",
    //       300: "#C81E1E",
    //       400: "#C9D7E6",
    //       500: "#667683",
    //       600: "#B2273F",
    //       700: "#A71042",
    //       800: "#C9D7E6",
    //       900: "#667683",
    //     },
    //     green: {
    //       50: "#DEF7EC",
    //       100: "#EDCFD9",
    //       200: "#D5EBEC",
    //       300: "#DEE9E7",
    //       400: "#C9D7E6",
    //       500: "#589385",
    //       600: "#C9D7E6",
    //       700: "#2C99A1",
    //       800: "#C9D7E6",
    //       900: "#667683",
    //     },
    //     pink: {
    //       50: "",
    //       100: "",
    //       200: "",
    //       300: "#F5EAFB",
    //       400: "",
    //       500: "",
    //       600: "#EAD6F7",
    //       700: "#B541FC",
    //       800: "",
    //       900: "",
    //     },
    //     orange: {
    //       50: "",
    //       100: "#F8E6D6", //full gauge middle 40% -50%, bottom 40%
    //       200: "",
    //       300: "#F4DDD7", //full gauge middle 40% -50%
    //       400: "#F1CDAD", // AI search chip bg color
    //       500: "",
    //       600: "",
    //       700: "#DD8332",
    //       800: "#E7B281", // hover state for AI search chip
    //       900: "#C75538", //full gauge top 30%
    //     },
    //     Mdblue: {
    //       //Midnight blue
    //       50: "#E5E8EC",
    //       100: "#D9DEE3",
    //       200: "#D9DEE3",
    //       300: "#A9B3BC",
    //       400: "#909DA8",
    //       500: "#788694",
    //       600: "#667683", //shade-06 (dropdown select outline), most text color,
    //       700: "#001A31", //dark text color (eg:Document order has failed ).. this color pallete is in hold
    //       800: "#001121",
    //       900: "#000910",
    //     },
    //     yellow: {
    //       50: "#FFFFF",
    //       100: "#FDFDEA",
    //       200: "#C9D7E6",
    //       300: "#C9D7E6",
    //       400: "#C9D7E6",
    //       500: "#DD8332",
    //       600: "#C9D7E6",
    //       700: "#DD8332",
    //       800: "#C9D7E6",
    //       900: "#492D02",
    //     },
    //     gray: {
    //       50: "#FFFFFF",
    //       100: "#F6F9FC", //shade-01
    //       200: "#EAEEF2", //shade-02
    //       300: "#D6DEE6", //shade-03
    //       400: "#C9D7E6", //shade-04
    //       500: "",
    //       600: "#ABBDD1", //shade-05 (outline btn select)
    //       700: "#D0CFCD", //smokey gray
    //       800: "#DEE5EB",
    //       900: "#667683", //popup overlay color default
    //       //shade-06 is in "Mdblue"
    //     },
    //     tag_unrep: "#CCECF2",
    //     tag_property: "#E9D6F8",
    //     tag_other: "#EDCFD9",
    //     tag_important: "#CCDEE7",

    //     profile: "#E4833E",
    //     dark_gray: "#001A31", //text color
    //     section_gray: "#F8F9FB",

    //     plan_comman: {
    //       desc: "#001A31", //ideal for personal
    //       unit: "#667683", //$,month
    //       price: "#001A31", //49
    //       content: "#001A31", //feature ul list
    //     },
    //     personal: {
    //       //personal
    //       header_bg: "#F6F9FC", //header-bg
    //       title: "#005C87", //personal
    //       btn: "#005C87", //getitnow
    //       btnhover: "#005C87", //getitnow
    //       feat_icon: "#005C87", //feature icons
    //     },
    //     professional: {
    //       //professional
    //       header_bg: "#F2FDFF", //header-bg
    //       title: "#009EBD", //personal
    //       btn: "#009EBD", //getitnow
    //       btnhover: "#009EBD", //getitnow
    //       feat_icon: "#009EBD", //feature icons
    //     },
    //     premium: {
    //       //premium
    //       header_bg: "#FFF5EC", //header-bg
    //       title: "#DD8332", //personal
    //       btn: "#DD8332", //getitnow
    //       btnhover: "#DD8332", //getitnow
    //       feat_icon: "#DD8332", //feature icons
    //     },

    //     utilities: {
    //       summary: "#FFF5EC",
    //       highlight: "#FCE3C8",
    //     },
    //   },
    //   // project color config from dev end

    //   animation: {
    //     "spin-slow": "spin 1s linear infinite",
    //     "draw-check": "drawCheck 1.5s ease-in-out forwards",
    //   },

    //   maxWidth: {
    //     // seventeen: "17% !important", // custom class="max-w-twenty"
    //     // thirtyfive: "35% !important",
    //     // sixty: "60% !important",

    //     twenty: "20% !important",
    //     fiftyseven: "57% !important",
    //     thirtytwo: "32% !important",
    //   },
    //   fontSize: {
    //     thirtytwo: [
    //       "2rem",
    //       {
    //         lineHeight: "2.4rem",
    //       },
    //     ],
    //   },
    //   fontFamily: {
    //     sans: ["Open Sans", "sans-serif"],
    //   },
    //   ringWidth: {
    //     4: "1px", // Adjust the value here to control the width (e.g., '6px', '8px')
    //     2: "1px",
    //   },

    //   screens: {
    //     //takes min-width
    //     sm: "700px", //both works, applied in intuitive tab, in welcome page 4 video
    //     md: "900px",
    //     c_md: { max: "1366px" }, //will ONLY apply from 0 to 1366px eg: max:p-4
    //     c_lg: { min: "1367px", max: "1920px" },
    //     c_xl: "1921px",
    //   },
    //   container: {
    //     center: true,
    //     padding: "1rem",
    //     screens: {
    //       //md: "1080px", works
    //       //lg: "1440px",
    //       lg: "1517px",
    //     },
    //   },
    // },

    //new theme color config start
    extend: {
      colors: {
        primary: {
          50: "#EAEFFF",
          100: "#D5DFFF",
          200: "#C1CEFF",
          300: "#ACBEFF",
          400: "#829AF2",
          500: "#5878E6",
          600: "#2F55D9",
          700: "#2346AF",
          800: "#183885",
          900: "#0C295B",
        },
        secondary: {

          50: "#E2F3E0",
          100: "#C5E7C1",
          200: "#A7DCA1",
          300: "#8AD082",
          400: "#5BB966",
          500: "#2EA24C",
          600: "#008B31",
          700: "#00772A",
          800: "#016323",
          900: "#014E1C",
        },
        red: {

          50: "#FEE3E4",
          100: "#FDC7C9",
          200: "#FBACAD",
          300: "#FA9092",
          400: "#E54F52",
          500: "#D3292B",
          600: "#C20205",
          700: "#A80205",
          800: "#8D0204",
          900: "#720204",
        },
        purple: {

          50: "#F2EBFF",
          100: "#E5D6FF",
          200: "#D8C1FF",
          300: "#CBADFF",
          400: "#AE89EF",
          500: "#9265DF",
          600: "#7440CE",
          700: "#6238AA",
          800: "#503086",
          900: "#3D2861",
        },
        green: {
          50: "#DEF7EC",
          100: "",
          200: "",
          300: "",
          400: "",
          500: "#589385",
          600: "",
          700: "#2C99A1",
          800: "",
          900: "#667683",
        },
        orange: {

          50: "#FFEBE1",
          100: "#FFD7C4",
          200: "#FFC2A7",
          300: "#FFAE89",
          400: "#FB946C",
          500: "#F67C4F",
          600: "#F26333",
          700: "#D0552C",
          800: "#AF4825",
          900: "#8C3A1E",
        },
        Mdblue: {
          //Midnight blue
          50: "",
          100: "",
          200: "",
          300: "",
          400: "#909DA8",
          500: "",
          600: "#667683", //shade-06 (dropdown select outline), most text color,
          700: "#001A31", //dark text color (eg:Document order has failed ).. this color pallete is in hold
          800: "",
          900: "#000910",
        },
        yellow: {

          50: "#FFF7DB",
          100: "#FFEFB6",
          200: "#FFE892",
          300: "#FFE06E",
          400: "#F8D051",
          500: "#F2C134",
          600: "#EBB217",
          700: "#D49F0F",
          800: "#BC8C08",
          900: "#A47800",
        },
        gray: {
          // 50: '#FFFFFF',
          // 100: '#F6F9FC', //shade-01
          // 200: '#EAEEF2', //shade-02
          // 300: '#D6DEE6', //shade-03
          // 400: '#C9D7E6', //shade-04
          // 500: '',
          // 600: '#ABBDD1', //shade-05 (outline btn select)
          // 700: '#D0CFCD', //smokey gray
          // 800: '#DEE5EB',
          // 900: '#667683', //popup overlay color default
          // //shade-06 is in "Mdblue"
          50: "#F5F5F5",
          100: "#EFEFEF",
          200: "#DDDDDD",
          300: "#C5C5C5",
          400: "#A5A5A5",
          500: "#8C8C8C",
          600: "#737373",
          700: "#5C6166",
          800: "#404B53",
          850: "#323538",
          900: "#2E3C48",
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

      maxWidth: {
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
        // sans: ['Open Sans', 'sans-serif'],
        sans: ["IBM Plex Sans", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      ringWidth: {
        4: "1px", // Adjust the value here to control the width (e.g., '6px', '8px')
        2: "1px",
      },
      screens: {
        //takes min-width
        sm: "700px", //both works, applied in intuitive tab, in welcome page 4 video
        md: "900px",
        c_md: { max: "1366px" }, //will ONLY apply from 0 to 1366px eg: max:p-4
        c_lg: { min: "1367px", max: "1920px" },
        c_xl: "1921px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          //md: "1080px", works
          lg: "1440px",
        },
      },
    },
    //new theme color config end
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
