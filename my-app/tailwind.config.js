/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],

  theme: {
    //screens: {},

    extend: {
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
          100: "#D8E6EC",
          200: "#005C87",
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
          200: "#FBD5D5",
          300: "#C9D7E6",
          400: "#C9D7E6",
          500: "#667683",
          600: "#C9D7E6",
          700: "#A71042",
          800: "#C9D7E6",
          900: "#667683",
        },
        green: {
          50: "#DEF7EC",
          100: "#EDCFD9",
          200: "#FBD5D5",
          300: "#C9D7E6",
          400: "#C9D7E6",
          500: "#667683",
          600: "#C9D7E6",
          700: "#03543F",
          800: "#C9D7E6",
          900: "#667683",
        },

        Mdblue: {
          //Midnight blue
          50: "#E5E8EC",
          100: "#D9DEE3",
          200: "#D9DEE3",
          300: "#A9B3BC",
          400: "#909DA8",
          500: "#788694",
          600: "#607080",
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
          900: "#667683",
        },
        gray: {
          50: "#FFFFFF", //hover bg for dropdown, accordian label,
          100: "#F6F9FC", //eg: bg gray tag//focus for stroked btn
          200: "#C9D7E6", //eg: accordian border
          300: "#D6DEE6", //eg: input border
          400: "#667683", //inputfield placeholder from below(gray-500)
          500: "#667683", //eg: accordian label text & accordian icons (& other icons) ()
          600: "#667683",
          700: "#001A31",
          800: "#667683", //eg: badge btn text same as hexacode used of '500'
          900: "#001A31", //dark texts(eg:input label, inputfield text, plain btn text big text)
        },
        tag_unrep: "#CCECF2",
        tag_property: "#E9D6F8",
        tag_other: "#EDCFD9",
        tag_important: "#CCDEE7",

        profile: "#E4833E",
        dark_gray: "#001A31", //text color

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
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
