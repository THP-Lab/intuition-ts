import { jsx as jsx$1, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, json } from "@remix-run/node";
import { RemixServer, useRevalidator, NavLink, useRouteError, Link, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, useNavigate, useLocation } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React$1 from "react";
import React__default, { createContext as createContext$1, useMemo as useMemo$1, createElement as createElement$1, useContext as useContext$1, useCallback as useCallback$1, forwardRef as forwardRef$1, Children, isValidElement, cloneElement, Fragment, useRef as useRef$1, useEffect as useEffect$1, useState as useState$1, useLayoutEffect as useLayoutEffect$1, useReducer } from "react";
import defaultTheme from "tailwindcss/defaultTheme.js";
import require$$0 from "tailwindcss/plugin.js";
import clsx$1, { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as ReactDOM from "react-dom";
import ReactDOM__default, { flushSync, createPortal } from "react-dom";
import { cva } from "class-variance-authority";
import { __assign, __rest, __spreadArray } from "tslib";
import { useScroll, useSpring, motion } from "framer-motion";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx$1(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx$1(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const black = "#000000";
const white = "#FFFFFF";
const palette = {
  black: {
    base: black,
    a90: `rgba(${black}, 90%)`,
    a80: `rgba(${black}, 80%)`,
    a70: `rgba(${black}, 70%)`,
    a60: `rgba(${black}, 60%)`,
    a50: `rgba(${black}, 50%)`,
    a40: `rgba(${black}, 40%)`,
    a30: `rgba(${black}, 30%)`,
    a20: `rgba(${black}, 20%)`,
    a10: `rgba(${black}, 10%)`,
    a5: `rgba(${black}, 5%)`,
    a3: `rgba(${black}, 3%)`
  },
  white: {
    base: white,
    a90: `rgba(${white}, 90%)`,
    a80: `rgba(${white}, 80%)`,
    a70: `rgba(${white}, 70%)`,
    a60: `rgba(${white}, 60%)`,
    a50: `rgba(${white}, 50%)`,
    a40: `rgba(${white}, 40%)`,
    a30: `rgba(${white}, 30%)`,
    a20: `rgba(${white}, 20%)`,
    a10: `rgba(${white}, 10%)`,
    a5: `rgba(${white}, 5%)`,
    a3: `rgba(${white}, 3%)`
  },
  gray: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0A0A0A"
  },
  red: {
    50: "#FDF3F3",
    100: "#FBE5E5",
    200: "#F9CFCF",
    300: "#F3AEAE",
    400: "#EA807F",
    500: "#DD5352",
    600: "#CA3938",
    700: "#A92D2C",
    800: "#8C2928",
    900: "#752827",
    950: "#3F1010"
  },
  orange: {
    50: "#FFF4E6",
    100: "#FFDEB0",
    200: "#FFCE8A",
    300: "#FFB854",
    400: "#FFAA33",
    500: "#FF9500",
    600: "#E88800",
    700: "#B56A00",
    800: "#8C5200",
    900: "#6B3F00",
    950: "#553200"
  },
  yellow: {
    50: "#FFFAE6",
    100: "#FFEFB0",
    200: "#FFE88A",
    300: "#FFDD54",
    400: "#FFD633",
    500: "#FFCC00",
    600: "#E8BA00",
    700: "#B59100",
    800: "#8C7000",
    900: "#6B5600",
    950: "#5E4B00"
  },
  green: {
    50: "#F1FCF5",
    100: "#DFF9EB",
    200: "#C0F2D7",
    300: "#8FE6B8",
    400: "#57D191",
    500: "#34C578",
    600: "#23955A",
    700: "#1F754A",
    800: "#1D5E40",
    900: "#194D36",
    950: "#092A1D"
  },
  sky: {
    50: "#F2F9FE",
    100: "#E3F1FD",
    200: "#C3E5FA",
    300: "#91D1F8",
    400: "#61BAF3",
    500: "#4AA3E3",
    600: "#3882C2",
    700: "#2C679C",
    800: "#265881",
    900: "#21496B",
    950: "#142E47"
  },
  blue: {
    50: "#E6F2FF",
    100: "#B0D6FF",
    200: "#8AC2FF",
    300: "#54A6FF",
    400: "#3395FF",
    500: "#007AFF",
    600: "#006FE8",
    700: "#0057B5",
    800: "#00438C",
    900: "#00336B",
    950: "#042C5D"
  },
  purple: {
    50: "#F7EEFC",
    100: "#E6C9F5",
    200: "#DAAFF0",
    300: "#C98BE9",
    400: "#BF75E5",
    500: "#AF52DE",
    600: "#9F4BCA",
    700: "#7C3A9E",
    800: "#602D7A",
    900: "#4A225D",
    950: "#3B1B4A"
  }
};
const radiusValue = "0.5rem";
const themes$1 = {
  light: {
    background: "0 0% 100%",
    foreground: "224 71.4% 4.1%",
    card: "0 0% 100%",
    cardForeground: "224 71.4% 4.1%",
    popover: "0 0% 100%",
    popoverForeground: "224 71.4% 4.1%",
    primary: {
      DEFAULT: "#0052FF",
      50: "#f0f2ff",
      100: "#dde1ff",
      200: "#c0c7ff",
      300: "#94a0ff",
      400: "#576aff",
      500: "#233cff",
      600: "#0420ff",
      700: "#0018d7",
      800: "#0010a6",
      900: "#000b7f",
      950: "#00064c"
    },
    primaryForeground: "224 71.4% 4.1%",
    secondary: "220 14.3% 95.9%",
    secondaryForeground: "220.9 39.3% 11%",
    muted: "220 14.3% 95.9%",
    mutedForeground: "220 8.9% 46.1%",
    accent: "220 14.3% 95.9%",
    accentForeground: "220.9 39.3% 11%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "210 20% 98%",
    border: "215 27.9% 16.9%",
    input: "215 27.9% 16.9%",
    ring: "216 12.2% 83.9%",
    radius: radiusValue,
    // custom attributes
    success: palette.green[500],
    successForeground: palette.black.base,
    warning: palette.yellow[600],
    warningForeground: palette.black.base,
    for: palette.blue[500],
    forForeground: palette.white.base,
    against: palette.orange[500],
    againstForeground: palette.black.base,
    social: palette.purple[600],
    socialForeground: palette.black.base
  },
  dark: {
    background: palette.black.base,
    foreground: palette.white.base,
    card: palette.black.base,
    cardForeground: palette.white.base,
    popover: palette.black.base,
    popoverForeground: palette.white.base,
    primary: {
      DEFAULT: palette.gray[50],
      ...palette.gray
    },
    primaryForeground: palette.black.base,
    secondary: palette.white.base,
    secondaryForeground: palette.gray[400],
    muted: palette.gray[800],
    mutedForeground: palette.gray[500],
    accent: palette.blue[500],
    accentForeground: palette.white.base,
    destructive: palette.red[500],
    destructiveForeground: palette.white.base,
    border: palette.white.base,
    input: palette.white.base,
    ring: palette.white.base,
    radius: radiusValue,
    // custom attributes
    success: palette.green[500],
    successForeground: palette.black.base,
    warning: palette.yellow[600],
    warningForeground: palette.black.base,
    for: palette.blue[600],
    forForeground: palette.white.base,
    against: palette.orange[600],
    againstForeground: palette.black.base,
    social: palette.purple[600],
    socialForeground: palette.black.base
  }
};
function cn$1(...inputs) {
  return twMerge(clsx(inputs));
}
function colorMix(color2, opacity) {
  return `color-mix(in srgb, var(--${color2}) calc(${opacity || "<alpha-value>"} * 100%), transparent)`;
}
var Theme = /* @__PURE__ */ ((Theme2) => {
  Theme2["DARK"] = "dark";
  Theme2["LIGHT"] = "light";
  Theme2["SYSTEM"] = "system";
  return Theme2;
})(Theme || {});
const themesList = Object.values(Theme);
require$$0(
  // 1. Add css variable definitions to the base layer
  function({ addBase, addUtilities }) {
    addBase({
      ":root": {
        "--background": themes$1.light.background,
        "--foreground": themes$1.light.foreground,
        "--card": themes$1.light.card,
        "--card-foreground": themes$1.light.cardForeground,
        "--popover": themes$1.light.popover,
        "--popover-foreground": themes$1.light.popoverForeground,
        "--primary": themes$1.light.primary.DEFAULT,
        "--primary-foreground": themes$1.light.primaryForeground,
        "--secondary": themes$1.light.secondary,
        "--secondary-foreground": themes$1.light.secondaryForeground,
        "--muted": themes$1.light.muted,
        "--muted-foreground": themes$1.light.mutedForeground,
        "--accent": themes$1.light.accent,
        "--accent-foreground": themes$1.light.accentForeground,
        "--destructive": themes$1.light.destructive,
        "--destructive-foreground": themes$1.light.destructiveForeground,
        "--border": themes$1.light.border,
        "--input": themes$1.light.input,
        "--ring": themes$1.light.ring,
        "--radius": themes$1.light.radius,
        "--success": themes$1.light.success,
        "--success-foreground": themes$1.light.successForeground,
        "--warning": themes$1.light.warning,
        "--warning-foreground": themes$1.light.warningForeground,
        "--for": themes$1.light.for,
        "--for-foreground": themes$1.light.forForeground,
        "--against": themes$1.light.against,
        "--against-foreground": themes$1.light.againstForeground,
        "--social": themes$1.light.social,
        "--social-foreground": themes$1.light.socialForeground,
        // primary
        "--primary-50": themes$1.light.primary[50],
        "--primary-100": themes$1.light.primary[100],
        "--primary-200": themes$1.light.primary[200],
        "--primary-300": themes$1.light.primary[300],
        "--primary-400": themes$1.light.primary[400],
        "--primary-500": themes$1.light.primary[500],
        "--primary-600": themes$1.light.primary[600],
        "--primary-700": themes$1.light.primary[700],
        "--primary-800": themes$1.light.primary[800],
        "--primary-900": themes$1.light.primary[900],
        "--primary-950": themes$1.light.primary[950]
      }
    });
    Object.entries(themes$1).forEach(([key, value]) => {
      addBase({
        [`[data-theme="${key}"]`]: {
          "--background": value.background,
          "--foreground": value.foreground,
          "--card": value.card,
          "--card-foreground": value.cardForeground,
          "--popover": value.popover,
          "--popover-foreground": value.popoverForeground,
          "--primary": value.primary.DEFAULT,
          "--primary-foreground": value.primaryForeground,
          "--secondary": value.secondary,
          "--secondary-foreground": value.secondaryForeground,
          "--muted": value.muted,
          "--muted-foreground": value.mutedForeground,
          "--accent": value.accent,
          "--accent-foreground": value.accentForeground,
          "--destructive": value.destructive,
          "--destructive-foreground": value.destructiveForeground,
          "--border": value.border,
          "--input": value.input,
          "--ring": value.ring,
          "--radius": value.radius,
          "--success": value.success,
          "--success-foreground": value.successForeground,
          "--warning": value.warning,
          "--warning-foreground": value.warningForeground,
          "--for": value.for,
          "--for-foreground": value.forForeground,
          "--against": value.against,
          "--against-foreground": value.againstForeground,
          "--social": value.social,
          "--social-foreground": value.socialForeground,
          // primary
          "--primary-50": value.primary[50],
          "--primary-100": value.primary[100],
          "--primary-200": value.primary[200],
          "--primary-300": value.primary[300],
          "--primary-400": value.primary[400],
          "--primary-500": value.primary[500],
          "--primary-600": value.primary[600],
          "--primary-700": value.primary[700],
          "--primary-800": value.primary[800],
          "--primary-900": value.primary[900],
          "--primary-950": value.primary[950]
        }
      });
    });
    addBase({
      body: {
        "@apply bg-background text-foreground": {},
        "font-feature-settings": '"rlig" 1, "calt" 1'
      },
      ".theme-border": {
        "@apply border border-border/20": {}
      },
      ".in-out-gradient": {
        "@apply bg-gradient-to-r from-border/5 from-10% via-border/20 via-50% to-border/5 to-90%": {}
      },
      ".in-out-gradient-strong": {
        "@apply bg-gradient-to-r from-transparent from-10% via-border/20 via-50% to-transparent to-90%": {}
      }
    });
    addUtilities({
      // Gradients
      ".primary-gradient-subtle": {
        background: `linear-gradient(${colorMix("primary", 0.1)}, ${colorMix("primary", 0.05)})`
      },
      ".primary-gradient": {
        background: `linear-gradient(${colorMix("primary", 0.4)}, ${colorMix("primary", 0.2)})`
      },
      ".primary-gradient-strong": {
        background: `linear-gradient(${colorMix("primary", 0.8)}, ${colorMix("primary", 0.5)})`
      }
    });
  },
  // 2. Extend the tailwind theme with 'themable' utilities
  {
    theme: {
      container: {
        center: true,
        padding: "2rem"
      },
      extend: {
        fontFamily: {
          sans: ["Geist", ...defaultTheme.fontFamily.sans]
        },
        borderWidth: {
          DEFAULT: "1px",
          px: "1px"
        },
        fontSize: {
          xs: ["0.625rem", "1rem"],
          // small
          sm: ["0.75rem", "1.125rem"],
          // caption & footnote
          base: ["0.875rem", "1.25rem"],
          // body
          lg: ["1rem", "1.875rem"],
          // bodyLarge
          xl: ["1.25rem", "1.875rem"],
          // headline
          "2xl": "1.5rem",
          // heading5
          "3xl": "1.875rem",
          // heading4
          "4xl": "2.5rem",
          // heading3
          "5xl": "3.125rem",
          // heading2
          "6xl": "3.75rem"
          // heading1
        },
        colors: {
          border: colorMix("border"),
          input: colorMix("input"),
          ring: colorMix("ring"),
          background: colorMix("background"),
          foreground: colorMix("foreground"),
          primary: {
            DEFAULT: colorMix("primary"),
            foreground: colorMix("primary-foreground"),
            50: colorMix("primary-50"),
            100: colorMix("primary-100"),
            200: colorMix("primary-200"),
            300: colorMix("primary-300"),
            400: colorMix("primary-400"),
            500: colorMix("primary-500"),
            600: colorMix("primary-600"),
            700: colorMix("primary-700"),
            800: colorMix("primary-800"),
            900: colorMix("primary-900"),
            950: colorMix("primary-950")
          },
          secondary: {
            DEFAULT: colorMix("secondary"),
            foreground: colorMix("secondary-foreground")
          },
          destructive: {
            DEFAULT: colorMix("destructive"),
            foreground: colorMix("destructive-foreground")
          },
          muted: {
            DEFAULT: colorMix("muted"),
            foreground: colorMix("muted-foreground")
          },
          accent: {
            DEFAULT: colorMix("accent"),
            foreground: colorMix("accent-foreground")
          },
          warning: {
            DEFAULT: colorMix("warning"),
            foreground: colorMix("warning-foreground")
          },
          success: {
            DEFAULT: colorMix("success"),
            foreground: colorMix("success-foreground")
          },
          popover: {
            DEFAULT: colorMix("popover"),
            foreground: colorMix("popover-foreground")
          },
          card: {
            DEFAULT: colorMix("card"),
            foreground: colorMix("card-foreground")
          },
          for: {
            DEFAULT: colorMix("for"),
            foreground: colorMix("for-foreground")
          },
          against: {
            DEFAULT: colorMix("against"),
            foreground: colorMix("against-foreground")
          },
          social: {
            DEFAULT: colorMix("social"),
            foreground: colorMix("social-foreground")
          }
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" }
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" }
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out"
        },
        boxShadow: {
          "sm-subtle": "0px 5px 5px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.03), 0px 1px 0px 0px rgba(0, 0, 0, 0.03)",
          "md-subtle": "0px 8px 8px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.03)",
          "lg-subtle": "0px 10px 10px 0px rgba(0, 0, 0, 0.05), 0px 6px 6px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.03)",
          "xl-subtle": "0px 12px 12px 0px rgba(0, 0, 0, 0.06), 0px 8px 8px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.03)",
          sm: "0px 10px 10px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)",
          md: "0px 15px 30px 0px rgba(0, 0, 0, 0.15), 0px 5px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
          lg: "0px 15px 30px 0px rgba(0, 0, 0, 0.15), 0px 10px 20px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10)",
          xl: "0px 20px 40px 0px rgba(0, 0, 0, 0.15), 0px 15px 30px 0px rgba(0, 0, 0, 0.10), 0px 5px 10px 0px rgba(0, 0, 0, 0.10)",
          "sm-strong": "0px 10px 10px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)",
          "md-strong": "0px 10px 20px 0px rgba(0, 0, 0, 0.20), 0px 5px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
          "lg-strong": "0px 15px 30px 0px rgba(0, 0, 0, 0.20), 0px 10px 20px 0px rgba(0, 0, 0, 0.15), 0px 3px 6px 0px rgba(0, 0, 0, 0.10)",
          "xl-strong": "0px 20px 40px 0px rgba(0, 0, 0, 0.25), 0px 15px 30px 0px rgba(0, 0, 0, 0.15), 0px 5px 10px 0px rgba(0, 0, 0, 0.05)"
        }
      }
    }
  }
);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k2) {
    var d = Object.getOwnPropertyDescriptor(n, k2);
    Object.defineProperty(a, k2, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k2];
      }
    });
  });
  return a;
}
var _plugin = /* @__PURE__ */ _interopRequireDefault(require$$0);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
(0, _plugin.default)(function containerQueries(param) {
  var matchUtilities = param.matchUtilities, matchVariant = param.matchVariant, theme3 = param.theme;
  var parseValue = function parseValue2(value) {
    var _value_match;
    var _value_match_;
    var numericValue = (_value_match_ = (_value_match = value.match(/^(\d+\.\d+|\d+|\.\d+)\D+/)) === null || _value_match === void 0 ? void 0 : _value_match[1]) !== null && _value_match_ !== void 0 ? _value_match_ : null;
    if (numericValue === null)
      return null;
    return parseFloat(value);
  };
  var _theme;
  var values = (_theme = theme3("containers")) !== null && _theme !== void 0 ? _theme : {};
  matchUtilities({
    "@container": function(value, param2) {
      var modifier = param2.modifier;
      return {
        "container-type": value,
        "container-name": modifier
      };
    }
  }, {
    values: {
      DEFAULT: "inline-size",
      normal: "normal"
    },
    modifiers: "any"
  });
  matchVariant("@", function() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", modifier = (arguments.length > 1 ? arguments[1] : void 0).modifier;
    var parsed = parseValue(value);
    return parsed !== null ? "@container ".concat(modifier !== null && modifier !== void 0 ? modifier : "", " (min-width: ").concat(value, ")") : [];
  }, {
    values,
    sort: function sort(aVariant, zVariant) {
      var a = parseFloat(aVariant.value);
      var z = parseFloat(zVariant.value);
      if (a === null || z === null)
        return 0;
      if (a - z !== 0)
        return a - z;
      var _aVariant_modifier;
      var aLabel = (_aVariant_modifier = aVariant.modifier) !== null && _aVariant_modifier !== void 0 ? _aVariant_modifier : "";
      var _zVariant_modifier;
      var zLabel = (_zVariant_modifier = zVariant.modifier) !== null && _zVariant_modifier !== void 0 ? _zVariant_modifier : "";
      if (aLabel === "" && zLabel !== "") {
        return 1;
      } else if (aLabel !== "" && zLabel === "") {
        return -1;
      }
      return aLabel.localeCompare(zLabel, "en", {
        numeric: true
      });
    }
  });
}, {
  theme: {
    containers: {
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    }
  }
});
const plugin = require$$0;
function filterDefault(values) {
  return Object.fromEntries(
    Object.entries(values).filter(([key]) => key !== "DEFAULT")
  );
}
plugin(
  ({ addUtilities, matchUtilities, theme: theme3 }) => {
    addUtilities({
      "@keyframes enter": theme3("keyframes.enter"),
      "@keyframes exit": theme3("keyframes.exit"),
      ".animate-in": {
        animationName: "enter",
        animationDuration: theme3("animationDuration.DEFAULT"),
        "--tw-enter-opacity": "initial",
        "--tw-enter-scale": "initial",
        "--tw-enter-rotate": "initial",
        "--tw-enter-translate-x": "initial",
        "--tw-enter-translate-y": "initial"
      },
      ".animate-out": {
        animationName: "exit",
        animationDuration: theme3("animationDuration.DEFAULT"),
        "--tw-exit-opacity": "initial",
        "--tw-exit-scale": "initial",
        "--tw-exit-rotate": "initial",
        "--tw-exit-translate-x": "initial",
        "--tw-exit-translate-y": "initial"
      }
    });
    matchUtilities(
      {
        "fade-in": (value) => ({ "--tw-enter-opacity": value }),
        "fade-out": (value) => ({ "--tw-exit-opacity": value })
      },
      { values: theme3("animationOpacity") }
    );
    matchUtilities(
      {
        "zoom-in": (value) => ({ "--tw-enter-scale": value }),
        "zoom-out": (value) => ({ "--tw-exit-scale": value })
      },
      { values: theme3("animationScale") }
    );
    matchUtilities(
      {
        "spin-in": (value) => ({ "--tw-enter-rotate": value }),
        "spin-out": (value) => ({ "--tw-exit-rotate": value })
      },
      { values: theme3("animationRotate") }
    );
    matchUtilities(
      {
        "slide-in-from-top": (value) => ({
          "--tw-enter-translate-y": `-${value}`
        }),
        "slide-in-from-bottom": (value) => ({
          "--tw-enter-translate-y": value
        }),
        "slide-in-from-left": (value) => ({
          "--tw-enter-translate-x": `-${value}`
        }),
        "slide-in-from-right": (value) => ({
          "--tw-enter-translate-x": value
        }),
        "slide-out-to-top": (value) => ({
          "--tw-exit-translate-y": `-${value}`
        }),
        "slide-out-to-bottom": (value) => ({
          "--tw-exit-translate-y": value
        }),
        "slide-out-to-left": (value) => ({
          "--tw-exit-translate-x": `-${value}`
        }),
        "slide-out-to-right": (value) => ({
          "--tw-exit-translate-x": value
        })
      },
      { values: theme3("animationTranslate") }
    );
    matchUtilities(
      { duration: (value) => ({ animationDuration: value }) },
      { values: filterDefault(theme3("animationDuration")) }
    );
    matchUtilities(
      { delay: (value) => ({ animationDelay: value }) },
      { values: theme3("animationDelay") }
    );
    matchUtilities(
      { ease: (value) => ({ animationTimingFunction: value }) },
      { values: filterDefault(theme3("animationTimingFunction")) }
    );
    addUtilities({
      ".running": { animationPlayState: "running" },
      ".paused": { animationPlayState: "paused" }
    });
    matchUtilities(
      { "fill-mode": (value) => ({ animationFillMode: value }) },
      { values: theme3("animationFillMode") }
    );
    matchUtilities(
      { direction: (value) => ({ animationDirection: value }) },
      { values: theme3("animationDirection") }
    );
    matchUtilities(
      { repeat: (value) => ({ animationIterationCount: value }) },
      { values: theme3("animationRepeat") }
    );
  },
  {
    theme: {
      extend: {
        animationDelay: ({ theme: theme3 }) => ({
          ...theme3("transitionDelay")
        }),
        animationDuration: ({ theme: theme3 }) => ({
          0: "0ms",
          ...theme3("transitionDuration")
        }),
        animationTimingFunction: ({ theme: theme3 }) => ({
          ...theme3("transitionTimingFunction")
        }),
        animationFillMode: {
          none: "none",
          forwards: "forwards",
          backwards: "backwards",
          both: "both"
        },
        animationDirection: {
          normal: "normal",
          reverse: "reverse",
          alternate: "alternate",
          "alternate-reverse": "alternate-reverse"
        },
        animationOpacity: ({ theme: theme3 }) => ({
          DEFAULT: 0,
          ...theme3("opacity")
        }),
        animationTranslate: ({ theme: theme3 }) => ({
          DEFAULT: "100%",
          ...theme3("translate")
        }),
        animationScale: ({ theme: theme3 }) => ({
          DEFAULT: 0,
          ...theme3("scale")
        }),
        animationRotate: ({ theme: theme3 }) => ({
          DEFAULT: "30deg",
          ...theme3("rotate")
        }),
        animationRepeat: {
          0: "0",
          1: "1",
          infinite: "infinite"
        },
        keyframes: {
          enter: {
            from: {
              opacity: "var(--tw-enter-opacity, 1)",
              transform: "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))"
            }
          },
          exit: {
            to: {
              opacity: "var(--tw-exit-opacity, 1)",
              transform: "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))"
            }
          }
        }
      }
    }
  }
);
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ createContext$1(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope: scope2, children, ...context } = props;
      const Context = (scope2 === null || scope2 === void 0 ? void 0 : scope2[scopeName][index2]) || BaseContext;
      const value = useMemo$1(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ createElement$1(Context.Provider, {
        value
      }, children);
    }
    function useContext2(consumerName, scope2) {
      const Context = (scope2 === null || scope2 === void 0 ? void 0 : scope2[scopeName][index2]) || BaseContext;
      const context = useContext$1(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext2
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ createContext$1(defaultContext);
    });
    return function useScope(scope2) {
      const contexts = (scope2 === null || scope2 === void 0 ? void 0 : scope2[scopeName]) || scopeContexts;
      return useMemo$1(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope2,
            [scopeName]: contexts
          }
        }),
        [
          scope2,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return useMemo$1(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node2) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node2)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return useCallback$1($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}
const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (Children.count(newElement) > 1)
          return Children.only(null);
        return /* @__PURE__ */ isValidElement(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ createElement$1($5e63c961fc1ce211$var$SlotClone, _extends$2({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ isValidElement(newElement) ? /* @__PURE__ */ cloneElement(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ createElement$1($5e63c961fc1ce211$var$SlotClone, _extends$2({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
const $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ isValidElement(children))
    return /* @__PURE__ */ cloneElement(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    });
  return Children.count(children) > 1 ? Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ createElement$1(Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope: scope2, children } = props;
    const ref = React__default.useRef(null);
    const itemMap = React__default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ React__default.createElement(CollectionProviderImpl, {
      scope: scope2,
      itemMap,
      collectionRef: ref
    }, children);
  };
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
    const { scope: scope2, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope2);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ React__default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
    const { scope: scope2, children, ...itemData } = props;
    const ref = React__default.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope2);
    React__default.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ React__default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  function useCollection2(scope2) {
    const context = useCollectionContext(name + "CollectionConsumer", scope2);
    const getItems = React__default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection2,
    createCollectionScope2
  ];
}
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = useRef$1(callback);
  useEffect$1(() => {
    callbackRef.current = callback;
  });
  return useMemo$1(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = useCallback$1((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = useState$1(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = useRef$1(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  useEffect$1(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}
const $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node2) => {
  const Node2 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node2;
    useEffect$1(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ createElement$1(Comp, _extends$2({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node2.displayName = `Primitive.${node2}`;
  return {
    ...primitive,
    [node2]: Node2
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    flushSync(
      () => target.dispatchEvent(event)
    );
}
const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? useLayoutEffect$1 : () => {
};
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ cloneElement(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = useState$1();
  const stylesRef = useRef$1({});
  const prevPresentRef = useRef$1(present);
  const prevAnimationNameRef = useRef$1("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  useEffect$1(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          flushSync(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: useCallback$1((node2) => {
      if (node2)
        stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}
const $1746a345f3d73bb7$var$useReactId = React$1["useId".toString()] || (() => void 0);
let $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = React$1.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    setId(
      (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
    );
  }, [
    deterministicId
  ]);
  return id ? `radix-${id}` : "";
}
const $409067139f391064$var$COLLAPSIBLE_NAME = "Collapsible";
const [$409067139f391064$var$createCollapsibleContext, $409067139f391064$export$952b32dcbe73087a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($409067139f391064$var$COLLAPSIBLE_NAME);
const [$409067139f391064$var$CollapsibleProvider, $409067139f391064$var$useCollapsibleContext] = $409067139f391064$var$createCollapsibleContext($409067139f391064$var$COLLAPSIBLE_NAME);
const $409067139f391064$export$6eb0f7ddcda6131f = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ createElement$1($409067139f391064$var$CollapsibleProvider, {
    scope: __scopeCollapsible,
    disabled,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenToggle: useCallback$1(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    )
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    "data-state": $409067139f391064$var$getState(open),
    "data-disabled": disabled ? "" : void 0
  }, collapsibleProps, {
    ref: forwardedRef
  })));
});
const $409067139f391064$var$TRIGGER_NAME = "CollapsibleTrigger";
const $409067139f391064$export$c135dce7b15bbbdc = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeCollapsible, ...triggerProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$TRIGGER_NAME, __scopeCollapsible);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$2({
    type: "button",
    "aria-controls": context.contentId,
    "aria-expanded": context.open || false,
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    disabled: context.disabled
  }, triggerProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
const $409067139f391064$var$CONTENT_NAME = "CollapsibleContent";
const $409067139f391064$export$aadde00976f34151 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, props.__scopeCollapsible);
  return /* @__PURE__ */ createElement$1(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || context.open
    },
    ({ present }) => /* @__PURE__ */ createElement$1($409067139f391064$var$CollapsibleContentImpl, _extends$2({}, contentProps, {
      ref: forwardedRef,
      present
    }))
  );
});
const $409067139f391064$var$CollapsibleContentImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = $409067139f391064$var$useCollapsibleContext($409067139f391064$var$CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = useState$1(present);
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const heightRef = useRef$1(0);
  const height = heightRef.current;
  const widthRef = useRef$1(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = useRef$1(isOpen);
  const originalStylesRef = useRef$1();
  useEffect$1(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const node2 = ref.current;
    if (node2) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node2.style.transitionDuration,
        animationName: node2.style.animationName
      };
      node2.style.transitionDuration = "0s";
      node2.style.animationName = "none";
      const rect = node2.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node2.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node2.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [
    context.open,
    present
  ]);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    "data-state": $409067139f391064$var$getState(context.open),
    "data-disabled": context.disabled ? "" : void 0,
    id: context.contentId,
    hidden: !isOpen
  }, contentProps, {
    ref: composedRefs,
    style: {
      [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
      [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
      ...props.style
    }
  }), isOpen && children);
});
function $409067139f391064$var$getState(open) {
  return open ? "open" : "closed";
}
const $409067139f391064$export$be92b6f5f03c0fe9 = $409067139f391064$export$6eb0f7ddcda6131f;
const $409067139f391064$export$41fb9f06171c75f4 = $409067139f391064$export$c135dce7b15bbbdc;
const $409067139f391064$export$7c6e2c02157bb7d2 = $409067139f391064$export$aadde00976f34151;
const $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ createContext$1(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = useContext$1($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}
const $1bf158f521e1b1b4$var$ACCORDION_NAME = "Accordion";
const $1bf158f521e1b1b4$var$ACCORDION_KEYS = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
const [$1bf158f521e1b1b4$var$Collection, $1bf158f521e1b1b4$var$useCollection, $1bf158f521e1b1b4$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($1bf158f521e1b1b4$var$ACCORDION_NAME);
const [$1bf158f521e1b1b4$var$createAccordionContext, $1bf158f521e1b1b4$export$9748edc328a73be1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($1bf158f521e1b1b4$var$ACCORDION_NAME, [
  $1bf158f521e1b1b4$var$createCollectionScope,
  $409067139f391064$export$952b32dcbe73087a
]);
const $1bf158f521e1b1b4$var$useCollapsibleScope = $409067139f391064$export$952b32dcbe73087a();
const $1bf158f521e1b1b4$export$a766cd26d0d69044 = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
  const { type, ...accordionProps } = props;
  const singleProps = accordionProps;
  const multipleProps = accordionProps;
  return /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$Collection.Provider, {
    scope: props.__scopeAccordion
  }, type === "multiple" ? /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionImplMultiple, _extends$2({}, multipleProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionImplSingle, _extends$2({}, singleProps, {
    ref: forwardedRef
  })));
});
$1bf158f521e1b1b4$export$a766cd26d0d69044.propTypes = {
  type(props) {
    const value = props.value || props.defaultValue;
    if (props.type && ![
      "single",
      "multiple"
    ].includes(props.type))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.");
    if (props.type === "multiple" && typeof value === "string")
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.");
    if (props.type === "single" && Array.isArray(value))
      return new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.");
    return null;
  }
};
const [$1bf158f521e1b1b4$var$AccordionValueProvider, $1bf158f521e1b1b4$var$useAccordionValueContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
const [$1bf158f521e1b1b4$var$AccordionCollapsibleProvider, $1bf158f521e1b1b4$var$useAccordionCollapsibleContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, {
  collapsible: false
});
const $1bf158f521e1b1b4$var$AccordionImplSingle = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, collapsible = false, ...accordionSingleProps } = props;
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value ? [
      value
    ] : [],
    onItemOpen: setValue,
    onItemClose: React__default.useCallback(
      () => collapsible && setValue(""),
      [
        collapsible,
        setValue
      ]
    )
  }, /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible
  }, /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends$2({}, accordionSingleProps, {
    ref: forwardedRef
  }))));
});
const $1bf158f521e1b1b4$var$AccordionImplMultiple = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, ...accordionMultipleProps } = props;
  const [value1 = [], setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleItemOpen = React__default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => [
        ...prevValue,
        itemValue
      ]
    ),
    [
      setValue
    ]
  );
  const handleItemClose = React__default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => prevValue.filter(
        (value) => value !== itemValue
      )
    ),
    [
      setValue
    ]
  );
  return /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value1,
    onItemOpen: handleItemOpen,
    onItemClose: handleItemClose
  }, /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider, {
    scope: props.__scopeAccordion,
    collapsible: true
  }, /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionImpl, _extends$2({}, accordionMultipleProps, {
    ref: forwardedRef
  }))));
});
const [$1bf158f521e1b1b4$var$AccordionImplProvider, $1bf158f521e1b1b4$var$useAccordionContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME);
const $1bf158f521e1b1b4$var$AccordionImpl = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
  const accordionRef = React__default.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(accordionRef, forwardedRef);
  const getItems = $1bf158f521e1b1b4$var$useCollection(__scopeAccordion);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const isDirectionLTR = direction === "ltr";
  const handleKeyDown = $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
    var _triggerCollection$cl;
    if (!$1bf158f521e1b1b4$var$ACCORDION_KEYS.includes(event.key))
      return;
    const target = event.target;
    const triggerCollection = getItems().filter((item) => {
      var _item$ref$current;
      return !((_item$ref$current = item.ref.current) !== null && _item$ref$current !== void 0 && _item$ref$current.disabled);
    });
    const triggerIndex = triggerCollection.findIndex(
      (item) => item.ref.current === target
    );
    const triggerCount = triggerCollection.length;
    if (triggerIndex === -1)
      return;
    event.preventDefault();
    let nextIndex = triggerIndex;
    const homeIndex = 0;
    const endIndex = triggerCount - 1;
    const moveNext = () => {
      nextIndex = triggerIndex + 1;
      if (nextIndex > endIndex)
        nextIndex = homeIndex;
    };
    const movePrev = () => {
      nextIndex = triggerIndex - 1;
      if (nextIndex < homeIndex)
        nextIndex = endIndex;
    };
    switch (event.key) {
      case "Home":
        nextIndex = homeIndex;
        break;
      case "End":
        nextIndex = endIndex;
        break;
      case "ArrowRight":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            moveNext();
          else
            movePrev();
        }
        break;
      case "ArrowDown":
        if (orientation === "vertical")
          moveNext();
        break;
      case "ArrowLeft":
        if (orientation === "horizontal") {
          if (isDirectionLTR)
            movePrev();
          else
            moveNext();
        }
        break;
      case "ArrowUp":
        if (orientation === "vertical")
          movePrev();
        break;
    }
    const clampedIndex = nextIndex % triggerCount;
    (_triggerCollection$cl = triggerCollection[clampedIndex].ref.current) === null || _triggerCollection$cl === void 0 || _triggerCollection$cl.focus();
  });
  return /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionImplProvider, {
    scope: __scopeAccordion,
    disabled,
    direction: dir,
    orientation
  }, /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$Collection.Slot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ React__default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({}, accordionProps, {
    "data-orientation": orientation,
    ref: composedRefs,
    onKeyDown: disabled ? void 0 : handleKeyDown
  }))));
});
const $1bf158f521e1b1b4$var$ITEM_NAME = "AccordionItem";
const [$1bf158f521e1b1b4$var$AccordionItemProvider, $1bf158f521e1b1b4$var$useAccordionItemContext] = $1bf158f521e1b1b4$var$createAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME);
const $1bf158f521e1b1b4$export$d99097c13d4dac9f = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, value, ...accordionItemProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const valueContext = $1bf158f521e1b1b4$var$useAccordionValueContext($1bf158f521e1b1b4$var$ITEM_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  const triggerId = $1746a345f3d73bb7$export$f680877a34711e37();
  const open1 = value && valueContext.value.includes(value) || false;
  const disabled = accordionContext.disabled || props.disabled;
  return /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$AccordionItemProvider, {
    scope: __scopeAccordion,
    open: open1,
    disabled,
    triggerId
  }, /* @__PURE__ */ React__default.createElement($409067139f391064$export$be92b6f5f03c0fe9, _extends$2({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(open1)
  }, collapsibleScope, accordionItemProps, {
    ref: forwardedRef,
    disabled,
    open: open1,
    onOpenChange: (open) => {
      if (open)
        valueContext.onItemOpen(value);
      else
        valueContext.onItemClose(value);
    }
  })));
});
const $1bf158f521e1b1b4$var$HEADER_NAME = "AccordionHeader";
const $1bf158f521e1b1b4$export$5e3e5deaaf81ee41 = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...headerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$HEADER_NAME, __scopeAccordion);
  return /* @__PURE__ */ React__default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h3, _extends$2({
    "data-orientation": accordionContext.orientation,
    "data-state": $1bf158f521e1b1b4$var$getState(itemContext.open),
    "data-disabled": itemContext.disabled ? "" : void 0
  }, headerProps, {
    ref: forwardedRef
  }));
});
const $1bf158f521e1b1b4$var$TRIGGER_NAME = "AccordionTrigger";
const $1bf158f521e1b1b4$export$94e939b1f85bdd73 = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...triggerProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleContext = $1bf158f521e1b1b4$var$useAccordionCollapsibleContext($1bf158f521e1b1b4$var$TRIGGER_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ React__default.createElement($1bf158f521e1b1b4$var$Collection.ItemSlot, {
    scope: __scopeAccordion
  }, /* @__PURE__ */ React__default.createElement($409067139f391064$export$41fb9f06171c75f4, _extends$2({
    "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
    "data-orientation": accordionContext.orientation,
    id: itemContext.triggerId
  }, collapsibleScope, triggerProps, {
    ref: forwardedRef
  })));
});
const $1bf158f521e1b1b4$var$CONTENT_NAME = "AccordionContent";
const $1bf158f521e1b1b4$export$985b9a77379b54a0 = /* @__PURE__ */ React__default.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...contentProps } = props;
  const accordionContext = $1bf158f521e1b1b4$var$useAccordionContext($1bf158f521e1b1b4$var$ACCORDION_NAME, __scopeAccordion);
  const itemContext = $1bf158f521e1b1b4$var$useAccordionItemContext($1bf158f521e1b1b4$var$CONTENT_NAME, __scopeAccordion);
  const collapsibleScope = $1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ React__default.createElement($409067139f391064$export$7c6e2c02157bb7d2, _extends$2({
    role: "region",
    "aria-labelledby": itemContext.triggerId,
    "data-orientation": accordionContext.orientation
  }, collapsibleScope, contentProps, {
    ref: forwardedRef,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...props.style
    }
  }));
});
function $1bf158f521e1b1b4$var$getState(open) {
  return open ? "open" : "closed";
}
const $1bf158f521e1b1b4$export$6d08773d2e66f8f2 = $1bf158f521e1b1b4$export$d99097c13d4dac9f;
const $1bf158f521e1b1b4$export$8b251419efc915eb = $1bf158f521e1b1b4$export$5e3e5deaaf81ee41;
const $1bf158f521e1b1b4$export$41fb9f06171c75f4 = $1bf158f521e1b1b4$export$94e939b1f85bdd73;
const $1bf158f521e1b1b4$export$7c6e2c02157bb7d2 = $1bf158f521e1b1b4$export$985b9a77379b54a0;
const AccordionItem = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $1bf158f521e1b1b4$export$6d08773d2e66f8f2,
  {
    ref,
    className: cn$1("border-0 border-b border-border/30", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React$1.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx$1($1bf158f521e1b1b4$export$8b251419efc915eb, { className: "flex", children: /* @__PURE__ */ jsxs(
  $1bf158f521e1b1b4$export$41fb9f06171c75f4,
  {
    ref,
    className: cn$1(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx$1(
        Icon,
        {
          name: IconName.chevronDownSmall,
          className: "h-5 w-5 shrink-0 transition-transform duration-200"
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = $1bf158f521e1b1b4$export$41fb9f06171c75f4.displayName;
const AccordionContent = React$1.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $1bf158f521e1b1b4$export$7c6e2c02157bb7d2,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx$1("div", { className: cn$1("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = $1bf158f521e1b1b4$export$7c6e2c02157bb7d2.displayName;
const Identity = {
  user: "user",
  nonUser: "non-user"
};
const $cddcb0b647441e34$var$AVATAR_NAME = "Avatar";
const [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cddcb0b647441e34$var$AVATAR_NAME);
const [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
const $cddcb0b647441e34$export$e2255cf6045e8d47 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeAvatar, ...avatarProps } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = useState$1("idle");
  return /* @__PURE__ */ createElement$1($cddcb0b647441e34$var$AvatarProvider, {
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({}, avatarProps, {
    ref: forwardedRef
  })));
});
const $cddcb0b647441e34$var$IMAGE_NAME = "AvatarImage";
const $cddcb0b647441e34$export$2cd8ae1985206fe8 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeAvatar, src, onLoadingStatusChange = () => {
  }, ...imageProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
  const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
  const handleLoadingStatusChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a((status) => {
    onLoadingStatusChange(status);
    context.onImageLoadingStatusChange(status);
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (imageLoadingStatus !== "idle")
      handleLoadingStatusChange(imageLoadingStatus);
  }, [
    imageLoadingStatus,
    handleLoadingStatusChange
  ]);
  return imageLoadingStatus === "loaded" ? /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.img, _extends$2({}, imageProps, {
    ref: forwardedRef,
    src
  })) : null;
});
const $cddcb0b647441e34$var$FALLBACK_NAME = "AvatarFallback";
const $cddcb0b647441e34$export$69fffb6a9571fbfe = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeAvatar, delayMs, ...fallbackProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
  const [canRender, setCanRender] = useState$1(delayMs === void 0);
  useEffect$1(() => {
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(
        () => setCanRender(true),
        delayMs
      );
      return () => window.clearTimeout(timerId);
    }
  }, [
    delayMs
  ]);
  return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({}, fallbackProps, {
    ref: forwardedRef
  })) : null;
});
function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
  const [loadingStatus, setLoadingStatus] = useState$1("idle");
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted)
        return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [
    src
  ]);
  return loadingStatus;
}
const $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
const $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
const $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;
const AvatarContainer = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $cddcb0b647441e34$export$be92b6f5f03c0fe9,
  {
    ref,
    className: cn$1(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
AvatarContainer.displayName = $cddcb0b647441e34$export$be92b6f5f03c0fe9.displayName;
const AvatarImage = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $cddcb0b647441e34$export$3e431a229df88919,
  {
    ref,
    className: cn$1("aspect-square object-cover h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = $cddcb0b647441e34$export$3e431a229df88919.displayName;
const AvatarFallback = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $cddcb0b647441e34$export$fb8d7f40caaeea67,
  {
    ref,
    className: cn$1(
      "bg-muted flex h-full w-full items-center justify-center",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = $cddcb0b647441e34$export$fb8d7f40caaeea67.displayName;
cva("aspect-square bg-background theme-border", {
  variants: {
    variant: {
      [Identity.user]: "rounded-full",
      [Identity.nonUser]: "rounded"
    }
  },
  defaultVariants: {
    variant: Identity.user
  }
});
const BadgeVariant = {
  default: "default",
  success: "success",
  accent: "accent",
  social: "social",
  warning: "warning",
  against: "against",
  for: "for",
  destructive: "destructive"
};
cva(
  "inline-flex items-center gap-1 rounded-md pl-1 pr-1.5 py-0.5 text-sm font-light text-foreground/65",
  {
    variants: {
      variant: {
        [BadgeVariant.default]: "bg-primary/10",
        [BadgeVariant.success]: "bg-success/50",
        [BadgeVariant.accent]: "bg-accent/50",
        [BadgeVariant.social]: "bg-social/50",
        [BadgeVariant.warning]: "bg-warning/50",
        [BadgeVariant.against]: "bg-against/50",
        [BadgeVariant.for]: "bg-for/50",
        [BadgeVariant.destructive]: "bg-destructive/50"
      }
    },
    defaultVariants: {
      variant: BadgeVariant.default
    }
  }
);
const ButtonVariant = {
  primary: "primary",
  secondary: "secondary",
  ghost: "ghost",
  text: "text",
  accent: "accent",
  warning: "warning",
  success: "success",
  destructive: "destructive",
  navigation: "navigation",
  accentOutline: "accentOutline",
  warningOutline: "warningOutline",
  successOutline: "successOutline",
  destructiveOutline: "destructiveOutline",
  for: "for",
  against: "against"
};
const ButtonSize = {
  default: "default",
  md: "md",
  lg: "lg",
  xl: "xl",
  icon: "icon",
  iconMd: "iconMd",
  iconLg: "iconLg",
  iconXl: "iconXl"
};
const buttonVariants = cva(
  "flex justify-center items-center gap-2 text-sm font-medium border disabled:bg-muted aria-disabled:bg-muted disabled:text-muted-foreground aria-disabled:text-muted-foreground disabled:border-muted aria-disabled:border-muted aria-disabled:pointer-events-none",
  {
    variants: {
      variant: {
        [ButtonVariant.primary]: "bg-primary text-primary-foreground border-primary hover:bg-primary/80 rounded-full shadow-md-subtle",
        [ButtonVariant.secondary]: "primary-gradient-subtle text-primary/60 border-primary/10 rounded-lg hover:text-primary disabled:from-muted aria-disabled:from-muted disabled:to-muted aria-disabled:to-muted shadow-md-subtle",
        [ButtonVariant.ghost]: "bg-gradient-to-b from-transparent to-transparent text-primary/70 border-primary/50 rounded-lg hover:text-primary hover:border-primary disabled:bg-transparent aria-disabled:bg-transparent aria-selected:primary-gradient-subtle aria-selected:border-primary/10 shadow-md-subtle",
        [ButtonVariant.text]: "bg-transparent text-primary/70 border-transparent hover:text-primary disabled:border-transparent aria-disabled:border-transparent disabled:bg-transparent aria-disabled:bg-transparent shadow-none",
        [ButtonVariant.accent]: "bg-accent text-accent-foreground border-accent rounded-full hover:bg-accent/70 hover:border-accent/30 shadow-md-subtle",
        [ButtonVariant.warning]: "bg-warning text-warning-foreground border-warning rounded-full hover:bg-warning/70 hover:border-warning/30 shadow-md-subtle",
        [ButtonVariant.success]: "bg-success text-success-foreground border-success rounded-full hover:bg-success/70 hover:border-success/30 shadow-md-subtle",
        [ButtonVariant.destructive]: "bg-destructive text-destructive-foreground border-destructive rounded-full hover:bg-destructive/70 hover:border-destructive/30 shadow-md-subtle",
        [ButtonVariant.navigation]: "bg-transparent text-secondary-foreground/70 border-transparent rounded-lg  hover:text-secondary-foreground hover:border-border/20 aria-selected:bg-primary/10 aria-selected:text-secondary-foreground/80 disabled:text-muted-foreground aria-disabled:text-muted-foreground",
        [ButtonVariant.accentOutline]: "bg-transparent text-accent border-accent rounded-full hover:bg-accent/30 hover:border-accent/30 shadow-md-subtle",
        [ButtonVariant.warningOutline]: "bg-transparent text-warning border-warning rounded-full hover:bg-warning/30 hover:border-warning/30 shadow-md-subtle",
        [ButtonVariant.successOutline]: "bg-transparent text-success border-success rounded-full hover:bg-success/30 hover:border-success/30 shadow-md-subtle",
        [ButtonVariant.destructiveOutline]: "bg-transparent text-destructive border-destructive rounded-full hover:bg-destructive/30 hover:border-destructive/30 shadow-md-subtle",
        [ButtonVariant.for]: "bg-for text-for-foreground border-for rounded-full hover:bg-for/70 hover:border-for/30 shadow-md-subtle",
        [ButtonVariant.against]: "bg-against text-against-foreground border-against rounded-full hover:bg-against/70 hover:border-against/30 shadow-md-subtle"
      },
      size: {
        [ButtonSize.default]: "px-3 py-1 max-sm:py-2 max-sm:text-base",
        [ButtonSize.md]: "px-4 py-1.5",
        [ButtonSize.lg]: "px-4 py-2 gap-2 text-base",
        [ButtonSize.xl]: "px-5 py-2.5 gap-4 text-lg",
        [ButtonSize.icon]: "p-1",
        [ButtonSize.iconMd]: "p-1.5",
        [ButtonSize.iconLg]: "p-2",
        [ButtonSize.iconXl]: "p-2.5"
      }
    },
    defaultVariants: {
      variant: ButtonVariant.primary,
      size: ButtonSize.default
    }
  }
);
const Button = React$1.forwardRef(
  ({ className, variant, size: size2, asChild = false, isLoading = false, ...props }, ref) => {
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
    return /* @__PURE__ */ jsxs(
      Comp,
      {
        className: cn$1(buttonVariants({ variant, size: size2, className })),
        ref,
        ...props,
        children: [
          isLoading && /* @__PURE__ */ jsx$1(Icon, { name: IconName.inProgress, className: "h-6 w-6 animate-spin" }),
          props.children
        ]
      }
    );
  }
);
Button.displayName = "Button";
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node2) => refs.forEach((ref) => setRef(ref, node2));
}
function useComposedRefs(...refs) {
  return React$1.useCallback(composeRefs(...refs), refs);
}
function createContext2(rootComponentName, defaultContext) {
  const Context = React$1.createContext(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = React$1.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsx$1(Context.Provider, { value, children });
  }
  function useContext2(consumerName) {
    const context = React$1.useContext(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [Provider, useContext2];
}
function createContextScope$1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = React$1.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope: scope2, children, ...context } = props;
      const Context = scope2?.[scopeName][index2] || BaseContext;
      const value = React$1.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx$1(Context.Provider, { value, children });
    }
    function useContext2(consumerName, scope2) {
      const Context = scope2?.[scopeName][index2] || BaseContext;
      const context = React$1.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React$1.createContext(defaultContext);
    });
    return function useScope(scope2) {
      const contexts = scope2?.[scopeName] || scopeContexts;
      return React$1.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope2, [scopeName]: contexts } }),
        [scope2, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes$1(createScope, ...createContextScopeDeps)];
}
function composeContextScopes$1(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React$1.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}
function useCallbackRef$1(callback) {
  const callbackRef = React$1.useRef(callback);
  React$1.useEffect(() => {
    callbackRef.current = callback;
  });
  return React$1.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef$1(onChange);
  const setValue = React$1.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop)
          handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = React$1.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = React$1.useRef(value);
  const handleChange = useCallbackRef$1(onChange);
  React$1.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}
function usePrevious(value) {
  const ref = React$1.useRef({ value, previous: value });
  return React$1.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
var useLayoutEffect2 = Boolean(globalThis?.document) ? React$1.useLayoutEffect : () => {
};
function useSize(element) {
  const [size2, setSize] = React$1.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry2 = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry2) {
          const borderSizeEntry = entry2["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size2;
}
function useStateMachine$2(initialState, machine) {
  return React$1.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence$1 = (props) => {
  const { present, children } = props;
  const presence = usePresence$1(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React$1.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef$2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React$1.cloneElement(child, { ref }) : null;
};
Presence$1.displayName = "Presence";
function usePresence$1(present) {
  const [node2, setNode] = React$1.useState();
  const stylesRef = React$1.useRef({});
  const prevPresentRef = React$1.useRef(present);
  const prevAnimationNameRef = React$1.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine$2(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React$1.useEffect(() => {
    const currentAnimationName = getAnimationName$1(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName$1(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node2) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName$1(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node2 && isCurrentAnimation) {
          ReactDOM.flushSync(() => send("ANIMATION_END"));
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node2) {
          prevAnimationNameRef.current = getAnimationName$1(stylesRef.current);
        }
      };
      node2.addEventListener("animationstart", handleAnimationStart);
      node2.addEventListener("animationcancel", handleAnimationEnd);
      node2.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node2.removeEventListener("animationstart", handleAnimationStart);
        node2.removeEventListener("animationcancel", handleAnimationEnd);
        node2.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node2, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React$1.useCallback((node22) => {
      if (node22)
        stylesRef.current = getComputedStyle(node22);
      setNode(node22);
    }, [])
  };
}
function getAnimationName$1(styles) {
  return styles?.animationName || "none";
}
function getElementRef$2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Slot = React$1.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = React$1.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React$1.Children.count(newElement) > 1)
          return React$1.Children.only(null);
        return React$1.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ jsx$1(SlotClone, { ...slotProps, ref: forwardedRef, children: React$1.isValidElement(newElement) ? React$1.cloneElement(newElement, void 0, newChildren) : null });
  }
  return /* @__PURE__ */ jsx$1(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = React$1.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (React$1.isValidElement(children)) {
    const childrenRef = getElementRef$1(children);
    return React$1.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef
    });
  }
  return React$1.Children.count(children) > 1 ? React$1.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ jsx$1(Fragment$1, { children });
};
function isSlottable(child) {
  return React$1.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$1(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node2) => {
  const Node2 = React$1.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node2;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx$1(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node2}`;
  return { ...primitive, [node2]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target)
    ReactDOM.flushSync(() => target.dispatchEvent(event));
}
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope$1(CHECKBOX_NAME);
var [CheckboxProvider, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
var Checkbox$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      ...checkboxProps
    } = props;
    const [button, setButton] = React$1.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setButton(node2));
    const hasConsumerStoppedPropagationRef = React$1.useRef(false);
    const isFormControl = button ? Boolean(button.closest("form")) : true;
    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange
    });
    const initialCheckedStateRef = React$1.useRef(checked);
    React$1.useEffect(() => {
      const form = button?.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [button, setChecked]);
    return /* @__PURE__ */ jsxs(CheckboxProvider, { scope: __scopeCheckbox, state: checked, disabled, children: [
      /* @__PURE__ */ jsx$1(
        Primitive.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
          "aria-required": required,
          "data-state": getState$1(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...checkboxProps,
          ref: composedRefs,
          onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
            if (event.key === "Enter")
              event.preventDefault();
          }),
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current)
                event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsx$1(
        BubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsx$1(Presence$1, { present: forceMount || isIndeterminate(context.state) || context.state === true, children: /* @__PURE__ */ jsx$1(
      Primitive.span,
      {
        "data-state": getState$1(context.state),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef,
        style: { pointerEvents: "none", ...props.style }
      }
    ) });
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = React$1.useRef(null);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React$1.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      input.indeterminate = isIndeterminate(checked);
      setChecked.call(input, isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ jsx$1(
    "input",
    {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: isIndeterminate(checked) ? false : checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState$1(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var Root$2 = Checkbox$1;
var Indicator = CheckboxIndicator;
const spriteSheet = "/assets/Icon.sprites-CXLpqOfN.svg";
const Icon = ({ name, className }) => {
  return /* @__PURE__ */ jsx$1("svg", { className: cn$1(`h-6 w-6`, className), children: /* @__PURE__ */ jsx$1("use", { href: `${spriteSheet}#${name}` }) });
};
const IconName = {
  arrowBoxLeft: "arrow-box-left",
  arrowLeft: "arrow-left",
  arrowRight: "arrow-right",
  arrowUp: "arrow-up",
  arrowDown: "arrow-down",
  arrowUpRightFromCircleIcon: "arrow-up-right",
  arrowOutOfBox: "arrow-out-of-box",
  arrowsRepeat: "arrows-repeat",
  book: "book",
  bookmarkCheck: "bookmark-check",
  brushSparkle: "brush-sparkle",
  bubbleAnnotation: "bubble-annotation",
  calendar: "calendar",
  chainLink: "chain-link",
  checkmark: "checkmark",
  chevronDoubleLeft: "chevron-double-left",
  chevronDoubleRight: "chevron-double-right",
  chevronDownSmall: "chevron-down-small",
  chevronGrabberVertical: "chevron-grabber-vertical",
  chevronDownLarge: "chevron-down-large",
  chevronLeft: "chevron-left",
  chevronLeftSmall: "chevron-left-small",
  chevronRight: "chevron-right",
  chevronRightSmall: "chevron-right-small",
  chevronTopSmall: "chevron-top-small",
  circle: "circle",
  circleArrow: "circle-arrow",
  circleCheck: "circle-check",
  circleDotsCenter: "circle-dots-center",
  circlePlus: "circle-plus",
  circleQuestionMark: "circle-question-mark",
  circleX: "circle-x",
  circlesThree: "circles-three",
  copy: "copy",
  crossLarge: "cross-large",
  cryptoPunk: "crypto-punk",
  crystalBall: "crystal-ball",
  dotGrid: "dot-grid",
  envelope: "envelope",
  eyeOpen: "eye-open",
  eyeSlash: "eye-slash",
  fastForward: "fast-forward",
  filter1: "filter-1",
  filter2: "filter-2",
  floppyDisk1: "floppy-disk-1",
  floppyDisk2: "floppy-disk-2",
  folder: "folder",
  gift: "gift",
  graduateCap: "graduate-cap",
  group: "group",
  headset: "headset",
  layoutGrid: "layout-grid",
  layoutThird: "layout-third",
  lightningBolt: "lightning-bolt",
  loader: "loader",
  lock: "lock",
  magnifyingGlass: "magnifying-glass",
  medal: "medal",
  megaphone: "megaphone",
  microphone: "microphone",
  mobile: "mobile",
  moneybag: "moneybag",
  personCircle: "person-circle",
  pause: "pause",
  play: "play",
  playFilled: "play-filled",
  playCircle: "play-circle",
  plusLarge: "plus-large",
  plusSmall: "plus-small",
  rescueRing: "rescue-ring",
  rocket: "rocket",
  settingsGear: "settings-gear",
  shieldCheck: "shield-check",
  shieldCheckFilled: "shield-check-filled",
  shoppingBag: "shopping-bag",
  sparkle: "sparkle",
  squareArrowTopRight: "square-arrow-top-right",
  squareCheck: "square-check",
  squareCheckEmpty: "square-check-empty",
  squareChecklist: "square-checklist",
  squarePlus: "square-plus",
  squareX: "square-x",
  trashCan: "trash-can",
  volumeFull: "volume-full",
  volumeMuted: "volume-muted",
  wallet: "wallet",
  wreath: "wreath",
  fingerprint: "fingerprint",
  x: "x",
  discord: "discord",
  lens: "lens",
  farcaster: "farcaster",
  calendly: "calendly",
  medium: "medium",
  github: "github",
  inboxEmpty: "inbox-empty",
  people: "people",
  tag: "tag",
  tagFilled: "tag-filled",
  telegram: "telegram",
  trustCircle: "trust-circle",
  trustCircleFilled: "trust-circle-filled",
  inProgress: "in-progress",
  triangleExclamationFilled: "triangle-exclamation-filled",
  triangleExclamation: "triangle-exclamation",
  awaitAction: "await-action",
  wallet2: "wallet-2",
  chevronBottom: "chevron-bottom",
  anchor: "anchor",
  airdrop: "airdrop",
  arrowCornerDownLeft: "arrow-corner-down-left",
  ethereum: "ethereum",
  map: "map",
  crossSmall: "cross-small",
  circleInfo: "circle-info",
  circleCheckFilled: "circle-check-filled",
  fingerprintFilled: "fingerprint-filled",
  claimFilled: "claim-filled",
  circlePlusFilled: "circle-plus-filled",
  arrowDownCircleFilled: "arrow-down-circle-filled",
  peopleAddFilled: "people-add-filled",
  arrowUpCircleFilled: "arrow-up-circle-filled",
  circleXFilled: "circle-x-filled",
  peopleRemoveFilled: "people-remove-filled",
  peopleAdd: "people-add",
  peopleAdded: "people-added",
  megaphone2: "megaphone-2",
  bookmark: "bookmark",
  bookmarkFilled: "bookmark-filled",
  homeDoor: "home-door",
  claim: "claim",
  fileText: "file-text",
  hamburger: "hamburger",
  avatarSparkle: "avatar-sparkle",
  twitter: "twitter",
  mirror: "mirror",
  warpcast: "warpcast",
  galxe: "galxe"
};
const Checkbox = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  Root$2,
  {
    ref,
    className: cn$1(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx$1(
      Indicator,
      {
        className: cn$1("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.checkmark, className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = Root$2.displayName;
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v2) => ({
  x: v2,
  y: v2
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp$1(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length2 = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length2] > rects.floating[length2]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware: middleware2 = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware2.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$3 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length2 = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length2] + rects.reference[axis] - coords[axis] - rects.floating[length2];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length2];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length2] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length2] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length2] / 2 + centerToReference;
    const offset2 = clamp$1(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length2] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length2] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$2 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp$1(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp$1(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
const limitShift$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function getNodeName(node2) {
  if (isNode(node2)) {
    return (node2.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node2) {
  var _node$ownerDocument;
  return (node2 == null || (_node$ownerDocument = node2.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node2) {
  var _ref;
  return (_ref = (isNode(node2) ? node2.ownerDocument : node2.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer$1(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css2 = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return css2.transform !== "none" || css2.perspective !== "none" || (css2.containerType ? css2.containerType !== "normal" : false) || !webkit && (css2.backdropFilter ? css2.backdropFilter !== "none" : false) || !webkit && (css2.filter ? css2.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css2.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css2.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer$1(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node2) {
  return ["html", "body", "#document"].includes(getNodeName(node2));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node2) {
  if (getNodeName(node2) === "html") {
    return node2;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node2.assignedSlot || // DOM Element detected.
    node2.parentNode || // ShadowRoot detected.
    isShadowRoot(node2) && node2.host || // Fallback.
    getDocumentElement(node2)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node2) {
  const parentNode = getParentNode(node2);
  if (isLastTraversableNode(parentNode)) {
    return node2.ownerDocument ? node2.ownerDocument.body : node2.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node2, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node2);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node2.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css2 = getComputedStyle$1(element);
  let width = parseFloat(css2.width) || 0;
  let height = parseFloat(css2.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x = ($2 ? round(rect.width) : rect.width) / width;
  let y = ($2 ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css2 = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css2.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css2.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset$1 = offset$2;
const shift$1 = shift$2;
const flip$1 = flip$2;
const size$1 = size$2;
const hide$1 = hide$2;
const arrow$2 = arrow$3;
const limitShift$1 = limitShift$2;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
var index = typeof document !== "undefined" ? useLayoutEffect$1 : useEffect$1;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length2;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length2 = a.length;
      if (length2 !== b.length)
        return false;
      for (i = length2; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length2 = keys.length;
    if (length2 !== Object.keys(b).length) {
      return false;
    }
    for (i = length2; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length2; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React$1.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware: middleware2 = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React$1.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React$1.useState(middleware2);
  if (!deepEqual(latestMiddleware, middleware2)) {
    setLatestMiddleware(middleware2);
  }
  const [_reference, _setReference] = React$1.useState(null);
  const [_floating, _setFloating] = React$1.useState(null);
  const setReference = React$1.useCallback((node2) => {
    if (node2 !== referenceRef.current) {
      referenceRef.current = node2;
      _setReference(node2);
    }
  }, []);
  const setFloating = React$1.useCallback((node2) => {
    if (node2 !== floatingRef.current) {
      floatingRef.current = node2;
      _setFloating(node2);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React$1.useRef(null);
  const floatingRef = React$1.useRef(null);
  const dataRef = React$1.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React$1.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React$1.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React$1.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React$1.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React$1.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React$1.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
const arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow$2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow$2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
const offset = (options, deps) => ({
  ...offset$1(options),
  options: [options, deps]
});
const shift = (options, deps) => ({
  ...shift$1(options),
  options: [options, deps]
});
const limitShift = (options, deps) => ({
  ...limitShift$1(options),
  options: [options, deps]
});
const flip = (options, deps) => ({
  ...flip$1(options),
  options: [options, deps]
});
const size = (options, deps) => ({
  ...size$1(options),
  options: [options, deps]
});
const hide = (options, deps) => ({
  ...hide$1(options),
  options: [options, deps]
});
const arrow = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}
const $7e8f5cd07187803e$export$21b07c8f274aebd5 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends$1({}, arrowProps, {
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), props.asChild ? children : /* @__PURE__ */ createElement$1("polygon", {
    points: "0,0 30,0 15,10"
  }));
});
const $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size2, setSize] = useState$1(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry2 = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry2) {
          const borderSizeEntry = entry2["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size2;
}
const $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
const $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
const $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  useEffect$1(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({}, anchorProps, {
    ref: composedRefs
  }));
});
const $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = useState$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node2) => setContent(node2)
  );
  const [arrow$12, setArrow] = useState$1(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow$12);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context.anchor
    },
    middleware: [
      offset({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions && shift({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift() : void 0,
        ...detectOverflowOptions
      }),
      avoidCollisions && flip({
        ...detectOverflowOptions
      }),
      size({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow$12 && arrow({
        element: arrow$12,
        padding: arrowPadding
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached && hide({
        strategy: "referenceHidden",
        ...detectOverflowOptions
      })
    ]
  });
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPositioned)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPositioned,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = useState$1();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  return /* @__PURE__ */ createElement$1("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, /* @__PURE__ */ createElement$1($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    "data-side": placedSide,
    "data-align": placedAlign
  }, contentProps, {
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPositioned ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  }))));
});
const $cf1ac5d9fe0e8206$var$ARROW_NAME = "PopperArrow";
const $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
const $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = /* @__PURE__ */ forwardRef$1(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd02(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
  const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ createElement$1("span", {
      ref: contentContext.onArrowChange,
      style: {
        position: "absolute",
        left: contentContext.arrowX,
        top: contentContext.arrowY,
        [baseSide]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[contentContext.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: `rotate(180deg)`,
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[contentContext.placedSide],
        visibility: contentContext.shouldHideArrow ? "hidden" : void 0
      }
    }, /* @__PURE__ */ createElement$1($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends$2({}, arrowProps, {
      ref: forwardedRef,
      style: {
        ...arrowProps.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
/* @__PURE__ */ Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
  displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
});
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
const $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x,
        y
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
const $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
const $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ ReactDOM__default.createPortal(/* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  useEffect$1(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}
const $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
const $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
let $5cb92bef7577960e$var$originalBodyPointerEvents;
const $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ createContext$1({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = useContext$1($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = useState$1(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = useState$1({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node2) => setNode(node2)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  useEffect$1(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  useEffect$1(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  useEffect$1(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = useRef$1(false);
  const handleClickRef = useRef$1(() => {
  });
  useEffect$1(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = useRef$1(false);
  useEffect$1(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}
let $cef8881cdc69808e$var$originalBodyUserSelect;
const $cef8881cdc69808e$var$HOVERCARD_NAME = "HoverCard";
const [$cef8881cdc69808e$var$createHoverCardContext, $cef8881cdc69808e$export$47b6998a836b7260] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cef8881cdc69808e$var$HOVERCARD_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $cef8881cdc69808e$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const [$cef8881cdc69808e$var$HoverCardProvider, $cef8881cdc69808e$var$useHoverCardContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$HOVERCARD_NAME);
const $cef8881cdc69808e$var$PORTAL_NAME = "HoverCardPortal";
const [$cef8881cdc69808e$var$PortalProvider, $cef8881cdc69808e$var$usePortalContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$PORTAL_NAME, {
  forceMount: void 0
});
const $cef8881cdc69808e$var$CONTENT_NAME = "HoverCardContent";
const $cef8881cdc69808e$export$aa4724a5938c586 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const portalContext = $cef8881cdc69808e$var$usePortalContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
  return /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ createElement$1($cef8881cdc69808e$var$HoverCardContentImpl, _extends$2({
    "data-state": context.open ? "open" : "closed"
  }, contentProps, {
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, $cef8881cdc69808e$var$excludeTouch(context.onOpen)),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $cef8881cdc69808e$var$excludeTouch(context.onClose)),
    ref: forwardedRef
  })));
});
const $cef8881cdc69808e$var$HoverCardContentImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeHoverCard, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, __scopeHoverCard);
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [containSelection, setContainSelection] = useState$1(false);
  useEffect$1(() => {
    if (containSelection) {
      const body = document.body;
      $cef8881cdc69808e$var$originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
      body.style.userSelect = "none";
      body.style.webkitUserSelect = "none";
      return () => {
        body.style.userSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
        body.style.webkitUserSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
      };
    }
  }, [
    containSelection
  ]);
  useEffect$1(() => {
    if (ref.current) {
      const handlePointerUp = () => {
        setContainSelection(false);
        context.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          var _document$getSelectio;
          const hasSelection = ((_document$getSelectio = document.getSelection()) === null || _document$getSelectio === void 0 ? void 0 : _document$getSelectio.toString()) !== "";
          if (hasSelection)
            context.hasSelectionRef.current = true;
        });
      };
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = false;
      };
    }
  }, [
    context.isPointerDownOnContentRef,
    context.hasSelectionRef
  ]);
  useEffect$1(() => {
    if (ref.current) {
      const tabbables = $cef8881cdc69808e$var$getTabbableNodes(ref.current);
      tabbables.forEach(
        (tabbable) => tabbable.setAttribute("tabindex", "-1")
      );
    }
  });
  return /* @__PURE__ */ createElement$1($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onFocusOutside, (event) => {
      event.preventDefault();
    }),
    onDismiss: context.onDismiss
  }, /* @__PURE__ */ createElement$1($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends$2({}, popperScope, contentProps, {
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onPointerDown, (event) => {
      if (event.currentTarget.contains(event.target))
        setContainSelection(true);
      context.hasSelectionRef.current = false;
      context.isPointerDownOnContentRef.current = true;
    }),
    ref: composedRefs,
    style: {
      ...contentProps.style,
      userSelect: containSelection ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: containSelection ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }
  })));
});
function $cef8881cdc69808e$var$excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
function $cef8881cdc69808e$var$getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node2) => {
      return node2.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
const $cef8881cdc69808e$export$7c6e2c02157bb7d2 = $cef8881cdc69808e$export$aa4724a5938c586;
const HoverCardContent = React$1.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $cef8881cdc69808e$export$7c6e2c02157bb7d2,
  {
    ref,
    align,
    sideOffset,
    className: cn$1(
      "z-50 w-64 flex flex-col gap-4 rounded-md theme-border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 text-left",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = $cef8881cdc69808e$export$7c6e2c02157bb7d2.displayName;
const IdentityTagSize = {
  default: "default",
  md: "md",
  lg: "lg",
  xl: "xl"
};
cva(
  "theme-border font-medium py-0.5 pl-0.5 pr-2 hover:bg-primary/10 disabled:pointer-events-none flex gap-2 items-center text-secondary-foreground/70 hover:text-secondary-foreground",
  {
    variants: {
      variant: {
        [Identity.user]: "rounded-full [&>span]:rounded-full [&>span]:overflow-hidden",
        [Identity.nonUser]: "rounded-md"
      },
      size: {
        [IdentityTagSize.default]: "text-base [&>span]:h-6 [&>span]:w-6",
        [IdentityTagSize.md]: "text-base [&>span]:h-7 [&>span]:w-7",
        [IdentityTagSize.lg]: "text-lg [&>span]:h-8 [&>span]:w-8",
        [IdentityTagSize.xl]: "text-xl [&>span]:h-11 [&>span]:w-11"
      },
      disabled: {
        true: "disabled:opacity-50 cursor-not-allowed",
        false: ""
      }
    },
    defaultVariants: {
      variant: Identity.user,
      size: IdentityTagSize.default,
      disabled: false
    }
  }
);
const TextVariant = {
  heading1: "heading1",
  heading2: "heading2",
  heading3: "heading3",
  heading4: "heading4",
  heading5: "heading5",
  headline: "headline",
  bodyLarge: "bodyLarge",
  body: "body",
  caption: "caption",
  footnote: "footnote",
  small: "small"
};
const TextWeight = {
  normal: "normal",
  medium: "medium",
  semibold: "semibold",
  bold: "bold"
};
const textVariants = cva("text-primary", {
  variants: {
    variant: {
      [TextVariant.heading1]: "text-6xl",
      [TextVariant.heading2]: "text-5xl",
      [TextVariant.heading3]: "text-4xl",
      [TextVariant.heading4]: "text-3xl",
      [TextVariant.heading5]: "text-2xl",
      [TextVariant.headline]: "text-xl",
      [TextVariant.bodyLarge]: "text-lg",
      [TextVariant.body]: "text-base",
      [TextVariant.caption]: "text-sm",
      [TextVariant.footnote]: "text-sm",
      [TextVariant.small]: "text-xs"
    },
    weight: {
      [TextWeight.normal]: "font-normal",
      [TextWeight.medium]: "font-medium",
      [TextWeight.semibold]: "font-semibold",
      [TextWeight.bold]: "font-bold"
    }
  },
  defaultVariants: {
    variant: TextVariant.body,
    weight: TextWeight.normal
  }
});
const textElement = (variant) => {
  switch (variant) {
    case TextVariant.heading1:
      return "h1";
    case TextVariant.heading2:
      return "h2";
    case TextVariant.heading3:
      return "h3";
    case TextVariant.heading4:
      return "h4";
    case TextVariant.heading5:
      return "h5";
    case TextVariant.headline:
      return "h6";
    default:
      return "div";
  }
};
const Text = React$1.forwardRef(
  ({ className, variant, weight, ...props }, ref) => {
    const Comp = textElement(variant);
    return /* @__PURE__ */ jsx$1(
      Comp,
      {
        className: cn$1(textVariants({ variant, weight }), className),
        ref,
        ...props
      }
    );
  }
);
Text.displayName = "Text";
const $89eedd556c436f6a$var$DEFAULT_ORIENTATION = "horizontal";
const $89eedd556c436f6a$var$ORIENTATIONS = [
  "horizontal",
  "vertical"
];
const $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? {
    role: "none"
  } : {
    "aria-orientation": ariaOrientation,
    role: "separator"
  };
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    "data-orientation": orientation
  }, semanticProps, domProps, {
    ref: forwardedRef
  }));
});
$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
  orientation(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue))
      return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
    return null;
  }
};
function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
  return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
}
function $89eedd556c436f6a$var$isValidOrientation(orientation) {
  return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
}
const $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;
const Separator = React$1.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx$1(
    $89eedd556c436f6a$export$be92b6f5f03c0fe9,
    {
      ref,
      decorative,
      orientation,
      className: cn$1(
        "shrink-0 bg-border/20",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = $89eedd556c436f6a$export$be92b6f5f03c0fe9.displayName;
const $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});
const $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;
const [$a093c7e1ec25a057$var$createTooltipContext, $a093c7e1ec25a057$export$1c540a2224f0d865] = $c512c27ab02ef895$export$50c7b4e9d9f19c1("Tooltip", [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $a093c7e1ec25a057$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const $a093c7e1ec25a057$var$PROVIDER_NAME = "TooltipProvider";
const $a093c7e1ec25a057$var$TOOLTIP_OPEN = "tooltip.open";
const [$a093c7e1ec25a057$var$TooltipProviderContextProvider, $a093c7e1ec25a057$var$useTooltipProviderContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PROVIDER_NAME);
const $a093c7e1ec25a057$var$TOOLTIP_NAME = "Tooltip";
const [$a093c7e1ec25a057$var$TooltipContextProvider, $a093c7e1ec25a057$var$useTooltipContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME);
const $a093c7e1ec25a057$var$PORTAL_NAME = "TooltipPortal";
const [$a093c7e1ec25a057$var$PortalProvider, $a093c7e1ec25a057$var$usePortalContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, {
  forceMount: void 0
});
const $a093c7e1ec25a057$var$CONTENT_NAME = "TooltipContent";
const $a093c7e1ec25a057$export$e9003e2be37ec060 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const portalContext = $a093c7e1ec25a057$var$usePortalContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  return /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.disableHoverableContent ? /* @__PURE__ */ createElement$1($a093c7e1ec25a057$var$TooltipContentImpl, _extends$2({
    side
  }, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ createElement$1($a093c7e1ec25a057$var$TooltipContentHoverable, _extends$2({
    side
  }, contentProps, {
    ref: forwardedRef
  })));
});
const $a093c7e1ec25a057$var$TooltipContentHoverable = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = useState$1(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = useCallback$1(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [
    onPointerInTransitChange
  ]);
  const handleCreateGraceArea = useCallback$1((event, hoverTarget) => {
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = $a093c7e1ec25a057$var$getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = $a093c7e1ec25a057$var$getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = $a093c7e1ec25a057$var$getHull([
      ...paddedExitPoints,
      ...hoverTargetPoints
    ]);
    setPointerGraceArea(graceArea);
    onPointerInTransitChange(true);
  }, [
    onPointerInTransitChange
  ]);
  useEffect$1(() => {
    return () => handleRemoveGraceArea();
  }, [
    handleRemoveGraceArea
  ]);
  useEffect$1(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [
    trigger,
    content,
    handleCreateGraceArea,
    handleRemoveGraceArea
  ]);
  useEffect$1(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = (trigger === null || trigger === void 0 ? void 0 : trigger.contains(target)) || (content === null || content === void 0 ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !$a093c7e1ec25a057$var$isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget)
          handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [
    trigger,
    content,
    pointerGraceArea,
    onClose,
    handleRemoveGraceArea
  ]);
  return /* @__PURE__ */ createElement$1($a093c7e1ec25a057$var$TooltipContentImpl, _extends$2({}, props, {
    ref: composedRefs
  }));
});
const [$a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, $a093c7e1ec25a057$var$useVisuallyHiddenContentContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME, {
  isInside: false
});
const $a093c7e1ec25a057$var$TooltipContentImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const { onClose } = context;
  useEffect$1(() => {
    document.addEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
    return () => document.removeEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
  }, [
    onClose
  ]);
  useEffect$1(() => {
    if (context.trigger) {
      const handleScroll2 = (event) => {
        const target = event.target;
        if (target !== null && target !== void 0 && target.contains(context.trigger))
          onClose();
      };
      window.addEventListener("scroll", handleScroll2, {
        capture: true
      });
      return () => window.removeEventListener("scroll", handleScroll2, {
        capture: true
      });
    }
  }, [
    context.trigger,
    onClose
  ]);
  return /* @__PURE__ */ createElement$1($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: onClose
  }, /* @__PURE__ */ createElement$1($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends$2({
    "data-state": context.stateAttribute
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ createElement$1($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), /* @__PURE__ */ createElement$1($a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, {
    scope: __scopeTooltip,
    isInside: true
  }, /* @__PURE__ */ createElement$1($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    id: context.contentId,
    role: "tooltip"
  }, ariaLabel || children))));
});
function $a093c7e1ec25a057$var$getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "bottom":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      });
      break;
    case "left":
      paddedExitPoints.push({
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "right":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      });
      break;
  }
  return paddedExitPoints;
}
function $a093c7e1ec25a057$var$getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function $a093c7e1ec25a057$var$isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $a093c7e1ec25a057$var$getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x)
      return -1;
    else if (a.x > b.x)
      return 1;
    else if (a.y < b.y)
      return -1;
    else if (a.y > b.y)
      return 1;
    else
      return 0;
  });
  return $a093c7e1ec25a057$var$getHullPresorted(newPoints);
}
function $a093c7e1ec25a057$var$getHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p2 = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p2.y - r.y) >= (q.y - r.y) * (p2.x - r.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p2);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i1 = points.length - 1; i1 >= 0; i1--) {
    const p2 = points[i1];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p2.y - r.y) >= (q.y - r.y) * (p2.x - r.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p2);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y)
    return upperHull;
  else
    return upperHull.concat(lowerHull);
}
const $a093c7e1ec25a057$export$7c6e2c02157bb7d2 = $a093c7e1ec25a057$export$e9003e2be37ec060;
const TooltipContent = React$1.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $a093c7e1ec25a057$export$7c6e2c02157bb7d2,
  {
    ref,
    sideOffset,
    className: cn$1(
      "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-border/30 z-50 overflow-hidden rounded-md border px-2 py-1 text-sm font-medium shadow-md",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = $a093c7e1ec25a057$export$7c6e2c02157bb7d2.displayName;
var U$1 = 1, Y$1 = 0.9, H = 0.8, J = 0.17, p = 0.1, u = 0.999, $ = 0.9999;
var k$1 = 0.99, m = /[\\\/_+.#"@\[\(\{&]/, B = /[\\\/_+.#"@\[\(\{&]/g, K = /[\s-]/, X$1 = /[\s-]/g;
function G$1(_, C, h, P, A, f, O) {
  if (f === C.length)
    return A === _.length ? U$1 : k$1;
  var T2 = `${A},${f}`;
  if (O[T2] !== void 0)
    return O[T2];
  for (var L = P.charAt(f), c = h.indexOf(L, A), S = 0, E, N2, R, M2; c >= 0; )
    E = G$1(_, C, h, P, c + 1, f + 1, O), E > S && (c === A ? E *= U$1 : m.test(_.charAt(c - 1)) ? (E *= H, R = _.slice(A, c - 1).match(B), R && A > 0 && (E *= Math.pow(u, R.length))) : K.test(_.charAt(c - 1)) ? (E *= Y$1, M2 = _.slice(A, c - 1).match(X$1), M2 && A > 0 && (E *= Math.pow(u, M2.length))) : (E *= J, A > 0 && (E *= Math.pow(u, c - A))), _.charAt(c) !== C.charAt(f) && (E *= $)), (E < p && h.charAt(c - 1) === P.charAt(f + 1) || P.charAt(f + 1) === P.charAt(f) && h.charAt(c - 1) !== P.charAt(f)) && (N2 = G$1(_, C, h, P, c + 1, f + 2, O), N2 * p > E && (E = N2 * p)), E > S && (S = E), c = h.indexOf(L, c + 1);
  return O[T2] = S, S;
}
function D$1(_) {
  return _.toLowerCase().replace(X$1, " ");
}
function W(_, C, h) {
  return _ = h && h.length > 0 ? `${_ + " " + h.join(" ")}` : _, G$1(_, C, D$1(_), D$1(C), 0, 0, {});
}
const $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
const $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
const $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
const $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = useState$1(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node2) => setContainer(node2)
  );
  const focusScope = useRef$1({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  useEffect$1(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container1.contains(relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleMutations = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations)
          if (mutation.removedNodes.length > 0)
            $d3863c46a17e8a28$var$focus(container1);
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container1)
        mutationObserver.observe(container1, {
          childList: true,
          subtree: true
        });
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
        mutationObserver.disconnect();
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  useEffect$1(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = useCallback$1((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node2) => {
      const isHiddenInput = node2.tagName === "INPUT" && node2.type === "hidden";
      if (node2.disabled || node2.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node2.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node2, { upTo }) {
  if (getComputedStyle(node2).visibility === "hidden")
    return true;
  while (node2) {
    if (upTo !== void 0 && node2 === upTo)
      return false;
    if (getComputedStyle(node2).display === "none")
      return true;
    node2 = node2.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
const $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1)
    updatedArray.splice(index2, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}
let $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  useEffect$1(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node2) => node2.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}
function useCallbackRef(initialValue, callback) {
  var ref = useState$1(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React$1.useLayoutEffect : React$1.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware2) {
  if (middleware2 === void 0) {
    middleware2 = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware2(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}
var SideCar$2 = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React$1.createElement(Target, __assign({}, rest));
};
SideCar$2.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar$2;
}
var effectCar$1 = createSidecarMedium();
var nothing$1 = function() {
  return;
};
var RemoveScroll$1 = React$1.forwardRef(function(props, parentRef) {
  var ref = React$1.useRef(null);
  var _a = React$1.useState({
    onScrollCapture: nothing$1,
    onWheelCapture: nothing$1,
    onTouchMoveCapture: nothing$1
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React$1.createElement(
    React$1.Fragment,
    null,
    enabled && React$1.createElement(SideCar2, { sideCar: effectCar$1, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React$1.cloneElement(React$1.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React$1.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll$1.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll$1.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};
var getNonce = function() {
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css2) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css2;
  } else {
    tag.appendChild(document.createTextNode(css2));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter2 = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter2 == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter2++;
    },
    remove: function() {
      counter2--;
      if (!counter2 && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React$1.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse$1 = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse$1(left), parse$1(top), parse$1(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter2 = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter2) ? counter2 : 0;
};
var useLockAttribute = function() {
  React$1.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React$1.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React$1.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var passiveSupported$1 = false;
if (typeof window !== "undefined") {
  try {
    var options$1 = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported$1 = true;
        return true;
      }
    });
    window.addEventListener("test", options$1, options$1);
    window.removeEventListener("test", options$1, options$1);
  } catch (err) {
    passiveSupported$1 = false;
  }
}
var nonPassive$1 = passiveSupported$1 ? { passive: false } : false;
var alwaysContainsScroll$1 = function(node2) {
  return node2.tagName === "TEXTAREA";
};
var elementCanBeScrolled$1 = function(node2, overflow) {
  var styles = window.getComputedStyle(node2);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll$1(node2) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled$1 = function(node2) {
  return elementCanBeScrolled$1(node2, "overflowY");
};
var elementCouldBeHScrolled$1 = function(node2) {
  return elementCanBeScrolled$1(node2, "overflowX");
};
var locationCouldBeScrolled$1 = function(axis, node2) {
  var current = node2;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled$1(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables$1(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables$1 = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables$1 = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled$1 = function(axis, node2) {
  return axis === "v" ? elementCouldBeVScrolled$1(node2) : elementCouldBeHScrolled$1(node2);
};
var getScrollVariables$1 = function(axis, node2) {
  return axis === "v" ? getVScrollVariables$1(node2) : getHScrollVariables$1(node2);
};
var getDirectionFactor$1 = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll$1 = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor$1(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables$1(axis, target), position2 = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position2;
    if (position2 || elementScroll) {
      if (elementCouldBeScrolled$1(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position2;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (availableScroll === 0 || !noOverscroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (availableScrollTop === 0 || !noOverscroll)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};
var getTouchXY$1 = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY$1 = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef$1 = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare$1 = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle$1 = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter$1 = 0;
var lockStack$1 = [];
function RemoveScrollSideCar$1(props) {
  var shouldPreventQueue = React$1.useRef([]);
  var touchStartRef = React$1.useRef([0, 0]);
  var activeAxis = React$1.useRef();
  var id = React$1.useState(idCounter$1++)[0];
  var Style2 = React$1.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React$1.useRef(props);
  React$1.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React$1.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef$1), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React$1.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY$1(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled$1(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled$1(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll$1(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React$1.useCallback(function(_event) {
    var event = _event;
    if (!lockStack$1.length || lockStack$1[lockStack$1.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY$1(event) : getTouchXY$1(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare$1(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef$1).filter(Boolean).filter(function(node2) {
        return node2.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React$1.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React$1.useCallback(function(event) {
    touchStartRef.current = getTouchXY$1(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React$1.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY$1(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React$1.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY$1(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React$1.useEffect(function() {
    lockStack$1.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive$1);
    document.addEventListener("touchmove", shouldPrevent, nonPassive$1);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive$1);
    return function() {
      lockStack$1 = lockStack$1.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive$1);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive$1);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive$1);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React$1.createElement(
    React$1.Fragment,
    null,
    inert ? React$1.createElement(Style2, { styles: generateStyle$1(id) }) : null,
    removeScrollBar ? React$1.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}
const SideCar$1 = exportSidecar(effectCar$1, RemoveScrollSideCar$1);
var ReactRemoveScroll$1 = React$1.forwardRef(function(props, ref) {
  return React$1.createElement(RemoveScroll$1, __assign({}, props, { ref, sideCar: SideCar$1 }));
});
ReactRemoveScroll$1.classNames = RemoveScroll$1.classNames;
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node2) {
  return node2 && (node2.host || unwrapHost(node2.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node2) {
      if (elementsToKeep.has(node2)) {
        deep(node2);
      } else {
        try {
          var attr = node2.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node2) || 0) + 1;
          var markerValue = (markerCounter.get(node2) || 0) + 1;
          counterMap.set(node2, counterValue);
          markerCounter.set(node2, markerValue);
          hiddenNodes.push(node2);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node2, true);
          }
          if (markerValue === 1) {
            node2.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node2.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node2, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node2) {
      var counterValue = counterMap.get(node2) - 1;
      var markerValue = markerCounter.get(node2) - 1;
      counterMap.set(node2, counterValue);
      markerCounter.set(node2, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node2)) {
          node2.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node2);
      }
      if (!markerValue) {
        node2.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
const $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
const [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = useRef$1(null);
  const contentRef = useRef$1(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ createElement$1($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: useCallback$1(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
const $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
const [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
const $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ createElement$1($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, Children.map(
    children,
    (child) => /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ createElement$1($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
const $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
const $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ createElement$1($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends$2({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
const $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ createElement$1(ReactRemoveScroll$1, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
const $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
const $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ createElement$1($5d3850c4d0b4e6c7$var$DialogContentModal, _extends$2({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ createElement$1($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends$2({}, contentProps, {
    ref: forwardedRef
  })));
});
/* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$b6d9565de1e068cf, {
  displayName: $5d3850c4d0b4e6c7$var$CONTENT_NAME
});
const $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  useEffect$1(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ createElement$1($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends$2({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
const $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = useRef$1(false);
  const hasPointerDownOutsideRef = useRef$1(false);
  return /* @__PURE__ */ createElement$1($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends$2({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
const $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ createElement$1(Fragment, null, /* @__PURE__ */ createElement$1($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ createElement$1($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends$2({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
const $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
const $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends$2({
    id: context.titleId
  }, titleProps, {
    ref: forwardedRef
  }));
});
/* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$16f7638e4a34b909, {
  displayName: $5d3850c4d0b4e6c7$var$TITLE_NAME
});
const $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
const $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends$2({
    id: context.descriptionId
  }, descriptionProps, {
    ref: forwardedRef
  }));
});
/* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$94e94c2ec2c954d5, {
  displayName: $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME
});
const $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
const $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$2({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onClick,
      () => context.onOpenChange(false)
    )
  }));
});
/* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac, {
  displayName: $5d3850c4d0b4e6c7$var$CLOSE_NAME
});
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
const $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
const $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
const $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
const $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
const $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
const $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
const $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;
var V = '[cmdk-group=""]', X = '[cmdk-group-items=""]', ge = '[cmdk-group-heading=""]', Y = '[cmdk-item=""]', le = `${Y}:not([aria-disabled="true"])`, Q = "cmdk-item-select", M = "data-value", Re = (r, o, n) => W(r, o, n), ue = React$1.createContext(void 0), G = () => React$1.useContext(ue), de = React$1.createContext(void 0), Z = () => React$1.useContext(de), fe = React$1.createContext(void 0), me = React$1.forwardRef((r, o) => {
  let n = k(() => {
    var e, s;
    return { search: "", value: (s = (e = r.value) != null ? e : r.defaultValue) != null ? s : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), u2 = k(() => /* @__PURE__ */ new Set()), c = k(() => /* @__PURE__ */ new Map()), d = k(() => /* @__PURE__ */ new Map()), f = k(() => /* @__PURE__ */ new Set()), p2 = pe(r), { label: v2, children: b, value: l, onValueChange: y, filter: S, shouldFilter: C, loop: L, disablePointerSelection: ee2 = false, vimBindings: j = true, ...H2 } = r, te2 = React$1.useId(), $2 = React$1.useId(), K2 = React$1.useId(), x = React$1.useRef(null), g = Me();
  T(() => {
    if (l !== void 0) {
      let e = l.trim();
      n.current.value = e, h.emit();
    }
  }, [l]), T(() => {
    g(6, re);
  }, []);
  let h = React$1.useMemo(() => ({ subscribe: (e) => (f.current.add(e), () => f.current.delete(e)), snapshot: () => n.current, setState: (e, s, i) => {
    var a, m2, R;
    if (!Object.is(n.current[e], s)) {
      if (n.current[e] = s, e === "search")
        z(), q(), g(1, U2);
      else if (e === "value" && (i || g(5, re), ((a = p2.current) == null ? void 0 : a.value) !== void 0)) {
        let E = s != null ? s : "";
        (R = (m2 = p2.current).onValueChange) == null || R.call(m2, E);
        return;
      }
      h.emit();
    }
  }, emit: () => {
    f.current.forEach((e) => e());
  } }), []), B2 = React$1.useMemo(() => ({ value: (e, s, i) => {
    var a;
    s !== ((a = d.current.get(e)) == null ? void 0 : a.value) && (d.current.set(e, { value: s, keywords: i }), n.current.filtered.items.set(e, ne2(s, i)), g(2, () => {
      q(), h.emit();
    }));
  }, item: (e, s) => (u2.current.add(e), s && (c.current.has(s) ? c.current.get(s).add(e) : c.current.set(s, /* @__PURE__ */ new Set([e]))), g(3, () => {
    z(), q(), n.current.value || U2(), h.emit();
  }), () => {
    d.current.delete(e), u2.current.delete(e), n.current.filtered.items.delete(e);
    let i = O();
    g(4, () => {
      z(), (i == null ? void 0 : i.getAttribute("id")) === e && U2(), h.emit();
    });
  }), group: (e) => (c.current.has(e) || c.current.set(e, /* @__PURE__ */ new Set()), () => {
    d.current.delete(e), c.current.delete(e);
  }), filter: () => p2.current.shouldFilter, label: v2 || r["aria-label"], disablePointerSelection: ee2, listId: te2, inputId: K2, labelId: $2, listInnerRef: x }), []);
  function ne2(e, s) {
    var a, m2;
    let i = (m2 = (a = p2.current) == null ? void 0 : a.filter) != null ? m2 : Re;
    return e ? i(e, n.current.search, s) : 0;
  }
  function q() {
    if (!n.current.search || p2.current.shouldFilter === false)
      return;
    let e = n.current.filtered.items, s = [];
    n.current.filtered.groups.forEach((a) => {
      let m2 = c.current.get(a), R = 0;
      m2.forEach((E) => {
        let P = e.get(E);
        R = Math.max(P, R);
      }), s.push([a, R]);
    });
    let i = x.current;
    A().sort((a, m2) => {
      var P, _;
      let R = a.getAttribute("id"), E = m2.getAttribute("id");
      return ((P = e.get(E)) != null ? P : 0) - ((_ = e.get(R)) != null ? _ : 0);
    }).forEach((a) => {
      let m2 = a.closest(X);
      m2 ? m2.appendChild(a.parentElement === m2 ? a : a.closest(`${X} > *`)) : i.appendChild(a.parentElement === i ? a : a.closest(`${X} > *`));
    }), s.sort((a, m2) => m2[1] - a[1]).forEach((a) => {
      let m2 = x.current.querySelector(`${V}[${M}="${encodeURIComponent(a[0])}"]`);
      m2 == null || m2.parentElement.appendChild(m2);
    });
  }
  function U2() {
    let e = A().find((i) => i.getAttribute("aria-disabled") !== "true"), s = e == null ? void 0 : e.getAttribute(M);
    h.setState("value", s || void 0);
  }
  function z() {
    var s, i, a, m2;
    if (!n.current.search || p2.current.shouldFilter === false) {
      n.current.filtered.count = u2.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let R of u2.current) {
      let E = (i = (s = d.current.get(R)) == null ? void 0 : s.value) != null ? i : "", P = (m2 = (a = d.current.get(R)) == null ? void 0 : a.keywords) != null ? m2 : [], _ = ne2(E, P);
      n.current.filtered.items.set(R, _), _ > 0 && e++;
    }
    for (let [R, E] of c.current)
      for (let P of E)
        if (n.current.filtered.items.get(P) > 0) {
          n.current.filtered.groups.add(R);
          break;
        }
    n.current.filtered.count = e;
  }
  function re() {
    var s, i, a;
    let e = O();
    e && (((s = e.parentElement) == null ? void 0 : s.firstChild) === e && ((a = (i = e.closest(V)) == null ? void 0 : i.querySelector(ge)) == null || a.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function O() {
    var e;
    return (e = x.current) == null ? void 0 : e.querySelector(`${Y}[aria-selected="true"]`);
  }
  function A() {
    var e;
    return Array.from((e = x.current) == null ? void 0 : e.querySelectorAll(le));
  }
  function W2(e) {
    let i = A()[e];
    i && h.setState("value", i.getAttribute(M));
  }
  function J2(e) {
    var R;
    let s = O(), i = A(), a = i.findIndex((E) => E === s), m2 = i[a + e];
    (R = p2.current) != null && R.loop && (m2 = a + e < 0 ? i[i.length - 1] : a + e === i.length ? i[0] : i[a + e]), m2 && h.setState("value", m2.getAttribute(M));
  }
  function oe2(e) {
    let s = O(), i = s == null ? void 0 : s.closest(V), a;
    for (; i && !a; )
      i = e > 0 ? we(i, V) : Ie(i, V), a = i == null ? void 0 : i.querySelector(le);
    a ? h.setState("value", a.getAttribute(M)) : J2(e);
  }
  let ie = () => W2(A().length - 1), ae2 = (e) => {
    e.preventDefault(), e.metaKey ? ie() : e.altKey ? oe2(1) : J2(1);
  }, se2 = (e) => {
    e.preventDefault(), e.metaKey ? W2(0) : e.altKey ? oe2(-1) : J2(-1);
  };
  return React$1.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: o, tabIndex: -1, ...H2, "cmdk-root": "", onKeyDown: (e) => {
    var s;
    if ((s = H2.onKeyDown) == null || s.call(H2, e), !e.defaultPrevented)
      switch (e.key) {
        case "n":
        case "j": {
          j && e.ctrlKey && ae2(e);
          break;
        }
        case "ArrowDown": {
          ae2(e);
          break;
        }
        case "p":
        case "k": {
          j && e.ctrlKey && se2(e);
          break;
        }
        case "ArrowUp": {
          se2(e);
          break;
        }
        case "Home": {
          e.preventDefault(), W2(0);
          break;
        }
        case "End": {
          e.preventDefault(), ie();
          break;
        }
        case "Enter":
          if (!e.nativeEvent.isComposing && e.keyCode !== 229) {
            e.preventDefault();
            let i = O();
            if (i) {
              let a = new Event(Q);
              i.dispatchEvent(a);
            }
          }
      }
  } }, React$1.createElement("label", { "cmdk-label": "", htmlFor: B2.inputId, id: B2.labelId, style: De }, v2), F(r, (e) => React$1.createElement(de.Provider, { value: h }, React$1.createElement(ue.Provider, { value: B2 }, e))));
}), be = React$1.forwardRef((r, o) => {
  var K2, x;
  let n = React$1.useId(), u2 = React$1.useRef(null), c = React$1.useContext(fe), d = G(), f = pe(r), p2 = (x = (K2 = f.current) == null ? void 0 : K2.forceMount) != null ? x : c == null ? void 0 : c.forceMount;
  T(() => {
    if (!p2)
      return d.item(n, c == null ? void 0 : c.id);
  }, [p2]);
  let v2 = ve(n, u2, [r.value, r.children, u2], r.keywords), b = Z(), l = D((g) => g.value && g.value === v2.current), y = D((g) => p2 || d.filter() === false ? true : g.search ? g.filtered.items.get(n) > 0 : true);
  React$1.useEffect(() => {
    let g = u2.current;
    if (!(!g || r.disabled))
      return g.addEventListener(Q, S), () => g.removeEventListener(Q, S);
  }, [y, r.onSelect, r.disabled]);
  function S() {
    var g, h;
    C(), (h = (g = f.current).onSelect) == null || h.call(g, v2.current);
  }
  function C() {
    b.setState("value", v2.current, true);
  }
  if (!y)
    return null;
  let { disabled: L, value: ee2, onSelect: j, forceMount: H2, keywords: te2, ...$2 } = r;
  return React$1.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([u2, o]), ...$2, id: n, "cmdk-item": "", role: "option", "aria-disabled": !!L, "aria-selected": !!l, "data-disabled": !!L, "data-selected": !!l, onPointerMove: L || d.disablePointerSelection ? void 0 : C, onClick: L ? void 0 : S }, r.children);
}), he = React$1.forwardRef((r, o) => {
  let { heading: n, children: u2, forceMount: c, ...d } = r, f = React$1.useId(), p2 = React$1.useRef(null), v2 = React$1.useRef(null), b = React$1.useId(), l = G(), y = D((C) => c || l.filter() === false ? true : C.search ? C.filtered.groups.has(f) : true);
  T(() => l.group(f), []), ve(f, p2, [r.value, r.heading, v2]);
  let S = React$1.useMemo(() => ({ id: f, forceMount: c }), [c]);
  return React$1.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([p2, o]), ...d, "cmdk-group": "", role: "presentation", hidden: y ? void 0 : true }, n && React$1.createElement("div", { ref: v2, "cmdk-group-heading": "", "aria-hidden": true, id: b }, n), F(r, (C) => React$1.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? b : void 0 }, React$1.createElement(fe.Provider, { value: S }, C))));
}), ye = React$1.forwardRef((r, o) => {
  let { alwaysRender: n, ...u2 } = r, c = React$1.useRef(null), d = D((f) => !f.search);
  return !n && !d ? null : React$1.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([c, o]), ...u2, "cmdk-separator": "", role: "separator" });
}), Ee = React$1.forwardRef((r, o) => {
  let { onValueChange: n, ...u2 } = r, c = r.value != null, d = Z(), f = D((l) => l.search), p2 = D((l) => l.value), v2 = G(), b = React$1.useMemo(() => {
    var y;
    let l = (y = v2.listInnerRef.current) == null ? void 0 : y.querySelector(`${Y}[${M}="${encodeURIComponent(p2)}"]`);
    return l == null ? void 0 : l.getAttribute("id");
  }, []);
  return React$1.useEffect(() => {
    r.value != null && d.setState("search", r.value);
  }, [r.value]), React$1.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.input, { ref: o, ...u2, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": v2.listId, "aria-labelledby": v2.labelId, "aria-activedescendant": b, id: v2.inputId, type: "text", value: c ? r.value : f, onChange: (l) => {
    c || d.setState("search", l.target.value), n == null || n(l.target.value);
  } });
}), Se = React$1.forwardRef((r, o) => {
  let { children: n, label: u2 = "Suggestions", ...c } = r, d = React$1.useRef(null), f = React$1.useRef(null), p2 = G();
  return React$1.useEffect(() => {
    if (f.current && d.current) {
      let v2 = f.current, b = d.current, l, y = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let S = v2.offsetHeight;
          b.style.setProperty("--cmdk-list-height", S.toFixed(1) + "px");
        });
      });
      return y.observe(v2), () => {
        cancelAnimationFrame(l), y.unobserve(v2);
      };
    }
  }, []), React$1.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([d, o]), ...c, "cmdk-list": "", role: "listbox", "aria-label": u2, id: p2.listId }, F(r, (v2) => React$1.createElement("div", { ref: N([f, p2.listInnerRef]), "cmdk-list-sizer": "" }, v2)));
}), Ce = React$1.forwardRef((r, o) => {
  let { open: n, onOpenChange: u2, overlayClassName: c, contentClassName: d, container: f, ...p2 } = r;
  return React$1.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open: n, onOpenChange: u2 }, React$1.createElement($5d3850c4d0b4e6c7$export$602eac185826482c, { container: f }, React$1.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { "cmdk-overlay": "", className: c }), React$1.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { "aria-label": r.label, "cmdk-dialog": "", className: d }, React$1.createElement(me, { ref: o, ...p2 }))));
}), xe = React$1.forwardRef((r, o) => D((u2) => u2.filtered.count === 0) ? React$1.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: o, ...r, "cmdk-empty": "", role: "presentation" }) : null), Pe = React$1.forwardRef((r, o) => {
  let { progress: n, children: u2, label: c = "Loading...", ...d } = r;
  return React$1.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: o, ...d, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": c }, F(r, (f) => React$1.createElement("div", { "aria-hidden": true }, f)));
}), He = Object.assign(me, { List: Se, Item: be, Input: Ee, Group: he, Separator: ye, Dialog: Ce, Empty: xe, Loading: Pe });
function we(r, o) {
  let n = r.nextElementSibling;
  for (; n; ) {
    if (n.matches(o))
      return n;
    n = n.nextElementSibling;
  }
}
function Ie(r, o) {
  let n = r.previousElementSibling;
  for (; n; ) {
    if (n.matches(o))
      return n;
    n = n.previousElementSibling;
  }
}
function pe(r) {
  let o = React$1.useRef(r);
  return T(() => {
    o.current = r;
  }), o;
}
var T = typeof window == "undefined" ? React$1.useEffect : React$1.useLayoutEffect;
function k(r) {
  let o = React$1.useRef();
  return o.current === void 0 && (o.current = r()), o;
}
function N(r) {
  return (o) => {
    r.forEach((n) => {
      typeof n == "function" ? n(o) : n != null && (n.current = o);
    });
  };
}
function D(r) {
  let o = Z(), n = () => r(o.snapshot());
  return React$1.useSyncExternalStore(o.subscribe, n, n);
}
function ve(r, o, n, u2 = []) {
  let c = React$1.useRef(), d = G();
  return T(() => {
    var v2;
    let f = (() => {
      var b;
      for (let l of n) {
        if (typeof l == "string")
          return l.trim();
        if (typeof l == "object" && "current" in l)
          return l.current ? (b = l.current.textContent) == null ? void 0 : b.trim() : c.current;
      }
    })(), p2 = u2.map((b) => b.trim());
    d.value(r, f, p2), (v2 = o.current) == null || v2.setAttribute(M, f), c.current = f;
  }), c;
}
var Me = () => {
  let [r, o] = React$1.useState(), n = k(() => /* @__PURE__ */ new Map());
  return T(() => {
    n.current.forEach((u2) => u2()), n.current = /* @__PURE__ */ new Map();
  }, [r]), (u2, c) => {
    n.current.set(u2, c), o({});
  };
};
function Te$1(r) {
  let o = r.type;
  return typeof o == "function" ? o(r.props) : "render" in o ? o.render(r.props) : r;
}
function F({ asChild: r, children: o }, n) {
  return r && React$1.isValidElement(o) ? React$1.cloneElement(Te$1(o), { ref: o.ref }, n(o.props.children)) : n(o);
}
var De = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Command = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  He,
  {
    ref,
    className: cn$1(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground theme-border",
      className
    ),
    ...props
  }
));
Command.displayName = He.displayName;
const CommandInput = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: "flex items-center border-b border-border/30 px-3",
    "cmdk-input-wrapper": "",
    children: [
      /* @__PURE__ */ jsx$1(
        Icon,
        {
          name: IconName.magnifyingGlass,
          className: "mr-2 h-4 w-4 shrink-0 opacity-50"
        }
      ),
      /* @__PURE__ */ jsx$1(
        He.Input,
        {
          ref,
          className: cn$1(
            "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className
          ),
          ...props
        }
      )
    ]
  }
));
CommandInput.displayName = He.Input.displayName;
const CommandList = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  He.List,
  {
    ref,
    className: cn$1("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = He.List.displayName;
const CommandEmpty = React$1.forwardRef((props, ref) => /* @__PURE__ */ jsx$1(
  He.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = He.Empty.displayName;
const CommandGroup = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  He.Group,
  {
    ref,
    className: cn$1(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = He.Group.displayName;
const CommandSeparator = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  He.Separator,
  {
    ref,
    className: cn$1("-mx-1 h-px bg-border/30", className),
    ...props
  }
));
CommandSeparator.displayName = He.Separator.displayName;
const CommandItem = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  He.Item,
  {
    ref,
    className: cn$1(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent/30 aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = He.Item.displayName;
const DialogPortal$1 = $5d3850c4d0b4e6c7$export$602eac185826482c;
const DialogOverlay$1 = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  {
    ref,
    className: cn$1(
      "fixed inset-0 z-50 bg-black/3 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay$1.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
const DialogContent$1 = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal$1, { children: [
  /* @__PURE__ */ jsx$1(DialogOverlay$1, {}),
  /* @__PURE__ */ jsx$1(
    $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
    {
      ref,
      className: cn$1(
        "theme-border border-rounded fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-2 bg-background p-5 pb-10 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg  max-sm:w-full max-sm:h-full max-sm:overflow-y-auto max-sm:flex max-sm:flex-col",
        className
      ),
      ...props
    }
  )
] }));
DialogContent$1.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2.displayName;
const DialogTitle$1 = React$1.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  $5d3850c4d0b4e6c7$export$f99233281efd08a0,
  {
    ref,
    className: cn$1(
      "flex justify-between items-center w-full text-lg font-medium leading-none tracking-tight mb-1 max-sm:mb-6",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxs($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "text-primary/50 hover:text-primary focus:text-primary focus-visible:outline-none", children: [
        /* @__PURE__ */ jsx$1(Icon, { name: IconName.crossLarge, className: "h-4 w-4" }),
        /* @__PURE__ */ jsx$1("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
));
DialogTitle$1.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
const DialogDescription$1 = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  {
    ref,
    className: cn$1("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription$1.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
const $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
const $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
const $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
const [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
const [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
  $d7bdfb9eb0fdf311$var$createCollectionScope
]);
const [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
const $d7bdfb9eb0fdf311$export$8699f7c8af148338 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  return /* @__PURE__ */ createElement$1($d7bdfb9eb0fdf311$var$Collection.Provider, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ createElement$1($d7bdfb9eb0fdf311$var$Collection.Slot, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ createElement$1($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, _extends$2({}, props, {
    ref: forwardedRef
  }))));
});
const $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, ...groupProps } = props;
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = useState$1(false);
  const handleEntryFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEntryFocus);
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = useRef$1(false);
  const [focusableItemsCount, setFocusableItemsCount] = useState$1(0);
  useEffect$1(() => {
    const node2 = ref.current;
    if (node2) {
      node2.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
      return () => node2.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
    }
  }, [
    handleEntryFocus
  ]);
  return /* @__PURE__ */ createElement$1($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: useCallback$1(
      (tabStopId) => setCurrentTabStopId(tabStopId),
      [
        setCurrentTabStopId
      ]
    ),
    onItemShiftTab: useCallback$1(
      () => setIsTabbingBackOut(true),
      []
    ),
    onFocusableItemAdd: useCallback$1(
      () => setFocusableItemsCount(
        (prevCount) => prevCount + 1
      ),
      []
    ),
    onFocusableItemRemove: useCallback$1(
      () => setFocusableItemsCount(
        (prevCount) => prevCount - 1
      ),
      []
    )
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
    "data-orientation": orientation
  }, groupProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...props.style
    },
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, () => {
      isClickFocusRef.current = true;
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, (event) => {
      const isKeyboardFocus = !isClickFocusRef.current;
      if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
        const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
        event.currentTarget.dispatchEvent(entryFocusEvent);
        if (!entryFocusEvent.defaultPrevented) {
          const items = getItems().filter(
            (item) => item.focusable
          );
          const activeItem = items.find(
            (item) => item.active
          );
          const currentItem = items.find(
            (item) => item.id === currentTabStopId
          );
          const candidateItems = [
            activeItem,
            currentItem,
            ...items
          ].filter(Boolean);
          const candidateNodes = candidateItems.map(
            (item) => item.ref.current
          );
          $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
        }
      }
      isClickFocusRef.current = false;
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsTabbingBackOut(false)
    )
  })));
});
const $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
const $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
  const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
  const id = tabStopId || autoId;
  const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  useEffect$1(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [
    focusable,
    onFocusableItemAdd,
    onFocusableItemRemove
  ]);
  return /* @__PURE__ */ createElement$1($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({
    tabIndex: isCurrentTabStop ? 0 : -1,
    "data-orientation": context.orientation
  }, itemProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!focusable)
        event.preventDefault();
      else
        context.onItemFocus(id);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => context.onItemFocus(id)
    ),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget)
        return;
      const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
      if (focusIntent !== void 0) {
        event.preventDefault();
        const items = getItems().filter(
          (item) => item.focusable
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if (focusIntent === "last")
          candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev")
            candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
        );
      }
    })
  })));
});
const $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
  const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(key))
    return void 0;
  if (orientation === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(key))
    return void 0;
  return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
const $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
const $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;
const $6cc32821e9371a1c$var$SELECTION_KEYS = [
  "Enter",
  " "
];
const $6cc32821e9371a1c$var$FIRST_KEYS = [
  "ArrowDown",
  "PageUp",
  "Home"
];
const $6cc32821e9371a1c$var$LAST_KEYS = [
  "ArrowUp",
  "PageDown",
  "End"
];
const $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
  ...$6cc32821e9371a1c$var$FIRST_KEYS,
  ...$6cc32821e9371a1c$var$LAST_KEYS
];
const $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
  ltr: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowRight"
  ],
  rtl: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowLeft"
  ]
};
const $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
};
const $6cc32821e9371a1c$var$MENU_NAME = "Menu";
const [$6cc32821e9371a1c$var$Collection, $6cc32821e9371a1c$var$useCollection, $6cc32821e9371a1c$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($6cc32821e9371a1c$var$MENU_NAME);
const [$6cc32821e9371a1c$var$createMenuContext, $6cc32821e9371a1c$export$4027731b685e72eb] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6cc32821e9371a1c$var$MENU_NAME, [
  $6cc32821e9371a1c$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
const $6cc32821e9371a1c$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const $6cc32821e9371a1c$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
const [$6cc32821e9371a1c$var$MenuProvider, $6cc32821e9371a1c$var$useMenuContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
const [$6cc32821e9371a1c$var$MenuRootProvider, $6cc32821e9371a1c$var$useMenuRootContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
const $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeMenu, ...anchorProps } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return /* @__PURE__ */ createElement$1($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends$2({}, popperScope, anchorProps, {
    ref: forwardedRef
  }));
});
const $6cc32821e9371a1c$var$PORTAL_NAME = "MenuPortal";
const [$6cc32821e9371a1c$var$PortalProvider, $6cc32821e9371a1c$var$usePortalContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, {
  forceMount: void 0
});
const $6cc32821e9371a1c$export$793392f970497feb = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$PortalProvider, {
    scope: __scopeMenu,
    forceMount
  }, /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ createElement$1($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
const $6cc32821e9371a1c$var$CONTENT_NAME = "MenuContent";
const [$6cc32821e9371a1c$var$MenuContentProvider, $6cc32821e9371a1c$var$useMenuContentContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$CONTENT_NAME);
const $6cc32821e9371a1c$export$479f0f2f71193efe = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, rootContext.modal ? /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$MenuRootContentModal, _extends$2({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$MenuRootContentNonModal, _extends$2({}, contentProps, {
    ref: forwardedRef
  })))));
});
const $6cc32821e9371a1c$var$MenuRootContentModal = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  useEffect$1(() => {
    const content = ref.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$MenuContentImpl, _extends$2({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: context.open,
    disableOutsideScroll: true,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    ),
    onDismiss: () => context.onOpenChange(false)
  }));
});
const $6cc32821e9371a1c$var$MenuRootContentNonModal = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$MenuContentImpl, _extends$2({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => context.onOpenChange(false)
  }));
});
const $6cc32821e9371a1c$var$MenuContentImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const getItems = $6cc32821e9371a1c$var$useCollection(__scopeMenu);
  const [currentItemId, setCurrentItemId] = useState$1(null);
  const contentRef = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef, context.onContentChange);
  const timerRef = useRef$1(0);
  const searchRef = useRef$1("");
  const pointerGraceTimerRef = useRef$1(0);
  const pointerGraceIntentRef = useRef$1(null);
  const pointerDirRef = useRef$1("right");
  const lastPointerXRef = useRef$1(0);
  const ScrollLockWrapper = disableOutsideScroll ? ReactRemoveScroll$1 : Fragment;
  const scrollLockWrapperProps = disableOutsideScroll ? {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  } : void 0;
  const handleTypeaheadSearch = (key) => {
    var _items$find, _items$find2;
    const search = searchRef.current + key;
    const items = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = document.activeElement;
    const currentMatch = (_items$find = items.find(
      (item) => item.ref.current === currentItem
    )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
    const values = items.map(
      (item) => item.textValue
    );
    const nextMatch = $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch);
    const newItem = (_items$find2 = items.find(
      (item) => item.textValue === nextMatch
    )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current;
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
    if (newItem)
      setTimeout(
        () => newItem.focus()
      );
  };
  useEffect$1(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const isPointerMovingToSubmenu = useCallback$1((event) => {
    var _pointerGraceIntentRe, _pointerGraceIntentRe2;
    const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
    return isMovingTowards && $6cc32821e9371a1c$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
  }, []);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$MenuContentProvider, {
    scope: __scopeMenu,
    searchRef,
    onItemEnter: useCallback$1((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    onItemLeave: useCallback$1((event) => {
      var _contentRef$current;
      if (isPointerMovingToSubmenu(event))
        return;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
      setCurrentItemId(null);
    }, [
      isPointerMovingToSubmenu
    ]),
    onTriggerLeave: useCallback$1((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    pointerGraceTimerRef,
    onPointerGraceIntentChange: useCallback$1((intent) => {
      pointerGraceIntentRef.current = intent;
    }, [])
  }, /* @__PURE__ */ createElement$1(ScrollLockWrapper, scrollLockWrapperProps, /* @__PURE__ */ createElement$1($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: trapFocus,
    onMountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onOpenAutoFocus, (event) => {
      var _contentRef$current2;
      event.preventDefault();
      (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
    }),
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ createElement$1($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss
  }, /* @__PURE__ */ createElement$1($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends$2({
    asChild: true
  }, rovingFocusGroupScope, {
    dir: rootContext.dir,
    orientation: "vertical",
    loop,
    currentTabStopId: currentItemId,
    onCurrentTabStopIdChange: setCurrentItemId,
    onEntryFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onEntryFocus, (event) => {
      if (!rootContext.isUsingKeyboardRef.current)
        event.preventDefault();
    })
  }), /* @__PURE__ */ createElement$1($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends$2({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open),
    "data-radix-menu-content": "",
    dir: rootContext.dir
  }, popperScope, contentProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const target = event.target;
      const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      const isCharacterKey = event.key.length === 1;
      if (isKeyDownInside) {
        if (event.key === "Tab")
          event.preventDefault();
        if (!isModifierKey && isCharacterKey)
          handleTypeaheadSearch(event.key);
      }
      const content = contentRef.current;
      if (event.target !== content)
        return;
      if (!$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(event.key))
        return;
      event.preventDefault();
      const items = getItems().filter(
        (item) => !item.disabled
      );
      const candidateNodes = items.map(
        (item) => item.ref.current
      );
      if ($6cc32821e9371a1c$var$LAST_KEYS.includes(event.key))
        candidateNodes.reverse();
      $6cc32821e9371a1c$var$focusFirst(candidateNodes);
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, (event) => {
      if (!event.currentTarget.contains(event.target)) {
        window.clearTimeout(timerRef.current);
        searchRef.current = "";
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      const target = event.target;
      const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
      if (event.currentTarget.contains(target) && pointerXHasChanged) {
        const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
        pointerDirRef.current = newDir;
        lastPointerXRef.current = event.clientX;
      }
    }))
  })))))));
});
const $6cc32821e9371a1c$export$dd37bec0e8a99143 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeMenu, ...labelProps } = props;
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({}, labelProps, {
    ref: forwardedRef
  }));
});
const $6cc32821e9371a1c$var$ITEM_NAME = "MenuItem";
const $6cc32821e9371a1c$var$ITEM_SELECT = "menu.itemSelect";
const $6cc32821e9371a1c$export$2ce376c2cc3355c8 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { disabled = false, onSelect, ...itemProps } = props;
  const ref = useRef$1(null);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const isPointerDownRef = useRef$1(false);
  const handleSelect = () => {
    const menuItem = ref.current;
    if (!disabled && menuItem) {
      const itemSelectEvent = new CustomEvent($6cc32821e9371a1c$var$ITEM_SELECT, {
        bubbles: true,
        cancelable: true
      });
      menuItem.addEventListener(
        $6cc32821e9371a1c$var$ITEM_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(menuItem, itemSelectEvent);
      if (itemSelectEvent.defaultPrevented)
        isPointerDownRef.current = false;
      else
        rootContext.onClose();
    }
  };
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$MenuItemImpl, _extends$2({}, itemProps, {
    ref: composedRefs,
    disabled,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, handleSelect),
    onPointerDown: (event) => {
      var _props$onPointerDown;
      (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
      isPointerDownRef.current = true;
    },
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      var _event$currentTarget;
      if (!isPointerDownRef.current)
        (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(event.key)) {
        event.currentTarget.click();
        event.preventDefault();
      }
    })
  }));
});
const $6cc32821e9371a1c$var$MenuItemImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, __scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [isFocused, setIsFocused] = useState$1(false);
  const [textContent, setTextContent] = useState$1("");
  useEffect$1(() => {
    const menuItem = ref.current;
    if (menuItem) {
      var _menuItem$textContent;
      setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : "").trim());
    }
  }, [
    itemProps.children
  ]);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$Collection.ItemSlot, {
    scope: __scopeMenu,
    disabled,
    textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
  }, /* @__PURE__ */ createElement$1($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends$2({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled
  }), /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    role: "menuitem",
    "data-highlighted": isFocused ? "" : void 0,
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0
  }, itemProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      if (disabled)
        contentContext.onItemLeave(event);
      else {
        contentContext.onItemEnter(event);
        if (!event.defaultPrevented) {
          const item = event.currentTarget;
          item.focus();
        }
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(
      (event) => contentContext.onItemLeave(event)
    )),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsFocused(false)
    )
  }))));
});
const $6cc32821e9371a1c$export$f6f243521332502d = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends$2({
    role: "menuitemcheckbox",
    "aria-checked": $6cc32821e9371a1c$var$isIndeterminate(checked) ? "mixed" : checked
  }, checkboxItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      checkboxItemProps.onSelect,
      () => onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($6cc32821e9371a1c$var$isIndeterminate(checked) ? true : !checked),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
const $6cc32821e9371a1c$var$RADIO_GROUP_NAME = "MenuRadioGroup";
const [$6cc32821e9371a1c$var$RadioGroupProvider, $6cc32821e9371a1c$var$useRadioGroupContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$RADIO_GROUP_NAME, {
  value: void 0,
  onValueChange: () => {
  }
});
const $6cc32821e9371a1c$var$RADIO_ITEM_NAME = "MenuRadioItem";
const $6cc32821e9371a1c$export$69bd225e9817f6d0 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { value, ...radioItemProps } = props;
  const context = $6cc32821e9371a1c$var$useRadioGroupContext($6cc32821e9371a1c$var$RADIO_ITEM_NAME, props.__scopeMenu);
  const checked = value === context.value;
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends$2({
    role: "menuitemradio",
    "aria-checked": checked
  }, radioItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(radioItemProps.onSelect, () => {
      var _context$onValueChang;
      return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
const $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME = "MenuItemIndicator";
const [$6cc32821e9371a1c$var$ItemIndicatorProvider, $6cc32821e9371a1c$var$useItemIndicatorContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, {
  checked: false
});
const $6cc32821e9371a1c$export$a2593e23056970a3 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
  const indicatorContext = $6cc32821e9371a1c$var$useItemIndicatorContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, __scopeMenu);
  return /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $6cc32821e9371a1c$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({}, itemIndicatorProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(indicatorContext.checked)
  })));
});
const $6cc32821e9371a1c$export$1cec7dcdd713e220 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeMenu, ...separatorProps } = props;
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    role: "separator",
    "aria-orientation": "horizontal"
  }, separatorProps, {
    ref: forwardedRef
  }));
});
const $6cc32821e9371a1c$var$SUB_NAME = "MenuSub";
const [$6cc32821e9371a1c$var$MenuSubProvider, $6cc32821e9371a1c$var$useMenuSubContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$SUB_NAME);
const $6cc32821e9371a1c$var$SUB_TRIGGER_NAME = "MenuSubTrigger";
const $6cc32821e9371a1c$export$5fbbb3ba7297405f = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const openTimerRef = useRef$1(null);
  const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
  const scope2 = {
    __scopeMenu: props.__scopeMenu
  };
  const clearOpenTimer = useCallback$1(() => {
    if (openTimerRef.current)
      window.clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
  }, []);
  useEffect$1(
    () => clearOpenTimer,
    [
      clearOpenTimer
    ]
  );
  useEffect$1(() => {
    const pointerGraceTimer = pointerGraceTimerRef.current;
    return () => {
      window.clearTimeout(pointerGraceTimer);
      onPointerGraceIntentChange(null);
    };
  }, [
    pointerGraceTimerRef,
    onPointerGraceIntentChange
  ]);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$9fa5ebd18bee4d43, _extends$2({
    asChild: true
  }, scope2), /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$MenuItemImpl, _extends$2({
    id: subContext.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": subContext.contentId,
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open)
  }, props, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, subContext.onTriggerChange),
    onClick: (event) => {
      var _props$onClick;
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
      if (props.disabled || event.defaultPrevented)
        return;
      event.currentTarget.focus();
      if (!context.open)
        context.onOpenChange(true);
    },
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      contentContext.onItemEnter(event);
      if (event.defaultPrevented)
        return;
      if (!props.disabled && !context.open && !openTimerRef.current) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.current = window.setTimeout(() => {
          context.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event) => {
      var _context$content;
      clearOpenTimer();
      const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
      if (contentRect) {
        var _context$content2;
        const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: event.clientX + bleed,
              y: event.clientY
            },
            {
              x: contentNearEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.bottom
            },
            {
              x: contentNearEdge,
              y: contentRect.bottom
            }
          ],
          side
        });
        window.clearTimeout(pointerGraceTimerRef.current);
        pointerGraceTimerRef.current = window.setTimeout(
          () => contentContext.onPointerGraceIntentChange(null),
          300
        );
      } else {
        contentContext.onTriggerLeave(event);
        if (event.defaultPrevented)
          return;
        contentContext.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (props.disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
        var _context$content3;
        context.onOpenChange(true);
        (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus();
        event.preventDefault();
      }
    })
  })));
});
const $6cc32821e9371a1c$var$SUB_CONTENT_NAME = "MenuSubContent";
const $6cc32821e9371a1c$export$e7142ab31822bde6 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...subContentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_CONTENT_NAME, props.__scopeMenu);
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ createElement$1($6cc32821e9371a1c$var$MenuContentImpl, _extends$2({
    id: subContext.contentId,
    "aria-labelledby": subContext.triggerId
  }, subContentProps, {
    ref: composedRefs,
    align: "start",
    side: rootContext.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    trapFocus: false,
    onOpenAutoFocus: (event) => {
      var _ref$current;
      if (rootContext.isUsingKeyboardRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
      event.preventDefault();
    },
    onCloseAutoFocus: (event) => event.preventDefault(),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      if (event.target !== subContext.trigger)
        context.onOpenChange(false);
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      rootContext.onClose();
      event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isKeyDownInside = event.currentTarget.contains(event.target);
      const isCloseKey = $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
      if (isKeyDownInside && isCloseKey) {
        var _subContext$trigger;
        context.onOpenChange(false);
        (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus();
        event.preventDefault();
      }
    })
  })))));
});
function $6cc32821e9371a1c$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $6cc32821e9371a1c$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $6cc32821e9371a1c$var$getCheckedState(checked) {
  return $6cc32821e9371a1c$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function $6cc32821e9371a1c$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $6cc32821e9371a1c$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
function $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char2) => char2 === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = $6cc32821e9371a1c$var$wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter(
      (v2) => v2 !== currentMatch
    );
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function $6cc32821e9371a1c$var$isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $6cc32821e9371a1c$var$isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return $6cc32821e9371a1c$var$isPointInPolygon(cursorPos, area);
}
function $6cc32821e9371a1c$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
const $6cc32821e9371a1c$export$602eac185826482c = $6cc32821e9371a1c$export$793392f970497feb;
const $6cc32821e9371a1c$export$7c6e2c02157bb7d2 = $6cc32821e9371a1c$export$479f0f2f71193efe;
const $6cc32821e9371a1c$export$b04be29aa201d4f5 = $6cc32821e9371a1c$export$dd37bec0e8a99143;
const $6cc32821e9371a1c$export$6d08773d2e66f8f2 = $6cc32821e9371a1c$export$2ce376c2cc3355c8;
const $6cc32821e9371a1c$export$16ce288f89fa631c = $6cc32821e9371a1c$export$f6f243521332502d;
const $6cc32821e9371a1c$export$371ab307eab489c0 = $6cc32821e9371a1c$export$69bd225e9817f6d0;
const $6cc32821e9371a1c$export$c3468e2714d175fa = $6cc32821e9371a1c$export$a2593e23056970a3;
const $6cc32821e9371a1c$export$1ff3c3f08ae963c0 = $6cc32821e9371a1c$export$1cec7dcdd713e220;
const $6cc32821e9371a1c$export$2ea8a7a591ac5eac = $6cc32821e9371a1c$export$5fbbb3ba7297405f;
const $6cc32821e9371a1c$export$6d4de93b380beddf = $6cc32821e9371a1c$export$e7142ab31822bde6;
const $d08ef79370b62062$var$DROPDOWN_MENU_NAME = "DropdownMenu";
const [$d08ef79370b62062$var$createDropdownMenuContext, $d08ef79370b62062$export$c0623cd925aeb687] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d08ef79370b62062$var$DROPDOWN_MENU_NAME, [
  $6cc32821e9371a1c$export$4027731b685e72eb
]);
const $d08ef79370b62062$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
const [$d08ef79370b62062$var$DropdownMenuProvider, $d08ef79370b62062$var$useDropdownMenuContext] = $d08ef79370b62062$var$createDropdownMenuContext($d08ef79370b62062$var$DROPDOWN_MENU_NAME);
const $d08ef79370b62062$export$cd369b4d4d54efc9 = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$602eac185826482c, _extends$2({}, menuScope, portalProps));
};
const $d08ef79370b62062$var$CONTENT_NAME = "DropdownMenuContent";
const $d08ef79370b62062$export$6e76d93a37c01248 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...contentProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$CONTENT_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const hasInteractedOutsideRef = useRef$1(false);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$7c6e2c02157bb7d2, _extends$2({
    id: context.contentId,
    "aria-labelledby": context.triggerId
  }, menuScope, contentProps, {
    ref: forwardedRef,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      if (!hasInteractedOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      hasInteractedOutsideRef.current = false;
      event.preventDefault();
    }),
    onInteractOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onInteractOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context.modal || isRightClick)
        hasInteractedOutsideRef.current = true;
    }),
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
const $d08ef79370b62062$export$76e48c5b57f24495 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...labelProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$b04be29aa201d4f5, _extends$2({}, menuScope, labelProps, {
    ref: forwardedRef
  }));
});
const $d08ef79370b62062$export$ed97964d1871885d = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$6d08773d2e66f8f2, _extends$2({}, menuScope, itemProps, {
    ref: forwardedRef
  }));
});
const $d08ef79370b62062$export$53a69729da201fa9 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$16ce288f89fa631c, _extends$2({}, menuScope, checkboxItemProps, {
    ref: forwardedRef
  }));
});
const $d08ef79370b62062$export$e4f69b41b1637536 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$371ab307eab489c0, _extends$2({}, menuScope, radioItemProps, {
    ref: forwardedRef
  }));
});
const $d08ef79370b62062$export$42355ae145153fb6 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$c3468e2714d175fa, _extends$2({}, menuScope, itemIndicatorProps, {
    ref: forwardedRef
  }));
});
const $d08ef79370b62062$export$da160178fd3bc7e9 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$1ff3c3f08ae963c0, _extends$2({}, menuScope, separatorProps, {
    ref: forwardedRef
  }));
});
const $d08ef79370b62062$export$21dcb7ec56f874cf = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$2ea8a7a591ac5eac, _extends$2({}, menuScope, subTriggerProps, {
    ref: forwardedRef
  }));
});
const $d08ef79370b62062$export$f34ec8bc2482cc5f = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ createElement$1($6cc32821e9371a1c$export$6d4de93b380beddf, _extends$2({}, menuScope, subContentProps, {
    ref: forwardedRef,
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
const $d08ef79370b62062$export$602eac185826482c = $d08ef79370b62062$export$cd369b4d4d54efc9;
const $d08ef79370b62062$export$7c6e2c02157bb7d2 = $d08ef79370b62062$export$6e76d93a37c01248;
const $d08ef79370b62062$export$b04be29aa201d4f5 = $d08ef79370b62062$export$76e48c5b57f24495;
const $d08ef79370b62062$export$6d08773d2e66f8f2 = $d08ef79370b62062$export$ed97964d1871885d;
const $d08ef79370b62062$export$16ce288f89fa631c = $d08ef79370b62062$export$53a69729da201fa9;
const $d08ef79370b62062$export$371ab307eab489c0 = $d08ef79370b62062$export$e4f69b41b1637536;
const $d08ef79370b62062$export$c3468e2714d175fa = $d08ef79370b62062$export$42355ae145153fb6;
const $d08ef79370b62062$export$1ff3c3f08ae963c0 = $d08ef79370b62062$export$da160178fd3bc7e9;
const $d08ef79370b62062$export$2ea8a7a591ac5eac = $d08ef79370b62062$export$21dcb7ec56f874cf;
const $d08ef79370b62062$export$6d4de93b380beddf = $d08ef79370b62062$export$f34ec8bc2482cc5f;
const DropdownMenuSubTrigger = React$1.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  $d08ef79370b62062$export$2ea8a7a591ac5eac,
  {
    ref,
    className: cn$1(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx$1(Icon, { name: IconName.chevronDownSmall, className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = $d08ef79370b62062$export$2ea8a7a591ac5eac.displayName;
const DropdownMenuSubContent = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $d08ef79370b62062$export$6d4de93b380beddf,
  {
    ref,
    className: cn$1(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = $d08ef79370b62062$export$6d4de93b380beddf.displayName;
const DropdownMenuContent = React$1.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx$1($d08ef79370b62062$export$602eac185826482c, { children: /* @__PURE__ */ jsx$1(
  $d08ef79370b62062$export$7c6e2c02157bb7d2,
  {
    ref,
    sideOffset,
    className: cn$1(
      "z-50 min-w-[8rem] overflow-hidden rounded-md theme-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = $d08ef79370b62062$export$7c6e2c02157bb7d2.displayName;
const DropdownMenuItem = React$1.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $d08ef79370b62062$export$6d08773d2e66f8f2,
  {
    ref,
    className: cn$1(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = $d08ef79370b62062$export$6d08773d2e66f8f2.displayName;
const DropdownMenuCheckboxItem = React$1.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  $d08ef79370b62062$export$16ce288f89fa631c,
  {
    ref,
    className: cn$1(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx$1("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx$1($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.checkmark, className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = $d08ef79370b62062$export$16ce288f89fa631c.displayName;
const DropdownMenuRadioItem = React$1.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  $d08ef79370b62062$export$371ab307eab489c0,
  {
    ref,
    className: cn$1(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx$1("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx$1($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.circle, className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = $d08ef79370b62062$export$371ab307eab489c0.displayName;
const DropdownMenuLabel = React$1.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $d08ef79370b62062$export$b04be29aa201d4f5,
  {
    ref,
    className: cn$1(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = $d08ef79370b62062$export$b04be29aa201d4f5.displayName;
const DropdownMenuSeparator = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $d08ef79370b62062$export$1ff3c3f08ae963c0,
  {
    ref,
    className: cn$1("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = $d08ef79370b62062$export$1ff3c3f08ae963c0.displayName;
const isValueAnIconName = (value) => Object.values(IconName).includes(value);
const Adornment = ({
  position: position2,
  value
}) => {
  return isValueAnIconName(value) ? /* @__PURE__ */ jsx$1(
    Icon,
    {
      name: value,
      className: "text-secondary-foreground/80"
    }
  ) : /* @__PURE__ */ jsx$1(
    "div",
    {
      className: `border-0 border-border/10 py-2 min-w-16 ${position2 === "start" ? "border-r" : "border-l text-right"}`,
      children: /* @__PURE__ */ jsx$1(
        Text,
        {
          variant: TextVariant.body,
          weight: TextWeight.medium,
          className: "text-secondary-foreground/80",
          children: value
        }
      )
    }
  );
};
const Input = React$1.forwardRef(
  ({ startAdornment, endAdornment, className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn$1(
          "flex justify-between gap-2 items-center h-10 px-3 bg-primary/10 theme-border rounded-md text-base",
          className
        ),
        children: [
          startAdornment && /* @__PURE__ */ jsx$1(Adornment, { position: "start", value: startAdornment }),
          /* @__PURE__ */ jsx$1(
            "input",
            {
              type,
              className: "flex w-full px-2 bg-transparent ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[0.5px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              ref,
              ...props
            }
          ),
          endAdornment && /* @__PURE__ */ jsx$1(Adornment, { position: "end", value: endAdornment })
        ]
      }
    );
  }
);
Input.displayName = "Input";
const $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends$2({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  }));
});
const $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;
const labelVariants = cva(
  "text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $b73a6c6685e72184$export$be92b6f5f03c0fe9,
  {
    ref,
    className: cn$1(labelVariants(), className),
    ...props
  }
));
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;
const PaginationContent = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "ul",
  {
    ref,
    className: cn$1("flex flex-row items-center gap-2 h-max", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1("li", { ref, className: cn$1("flex h-8", className), ...props }));
PaginationItem.displayName = "PaginationItem";
const $cb5cc270b50c6fcd$var$POPOVER_NAME = "Popover";
const [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cb5cc270b50c6fcd$var$POPOVER_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $cb5cc270b50c6fcd$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
const $cb5cc270b50c6fcd$var$PORTAL_NAME = "PopoverPortal";
const [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
  forceMount: void 0
});
const $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ createElement$1($cb5cc270b50c6fcd$var$PortalProvider, {
    scope: __scopePopover,
    forceMount
  }, /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ createElement$1($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
const $cb5cc270b50c6fcd$var$CONTENT_NAME = "PopoverContent";
const $cb5cc270b50c6fcd$export$d7e1f420b25549ff = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  return /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ createElement$1($cb5cc270b50c6fcd$var$PopoverContentModal, _extends$2({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ createElement$1($cb5cc270b50c6fcd$var$PopoverContentNonModal, _extends$2({}, contentProps, {
    ref: forwardedRef
  })));
});
const $cb5cc270b50c6fcd$var$PopoverContentModal = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const contentRef = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const isRightClickOutsideRef = useRef$1(false);
  useEffect$1(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ createElement$1(ReactRemoveScroll$1, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, /* @__PURE__ */ createElement$1($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends$2({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      if (!isRightClickOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      isRightClickOutsideRef.current = isRightClick;
    }, {
      checkForDefaultPrevented: false
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
const $cb5cc270b50c6fcd$var$PopoverContentNonModal = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const hasInteractedOutsideRef = useRef$1(false);
  const hasPointerDownOutsideRef = useRef$1(false);
  return /* @__PURE__ */ createElement$1($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends$2({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
const $cb5cc270b50c6fcd$var$PopoverContentImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ createElement$1($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ createElement$1($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onDismiss: () => context.onOpenChange(false)
  }, /* @__PURE__ */ createElement$1($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends$2({
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
    role: "dialog",
    id: context.contentId
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function $cb5cc270b50c6fcd$var$getState(open) {
  return open ? "open" : "closed";
}
const $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
const $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;
const PopoverContent = React$1.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx$1($cb5cc270b50c6fcd$export$602eac185826482c, { children: /* @__PURE__ */ jsx$1(
  $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2,
  {
    ref,
    sideOffset,
    className: cn$1(
      "z-50 w-72 rounded-md theme-border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2.displayName;
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = useRef$1({
    value,
    previous: value
  });
  return useMemo$1(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}
const $ce77a8961b41be9e$var$RADIO_NAME = "Radio";
const [$ce77a8961b41be9e$var$createRadioContext, $ce77a8961b41be9e$export$67d2296460f1b002] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($ce77a8961b41be9e$var$RADIO_NAME);
const [$ce77a8961b41be9e$var$RadioProvider, $ce77a8961b41be9e$var$useRadioContext] = $ce77a8961b41be9e$var$createRadioContext($ce77a8961b41be9e$var$RADIO_NAME);
const $ce77a8961b41be9e$export$d7b12c4107be0d61 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, ...radioProps } = props;
  const [button, setButton] = useState$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node2) => setButton(node2)
  );
  const hasConsumerStoppedPropagationRef = useRef$1(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  return /* @__PURE__ */ createElement$1($ce77a8961b41be9e$var$RadioProvider, {
    scope: __scopeRadio,
    checked,
    disabled
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$2({
    type: "button",
    role: "radio",
    "aria-checked": checked,
    "data-state": $ce77a8961b41be9e$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, radioProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      if (!checked)
        onCheck === null || onCheck === void 0 || onCheck();
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ createElement$1($ce77a8961b41be9e$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
const $ce77a8961b41be9e$var$INDICATOR_NAME = "RadioIndicator";
const $ce77a8961b41be9e$export$d35a9ffa9a04f9e7 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeRadio, forceMount, ...indicatorProps } = props;
  const context = $ce77a8961b41be9e$var$useRadioContext($ce77a8961b41be9e$var$INDICATOR_NAME, __scopeRadio);
  return /* @__PURE__ */ createElement$1($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.checked
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({
    "data-state": $ce77a8961b41be9e$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef
  })));
});
const $ce77a8961b41be9e$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = useRef$1(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  useEffect$1(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ createElement$1("input", _extends$2({
    type: "radio",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $ce77a8961b41be9e$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
const $f99a8c78507165f7$var$ARROW_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];
const $f99a8c78507165f7$var$RADIO_GROUP_NAME = "RadioGroup";
const [$f99a8c78507165f7$var$createRadioGroupContext, $f99a8c78507165f7$export$c547093f11b76da2] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($f99a8c78507165f7$var$RADIO_GROUP_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4,
  $ce77a8961b41be9e$export$67d2296460f1b002
]);
const $f99a8c78507165f7$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
const $f99a8c78507165f7$var$useRadioScope = $ce77a8961b41be9e$export$67d2296460f1b002();
const [$f99a8c78507165f7$var$RadioGroupProvider, $f99a8c78507165f7$var$useRadioGroupContext] = $f99a8c78507165f7$var$createRadioGroupContext($f99a8c78507165f7$var$RADIO_GROUP_NAME);
const $f99a8c78507165f7$export$a98f0dcb43a68a25 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ createElement$1($f99a8c78507165f7$var$RadioGroupProvider, {
    scope: __scopeRadioGroup,
    name,
    required,
    disabled,
    value,
    onValueChange: setValue
  }, /* @__PURE__ */ createElement$1($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends$2({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation,
    dir: direction,
    loop
  }), /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    role: "radiogroup",
    "aria-required": required,
    "aria-orientation": orientation,
    "data-disabled": disabled ? "" : void 0,
    dir: direction
  }, groupProps, {
    ref: forwardedRef
  }))));
});
const $f99a8c78507165f7$var$ITEM_NAME = "RadioGroupItem";
const $f99a8c78507165f7$export$9f866c100ef519e4 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeRadioGroup, disabled, ...itemProps } = props;
  const context = $f99a8c78507165f7$var$useRadioGroupContext($f99a8c78507165f7$var$ITEM_NAME, __scopeRadioGroup);
  const isDisabled = context.disabled || disabled;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const checked = context.value === itemProps.value;
  const isArrowKeyPressedRef = useRef$1(false);
  useEffect$1(() => {
    const handleKeyDown = (event) => {
      if ($f99a8c78507165f7$var$ARROW_KEYS.includes(event.key))
        isArrowKeyPressedRef.current = true;
    };
    const handleKeyUp = () => isArrowKeyPressedRef.current = false;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return /* @__PURE__ */ createElement$1($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends$2({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !isDisabled,
    active: checked
  }), /* @__PURE__ */ createElement$1($ce77a8961b41be9e$export$d7b12c4107be0d61, _extends$2({
    disabled: isDisabled,
    required: context.required,
    checked
  }, radioScope, itemProps, {
    name: context.name,
    ref: composedRefs,
    onCheck: () => context.onValueChange(itemProps.value),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10((event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onFocus, () => {
      var _ref$current;
      if (isArrowKeyPressedRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.click();
    })
  })));
});
const $f99a8c78507165f7$export$5fb54c671a65c88 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeRadioGroup, ...indicatorProps } = props;
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  return /* @__PURE__ */ createElement$1($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, _extends$2({}, radioScope, indicatorProps, {
    ref: forwardedRef
  }));
});
const $f99a8c78507165f7$export$be92b6f5f03c0fe9 = $f99a8c78507165f7$export$a98f0dcb43a68a25;
const $f99a8c78507165f7$export$6d08773d2e66f8f2 = $f99a8c78507165f7$export$9f866c100ef519e4;
const $f99a8c78507165f7$export$adb584737d712b70 = $f99a8c78507165f7$export$5fb54c671a65c88;
const RadioGroupVariant = {
  simple: "simple",
  default: "default"
};
const RadioGroup = React$1.forwardRef(({ variant, className, ...props }, ref) => {
  return /* @__PURE__ */ jsx$1(
    $f99a8c78507165f7$export$be92b6f5f03c0fe9,
    {
      className: cn$1(
        variant === RadioGroupVariant.simple ? "flex gap-4" : "grid bg-primary/5 theme-border rounded-lg w-full",
        className
      ),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = $f99a8c78507165f7$export$be92b6f5f03c0fe9.displayName;
const RadioGroupItemSize = {
  small: "small",
  default: "default"
};
const RadioGroupItem = React$1.forwardRef(({ size: size2, className, ...props }, ref) => {
  return /* @__PURE__ */ jsx$1(
    $f99a8c78507165f7$export$6d08773d2e66f8f2,
    {
      ref,
      className: cn$1(
        "aspect-square rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        size2 === RadioGroupItemSize.small ? "h-4 w-4" : "h-5 w-5",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx$1($f99a8c78507165f7$export$adb584737d712b70, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx$1(
        "span",
        {
          className: cn$1(
            "block bg-current rounded-full",
            size2 === RadioGroupItemSize.small ? "h-2 w-2" : "h-3 w-3 "
          )
        }
      ) })
    }
  );
});
RadioGroupItem.displayName = $f99a8c78507165f7$export$6d08773d2e66f8f2.displayName;
const {
  createElement,
  createContext,
  createRef,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} = React$1;
const useId$1 = React$1["useId".toString()];
const PanelGroupContext = createContext(null);
PanelGroupContext.displayName = "PanelGroupContext";
const wrappedUseId = typeof useId$1 === "function" ? useId$1 : () => null;
let counter = 0;
function useUniqueId(idFromParams = null) {
  const idFromUseId = wrappedUseId();
  const idRef = useRef(idFromParams || idFromUseId || null);
  if (idRef.current === null) {
    idRef.current = "" + counter++;
  }
  return idFromParams !== null && idFromParams !== void 0 ? idFromParams : idRef.current;
}
function PanelWithForwardedRef({
  children,
  className: classNameFromProps = "",
  collapsedSize,
  collapsible,
  defaultSize,
  forwardedRef,
  id: idFromProps,
  maxSize,
  minSize,
  onCollapse,
  onExpand,
  onResize,
  order,
  style: styleFromProps,
  tagName: Type = "div",
  ...rest
}) {
  const context = useContext(PanelGroupContext);
  if (context === null) {
    throw Error(`Panel components must be rendered within a PanelGroup container`);
  }
  const {
    collapsePanel,
    expandPanel,
    getPanelSize,
    getPanelStyle,
    groupId,
    isPanelCollapsed,
    reevaluatePanelConstraints,
    registerPanel,
    resizePanel: resizePanel2,
    unregisterPanel
  } = context;
  const panelId = useUniqueId(idFromProps);
  const panelDataRef = useRef({
    callbacks: {
      onCollapse,
      onExpand,
      onResize
    },
    constraints: {
      collapsedSize,
      collapsible,
      defaultSize,
      maxSize,
      minSize
    },
    id: panelId,
    idIsFromProps: idFromProps !== void 0,
    order
  });
  useRef({
    didLogMissingDefaultSizeWarning: false
  });
  useImperativeHandle(forwardedRef, () => ({
    collapse: () => {
      collapsePanel(panelDataRef.current);
    },
    expand: (minSize2) => {
      expandPanel(panelDataRef.current, minSize2);
    },
    getId() {
      return panelId;
    },
    getSize() {
      return getPanelSize(panelDataRef.current);
    },
    isCollapsed() {
      return isPanelCollapsed(panelDataRef.current);
    },
    isExpanded() {
      return !isPanelCollapsed(panelDataRef.current);
    },
    resize: (size2) => {
      resizePanel2(panelDataRef.current, size2);
    }
  }), [collapsePanel, expandPanel, getPanelSize, isPanelCollapsed, panelId, resizePanel2]);
  const style = getPanelStyle(panelDataRef.current, defaultSize);
  return createElement(Type, {
    ...rest,
    children,
    className: classNameFromProps,
    id: idFromProps,
    style: {
      ...style,
      ...styleFromProps
    },
    // CSS selectors
    "data-panel": "",
    "data-panel-collapsible": collapsible || void 0,
    "data-panel-group-id": groupId,
    "data-panel-id": panelId,
    "data-panel-size": parseFloat("" + style.flexGrow).toFixed(1)
  });
}
const Panel = forwardRef((props, ref) => createElement(PanelWithForwardedRef, {
  ...props,
  forwardedRef: ref
}));
PanelWithForwardedRef.displayName = "Panel";
Panel.displayName = "forwardRef(Panel)";
function isKeyDown(event) {
  return event.type === "keydown";
}
function isPointerEvent(event) {
  return event.type.startsWith("pointer");
}
function isMouseEvent(event) {
  return event.type.startsWith("mouse");
}
function getResizeEventCoordinates(event) {
  if (isPointerEvent(event)) {
    if (event.isPrimary) {
      return {
        x: event.clientX,
        y: event.clientY
      };
    }
  } else if (isMouseEvent(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  return {
    x: Infinity,
    y: Infinity
  };
}
function getInputType() {
  if (typeof matchMedia === "function") {
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
  }
}
const EXCEEDED_HORIZONTAL_MIN = 1;
const EXCEEDED_HORIZONTAL_MAX = 2;
const EXCEEDED_VERTICAL_MIN = 4;
const EXCEEDED_VERTICAL_MAX = 8;
getInputType() === "coarse";
let panelConstraintFlags = /* @__PURE__ */ new Map();
function reportConstraintsViolation(resizeHandleId, flag) {
  panelConstraintFlags.set(resizeHandleId, flag);
}
function assert(expectedCondition, message) {
  if (!expectedCondition) {
    console.error(message);
    throw Error(message);
  }
}
const PRECISION = 10;
function fuzzyCompareNumbers(actual, expected, fractionDigits = PRECISION) {
  if (actual.toFixed(fractionDigits) === expected.toFixed(fractionDigits)) {
    return 0;
  } else {
    return actual > expected ? 1 : -1;
  }
}
function fuzzyNumbersEqual$1(actual, expected, fractionDigits = PRECISION) {
  return fuzzyCompareNumbers(actual, expected, fractionDigits) === 0;
}
function fuzzyNumbersEqual(actual, expected, fractionDigits) {
  return fuzzyCompareNumbers(actual, expected, fractionDigits) === 0;
}
function fuzzyLayoutsEqual(actual, expected, fractionDigits) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let index2 = 0; index2 < actual.length; index2++) {
    const actualSize = actual[index2];
    const expectedSize = expected[index2];
    if (!fuzzyNumbersEqual(actualSize, expectedSize, fractionDigits)) {
      return false;
    }
  }
  return true;
}
function resizePanel({
  panelConstraints: panelConstraintsArray,
  panelIndex,
  size: size2
}) {
  const panelConstraints = panelConstraintsArray[panelIndex];
  assert(panelConstraints != null, `Panel constraints not found for index ${panelIndex}`);
  let {
    collapsedSize = 0,
    collapsible,
    maxSize = 100,
    minSize = 0
  } = panelConstraints;
  if (fuzzyCompareNumbers(size2, minSize) < 0) {
    if (collapsible) {
      const halfwayPoint = (collapsedSize + minSize) / 2;
      if (fuzzyCompareNumbers(size2, halfwayPoint) < 0) {
        size2 = collapsedSize;
      } else {
        size2 = minSize;
      }
    } else {
      size2 = minSize;
    }
  }
  size2 = Math.min(maxSize, size2);
  size2 = parseFloat(size2.toFixed(PRECISION));
  return size2;
}
function adjustLayoutByDelta({
  delta,
  initialLayout,
  panelConstraints: panelConstraintsArray,
  pivotIndices,
  prevLayout,
  trigger
}) {
  if (fuzzyNumbersEqual(delta, 0)) {
    return initialLayout;
  }
  const nextLayout = [...initialLayout];
  const [firstPivotIndex, secondPivotIndex] = pivotIndices;
  assert(firstPivotIndex != null, "Invalid first pivot index");
  assert(secondPivotIndex != null, "Invalid second pivot index");
  let deltaApplied = 0;
  {
    if (trigger === "keyboard") {
      {
        const index2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
        const panelConstraints = panelConstraintsArray[index2];
        assert(panelConstraints, `Panel constraints not found for index ${index2}`);
        const {
          collapsedSize = 0,
          collapsible,
          minSize = 0
        } = panelConstraints;
        if (collapsible) {
          const prevSize = initialLayout[index2];
          assert(prevSize != null, `Previous layout not found for panel index ${index2}`);
          if (fuzzyNumbersEqual(prevSize, collapsedSize)) {
            const localDelta = minSize - prevSize;
            if (fuzzyCompareNumbers(localDelta, Math.abs(delta)) > 0) {
              delta = delta < 0 ? 0 - localDelta : localDelta;
            }
          }
        }
      }
      {
        const index2 = delta < 0 ? firstPivotIndex : secondPivotIndex;
        const panelConstraints = panelConstraintsArray[index2];
        assert(panelConstraints, `No panel constraints found for index ${index2}`);
        const {
          collapsedSize = 0,
          collapsible,
          minSize = 0
        } = panelConstraints;
        if (collapsible) {
          const prevSize = initialLayout[index2];
          assert(prevSize != null, `Previous layout not found for panel index ${index2}`);
          if (fuzzyNumbersEqual(prevSize, minSize)) {
            const localDelta = prevSize - collapsedSize;
            if (fuzzyCompareNumbers(localDelta, Math.abs(delta)) > 0) {
              delta = delta < 0 ? 0 - localDelta : localDelta;
            }
          }
        }
      }
    }
  }
  {
    const increment = delta < 0 ? 1 : -1;
    let index2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
    let maxAvailableDelta = 0;
    while (true) {
      const prevSize = initialLayout[index2];
      assert(prevSize != null, `Previous layout not found for panel index ${index2}`);
      const maxSafeSize = resizePanel({
        panelConstraints: panelConstraintsArray,
        panelIndex: index2,
        size: 100
      });
      const delta2 = maxSafeSize - prevSize;
      maxAvailableDelta += delta2;
      index2 += increment;
      if (index2 < 0 || index2 >= panelConstraintsArray.length) {
        break;
      }
    }
    const minAbsDelta = Math.min(Math.abs(delta), Math.abs(maxAvailableDelta));
    delta = delta < 0 ? 0 - minAbsDelta : minAbsDelta;
  }
  {
    const pivotIndex = delta < 0 ? firstPivotIndex : secondPivotIndex;
    let index2 = pivotIndex;
    while (index2 >= 0 && index2 < panelConstraintsArray.length) {
      const deltaRemaining = Math.abs(delta) - Math.abs(deltaApplied);
      const prevSize = initialLayout[index2];
      assert(prevSize != null, `Previous layout not found for panel index ${index2}`);
      const unsafeSize = prevSize - deltaRemaining;
      const safeSize = resizePanel({
        panelConstraints: panelConstraintsArray,
        panelIndex: index2,
        size: unsafeSize
      });
      if (!fuzzyNumbersEqual(prevSize, safeSize)) {
        deltaApplied += prevSize - safeSize;
        nextLayout[index2] = safeSize;
        if (deltaApplied.toPrecision(3).localeCompare(Math.abs(delta).toPrecision(3), void 0, {
          numeric: true
        }) >= 0) {
          break;
        }
      }
      if (delta < 0) {
        index2--;
      } else {
        index2++;
      }
    }
  }
  if (fuzzyLayoutsEqual(prevLayout, nextLayout)) {
    return prevLayout;
  }
  {
    const pivotIndex = delta < 0 ? secondPivotIndex : firstPivotIndex;
    const prevSize = initialLayout[pivotIndex];
    assert(prevSize != null, `Previous layout not found for panel index ${pivotIndex}`);
    const unsafeSize = prevSize + deltaApplied;
    const safeSize = resizePanel({
      panelConstraints: panelConstraintsArray,
      panelIndex: pivotIndex,
      size: unsafeSize
    });
    nextLayout[pivotIndex] = safeSize;
    if (!fuzzyNumbersEqual(safeSize, unsafeSize)) {
      let deltaRemaining = unsafeSize - safeSize;
      const pivotIndex2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
      let index2 = pivotIndex2;
      while (index2 >= 0 && index2 < panelConstraintsArray.length) {
        const prevSize2 = nextLayout[index2];
        assert(prevSize2 != null, `Previous layout not found for panel index ${index2}`);
        const unsafeSize2 = prevSize2 + deltaRemaining;
        const safeSize2 = resizePanel({
          panelConstraints: panelConstraintsArray,
          panelIndex: index2,
          size: unsafeSize2
        });
        if (!fuzzyNumbersEqual(prevSize2, safeSize2)) {
          deltaRemaining -= safeSize2 - prevSize2;
          nextLayout[index2] = safeSize2;
        }
        if (fuzzyNumbersEqual(deltaRemaining, 0)) {
          break;
        }
        if (delta > 0) {
          index2--;
        } else {
          index2++;
        }
      }
    }
  }
  const totalSize = nextLayout.reduce((total, size2) => size2 + total, 0);
  if (!fuzzyNumbersEqual(totalSize, 100)) {
    return prevLayout;
  }
  return nextLayout;
}
function getResizeHandleElementsForGroup(groupId, scope2 = document) {
  return Array.from(scope2.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${groupId}"]`));
}
function getResizeHandleElementIndex(groupId, id, scope2 = document) {
  const handles = getResizeHandleElementsForGroup(groupId, scope2);
  const index2 = handles.findIndex((handle) => handle.getAttribute("data-panel-resize-handle-id") === id);
  return index2 !== null && index2 !== void 0 ? index2 : null;
}
function determinePivotIndices(groupId, dragHandleId, panelGroupElement) {
  const index2 = getResizeHandleElementIndex(groupId, dragHandleId, panelGroupElement);
  return index2 != null ? [index2, index2 + 1] : [-1, -1];
}
function getPanelGroupElement(id, rootElement = document) {
  var _dataset;
  if (rootElement instanceof HTMLElement && (rootElement === null || rootElement === void 0 ? void 0 : (_dataset = rootElement.dataset) === null || _dataset === void 0 ? void 0 : _dataset.panelGroupId) == id) {
    return rootElement;
  }
  const element = rootElement.querySelector(`[data-panel-group][data-panel-group-id="${id}"]`);
  if (element) {
    return element;
  }
  return null;
}
function getResizeHandleElement(id, scope2 = document) {
  const element = scope2.querySelector(`[data-panel-resize-handle-id="${id}"]`);
  if (element) {
    return element;
  }
  return null;
}
function getResizeHandlePanelIds(groupId, handleId, panelsArray, scope2 = document) {
  var _panelsArray$index$id, _panelsArray$index, _panelsArray$id, _panelsArray;
  const handle = getResizeHandleElement(handleId, scope2);
  const handles = getResizeHandleElementsForGroup(groupId, scope2);
  const index2 = handle ? handles.indexOf(handle) : -1;
  const idBefore = (_panelsArray$index$id = (_panelsArray$index = panelsArray[index2]) === null || _panelsArray$index === void 0 ? void 0 : _panelsArray$index.id) !== null && _panelsArray$index$id !== void 0 ? _panelsArray$index$id : null;
  const idAfter = (_panelsArray$id = (_panelsArray = panelsArray[index2 + 1]) === null || _panelsArray === void 0 ? void 0 : _panelsArray.id) !== null && _panelsArray$id !== void 0 ? _panelsArray$id : null;
  return [idBefore, idAfter];
}
function useWindowSplitterPanelGroupBehavior({
  committedValuesRef,
  eagerValuesRef,
  groupId,
  layout,
  panelDataArray,
  panelGroupElement,
  setLayout
}) {
  useRef({
    didWarnAboutMissingResizeHandle: false
  });
  useEffect(() => {
    if (!panelGroupElement) {
      return;
    }
    const eagerValues = eagerValuesRef.current;
    assert(eagerValues, `Eager values not found`);
    const {
      panelDataArray: panelDataArray2
    } = eagerValues;
    const groupElement = getPanelGroupElement(groupId, panelGroupElement);
    assert(groupElement != null, `No group found for id "${groupId}"`);
    const handles = getResizeHandleElementsForGroup(groupId, panelGroupElement);
    assert(handles, `No resize handles found for group id "${groupId}"`);
    const cleanupFunctions = handles.map((handle) => {
      const handleId = handle.getAttribute("data-panel-resize-handle-id");
      assert(handleId, `Resize handle element has no handle id attribute`);
      const [idBefore, idAfter] = getResizeHandlePanelIds(groupId, handleId, panelDataArray2, panelGroupElement);
      if (idBefore == null || idAfter == null) {
        return () => {
        };
      }
      const onKeyDown = (event) => {
        if (event.defaultPrevented) {
          return;
        }
        switch (event.key) {
          case "Enter": {
            event.preventDefault();
            const index2 = panelDataArray2.findIndex((panelData) => panelData.id === idBefore);
            if (index2 >= 0) {
              const panelData = panelDataArray2[index2];
              assert(panelData, `No panel data found for index ${index2}`);
              const size2 = layout[index2];
              const {
                collapsedSize = 0,
                collapsible,
                minSize = 0
              } = panelData.constraints;
              if (size2 != null && collapsible) {
                const nextLayout = adjustLayoutByDelta({
                  delta: fuzzyNumbersEqual(size2, collapsedSize) ? minSize - collapsedSize : collapsedSize - size2,
                  initialLayout: layout,
                  panelConstraints: panelDataArray2.map((panelData2) => panelData2.constraints),
                  pivotIndices: determinePivotIndices(groupId, handleId, panelGroupElement),
                  prevLayout: layout,
                  trigger: "keyboard"
                });
                if (layout !== nextLayout) {
                  setLayout(nextLayout);
                }
              }
            }
            break;
          }
        }
      };
      handle.addEventListener("keydown", onKeyDown);
      return () => {
        handle.removeEventListener("keydown", onKeyDown);
      };
    });
    return () => {
      cleanupFunctions.forEach((cleanupFunction) => cleanupFunction());
    };
  }, [panelGroupElement, committedValuesRef, eagerValuesRef, groupId, layout, panelDataArray, setLayout]);
}
function areEqual(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let index2 = 0; index2 < arrayA.length; index2++) {
    if (arrayA[index2] !== arrayB[index2]) {
      return false;
    }
  }
  return true;
}
function getResizeEventCursorPosition(direction, event) {
  const isHorizontal = direction === "horizontal";
  const {
    x,
    y
  } = getResizeEventCoordinates(event);
  return isHorizontal ? x : y;
}
function calculateDragOffsetPercentage(event, dragHandleId, direction, initialDragState, panelGroupElement) {
  const isHorizontal = direction === "horizontal";
  const handleElement = getResizeHandleElement(dragHandleId, panelGroupElement);
  assert(handleElement, `No resize handle element found for id "${dragHandleId}"`);
  const groupId = handleElement.getAttribute("data-panel-group-id");
  assert(groupId, `Resize handle element has no group id attribute`);
  let {
    initialCursorPosition
  } = initialDragState;
  const cursorPosition = getResizeEventCursorPosition(direction, event);
  const groupElement = getPanelGroupElement(groupId, panelGroupElement);
  assert(groupElement, `No group element found for id "${groupId}"`);
  const groupRect = groupElement.getBoundingClientRect();
  const groupSizeInPixels = isHorizontal ? groupRect.width : groupRect.height;
  const offsetPixels = cursorPosition - initialCursorPosition;
  const offsetPercentage = offsetPixels / groupSizeInPixels * 100;
  return offsetPercentage;
}
function calculateDeltaPercentage(event, dragHandleId, direction, initialDragState, keyboardResizeBy, panelGroupElement) {
  if (isKeyDown(event)) {
    const isHorizontal = direction === "horizontal";
    let delta = 0;
    if (event.shiftKey) {
      delta = 100;
    } else if (keyboardResizeBy != null) {
      delta = keyboardResizeBy;
    } else {
      delta = 10;
    }
    let movement = 0;
    switch (event.key) {
      case "ArrowDown":
        movement = isHorizontal ? 0 : delta;
        break;
      case "ArrowLeft":
        movement = isHorizontal ? -delta : 0;
        break;
      case "ArrowRight":
        movement = isHorizontal ? delta : 0;
        break;
      case "ArrowUp":
        movement = isHorizontal ? 0 : -delta;
        break;
      case "End":
        movement = 100;
        break;
      case "Home":
        movement = -100;
        break;
    }
    return movement;
  } else {
    if (initialDragState == null) {
      return 0;
    }
    return calculateDragOffsetPercentage(event, dragHandleId, direction, initialDragState, panelGroupElement);
  }
}
function callPanelCallbacks(panelsArray, layout, panelIdToLastNotifiedSizeMap) {
  layout.forEach((size2, index2) => {
    const panelData = panelsArray[index2];
    assert(panelData, `Panel data not found for index ${index2}`);
    const {
      callbacks,
      constraints,
      id: panelId
    } = panelData;
    const {
      collapsedSize = 0,
      collapsible
    } = constraints;
    const lastNotifiedSize = panelIdToLastNotifiedSizeMap[panelId];
    if (lastNotifiedSize == null || size2 !== lastNotifiedSize) {
      panelIdToLastNotifiedSizeMap[panelId] = size2;
      const {
        onCollapse,
        onExpand,
        onResize
      } = callbacks;
      if (onResize) {
        onResize(size2, lastNotifiedSize);
      }
      if (collapsible && (onCollapse || onExpand)) {
        if (onExpand && (lastNotifiedSize == null || fuzzyNumbersEqual$1(lastNotifiedSize, collapsedSize)) && !fuzzyNumbersEqual$1(size2, collapsedSize)) {
          onExpand();
        }
        if (onCollapse && (lastNotifiedSize == null || !fuzzyNumbersEqual$1(lastNotifiedSize, collapsedSize)) && fuzzyNumbersEqual$1(size2, collapsedSize)) {
          onCollapse();
        }
      }
    }
  });
}
function compareLayouts(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let index2 = 0; index2 < a.length; index2++) {
      if (a[index2] != b[index2]) {
        return false;
      }
    }
  }
  return true;
}
function computePanelFlexBoxStyle({
  defaultSize,
  dragState,
  layout,
  panelData,
  panelIndex,
  precision = 3
}) {
  const size2 = layout[panelIndex];
  let flexGrow;
  if (size2 == null) {
    flexGrow = defaultSize != void 0 ? defaultSize.toPrecision(precision) : "1";
  } else if (panelData.length === 1) {
    flexGrow = "1";
  } else {
    flexGrow = size2.toPrecision(precision);
  }
  return {
    flexBasis: 0,
    flexGrow,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: dragState !== null ? "none" : void 0
  };
}
function debounce(callback, durationMs = 10) {
  let timeoutId = null;
  let callable = (...args) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, durationMs);
  };
  return callable;
}
function initializeDefaultStorage(storageObject) {
  try {
    if (typeof localStorage !== "undefined") {
      storageObject.getItem = (name) => {
        return localStorage.getItem(name);
      };
      storageObject.setItem = (name, value) => {
        localStorage.setItem(name, value);
      };
    } else {
      throw new Error("localStorage not supported in this environment");
    }
  } catch (error) {
    console.error(error);
    storageObject.getItem = () => null;
    storageObject.setItem = () => {
    };
  }
}
function getPanelGroupKey(autoSaveId) {
  return `react-resizable-panels:${autoSaveId}`;
}
function getPanelKey(panels) {
  return panels.map((panel) => {
    const {
      constraints,
      id,
      idIsFromProps,
      order
    } = panel;
    if (idIsFromProps) {
      return id;
    } else {
      return order ? `${order}:${JSON.stringify(constraints)}` : JSON.stringify(constraints);
    }
  }).sort((a, b) => a.localeCompare(b)).join(",");
}
function loadSerializedPanelGroupState(autoSaveId, storage) {
  try {
    const panelGroupKey = getPanelGroupKey(autoSaveId);
    const serialized = storage.getItem(panelGroupKey);
    if (serialized) {
      const parsed = JSON.parse(serialized);
      if (typeof parsed === "object" && parsed != null) {
        return parsed;
      }
    }
  } catch (error) {
  }
  return null;
}
function savePanelGroupState(autoSaveId, panels, panelSizesBeforeCollapse, sizes, storage) {
  var _loadSerializedPanelG2;
  const panelGroupKey = getPanelGroupKey(autoSaveId);
  const panelKey = getPanelKey(panels);
  const state = (_loadSerializedPanelG2 = loadSerializedPanelGroupState(autoSaveId, storage)) !== null && _loadSerializedPanelG2 !== void 0 ? _loadSerializedPanelG2 : {};
  state[panelKey] = {
    expandToSizes: Object.fromEntries(panelSizesBeforeCollapse.entries()),
    layout: sizes
  };
  try {
    storage.setItem(panelGroupKey, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
}
function validatePanelGroupLayout({
  layout: prevLayout,
  panelConstraints
}) {
  const nextLayout = [...prevLayout];
  const nextLayoutTotalSize = nextLayout.reduce((accumulated, current) => accumulated + current, 0);
  if (nextLayout.length !== panelConstraints.length) {
    throw Error(`Invalid ${panelConstraints.length} panel layout: ${nextLayout.map((size2) => `${size2}%`).join(", ")}`);
  } else if (!fuzzyNumbersEqual(nextLayoutTotalSize, 100)) {
    for (let index2 = 0; index2 < panelConstraints.length; index2++) {
      const unsafeSize = nextLayout[index2];
      assert(unsafeSize != null, `No layout data found for index ${index2}`);
      const safeSize = 100 / nextLayoutTotalSize * unsafeSize;
      nextLayout[index2] = safeSize;
    }
  }
  let remainingSize = 0;
  for (let index2 = 0; index2 < panelConstraints.length; index2++) {
    const unsafeSize = nextLayout[index2];
    assert(unsafeSize != null, `No layout data found for index ${index2}`);
    const safeSize = resizePanel({
      panelConstraints,
      panelIndex: index2,
      size: unsafeSize
    });
    if (unsafeSize != safeSize) {
      remainingSize += unsafeSize - safeSize;
      nextLayout[index2] = safeSize;
    }
  }
  if (!fuzzyNumbersEqual(remainingSize, 0)) {
    for (let index2 = 0; index2 < panelConstraints.length; index2++) {
      const prevSize = nextLayout[index2];
      assert(prevSize != null, `No layout data found for index ${index2}`);
      const unsafeSize = prevSize + remainingSize;
      const safeSize = resizePanel({
        panelConstraints,
        panelIndex: index2,
        size: unsafeSize
      });
      if (prevSize !== safeSize) {
        remainingSize -= safeSize - prevSize;
        nextLayout[index2] = safeSize;
        if (fuzzyNumbersEqual(remainingSize, 0)) {
          break;
        }
      }
    }
  }
  return nextLayout;
}
const LOCAL_STORAGE_DEBOUNCE_INTERVAL = 100;
const defaultStorage = {
  getItem: (name) => {
    initializeDefaultStorage(defaultStorage);
    return defaultStorage.getItem(name);
  },
  setItem: (name, value) => {
    initializeDefaultStorage(defaultStorage);
    defaultStorage.setItem(name, value);
  }
};
const debounceMap = {};
function PanelGroupWithForwardedRef({
  autoSaveId = null,
  children,
  className: classNameFromProps = "",
  direction,
  forwardedRef,
  id: idFromProps = null,
  onLayout = null,
  keyboardResizeBy = null,
  storage = defaultStorage,
  style: styleFromProps,
  tagName: Type = "div",
  ...rest
}) {
  const groupId = useUniqueId(idFromProps);
  const panelGroupElementRef = useRef(null);
  const [dragState, setDragState] = useState(null);
  const [layout, setLayout] = useState([]);
  const panelIdToLastNotifiedSizeMapRef = useRef({});
  const panelSizeBeforeCollapseRef = useRef(/* @__PURE__ */ new Map());
  const prevDeltaRef = useRef(0);
  const committedValuesRef = useRef({
    autoSaveId,
    direction,
    dragState,
    id: groupId,
    keyboardResizeBy,
    onLayout,
    storage
  });
  const eagerValuesRef = useRef({
    layout,
    panelDataArray: [],
    panelDataArrayChanged: false
  });
  useRef({
    didLogIdAndOrderWarning: false,
    didLogPanelConstraintsWarning: false,
    prevPanelIds: []
  });
  useImperativeHandle(forwardedRef, () => ({
    getId: () => committedValuesRef.current.id,
    getLayout: () => {
      const {
        layout: layout2
      } = eagerValuesRef.current;
      return layout2;
    },
    setLayout: (unsafeLayout) => {
      const {
        onLayout: onLayout2
      } = committedValuesRef.current;
      const {
        layout: prevLayout,
        panelDataArray
      } = eagerValuesRef.current;
      const safeLayout = validatePanelGroupLayout({
        layout: unsafeLayout,
        panelConstraints: panelDataArray.map((panelData) => panelData.constraints)
      });
      if (!areEqual(prevLayout, safeLayout)) {
        setLayout(safeLayout);
        eagerValuesRef.current.layout = safeLayout;
        if (onLayout2) {
          onLayout2(safeLayout);
        }
        callPanelCallbacks(panelDataArray, safeLayout, panelIdToLastNotifiedSizeMapRef.current);
      }
    }
  }), []);
  useWindowSplitterPanelGroupBehavior({
    committedValuesRef,
    eagerValuesRef,
    groupId,
    layout,
    panelDataArray: eagerValuesRef.current.panelDataArray,
    setLayout,
    panelGroupElement: panelGroupElementRef.current
  });
  useEffect(() => {
    const {
      panelDataArray
    } = eagerValuesRef.current;
    if (autoSaveId) {
      if (layout.length === 0 || layout.length !== panelDataArray.length) {
        return;
      }
      let debouncedSave = debounceMap[autoSaveId];
      if (debouncedSave == null) {
        debouncedSave = debounce(savePanelGroupState, LOCAL_STORAGE_DEBOUNCE_INTERVAL);
        debounceMap[autoSaveId] = debouncedSave;
      }
      const clonedPanelDataArray = [...panelDataArray];
      const clonedPanelSizesBeforeCollapse = new Map(panelSizeBeforeCollapseRef.current);
      debouncedSave(autoSaveId, clonedPanelDataArray, clonedPanelSizesBeforeCollapse, layout, storage);
    }
  }, [autoSaveId, layout, storage]);
  useEffect(() => {
  });
  const collapsePanel = useCallback((panelData) => {
    const {
      onLayout: onLayout2
    } = committedValuesRef.current;
    const {
      layout: prevLayout,
      panelDataArray
    } = eagerValuesRef.current;
    if (panelData.constraints.collapsible) {
      const panelConstraintsArray = panelDataArray.map((panelData2) => panelData2.constraints);
      const {
        collapsedSize = 0,
        panelSize,
        pivotIndices
      } = panelDataHelper(panelDataArray, panelData, prevLayout);
      assert(panelSize != null, `Panel size not found for panel "${panelData.id}"`);
      if (!fuzzyNumbersEqual$1(panelSize, collapsedSize)) {
        panelSizeBeforeCollapseRef.current.set(panelData.id, panelSize);
        const isLastPanel = findPanelDataIndex(panelDataArray, panelData) === panelDataArray.length - 1;
        const delta = isLastPanel ? panelSize - collapsedSize : collapsedSize - panelSize;
        const nextLayout = adjustLayoutByDelta({
          delta,
          initialLayout: prevLayout,
          panelConstraints: panelConstraintsArray,
          pivotIndices,
          prevLayout,
          trigger: "imperative-api"
        });
        if (!compareLayouts(prevLayout, nextLayout)) {
          setLayout(nextLayout);
          eagerValuesRef.current.layout = nextLayout;
          if (onLayout2) {
            onLayout2(nextLayout);
          }
          callPanelCallbacks(panelDataArray, nextLayout, panelIdToLastNotifiedSizeMapRef.current);
        }
      }
    }
  }, []);
  const expandPanel = useCallback((panelData, minSizeOverride) => {
    const {
      onLayout: onLayout2
    } = committedValuesRef.current;
    const {
      layout: prevLayout,
      panelDataArray
    } = eagerValuesRef.current;
    if (panelData.constraints.collapsible) {
      const panelConstraintsArray = panelDataArray.map((panelData2) => panelData2.constraints);
      const {
        collapsedSize = 0,
        panelSize = 0,
        minSize: minSizeFromProps = 0,
        pivotIndices
      } = panelDataHelper(panelDataArray, panelData, prevLayout);
      const minSize = minSizeOverride !== null && minSizeOverride !== void 0 ? minSizeOverride : minSizeFromProps;
      if (fuzzyNumbersEqual$1(panelSize, collapsedSize)) {
        const prevPanelSize = panelSizeBeforeCollapseRef.current.get(panelData.id);
        const baseSize = prevPanelSize != null && prevPanelSize >= minSize ? prevPanelSize : minSize;
        const isLastPanel = findPanelDataIndex(panelDataArray, panelData) === panelDataArray.length - 1;
        const delta = isLastPanel ? panelSize - baseSize : baseSize - panelSize;
        const nextLayout = adjustLayoutByDelta({
          delta,
          initialLayout: prevLayout,
          panelConstraints: panelConstraintsArray,
          pivotIndices,
          prevLayout,
          trigger: "imperative-api"
        });
        if (!compareLayouts(prevLayout, nextLayout)) {
          setLayout(nextLayout);
          eagerValuesRef.current.layout = nextLayout;
          if (onLayout2) {
            onLayout2(nextLayout);
          }
          callPanelCallbacks(panelDataArray, nextLayout, panelIdToLastNotifiedSizeMapRef.current);
        }
      }
    }
  }, []);
  const getPanelSize = useCallback((panelData) => {
    const {
      layout: layout2,
      panelDataArray
    } = eagerValuesRef.current;
    const {
      panelSize
    } = panelDataHelper(panelDataArray, panelData, layout2);
    assert(panelSize != null, `Panel size not found for panel "${panelData.id}"`);
    return panelSize;
  }, []);
  const getPanelStyle = useCallback((panelData, defaultSize) => {
    const {
      panelDataArray
    } = eagerValuesRef.current;
    const panelIndex = findPanelDataIndex(panelDataArray, panelData);
    return computePanelFlexBoxStyle({
      defaultSize,
      dragState,
      layout,
      panelData: panelDataArray,
      panelIndex
    });
  }, [dragState, layout]);
  const isPanelCollapsed = useCallback((panelData) => {
    const {
      layout: layout2,
      panelDataArray
    } = eagerValuesRef.current;
    const {
      collapsedSize = 0,
      collapsible,
      panelSize
    } = panelDataHelper(panelDataArray, panelData, layout2);
    assert(panelSize != null, `Panel size not found for panel "${panelData.id}"`);
    return collapsible === true && fuzzyNumbersEqual$1(panelSize, collapsedSize);
  }, []);
  const isPanelExpanded = useCallback((panelData) => {
    const {
      layout: layout2,
      panelDataArray
    } = eagerValuesRef.current;
    const {
      collapsedSize = 0,
      collapsible,
      panelSize
    } = panelDataHelper(panelDataArray, panelData, layout2);
    assert(panelSize != null, `Panel size not found for panel "${panelData.id}"`);
    return !collapsible || fuzzyCompareNumbers(panelSize, collapsedSize) > 0;
  }, []);
  const registerPanel = useCallback((panelData) => {
    const {
      panelDataArray
    } = eagerValuesRef.current;
    panelDataArray.push(panelData);
    panelDataArray.sort((panelA, panelB) => {
      const orderA = panelA.order;
      const orderB = panelB.order;
      if (orderA == null && orderB == null) {
        return 0;
      } else if (orderA == null) {
        return -1;
      } else if (orderB == null) {
        return 1;
      } else {
        return orderA - orderB;
      }
    });
    eagerValuesRef.current.panelDataArrayChanged = true;
  }, []);
  const registerResizeHandle = useCallback((dragHandleId) => {
    return function resizeHandler(event) {
      event.preventDefault();
      const panelGroupElement = panelGroupElementRef.current;
      if (!panelGroupElement) {
        return () => null;
      }
      const {
        direction: direction2,
        dragState: dragState2,
        id: groupId2,
        keyboardResizeBy: keyboardResizeBy2,
        onLayout: onLayout2
      } = committedValuesRef.current;
      const {
        layout: prevLayout,
        panelDataArray
      } = eagerValuesRef.current;
      const {
        initialLayout
      } = dragState2 !== null && dragState2 !== void 0 ? dragState2 : {};
      const pivotIndices = determinePivotIndices(groupId2, dragHandleId, panelGroupElement);
      let delta = calculateDeltaPercentage(event, dragHandleId, direction2, dragState2, keyboardResizeBy2, panelGroupElement);
      if (delta === 0) {
        return;
      }
      const isHorizontal = direction2 === "horizontal";
      if (document.dir === "rtl" && isHorizontal) {
        delta = -delta;
      }
      const panelConstraints = panelDataArray.map((panelData) => panelData.constraints);
      const nextLayout = adjustLayoutByDelta({
        delta,
        initialLayout: initialLayout !== null && initialLayout !== void 0 ? initialLayout : prevLayout,
        panelConstraints,
        pivotIndices,
        prevLayout,
        trigger: isKeyDown(event) ? "keyboard" : "mouse-or-touch"
      });
      const layoutChanged = !compareLayouts(prevLayout, nextLayout);
      if (isPointerEvent(event) || isMouseEvent(event)) {
        if (prevDeltaRef.current != delta) {
          prevDeltaRef.current = delta;
          if (!layoutChanged) {
            if (isHorizontal) {
              reportConstraintsViolation(dragHandleId, delta < 0 ? EXCEEDED_HORIZONTAL_MIN : EXCEEDED_HORIZONTAL_MAX);
            } else {
              reportConstraintsViolation(dragHandleId, delta < 0 ? EXCEEDED_VERTICAL_MIN : EXCEEDED_VERTICAL_MAX);
            }
          } else {
            reportConstraintsViolation(dragHandleId, 0);
          }
        }
      }
      if (layoutChanged) {
        setLayout(nextLayout);
        eagerValuesRef.current.layout = nextLayout;
        if (onLayout2) {
          onLayout2(nextLayout);
        }
        callPanelCallbacks(panelDataArray, nextLayout, panelIdToLastNotifiedSizeMapRef.current);
      }
    };
  }, []);
  const resizePanel2 = useCallback((panelData, unsafePanelSize) => {
    const {
      onLayout: onLayout2
    } = committedValuesRef.current;
    const {
      layout: prevLayout,
      panelDataArray
    } = eagerValuesRef.current;
    const panelConstraintsArray = panelDataArray.map((panelData2) => panelData2.constraints);
    const {
      panelSize,
      pivotIndices
    } = panelDataHelper(panelDataArray, panelData, prevLayout);
    assert(panelSize != null, `Panel size not found for panel "${panelData.id}"`);
    const isLastPanel = findPanelDataIndex(panelDataArray, panelData) === panelDataArray.length - 1;
    const delta = isLastPanel ? panelSize - unsafePanelSize : unsafePanelSize - panelSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      initialLayout: prevLayout,
      panelConstraints: panelConstraintsArray,
      pivotIndices,
      prevLayout,
      trigger: "imperative-api"
    });
    if (!compareLayouts(prevLayout, nextLayout)) {
      setLayout(nextLayout);
      eagerValuesRef.current.layout = nextLayout;
      if (onLayout2) {
        onLayout2(nextLayout);
      }
      callPanelCallbacks(panelDataArray, nextLayout, panelIdToLastNotifiedSizeMapRef.current);
    }
  }, []);
  const reevaluatePanelConstraints = useCallback((panelData, prevConstraints) => {
    const {
      layout: layout2,
      panelDataArray
    } = eagerValuesRef.current;
    const {
      collapsedSize: prevCollapsedSize = 0,
      collapsible: prevCollapsible
    } = prevConstraints;
    const {
      collapsedSize: nextCollapsedSize = 0,
      collapsible: nextCollapsible,
      maxSize: nextMaxSize = 100,
      minSize: nextMinSize = 0
    } = panelData.constraints;
    const {
      panelSize: prevPanelSize
    } = panelDataHelper(panelDataArray, panelData, layout2);
    if (prevPanelSize == null) {
      return;
    }
    if (prevCollapsible && nextCollapsible && fuzzyNumbersEqual$1(prevPanelSize, prevCollapsedSize)) {
      if (!fuzzyNumbersEqual$1(prevCollapsedSize, nextCollapsedSize)) {
        resizePanel2(panelData, nextCollapsedSize);
      }
    } else if (prevPanelSize < nextMinSize) {
      resizePanel2(panelData, nextMinSize);
    } else if (prevPanelSize > nextMaxSize) {
      resizePanel2(panelData, nextMaxSize);
    }
  }, [resizePanel2]);
  const startDragging = useCallback((dragHandleId, event) => {
    const {
      direction: direction2
    } = committedValuesRef.current;
    const {
      layout: layout2
    } = eagerValuesRef.current;
    if (!panelGroupElementRef.current) {
      return;
    }
    const handleElement = getResizeHandleElement(dragHandleId, panelGroupElementRef.current);
    assert(handleElement, `Drag handle element not found for id "${dragHandleId}"`);
    const initialCursorPosition = getResizeEventCursorPosition(direction2, event);
    setDragState({
      dragHandleId,
      dragHandleRect: handleElement.getBoundingClientRect(),
      initialCursorPosition,
      initialLayout: layout2
    });
  }, []);
  const stopDragging = useCallback(() => {
    setDragState(null);
  }, []);
  const unregisterPanel = useCallback((panelData) => {
    const {
      panelDataArray
    } = eagerValuesRef.current;
    const index2 = findPanelDataIndex(panelDataArray, panelData);
    if (index2 >= 0) {
      panelDataArray.splice(index2, 1);
      delete panelIdToLastNotifiedSizeMapRef.current[panelData.id];
      eagerValuesRef.current.panelDataArrayChanged = true;
    }
  }, []);
  const context = useMemo(() => ({
    collapsePanel,
    direction,
    dragState,
    expandPanel,
    getPanelSize,
    getPanelStyle,
    groupId,
    isPanelCollapsed,
    isPanelExpanded,
    reevaluatePanelConstraints,
    registerPanel,
    registerResizeHandle,
    resizePanel: resizePanel2,
    startDragging,
    stopDragging,
    unregisterPanel,
    panelGroupElement: panelGroupElementRef.current
  }), [collapsePanel, dragState, direction, expandPanel, getPanelSize, getPanelStyle, groupId, isPanelCollapsed, isPanelExpanded, reevaluatePanelConstraints, registerPanel, registerResizeHandle, resizePanel2, startDragging, stopDragging, unregisterPanel]);
  const style = {
    display: "flex",
    flexDirection: direction === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return createElement(PanelGroupContext.Provider, {
    value: context
  }, createElement(Type, {
    ...rest,
    children,
    className: classNameFromProps,
    id: idFromProps,
    ref: panelGroupElementRef,
    style: {
      ...style,
      ...styleFromProps
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": direction,
    "data-panel-group-id": groupId
  }));
}
const PanelGroup = forwardRef((props, ref) => createElement(PanelGroupWithForwardedRef, {
  ...props,
  forwardedRef: ref
}));
PanelGroupWithForwardedRef.displayName = "PanelGroup";
PanelGroup.displayName = "forwardRef(PanelGroup)";
function findPanelDataIndex(panelDataArray, panelData) {
  return panelDataArray.findIndex((prevPanelData) => prevPanelData === panelData || prevPanelData.id === panelData.id);
}
function panelDataHelper(panelDataArray, panelData, layout) {
  const panelIndex = findPanelDataIndex(panelDataArray, panelData);
  const isLastPanel = panelIndex === panelDataArray.length - 1;
  const pivotIndices = isLastPanel ? [panelIndex - 1, panelIndex] : [panelIndex, panelIndex + 1];
  const panelSize = layout[panelIndex];
  return {
    ...panelData.constraints,
    panelSize,
    pivotIndices
  };
}
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}
const $cc7e05a45900e73f$var$OPEN_KEYS = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
];
const $cc7e05a45900e73f$var$SELECTION_KEYS = [
  " ",
  "Enter"
];
const $cc7e05a45900e73f$var$SELECT_NAME = "Select";
const [$cc7e05a45900e73f$var$Collection, $cc7e05a45900e73f$var$useCollection, $cc7e05a45900e73f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($cc7e05a45900e73f$var$SELECT_NAME);
const [$cc7e05a45900e73f$var$createSelectContext, $cc7e05a45900e73f$export$286727a75dc039bd] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cc7e05a45900e73f$var$SELECT_NAME, [
  $cc7e05a45900e73f$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $cc7e05a45900e73f$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const [$cc7e05a45900e73f$var$SelectProvider, $cc7e05a45900e73f$var$useSelectContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
const [$cc7e05a45900e73f$var$SelectNativeOptionsProvider, $cc7e05a45900e73f$var$useSelectNativeOptionsContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
const $cc7e05a45900e73f$var$TRIGGER_NAME = "SelectTrigger";
const $cc7e05a45900e73f$export$3ac1e88a1c0b9f1 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, disabled = false, ...triggerProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$TRIGGER_NAME, __scopeSelect);
  const isDisabled = context.disabled || disabled;
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onTriggerChange);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const [searchRef, handleTypeaheadSearch, resetTypeahead] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = enabledItems.find(
      (item) => item.value === context.value
    );
    const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
    if (nextItem !== void 0)
      context.onValueChange(nextItem.value);
  });
  const handleOpen = () => {
    if (!isDisabled) {
      context.onOpenChange(true);
      resetTypeahead();
    }
  };
  return /* @__PURE__ */ createElement$1($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends$2({
    asChild: true
  }, popperScope), /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$2({
    type: "button",
    role: "combobox",
    "aria-controls": context.contentId,
    "aria-expanded": context.open,
    "aria-required": context.required,
    "aria-autocomplete": "none",
    dir: context.dir,
    "data-state": context.open ? "open" : "closed",
    disabled: isDisabled,
    "data-disabled": isDisabled ? "" : void 0,
    "data-placeholder": $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? "" : void 0
  }, triggerProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onClick, (event) => {
      event.currentTarget.focus();
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onPointerDown, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId))
        target.releasePointerCapture(event.pointerId);
      if (event.button === 0 && event.ctrlKey === false) {
        handleOpen();
        context.triggerPointerDownPosRef.current = {
          x: Math.round(event.pageX),
          y: Math.round(event.pageY)
        };
        event.preventDefault();
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onKeyDown, (event) => {
      const isTypingAhead = searchRef.current !== "";
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if (isTypingAhead && event.key === " ")
        return;
      if ($cc7e05a45900e73f$var$OPEN_KEYS.includes(event.key)) {
        handleOpen();
        event.preventDefault();
      }
    })
  })));
});
const $cc7e05a45900e73f$export$99b400cabb58c515 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, children, ...iconProps } = props;
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({
    "aria-hidden": true
  }, iconProps, {
    ref: forwardedRef
  }), children || "▼");
});
const $cc7e05a45900e73f$export$b2af6c9944296213 = (props) => {
  return /* @__PURE__ */ createElement$1($f1701beae083dbae$export$602eac185826482c, _extends$2({
    asChild: true
  }, props));
};
const $cc7e05a45900e73f$var$CONTENT_NAME = "SelectContent";
const $cc7e05a45900e73f$export$c973a4b3cb86a03d = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, props.__scopeSelect);
  const [fragment, setFragment] = useState$1();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    setFragment(new DocumentFragment());
  }, []);
  if (!context.open) {
    const frag = fragment;
    return frag ? /* @__PURE__ */ createPortal(/* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$SelectContentProvider, {
      scope: props.__scopeSelect
    }, /* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$Collection.Slot, {
      scope: props.__scopeSelect
    }, /* @__PURE__ */ createElement$1("div", null, props.children))), frag) : null;
  }
  return /* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$SelectContentImpl, _extends$2({}, props, {
    ref: forwardedRef
  }));
});
const $cc7e05a45900e73f$var$CONTENT_MARGIN = 10;
const [$cc7e05a45900e73f$var$SelectContentProvider, $cc7e05a45900e73f$var$useSelectContentContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME);
const $cc7e05a45900e73f$var$SelectContentImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const {
    __scopeSelect,
    position: position2 = "item-aligned",
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions,
    //
    ...contentProps
  } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [content, setContent] = useState$1(null);
  const [viewport, setViewport] = useState$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node2) => setContent(node2)
  );
  const [selectedItem, setSelectedItem] = useState$1(null);
  const [selectedItemText, setSelectedItemText] = useState$1(null);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const [isPositioned, setIsPositioned] = useState$1(false);
  const firstValidItemFoundRef = useRef$1(false);
  useEffect$1(() => {
    if (content)
      return hideOthers(content);
  }, [
    content
  ]);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const focusFirst2 = useCallback$1((candidates) => {
    const [firstItem, ...restItems] = getItems().map(
      (item) => item.ref.current
    );
    const [lastItem] = restItems.slice(-1);
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
        return;
      candidate === null || candidate === void 0 || candidate.scrollIntoView({
        block: "nearest"
      });
      if (candidate === firstItem && viewport)
        viewport.scrollTop = 0;
      if (candidate === lastItem && viewport)
        viewport.scrollTop = viewport.scrollHeight;
      candidate === null || candidate === void 0 || candidate.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
        return;
    }
  }, [
    getItems,
    viewport
  ]);
  const focusSelectedItem = useCallback$1(
    () => focusFirst2([
      selectedItem,
      content
    ]),
    [
      focusFirst2,
      selectedItem,
      content
    ]
  );
  useEffect$1(() => {
    if (isPositioned)
      focusSelectedItem();
  }, [
    isPositioned,
    focusSelectedItem
  ]);
  const { onOpenChange, triggerPointerDownPosRef } = context;
  useEffect$1(() => {
    if (content) {
      let pointerMoveDelta = {
        x: 0,
        y: 0
      };
      const handlePointerMove = (event) => {
        var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
          y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
        };
      };
      const handlePointerUp = (event) => {
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10)
          event.preventDefault();
        else if (!content.contains(event.target))
          onOpenChange(false);
        document.removeEventListener("pointermove", handlePointerMove);
        triggerPointerDownPosRef.current = null;
      };
      if (triggerPointerDownPosRef.current !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp, {
          capture: true,
          once: true
        });
      }
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp, {
          capture: true
        });
      };
    }
  }, [
    content,
    onOpenChange,
    triggerPointerDownPosRef
  ]);
  useEffect$1(() => {
    const close = () => onOpenChange(false);
    window.addEventListener("blur", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("blur", close);
      window.removeEventListener("resize", close);
    };
  }, [
    onOpenChange
  ]);
  const [searchRef, handleTypeaheadSearch] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = enabledItems.find(
      (item) => item.ref.current === document.activeElement
    );
    const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
    if (nextItem)
      setTimeout(
        () => nextItem.ref.current.focus()
      );
  });
  const itemRefCallback = useCallback$1((node2, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItem(node2);
      if (isFirstValidItem)
        firstValidItemFoundRef.current = true;
    }
  }, [
    context.value
  ]);
  const handleItemLeave = useCallback$1(
    () => content === null || content === void 0 ? void 0 : content.focus(),
    [
      content
    ]
  );
  const itemTextRefCallback = useCallback$1((node2, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem)
      setSelectedItemText(node2);
  }, [
    context.value
  ]);
  const SelectPosition = position2 === "popper" ? $cc7e05a45900e73f$var$SelectPopperPosition : $cc7e05a45900e73f$var$SelectItemAlignedPosition;
  const popperContentProps = SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition ? {
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions
  } : {};
  return /* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$SelectContentProvider, {
    scope: __scopeSelect,
    content,
    viewport,
    onViewportChange: setViewport,
    itemRefCallback,
    selectedItem,
    onItemLeave: handleItemLeave,
    itemTextRefCallback,
    focusSelectedItem,
    selectedItemText,
    position: position2,
    isPositioned,
    searchRef
  }, /* @__PURE__ */ createElement$1(ReactRemoveScroll$1, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, /* @__PURE__ */ createElement$1($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: context.open,
    onMountAutoFocus: (event) => {
      event.preventDefault();
    },
    onUnmountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onCloseAutoFocus, (event) => {
      var _context$trigger;
      (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
        preventScroll: true
      });
      event.preventDefault();
    })
  }, /* @__PURE__ */ createElement$1($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: true,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: () => context.onOpenChange(false)
  }, /* @__PURE__ */ createElement$1(SelectPosition, _extends$2({
    role: "listbox",
    id: context.contentId,
    "data-state": context.open ? "open" : "closed",
    dir: context.dir,
    onContextMenu: (event) => event.preventDefault()
  }, contentProps, popperContentProps, {
    onPlaced: () => setIsPositioned(true),
    ref: composedRefs,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (event.key === "Tab")
        event.preventDefault();
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if ([
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(event.key)) {
        const items = getItems().filter(
          (item) => !item.disabled
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(event.key))
          candidateNodes = candidateNodes.slice().reverse();
        if ([
          "ArrowUp",
          "ArrowDown"
        ].includes(event.key)) {
          const currentElement = event.target;
          const currentIndex = candidateNodes.indexOf(currentElement);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => focusFirst2(candidateNodes)
        );
        event.preventDefault();
      }
    })
  }))))));
});
const $cc7e05a45900e73f$var$SelectItemAlignedPosition = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [contentWrapper, setContentWrapper] = useState$1(null);
  const [content, setContent] = useState$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node2) => setContent(node2)
  );
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = useRef$1(false);
  const shouldRepositionRef = useRef$1(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position2 = useCallback$1(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          rightEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          leftEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $cc7e05a45900e73f$var$CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced === null || onPlaced === void 0 || onPlaced();
      requestAnimationFrame(
        () => shouldExpandOnScrollRef.current = true
      );
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(
    () => position2(),
    [
      position2
    ]
  );
  const [contentZIndex, setContentZIndex] = useState$1();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  const handleScrollButtonChange = useCallback$1((node2) => {
    if (node2 && shouldRepositionRef.current === true) {
      position2();
      focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
      shouldRepositionRef.current = false;
    }
  }, [
    position2,
    focusSelectedItem
  ]);
  return /* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$SelectViewportProvider, {
    scope: __scopeSelect,
    contentWrapper,
    shouldExpandOnScrollRef,
    onScrollButtonChange: handleScrollButtonChange
  }, /* @__PURE__ */ createElement$1("div", {
    ref: setContentWrapper,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: contentZIndex
    }
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({}, popperProps, {
    ref: composedRefs,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...popperProps.style
    }
  }))));
});
const $cc7e05a45900e73f$var$SelectPopperPosition = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, align = "start", collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN, ...popperProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  return /* @__PURE__ */ createElement$1($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends$2({}, popperScope, popperProps, {
    ref: forwardedRef,
    align,
    collisionPadding,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...popperProps.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
const [$cc7e05a45900e73f$var$SelectViewportProvider, $cc7e05a45900e73f$var$useSelectViewportContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, {});
const $cc7e05a45900e73f$var$VIEWPORT_NAME = "SelectViewport";
const $cc7e05a45900e73f$export$9ed6e7b40248d36d = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, ...viewportProps } = props;
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentContext.onViewportChange);
  const prevScrollTopRef = useRef$1(0);
  return /* @__PURE__ */ createElement$1(Fragment, null, /* @__PURE__ */ createElement$1("style", {
    dangerouslySetInnerHTML: {
      __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
    }
  }), /* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$Collection.Slot, {
    scope: __scopeSelect
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, viewportProps, {
    ref: composedRefs,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...viewportProps.style
    },
    onScroll: $e42e1063c40fb3ef$export$b9ecd428b558ff10(viewportProps.onScroll, (event) => {
      const viewport = event.currentTarget;
      const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
      if (shouldExpandOnScrollRef !== null && shouldExpandOnScrollRef !== void 0 && shouldExpandOnScrollRef.current && contentWrapper) {
        const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
        if (scrolledBy > 0) {
          const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
          const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
          const cssHeight = parseFloat(contentWrapper.style.height);
          const prevHeight = Math.max(cssMinHeight, cssHeight);
          if (prevHeight < availableHeight) {
            const nextHeight = prevHeight + scrolledBy;
            const clampedNextHeight = Math.min(availableHeight, nextHeight);
            const heightDiff = nextHeight - clampedNextHeight;
            contentWrapper.style.height = clampedNextHeight + "px";
            if (contentWrapper.style.bottom === "0px") {
              viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
              contentWrapper.style.justifyContent = "flex-end";
            }
          }
        }
      }
      prevScrollTopRef.current = viewport.scrollTop;
    })
  }))));
});
const $cc7e05a45900e73f$var$GROUP_NAME = "SelectGroup";
const [$cc7e05a45900e73f$var$SelectGroupContextProvider, $cc7e05a45900e73f$var$useSelectGroupContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$GROUP_NAME);
const $cc7e05a45900e73f$var$LABEL_NAME = "SelectLabel";
const $cc7e05a45900e73f$export$f67338d29bd972f8 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, ...labelProps } = props;
  const groupContext = $cc7e05a45900e73f$var$useSelectGroupContext($cc7e05a45900e73f$var$LABEL_NAME, __scopeSelect);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    id: groupContext.id
  }, labelProps, {
    ref: forwardedRef
  }));
});
const $cc7e05a45900e73f$var$ITEM_NAME = "SelectItem";
const [$cc7e05a45900e73f$var$SelectItemContextProvider, $cc7e05a45900e73f$var$useSelectItemContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$ITEM_NAME);
const $cc7e05a45900e73f$export$13ef48a934230896 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
  const isSelected = context.value === value;
  const [textValue, setTextValue] = useState$1(textValueProp !== null && textValueProp !== void 0 ? textValueProp : "");
  const [isFocused, setIsFocused] = useState$1(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node2) => {
    var _contentContext$itemR;
    return (_contentContext$itemR = contentContext.itemRefCallback) === null || _contentContext$itemR === void 0 ? void 0 : _contentContext$itemR.call(contentContext, node2, value, disabled);
  });
  const textId = $1746a345f3d73bb7$export$f680877a34711e37();
  const handleSelect = () => {
    if (!disabled) {
      context.onValueChange(value);
      context.onOpenChange(false);
    }
  };
  if (value === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$SelectItemContextProvider, {
    scope: __scopeSelect,
    value,
    disabled,
    textId,
    isSelected,
    onItemTextChange: useCallback$1((node2) => {
      setTextValue((prevTextValue) => {
        var _node$textContent;
        return prevTextValue || ((_node$textContent = node2 === null || node2 === void 0 ? void 0 : node2.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$Collection.ItemSlot, {
    scope: __scopeSelect,
    value,
    disabled,
    textValue
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    role: "option",
    "aria-labelledby": textId,
    "data-highlighted": isFocused ? "" : void 0,
    "aria-selected": isSelected && isFocused,
    "data-state": isSelected ? "checked" : "unchecked",
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0,
    tabIndex: disabled ? void 0 : -1
  }, itemProps, {
    ref: composedRefs,
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      itemProps.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      itemProps.onBlur,
      () => setIsFocused(false)
    ),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerUp, handleSelect),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerMove, (event) => {
      if (disabled) {
        var _contentContext$onIte;
        (_contentContext$onIte = contentContext.onItemLeave) === null || _contentContext$onIte === void 0 || _contentContext$onIte.call(contentContext);
      } else
        event.currentTarget.focus({
          preventScroll: true
        });
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerLeave, (event) => {
      if (event.currentTarget === document.activeElement) {
        var _contentContext$onIte2;
        (_contentContext$onIte2 = contentContext.onItemLeave) === null || _contentContext$onIte2 === void 0 || _contentContext$onIte2.call(contentContext);
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onKeyDown, (event) => {
      var _contentContext$searc;
      const isTypingAhead = ((_contentContext$searc = contentContext.searchRef) === null || _contentContext$searc === void 0 ? void 0 : _contentContext$searc.current) !== "";
      if (isTypingAhead && event.key === " ")
        return;
      if ($cc7e05a45900e73f$var$SELECTION_KEYS.includes(event.key))
        handleSelect();
      if (event.key === " ")
        event.preventDefault();
    })
  }))));
});
const $cc7e05a45900e73f$var$ITEM_TEXT_NAME = "SelectItemText";
const $cc7e05a45900e73f$export$3572fb0fb821ff49 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, className, style, ...itemTextProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const nativeOptionsContext = $cc7e05a45900e73f$var$useSelectNativeOptionsContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const [itemTextNode, setItemTextNode] = useState$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node2) => setItemTextNode(node2),
    itemContext.onItemTextChange,
    (node2) => {
      var _contentContext$itemT;
      return (_contentContext$itemT = contentContext.itemTextRefCallback) === null || _contentContext$itemT === void 0 ? void 0 : _contentContext$itemT.call(contentContext, node2, itemContext.value, itemContext.disabled);
    }
  );
  const textContent = itemTextNode === null || itemTextNode === void 0 ? void 0 : itemTextNode.textContent;
  const nativeOption = useMemo$1(
    () => /* @__PURE__ */ createElement$1("option", {
      key: itemContext.value,
      value: itemContext.value,
      disabled: itemContext.disabled
    }, textContent),
    [
      itemContext.disabled,
      itemContext.value,
      textContent
    ]
  );
  const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onNativeOptionAdd(nativeOption);
    return () => onNativeOptionRemove(nativeOption);
  }, [
    onNativeOptionAdd,
    onNativeOptionRemove,
    nativeOption
  ]);
  return /* @__PURE__ */ createElement$1(Fragment, null, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({
    id: itemContext.textId
  }, itemTextProps, {
    ref: composedRefs
  })), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? /* @__PURE__ */ createPortal(itemTextProps.children, context.valueNode) : null);
});
const $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME = "SelectItemIndicator";
const $cc7e05a45900e73f$export$6b9198de19accfe6 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, ...itemIndicatorProps } = props;
  const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_INDICATOR_NAME, __scopeSelect);
  return itemContext.isSelected ? /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({
    "aria-hidden": true
  }, itemIndicatorProps, {
    ref: forwardedRef
  })) : null;
});
const $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
const $cc7e05a45900e73f$export$d8117927658af6d7 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp1, setCanScrollUp] = useState$1(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const canScrollUp = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [
    contentContext.viewport,
    contentContext.isPositioned
  ]);
  return canScrollUp1 ? /* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends$2({}, props, {
    ref: composedRefs,
    onAutoScroll: () => {
      const { viewport, selectedItem } = contentContext;
      if (viewport && selectedItem)
        viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
    }
  })) : null;
});
const $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
const $cc7e05a45900e73f$export$ff951e476c12189 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown1, setCanScrollDown] = useState$1(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [
    contentContext.viewport,
    contentContext.isPositioned
  ]);
  return canScrollDown1 ? /* @__PURE__ */ createElement$1($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends$2({}, props, {
    ref: composedRefs,
    onAutoScroll: () => {
      const { viewport, selectedItem } = contentContext;
      if (viewport && selectedItem)
        viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
    }
  })) : null;
});
const $cc7e05a45900e73f$var$SelectScrollButtonImpl = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = useRef$1(null);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const clearAutoScrollTimer = useCallback$1(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  useEffect$1(() => {
    return () => clearAutoScrollTimer();
  }, [
    clearAutoScrollTimer
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    var _activeItem$ref$curre;
    const activeItem = getItems().find(
      (item) => item.ref.current === document.activeElement
    );
    activeItem === null || activeItem === void 0 || (_activeItem$ref$curre = activeItem.ref.current) === null || _activeItem$ref$curre === void 0 || _activeItem$ref$curre.scrollIntoView({
      block: "nearest"
    });
  }, [
    getItems
  ]);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    "aria-hidden": true
  }, scrollIndicatorProps, {
    ref: forwardedRef,
    style: {
      flexShrink: 0,
      ...scrollIndicatorProps.style
    },
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerDown, () => {
      if (autoScrollTimerRef.current === null)
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerMove, () => {
      var _contentContext$onIte3;
      (_contentContext$onIte3 = contentContext.onItemLeave) === null || _contentContext$onIte3 === void 0 || _contentContext$onIte3.call(contentContext);
      if (autoScrollTimerRef.current === null)
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerLeave, () => {
      clearAutoScrollTimer();
    })
  }));
});
const $cc7e05a45900e73f$export$eba4b1df07cb1d3 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSelect, ...separatorProps } = props;
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$2({
    "aria-hidden": true
  }, separatorProps, {
    ref: forwardedRef
  }));
});
function $cc7e05a45900e73f$var$shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
const $cc7e05a45900e73f$var$BubbleSelect = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { value, ...selectProps } = props;
  const ref = useRef$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value);
  useEffect$1(() => {
    const select = ref.current;
    const selectProto = window.HTMLSelectElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("change", {
        bubbles: true
      });
      setValue.call(select, value);
      select.dispatchEvent(event);
    }
  }, [
    prevValue,
    value
  ]);
  return /* @__PURE__ */ createElement$1($ea1ef594cf570d83$export$439d29a4e110a164, {
    asChild: true
  }, /* @__PURE__ */ createElement$1("select", _extends$2({}, selectProps, {
    ref: composedRefs,
    defaultValue: value
  })));
});
$cc7e05a45900e73f$var$BubbleSelect.displayName = "BubbleSelect";
function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onSearchChange);
  const searchRef = useRef$1("");
  const timerRef = useRef$1(0);
  const handleTypeaheadSearch = useCallback$1((key) => {
    const search = searchRef.current + key;
    handleSearchChange(search);
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
  }, [
    handleSearchChange
  ]);
  const resetTypeahead = useCallback$1(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  useEffect$1(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [
    searchRef,
    handleTypeaheadSearch,
    resetTypeahead
  ];
}
function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char2) => char2 === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = $cc7e05a45900e73f$var$wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem)
    wrappedItems = wrappedItems.filter(
      (v2) => v2 !== currentItem
    );
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
const $cc7e05a45900e73f$export$41fb9f06171c75f4 = $cc7e05a45900e73f$export$3ac1e88a1c0b9f1;
const $cc7e05a45900e73f$export$f04a61298a47a40f = $cc7e05a45900e73f$export$99b400cabb58c515;
const $cc7e05a45900e73f$export$602eac185826482c = $cc7e05a45900e73f$export$b2af6c9944296213;
const $cc7e05a45900e73f$export$7c6e2c02157bb7d2 = $cc7e05a45900e73f$export$c973a4b3cb86a03d;
const $cc7e05a45900e73f$export$d5c6c08dc2d3ca7 = $cc7e05a45900e73f$export$9ed6e7b40248d36d;
const $cc7e05a45900e73f$export$b04be29aa201d4f5 = $cc7e05a45900e73f$export$f67338d29bd972f8;
const $cc7e05a45900e73f$export$6d08773d2e66f8f2 = $cc7e05a45900e73f$export$13ef48a934230896;
const $cc7e05a45900e73f$export$d6e5bf9c43ea9319 = $cc7e05a45900e73f$export$3572fb0fb821ff49;
const $cc7e05a45900e73f$export$c3468e2714d175fa = $cc7e05a45900e73f$export$6b9198de19accfe6;
const $cc7e05a45900e73f$export$2f60d3ec9ad468f2 = $cc7e05a45900e73f$export$d8117927658af6d7;
const $cc7e05a45900e73f$export$bf1aedc3039c8d63 = $cc7e05a45900e73f$export$ff951e476c12189;
const $cc7e05a45900e73f$export$1ff3c3f08ae963c0 = $cc7e05a45900e73f$export$eba4b1df07cb1d3;
const SelectTrigger = React$1.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  $cc7e05a45900e73f$export$41fb9f06171c75f4,
  {
    ref,
    className: cn$1(
      "flex h-10 w-full items-center justify-between rounded-md theme-border primary-gradient-subtle px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 hover:bg-primary/5",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx$1($cc7e05a45900e73f$export$f04a61298a47a40f, { asChild: true, children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.chevronGrabberVertical, className: "h-4 w-4" }) })
    ]
  }
));
SelectTrigger.displayName = $cc7e05a45900e73f$export$41fb9f06171c75f4.displayName;
const SelectScrollUpButton = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $cc7e05a45900e73f$export$2f60d3ec9ad468f2,
  {
    ref,
    className: cn$1(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.chevronTopSmall, className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = $cc7e05a45900e73f$export$2f60d3ec9ad468f2.displayName;
const SelectScrollDownButton = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $cc7e05a45900e73f$export$bf1aedc3039c8d63,
  {
    ref,
    className: cn$1(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.chevronDownSmall, className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = $cc7e05a45900e73f$export$bf1aedc3039c8d63.displayName;
const SelectContent = React$1.forwardRef(({ className, children, position: position2 = "popper", ...props }, ref) => /* @__PURE__ */ jsx$1($cc7e05a45900e73f$export$602eac185826482c, { children: /* @__PURE__ */ jsxs(
  $cc7e05a45900e73f$export$7c6e2c02157bb7d2,
  {
    ref,
    className: cn$1(
      "relative z-50 max-h-96 w-max overflow-hidden rounded-md theme-border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position2 === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position: position2,
    ...props,
    children: [
      /* @__PURE__ */ jsx$1(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx$1(
        $cc7e05a45900e73f$export$d5c6c08dc2d3ca7,
        {
          className: cn$1(
            "p-1",
            position2 === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx$1(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = $cc7e05a45900e73f$export$7c6e2c02157bb7d2.displayName;
const SelectLabel = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $cc7e05a45900e73f$export$b04be29aa201d4f5,
  {
    ref,
    className: cn$1("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = $cc7e05a45900e73f$export$b04be29aa201d4f5.displayName;
const SelectItem = React$1.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  $cc7e05a45900e73f$export$6d08773d2e66f8f2,
  {
    ref,
    className: cn$1(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx$1("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx$1($cc7e05a45900e73f$export$c3468e2714d175fa, { children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.checkmark, className: "h-3 w-3" }) }) }),
      /* @__PURE__ */ jsx$1($cc7e05a45900e73f$export$d6e5bf9c43ea9319, { children })
    ]
  }
));
SelectItem.displayName = $cc7e05a45900e73f$export$6d08773d2e66f8f2.displayName;
const SelectSeparator = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $cc7e05a45900e73f$export$1ff3c3f08ae963c0,
  {
    ref,
    className: cn$1("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = $cc7e05a45900e73f$export$1ff3c3f08ae963c0.displayName;
React$1.createContext({
  isMobileView: false,
  setIsMobileView: () => {
  },
  isCollapsed: false,
  setIsCollapsed: () => {
  }
});
const $6be4966fd9bbc698$var$SWITCH_NAME = "Switch";
const [$6be4966fd9bbc698$var$createSwitchContext, $6be4966fd9bbc698$export$cf7f5f17f69cbd43] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6be4966fd9bbc698$var$SWITCH_NAME);
const [$6be4966fd9bbc698$var$SwitchProvider, $6be4966fd9bbc698$var$useSwitchContext] = $6be4966fd9bbc698$var$createSwitchContext($6be4966fd9bbc698$var$SWITCH_NAME);
const $6be4966fd9bbc698$export$b5d5cf8927ab7262 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...switchProps } = props;
  const [button, setButton] = useState$1(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node2) => setButton(node2)
  );
  const hasConsumerStoppedPropagationRef = useRef$1(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  return /* @__PURE__ */ createElement$1($6be4966fd9bbc698$var$SwitchProvider, {
    scope: __scopeSwitch,
    checked,
    disabled
  }, /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$2({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-required": required,
    "data-state": $6be4966fd9bbc698$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, switchProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ createElement$1($6be4966fd9bbc698$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
const $6be4966fd9bbc698$var$THUMB_NAME = "SwitchThumb";
const $6be4966fd9bbc698$export$4d07bf653ea69106 = /* @__PURE__ */ forwardRef$1((props, forwardedRef) => {
  const { __scopeSwitch, ...thumbProps } = props;
  const context = $6be4966fd9bbc698$var$useSwitchContext($6be4966fd9bbc698$var$THUMB_NAME, __scopeSwitch);
  return /* @__PURE__ */ createElement$1($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({
    "data-state": $6be4966fd9bbc698$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, thumbProps, {
    ref: forwardedRef
  }));
});
const $6be4966fd9bbc698$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = useRef$1(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  useEffect$1(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ createElement$1("input", _extends$2({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $6be4966fd9bbc698$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
const $6be4966fd9bbc698$export$be92b6f5f03c0fe9 = $6be4966fd9bbc698$export$b5d5cf8927ab7262;
const $6be4966fd9bbc698$export$6521433ed15a34db = $6be4966fd9bbc698$export$4d07bf653ea69106;
const Switch = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  $6be4966fd9bbc698$export$be92b6f5f03c0fe9,
  {
    className: cn$1(
      "peer inline-flex h-6 w-11 shrink-0 p-[0.5px] cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary/40",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx$1(
      $6be4966fd9bbc698$export$6521433ed15a34db,
      {
        className: cn$1(
          "pointer-events-none block h-5 w-5 rounded-full bg-primary shadow-lg ring-0 transition-transform data-[state=checked]:bg-background data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1"
        )
      }
    )
  }
));
Switch.displayName = $6be4966fd9bbc698$export$be92b6f5f03c0fe9.displayName;
const Table = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx$1(
  "table",
  {
    ref,
    className: cn$1("w-full caption-bottom text-base", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1("thead", { ref, className, ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "tbody",
  {
    ref,
    className: cn$1("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "tfoot",
  {
    ref,
    className: cn$1(
      "border-t border-border/20 bg-primary/10 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "tr",
  {
    ref,
    className: cn$1(
      "border-b border-border/20 transition-colors hover:bg-primary/10 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "th",
  {
    ref,
    className: cn$1(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 border-0 border-b border-border/20",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "td",
  {
    ref,
    className: cn$1("py-3 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "caption",
  {
    ref,
    className: cn$1("my-3 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = createContextScope$1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope: scope2, children } = props;
    const ref = React__default.useRef(null);
    const itemMap = React__default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsx$1(CollectionProviderImpl, { scope: scope2, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = React__default.forwardRef(
    (props, forwardedRef) => {
      const { scope: scope2, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope2);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsx$1(Slot, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = React__default.forwardRef(
    (props, forwardedRef) => {
      const { scope: scope2, children, ...itemData } = props;
      const ref = React__default.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope2);
      React__default.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsx$1(Slot, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope2) {
    const context = useCollectionContext(name + "CollectionConsumer", scope2);
    const getItems = React__default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}
var useReactId = React$1["useId".toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
  const [id, setId] = React$1.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId)
      setId((reactId) => reactId ?? String(count$1++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
var DirectionContext = React$1.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React$1.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS$1 = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope$1(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = React$1.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsx$1(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx$1(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx$1(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = React$1.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React$1.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React$1.useState(false);
  const handleEntryFocus = useCallbackRef$1(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React$1.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React$1.useState(0);
  React$1.useEffect(() => {
    const node2 = ref.current;
    if (node2) {
      node2.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node2.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsx$1(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React$1.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React$1.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React$1.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React$1.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsx$1(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS$1);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst$1(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = React$1.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    React$1.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsx$1(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsx$1(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable)
                event.preventDefault();
              else
                context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget)
                return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey)
                  return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last")
                  candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev")
                    candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst$1(candidateNodes));
              }
            })
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key))
    return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key))
    return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst$1(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
var Root$1 = RovingFocusGroup;
var Item = RovingFocusGroupItem;
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope$1(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = React$1.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    return /* @__PURE__ */ jsx$1(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsx$1(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsx$1(
      Root$1,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsx$1(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME$2 = "TabsTrigger";
var TabsTrigger$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME$2, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsx$1(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsx$1(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key))
                context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$1.displayName = TRIGGER_NAME$2;
var CONTENT_NAME$2 = "TabsContent";
var TabsContent$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME$2, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = React$1.useRef(isSelected);
    React$1.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsx$1(Presence$1, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsx$1(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$1.displayName = CONTENT_NAME$2;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var List = TabsList$1;
var Trigger$1 = TabsTrigger$1;
var Content$1 = TabsContent$1;
const TabsList = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  List,
  {
    ref,
    className: cn$1("flex items-center mb-2 last:mr-0", className),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTriggerVariant = {
  default: "default",
  alternate: "alternate"
};
const tabsTriggerVariants = cva(
  "group inline-flex items-center py-1 px-4 border border-border/20 whitespace-nowrap ring-offset-background transition-all disabled:border-border/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        [TabsTriggerVariant.default]: "rounded-2xl w-[180px] hover:bg-primary/5 hover:border-border/10 data-[state=active]:bg-primary/10 mr-2",
        [TabsTriggerVariant.alternate]: "w-full border-0 border-b-2 data-[state=active]:border-border"
      }
    },
    defaultVariants: {
      variant: TabsTriggerVariant.default
    }
  }
);
const TabsTrigger = React$1.forwardRef(({ variant, label, totalCount = null, className, ...props }, ref) => /* @__PURE__ */ jsxs(
  Trigger$1,
  {
    ref,
    className: cn$1(
      cn$1(tabsTriggerVariants({ variant })),
      totalCount !== null ? "justify-between" : "justify-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx$1(
        Text,
        {
          variant: TextVariant.bodyLarge,
          className: cn$1(
            "group-disabled:text-muted",
            variant === TabsTriggerVariant.alternate && "text-primary/30 group-data-[state=active]:text-primary"
          ),
          children: label
        }
      ),
      /* @__PURE__ */ jsx$1(
        Text,
        {
          variant: TextVariant.body,
          className: "text-muted-foreground group-disabled:text-muted",
          children: totalCount
        }
      )
    ]
  }
));
TabsTrigger.displayName = Trigger$1.displayName;
const TabsContent = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  Content$1,
  {
    ref,
    className: cn$1(
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content$1.displayName;
const TagVariant = {
  primary: "primary",
  success: "success",
  accent: "accent",
  social: "social",
  warning: "warning",
  against: "against",
  for: "for",
  destructive: "destructive"
};
const TagSize = {
  default: "default",
  sm: "sm"
};
cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 border disabled:bg-muted disabled:text-muted-foreground disabled:border-muted-foreground",
  {
    variants: {
      variant: {
        [TagVariant.primary]: "bg-primary/10 text-primary/90 border-primary/20 hover:bg-primary/20 hover:text-primary hover:border-primary/40",
        [TagVariant.success]: "bg-success/10 text-success/90 border-success/40 hover:bg-success/30 hover:text-success hover:border-success/60",
        [TagVariant.accent]: "bg-accent/10 text-accent/90 border-accent/40 hover:bg-accent/30 hover:text-accent hover:border-accent/60",
        [TagVariant.social]: "bg-social/10 text-social/90 border-social/40 hover:bg-social/30 hover:text-social hover:border-social/60",
        [TagVariant.warning]: "bg-warning/10 text-warning/90 border-warning/40 hover:bg-warning/30 hover:text-warning hover:border-warning/60",
        [TagVariant.against]: "bg-against/10 text-against/90 border-against/40 hover:bg-against/30 hover:text-against hover:border-against/60",
        [TagVariant.for]: "bg-for/10 text-for/90 border-for/30 hover:bg-for/40 hover:text-for hover:border-for/60",
        [TagVariant.destructive]: "bg-destructive/10 text-destructive/90 border-destructive/40 hover:bg-destructive/30 hover:text-destructive hover:border-destructive/60"
      },
      size: {
        [TagSize.default]: "text-base font-normal",
        [TagSize.sm]: "text-xs font-medium"
      }
    },
    defaultVariants: {
      variant: TagVariant.primary,
      size: TagSize.default
    }
  }
);
const Textarea = React$1.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx$1(
      "textarea",
      {
        className: cn$1(
          "flex min-h-[80px] w-full rounded-md theme-border bg-primary/10 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
var isBrowser$1 = typeof document !== "undefined";
var syncFallback = function syncFallback2(create3) {
  return create3();
};
var useInsertionEffect = React$1["useInsertionEffect"] ? React$1["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$1 ? syncFallback : useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || React$1.useLayoutEffect;
const emotionUseInsertionEffectWithFallbacks_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useInsertionEffectAlwaysWithSyncFallback,
  useInsertionEffectWithLayoutFallback
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(emotionUseInsertionEffectWithFallbacks_esm);
var similar;
var hasRequiredSimilar;
function requireSimilar() {
  if (hasRequiredSimilar)
    return similar;
  hasRequiredSimilar = 1;
  function Similar() {
    this.list = [];
    this.lastItem = void 0;
    this.size = 0;
    return this;
  }
  Similar.prototype.get = function(key) {
    var index2;
    if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
      return this.lastItem.val;
    }
    index2 = this.indexOf(key);
    if (index2 >= 0) {
      this.lastItem = this.list[index2];
      return this.list[index2].val;
    }
    return void 0;
  };
  Similar.prototype.set = function(key, val) {
    var index2;
    if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
      this.lastItem.val = val;
      return this;
    }
    index2 = this.indexOf(key);
    if (index2 >= 0) {
      this.lastItem = this.list[index2];
      this.list[index2].val = val;
      return this;
    }
    this.lastItem = { key, val };
    this.list.push(this.lastItem);
    this.size++;
    return this;
  };
  Similar.prototype.delete = function(key) {
    var index2;
    if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
      this.lastItem = void 0;
    }
    index2 = this.indexOf(key);
    if (index2 >= 0) {
      this.size--;
      return this.list.splice(index2, 1)[0];
    }
    return void 0;
  };
  Similar.prototype.has = function(key) {
    var index2;
    if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
      return true;
    }
    index2 = this.indexOf(key);
    if (index2 >= 0) {
      this.lastItem = this.list[index2];
      return true;
    }
    return false;
  };
  Similar.prototype.forEach = function(callback, thisArg) {
    var i;
    for (i = 0; i < this.size; i++) {
      callback.call(thisArg || this, this.list[i].val, this.list[i].key, this);
    }
  };
  Similar.prototype.indexOf = function(key) {
    var i;
    for (i = 0; i < this.size; i++) {
      if (this.isEqual(this.list[i].key, key)) {
        return i;
      }
    }
    return -1;
  };
  Similar.prototype.isEqual = function(val1, val2) {
    return val1 === val2 || val1 !== val1 && val2 !== val2;
  };
  similar = Similar;
  return similar;
}
var mapOrSimilar = function(forceSimilar) {
  if (typeof Map !== "function" || forceSimilar) {
    var Similar = requireSimilar();
    return new Similar();
  } else {
    return /* @__PURE__ */ new Map();
  }
};
var MapOrSimilar = mapOrSimilar;
var memoizerific = function(limit) {
  var cache = new MapOrSimilar(process.env.FORCE_SIMILAR_INSTEAD_OF_MAP === "true"), lru = [];
  return function(fn) {
    var memoizerific2 = function() {
      var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i;
      if ((memoizerific2.numArgs || memoizerific2.numArgs === 0) && memoizerific2.numArgs !== argsLengthMinusOne + 1) {
        throw new Error("Memoizerific functions should always be called with the same number of arguments");
      }
      for (i = 0; i < argsLengthMinusOne; i++) {
        lruPath[i] = {
          cacheItem: currentCache,
          arg: arguments[i]
        };
        if (currentCache.has(arguments[i])) {
          currentCache = currentCache.get(arguments[i]);
          continue;
        }
        isMemoized = false;
        newMap = new MapOrSimilar(process.env.FORCE_SIMILAR_INSTEAD_OF_MAP === "true");
        currentCache.set(arguments[i], newMap);
        currentCache = newMap;
      }
      if (isMemoized) {
        if (currentCache.has(arguments[argsLengthMinusOne])) {
          fnResult = currentCache.get(arguments[argsLengthMinusOne]);
        } else {
          isMemoized = false;
        }
      }
      if (!isMemoized) {
        fnResult = fn.apply(null, arguments);
        currentCache.set(arguments[argsLengthMinusOne], fnResult);
      }
      if (limit > 0) {
        lruPath[argsLengthMinusOne] = {
          cacheItem: currentCache,
          arg: arguments[argsLengthMinusOne]
        };
        if (isMemoized) {
          moveToMostRecentLru(lru, lruPath);
        } else {
          lru.push(lruPath);
        }
        if (lru.length > limit) {
          removeCachedResult(lru.shift());
        }
      }
      memoizerific2.wasMemoized = isMemoized;
      memoizerific2.numArgs = argsLengthMinusOne + 1;
      return fnResult;
    };
    memoizerific2.limit = limit;
    memoizerific2.wasMemoized = false;
    memoizerific2.cache = cache;
    memoizerific2.lru = lru;
    return memoizerific2;
  };
};
function moveToMostRecentLru(lru, lruPath) {
  var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i, ii;
  for (i = 0; i < lruLen; i++) {
    isMatch = true;
    for (ii = 0; ii < lruPathLen; ii++) {
      if (!isEqual(lru[i][ii].arg, lruPath[ii].arg)) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      break;
    }
  }
  lru.push(lru.splice(i, 1)[0]);
}
function removeCachedResult(removedLru) {
  var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i;
  currentLru.cacheItem.delete(currentLru.arg);
  for (i = removedLruLen - 2; i >= 0; i--) {
    currentLru = removedLru[i];
    tmp = currentLru.cacheItem.get(currentLru.arg);
    if (!tmp || !tmp.size) {
      currentLru.cacheItem.delete(currentLru.arg);
    } else {
      break;
    }
  }
}
function isEqual(val1, val2) {
  return val1 === val2 || val1 !== val1 && val2 !== val2;
}
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$2 = Object.getOwnPropertyNames;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __export$2 = (target, all) => {
  for (var name in all)
    __defProp$2(target, name, { get: all[name], enumerable: true });
};
var __copyProps$2 = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames$2(from2))
      if (!__hasOwnProp$2.call(to, key) && key !== except)
        __defProp$2(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc$2(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS$2 = (mod) => __copyProps$2(__defProp$2({}, "__esModule", { value: true }), mod);
var src_exports$2 = {};
__export$2(src_exports$2, {
  global: () => scope
});
var dist$2 = __toCommonJS$2(src_exports$2);
var scope = (() => {
  let win;
  if (typeof window !== "undefined") {
    win = window;
  } else if (typeof globalThis !== "undefined") {
    win = globalThis;
  } else if (typeof commonjsGlobal !== "undefined") {
    win = commonjsGlobal;
  } else if (typeof self !== "undefined") {
    win = self;
  } else {
    win = {};
  }
  return win;
})();
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __export$1 = (target, all) => {
  for (var name in all)
    __defProp$1(target, name, { get: all[name], enumerable: true });
}, __copyProps$1 = (to, from2, except, desc) => {
  if (from2 && typeof from2 == "object" || typeof from2 == "function")
    for (let key of __getOwnPropNames$1(from2))
      !__hasOwnProp$1.call(to, key) && key !== except && __defProp$1(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc$1(from2, key)) || desc.enumerable });
  return to;
};
var __toCommonJS$1 = (mod) => __copyProps$1(__defProp$1({}, "__esModule", { value: true }), mod);
var src_exports$1 = {};
__export$1(src_exports$1, { deprecate: () => deprecate, logger: () => logger$1, once: () => once, pretty: () => pretty });
var dist$1 = __toCommonJS$1(src_exports$1);
var import_global$1 = dist$2, { LOGLEVEL } = import_global$1.global, levels = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 }, currentLogLevelString = LOGLEVEL, currentLogLevelNumber = levels[currentLogLevelString] || levels.info, logger$1 = { trace: (message, ...rest) => {
  currentLogLevelNumber <= levels.trace && console.trace(message, ...rest);
}, debug: (message, ...rest) => {
  currentLogLevelNumber <= levels.debug && console.debug(message, ...rest);
}, info: (message, ...rest) => {
  currentLogLevelNumber <= levels.info && console.info(message, ...rest);
}, warn: (message, ...rest) => {
  currentLogLevelNumber <= levels.warn && console.warn(message, ...rest);
}, error: (message, ...rest) => {
  currentLogLevelNumber <= levels.error && console.error(message, ...rest);
}, log: (message, ...rest) => {
  currentLogLevelNumber < levels.silent && console.log(message, ...rest);
} }, logged = /* @__PURE__ */ new Set(), once = (type) => (message, ...rest) => {
  if (!logged.has(message))
    return logged.add(message), logger$1[type](message, ...rest);
};
once.clear = () => logged.clear();
once.trace = once("trace");
once.debug = once("debug");
once.info = once("info");
once.warn = once("warn");
once.error = once("error");
once.log = once("log");
var deprecate = once("warn"), pretty = (type) => (...args) => {
  let argArray = [];
  if (args.length) {
    let startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi, endTagRe = /<\/span>/gi, reResultArray;
    for (argArray.push(args[0].replace(startTagRe, "%c").replace(endTagRe, "%c")); reResultArray = startTagRe.exec(args[0]); )
      argArray.push(reResultArray[2]), argArray.push("");
    for (let j = 1; j < args.length; j++)
      argArray.push(args[j]);
  }
  logger$1[type].apply(logger$1, argArray);
};
pretty.trace = pretty("trace");
pretty.debug = pretty("debug");
pretty.info = pretty("info");
pretty.warn = pretty("warn");
pretty.error = pretty("error");
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
}, __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 == "object" || typeof from2 == "function")
    for (let key of __getOwnPropNames(from2))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(!mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var require_react_is_production_min = __commonJS({ "../../node_modules/react-is/cjs/react-is.production.min.js"(exports2) {
  var b = typeof Symbol == "function" && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k2 = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m2 = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p2 = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v2 = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if (typeof a == "object" && a !== null) {
      var u2 = a.$$typeof;
      switch (u2) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m2:
            case e:
            case g:
            case f:
            case p2:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k2:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u2;
              }
          }
        case d:
          return u2;
      }
    }
  }
  function A(a) {
    return z(a) === m2;
  }
  exports2.AsyncMode = l;
  exports2.ConcurrentMode = m2;
  exports2.ContextConsumer = k2;
  exports2.ContextProvider = h;
  exports2.Element = c;
  exports2.ForwardRef = n;
  exports2.Fragment = e;
  exports2.Lazy = t;
  exports2.Memo = r;
  exports2.Portal = d;
  exports2.Profiler = g;
  exports2.StrictMode = f;
  exports2.Suspense = p2;
  exports2.isAsyncMode = function(a) {
    return A(a) || z(a) === l;
  };
  exports2.isConcurrentMode = A;
  exports2.isContextConsumer = function(a) {
    return z(a) === k2;
  };
  exports2.isContextProvider = function(a) {
    return z(a) === h;
  };
  exports2.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === c;
  };
  exports2.isForwardRef = function(a) {
    return z(a) === n;
  };
  exports2.isFragment = function(a) {
    return z(a) === e;
  };
  exports2.isLazy = function(a) {
    return z(a) === t;
  };
  exports2.isMemo = function(a) {
    return z(a) === r;
  };
  exports2.isPortal = function(a) {
    return z(a) === d;
  };
  exports2.isProfiler = function(a) {
    return z(a) === g;
  };
  exports2.isStrictMode = function(a) {
    return z(a) === f;
  };
  exports2.isSuspense = function(a) {
    return z(a) === p2;
  };
  exports2.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === e || a === m2 || a === g || a === f || a === p2 || a === q || typeof a == "object" && a !== null && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k2 || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v2);
  };
  exports2.typeOf = z;
} });
var require_react_is_development = __commonJS({ "../../node_modules/react-is/cjs/react-is.development.js"(exports2) {
  process.env.NODE_ENV !== "production" && function() {
    var hasSymbol = typeof Symbol == "function" && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
    function isValidElementType(type) {
      return typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
      if (typeof object == "object" && object !== null) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;
            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;
                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    var AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element2 = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment4 = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal3 = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = false;
    function isAsyncMode(object) {
      return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement2(object) {
      return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    exports2.AsyncMode = AsyncMode, exports2.ConcurrentMode = ConcurrentMode, exports2.ContextConsumer = ContextConsumer, exports2.ContextProvider = ContextProvider, exports2.Element = Element2, exports2.ForwardRef = ForwardRef, exports2.Fragment = Fragment4, exports2.Lazy = Lazy, exports2.Memo = Memo, exports2.Portal = Portal3, exports2.Profiler = Profiler, exports2.StrictMode = StrictMode, exports2.Suspense = Suspense, exports2.isAsyncMode = isAsyncMode, exports2.isConcurrentMode = isConcurrentMode, exports2.isContextConsumer = isContextConsumer, exports2.isContextProvider = isContextProvider, exports2.isElement = isElement2, exports2.isForwardRef = isForwardRef, exports2.isFragment = isFragment, exports2.isLazy = isLazy, exports2.isMemo = isMemo, exports2.isPortal = isPortal, exports2.isProfiler = isProfiler, exports2.isStrictMode = isStrictMode, exports2.isSuspense = isSuspense, exports2.isValidElementType = isValidElementType, exports2.typeOf = typeOf;
  }();
} });
var require_react_is = __commonJS({ "../../node_modules/react-is/index.js"(exports2, module2) {
  process.env.NODE_ENV === "production" ? module2.exports = require_react_is_production_min() : module2.exports = require_react_is_development();
} });
var require_hoist_non_react_statics_cjs = __commonJS({ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports2, module2) {
  var reactIs = require_react_is(), REACT_STATICS = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, KNOWN_STATICS = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, FORWARD_REF_STATICS = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, MEMO_STATICS = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
  function getStatics(component) {
    return reactIs.isMemo(component) ? MEMO_STATICS : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
  }
  var defineProperty = Object.defineProperty, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getPrototypeOf = Object.getPrototypeOf, objectPrototype = Object.prototype;
  function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent != "string") {
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);
        inheritedComponent && inheritedComponent !== objectPrototype && hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
      }
      var keys = getOwnPropertyNames(sourceComponent);
      getOwnPropertySymbols && (keys = keys.concat(getOwnPropertySymbols(sourceComponent)));
      for (var targetStatics = getStatics(targetComponent), sourceStatics = getStatics(sourceComponent), i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
          try {
            defineProperty(targetComponent, key, descriptor);
          } catch {
          }
        }
      }
    }
    return targetComponent;
  }
  module2.exports = hoistNonReactStatics2;
} });
var require_extends = __commonJS({ "../../node_modules/@babel/runtime/helpers/extends.js"(exports2, module2) {
  function _extends2() {
    return module2.exports = _extends2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source)
          Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
      }
      return target;
    }, module2.exports.__esModule = true, module2.exports.default = module2.exports, _extends2.apply(this, arguments);
  }
  module2.exports = _extends2, module2.exports.__esModule = true, module2.exports.default = module2.exports;
} });
var src_exports = {};
__export(src_exports, { CacheProvider: () => CacheProvider, ClassNames: () => ClassNames, Global: () => Global, ThemeProvider: () => ThemeProvider, background: () => background, color: () => color, convert: () => convert, create: () => create, createCache: () => createCache, createGlobal: () => createGlobal, createReset: () => createReset, css: () => css, darken: () => darkenColor, ensure: () => ensure, ignoreSsrWarning: () => ignoreSsrWarning, isPropValid: () => isPropValid, jsx: () => jsx, keyframes: () => keyframes, lighten: () => lightenColor, styled: () => newStyled, themes: () => themes, typography: () => typography, useTheme: () => useTheme, withTheme: () => withTheme });
var dist = __toCommonJS(src_exports);
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}
var React3 = __toESM(React__default);
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = memoize(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var React = __toESM(React__default), import_react3 = React__default;
function sheetForTag(tag) {
  if (tag.sheet)
    return tag.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === tag)
      return document.styleSheets[i];
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  return tag.setAttribute("data-emotion", options.key), options.nonce !== void 0 && tag.setAttribute("nonce", options.nonce), tag.appendChild(document.createTextNode("")), tag.setAttribute("data-s", ""), tag;
}
var StyleSheet = function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      _this.tags.length === 0 ? _this.insertionPoint ? before = _this.insertionPoint.nextSibling : _this.prepend ? before = _this.container.firstChild : before = _this.before : before = _this.tags[_this.tags.length - 1].nextSibling, _this.container.insertBefore(tag, before), _this.tags.push(tag);
    }, this.isSpeedy = options.speedy === void 0 ? process.env.NODE_ENV === "production" : options.speedy, this.tags = [], this.ctr = 0, this.nonce = options.nonce, this.key = options.key, this.container = options.container, this.prepend = options.prepend, this.insertionPoint = options.insertionPoint, this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  return _proto.hydrate = function(nodes) {
    nodes.forEach(this._insertTag);
  }, _proto.insert = function(rule) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement(this));
    var tag = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      isImportRule3 && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule) && console.error('There was a problem inserting the following rule: "' + rule + '"', e);
      }
    } else
      tag.appendChild(document.createTextNode(rule));
    this.ctr++;
  }, _proto.flush = function() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = false);
  }, StyleSheet2;
}();
var MS = "-ms-", MOZ = "-moz-", WEBKIT = "-webkit-", COMMENT = "comm", RULESET = "rule", DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs, from = String.fromCharCode, assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1, column = 1, length = 0, position = 0, character = 0, characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  return character = position > 0 ? charat(characters, --position) : 0, column--, character === 10 && (column = 1, line--), character;
}
function next() {
  return character = position < length ? charat(characters, position++) : 0, column++, character === 10 && (column = 1, line++), character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  for (; (character = peek()) && character < 33; )
    next();
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count2) {
  for (; --count2 && next() && !(character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97); )
    ;
  return slice(index2, caret() + (count2 < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  for (; next(); )
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        type !== 34 && type !== 39 && delimiter(character);
        break;
      case 40:
        type === 41 && delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  for (; next() && type + character !== 57; )
    if (type + character === 84 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  for (; !token(peek()); )
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  for (var index2 = 0, offset2 = 0, length2 = pseudo, atrule = 0, property = 0, previous = 0, variable = 1, scanning = 1, ampersand = 1, character2 = 0, type = "", props = rules, children = rulesets, reference = rule, characters2 = type; scanning; )
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1 && (ampersand = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset2:
            ampersand == -1 && (characters2 = replace(characters2, /\f/g, "")), property > 0 && strlen(characters2) - length2 && append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            if (append(reference = ruleset(characters2, root, parent, index2, offset2, rules, points, type, props = [], children = [], length2), rulesets), character2 === 123)
              if (offset2 === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            peek() === 45 && (characters2 += delimit(next())), atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            previous === 45 && strlen(characters2) == 2 && (variable = 0);
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index2, offset2, rules, points, type, props, children, length2) {
  for (var post = offset2 - 1, rule = offset2 === 0 ? rules : [""], size2 = sizeof(rule), i = 0, j = 0, k2 = 0; i < index2; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size2; ++x)
      (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) && (props[k2++] = z);
  return node(value, root, parent, offset2 === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  for (var output = "", length2 = sizeof(children), i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    for (var output = "", i = 0; i < length2; i++)
      output += collection[i](element, index2, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    element.root || (element = element.return) && callback(element);
  };
}
var weakMemoize = function(func) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache.has(arg))
      return cache.get(arg);
    var ret = func(arg);
    return cache.set(arg, ret), ret;
  };
};
var identifierWithPointTracking = function(begin, points, index2) {
  for (var previous = 0, character2 = 0; previous = character2, character2 = peek(), previous === 38 && character2 === 12 && (points[index2] = 1), !token(character2); )
    next();
  return slice(begin, position);
}, toRules = function(parsed, points) {
  var index2 = -1, character2 = 44;
  do
    switch (token(character2)) {
      case 0:
        character2 === 38 && peek() === 12 && (points[index2] = 1), parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
        break;
      case 2:
        parsed[index2] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index2] = peek() === 58 ? "&\f" : "", points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += from(character2);
    }
  while (character2 = next());
  return parsed;
}, getRules = function(value, points) {
  return dealloc(toRules(alloc(value), points));
}, fixedElements = /* @__PURE__ */ new WeakMap(), compat = function(element) {
  if (!(element.type !== "rule" || !element.parent || element.length < 1)) {
    for (var value = element.value, parent = element.parent, isImplicitRule = element.column === parent.column && element.line === parent.line; parent.type !== "rule"; )
      if (parent = parent.parent, !parent)
        return;
    if (!(element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) && !isImplicitRule) {
      fixedElements.set(element, true);
      for (var points = [], rules = getRules(value, points), parentRules = parent.props, i = 0, k2 = 0; i < rules.length; i++)
        for (var j = 0; j < parentRules.length; j++, k2++)
          element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
}, removeLabel = function(element) {
  if (element.type === "decl") {
    var value = element.value;
    value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98 && (element.return = "", element.value = "");
  }
}, ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", isIgnoringComment = function(element) {
  return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
}, createUnsafeSelectorsAlarm = function(cache) {
  return function(element, index2, children) {
    if (!(element.type !== "rule" || cache.compat)) {
      var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
      if (unsafePseudoClasses) {
        for (var isNested = !!element.parent, commentContainer = isNested ? element.parent.children : children, i = commentContainer.length - 1; i >= 0; i--) {
          var node2 = commentContainer[i];
          if (node2.line < element.line)
            break;
          if (node2.column < element.column) {
            if (isIgnoringComment(node2))
              return;
            break;
          }
        }
        unsafePseudoClasses.forEach(function(unsafePseudoClass) {
          console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, isImportRule = function(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
}, isPrependedWithRegularRules = function(index2, children) {
  for (var i = index2 - 1; i >= 0; i--)
    if (!isImportRule(children[i]))
      return true;
  return false;
}, nullifyElement = function(element) {
  element.type = "", element.value = "", element.return = "", element.children = "", element.props = "";
}, incorrectImportAlarm = function(element, index2, children) {
  isImportRule(element) && (element.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), nullifyElement(element)) : isPrependedWithRegularRules(index2, children) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), nullifyElement(element)));
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function(element, index2, children, callback) {
  if (element.length > -1 && !element.return)
    switch (element.type) {
      case DECLARATION:
        element.return = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
      case RULESET:
        if (element.length)
          return combine(element.props, function(value) {
            switch (match(value, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
              case "::placeholder":
                return serialize([copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }), copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }), copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })], callback);
            }
            return "";
          });
    }
}, isBrowser = typeof document < "u", getServerStylisCache = isBrowser ? void 0 : weakMemoize(function() {
  return memoize(function() {
    var cache = {};
    return function(name) {
      return cache[name];
    };
  });
}), defaultStylisPlugins = [prefixer], createCache = function(options) {
  var key = options.key;
  if (process.env.NODE_ENV !== "production" && !key)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (isBrowser && key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      dataEmotionAttribute.indexOf(" ") !== -1 && (document.head.appendChild(node2), node2.setAttribute("data-s", ""));
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(key))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
  var inserted = {}, container, nodesToHydrate = [];
  isBrowser && (container = options.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
    for (var attrib = node2.getAttribute("data-emotion").split(" "), i = 1; i < attrib.length; i++)
      inserted[attrib[i]] = true;
    nodesToHydrate.push(node2);
  }));
  var _insert, omnipresentPlugins = [compat, removeLabel];
  if (process.env.NODE_ENV !== "production" && omnipresentPlugins.push(createUnsafeSelectorsAlarm({ get compat() {
    return cache.compat;
  } }), incorrectImportAlarm), isBrowser) {
    var currentSheet, finalizingPlugins = [stringify, process.env.NODE_ENV !== "production" ? function(element) {
      element.root || (element.return ? currentSheet.insert(element.return) : element.value && element.type !== COMMENT && currentSheet.insert(element.value + "{}"));
    } : rulesheet(function(rule) {
      currentSheet.insert(rule);
    })], serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)), stylis = function(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet, process.env.NODE_ENV !== "production" && serialized.map !== void 0 && (currentSheet = { insert: function(rule) {
        sheet.insert(rule + serialized.map);
      } }), stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles), shouldCache && (cache.inserted[serialized.name] = true);
    };
  } else {
    var _finalizingPlugins = [stringify], _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins)), _stylis = function(styles) {
      return serialize(compile(styles), _serializer);
    }, serverStylisCache = getServerStylisCache(stylisPlugins)(key), getRules3 = function(selector, serialized) {
      var name = serialized.name;
      return serverStylisCache[name] === void 0 && (serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles)), serverStylisCache[name];
    };
    _insert = function(selector, serialized, sheet, shouldCache) {
      var name = serialized.name, rules = getRules3(selector, serialized);
      if (cache.compat === void 0)
        return shouldCache && (cache.inserted[name] = true), process.env.NODE_ENV === "development" && serialized.map !== void 0 ? rules + serialized.map : rules;
      if (shouldCache)
        cache.inserted[name] = rules;
      else
        return rules;
    };
  }
  var cache = { key, sheet: new StyleSheet({ key, container, nonce: options.nonce, speedy: options.speedy, prepend: options.prepend, insertionPoint: options.insertionPoint }), nonce: options.nonce, inserted, registered: {}, insert: _insert };
  return cache.sheet.hydrate(nodesToHydrate), cache;
};
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs()), hoistNonReactStatics = function(targetComponent, sourceComponent) {
  return (0, import_hoist_non_react_statics.default)(targetComponent, sourceComponent);
};
var isBrowser2 = typeof document < "u";
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  return classNames.split(" ").forEach(function(className) {
    registered[className] !== void 0 ? registeredStyles.push(registered[className] + ";") : rawClassName += className + " ";
  }), rawClassName;
}
var registerStyles = function(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  (isStringTag === false || isBrowser2 === false && cache.compat !== void 0) && cache.registered[className] === void 0 && (cache.registered[className] = serialized.styles);
}, insertStyles = function(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var stylesForSSR = "", current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      !isBrowser2 && maybeStyles !== void 0 && (stylesForSSR += maybeStyles), current = current.next;
    } while (current !== void 0);
    if (!isBrowser2 && stylesForSSR.length !== 0)
      return stylesForSSR;
  }
};
function murmur2(str) {
  for (var h = 0, k2, i = 0, len = str.length; len >= 4; ++i, len -= 4)
    k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24, k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16), k2 ^= k2 >>> 24, h = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255, h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  return h ^= h >>> 13, h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16), ((h ^ h >>> 15) >>> 0).toString(36);
}
var unitlessKeys = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", hyphenateRegex = /[A-Z]|^ms/g, animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g, isCustomProperty = function(property) {
  return property.charCodeAt(1) === 45;
}, isProcessableValue = function(value) {
  return value != null && typeof value != "boolean";
}, processStyleName = memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
}), processStyleValue = function(key, value) {
  switch (key) {
    case "animation":
    case "animationName":
      if (typeof value == "string")
        return value.replace(animationRegex, function(match2, p1, p2) {
          return cursor = { name: p1, styles: p2, next: cursor }, p1;
        });
  }
  return unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value == "number" && value !== 0 ? value + "px" : value;
};
process.env.NODE_ENV !== "production" && (contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, contentValues = ["normal", "none", "initial", "inherit", "unset"], oldProcessStyleValue = processStyleValue, msPattern = /^-ms-/, hyphenPattern = /-(.)/g, hyphenatedCache = {}, processStyleValue = function(key, value) {
  if (key === "content" && (typeof value != "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
  var processed = oldProcessStyleValue(key, value);
  return processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0 && (hyphenatedCache[key] = true, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
    return _char.toUpperCase();
  }) + "?")), processed;
});
var contentValuePattern, contentValues, oldProcessStyleValue, msPattern, hyphenPattern, hyphenatedCache, noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null)
    return "";
  if (interpolation.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && interpolation.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(noComponentSelectorMessage);
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean":
      return "";
    case "object": {
      if (interpolation.anim === 1)
        return cursor = { name: interpolation.name, styles: interpolation.styles, next: cursor }, interpolation.name;
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0)
          for (; next2 !== void 0; )
            cursor = { name: next2.name, styles: next2.styles, next: cursor }, next2 = next2.next;
        var styles = interpolation.styles + ";";
        return process.env.NODE_ENV !== "production" && interpolation.map !== void 0 && (styles += interpolation.map), styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor, result = interpolation(mergedProps);
        return cursor = previousCursor, handleInterpolation(mergedProps, registered, result);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var matched = [], replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          return matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + fakeVarName + "}";
        });
        matched.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + replaced + "`"));
      }
      break;
  }
  if (registered == null)
    return interpolation;
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj))
    for (var i = 0; i < obj.length; i++)
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
  else
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value != "object")
        registered != null && registered[value] !== void 0 ? string += _key + "{" + registered[value] + "}" : isProcessableValue(value) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";");
      else {
        if (_key === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(noComponentSelectorMessage);
        if (Array.isArray(value) && typeof value[0] == "string" && (registered == null || registered[value[0]] === void 0))
          for (var _i = 0; _i < value.length; _i++)
            isProcessableValue(value[_i]) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";");
        else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && _key === "undefined" && console.error(UNDEFINED_AS_OBJECT_KEY_ERROR), string += _key + "{" + interpolated + "}";
          }
        }
      }
    }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g, sourceMapPattern;
process.env.NODE_ENV !== "production" && (sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var cursor, serializeStyles = function(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] == "object" && args[0] !== null && args[0].styles !== void 0)
    return args[0];
  var stringMode = true, styles = "";
  cursor = void 0;
  var strings = args[0];
  strings == null || strings.raw === void 0 ? (stringMode = false, styles += handleInterpolation(mergedProps, registered, strings)) : (process.env.NODE_ENV !== "production" && strings[0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles += strings[0]);
  for (var i = 1; i < args.length; i++)
    styles += handleInterpolation(mergedProps, registered, args[i]), stringMode && (process.env.NODE_ENV !== "production" && strings[i] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles += strings[i]);
  var sourceMap;
  process.env.NODE_ENV !== "production" && (styles = styles.replace(sourceMapPattern, function(match3) {
    return sourceMap = match3, "";
  })), labelPattern.lastIndex = 0;
  for (var identifierName = "", match2; (match2 = labelPattern.exec(styles)) !== null; )
    identifierName += "-" + match2[1];
  var name = murmur2(styles) + identifierName;
  return process.env.NODE_ENV !== "production" ? { name, styles, map: sourceMap, next: cursor, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } } : { name, styles, next: cursor };
};
var import_use_insertion_effect_with_fallbacks = require$$1, isBrowser3 = typeof document < "u", hasOwn = {}.hasOwnProperty, EmotionCacheContext = React.createContext(typeof HTMLElement < "u" ? createCache({ key: "css" }) : null);
process.env.NODE_ENV !== "production" && (EmotionCacheContext.displayName = "EmotionCacheContext");
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function(func) {
  return (0, import_react3.forwardRef)(function(props, ref) {
    var cache = (0, import_react3.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
isBrowser3 || (withEmotionCache = function(func) {
  return function(props) {
    var cache = (0, import_react3.useContext)(EmotionCacheContext);
    return cache === null ? (cache = createCache({ key: "css" }), React.createElement(EmotionCacheContext.Provider, { value: cache }, func(props, cache))) : func(props, cache);
  };
});
var ThemeContext = React.createContext({});
process.env.NODE_ENV !== "production" && (ThemeContext.displayName = "EmotionThemeContext");
var useTheme = function() {
  return React.useContext(ThemeContext);
}, getTheme = function(outerTheme, theme3) {
  if (typeof theme3 == "function") {
    var mergedTheme = theme3(outerTheme);
    if (process.env.NODE_ENV !== "production" && (mergedTheme == null || typeof mergedTheme != "object" || Array.isArray(mergedTheme)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return mergedTheme;
  }
  if (process.env.NODE_ENV !== "production" && (theme3 == null || typeof theme3 != "object" || Array.isArray(theme3)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return _extends({}, outerTheme, theme3);
}, createCacheWithTheme = weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme3) {
    return getTheme(outerTheme, theme3);
  });
}), ThemeProvider = function(props) {
  var theme3 = React.useContext(ThemeContext);
  return props.theme !== theme3 && (theme3 = createCacheWithTheme(theme3)(props.theme)), React.createElement(ThemeContext.Provider, { value: theme3 }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || "Component", render = function(props, ref) {
    var theme3 = React.useContext(ThemeContext);
    return React.createElement(Component, _extends({ theme: theme3, ref }, props));
  }, WithTheme = React.forwardRef(render);
  return WithTheme.displayName = "WithTheme(" + componentName + ")", hoistNonReactStatics(WithTheme, Component);
}
var getLastPart = function(functionName) {
  var parts = functionName.split(".");
  return parts[parts.length - 1];
}, getFunctionNameFromStackTraceLine = function(line2) {
  var match2 = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line2);
  if (match2 || (match2 = /^([A-Za-z0-9$.]+)@/.exec(line2), match2))
    return getLastPart(match2[1]);
}, internalReactFunctionNames = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), sanitizeIdentifier = function(identifier2) {
  return identifier2.replace(/\$/g, "-");
}, getLabelFromStackTrace = function(stackTrace) {
  if (stackTrace)
    for (var lines = stackTrace.split(`
`), i = 0; i < lines.length; i++) {
      var functionName = getFunctionNameFromStackTraceLine(lines[i]);
      if (functionName) {
        if (internalReactFunctionNames.has(functionName))
          break;
        if (/^[A-Z]/.test(functionName))
          return sanitizeIdentifier(functionName);
      }
    }
}, typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", createEmotionProps = function(type, props) {
  if (process.env.NODE_ENV !== "production" && typeof props.css == "string" && props.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  var newProps = {};
  for (var key in props)
    hasOwn.call(props, key) && (newProps[key] = props[key]);
  if (newProps[typePropName] = type, process.env.NODE_ENV !== "production" && props.css && (typeof props.css != "object" || typeof props.css.name != "string" || props.css.name.indexOf("-") === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    label && (newProps[labelPropName] = label);
  }
  return newProps;
}, Insertion = function(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = (0, import_use_insertion_effect_with_fallbacks.useInsertionEffectAlwaysWithSyncFallback)(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!isBrowser3 && rules !== void 0) {
    for (var _ref2, serializedNames = serialized.name, next2 = serialized.next; next2 !== void 0; )
      serializedNames += " " + next2.name, next2 = next2.next;
    return React.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = { __html: rules }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
}, Emotion = withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  typeof cssProp == "string" && cache.registered[cssProp] !== void 0 && (cssProp = cache.registered[cssProp]);
  var WrappedComponent = props[typePropName], registeredStyles = [cssProp], className = "";
  typeof props.className == "string" ? className = getRegisteredStyles(cache.registered, registeredStyles, props.className) : props.className != null && (className = props.className + " ");
  var serialized = serializeStyles(registeredStyles, void 0, React.useContext(ThemeContext));
  if (process.env.NODE_ENV !== "production" && serialized.name.indexOf("-") === -1) {
    var labelFromStack = props[labelPropName];
    labelFromStack && (serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]));
  }
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props)
    hasOwn.call(props, key) && key !== "css" && key !== typePropName && (process.env.NODE_ENV === "production" || key !== labelPropName) && (newProps[key] = props[key]);
  return newProps.ref = ref, newProps.className = className, React.createElement(React.Fragment, null, React.createElement(Insertion, { cache, serialized, isStringTag: typeof WrappedComponent == "string" }), React.createElement(WrappedComponent, newProps));
});
process.env.NODE_ENV !== "production" && (Emotion.displayName = "EmotionCssPropInternal");
var Emotion$1 = Emotion;
var React2 = __toESM(React__default);
var import_use_insertion_effect_with_fallbacks2 = require$$1;
__toESM(require_extends());
__toESM(require_hoist_non_react_statics_cjs());
var pkg = { name: "@emotion/react", version: "11.11.4", main: "dist/emotion-react.cjs.js", module: "dist/emotion-react.esm.js", browser: { "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js" }, exports: { ".": { module: { worker: "./dist/emotion-react.worker.esm.js", browser: "./dist/emotion-react.browser.esm.js", default: "./dist/emotion-react.esm.js" }, import: "./dist/emotion-react.cjs.mjs", default: "./dist/emotion-react.cjs.js" }, "./jsx-runtime": { module: { worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js", browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js" }, import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js" }, "./_isolated-hnrs": { module: { worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js", browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js" }, import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js" }, "./jsx-dev-runtime": { module: { worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js", browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js" }, import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js" }, "./package.json": "./package.json", "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } }, types: "types/index.d.ts", files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.*"], sideEffects: false, author: "Emotion Contributors", license: "MIT", scripts: { "test:typescript": "dtslint types" }, dependencies: { "@babel/runtime": "^7.18.3", "@emotion/babel-plugin": "^11.11.0", "@emotion/cache": "^11.11.0", "@emotion/serialize": "^1.1.3", "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1", "@emotion/utils": "^1.2.1", "@emotion/weak-memoize": "^0.3.1", "hoist-non-react-statics": "^3.3.1" }, peerDependencies: { react: ">=16.8.0" }, peerDependenciesMeta: { "@types/react": { optional: true } }, devDependencies: { "@definitelytyped/dtslint": "0.0.112", "@emotion/css": "11.11.2", "@emotion/css-prettifier": "1.1.3", "@emotion/server": "11.11.0", "@emotion/styled": "11.11.0", "html-tag-names": "^1.1.2", react: "16.14.0", "svg-tag-names": "^1.1.1", typescript: "^4.5.5" }, repository: "https://github.com/emotion-js/emotion/tree/main/packages/react", publishConfig: { access: "public" }, "umd:main": "dist/emotion-react.umd.min.js", preconstruct: { entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"], umdName: "emotionReact", exports: { envConditions: ["browser", "worker"], extra: { "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } } } } }, jsx = function(type, props) {
  var args = arguments;
  if (props == null || !hasOwn.call(props, "css"))
    return React2.createElement.apply(void 0, args);
  var argsLength = args.length, createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1, createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++)
    createElementArgArray[i] = args[i];
  return React2.createElement.apply(null, createElementArgArray);
}, warnedAboutCssPropForGlobal = false, Global = withEmotionCache(function(props, cache) {
  process.env.NODE_ENV !== "production" && !warnedAboutCssPropForGlobal && (props.className || props.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), warnedAboutCssPropForGlobal = true);
  var styles = props.styles, serialized = serializeStyles([styles], void 0, React2.useContext(ThemeContext));
  if (!isBrowser3) {
    for (var _ref, serializedNames = serialized.name, serializedStyles = serialized.styles, next2 = serialized.next; next2 !== void 0; )
      serializedNames += " " + next2.name, serializedStyles += next2.styles, next2 = next2.next;
    var shouldCache = cache.compat === true, rules = cache.insert("", { name: serializedNames, styles: serializedStyles }, cache.sheet, shouldCache);
    return shouldCache ? null : React2.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = { __html: rules }, _ref.nonce = cache.sheet.nonce, _ref));
  }
  var sheetRef = React2.useRef();
  return (0, import_use_insertion_effect_with_fallbacks2.useInsertionEffectWithLayoutFallback)(function() {
    var key = cache.key + "-global", sheet = new cache.sheet.constructor({ key, nonce: cache.sheet.nonce, container: cache.sheet.container, speedy: cache.sheet.isSpeedy }), rehydrating = false, node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    return cache.sheet.tags.length && (sheet.before = cache.sheet.tags[0]), node2 !== null && (rehydrating = true, node2.setAttribute("data-emotion", key), sheet.hydrate([node2])), sheetRef.current = [sheet, rehydrating], function() {
      sheet.flush();
    };
  }, [cache]), (0, import_use_insertion_effect_with_fallbacks2.useInsertionEffectWithLayoutFallback)(function() {
    var sheetRefCurrent = sheetRef.current, sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0 && insertStyles(cache, serialized.next, true), sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element, sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]), null;
});
process.env.NODE_ENV !== "production" && (Global.displayName = "EmotionGlobal");
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
    args[_key] = arguments[_key];
  return serializeStyles(args);
}
var keyframes = function() {
  var insertable = css.apply(void 0, arguments), name = "animation-" + insertable.name;
  return { name, styles: "@keyframes " + name + "{" + insertable.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}, classnames = function classnames2(args) {
  for (var len = args.length, i = 0, cls = ""; i < len; i++) {
    var arg = args[i];
    if (arg != null) {
      var toAdd = void 0;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg))
            toAdd = classnames2(arg);
          else {
            process.env.NODE_ENV !== "production" && arg.styles !== void 0 && arg.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), toAdd = "";
            for (var k2 in arg)
              arg[k2] && k2 && (toAdd && (toAdd += " "), toAdd += k2);
          }
          break;
        }
        default:
          toAdd = arg;
      }
      toAdd && (cls && (cls += " "), cls += toAdd);
    }
  }
  return cls;
};
function merge(registered, css2, className) {
  var registeredStyles = [], rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  return registeredStyles.length < 2 ? className : rawClassName + css2(registeredStyles);
}
var Insertion3 = function(_ref) {
  var cache = _ref.cache, serializedArr = _ref.serializedArr, rules = (0, import_use_insertion_effect_with_fallbacks2.useInsertionEffectAlwaysWithSyncFallback)(function() {
    for (var rules2 = "", i = 0; i < serializedArr.length; i++) {
      var res = insertStyles(cache, serializedArr[i], false);
      !isBrowser3 && res !== void 0 && (rules2 += res);
    }
    if (!isBrowser3)
      return rules2;
  });
  if (!isBrowser3 && rules.length !== 0) {
    var _ref2;
    return React2.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function(serialized) {
      return serialized.name;
    }).join(" "), _ref2.dangerouslySetInnerHTML = { __html: rules }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
}, ClassNames = withEmotionCache(function(props, cache) {
  var hasRendered = false, serializedArr = [], css2 = function() {
    if (hasRendered && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
      args[_key] = arguments[_key];
    var serialized = serializeStyles(args, cache.registered);
    return serializedArr.push(serialized), registerStyles(cache, serialized, false), cache.key + "-" + serialized.name;
  }, cx = function() {
    if (hasRendered && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
      args[_key2] = arguments[_key2];
    return merge(cache.registered, css2, classnames(args));
  }, content = { css: css2, cx, theme: React2.useContext(ThemeContext) }, ele = props.children(content);
  return hasRendered = true, React2.createElement(React2.Fragment, null, React2.createElement(Insertion3, { cache, serializedArr }), ele);
});
process.env.NODE_ENV !== "production" && (ClassNames.displayName = "EmotionClassNames");
process.env.NODE_ENV !== "production" && (isBrowser5 = typeof document < "u", isTestEnv = typeof jest < "u" || typeof vi < "u", isBrowser5 && !isTestEnv && (globalContext = typeof globalThis < "u" ? globalThis : isBrowser5 ? window : commonjsGlobal, globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__", globalContext[globalKey] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), globalContext[globalKey] = true));
var isBrowser5, isTestEnv, globalContext, globalKey;
var import_use_insertion_effect_with_fallbacks3 = require$$1, testOmitPropsOnStringTag = isPropValid, testOmitPropsOnComponent = function(key) {
  return key !== "theme";
}, getDefaultShouldForwardProp = function(tag) {
  return typeof tag == "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
}, composeShouldForwardProps = function(tag, options, isReal) {
  var shouldForwardProp;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  return typeof shouldForwardProp != "function" && isReal && (shouldForwardProp = tag.__emotion_forwardProp), shouldForwardProp;
}, ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, isBrowser4 = typeof document < "u", Insertion5 = function(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = (0, import_use_insertion_effect_with_fallbacks3.useInsertionEffectAlwaysWithSyncFallback)(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!isBrowser4 && rules !== void 0) {
    for (var _ref2, serializedNames = serialized.name, next2 = serialized.next; next2 !== void 0; )
      serializedNames += " " + next2.name, next2 = next2.next;
    return React3.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = { __html: rules }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
}, createStyled = function createStyled2(tag, options) {
  if (process.env.NODE_ENV !== "production" && tag === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var isReal = tag.__emotion_real === tag, baseTag = isReal && tag.__emotion_base || tag, identifierName, targetClassName;
  options !== void 0 && (identifierName = options.label, targetClassName = options.target);
  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal), defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag), shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments, styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0 && styles.push("label:" + identifierName + ";"), args[0] == null || args[0].raw === void 0)
      styles.push.apply(styles, args);
    else {
      process.env.NODE_ENV !== "production" && args[0][0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2), styles.push(args[0][0]);
      for (var len = args.length, i = 1; i < len; i++)
        process.env.NODE_ENV !== "production" && args[0][i] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2), styles.push(args[i], args[0][i]);
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag, className = "", classInterpolations = [], mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props)
          mergedProps[key] = props[key];
        mergedProps.theme = React3.useContext(ThemeContext);
      }
      typeof props.className == "string" ? className = getRegisteredStyles(cache.registered, classInterpolations, props.className) : props.className != null && (className = props.className + " ");
      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name, targetClassName !== void 0 && (className += " " + targetClassName);
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp, newProps = {};
      for (var _key in props)
        shouldUseAs && _key === "as" || finalShouldForwardProp(_key) && (newProps[_key] = props[_key]);
      return newProps.className = className, newProps.ref = ref, React3.createElement(React3.Fragment, null, React3.createElement(Insertion5, { cache, serialized, isStringTag: typeof FinalTag == "string" }), React3.createElement(FinalTag, newProps));
    });
    return Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag == "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")", Styled.defaultProps = tag.defaultProps, Styled.__emotion_real = Styled, Styled.__emotion_base = baseTag, Styled.__emotion_styles = styles, Styled.__emotion_forwardProp = shouldForwardProp, Object.defineProperty(Styled, "toString", { value: function() {
      return targetClassName === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + targetClassName;
    } }), Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, { shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true) })).apply(void 0, styles);
    }, Styled;
  };
};
__toESM(require_extends());
var tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
function _assertThisInitialized(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _setPrototypeOf(o, p2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p22) {
    return o2.__proto__ = p22, o2;
  }, _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf(o);
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch {
    return typeof fn == "function";
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t;
  })();
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p2 = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p2, r.prototype), p2;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache < "u") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper, Class2);
  }, _wrapNativeSuper(Class);
}
var ERRORS = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
    args[_key] = arguments[_key];
  var a = args[0], b = [], c;
  for (c = 1; c < args.length; c += 1)
    b.push(args[c]);
  return b.forEach(function(d) {
    a = a.replace(/%[a-z]/, d);
  }), a;
}
var PolishedError = function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    if (process.env.NODE_ENV === "production")
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
        args[_key2 - 1] = arguments[_key2];
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(_wrapNativeSuper(Error));
function colorToInt(color2) {
  return Math.round(color2 * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert2) {
  if (convert2 === void 0 && (convert2 = convertToInt), saturation === 0)
    return convert2(lightness, lightness, lightness);
  var huePrime = (hue % 360 + 360) % 360 / 60, chroma = (1 - Math.abs(2 * lightness - 1)) * saturation, secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1)), red = 0, green = 0, blue = 0;
  huePrime >= 0 && huePrime < 1 ? (red = chroma, green = secondComponent) : huePrime >= 1 && huePrime < 2 ? (red = secondComponent, green = chroma) : huePrime >= 2 && huePrime < 3 ? (green = chroma, blue = secondComponent) : huePrime >= 3 && huePrime < 4 ? (green = secondComponent, blue = chroma) : huePrime >= 4 && huePrime < 5 ? (red = secondComponent, blue = chroma) : huePrime >= 5 && huePrime < 6 && (red = chroma, blue = secondComponent);
  var lightnessModification = lightness - chroma / 2, finalRed = red + lightnessModification, finalGreen = green + lightnessModification, finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function nameToHex(color2) {
  if (typeof color2 != "string")
    return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color2;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/, hexRgbaRegex = /^#[a-fA-F0-9]{8}$/, reducedHexRegex = /^#[a-fA-F0-9]{3}$/, reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/, rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color2) {
  if (typeof color2 != "string")
    throw new PolishedError(3);
  var normalizedColor = nameToHex(color2);
  if (normalizedColor.match(hexRegex))
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16) };
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16), alpha };
  }
  if (normalizedColor.match(reducedHexRegex))
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16) };
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16), alpha: _alpha };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched)
    return { red: parseInt("" + rgbMatched[1], 10), green: parseInt("" + rgbMatched[2], 10), blue: parseInt("" + rgbMatched[3], 10) };
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched)
    return { red: parseInt("" + rgbaMatched[1], 10), green: parseInt("" + rgbaMatched[2], 10), blue: parseInt("" + rgbaMatched[3], 10), alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4]) };
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10), saturation = parseInt("" + hslMatched[2], 10) / 100, lightness = parseInt("" + hslMatched[3], 10) / 100, rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")", hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched)
      throw new PolishedError(4, normalizedColor, rgbColorString);
    return { red: parseInt("" + hslRgbMatched[1], 10), green: parseInt("" + hslRgbMatched[2], 10), blue: parseInt("" + hslRgbMatched[3], 10) };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10), _saturation = parseInt("" + hslaMatched[2], 10) / 100, _lightness = parseInt("" + hslaMatched[3], 10) / 100, _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")", _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched)
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    return { red: parseInt("" + _hslRgbMatched[1], 10), green: parseInt("" + _hslRgbMatched[2], 10), blue: parseInt("" + _hslRgbMatched[3], 10), alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4]) };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color2) {
  var red = color2.red / 255, green = color2.green / 255, blue = color2.blue / 255, max2 = Math.max(red, green, blue), min2 = Math.min(red, green, blue), lightness = (max2 + min2) / 2;
  if (max2 === min2)
    return color2.alpha !== void 0 ? { hue: 0, saturation: 0, lightness, alpha: color2.alpha } : { hue: 0, saturation: 0, lightness };
  var hue, delta = max2 - min2, saturation = lightness > 0.5 ? delta / (2 - max2 - min2) : delta / (max2 + min2);
  switch (max2) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  return hue *= 60, color2.alpha !== void 0 ? { hue, saturation, lightness, alpha: color2.alpha } : { hue, saturation, lightness };
}
function parseToHsl(color2) {
  return rgbToHsl(parseToRgb(color2));
}
var reduceHexValue = function(value) {
  return value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6] ? "#" + value[1] + value[3] + value[5] : value;
}, reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color2) {
  return numberToHex(Math.round(color2 * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value, saturation, lightness) {
  if (typeof value == "number" && typeof saturation == "number" && typeof lightness == "number")
    return hslToHex(value, saturation, lightness);
  if (typeof value == "object" && saturation === void 0 && lightness === void 0)
    return hslToHex(value.hue, value.saturation, value.lightness);
  throw new PolishedError(1);
}
function hsla(value, saturation, lightness, alpha) {
  if (typeof value == "number" && typeof saturation == "number" && typeof lightness == "number" && typeof alpha == "number")
    return "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  if (typeof value == "object" && saturation === void 0 && lightness === void 0 && alpha === void 0)
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  throw new PolishedError(2);
}
function rgb(value, green, blue) {
  if (typeof value == "number" && typeof green == "number" && typeof blue == "number")
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  if (typeof value == "object" && green === void 0 && blue === void 0)
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == "string" && typeof secondValue == "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else {
    if (typeof firstValue == "number" && typeof secondValue == "number" && typeof thirdValue == "number" && typeof fourthValue == "number")
      return "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
    if (typeof firstValue == "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0)
      return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function(color2) {
  return typeof color2.red == "number" && typeof color2.green == "number" && typeof color2.blue == "number" && (typeof color2.alpha != "number" || typeof color2.alpha > "u");
}, isRgba = function(color2) {
  return typeof color2.red == "number" && typeof color2.green == "number" && typeof color2.blue == "number" && typeof color2.alpha == "number";
}, isHsl = function(color2) {
  return typeof color2.hue == "number" && typeof color2.saturation == "number" && typeof color2.lightness == "number" && (typeof color2.alpha != "number" || typeof color2.alpha > "u");
}, isHsla = function(color2) {
  return typeof color2.hue == "number" && typeof color2.saturation == "number" && typeof color2.lightness == "number" && typeof color2.alpha == "number";
};
function toColorString(color2) {
  if (typeof color2 != "object")
    throw new PolishedError(8);
  if (isRgba(color2))
    return rgba(color2);
  if (isRgb(color2))
    return rgb(color2);
  if (isHsla(color2))
    return hsla(color2);
  if (isHsl(color2))
    return hsl(color2);
  throw new PolishedError(8);
}
function curried(f, length2, acc) {
  return function() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length2 ? f.apply(this, combined) : curried(f, length2, combined);
  };
}
function curry(f) {
  return curried(f, f.length, []);
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
function darken(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
var curriedDarken = curry(darken), curriedDarken$1 = curriedDarken;
function lighten(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
var curriedLighten = curry(lighten), curriedLighten$1 = curriedLighten;
function opacify(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb(color2), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100) });
  return rgba(colorWithAlpha);
}
var curriedOpacify = curry(opacify), curriedOpacify$1 = curriedOpacify;
function transparentize(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb(color2), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100) });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = curry(transparentize), curriedTransparentize$1 = curriedTransparentize;
var color = { primary: "#FF4785", secondary: "#029CFD", tertiary: "#FAFBFC", ancillary: "#22a699", orange: "#FC521F", gold: "#FFAE00", green: "#66BF3C", seafoam: "#37D5D3", purple: "#6F2CAC", ultraviolet: "#2A0481", lightest: "#FFFFFF", lighter: "#F7FAFC", light: "#EEF3F6", mediumlight: "#ECF4F9", medium: "#D9E8F2", mediumdark: "#73828C", dark: "#5C6870", darker: "#454E54", darkest: "#2E3438", border: "hsla(203, 50%, 30%, 0.15)", positive: "#66BF3C", negative: "#FF4400", warning: "#E69D00", critical: "#FFFFFF", defaultText: "#2E3438", inverseText: "#FFFFFF", positiveText: "#448028", negativeText: "#D43900", warningText: "#A15C20" }, background = { app: "#F6F9FC", bar: color.lightest, content: color.lightest, preview: color.lightest, gridCellSize: 10, hoverable: curriedTransparentize$1(0.9, color.secondary), positive: "#E1FFD4", negative: "#FEDED2", warning: "#FFF5CF", critical: "#FF4400" }, typography = { fonts: { base: ['"Nunito Sans"', "-apple-system", '".SFNSText-Regular"', '"San Francisco"', "BlinkMacSystemFont", '"Segoe UI"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"].join(", "), mono: ["ui-monospace", "Menlo", "Monaco", '"Roboto Mono"', '"Oxygen Mono"', '"Ubuntu Monospace"', '"Source Code Pro"', '"Droid Sans Mono"', '"Courier New"', "monospace"].join(", ") }, weight: { regular: 400, bold: 700 }, size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 } };
var import_memoizerific = __toESM(memoizerific), createReset = (0, import_memoizerific.default)(1)(({ typography: typography2 }) => ({ body: { fontFamily: typography2.fonts.base, fontSize: typography2.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, "*": { boxSizing: "border-box" }, "h1, h2, h3, h4, h5, h6": { fontWeight: typography2.weight.regular, margin: 0, padding: 0 }, "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" }, sub: { fontSize: "0.8em", bottom: "-0.2em" }, sup: { fontSize: "0.8em", top: "-0.2em" }, "b, strong": { fontWeight: typography2.weight.bold }, hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" }, code: { fontFamily: typography2.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }, pre: { fontFamily: typography2.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0" } })), createGlobal = (0, import_memoizerific.default)(1)(({ color: color2, background: background2, typography: typography2 }) => {
  let resetStyles = createReset({ typography: typography2 });
  return { ...resetStyles, body: { ...resetStyles.body, color: color2.defaultText, background: background2.app, overflow: "hidden" }, hr: { ...resetStyles.hr, borderTop: `1px solid ${color2.border}` } };
});
var theme = { base: "light", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: background.app, appContentBg: color.lightest, appPreviewBg: color.lightest, appBorderColor: color.border, appBorderRadius: 4, fontBase: typography.fonts.base, fontCode: typography.fonts.mono, textColor: color.darkest, textInverseColor: color.lightest, textMutedColor: color.dark, barTextColor: color.mediumdark, barHoverColor: color.secondary, barSelectedColor: color.secondary, barBg: color.lightest, buttonBg: background.app, buttonBorder: color.medium, booleanBg: color.mediumlight, booleanSelectedBg: color.lightest, inputBg: color.lightest, inputBorder: color.border, inputTextColor: color.darkest, inputBorderRadius: 4 }, light_default = theme;
var theme2 = { base: "dark", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: "#222425", appContentBg: "#1B1C1D", appPreviewBg: color.lightest, appBorderColor: "rgba(255,255,255,.1)", appBorderRadius: 4, fontBase: typography.fonts.base, fontCode: typography.fonts.mono, textColor: "#C9CDCF", textInverseColor: "#222425", textMutedColor: "#798186", barTextColor: color.mediumdark, barHoverColor: color.secondary, barSelectedColor: color.secondary, barBg: "#292C2E", buttonBg: "#222425", buttonBorder: "rgba(255,255,255,.1)", booleanBg: "#222425", booleanSelectedBg: "#2E3438", inputBg: "#1B1C1D", inputBorder: "rgba(255,255,255,.1)", inputTextColor: color.lightest, inputBorderRadius: 4 }, dark_default = theme2;
var import_global = dist$2, import_client_logger = dist$1, { window: globalWindow } = import_global.global, mkColor = (color2) => ({ color: color2 }), isColorString = (color2) => typeof color2 != "string" ? (import_client_logger.logger.warn(`Color passed to theme object should be a string. Instead ${color2}(${typeof color2}) was passed.`), false) : true, isValidColorForPolished = (color2) => !/(gradient|var|calc)/.test(color2), applyPolished = (type, color2) => type === "darken" ? rgba(`${curriedDarken$1(1, color2)}`, 0.95) : type === "lighten" ? rgba(`${curriedLighten$1(1, color2)}`, 0.95) : color2, colorFactory = (type) => (color2) => {
  if (!isColorString(color2) || !isValidColorForPolished(color2))
    return color2;
  try {
    return applyPolished(type, color2);
  } catch {
    return color2;
  }
}, lightenColor = colorFactory("lighten"), darkenColor = colorFactory("darken"), getPreferredColorScheme = () => !globalWindow || !globalWindow.matchMedia ? "light" : globalWindow.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
var themes = { light: light_default, dark: dark_default, normal: light_default }, preferredColorScheme = getPreferredColorScheme(), create = (vars = { base: preferredColorScheme }, rest) => {
  let inherit = { ...themes[preferredColorScheme], ...themes[vars.base] || {}, ...vars, base: themes[vars.base] ? vars.base : preferredColorScheme };
  return { ...rest, ...inherit, barSelectedColor: vars.barSelectedColor || inherit.colorSecondary };
};
var easing = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" }, rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, float = keyframes`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, jiggle = keyframes`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, inlineGlow = css`
  animation: ${glow} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, hoverable = css`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, animation = { rotate360, glow, float, jiggle, inlineGlow, hoverable };
var chromeDark = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)", BASE_COLOR: "rgb(213, 213, 213)", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(227, 110, 236)", OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)", HTML_TAG_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)", HTML_COMMENT_COLOR: "rgb(137, 137, 137)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "rgb(145, 145, 145)", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "rgb(85, 85, 85)", TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)", TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)", TABLE_SORT_ICON_COLOR: "black", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, chromeLight = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "white", BASE_COLOR: "black", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(136, 19, 145)", OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)", HTML_TAG_COLOR: "rgb(168, 148, 166)", HTML_TAGNAME_COLOR: "rgb(136, 18, 128)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)", HTML_COMMENT_COLOR: "rgb(35, 110, 37)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "#6e6e6e", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "#aaa", TABLE_TH_BACKGROUND_COLOR: "#eee", TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)", TABLE_SORT_ICON_COLOR: "#6e6e6e", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, convertColors = (colors) => Object.entries(colors).reduce((acc, [k2, v2]) => ({ ...acc, [k2]: mkColor(v2) }), {}), create2 = ({ colors, mono }) => {
  let colorsObjs = convertColors(colors);
  return { token: { fontFamily: mono, WebkitFontSmoothing: "antialiased", "&.tag": colorsObjs.red3, "&.comment": { ...colorsObjs.green1, fontStyle: "italic" }, "&.prolog": { ...colorsObjs.green1, fontStyle: "italic" }, "&.doctype": { ...colorsObjs.green1, fontStyle: "italic" }, "&.cdata": { ...colorsObjs.green1, fontStyle: "italic" }, "&.string": colorsObjs.red1, "&.url": colorsObjs.cyan1, "&.symbol": colorsObjs.cyan1, "&.number": colorsObjs.cyan1, "&.boolean": colorsObjs.cyan1, "&.variable": colorsObjs.cyan1, "&.constant": colorsObjs.cyan1, "&.inserted": colorsObjs.cyan1, "&.atrule": colorsObjs.blue1, "&.keyword": colorsObjs.blue1, "&.attr-value": colorsObjs.blue1, "&.punctuation": colorsObjs.gray1, "&.operator": colorsObjs.gray1, "&.function": colorsObjs.gray1, "&.deleted": colorsObjs.red2, "&.important": { fontWeight: "bold" }, "&.bold": { fontWeight: "bold" }, "&.italic": { fontStyle: "italic" }, "&.class-name": colorsObjs.cyan2, "&.selector": colorsObjs.red3, "&.attr-name": colorsObjs.red4, "&.property": colorsObjs.red4, "&.regex": colorsObjs.red4, "&.entity": colorsObjs.red4, "&.directive.tag .tag": { background: "#ffff00", ...colorsObjs.gray1 } }, "language-json .token.boolean": colorsObjs.blue1, "language-json .token.number": colorsObjs.blue1, "language-json .token.property": colorsObjs.cyan2, namespace: { opacity: 0.7 } };
};
var lightSyntaxColors = { green1: "#008000", red1: "#A31515", red2: "#9a050f", red3: "#800000", red4: "#ff0000", gray1: "#393A34", cyan1: "#36acaa", cyan2: "#2B91AF", blue1: "#0000ff", blue2: "#00009f" }, darkSyntaxColors = { green1: "#7C7C7C", red1: "#92C379", red2: "#9a050f", red3: "#A8FF60", red4: "#96CBFE", gray1: "#EDEDED", cyan1: "#C6C5FE", cyan2: "#FFFFB6", blue1: "#B474DD", blue2: "#00009f" }, createColors = (vars) => ({ primary: vars.colorPrimary, secondary: vars.colorSecondary, tertiary: color.tertiary, ancillary: color.ancillary, orange: color.orange, gold: color.gold, green: color.green, seafoam: color.seafoam, purple: color.purple, ultraviolet: color.ultraviolet, lightest: color.lightest, lighter: color.lighter, light: color.light, mediumlight: color.mediumlight, medium: color.medium, mediumdark: color.mediumdark, dark: color.dark, darker: color.darker, darkest: color.darkest, border: color.border, positive: color.positive, negative: color.negative, warning: color.warning, critical: color.critical, defaultText: vars.textColor || color.darkest, inverseText: vars.textInverseColor || color.lightest, positiveText: color.positiveText, negativeText: color.negativeText, warningText: color.warningText }), convert = (inherit = themes[getPreferredColorScheme()]) => {
  let { base, colorPrimary, colorSecondary, appBg, appContentBg, appPreviewBg, appBorderColor, appBorderRadius, fontBase, fontCode, textColor, textInverseColor, barTextColor, barHoverColor, barSelectedColor, barBg, buttonBg, buttonBorder, booleanBg, booleanSelectedBg, inputBg, inputBorder, inputTextColor, inputBorderRadius, brandTitle, brandUrl, brandImage, brandTarget, gridCellSize, ...rest } = inherit;
  return { ...rest, base, color: createColors(inherit), background: { app: appBg, bar: barBg, content: appContentBg, preview: appPreviewBg, gridCellSize: gridCellSize || background.gridCellSize, hoverable: background.hoverable, positive: background.positive, negative: background.negative, warning: background.warning, critical: background.critical }, typography: { fonts: { base: fontBase, mono: fontCode }, weight: typography.weight, size: typography.size }, animation, easing, input: { background: inputBg, border: inputBorder, borderRadius: inputBorderRadius, color: inputTextColor }, button: { background: buttonBg || inputBg, border: buttonBorder || inputBorder }, boolean: { background: booleanBg || inputBorder, selectedBackground: booleanSelectedBg || inputBg }, layoutMargin: 10, appBorderColor, appBorderRadius, barTextColor, barHoverColor: barHoverColor || colorSecondary, barSelectedColor: barSelectedColor || colorSecondary, barBg, brand: { title: brandTitle, url: brandUrl, image: brandImage || (brandTitle ? null : void 0), target: brandTarget }, code: create2({ colors: base === "light" ? lightSyntaxColors : darkSyntaxColors, mono: fontCode }), addonActionsTheme: { ...base === "light" ? chromeLight : chromeDark, BASE_FONT_FAMILY: fontCode, BASE_FONT_SIZE: typography.size.s2 - 1, BASE_LINE_HEIGHT: "18px", BASE_BACKGROUND_COLOR: "transparent", BASE_COLOR: textColor, ARROW_COLOR: curriedOpacify$1(0.2, appBorderColor), ARROW_MARGIN_RIGHT: 4, ARROW_FONT_SIZE: 8, TREENODE_FONT_FAMILY: fontCode, TREENODE_FONT_SIZE: typography.size.s2 - 1, TREENODE_LINE_HEIGHT: "18px", TREENODE_PADDING_LEFT: 12 } };
};
var import_client_logger2 = dist$1;
var isEmpty = (o) => Object.keys(o).length === 0, isObject = (o) => o != null && typeof o == "object", hasOwnProperty = (o, ...args) => Object.prototype.hasOwnProperty.call(o, ...args);
var makeObjectWithoutPrototype = () => /* @__PURE__ */ Object.create(null);
var deletedDiff = (lhs, rhs) => lhs === rhs || !isObject(lhs) || !isObject(rhs) ? {} : Object.keys(lhs).reduce((acc, key) => {
  if (hasOwnProperty(rhs, key)) {
    let difference = deletedDiff(lhs[key], rhs[key]);
    return isObject(difference) && isEmpty(difference) || (acc[key] = difference), acc;
  }
  return acc[key] = void 0, acc;
}, makeObjectWithoutPrototype()), deleted_default = deletedDiff;
function dedent(templ) {
  for (var values = [], _i = 1; _i < arguments.length; _i++)
    values[_i - 1] = arguments[_i];
  var strings = Array.from(typeof templ == "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    return matches ? arr.concat(matches.map(function(match2) {
      var _a, _b;
      return (_b = (_a = match2.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    })) : arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp(`
[	 ]{` + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, `
`);
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  return values.forEach(function(value, i) {
    var endentations = string.match(/(?:^|\n)( *)$/), endentation = endentations ? endentations[1] : "", indentedValue = value;
    typeof value == "string" && value.includes(`
`) && (indentedValue = String(value).split(`
`).map(function(str, i2) {
      return i2 === 0 ? str : "" + endentation + str;
    }).join(`
`)), string += indentedValue + strings[i + 1];
  }), string;
}
var ensure = (input) => {
  if (!input)
    return convert(light_default);
  let missing = deleted_default(light_default, input);
  return Object.keys(missing).length && import_client_logger2.logger.warn(dedent`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `, missing), convert(input);
};
var ignoreSsrWarning = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
var Ct = (s) => {
  switch (s) {
    case "success":
      return $t;
    case "info":
      return _t;
    case "warning":
      return Wt;
    case "error":
      return Ut;
    default:
      return null;
  }
}, Ft = Array(12).fill(0), It = ({ visible: s }) => React__default.createElement("div", { className: "sonner-loading-wrapper", "data-visible": s }, React__default.createElement("div", { className: "sonner-spinner" }, Ft.map((o, t) => React__default.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${t}` })))), $t = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, React__default.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Wt = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, React__default.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), _t = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, React__default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Ut = React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, React__default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }));
var Dt = () => {
  let [s, o] = React__default.useState(document.hidden);
  return React__default.useEffect(() => {
    let t = () => {
      o(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), s;
};
var ct = 1, ut = class {
  constructor() {
    this.subscribe = (o) => (this.subscribers.push(o), () => {
      let t = this.subscribers.indexOf(o);
      this.subscribers.splice(t, 1);
    });
    this.publish = (o) => {
      this.subscribers.forEach((t) => t(o));
    };
    this.addToast = (o) => {
      this.publish(o), this.toasts = [...this.toasts, o];
    };
    this.create = (o) => {
      var b;
      let { message: t, ...n } = o, h = typeof (o == null ? void 0 : o.id) == "number" || ((b = o.id) == null ? void 0 : b.length) > 0 ? o.id : ct++, u2 = this.toasts.find((d) => d.id === h), g = o.dismissible === void 0 ? true : o.dismissible;
      return u2 ? this.toasts = this.toasts.map((d) => d.id === h ? (this.publish({ ...d, ...o, id: h, title: t }), { ...d, ...o, id: h, dismissible: g, title: t }) : d) : this.addToast({ title: t, ...n, dismissible: g, id: h }), h;
    };
    this.dismiss = (o) => (o || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: o, dismiss: true })), o);
    this.message = (o, t) => this.create({ ...t, message: o });
    this.error = (o, t) => this.create({ ...t, message: o, type: "error" });
    this.success = (o, t) => this.create({ ...t, type: "success", message: o });
    this.info = (o, t) => this.create({ ...t, type: "info", message: o });
    this.warning = (o, t) => this.create({ ...t, type: "warning", message: o });
    this.loading = (o, t) => this.create({ ...t, type: "loading", message: o });
    this.promise = (o, t) => {
      if (!t)
        return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: o, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let h = o instanceof Promise ? o : o(), u2 = n !== void 0;
      return h.then(async (g) => {
        if (Ot(g) && !g.ok) {
          u2 = false;
          let b = typeof t.error == "function" ? await t.error(`HTTP error! status: ${g.status}`) : t.error, d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${g.status}`) : t.description;
          this.create({ id: n, type: "error", message: b, description: d });
        } else if (t.success !== void 0) {
          u2 = false;
          let b = typeof t.success == "function" ? await t.success(g) : t.success, d = typeof t.description == "function" ? await t.description(g) : t.description;
          this.create({ id: n, type: "success", message: b, description: d });
        }
      }).catch(async (g) => {
        if (t.error !== void 0) {
          u2 = false;
          let b = typeof t.error == "function" ? await t.error(g) : t.error, d = typeof t.description == "function" ? await t.description(g) : t.description;
          this.create({ id: n, type: "error", message: b, description: d });
        }
      }).finally(() => {
        var g;
        u2 && (this.dismiss(n), n = void 0), (g = t.finally) == null || g.call(t);
      }), n;
    };
    this.custom = (o, t) => {
      let n = (t == null ? void 0 : t.id) || ct++;
      return this.create({ jsx: o(n), id: n, ...t }), n;
    };
    this.subscribers = [], this.toasts = [];
  }
}, v = new ut(), Vt = (s, o) => {
  let t = (o == null ? void 0 : o.id) || ct++;
  return v.addToast({ title: s, ...o, id: t }), t;
}, Ot = (s) => s && typeof s == "object" && "ok" in s && typeof s.ok == "boolean" && "status" in s && typeof s.status == "number", Kt = Vt, Xt = () => v.toasts;
Object.assign(Kt, { success: v.success, info: v.info, warning: v.warning, error: v.error, custom: v.custom, message: v.message, promise: v.promise, dismiss: v.dismiss, loading: v.loading }, { getHistory: Xt });
function ft(s, { insertAt: o } = {}) {
  if (typeof document == "undefined")
    return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", o === "top" && t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = s : n.appendChild(document.createTextNode(s));
}
ft(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function U(s) {
  return s.label !== void 0;
}
var qt = 3, Qt = "32px", Zt = 4e3, te = 356, ee = 14, oe = 20, ae = 200;
function ne(...s) {
  return s.filter(Boolean).join(" ");
}
var se = (s) => {
  var yt, xt, vt, wt, Tt, St, Rt, Et, Nt, Pt;
  let { invert: o, toast: t, unstyled: n, interacting: h, setHeights: u2, visibleToasts: g, heights: b, index: d, toasts: q, expanded: $2, removeToast: V2, defaultRichColors: Q2, closeButton: i, style: O, cancelButtonStyle: K2, actionButtonStyle: Z2, className: tt = "", descriptionClassName: et = "", duration: X2, position: ot, gap: w, loadingIcon: j, expandByDefault: W2, classNames: r, icons: I, closeButtonAriaLabel: at = "Close toast", pauseWhenPageIsHidden: k2, cn: T2 } = s, [z, nt] = React__default.useState(false), [D2, H2] = React__default.useState(false), [st, N2] = React__default.useState(false), [M2, rt] = React__default.useState(false), [c, m2] = React__default.useState(0), [y, S] = React__default.useState(0), A = React__default.useRef(null), l = React__default.useRef(null), _ = d === 0, J2 = d + 1 <= g, x = t.type, P = t.dismissible !== false, Mt = t.className || "", At = t.descriptionClassName || "", G2 = React__default.useMemo(() => b.findIndex((a) => a.toastId === t.id) || 0, [b, t.id]), Lt = React__default.useMemo(() => {
    var a;
    return (a = t.closeButton) != null ? a : i;
  }, [t.closeButton, i]), mt = React__default.useMemo(() => t.duration || X2 || Zt, [t.duration, X2]), it = React__default.useRef(0), Y2 = React__default.useRef(0), pt = React__default.useRef(0), F2 = React__default.useRef(null), [gt, zt] = ot.split("-"), ht = React__default.useMemo(() => b.reduce((a, f, p2) => p2 >= G2 ? a : a + f.height, 0), [b, G2]), bt = Dt(), jt = t.invert || o, lt = x === "loading";
  Y2.current = React__default.useMemo(() => G2 * w + ht, [G2, ht]), React__default.useEffect(() => {
    nt(true);
  }, []), React__default.useLayoutEffect(() => {
    if (!z)
      return;
    let a = l.current, f = a.style.height;
    a.style.height = "auto";
    let p2 = a.getBoundingClientRect().height;
    a.style.height = f, S(p2), u2((B2) => B2.find((R) => R.toastId === t.id) ? B2.map((R) => R.toastId === t.id ? { ...R, height: p2 } : R) : [{ toastId: t.id, height: p2, position: t.position }, ...B2]);
  }, [z, t.title, t.description, u2, t.id]);
  let L = React__default.useCallback(() => {
    H2(true), m2(Y2.current), u2((a) => a.filter((f) => f.toastId !== t.id)), setTimeout(() => {
      V2(t);
    }, ae);
  }, [t, V2, u2, Y2]);
  React__default.useEffect(() => {
    if (t.promise && x === "loading" || t.duration === 1 / 0 || t.type === "loading")
      return;
    let a, f = mt;
    return $2 || h || k2 && bt ? (() => {
      if (pt.current < it.current) {
        let C = (/* @__PURE__ */ new Date()).getTime() - it.current;
        f = f - C;
      }
      pt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      f !== 1 / 0 && (it.current = (/* @__PURE__ */ new Date()).getTime(), a = setTimeout(() => {
        var C;
        (C = t.onAutoClose) == null || C.call(t, t), L();
      }, f));
    })(), () => clearTimeout(a);
  }, [$2, h, W2, t, mt, L, t.promise, x, k2, bt]), React__default.useEffect(() => {
    let a = l.current;
    if (a) {
      let f = a.getBoundingClientRect().height;
      return S(f), u2((p2) => [{ toastId: t.id, height: f, position: t.position }, ...p2]), () => u2((p2) => p2.filter((B2) => B2.toastId !== t.id));
    }
  }, [u2, t.id]), React__default.useEffect(() => {
    t.delete && L();
  }, [L, t.delete]);
  function Yt() {
    return I != null && I.loading ? React__default.createElement("div", { className: "sonner-loader", "data-visible": x === "loading" }, I.loading) : j ? React__default.createElement("div", { className: "sonner-loader", "data-visible": x === "loading" }, j) : React__default.createElement(It, { visible: x === "loading" });
  }
  return React__default.createElement("li", { "aria-live": t.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: l, className: T2(tt, Mt, r == null ? void 0 : r.toast, (yt = t == null ? void 0 : t.classNames) == null ? void 0 : yt.toast, r == null ? void 0 : r.default, r == null ? void 0 : r[x], (xt = t == null ? void 0 : t.classNames) == null ? void 0 : xt[x]), "data-sonner-toast": "", "data-rich-colors": (vt = t.richColors) != null ? vt : Q2, "data-styled": !(t.jsx || t.unstyled || n), "data-mounted": z, "data-promise": !!t.promise, "data-removed": D2, "data-visible": J2, "data-y-position": gt, "data-x-position": zt, "data-index": d, "data-front": _, "data-swiping": st, "data-dismissible": P, "data-type": x, "data-invert": jt, "data-swipe-out": M2, "data-expanded": !!($2 || W2 && z), style: { "--index": d, "--toasts-before": d, "--z-index": q.length - d, "--offset": `${D2 ? c : Y2.current}px`, "--initial-height": W2 ? "auto" : `${y}px`, ...O, ...t.style }, onPointerDown: (a) => {
    lt || !P || (A.current = /* @__PURE__ */ new Date(), m2(Y2.current), a.target.setPointerCapture(a.pointerId), a.target.tagName !== "BUTTON" && (N2(true), F2.current = { x: a.clientX, y: a.clientY }));
  }, onPointerUp: () => {
    var B2, C, R, dt;
    if (M2 || !P)
      return;
    F2.current = null;
    let a = Number(((B2 = l.current) == null ? void 0 : B2.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), f = (/* @__PURE__ */ new Date()).getTime() - ((C = A.current) == null ? void 0 : C.getTime()), p2 = Math.abs(a) / f;
    if (Math.abs(a) >= oe || p2 > 0.11) {
      m2(Y2.current), (R = t.onDismiss) == null || R.call(t, t), L(), rt(true);
      return;
    }
    (dt = l.current) == null || dt.style.setProperty("--swipe-amount", "0px"), N2(false);
  }, onPointerMove: (a) => {
    var Bt;
    if (!F2.current || !P)
      return;
    let f = a.clientY - F2.current.y, p2 = a.clientX - F2.current.x, C = (gt === "top" ? Math.min : Math.max)(0, f), R = a.pointerType === "touch" ? 10 : 2;
    Math.abs(C) > R ? (Bt = l.current) == null || Bt.style.setProperty("--swipe-amount", `${f}px`) : Math.abs(p2) > R && (F2.current = null);
  } }, Lt && !t.jsx ? React__default.createElement("button", { "aria-label": at, "data-disabled": lt, "data-close-button": true, onClick: lt || !P ? () => {
  } : () => {
    var a;
    L(), (a = t.onDismiss) == null || a.call(t, t);
  }, className: T2(r == null ? void 0 : r.closeButton, (wt = t == null ? void 0 : t.classNames) == null ? void 0 : wt.closeButton) }, React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, React__default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), React__default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, t.jsx || React__default.isValidElement(t.title) ? t.jsx || t.title : React__default.createElement(React__default.Fragment, null, x || t.icon || t.promise ? React__default.createElement("div", { "data-icon": "", className: T2(r == null ? void 0 : r.icon, (Tt = t == null ? void 0 : t.classNames) == null ? void 0 : Tt.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Yt() : null, t.type !== "loading" ? t.icon || (I == null ? void 0 : I[x]) || Ct(x) : null) : null, React__default.createElement("div", { "data-content": "", className: T2(r == null ? void 0 : r.content, (St = t == null ? void 0 : t.classNames) == null ? void 0 : St.content) }, React__default.createElement("div", { "data-title": "", className: T2(r == null ? void 0 : r.title, (Rt = t == null ? void 0 : t.classNames) == null ? void 0 : Rt.title) }, t.title), t.description ? React__default.createElement("div", { "data-description": "", className: T2(et, At, r == null ? void 0 : r.description, (Et = t == null ? void 0 : t.classNames) == null ? void 0 : Et.description) }, t.description) : null), React__default.isValidElement(t.cancel) ? t.cancel : t.cancel && U(t.cancel) ? React__default.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || K2, onClick: (a) => {
    var f, p2;
    U(t.cancel) && P && ((p2 = (f = t.cancel).onClick) == null || p2.call(f, a), L());
  }, className: T2(r == null ? void 0 : r.cancelButton, (Nt = t == null ? void 0 : t.classNames) == null ? void 0 : Nt.cancelButton) }, t.cancel.label) : null, React__default.isValidElement(t.action) ? t.action : t.action && U(t.action) ? React__default.createElement("button", { "data-button": true, "data-action": true, style: t.actionButtonStyle || Z2, onClick: (a) => {
    var f, p2;
    U(t.action) && (a.defaultPrevented || ((p2 = (f = t.action).onClick) == null || p2.call(f, a), L()));
  }, className: T2(r == null ? void 0 : r.actionButton, (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt.actionButton) }, t.action.label) : null));
};
function Ht() {
  if (typeof window == "undefined" || typeof document == "undefined")
    return "ltr";
  let s = document.documentElement.getAttribute("dir");
  return s === "auto" || !s ? window.getComputedStyle(document.documentElement).direction : s;
}
var Te = (s) => {
  let { invert: o, position: t = "bottom-right", hotkey: n = ["altKey", "KeyT"], expand: h, closeButton: u2, className: g, offset: b, theme: d = "light", richColors: q, duration: $2, style: V2, visibleToasts: Q2 = qt, toastOptions: i, dir: O = Ht(), gap: K2 = ee, loadingIcon: Z2, icons: tt, containerAriaLabel: et = "Notifications", pauseWhenPageIsHidden: X2, cn: ot = ne } = s, [w, j] = React__default.useState([]), W2 = React__default.useMemo(() => Array.from(new Set([t].concat(w.filter((c) => c.position).map((c) => c.position)))), [w, t]), [r, I] = React__default.useState([]), [at, k2] = React__default.useState(false), [T2, z] = React__default.useState(false), [nt, D2] = React__default.useState(d !== "system" ? d : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), H2 = React__default.useRef(null), st = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N2 = React__default.useRef(null), M2 = React__default.useRef(false), rt = React__default.useCallback((c) => {
    var m2;
    (m2 = w.find((y) => y.id === c.id)) != null && m2.delete || v.dismiss(c.id), j((y) => y.filter(({ id: S }) => S !== c.id));
  }, [w]);
  return React__default.useEffect(() => v.subscribe((c) => {
    if (c.dismiss) {
      j((m2) => m2.map((y) => y.id === c.id ? { ...y, delete: true } : y));
      return;
    }
    setTimeout(() => {
      ReactDOM__default.flushSync(() => {
        j((m2) => {
          let y = m2.findIndex((S) => S.id === c.id);
          return y !== -1 ? [...m2.slice(0, y), { ...m2[y], ...c }, ...m2.slice(y + 1)] : [c, ...m2];
        });
      });
    });
  }), []), React__default.useEffect(() => {
    if (d !== "system") {
      D2(d);
      return;
    }
    d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D2("dark") : D2("light")), typeof window != "undefined" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: c }) => {
      D2(c ? "dark" : "light");
    });
  }, [d]), React__default.useEffect(() => {
    w.length <= 1 && k2(false);
  }, [w]), React__default.useEffect(() => {
    let c = (m2) => {
      var S, A;
      n.every((l) => m2[l] || m2.code === l) && (k2(true), (S = H2.current) == null || S.focus()), m2.code === "Escape" && (document.activeElement === H2.current || (A = H2.current) != null && A.contains(document.activeElement)) && k2(false);
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [n]), React__default.useEffect(() => {
    if (H2.current)
      return () => {
        N2.current && (N2.current.focus({ preventScroll: true }), N2.current = null, M2.current = false);
      };
  }, [H2.current]), w.length ? React__default.createElement("section", { "aria-label": `${et} ${st}`, tabIndex: -1 }, W2.map((c, m2) => {
    var A;
    let [y, S] = c.split("-");
    return React__default.createElement("ol", { key: c, dir: O === "auto" ? Ht() : O, tabIndex: -1, ref: H2, className: g, "data-sonner-toaster": true, "data-theme": nt, "data-y-position": y, "data-x-position": S, style: { "--front-toast-height": `${((A = r[0]) == null ? void 0 : A.height) || 0}px`, "--offset": typeof b == "number" ? `${b}px` : b || Qt, "--width": `${te}px`, "--gap": `${K2}px`, ...V2 }, onBlur: (l) => {
      M2.current && !l.currentTarget.contains(l.relatedTarget) && (M2.current = false, N2.current && (N2.current.focus({ preventScroll: true }), N2.current = null));
    }, onFocus: (l) => {
      l.target instanceof HTMLElement && l.target.dataset.dismissible === "false" || M2.current || (M2.current = true, N2.current = l.relatedTarget);
    }, onMouseEnter: () => k2(true), onMouseMove: () => k2(true), onMouseLeave: () => {
      T2 || k2(false);
    }, onPointerDown: (l) => {
      l.target instanceof HTMLElement && l.target.dataset.dismissible === "false" || z(true);
    }, onPointerUp: () => z(false) }, w.filter((l) => !l.position && m2 === 0 || l.position === c).map((l, _) => {
      var J2, x;
      return React__default.createElement(se, { key: l.id, icons: tt, index: _, toast: l, defaultRichColors: q, duration: (J2 = i == null ? void 0 : i.duration) != null ? J2 : $2, className: i == null ? void 0 : i.className, descriptionClassName: i == null ? void 0 : i.descriptionClassName, invert: o, visibleToasts: Q2, closeButton: (x = i == null ? void 0 : i.closeButton) != null ? x : u2, interacting: T2, position: c, style: i == null ? void 0 : i.style, unstyled: i == null ? void 0 : i.unstyled, classNames: i == null ? void 0 : i.classNames, cancelButtonStyle: i == null ? void 0 : i.cancelButtonStyle, actionButtonStyle: i == null ? void 0 : i.actionButtonStyle, removeToast: rt, toasts: w.filter((P) => P.position == l.position), heights: r.filter((P) => P.position == l.position), setHeights: I, expandByDefault: h, gap: K2, loadingIcon: Z2, expanded: at, pauseWhenPageIsHidden: X2, cn: ot });
    }));
  })) : null;
};
const Toaster = ({ ...props }) => {
  const { theme: theme3 = "system" } = dist.useTheme();
  return /* @__PURE__ */ jsx$1(
    Te,
    {
      theme: theme3,
      toastOptions: {
        classNames: {
          toast: "bg-background-primary border-rounded border-primary/30",
          closeButton: "bg-primary text-primary-foreground hover:text-primary-foreground/50",
          info: "bg-accent/100 text-accent-foreground",
          success: "bg-success text-success-foreground",
          error: "bg-destructive text-destructive-foreground"
        }
      },
      ...props
    }
  );
};
const ValueDisplayVariant = {
  default: "default",
  directionFor: "directionFor",
  directionAgainst: "directionAgainst",
  attestorFor: "attestorFor",
  attestorAgainst: "attestorAgainst"
};
cva(
  "inline-flex justify-center min-w-16 bg-primary/10 py-1 px-2",
  {
    variants: {
      variant: {
        [ValueDisplayVariant.default]: "",
        [ValueDisplayVariant.directionFor]: "bg-success/20 text-success",
        [ValueDisplayVariant.directionAgainst]: "bg-destructive/20 text-destructive",
        [ValueDisplayVariant.attestorFor]: "text-success",
        [ValueDisplayVariant.attestorAgainst]: "text-destructive"
      }
    },
    defaultVariants: { variant: ValueDisplayVariant.default }
  }
);
const BannerVariant = {
  info: "info",
  warning: "warning",
  error: "error"
};
cva(
  "flex w-full justify-between items-center rounded-tl-lg rounded-tr-lg bg-gradient-to-r max-sm:flex-col max-sm:gap-3",
  {
    variants: {
      variant: {
        [BannerVariant.info]: "from-accent/60 to-accent/10",
        [BannerVariant.warning]: "from-warning/60 to-warning/10",
        [BannerVariant.error]: "from-destructive/60 to-destructive/10"
      }
    },
    defaultVariants: {
      variant: BannerVariant.info
    }
  }
);
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef$1(onEscapeKeyDownProp);
  React$1.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React$1.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = React$1.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React$1.useContext(DismissableLayerContext);
    const [node2, setNode] = React$1.useState(null);
    const ownerDocument = node2?.ownerDocument ?? globalThis?.document;
    const [, force] = React$1.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node22) => setNode(node22));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index2 = node2 ? layers.indexOf(node2) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch)
        return;
      onPointerDownOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented)
        onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch)
        return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented)
        onDismiss?.();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index2 === context.layers.size - 1;
      if (!isHighestLayer)
        return;
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React$1.useEffect(() => {
      if (!node2)
        return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node2);
      }
      context.layers.add(node2);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node2, ownerDocument, disableOutsidePointerEvents, context]);
    React$1.useEffect(() => {
      return () => {
        if (!node2)
          return;
        context.layers.delete(node2);
        context.layersWithOutsidePointerEventsDisabled.delete(node2);
        dispatchUpdate();
      };
    }, [node2, context]);
    React$1.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsx$1(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React$1.forwardRef((props, forwardedRef) => {
  const context = React$1.useContext(DismissableLayerContext);
  const ref = React$1.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React$1.useEffect(() => {
    const node2 = ref.current;
    if (node2) {
      context.branches.add(node2);
      return () => {
        context.branches.delete(node2);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsx$1(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React$1.useRef(false);
  const handleClickRef = React$1.useRef(() => {
  });
  React$1.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef$1(onFocusOutside);
  const isFocusInsideReactTreeRef = React$1.useRef(false);
  React$1.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler)
    target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React$1.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React$1.useState(null);
  const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React$1.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node2) => setContainer(node2));
  const focusScope = React$1.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React$1.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container)
          return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0)
            focus(container);
        }
      };
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container)
        mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React$1.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React$1.useCallback(
    (event) => {
      if (!loop && !trapped)
        return;
      if (focusScope.paused)
        return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2)
            event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop)
              focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop)
              focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ jsx$1(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node2) => {
      const isHiddenInput = node2.tagName === "INPUT" && node2.type === "hidden";
      if (node2.disabled || node2.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node2.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container }))
      return element;
  }
}
function isHidden(node2, { upTo }) {
  if (getComputedStyle(node2).visibility === "hidden")
    return true;
  while (node2) {
    if (upTo !== void 0 && node2 === upTo)
      return false;
    if (getComputedStyle(node2).display === "none")
      return true;
    node2 = node2.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
var PORTAL_NAME$2 = "Portal";
var Portal$1 = React$1.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React$1.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? ReactDOM__default.createPortal(/* @__PURE__ */ jsx$1(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal$1.displayName = PORTAL_NAME$2;
var count = 0;
function useFocusGuards() {
  React$1.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node2) => node2.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}
var effectCar = createSidecarMedium();
var nothing = function() {
  return;
};
var RemoveScroll = React$1.forwardRef(function(props, parentRef) {
  var ref = React$1.useRef(null);
  var _a = React$1.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React$1.createElement(
    React$1.Fragment,
    null,
    enabled && React$1.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React$1.cloneElement(React$1.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React$1.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    var options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var nonPassive = passiveSupported ? { passive: false } : false;
var alwaysContainsScroll = function(node2) {
  return node2.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node2, overflow) {
  var styles = window.getComputedStyle(node2);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node2) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node2) {
  return elementCanBeScrolled(node2, "overflowY");
};
var elementCouldBeHScrolled = function(node2) {
  return elementCanBeScrolled(node2, "overflowX");
};
var locationCouldBeScrolled = function(axis, node2) {
  var ownerDocument = node2.ownerDocument;
  var current = node2;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node2) {
  return axis === "v" ? elementCouldBeVScrolled(node2) : elementCouldBeHScrolled(node2);
};
var getScrollVariables = function(axis, node2) {
  return axis === "v" ? getVScrollVariables(node2) : getHScrollVariables(node2);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position2 = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position2;
    if (position2 || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position2;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (Math.abs(availableScroll) < 1 || !noOverscroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (Math.abs(availableScrollTop) < 1 || !noOverscroll)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React$1.useRef([]);
  var touchStartRef = React$1.useRef([0, 0]);
  var activeAxis = React$1.useRef();
  var id = React$1.useState(idCounter++)[0];
  var Style2 = React$1.useState(styleSingleton)[0];
  var lastProps = React$1.useRef(props);
  React$1.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React$1.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React$1.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React$1.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node2) {
        return node2.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React$1.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React$1.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React$1.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React$1.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React$1.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React$1.createElement(
    React$1.Fragment,
    null,
    inert ? React$1.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React$1.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node2) {
  var shadowParent = null;
  while (node2 !== null) {
    if (node2 instanceof ShadowRoot) {
      shadowParent = node2.host;
      node2 = node2.host;
    }
    node2 = node2.parentNode;
  }
  return shadowParent;
}
const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = React$1.forwardRef(function(props, ref) {
  return React$1.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope$1(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var TRIGGER_NAME$1 = "DialogTrigger";
var DialogTrigger = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME$1, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsx$1(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME$1;
var PORTAL_NAME$1 = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME$1, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME$1, __scopeDialog);
  return /* @__PURE__ */ jsx$1(PortalProvider, { scope: __scopeDialog, forceMount, children: React$1.Children.map(children, (child) => /* @__PURE__ */ jsx$1(Presence$1, { present: forceMount || context.open, children: /* @__PURE__ */ jsx$1(Portal$1, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME$1;
var OVERLAY_NAME$1 = "DialogOverlay";
var DialogOverlay = React$1.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME$1, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME$1, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ jsx$1(Presence$1, { present: forceMount || context.open, children: /* @__PURE__ */ jsx$1(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME$1;
var DialogOverlayImpl = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME$1, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsx$1(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsx$1(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME$1 = "DialogContent";
var DialogContent = React$1.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME$1, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
    return /* @__PURE__ */ jsx$1(Presence$1, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsx$1(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx$1(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME$1;
var DialogContentModal = React$1.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
    const contentRef = React$1.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React$1.useEffect(() => {
      const content = contentRef.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsx$1(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick)
            event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = React$1.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
    const hasInteractedOutsideRef = React$1.useRef(false);
    const hasPointerDownOutsideRef = React$1.useRef(false);
    return /* @__PURE__ */ jsx$1(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current)
              context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger)
            event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME$1, __scopeDialog);
    const contentRef = React$1.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx$1(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ jsx$1(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx$1(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ jsx$1(DescriptionWarning$1, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME$1 = "DialogTitle";
var DialogTitle = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME$1, __scopeDialog);
    return /* @__PURE__ */ jsx$1(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME$1;
var DESCRIPTION_NAME$1 = "DialogDescription";
var DialogDescription = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME$1, __scopeDialog);
    return /* @__PURE__ */ jsx$1(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME$1;
var CLOSE_NAME = "DialogClose";
var DialogClose = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsx$1(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME$1,
  titleName: TITLE_NAME$1,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React$1.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle)
        console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning$1 = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  React$1.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription)
        console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope$1(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsx$1(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsx$1(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsx$1(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var AlertDialogContent$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = React$1.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = React$1.useRef(null);
    return /* @__PURE__ */ jsx$1(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsx$1(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              event.preventDefault();
              cancelRef.current?.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsx$1(Slottable, { children }),
              /* @__PURE__ */ jsx$1(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsx$1(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = React$1.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsx$1(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsx$1(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsx$1(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  React$1.useEffect(() => {
    const hasDescription = document.getElementById(
      contentRef.current?.getAttribute("aria-describedby")
    );
    if (!hasDescription)
      console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  Overlay2,
  {
    className: cn$1(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx$1(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx$1(
    Content2,
    {
      ref,
      className: cn$1(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 theme-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogTitle = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  Title2,
  {
    ref,
    className: cn$1("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  Description2,
  {
    ref,
    className: cn$1("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  Action,
  {
    ref,
    className: cn$1(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  Cancel,
  {
    ref,
    className: cn$1(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = Cancel.displayName;
function useStateMachine$1(initialState, machine) {
  return React$1.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React$1.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React$1.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node2, setNode] = React$1.useState();
  const stylesRef = React$1.useRef({});
  const prevPresentRef = React$1.useRef(present);
  const prevAnimationNameRef = React$1.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine$1(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React$1.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node2) {
      let timeoutId;
      const ownerWindow = node2.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node2 && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node2.style.animationFillMode;
            node2.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node2.style.animationFillMode === "forwards") {
                node2.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node2) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node2.addEventListener("animationstart", handleAnimationStart);
      node2.addEventListener("animationcancel", handleAnimationEnd);
      node2.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node2.removeEventListener("animationstart", handleAnimationStart);
        node2.removeEventListener("animationcancel", handleAnimationEnd);
        node2.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node2, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React$1.useCallback((node22) => {
      if (node22)
        stylesRef.current = getComputedStyle(node22);
      setNode(node22);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = React$1.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope: scope2, children, ...context } = props;
      const Context = scope2?.[scopeName]?.[index2] || BaseContext;
      const value = React$1.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx$1(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope2) {
      const Context = scope2?.[scopeName]?.[index2] || BaseContext;
      const context = React$1.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React$1.createContext(defaultContext);
    });
    return function useScope(scope2) {
      const contexts = scope2?.[scopeName] || scopeContexts;
      return React$1.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope2, [scopeName]: contexts } }),
        [scope2, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React$1.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
function clamp(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}
function useStateMachine(initialState, machine) {
  return React$1.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea$1 = React$1.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeScrollArea,
      type = "hover",
      dir,
      scrollHideDelay = 600,
      ...scrollAreaProps
    } = props;
    const [scrollArea, setScrollArea] = React$1.useState(null);
    const [viewport, setViewport] = React$1.useState(null);
    const [content, setContent] = React$1.useState(null);
    const [scrollbarX, setScrollbarX] = React$1.useState(null);
    const [scrollbarY, setScrollbarY] = React$1.useState(null);
    const [cornerWidth, setCornerWidth] = React$1.useState(0);
    const [cornerHeight, setCornerHeight] = React$1.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = React$1.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = React$1.useState(false);
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setScrollArea(node2));
    const direction = useDirection(dir);
    return /* @__PURE__ */ jsx$1(
      ScrollAreaProvider,
      {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ jsx$1(
          Primitive.div,
          {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
              ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
              ...props.style
            }
          }
        )
      }
    );
  }
);
ScrollArea$1.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, children, asChild, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = React$1.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx$1(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`
          },
          nonce
        }
      ),
      /* @__PURE__ */ jsx$1(
        Primitive.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...viewportProps,
          asChild,
          ref: composedRefs,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
            ...props.style
          },
          children: getSubtree({ asChild, children }, (children2) => /* @__PURE__ */ jsx$1(
            "div",
            {
              "data-radix-scroll-area-content": "",
              ref: context.onContentChange,
              style: { minWidth: context.scrollbarXEnabled ? "fit-content" : void 0 },
              children: children2
            }
          ))
        }
      )
    ] });
  }
);
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = React$1.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    React$1.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ jsx$1(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ jsx$1(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ jsx$1(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ jsx$1(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React$1.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = React$1.useState(false);
  React$1.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return /* @__PURE__ */ jsx$1(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsx$1(
    ScrollAreaScrollbarAuto,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarScroll = React$1.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  React$1.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  React$1.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll2 = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return /* @__PURE__ */ jsx$1(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ jsx$1(
    ScrollAreaScrollbarVisible,
    {
      "data-state": state === "hidden" ? "hidden" : "visible",
      ...scrollbarProps,
      ref: forwardedRef,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
    }
  ) });
});
var ScrollAreaScrollbarAuto = React$1.forwardRef((props, forwardedRef) => {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = React$1.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsx$1(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsx$1(
    ScrollAreaScrollbarVisible,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarVisible = React$1.forwardRef((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = React$1.useRef(null);
  const pointerOffsetRef = React$1.useRef(0);
  const [sizes, setSizes] = React$1.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal") {
    return /* @__PURE__ */ jsx$1(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
            thumbRef.current.style.transform = `translate3d(${offset2}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx$1(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset2 = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset2}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport)
            context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
});
var ScrollAreaScrollbarX = React$1.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React$1.useState();
  const ref = React$1.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  React$1.useEffect(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsx$1(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "horizontal",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        bottom: 0,
        left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollWidth,
            viewport: context.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    }
  );
});
var ScrollAreaScrollbarY = React$1.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React$1.useState();
  const ref = React$1.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  React$1.useEffect(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsx$1(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "vertical",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        top: 0,
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    }
  );
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = React$1.forwardRef((props, forwardedRef) => {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = React$1.useState(null);
  const composeRefs2 = useComposedRefs(forwardedRef, (node2) => setScrollbar(node2));
  const rectRef = React$1.useRef(null);
  const prevWebkitUserSelectRef = React$1.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef$1(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef$1(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  }
  React$1.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  React$1.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsx$1(
    ScrollbarProvider,
    {
      scope: __scopeScrollArea,
      scrollbar,
      hasThumb,
      onThumbChange: useCallbackRef$1(onThumbChange),
      onThumbPointerUp: useCallbackRef$1(onThumbPointerUp),
      onThumbPositionChange: handleThumbPositionChange,
      onThumbPointerDown: useCallbackRef$1(onThumbPointerDown),
      children: /* @__PURE__ */ jsx$1(
        Primitive.div,
        {
          ...scrollbarProps,
          ref: composeRefs2,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              if (context.viewport)
                context.viewport.style.scrollBehavior = "auto";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport)
              context.viewport.style.scrollBehavior = "";
            rectRef.current = null;
          })
        }
      )
    }
  );
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = React$1.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ jsx$1(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ jsx$1(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
  }
);
var ScrollAreaThumbImpl = React$1.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useComposedRefs(
      forwardedRef,
      (node2) => scrollbarContext.onThumbChange(node2)
    );
    const removeUnlinkedScrollListenerRef = React$1.useRef();
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    React$1.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        const handleScroll2 = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ jsx$1(
      Primitive.div,
      {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...style
        },
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target;
          const thumbRect = thumb.getBoundingClientRect();
          const x = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x, y });
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
      }
    );
  }
);
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = React$1.forwardRef(
  (props, forwardedRef) => {
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ jsx$1(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
  }
);
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React$1.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = React$1.useState(0);
  const [height, setHeight] = React$1.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver(context.scrollbarX, () => {
    const height2 = context.scrollbarX?.offsetHeight || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver(context.scrollbarY, () => {
    const width2 = context.scrollbarY?.offsetWidth || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  return hasSize ? /* @__PURE__ */ jsx$1(
    Primitive.div,
    {
      ...cornerProps,
      ref: forwardedRef,
      style: {
        width,
        height,
        position: "absolute",
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...props.style
      }
    }
  ) : null;
});
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset2 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset2;
  const minPointerPos = sizes.scrollbar.paddingStart + offset2;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node2, handler = () => {
}) => {
  let prevPosition = { left: node2.scrollLeft, top: node2.scrollTop };
  let rAF = 0;
  (function loop() {
    const position2 = { left: node2.scrollLeft, top: node2.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position2.left;
    const isVerticalScroll = prevPosition.top !== position2.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position2;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef$1(callback);
  const debounceTimerRef = React$1.useRef(0);
  React$1.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return React$1.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef$1(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
function getSubtree(options, content) {
  const { asChild, children } = options;
  if (!asChild)
    return typeof content === "function" ? content(children) : content;
  const firstChild = React$1.Children.only(children);
  return React$1.cloneElement(firstChild, {
    children: typeof content === "function" ? content(firstChild.props.children) : content
  });
}
var Root = ScrollArea$1;
var Viewport = ScrollAreaViewport;
var Corner = ScrollAreaCorner;
const ScrollArea = React$1.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  Root,
  {
    ref,
    className: cn$1("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx$1(Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx$1(ScrollBar, {}),
      /* @__PURE__ */ jsx$1(Corner, {})
    ]
  }
));
ScrollArea.displayName = Root.displayName;
const ScrollBar = React$1.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx$1(
  ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn$1(
      "flex touch-none select-none transition-colors pr-0",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx$1(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-muted-foreground" })
  }
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
const Card = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "div",
  {
    ref,
    className: cn$1(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "div",
  {
    ref,
    className: cn$1("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React$1.forwardRef(({ className, ...props }, ref) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  /* @__PURE__ */ jsx$1(
    "h3",
    {
      ref,
      className: cn$1(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    }
  )
));
CardTitle.displayName = "CardTitle";
const CardDescription = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "p",
  {
    ref,
    className: cn$1("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1("div", { ref, className: cn$1("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx$1(
  "div",
  {
    ref,
    className: cn$1("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
Object.values(Theme);
const clientHints = {
  theme: {
    cookieName: "CH-prefers-color-scheme",
    getValueCode: `window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'`,
    fallback: "system",
    // default to system
    transform(value) {
      return themesList.includes(value) ? value : "system";
    }
  },
  timeZone: {
    cookieName: "CH-time-zone",
    getValueCode: `Intl.DateTimeFormat().resolvedOptions().timeZone`,
    fallback: "UTC"
  }
  // add other hints here
};
function getCookieValue(cookieString, name) {
  const hint = clientHints[name];
  if (!hint) {
    throw new Error(`Unknown client hint: ${name}`);
  }
  const value = cookieString.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${hint.cookieName}=`))?.split("=")[1];
  return value ? decodeURIComponent(value) : null;
}
function getHints(request) {
  const cookieString = typeof document !== "undefined" ? document.cookie : typeof request !== "undefined" ? request.headers.get("Cookie") ?? "" : "";
  return Object.entries(clientHints).reduce(
    (acc, [name, hint]) => {
      const hintName = name;
      if ("transform" in hint) {
        acc[hintName] = hint.transform(
          getCookieValue(cookieString, hintName) ?? hint.fallback
        );
      } else {
        acc[hintName] = getCookieValue(cookieString, hintName) ?? hint.fallback;
      }
      return acc;
    },
    {}
  );
}
function ClientHintCheck({ nonce }) {
  const { revalidate } = useRevalidator();
  React$1.useEffect(() => {
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function handleThemeChange() {
      document.cookie = `${clientHints.theme.cookieName}=${themeQuery.matches ? "dark" : "light"}`;
      revalidate();
    }
    themeQuery.addEventListener("change", handleThemeChange);
    return () => {
      themeQuery.removeEventListener("change", handleThemeChange);
    };
  }, [revalidate]);
  return /* @__PURE__ */ jsx$1(
    "script",
    {
      nonce,
      dangerouslySetInnerHTML: {
        __html: `
const cookies = document.cookie.split(';').map(c => c.trim()).reduce((acc, cur) => {
	const [key, value] = cur.split('=');
	acc[key] = value;
	return acc;
}, {});
let cookieChanged = false;
const hints = [
${Object.values(clientHints).map((hint) => {
          const cookieName = JSON.stringify(hint.cookieName);
          return `{ name: ${cookieName}, actual: String(${hint.getValueCode}), cookie: cookies[${cookieName}] }`;
        }).join(",\n")}
];
for (const hint of hints) {
	if (decodeURIComponent(hint.cookie) !== hint.actual) {
		cookieChanged = true;
		document.cookie = encodeURIComponent(hint.name) + '=' + encodeURIComponent(hint.actual) + ';path=/';
	}
}
// if the cookie changed, reload the page, unless the browser doesn't support
// cookies (in which case we would enter an infinite loop of reloads)
if (cookieChanged && navigator.cookieEnabled) {
	window.location.reload();
}
			`
      }
    }
  );
}
const NonceContext = React$1.createContext("");
NonceContext.Provider;
const useNonce = () => React$1.useContext(NonceContext);
const derpFace1 = "/assets/derp-face-1-CD5AHlv3.png";
const derpFace2 = "/assets/derp-face-2-CvG-djBU.png";
const derpFace3 = "/assets/derp-face-3-Cyj-TJjN.png";
const derpFace4 = "/assets/derp-face-4-b2Pc5WcC.png";
const derpFace5 = "/assets/derp-face-5-BPJHXUht.png";
const derpFace6 = "/assets/derp-face-6-Cd6m1bwZ.png";
const derpFace7 = "/assets/derp-face-7-cw00rubl.png";
const derpFace8 = "/assets/derp-face-8-DM2ODXdU.png";
const derpFace9 = "/assets/derp-face-9-AQz6Rjh1.png";
const derpFace10 = "/assets/derp-face-10-ZCk1F3ZU.png";
const derpFace11 = "/assets/derp-face-11-DNGTAx1f.png";
const derpFace12 = "/assets/derp-face-12-CqS0hZt8.jpg";
const logger = (...args) => {
  if (process.env.NODE_ENV !== "production") {
    return console.log(...args);
  }
};
const PATHS = {
  // Root paths
  ROOT: "/",
  APP: "/app",
  // General
  LOGIN: "/login"
};
const NavigationButton = ({
  variant,
  size: size2,
  disabled,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx$1(
    NavLink,
    {
      "aria-disabled": disabled,
      className: cn(buttonVariants({ variant, size: size2, className })),
      ...props
    }
  );
};
const getDerpFace = () => {
  const numberOfDerpFaces = 12;
  const randomNumber = Math.floor(Math.random() * numberOfDerpFaces) + 1;
  let imgSrc = derpFace1;
  switch (randomNumber) {
    case 2:
      imgSrc = derpFace2;
      break;
    case 3:
      imgSrc = derpFace3;
      break;
    case 4:
      imgSrc = derpFace4;
      break;
    case 5:
      imgSrc = derpFace5;
      break;
    case 6:
      imgSrc = derpFace6;
      break;
    case 7:
      imgSrc = derpFace7;
      break;
    case 8:
      imgSrc = derpFace8;
      break;
    case 9:
      imgSrc = derpFace9;
      break;
    case 10:
      imgSrc = derpFace10;
      break;
    case 11:
      imgSrc = derpFace11;
      break;
    case 12:
      imgSrc = derpFace12;
      break;
  }
  return /* @__PURE__ */ jsx$1("img", { src: imgSrc, alt: "error", className: "w-56 h-full rounded-lg mb-4" });
};
const StatusCode = ({ statusCode }) => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx$1("span", { className: "max-sm:hidden", children: /* @__PURE__ */ jsx$1(Text, { variant: "heading1", weight: "bold", className: "text-9xl", children: statusCode }) }),
    /* @__PURE__ */ jsx$1("span", { className: "sm:hidden", children: /* @__PURE__ */ jsx$1(Text, { variant: "heading2", weight: "bold", className: "text-7xl", children: statusCode }) })
  ] });
};
const ErrorPageTitle = ({
  statusCode,
  title
}) => {
  if (!title) {
    return getDerpFace();
  }
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx$1("span", { className: "max-sm:hidden", children: /* @__PURE__ */ jsx$1(Text, { variant: statusCode ? "heading1" : "heading3", weight: "medium", children: title }) }),
    /* @__PURE__ */ jsx$1("span", { className: "sm:hidden", children: /* @__PURE__ */ jsx$1(Text, { variant: "heading3", weight: "medium", children: title }) })
  ] });
};
const ErrorPage = ({
  isAtRoot,
  routeName,
  statusCode,
  title,
  description
}) => {
  const error = useRouteError();
  logger(`ERROR BOUNDARY (${routeName}):`, error);
  const descriptionArray = description ? description.split("\n") : ["Oh no!  Something went wrong with our flux capacitor"];
  return /* @__PURE__ */ jsxs("div", { className: "flex h-[100vh] w-full items-center p-6 justify-center gap-12 max-lg:flex-col-reverse max-lg:gap-2 max-md:gap-0", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "flex flex-col max-w-[500px] gap-2 max-lg:items-center max-lg:text-center max-sm:gap-6",
          !statusCode && "items-center [&>div]:text-center gap-4"
        ),
        children: [
          /* @__PURE__ */ jsx$1(ErrorPageTitle, { statusCode, title }),
          /* @__PURE__ */ jsx$1("div", { className: "flex flex-col max-lg:text-center", children: descriptionArray?.map((content, index2) => /* @__PURE__ */ jsx$1(
            Text,
            {
              variant: statusCode ? "bodyLarge" : "headline",
              className: "text-secondary/50",
              children: content
            },
            index2
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-6 mt-5 max-sm:flex-col max-sm:w-full", children: [
            isAtRoot ? /* @__PURE__ */ jsx$1(
              NavigationButton,
              {
                reloadDocument: !isAtRoot,
                variant: "primary",
                size: "lg",
                to: PATHS.ROOT,
                children: "Back to home"
              }
            ) : /* @__PURE__ */ jsx$1(
              Button,
              {
                variant: "primary",
                size: "lg",
                onClick: () => window.location.reload(),
                children: "Refresh"
              }
            ),
            /* @__PURE__ */ jsx$1(
              Link,
              {
                to: "https://discord.com/channels/909531430881746974/1151564740255043604",
                target: "_blank",
                children: /* @__PURE__ */ jsx$1(Button, { variant: "ghost", size: "lg", className: "rounded-full", children: "Contact Support" })
              }
            )
          ] })
        ]
      }
    ),
    statusCode && /* @__PURE__ */ jsx$1(StatusCode, { statusCode })
  ] });
};
const meta = ({ data }) => {
  return [
    { title: data ? "Intuition Explorer" : "Error | Intuition Explorer" },
    {
      name: "description",
      content: `Intuition is an ecosystem of technologies composing a universal and permissionless knowledge graph, capable of handling both objective facts and subjective opinions - delivering superior data for intelligences across the spectrum, from human to artificial.`
    },
    {
      property: "og:image",
      content: "https://res.cloudinary.com/dfpwy9nyv/image/upload/f_auto,q_auto/v1/Portal%20Assets/Site%20Metadata/site-og-image"
    },
    { property: "og:site_name", content: "Intuition Explorer" },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: "https://beta.portal.intuition.systems" },
    {
      name: "twitter:image",
      content: "https://res.cloudinary.com/dfpwy9nyv/image/upload/f_auto,q_auto/v1/Portal%20Assets/Site%20Metadata/site-og-image"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: "Intuition Explorer"
    },
    {
      name: "twitter:description",
      content: "Bringing trust to trustless systems."
    },
    { name: "twitter:site", content: "@0xIntuition" }
  ];
};
async function loader({ request }) {
  return json({
    requestInfo: {
      hints: getHints(request),
      path: new URL(request.url).pathname
    }
  });
}
function Document({
  children,
  nonce
}) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", "data-theme": "dark", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      nonce && /* @__PURE__ */ jsx$1(ClientHintCheck, { nonce }),
      /* @__PURE__ */ jsx$1("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx$1(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        }
      ),
      /* @__PURE__ */ jsx$1(Meta, {}),
      /* @__PURE__ */ jsx$1(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx$1("main", { className: "relative flex min-h-screen w-full flex-col justify-between antialiased", children: /* @__PURE__ */ jsx$1("div", { className: "z-10 flex-1", children }) }),
      /* @__PURE__ */ jsx$1(ScrollRestoration, {}),
      /* @__PURE__ */ jsx$1(Scripts, {})
    ] })
  ] });
}
function App$2() {
  const nonce = useNonce();
  return /* @__PURE__ */ jsxs(Document, { nonce, children: [
    /* @__PURE__ */ jsx$1(Toaster, { position: "top-right" }),
    /* @__PURE__ */ jsx$1(AppLayout, {})
  ] });
}
function AppLayout() {
  return /* @__PURE__ */ jsx$1(Outlet, {});
}
function ErrorBoundary() {
  const error = useRouteError();
  let statusCode;
  let title;
  let description;
  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    if (error.status === 404) {
      title = "Page not found";
      description = `Unfortunately, the page you are looking for does not exist.
 If you believe this is a mistake, please let us know and we'll get it sorted out.`;
    } else {
      title = error.statusText;
      description = error.data;
    }
  }
  return /* @__PURE__ */ jsx$1(Document, { children: /* @__PURE__ */ jsx$1(
    ErrorPage,
    {
      isAtRoot: true,
      routeName: "root",
      statusCode,
      title,
      description
    }
  ) });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AppLayout,
  Document,
  ErrorBoundary,
  default: App$2,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function InvestorsWelcome() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/map");
  }
  return /* @__PURE__ */ jsx$1(Card, { className: "h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute theme-border p-12", children: /* @__PURE__ */ jsx$1(CardContent, { className: "pb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
    /* @__PURE__ */ jsx$1(
      Text,
      {
        variant: TextVariant.headline,
        weight: TextWeight.medium,
        className: "text-primary pb-6 tracking-widest",
        children: "WELCOME, FRIENDS"
      }
    ),
    /* @__PURE__ */ jsx$1(
      Text,
      {
        variant: TextVariant.body,
        className: "text-primary/70 tracking-widest",
        children: "CHOOSE YOUR PATH..."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-start justify-center gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx$1(Button, { className: "rounded-md border border-for/70 bg-transparent text-primary/70 tracking-widest transition-all duration-300 hover:bg-transparent hover:border-for hover:text-primary", children: "BLUE PILL" }),
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.caption,
            className: "tracking-widest text-primary/70",
            children: "STANDARD DOCSEND"
          }
        )
      ] }),
      /* @__PURE__ */ jsx$1(
        Text,
        {
          variant: TextVariant.bodyLarge,
          className: "tracking-widest text-primary/70",
          children: "OR"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx$1(
          Button,
          {
            onClick: handleClick,
            className: "rounded-md border border-destructive/70 bg-transparent text-primary/70 tracking-widest transition-all duration-300 hover:bg-transparent hover:border-destructive hover:text-primary",
            children: "RED PILL"
          }
        ),
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.caption,
            className: "tracking-widest text-primary/70",
            children: "INTUITIVE EXPERIENCE"
          }
        )
      ] })
    ] })
  ] }) }) });
}
function App$1() {
  const { pathname } = useLocation();
  useEffect$1(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return /* @__PURE__ */ jsx$1("div", { className: "h-screen w-screen m-0 p-0 flex", children: /* @__PURE__ */ jsx$1(InvestorsWelcome, {}) });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App$1
}, Symbol.toStringTag, { value: "Module" }));
function HeaderLogo() {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        width: "22",
        height: "22",
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M17.5722 19.5675C17.5786 19.5756 17.5903 19.5769 17.5983 19.5704C18.8904 18.5138 19.9266 17.1695 20.6267 15.6412C21.3295 14.1072 21.6748 12.4292 21.6358 10.7377C21.5967 9.04617 21.1744 7.38675 20.4017 5.88853C19.6319 4.3959 18.5349 3.10333 17.1955 2.11057C17.1872 2.1044 17.1755 2.10627 17.1695 2.11474L16.8097 2.61813C16.8037 2.62659 16.8055 2.63844 16.8138 2.6446C18.0724 3.57771 19.1033 4.79249 19.8268 6.19521C20.5531 7.60356 20.9501 9.16338 20.9868 10.7534C21.0235 12.3434 20.6989 13.9208 20.0383 15.3627C19.3803 16.799 18.4066 18.0624 17.1925 19.0555C17.1845 19.062 17.1832 19.0739 17.1896 19.0821L17.5722 19.5675Z",
              fill: "#E5E5E5"
            }
          ),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M16.3132 1.54326C16.3185 1.53425 16.3155 1.52263 16.3067 1.51733C14.9727 0.719854 13.4859 0.222649 11.9465 0.0593706C10.4009 -0.104564 8.83853 0.0719634 7.3658 0.576939C5.89304 1.08191 4.54446 1.90349 3.4118 2.98574C2.28368 4.06368 1.39612 5.37502 0.809011 6.83119C0.805108 6.84087 0.809684 6.85193 0.819213 6.85589L1.38576 7.09064C1.39531 7.0946 1.40616 7.08994 1.41008 7.08026C1.96195 5.71189 2.79611 4.47959 3.85626 3.4666C4.92097 2.44928 6.18866 1.677 7.57302 1.20232C8.9574 0.727645 10.426 0.561709 11.8789 0.715806C13.3256 0.869248 14.7228 1.33642 15.9765 2.08572C15.9853 2.09102 15.9968 2.08803 16.002 2.07903L16.3132 1.54326Z",
              fill: "#E5E5E5"
            }
          ),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M0.380453 8.1857C0.370508 8.183 0.360306 8.18905 0.357683 8.19914C0.113567 9.14035 -0.00661751 10.1103 0.000280913 11.0836C0.000355927 11.094 0.00877764 11.1024 0.019069 11.1023L0.630942 11.0965C0.641231 11.0964 0.649488 11.0879 0.649416 11.0774C0.643034 10.1633 0.755913 9.25235 0.985096 8.3683C0.987719 8.35818 0.981796 8.34783 0.971848 8.34513L0.380453 8.1857Z",
              fill: "#E5E5E5"
            }
          ),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M0.114765 12.465C0.104572 12.4664 0.0974195 12.4759 0.0988044 12.4863C0.295541 13.9574 0.783179 15.3727 1.53241 16.6469C2.2848 17.9266 3.28535 19.0372 4.47317 19.9114C5.66099 20.7856 7.01133 21.4051 8.44214 21.7321C9.86689 22.0578 11.3418 22.0868 12.778 21.8175C12.7881 21.8156 12.7948 21.8057 12.7929 21.7955L12.6811 21.1838C12.6792 21.1736 12.6695 21.1668 12.6594 21.1687C11.3097 21.4216 9.92367 21.3943 8.58478 21.0882C7.23984 20.7808 5.97051 20.1985 4.85395 19.3767C3.7374 18.555 2.79689 17.511 2.08962 16.3081C1.38556 15.1107 0.927232 13.7807 0.742198 12.3983C0.74081 12.3879 0.731431 12.3806 0.721229 12.382L0.114765 12.465Z",
              fill: "#E5E5E5"
            }
          ),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M13.8642 21.5346C13.8671 21.5446 13.8775 21.5504 13.8873 21.5474C14.8318 21.2631 15.7337 20.849 16.568 20.3167C16.5767 20.3111 16.5793 20.2994 16.5738 20.2906L16.2478 19.7642C16.2423 19.7554 16.2308 19.7527 16.2221 19.7583C15.4384 20.2582 14.5913 20.6471 13.7043 20.9143C13.6944 20.9172 13.6888 20.9278 13.6917 20.9378L13.8642 21.5346Z",
              fill: "#E5E5E5"
            }
          ),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M18.59 16.4748C15.614 20.8362 9.72285 21.9198 5.4317 18.8952C1.14051 15.8706 0.0742711 9.88307 3.0502 5.52168C6.02613 1.16028 11.9173 0.0766147 16.2085 3.10124C20.4997 6.12585 21.5659 12.1134 18.59 16.4748ZM4.45749 6.51361C2.02057 10.0851 2.89368 14.9881 6.40763 17.4649C9.92158 19.9417 14.7457 19.0543 17.1827 15.4829C19.6196 11.9114 18.7465 7.00835 15.2325 4.53156C11.7186 2.05475 6.89442 2.94214 4.45749 6.51361Z",
              fill: "#E5E5E5"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx$1(
      "svg",
      {
        width: "101",
        height: "14",
        viewBox: "0 0 101 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M0.638672 0.718803H2.31411V13.2815H0.638672V0.718803ZM7.24154 0.718803H9.44055L16.247 11.0457H16.2819V0.718803H17.9574V13.2815H15.8282L8.95188 2.95453H8.91697V13.2815H7.24154V0.718803ZM25.46 2.31575H21.4808V0.718803H31.1146V2.31575H27.1354V13.2815H25.46V2.31575ZM36.0925 0.718803V8.41965C36.0925 8.81001 36.1448 9.21812 36.2495 9.64397C36.3542 10.058 36.5288 10.4424 36.7731 10.7973C37.0174 11.1522 37.3374 11.442 37.733 11.6668C38.1286 11.8915 38.6172 12.0039 39.199 12.0039C39.7807 12.0039 40.2694 11.8915 40.665 11.6668C41.0606 11.442 41.3806 11.1522 41.6249 10.7973C41.8692 10.4424 42.0438 10.058 42.1485 9.64397C42.2532 9.21812 42.3055 8.81001 42.3055 8.41965V0.718803H43.981V8.6858C43.981 9.41922 43.8588 10.0876 43.6145 10.6909C43.3701 11.2823 43.0327 11.7969 42.6022 12.2346C42.1717 12.6723 41.6656 13.0094 41.0839 13.246C40.5021 13.4826 39.8738 13.6009 39.199 13.6009C38.5242 13.6009 37.8959 13.4826 37.3141 13.246C36.7324 13.0094 36.2263 12.6723 35.7958 12.2346C35.3653 11.7969 35.0278 11.2823 34.7835 10.6909C34.5392 10.0876 34.417 9.41922 34.417 8.6858V0.718803H36.0925ZM48.6772 0.718803H50.3526V13.2815H48.6772V0.718803ZM57.863 2.31575H53.8838V0.718803H63.5176V2.31575H59.5384V13.2815H57.863V2.31575ZM67.0469 0.718803H68.7223V13.2815H67.0469V0.718803ZM79.3213 13.6009C78.3789 13.6009 77.5121 13.4352 76.7209 13.104C75.9297 12.761 75.2491 12.2937 74.679 11.7023C74.1205 11.1108 73.6784 10.4129 73.3526 9.60849C73.0384 8.8041 72.8814 7.93465 72.8814 7.00014C72.8814 6.06563 73.0384 5.19618 73.3526 4.39179C73.6784 3.5874 74.1205 2.88947 74.679 2.29801C75.2491 1.70655 75.9297 1.24521 76.7209 0.913987C77.5121 0.570939 78.3789 0.399414 79.3213 0.399414C80.2638 0.399414 81.1306 0.570939 81.9217 0.913987C82.7129 1.24521 83.3878 1.70655 83.9462 2.29801C84.5164 2.88947 84.9585 3.5874 85.2726 4.39179C85.5984 5.19618 85.7613 6.06563 85.7613 7.00014C85.7613 7.93465 85.5984 8.8041 85.2726 9.60849C84.9585 10.4129 84.5164 11.1108 83.9462 11.7023C83.3878 12.2937 82.7129 12.761 81.9217 13.104C81.1306 13.4352 80.2638 13.6009 79.3213 13.6009ZM79.3213 12.0039C80.0311 12.0039 80.671 11.8738 81.2411 11.6135C81.8112 11.3415 82.2999 10.9807 82.7071 10.5312C83.1143 10.0817 83.4285 9.55525 83.6496 8.95196C83.8706 8.33684 83.9811 7.68623 83.9811 7.00014C83.9811 6.31404 83.8706 5.66935 83.6496 5.06605C83.4285 4.45093 83.1143 3.91862 82.7071 3.4691C82.2999 3.01959 81.8112 2.66471 81.2411 2.40447C80.671 2.1324 80.0311 1.99636 79.3213 1.99636C78.6116 1.99636 77.9717 2.1324 77.4016 2.40447C76.8314 2.66471 76.3428 3.01959 75.9355 3.4691C75.5283 3.91862 75.2142 4.45093 74.9931 5.06605C74.772 5.66935 74.6615 6.31404 74.6615 7.00014C74.6615 7.68623 74.772 8.33684 74.9931 8.95196C75.2142 9.55525 75.5283 10.0817 75.9355 10.5312C76.3428 10.9807 76.8314 11.3415 77.4016 11.6135C77.9717 11.8738 78.6116 12.0039 79.3213 12.0039ZM89.9155 0.718803H92.1145L98.921 11.0457H98.9559V0.718803H100.631V13.2815H98.5021L91.6258 2.95453H91.5909V13.2815H89.9155V0.718803Z",
            fill: "#E5E5E5"
          }
        )
      }
    )
  ] });
}
function PathCard({
  heading,
  buttonLabel,
  handleClick,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-full theme-border rounded-xl relative flex flex-col items-center", children: [
    /* @__PURE__ */ jsx$1(
      Text,
      {
        variant: "bodyLarge",
        weight: "medium",
        className: "text-white uppercase tracking-[3px] m-6",
        children: heading
      }
    ),
    /* @__PURE__ */ jsx$1("div", { className: "max-h-[70%]", children }),
    /* @__PURE__ */ jsx$1("div", { className: "absolute bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsx$1(
      Button,
      {
        onClick: handleClick,
        className: cn(
          "font-medium text-base uppercase tracking-[3px]",
          "px-6 py-3 bg-black text-white border border-white rounded",
          "opacity-80 transition-all duration-300 ease-in-out hover:opacity-100"
        ),
        children: buttonLabel
      }
    ) })
  ] });
}
function PathCardSeparator() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0", children: [
    /* @__PURE__ */ jsx$1("div", { className: "w-6", children: /* @__PURE__ */ jsx$1("hr", { className: "theme-border" }) }),
    /* @__PURE__ */ jsx$1("div", { className: "w-fit h-auto theme-border bg-transparent rounded-md p-2.5", children: "OR" }),
    /* @__PURE__ */ jsx$1("div", { className: "w-6", children: /* @__PURE__ */ jsx$1("hr", { className: "theme-border" }) })
  ] });
}
function SunburstNoGlow({
  className,
  width = "445",
  height = "445"
}) {
  return /* @__PURE__ */ jsx$1("div", { className: cn$1(className), children: /* @__PURE__ */ jsxs(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 445 445",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxs("g", { filter: "url(#filter0_d_5885_67060)", children: [
          /* @__PURE__ */ jsx$1("mask", { id: "path-2-inside-1_5885_67060", fill: "white", children: /* @__PURE__ */ jsx$1("path", { d: "M418.979 286.8C419.501 286.982 420.072 286.706 420.251 286.184C430.934 255.096 434.143 221.92 429.611 189.347C425.033 156.445 412.687 125.105 393.597 97.9229C374.506 70.7406 349.219 48.4975 319.83 33.035C290.736 17.7279 258.449 9.50168 225.593 9.01802C225.041 9.00989 224.588 9.45339 224.583 10.0056L224.5 18.4631C224.495 19.0153 224.939 19.4672 225.491 19.4755C256.687 19.9425 287.341 27.7568 314.966 42.2909C342.886 56.9802 366.908 78.1112 385.044 103.934C403.18 129.758 414.909 159.53 419.258 190.788C423.561 221.715 420.518 253.215 410.382 282.736C410.203 283.258 410.478 283.828 410.999 284.011L418.979 286.8Z" }) }),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M418.979 286.8C419.501 286.982 420.072 286.706 420.251 286.184C430.934 255.096 434.143 221.92 429.611 189.347C425.033 156.445 412.687 125.105 393.597 97.9229C374.506 70.7406 349.219 48.4975 319.83 33.035C290.736 17.7279 258.449 9.50168 225.593 9.01802C225.041 9.00989 224.588 9.45339 224.583 10.0056L224.5 18.4631C224.495 19.0153 224.939 19.4672 225.491 19.4755C256.687 19.9425 287.341 27.7568 314.966 42.2909C342.886 56.9802 366.908 78.1112 385.044 103.934C403.18 129.758 414.909 159.53 419.258 190.788C423.561 221.715 420.518 253.215 410.382 282.736C410.203 283.258 410.478 283.828 410.999 284.011L418.979 286.8Z",
              fill: "white",
              stroke: "url(#paint0_linear_5885_67060)",
              mask: "url(#path-2-inside-1_5885_67060)"
            }
          ),
          /* @__PURE__ */ jsx$1("mask", { id: "path-3-inside-2_5885_67060", fill: "white", children: /* @__PURE__ */ jsx$1("path", { d: "M220.453 10.0056C220.448 9.45337 219.995 9.00987 219.443 9.01799C186.642 9.50058 154.411 17.6998 125.358 32.9583C96.011 48.3719 70.7489 70.5472 51.6567 97.6543C32.5645 124.761 20.1895 156.023 15.5529 188.86C10.9629 221.367 14.0867 254.495 24.6652 285.564C24.8433 286.087 25.4133 286.364 25.9353 286.184L33.9234 283.42C34.4452 283.239 34.7215 282.67 34.5437 282.147C24.5069 252.644 21.5447 221.19 25.9029 190.325C30.3077 159.13 42.0639 129.431 60.2015 103.679C78.3391 77.9274 102.338 56.8609 130.218 42.218C157.803 27.7301 188.405 19.9415 219.549 19.4754C220.101 19.4672 220.544 19.0153 220.539 18.463L220.453 10.0056Z" }) }),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M220.453 10.0056C220.448 9.45337 219.995 9.00987 219.443 9.01799C186.642 9.50058 154.411 17.6998 125.358 32.9583C96.011 48.3719 70.7489 70.5472 51.6567 97.6543C32.5645 124.761 20.1895 156.023 15.5529 188.86C10.9629 221.367 14.0867 254.495 24.6652 285.564C24.8433 286.087 25.4133 286.364 25.9353 286.184L33.9234 283.42C34.4452 283.239 34.7215 282.67 34.5437 282.147C24.5069 252.644 21.5447 221.19 25.9029 190.325C30.3077 159.13 42.0639 129.431 60.2015 103.679C78.3391 77.9274 102.338 56.8609 130.218 42.218C157.803 27.7301 188.405 19.9415 219.549 19.4754C220.101 19.4672 220.544 19.0153 220.539 18.463L220.453 10.0056Z",
              fill: "white",
              stroke: "url(#paint1_linear_5885_67060)",
              mask: "url(#path-3-inside-2_5885_67060)"
            }
          ),
          /* @__PURE__ */ jsx$1("mask", { id: "path-4-inside-3_5885_67060", fill: "white", children: /* @__PURE__ */ jsx$1("path", { d: "M26.9022 288.92C26.383 289.107 26.1141 289.681 26.3043 290.199C34.6647 312.985 46.9252 334.142 62.5367 352.722C62.8921 353.145 63.5237 353.197 63.9448 352.839L70.389 347.367C70.8098 347.009 70.861 346.379 70.5059 345.956C55.7009 328.327 44.0705 308.257 36.1342 286.644C35.9438 286.126 35.3705 285.857 34.8511 286.044L26.9022 288.92Z" }) }),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M26.9022 288.92C26.383 289.107 26.1141 289.681 26.3043 290.199C34.6647 312.985 46.9252 334.142 62.5367 352.722C62.8921 353.145 63.5237 353.197 63.9448 352.839L70.389 347.367C70.8098 347.009 70.861 346.379 70.5059 345.956C55.7009 328.327 44.0705 308.257 36.1342 286.644C35.9438 286.126 35.3705 285.857 34.8511 286.044L26.9022 288.92Z",
              fill: "white",
              stroke: "url(#paint2_linear_5885_67060)",
              mask: "url(#path-4-inside-3_5885_67060)"
            }
          ),
          /* @__PURE__ */ jsx$1("mask", { id: "path-5-inside-4_5885_67060", fill: "white", children: /* @__PURE__ */ jsx$1("path", { d: "M65.7732 354.966C65.3573 355.329 65.3142 355.961 65.6791 356.376C85.1701 378.517 109.124 396.286 135.971 408.512C163.121 420.877 192.6 427.285 222.428 427.308C252.257 427.331 281.743 420.967 308.908 408.645C335.769 396.46 359.745 378.727 379.262 356.616C379.627 356.202 379.585 355.57 379.169 355.206L372.806 349.638C372.39 349.274 371.758 349.316 371.393 349.731C352.857 370.719 330.093 387.551 304.59 399.12C278.784 410.827 250.771 416.872 222.435 416.85C194.098 416.829 166.093 410.74 140.3 398.994C114.811 387.387 92.0668 370.519 73.5564 349.503C73.1912 349.088 72.5593 349.045 72.1431 349.408L65.7732 354.966Z" }) }),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M65.7732 354.966C65.3573 355.329 65.3142 355.961 65.6791 356.376C85.1701 378.517 109.124 396.286 135.971 408.512C163.121 420.877 192.6 427.285 222.428 427.308C252.257 427.331 281.743 420.967 308.908 408.645C335.769 396.46 359.745 378.727 379.262 356.616C379.627 356.202 379.585 355.57 379.169 355.206L372.806 349.638C372.39 349.274 371.758 349.316 371.393 349.731C352.857 370.719 330.093 387.551 304.59 399.12C278.784 410.827 250.771 416.872 222.435 416.85C194.098 416.829 166.093 410.74 140.3 398.994C114.811 387.387 92.0668 370.519 73.5564 349.503C73.1912 349.088 72.5593 349.045 72.1431 349.408L65.7732 354.966Z",
              fill: "white",
              stroke: "url(#paint3_linear_5885_67060)",
              mask: "url(#path-5-inside-4_5885_67060)"
            }
          ),
          /* @__PURE__ */ jsx$1("mask", { id: "path-6-inside-5_5885_67060", fill: "white", children: /* @__PURE__ */ jsx$1("path", { d: "M381.206 352.84C381.627 353.197 382.259 353.145 382.614 352.722C398.2 334.164 410.443 313.036 418.795 290.281C418.986 289.763 418.717 289.19 418.198 289.002L410.249 286.123C409.729 285.935 409.156 286.204 408.966 286.722C401.037 308.306 389.424 328.348 374.642 345.956C374.288 346.379 374.339 347.01 374.76 347.367L381.206 352.84Z" }) }),
          /* @__PURE__ */ jsx$1(
            "path",
            {
              d: "M381.206 352.84C381.627 353.197 382.259 353.145 382.614 352.722C398.2 334.164 410.443 313.036 418.795 290.281C418.986 289.763 418.717 289.19 418.198 289.002L410.249 286.123C409.729 285.935 409.156 286.204 408.966 286.722C401.037 308.306 389.424 328.348 374.642 345.956C374.288 346.379 374.339 347.01 374.76 347.367L381.206 352.84Z",
              fill: "white",
              stroke: "url(#paint4_linear_5885_67060)",
              mask: "url(#path-6-inside-5_5885_67060)"
            }
          )
        ] }),
        /* @__PURE__ */ jsx$1("g", { filter: "url(#filter1_d_5885_67060)", children: /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M416.91 218.065C416.91 325.434 329.87 412.475 222.5 412.475C115.13 412.475 28.0897 325.434 28.0897 218.065C28.0897 110.695 115.13 23.6543 222.5 23.6543C329.87 23.6543 416.91 110.695 416.91 218.065ZM47.5308 218.065C47.5308 314.697 125.867 393.034 222.5 393.034C319.133 393.034 397.469 314.697 397.469 218.065C397.469 121.432 319.133 43.0953 222.5 43.0953C125.867 43.0953 47.5308 121.432 47.5308 218.065Z",
            fill: "white"
          }
        ) }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "filter0_d_5885_67060",
              x: "9.49762",
              y: "9.01807",
              width: "426.11",
              height: "426.29",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ jsx$1("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsx$1(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ jsx$1("feOffset", { dy: "4" }),
                /* @__PURE__ */ jsx$1("feGaussianBlur", { stdDeviation: "2" }),
                /* @__PURE__ */ jsx$1("feComposite", { in2: "hardAlpha", operator: "out" }),
                /* @__PURE__ */ jsx$1(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  }
                ),
                /* @__PURE__ */ jsx$1(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5885_67060"
                  }
                ),
                /* @__PURE__ */ jsx$1(
                  "feBlend",
                  {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5885_67060",
                    result: "shape"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "filter1_d_5885_67060",
              x: "23.0897",
              y: "18.6543",
              width: "398.821",
              height: "398.821",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ jsx$1("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsx$1(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ jsx$1("feOffset", {}),
                /* @__PURE__ */ jsx$1("feGaussianBlur", { stdDeviation: "2.5" }),
                /* @__PURE__ */ jsx$1("feComposite", { in2: "hardAlpha", operator: "out" }),
                /* @__PURE__ */ jsx$1(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  }
                ),
                /* @__PURE__ */ jsx$1(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_5885_67060"
                  }
                ),
                /* @__PURE__ */ jsx$1(
                  "feBlend",
                  {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_5885_67060",
                    result: "shape"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_5885_67060",
              x1: "222.52",
              y1: "8.99538",
              x2: "362.174",
              y2: "425.952",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#E0EAEF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint1_linear_5885_67060",
              x1: "222.52",
              y1: "8.99538",
              x2: "362.174",
              y2: "425.952",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#E0EAEF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint2_linear_5885_67060",
              x1: "222.52",
              y1: "8.99538",
              x2: "362.174",
              y2: "425.952",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#E0EAEF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint3_linear_5885_67060",
              x1: "222.52",
              y1: "8.99538",
              x2: "362.174",
              y2: "425.952",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#E0EAEF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint4_linear_5885_67060",
              x1: "222.52",
              y1: "8.99538",
              x2: "362.174",
              y2: "425.952",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#E0EAEF" })
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
function SunburstCard({
  label,
  disabled = false,
  disableScale = false,
  size: size2 = "default",
  glow: glow2 = "white"
}) {
  const glowClasses = {
    white: "hover:drop-shadow-[0_0_50px_#7ED8FF]",
    purple: "hover:drop-shadow-[0_0_50px_#BF7EFF]",
    yellow: "hover:drop-shadow-[0_0_50px_#FFDB7E]",
    blue: "hover:drop-shadow-[0_0_50px_#55CCFF]",
    pink: "hover:drop-shadow-[0_0_50px_#FF88AA]"
  };
  const sizeClasses = {
    default: "400",
    sm: "250",
    md: "360",
    "x-sm": "200"
  };
  const textSizeClasses = {
    default: "text-xl",
    sm: "text-md",
    md: "text-lg",
    "x-sm": "text-sm"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx$1(
        "relative opacity-60 transition-all duration-300 ease-in-out hover:opacity-100",
        !disableScale && "hover:scale-110",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        glowClasses[glow2]
      ),
      children: [
        /* @__PURE__ */ jsx$1(
          SunburstNoGlow,
          {
            className: `z-30 transition-all duration-300 ease-in-out`,
            width: sizeClasses[size2],
            height: sizeClasses[size2]
          }
        ),
        /* @__PURE__ */ jsx$1(
          "div",
          {
            className: clsx$1(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
              "text-primary uppercase tracking-[3px] font-medium text-center",
              textSizeClasses[size2],
              disabled && "opacity-40"
            ),
            children: label
          }
        )
      ]
    }
  );
}
function Business({ className }) {
  return /* @__PURE__ */ jsx$1("div", { className: cn$1(className), children: /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "377",
      height: "364",
      viewBox: "0 0 377 364",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "216.999",
            height: "21",
            rx: "3",
            transform: "matrix(6.0262e-08 -1 -1 -3.17063e-08 296 289.983)",
            fill: "url(#paint0_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "45.4998",
            height: "21",
            rx: "3",
            transform: "matrix(6.0262e-08 -1 -1 -3.17063e-08 296 71.2334)",
            fill: "url(#paint1_linear_5807_67640)",
            fillOpacity: "0.53"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "242.994",
            height: "21",
            rx: "3",
            transform: "matrix(6.0262e-08 -1 -1 -3.17063e-08 331 290.67)",
            fill: "url(#paint2_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "45.4998",
            height: "21",
            rx: "3",
            transform: "matrix(6.0262e-08 -1 -1 -3.17063e-08 331 45.5)",
            fill: "url(#paint3_linear_5807_67640)",
            fillOpacity: "0.53"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            x: "205",
            y: "158.078",
            width: "49.6291",
            height: "21",
            rx: "3",
            transform: "rotate(-90 205 158.078)",
            fill: "url(#paint4_linear_5807_67640)",
            fillOpacity: "0.53"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            x: "205",
            y: "290.991",
            width: "131.285",
            height: "21",
            rx: "3",
            transform: "rotate(-90 205 290.991)",
            fill: "url(#paint5_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M217.187 259.331L218 259.331L218 263.182L217.305 263.182L215.309 261.334C215.09 261.142 214.9 260.989 214.738 260.877C214.577 260.765 214.431 260.686 214.301 260.639C214.168 260.59 214.042 260.565 213.922 260.565C213.747 260.565 213.595 260.596 213.465 260.659C213.332 260.721 213.229 260.812 213.156 260.932C213.083 261.049 213.047 261.194 213.047 261.366C213.047 261.556 213.091 261.719 213.18 261.854C213.266 261.987 213.385 262.088 213.539 262.159C213.693 262.226 213.868 262.26 214.066 262.26L214.066 263.295C213.73 263.295 213.424 263.217 213.148 263.061C212.87 262.905 212.647 262.681 212.48 262.389C212.314 262.097 212.23 261.751 212.23 261.35C212.23 260.959 212.296 260.629 212.426 260.358C212.553 260.087 212.736 259.881 212.973 259.741C213.21 259.6 213.492 259.53 213.82 259.53C214.003 259.53 214.182 259.56 214.359 259.62C214.536 259.68 214.712 259.764 214.887 259.874C215.059 259.98 215.233 260.108 215.41 260.256C215.587 260.405 215.768 260.57 215.953 260.752L217.187 261.862L217.187 259.331ZM215.383 257.588L215.184 258.413L212.312 258.096L212.312 254.967L213.168 254.967L213.168 257.241L214.496 257.389C214.447 257.308 214.397 257.191 214.348 257.038C214.296 256.881 214.27 256.706 214.27 256.51C214.27 256.239 214.314 255.997 214.402 255.784C214.488 255.57 214.613 255.389 214.777 255.241C214.941 255.09 215.142 254.976 215.379 254.901C215.613 254.823 215.879 254.784 216.176 254.784C216.436 254.784 216.681 254.823 216.91 254.901C217.137 254.976 217.339 255.092 217.516 255.249C217.69 255.405 217.828 255.601 217.93 255.838C218.029 256.075 218.078 256.354 218.078 256.674C218.078 256.917 218.043 257.15 217.973 257.374C217.9 257.595 217.794 257.794 217.656 257.971C217.516 258.148 217.344 258.29 217.141 258.397C216.937 258.501 216.704 258.558 216.441 258.569L216.441 257.549C216.616 257.531 216.764 257.484 216.887 257.409C217.009 257.333 217.103 257.234 217.168 257.112C217.233 256.987 217.266 256.842 217.266 256.678C217.266 256.53 217.238 256.402 217.184 256.295C217.126 256.186 217.047 256.096 216.945 256.026C216.844 255.956 216.724 255.903 216.586 255.87C216.448 255.836 216.297 255.819 216.133 255.819C215.974 255.819 215.829 255.838 215.699 255.877C215.566 255.917 215.452 255.976 215.355 256.057C215.259 256.138 215.185 256.239 215.133 256.362C215.081 256.482 215.055 256.622 215.055 256.784C215.055 257 215.087 257.167 215.152 257.284C215.217 257.398 215.294 257.5 215.383 257.588ZM217.496 253.944C217.34 253.944 217.208 253.89 217.102 253.784C216.995 253.677 216.941 253.532 216.941 253.35C216.941 253.168 216.995 253.023 217.102 252.917C217.208 252.81 217.34 252.756 217.496 252.756C217.65 252.756 217.78 252.81 217.887 252.917C217.991 253.023 218.043 253.168 218.043 253.35C218.043 253.532 217.991 253.677 217.887 253.784C217.78 253.89 217.65 253.944 217.496 253.944ZM212.266 248.897L212.266 248.756L213.098 248.756L213.098 248.823C213.098 249.138 213.146 249.415 213.242 249.655C213.339 249.892 213.474 250.09 213.648 250.249C213.82 250.405 214.025 250.523 214.262 250.604C214.496 250.685 214.753 250.725 215.031 250.725L215.953 250.725C216.169 250.725 216.359 250.703 216.523 250.659C216.685 250.612 216.822 250.548 216.934 250.467C217.043 250.384 217.125 250.288 217.18 250.178C217.234 250.066 217.262 249.944 217.262 249.811C217.262 249.678 217.234 249.558 217.18 249.452C217.125 249.345 217.048 249.254 216.949 249.178C216.848 249.1 216.729 249.042 216.594 249.002C216.458 248.961 216.31 248.94 216.148 248.94C215.99 248.94 215.842 248.959 215.707 248.999C215.572 249.038 215.453 249.095 215.352 249.17C215.247 249.246 215.168 249.34 215.113 249.452C215.056 249.561 215.027 249.686 215.027 249.827C215.027 250.009 215.07 250.172 215.156 250.315C215.24 250.458 215.349 250.571 215.484 250.655C215.62 250.738 215.763 250.784 215.914 250.792L215.742 251.139C215.521 251.126 215.318 251.079 215.133 250.999C214.948 250.915 214.786 250.805 214.648 250.667C214.51 250.526 214.404 250.361 214.328 250.17C214.253 249.978 214.215 249.764 214.215 249.53C214.215 249.259 214.267 249.022 214.371 248.819C214.473 248.616 214.612 248.448 214.789 248.315C214.966 248.18 215.171 248.078 215.402 248.01C215.632 247.943 215.874 247.909 216.129 247.909C216.402 247.909 216.658 247.953 216.895 248.042C217.132 248.127 217.339 248.252 217.516 248.417C217.693 248.581 217.831 248.778 217.93 249.01C218.029 249.242 218.078 249.502 218.078 249.792C218.078 250.096 218.021 250.37 217.906 250.612C217.792 250.851 217.633 251.057 217.43 251.229C217.227 251.401 216.99 251.532 216.719 251.624C216.448 251.715 216.155 251.76 215.84 251.76L215.426 251.76C214.98 251.76 214.566 251.699 214.184 251.577C213.801 251.454 213.466 251.273 213.18 251.034C212.891 250.792 212.667 250.492 212.508 250.135C212.346 249.778 212.266 249.366 212.266 248.897ZM217.199 246.42L217.199 246.346C217.199 246.01 217.156 245.726 217.07 245.495C216.984 245.26 216.863 245.071 216.707 244.928C216.548 244.782 216.359 244.677 216.141 244.612C215.919 244.544 215.674 244.51 215.406 244.51L214.375 244.51C214.156 244.51 213.965 244.532 213.801 244.577C213.634 244.621 213.495 244.683 213.383 244.764C213.271 244.842 213.187 244.935 213.133 245.042C213.076 245.148 213.047 245.263 213.047 245.385C213.047 245.521 213.078 245.64 213.141 245.745C213.203 245.849 213.289 245.937 213.398 246.01C213.505 246.081 213.629 246.135 213.77 246.174C213.91 246.211 214.059 246.229 214.215 246.229C214.366 246.229 214.51 246.212 214.648 246.178C214.786 246.142 214.909 246.088 215.016 246.018C215.122 245.945 215.207 245.854 215.27 245.745C215.329 245.635 215.359 245.508 215.359 245.362C215.359 245.224 215.333 245.099 215.281 244.987C215.227 244.872 215.155 244.773 215.066 244.69C214.975 244.607 214.875 244.543 214.766 244.499C214.654 244.452 214.54 244.426 214.426 244.42L214.582 244.057C214.772 244.057 214.96 244.097 215.145 244.178C215.329 244.256 215.497 244.367 215.648 244.51C215.797 244.651 215.917 244.815 216.008 245.002C216.096 245.19 216.141 245.392 216.141 245.608C216.141 245.876 216.091 246.113 215.992 246.319C215.893 246.525 215.757 246.698 215.582 246.838C215.405 246.976 215.202 247.081 214.973 247.151C214.741 247.221 214.493 247.256 214.23 247.256C213.957 247.256 213.701 247.213 213.461 247.127C213.219 247.042 213.007 246.918 212.824 246.756C212.639 246.592 212.495 246.394 212.391 246.163C212.284 245.931 212.23 245.67 212.23 245.381C212.23 245.082 212.289 244.815 212.406 244.581C212.523 244.346 212.686 244.147 212.895 243.983C213.1 243.819 213.344 243.694 213.625 243.608C213.906 243.519 214.214 243.475 214.547 243.475L214.91 243.475C215.262 243.475 215.595 243.51 215.91 243.581C216.225 243.651 216.513 243.759 216.773 243.905C217.034 244.051 217.259 244.237 217.449 244.463C217.639 244.687 217.786 244.956 217.891 245.268C217.992 245.578 218.043 245.932 218.043 246.331L218.043 246.42L217.199 246.42ZM212.312 241.42L218 241.42L218 242.495L212.312 242.495L212.312 241.42ZM212.312 238.006L215.086 240.288L216.48 241.592L215.437 241.784L214.262 240.877L212.312 239.323L212.312 238.006ZM218 239.202L215.336 240.971L214.641 240.202L218 237.924L218 239.202Z",
            fill: "#F4F4F4"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M219 271.013C219 271.486 218.932 271.934 218.796 272.356C218.66 272.777 218.472 273.158 218.232 273.499L219 274.376L218.446 275.008L217.678 274.131C217.38 274.405 217.044 274.62 216.671 274.775C216.299 274.931 215.908 275.008 215.5 275.008C214.528 275.008 213.701 274.618 213.021 273.837C212.34 273.057 212 272.115 212 271.013L212 267.017L215.5 267.017C216.466 267.017 217.291 267.405 217.975 268.182C218.658 268.959 219 269.903 219 271.013ZM218.222 271.013C218.222 270.147 217.956 269.413 217.425 268.81C216.894 268.207 216.252 267.905 215.5 267.905L212.778 267.905L212.778 271.013C212.778 271.871 213.042 272.604 213.57 273.21C214.098 273.817 214.742 274.12 215.5 274.12C216.252 274.12 216.894 273.817 217.425 273.21C217.956 272.604 218.222 271.871 218.222 271.013ZM217.396 271.601L215.597 269.303C215.539 269.229 215.469 269.207 215.388 269.237C215.307 269.266 215.26 269.333 215.247 269.437L215.092 271.235L213.799 270.158C213.766 270.128 213.732 270.116 213.696 270.119C213.661 270.123 213.627 270.14 213.594 270.169C213.562 270.206 213.546 270.249 213.546 270.297C213.546 270.345 213.562 270.387 213.594 270.424L215.393 272.711C215.451 272.785 215.521 272.807 215.602 272.777C215.683 272.748 215.73 272.681 215.743 272.578L215.899 270.78L217.192 271.867C217.224 271.889 217.258 271.901 217.294 271.901C217.329 271.901 217.363 271.882 217.396 271.845C217.428 271.808 217.444 271.767 217.444 271.723C217.444 271.679 217.428 271.638 217.396 271.601Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            x: "240",
            y: "133.391",
            width: "54.352",
            height: "21",
            rx: "3",
            transform: "rotate(-90 240 133.391)",
            fill: "url(#paint6_linear_5807_67640)",
            fillOpacity: "0.53"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            x: "240",
            y: "289.153",
            width: "153.433",
            height: "21",
            rx: "3",
            transform: "rotate(-90 240 289.153)",
            fill: "url(#paint7_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M252.187 252.87L253 252.87L253 256.722L252.305 256.722L250.309 254.874C250.09 254.681 249.9 254.529 249.738 254.417C249.577 254.305 249.431 254.226 249.301 254.179C249.168 254.129 249.042 254.104 248.922 254.104C248.747 254.104 248.595 254.136 248.465 254.198C248.332 254.261 248.229 254.352 248.156 254.472C248.083 254.589 248.047 254.733 248.047 254.905C248.047 255.095 248.091 255.258 248.18 255.394C248.266 255.526 248.385 255.628 248.539 255.698C248.693 255.766 248.868 255.8 249.066 255.8L249.066 256.835C248.73 256.835 248.424 256.757 248.148 256.601C247.87 256.444 247.647 256.22 247.48 255.929C247.314 255.637 247.23 255.291 247.23 254.89C247.23 254.499 247.296 254.168 247.426 253.897C247.553 253.627 247.736 253.421 247.973 253.28C248.21 253.14 248.492 253.069 248.82 253.069C249.003 253.069 249.182 253.099 249.359 253.159C249.536 253.219 249.712 253.304 249.887 253.413C250.059 253.52 250.233 253.647 250.41 253.796C250.587 253.944 250.768 254.11 250.953 254.292L252.187 255.401L252.187 252.87ZM250.383 251.128L250.184 251.952L247.312 251.636L247.312 248.507L248.168 248.507L248.168 250.78L249.496 250.929C249.447 250.848 249.397 250.731 249.348 250.577C249.296 250.421 249.27 250.245 249.27 250.05C249.27 249.779 249.314 249.537 249.402 249.323C249.488 249.11 249.613 248.929 249.777 248.78C249.941 248.629 250.142 248.516 250.379 248.44C250.613 248.362 250.879 248.323 251.176 248.323C251.436 248.323 251.681 248.362 251.91 248.44C252.137 248.516 252.339 248.632 252.516 248.788C252.69 248.944 252.828 249.141 252.93 249.378C253.029 249.615 253.078 249.894 253.078 250.214C253.078 250.456 253.043 250.689 252.973 250.913C252.9 251.134 252.794 251.334 252.656 251.511C252.516 251.688 252.344 251.83 252.141 251.937C251.937 252.041 251.704 252.098 251.441 252.108L251.441 251.089C251.616 251.071 251.764 251.024 251.887 250.948C252.009 250.873 252.103 250.774 252.168 250.651C252.233 250.526 252.266 250.382 252.266 250.218C252.266 250.069 252.238 249.942 252.184 249.835C252.126 249.726 252.047 249.636 251.945 249.565C251.844 249.495 251.724 249.443 251.586 249.409C251.448 249.375 251.297 249.358 251.133 249.358C250.974 249.358 250.829 249.378 250.699 249.417C250.566 249.456 250.452 249.516 250.355 249.597C250.259 249.677 250.185 249.779 250.133 249.901C250.081 250.021 250.055 250.162 250.055 250.323C250.055 250.539 250.087 250.706 250.152 250.823C250.217 250.938 250.294 251.039 250.383 251.128ZM252.496 247.483C252.34 247.483 252.208 247.43 252.102 247.323C251.995 247.216 251.941 247.072 251.941 246.89C251.941 246.707 251.995 246.563 252.102 246.456C252.208 246.349 252.34 246.296 252.496 246.296C252.65 246.296 252.78 246.349 252.887 246.456C252.991 246.563 253.043 246.707 253.043 246.89C253.043 247.072 252.991 247.216 252.887 247.323C252.78 247.43 252.65 247.483 252.496 247.483ZM247.266 242.437L247.266 242.296L248.098 242.296L248.098 242.362C248.098 242.677 248.146 242.955 248.242 243.194C248.339 243.431 248.474 243.629 248.648 243.788C248.82 243.944 249.025 244.063 249.262 244.144C249.496 244.224 249.753 244.265 250.031 244.265L250.953 244.265C251.169 244.265 251.359 244.243 251.523 244.198C251.685 244.151 251.822 244.088 251.934 244.007C252.043 243.924 252.125 243.827 252.18 243.718C252.234 243.606 252.262 243.483 252.262 243.351C252.262 243.218 252.234 243.098 252.18 242.991C252.125 242.884 252.048 242.793 251.949 242.718C251.848 242.64 251.729 242.581 251.594 242.542C251.458 242.5 251.31 242.479 251.148 242.479C250.99 242.479 250.842 242.499 250.707 242.538C250.572 242.577 250.453 242.634 250.352 242.71C250.247 242.785 250.168 242.879 250.113 242.991C250.056 243.101 250.027 243.226 250.027 243.366C250.027 243.549 250.07 243.711 250.156 243.854C250.24 243.998 250.349 244.111 250.484 244.194C250.62 244.278 250.763 244.323 250.914 244.331L250.742 244.679C250.521 244.666 250.318 244.619 250.133 244.538C249.948 244.455 249.786 244.344 249.648 244.206C249.51 244.065 249.404 243.9 249.328 243.71C249.253 243.517 249.215 243.304 249.215 243.069C249.215 242.799 249.267 242.562 249.371 242.358C249.473 242.155 249.612 241.987 249.789 241.854C249.966 241.719 250.171 241.618 250.402 241.55C250.632 241.482 250.874 241.448 251.129 241.448C251.402 241.448 251.658 241.493 251.895 241.581C252.132 241.667 252.339 241.792 252.516 241.956C252.693 242.12 252.831 242.318 252.93 242.55C253.029 242.782 253.078 243.042 253.078 243.331C253.078 243.636 253.021 243.909 252.906 244.151C252.792 244.391 252.633 244.597 252.43 244.769C252.227 244.94 251.99 245.072 251.719 245.163C251.448 245.254 251.155 245.3 250.84 245.3L250.426 245.3C249.98 245.3 249.566 245.239 249.184 245.116C248.801 244.994 248.466 244.813 248.18 244.573C247.891 244.331 247.667 244.032 247.508 243.675C247.346 243.318 247.266 242.905 247.266 242.437ZM252.199 239.96L252.199 239.886C252.199 239.55 252.156 239.266 252.07 239.034C251.984 238.8 251.863 238.611 251.707 238.468C251.548 238.322 251.359 238.216 251.141 238.151C250.919 238.084 250.674 238.05 250.406 238.05L249.375 238.05C249.156 238.05 248.965 238.072 248.801 238.116C248.634 238.16 248.495 238.223 248.383 238.304C248.271 238.382 248.187 238.474 248.133 238.581C248.076 238.688 248.047 238.802 248.047 238.925C248.047 239.06 248.078 239.18 248.141 239.284C248.203 239.388 248.289 239.477 248.398 239.55C248.505 239.62 248.629 239.675 248.77 239.714C248.91 239.75 249.059 239.769 249.215 239.769C249.366 239.769 249.51 239.752 249.648 239.718C249.786 239.681 249.909 239.628 250.016 239.558C250.122 239.485 250.207 239.394 250.27 239.284C250.329 239.175 250.359 239.047 250.359 238.901C250.359 238.763 250.333 238.638 250.281 238.526C250.227 238.412 250.155 238.313 250.066 238.229C249.975 238.146 249.875 238.082 249.766 238.038C249.654 237.991 249.54 237.965 249.426 237.96L249.582 237.597C249.772 237.597 249.96 237.637 250.145 237.718C250.329 237.796 250.497 237.907 250.648 238.05C250.797 238.19 250.917 238.354 251.008 238.542C251.096 238.729 251.141 238.931 251.141 239.147C251.141 239.416 251.091 239.653 250.992 239.858C250.893 240.064 250.757 240.237 250.582 240.378C250.405 240.516 250.202 240.62 249.973 240.69C249.741 240.761 249.493 240.796 249.23 240.796C248.957 240.796 248.701 240.753 248.461 240.667C248.219 240.581 248.007 240.457 247.824 240.296C247.639 240.132 247.495 239.934 247.391 239.702C247.284 239.47 247.23 239.21 247.23 238.921C247.23 238.621 247.289 238.354 247.406 238.12C247.523 237.886 247.686 237.687 247.895 237.522C248.1 237.358 248.344 237.233 248.625 237.147C248.906 237.059 249.214 237.015 249.547 237.015L249.91 237.015C250.262 237.015 250.595 237.05 250.91 237.12C251.225 237.19 251.513 237.299 251.773 237.444C252.034 237.59 252.259 237.776 252.449 238.003C252.639 238.227 252.786 238.495 252.891 238.808C252.992 239.118 253.043 239.472 253.043 239.87L253.043 239.96L252.199 239.96ZM247.312 234.96L253 234.96L253 236.034L247.312 236.034L247.312 234.96ZM247.312 231.546L250.086 233.827L251.48 235.132L250.437 235.323L249.262 234.417L247.312 232.862L247.312 231.546ZM253 232.741L250.336 234.511L249.641 233.741L253 231.464L253 232.741Z",
            fill: "#F4F4F4"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M254 265.804C254 266.358 253.932 266.881 253.796 267.374C253.66 267.867 253.472 268.312 253.232 268.71L254 269.735L253.446 270.474L252.678 269.449C252.38 269.769 252.044 270.02 251.671 270.202C251.299 270.383 250.908 270.474 250.5 270.474C249.528 270.474 248.701 270.018 248.021 269.105C247.34 268.193 247 267.093 247 265.804L247 261.135L250.5 261.135C251.466 261.135 252.291 261.589 252.975 262.497C253.658 263.405 254 264.507 254 265.804ZM253.222 265.804C253.222 264.793 252.956 263.934 252.425 263.23C251.894 262.525 251.252 262.172 250.5 262.172L247.778 262.172L247.778 265.804C247.778 266.808 248.042 267.664 248.57 268.373C249.098 269.082 249.742 269.436 250.5 269.436C251.252 269.436 251.894 269.082 252.425 268.373C252.956 267.664 253.222 266.808 253.222 265.804ZM252.396 266.492L250.597 263.807C250.539 263.72 250.469 263.694 250.388 263.729C250.307 263.764 250.26 263.841 250.247 263.962L250.092 266.064L248.799 264.806C248.766 264.771 248.732 264.756 248.696 264.76C248.661 264.765 248.627 264.784 248.594 264.819C248.562 264.862 248.546 264.911 248.546 264.968C248.546 265.024 248.562 265.074 248.594 265.117L250.393 267.789C250.451 267.876 250.521 267.901 250.602 267.867C250.683 267.832 250.73 267.754 250.743 267.633L250.899 265.532L252.192 266.803C252.224 266.829 252.258 266.842 252.294 266.842C252.329 266.842 252.363 266.821 252.396 266.777C252.428 266.734 252.444 266.686 252.444 266.635C252.444 266.583 252.428 266.535 252.396 266.492Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "46.3469",
            height: "21",
            rx: "3",
            transform: "matrix(6.02621e-08 -1 -1 -3.17063e-08 191 188.521)",
            fill: "url(#paint8_linear_5807_67640)",
            fillOpacity: "0.53"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "100.583",
            height: "21",
            rx: "3",
            transform: "matrix(6.0262e-08 -1 -1 -3.17063e-08 191 291.077)",
            fill: "url(#paint9_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "23.1348",
            height: "21",
            rx: "3",
            transform: "matrix(6.02621e-08 -1 -1 -3.17063e-08 156 220.732)",
            fill: "url(#paint10_linear_5807_67640)",
            fillOpacity: "0.53"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "68.7459",
            height: "21",
            rx: "3",
            transform: "matrix(6.0262e-08 -1 -1 -3.17063e-08 156 291.076)",
            fill: "url(#paint11_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M142 280.614C142 280.862 142.068 281.096 142.204 281.317C142.34 281.538 142.528 281.737 142.768 281.916L142 282.375L142.554 282.706L143.322 282.247C143.62 282.39 143.956 282.503 144.329 282.584C144.701 282.665 145.092 282.706 145.5 282.706C146.472 282.706 147.299 282.502 147.979 282.093C148.66 281.684 149 281.191 149 280.614L149 278.522L145.5 278.522C144.534 278.522 143.709 278.725 143.025 279.132C142.342 279.539 142 280.033 142 280.614ZM142.778 280.614C142.778 280.16 143.044 279.776 143.575 279.46C144.106 279.144 144.748 278.986 145.5 278.986L148.222 278.986L148.222 280.614C148.222 281.063 147.958 281.447 147.43 281.765C146.902 282.082 146.258 282.241 145.5 282.241C144.748 282.241 144.106 282.082 143.575 281.765C143.044 281.447 142.778 281.063 142.778 280.614ZM143.604 280.922L145.403 279.719C145.461 279.68 145.531 279.668 145.612 279.684C145.693 279.699 145.74 279.734 145.753 279.789L145.908 280.73L147.201 280.166C147.234 280.151 147.268 280.144 147.304 280.146C147.339 280.148 147.373 280.157 147.406 280.172C147.438 280.191 147.454 280.214 147.454 280.239C147.454 280.264 147.438 280.286 147.406 280.306L145.607 281.503C145.549 281.542 145.479 281.553 145.398 281.538C145.317 281.522 145.27 281.488 145.257 281.433L145.101 280.492L143.808 281.061C143.776 281.073 143.742 281.079 143.706 281.079C143.671 281.079 143.637 281.069 143.604 281.05C143.572 281.03 143.556 281.009 143.556 280.986C143.556 280.962 143.572 280.941 143.604 280.922Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "49.3242",
            height: "21",
            rx: "3",
            transform: "matrix(6.0262e-08 -1 -1 -3.17063e-08 121 291.077)",
            fill: "url(#paint12_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "25.3874",
            height: "21",
            rx: "3",
            transform: "matrix(6.0262e-08 -1 -1 -3.17063e-08 86 291.077)",
            fill: "url(#paint13_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M72 287.213C72 287.304 72.0681 287.391 72.2042 287.472C72.3403 287.554 72.5282 287.628 72.7681 287.693L72 287.863L72.5542 287.985L73.3222 287.816C73.6204 287.869 73.9559 287.91 74.3287 287.94C74.7012 287.97 75.0917 287.985 75.5 287.985C76.4722 287.985 77.2986 287.91 77.9792 287.759C78.6597 287.608 79 287.426 79 287.213L79 286.44L75.5 286.44C74.5343 286.44 73.7094 286.515 73.0255 286.665C72.3418 286.816 72 286.998 72 287.213ZM72.7778 287.213C72.7778 287.045 73.0435 286.903 73.575 286.787C74.1065 286.67 74.7481 286.612 75.5 286.612L78.2222 286.612L78.2222 287.213C78.2222 287.379 77.9582 287.52 77.4301 287.638C76.9017 287.755 76.2583 287.814 75.5 287.814C74.7481 287.814 74.1065 287.755 73.575 287.638C73.0435 287.52 72.7778 287.379 72.7778 287.213ZM73.6042 287.326L75.4028 286.882C75.4611 286.868 75.5309 286.864 75.612 286.869C75.6929 286.875 75.7398 286.888 75.7528 286.908L75.9083 287.256L77.2014 287.047C77.2338 287.042 77.2679 287.039 77.3037 287.04C77.3392 287.041 77.3731 287.044 77.4056 287.05C77.438 287.057 77.4542 287.065 77.4542 287.074C77.4542 287.084 77.438 287.092 77.4056 287.099L75.6069 287.541C75.5486 287.555 75.479 287.56 75.3981 287.554C75.317 287.548 75.2699 287.535 75.2569 287.515L75.1014 287.168L73.8083 287.378C73.7759 287.382 73.7418 287.384 73.7061 287.384C73.6705 287.384 73.6366 287.381 73.6042 287.374C73.5718 287.367 73.5556 287.359 73.5556 287.35C73.5556 287.341 73.5718 287.334 73.6042 287.326Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            width: "12.5208",
            height: "21",
            rx: "3",
            transform: "matrix(6.0262e-08 -1 -1 -3.17063e-08 51 290.995)",
            fill: "url(#paint14_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M37 289.09C37 289.135 37.0681 289.177 37.2042 289.218C37.3403 289.258 37.5282 289.294 37.7681 289.327L37 289.41L37.5542 289.471L38.3222 289.387C38.6204 289.413 38.9559 289.434 39.3287 289.448C39.7012 289.463 40.0917 289.471 40.5 289.471C41.4722 289.471 42.2986 289.433 42.9792 289.359C43.6597 289.285 44 289.195 44 289.09L44 288.709L40.5 288.709C39.5343 288.709 38.7094 288.746 38.0255 288.82C37.3418 288.894 37 288.984 37 289.09ZM37.7778 289.09C37.7778 289.007 38.0435 288.937 38.575 288.88C39.1065 288.822 39.7481 288.793 40.5 288.793L43.2222 288.793L43.2222 289.09C43.2222 289.171 42.9582 289.241 42.4301 289.299C41.9017 289.357 41.2583 289.386 40.5 289.386C39.7481 289.386 39.1065 289.357 38.575 289.299C38.0435 289.241 37.7778 289.171 37.7778 289.09ZM38.6042 289.146L40.4028 288.927C40.4611 288.92 40.5309 288.917 40.612 288.92C40.6929 288.923 40.7398 288.929 40.7528 288.939L40.9083 289.111L42.2014 289.008C42.2338 289.005 42.2679 289.004 42.3037 289.004C42.3392 289.005 42.3731 289.006 42.4056 289.009C42.438 289.013 42.4542 289.017 42.4542 289.021C42.4542 289.026 42.438 289.03 42.4056 289.034L40.6069 289.252C40.5486 289.259 40.479 289.261 40.3981 289.258C40.317 289.255 40.2699 289.249 40.2569 289.239L40.1014 289.067L38.8083 289.171C38.7759 289.173 38.7418 289.174 38.7061 289.174C38.6705 289.174 38.6366 289.173 38.6042 289.169C38.5718 289.165 38.5556 289.162 38.5556 289.157C38.5556 289.153 38.5718 289.149 38.6042 289.146Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "rect",
          {
            y: "32.167",
            width: "376.868",
            height: "331.171",
            fill: "url(#paint15_linear_5807_67640)"
          }
        ),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_5807_67640",
              x1: "0",
              y1: "21",
              x2: "222.249",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { offset: "0.9999", stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#29F2FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint1_linear_5807_67640",
              x1: "22.7499",
              y1: "0",
              x2: "27.9231",
              y2: "22.3983",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "#ECF2F5" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#C2DEEC" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint2_linear_5807_67640",
              x1: "0",
              y1: "21",
              x2: "248.873",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { offset: "0.9999", stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#29F2FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint3_linear_5807_67640",
              x1: "22.7499",
              y1: "0",
              x2: "27.9231",
              y2: "22.3983",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "#ECF2F5" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#C2DEEC" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint4_linear_5807_67640",
              x1: "229.815",
              y1: "158.078",
              x2: "234.596",
              y2: "180.658",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "#ECF2F5" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#C2DEEC" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint5_linear_5807_67640",
              x1: "205",
              y1: "311.991",
              x2: "339.461",
              y2: "311.991",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { offset: "0.9999", stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#29F2FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint6_linear_5807_67640",
              x1: "267.176",
              y1: "133.391",
              x2: "271.573",
              y2: "156.134",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "#ECF2F5" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#C2DEEC" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint7_linear_5807_67640",
              x1: "240",
              y1: "310.153",
              x2: "397.145",
              y2: "310.153",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { offset: "0.9999", stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#29F2FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint8_linear_5807_67640",
              x1: "23.1734",
              y1: "0",
              x2: "28.2614",
              y2: "22.4395",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "#ECF2F5" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#C2DEEC" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint9_linear_5807_67640",
              x1: "0",
              y1: "21",
              x2: "103.016",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { offset: "0.9999", stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#29F2FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint10_linear_5807_67640",
              x1: "11.5674",
              y1: "0",
              x2: "20.4514",
              y2: "19.5577",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "#ECF2F5" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#C2DEEC" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint11_linear_5807_67640",
              x1: "0",
              y1: "21",
              x2: "70.4091",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { offset: "0.9999", stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#29F2FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint12_linear_5807_67640",
              x1: "0",
              y1: "21",
              x2: "50.5175",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { offset: "0.9999", stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#29F2FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint13_linear_5807_67640",
              x1: "0",
              y1: "21",
              x2: "26.0016",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { offset: "0.9999", stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#29F2FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint14_linear_5807_67640",
              x1: "0",
              y1: "21",
              x2: "12.8237",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { offset: "0.9999", stopColor: "white" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#29F2FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint15_linear_5807_67640",
              x1: "188.434",
              y1: "32.167",
              x2: "188.434",
              y2: "296.117",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx$1("stop", { stopColor: "#000", stopOpacity: "0" }),
                /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#000" })
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
function Product({ className }) {
  return /* @__PURE__ */ jsx$1("div", { className: cn$1(className), children: /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "377",
      height: "319",
      viewBox: "0 0 377 319",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M189.468 41.2374C189.468 39.5806 188.125 38.2339 186.468 38.2718C158.426 38.9135 131.297 48.5394 109.091 65.7756C86.0947 83.6258 69.6854 108.624 62.4476 136.833C55.2098 165.041 57.5548 194.858 69.1133 221.587C80.6717 248.315 100.787 270.436 126.291 284.467C151.795 298.497 181.238 303.64 209.983 299.084C238.729 294.528 265.143 280.533 285.066 259.302C304.989 238.072 317.288 210.813 320.027 181.818C322.672 153.821 316.257 125.742 301.773 101.705C300.917 100.285 299.059 99.872 297.66 100.761L279.071 112.566C277.673 113.453 277.263 115.304 278.109 116.728C289.268 135.509 294.196 157.376 292.136 179.18C289.982 201.981 280.31 223.416 264.644 240.111C248.977 256.806 228.205 267.812 205.601 271.395C182.996 274.977 159.843 270.934 139.787 259.9C119.732 248.867 103.913 231.471 94.8242 210.453C85.7349 189.434 83.8908 165.987 89.5825 143.804C95.2741 121.622 108.178 101.964 126.262 87.9271C143.554 74.5043 164.644 66.9507 186.468 66.3154C188.124 66.2672 189.468 64.9286 189.468 63.2718V41.2374Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M189.307 27.7637C189.306 27.2112 188.857 26.7637 188.305 26.7686C154.391 27.0689 121.673 39.4323 96.0234 61.6618C70.3736 83.8913 53.4869 114.518 48.3721 148.041C48.2888 148.587 48.6679 149.096 49.2146 149.175L54.2992 149.912C54.8456 149.991 55.3525 149.611 55.436 149.066C60.3039 117.237 76.3424 88.161 100.697 67.0537C125.052 45.9465 156.115 34.2025 188.315 33.9056C188.867 33.9005 189.315 33.4526 189.314 32.9004L189.307 27.7637Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M48.765 152.544C48.2169 152.478 47.7185 152.869 47.656 153.418C43.9823 185.67 51.4128 218.207 68.7213 245.659C69.0159 246.126 69.6349 246.262 70.1 245.964L74.4278 243.193C74.8929 242.895 75.0279 242.276 74.7335 241.809C58.3186 215.752 51.2679 184.879 54.7425 154.272C54.8048 153.723 54.4144 153.224 53.8659 153.158L48.765 152.544Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M72.102 249.004C71.6447 249.314 71.5248 249.936 71.8376 250.391C82.2622 265.555 95.5244 278.561 110.896 288.691C126.268 298.821 143.453 305.879 161.504 309.479C162.045 309.587 162.569 309.232 162.674 308.69L163.646 303.645C163.751 303.103 163.395 302.579 162.854 302.471C145.724 299.047 129.415 292.345 114.826 282.731C100.237 273.117 87.648 260.776 77.749 246.387C77.436 245.932 76.8146 245.812 76.3573 246.122L72.102 249.004Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M166.268 309.332C166.177 309.877 166.547 310.393 167.092 310.479C199.868 315.672 233.436 309.283 262.023 292.413C262.498 292.133 262.652 291.518 262.368 291.044L259.728 286.639C259.444 286.166 258.829 286.012 258.353 286.293C231.22 302.292 199.366 308.354 168.261 303.438C167.716 303.352 167.2 303.719 167.11 304.264L166.268 309.332Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M264.743 289.589C265.036 290.057 265.653 290.198 266.119 289.902C287.513 276.286 304.898 257.22 316.484 234.666C316.737 234.174 316.538 233.572 316.045 233.323L311.459 231.01C310.966 230.762 310.365 230.96 310.113 231.451C299.113 252.844 282.622 270.93 262.331 283.855C261.865 284.152 261.723 284.769 262.016 285.237L264.743 289.589Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M317.573 230.205C318.072 230.441 318.668 230.229 318.902 229.728C327.454 211.375 332.004 191.415 332.251 171.173C332.258 170.62 331.812 170.17 331.26 170.167L326.122 170.143C325.57 170.141 325.12 170.586 325.113 171.138C324.872 190.334 320.557 209.263 312.453 226.671C312.22 227.172 312.432 227.768 312.931 228.005L317.573 230.205Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M331.244 167.157C331.796 167.148 332.237 166.693 332.224 166.141C331.884 151.411 329.266 136.823 324.461 122.897C324.281 122.375 323.709 122.102 323.188 122.286L318.343 123.997C317.822 124.181 317.549 124.752 317.729 125.274C322.278 138.474 324.76 152.299 325.087 166.258C325.1 166.811 325.554 167.251 326.107 167.242L331.244 167.157Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M322.32 119.892C322.837 119.699 323.1 119.123 322.904 118.607C319.79 110.44 315.933 102.578 311.381 95.1174C311.094 94.646 310.477 94.5015 310.008 94.7925L305.64 97.5004C305.17 97.7914 305.026 98.4078 305.313 98.8794C309.618 105.94 313.267 113.379 316.216 121.105C316.413 121.621 316.988 121.884 317.506 121.69L322.32 119.892Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M236.452 35.7404C236.635 35.2191 236.361 34.6478 235.839 34.4687C222.048 29.7438 207.614 27.1593 193.038 26.8051C192.486 26.7917 192.031 27.2318 192.021 27.7839L191.93 32.9198C191.92 33.4722 192.36 33.9275 192.912 33.9411C206.725 34.2819 220.404 36.7313 233.475 41.2044C233.998 41.3832 234.568 41.1093 234.751 40.5883L236.452 35.7404Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M253.601 43.0496C253.851 42.5568 253.654 41.9545 253.159 41.7084C248.622 39.4508 243.969 37.4365 239.217 35.674C238.7 35.482 238.126 35.7502 237.937 36.2691L236.182 41.0978C235.993 41.6171 236.261 42.1907 236.779 42.383C241.261 44.0475 245.652 45.9478 249.932 48.0761C250.427 48.3219 251.028 48.1252 251.278 47.6327L253.601 43.0496Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M268.637 51.8656C268.946 51.4072 268.824 50.7853 268.364 50.4803C264.494 47.918 260.501 45.546 256.4 43.3728C255.912 43.1143 255.308 43.3047 255.053 43.7943L252.677 48.3504C252.421 48.8403 252.612 49.4442 253.1 49.703C256.966 51.7534 260.73 53.9897 264.38 56.4042C264.84 56.7088 265.461 56.5874 265.769 56.1293L268.637 51.8656Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M281.353 61.4955C281.711 61.0747 281.66 60.443 281.237 60.0882C278.007 57.3813 274.658 54.8188 271.201 52.4082C270.748 52.0925 270.125 52.2082 269.813 52.6632L266.902 56.898C266.589 57.3533 266.704 57.9758 267.158 58.2919C270.414 60.564 273.568 62.9781 276.612 65.5272C277.035 65.8817 277.666 65.8309 278.024 65.4102L281.353 61.4955Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M289.991 69.4867C290.378 69.0929 290.373 68.4593 289.977 68.0748C288.027 66.1845 286.024 64.3502 283.97 62.5743C283.552 62.2132 282.921 62.2637 282.563 62.6838L279.228 66.5939C278.87 67.0143 278.92 67.6454 279.338 68.0068C281.263 69.6729 283.142 71.3929 284.97 73.1648C285.367 73.549 285.999 73.544 286.387 73.1503L289.991 69.4867Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M307.353 90.6717C307.813 90.3646 307.936 89.7432 307.626 89.2863C306.806 88.0792 305.968 86.8848 305.112 85.7034C304.788 85.2563 304.162 85.1612 303.717 85.4884L299.577 88.5335C299.132 88.8608 299.037 89.4867 299.361 89.934C300.154 91.0296 300.931 92.137 301.692 93.2558C302.002 93.7125 302.623 93.836 303.082 93.5289L307.353 90.6717Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M302.304 83.6013C302.743 83.2667 302.829 82.6389 302.491 82.2018C301.599 81.0472 300.689 79.9064 299.762 78.7798C299.411 78.3534 298.78 78.2969 298.356 78.6507L294.411 81.9436C293.987 82.2976 293.93 82.9281 294.281 83.3548C295.14 84.3996 295.984 85.4573 296.811 86.5275C297.149 86.9643 297.776 87.0494 298.215 86.7149L302.304 83.6013Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M296.969 77.0142C297.387 76.6539 297.435 76.0221 297.072 75.606C295.644 73.971 294.18 72.3689 292.679 70.8007C292.297 70.4018 291.664 70.3925 291.268 70.777L287.579 74.3553C287.183 74.74 287.173 75.373 287.555 75.7722C288.957 77.2384 290.326 78.7358 291.66 80.2634C292.024 80.6792 292.655 80.7267 293.073 80.3665L296.969 77.0142Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "path",
          {
            d: "M296.559 99.0839C297.942 98.172 298.326 96.31 297.384 94.9482C285.79 78.1953 270.448 64.3625 252.563 54.5612C234.679 44.7605 214.77 39.2746 194.421 38.5213C192.765 38.4601 191.403 39.7877 191.379 41.4444L191.072 63.2744C191.048 64.931 192.373 66.2884 194.028 66.3599C209.84 67.0428 225.299 71.3524 239.203 78.9725C253.108 86.5924 265.062 97.3052 274.153 110.269C275.105 111.626 276.963 112.012 278.347 111.099L296.559 99.0839Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx$1("rect", { width: "377", height: "319", fill: "url(#paint0_linear_5822_66951)" }),
        /* @__PURE__ */ jsx$1("defs", { children: /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "paint0_linear_5822_66951",
            x1: "189",
            y1: "17.8926",
            x2: "188.782",
            y2: "291.905",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx$1("stop", { stopColor: "#000", stopOpacity: "0" }),
              /* @__PURE__ */ jsx$1("stop", { offset: "1", stopColor: "#000" })
            ]
          }
        ) })
      ]
    }
  ) });
}
const ONE_PAGER = "https://docsend.com/view/bqy3graz8why2cbj";
const PITCH_DECK = "https://docsend.com/view/9m6ax6xfj63uxtsh";
const TOKENOMICS = "https://docsend.com/view/h72pxqgmuwydg4yn";
const FINANCIALS = "https://docsend.com/view/gcyfihhi8uyu2wpg";
const GROWTH_STRATEGY = "https://docsend.com/view/j3ys3ica6ankbz9d";
const PRO_FORMA_CAP_TABLE = "https://docsend.com/view/p54937nq94fizzsk";
const INCORPORATION_DOCS = "https://docsend.com/view/wcjtnzzpjx5sdguq";
const APP_DEMO = "https://docsend.com/view/cz57255dn4ugf3q6";
const SNAP_DEMO = "https://docsend.com/view/tuhvswszvzvhxgvb";
const MEDIA_MENTIONS = "https://docsend.com/view/77uhirm987hyr6mn";
const CALENDLY = "https://docsend.com/view/4xfgrdhnbd4irgeh";
const GIT_BOOK = "https://docsend.com/view/pbs57fwyupnnpyut";
const scrollToRef = (ref) => {
  const handleClick = () => {
    window.scrollTo({
      top: ref.current?.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };
  return { handleClick };
};
function Block({ id, children }) {
  return /* @__PURE__ */ jsx$1("section", { id, children: /* @__PURE__ */ jsx$1("div", { children }) });
}
const IconButtonLink$1 = ({ url, icon }) => /* @__PURE__ */ jsx$1("a", { href: url, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(
  Button,
  {
    variant: ButtonVariant.ghost,
    size: ButtonSize.iconXl,
    className: "transition-all duration-300",
    children: /* @__PURE__ */ jsx$1(Icon, { name: icon })
  }
) });
function Desktop() {
  const [activeSection, setActiveSection] = useState$1("PITCH_DECK");
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  scrollYProgress.onChange((latest) => {
    if (latest <= 0.2) {
      setActiveSection("PITCH_DECK");
    }
    if (latest > 0.2) {
      setActiveSection("PICK_PATH");
    }
    if (latest > 0.4) {
      setActiveSection("PRODUCT");
    }
    if (latest > 0.7) {
      setActiveSection("BUSINESS");
    }
    if (latest > 0.9) {
      setActiveSection("JOIN");
    }
    console.log("latest is ", latest);
  });
  const pitchDecksRef = useRef$1(null);
  const chooseYourPathRef = useRef$1(null);
  const productRef = useRef$1(null);
  const businessRef = useRef$1(null);
  const callToActionRef = useRef$1(null);
  const { handleClick: handleScrollToPitchDecks } = scrollToRef(pitchDecksRef);
  const { handleClick: handleScrollToChooseYourPath } = scrollToRef(chooseYourPathRef);
  const { handleClick: handleScrollToProduct } = scrollToRef(productRef);
  const { handleClick: handleScrollToBusiness } = scrollToRef(businessRef);
  const { handleClick: handleScrollToCallToAction } = scrollToRef(callToActionRef);
  function handleBack() {
    navigate("/");
  }
  return /* @__PURE__ */ jsxs("div", { className: "text-primary bg-transparent", children: [
    /* @__PURE__ */ jsx$1("div", { className: "fixed bottom-5 left-5 z-50 bg-primary/10 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end z-999 p-2 font-medium m-2.5", children: [
      /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.text,
          onClick: handleScrollToPitchDecks,
          className: `mb-2.5 w-full justify-end uppercase tracking-widest rounded-md text-lg ${activeSection === "PITCH_DECK" ? "bg-primary/20 text-primary" : "bg-transparent hover:bg-primary/10"}`,
          children: "Pitch Deck"
        }
      ),
      /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.text,
          onClick: handleScrollToChooseYourPath,
          className: `mb-2.5 w-full justify-end uppercase tracking-widest rounded-md text-lg ${activeSection === "PICK_PATH" ? "bg-primary/20 text-primary" : "bg-transparent hover:bg-primary/10"}`,
          children: "Pick Your Path"
        }
      ),
      /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.text,
          onClick: handleScrollToProduct,
          className: `mb-2.5 w-full justify-end uppercase tracking-widest rounded-md text-lg ${activeSection === "PRODUCT" ? "bg-primary/20 text-primary" : "bg-transparent hover:bg-primary/10"}`,
          children: "Product"
        }
      ),
      /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.text,
          onClick: handleScrollToBusiness,
          className: `mb-2.5 w-full justify-end uppercase tracking-widest rounded-md text-lg ${activeSection === "BUSINESS" ? "bg-primary/20 text-primary" : "bg-transparent hover:bg-primary/10"}`,
          children: "Business"
        }
      ),
      /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.text,
          onClick: handleScrollToCallToAction,
          className: `w-full justify-end uppercase tracking-widest rounded-md text-lg ${activeSection === "JOIN" ? "bg-primary/20 text-primary" : "bg-transparent hover:bg-primary/10"}`,
          children: "Contact Us"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx$1("div", { ref: pitchDecksRef, children: /* @__PURE__ */ jsxs(Block, { id: "2", children: [
      /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx$1(
          "button",
          {
            className: "absolute top-8 left-8 hover:cursor-pointer",
            onClick: handleBack,
            "aria-label": "Go back",
            children: /* @__PURE__ */ jsx$1(HeaderLogo, {})
          }
        ),
        /* @__PURE__ */ jsx$1("div", { className: "flex items-center justify-evenly gap-12 h-[88vh]", children: /* @__PURE__ */ jsx$1("a", { href: PITCH_DECK, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Pitch Deck", glow: "white" }) }) })
      ] }),
      /* @__PURE__ */ jsx$1(Fragment$1, { children: /* @__PURE__ */ jsx$1(
        "div",
        {
          className: "flex flex-col justify-center h-[10vh] mb-0",
          ref: chooseYourPathRef,
          children: /* @__PURE__ */ jsx$1(
            Button,
            {
              variant: ButtonVariant.ghost,
              onClick: activeSection === "PITCH_DECK" ? handleScrollToChooseYourPath : handleScrollToPitchDecks,
              className: "w-fit mx-auto",
              children: /* @__PURE__ */ jsx$1(
                Icon,
                {
                  name: activeSection === "PITCH_DECK" ? IconName.arrowDown : IconName.arrowUp
                }
              )
            }
          )
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx$1("div", { children: /* @__PURE__ */ jsx$1(Block, { id: "3", children: /* @__PURE__ */ jsxs("div", { className: "h-[90vh] pt-[10vh]", children: [
      /* @__PURE__ */ jsx$1(
        Text,
        {
          variant: TextVariant.headline,
          weight: TextWeight.medium,
          className: "text-primary pb-6 tracking-widest text-center mb-12 uppercase",
          children: "Follow your Intuition"
        }
      ),
      /* @__PURE__ */ jsx$1(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-0 h-[500px]", children: [
        /* @__PURE__ */ jsx$1("div", { className: "w-[40vw] h-full", children: /* @__PURE__ */ jsx$1(
          PathCard,
          {
            heading: "The Product",
            buttonLabel: "Choose",
            handleClick: handleScrollToProduct,
            children: /* @__PURE__ */ jsx$1(Product, {})
          }
        ) }),
        /* @__PURE__ */ jsx$1(PathCardSeparator, {}),
        /* @__PURE__ */ jsx$1("div", { className: "w-[40vw] h-full", children: /* @__PURE__ */ jsx$1(
          PathCard,
          {
            heading: "The Business",
            buttonLabel: "Choose",
            handleClick: handleScrollToBusiness,
            children: /* @__PURE__ */ jsx$1(Business, {})
          }
        ) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx$1("div", { ref: productRef, children: /* @__PURE__ */ jsx$1(Block, { id: "4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-evenly gap-12 h-[100vh] relative", children: [
      /* @__PURE__ */ jsx$1("div", { className: "absolute top-[5vh] left-1/2 transform -translate-x-1/2 z-10", children: /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.ghost,
          onClick: handleScrollToChooseYourPath,
          className: "w-fit mx-auto",
          children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.arrowUp })
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.headline,
            weight: TextWeight.medium,
            className: "text-primary pb-6 tracking-widest text-center mb-12",
            children: "The Vision"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx$1("a", { href: ONE_PAGER, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "1-Pager", size: "sm" }) }),
          /* @__PURE__ */ jsx$1(
            "a",
            {
              href: "https://medium.com/0xintuition",
              target: "_blank",
              rel: "noreferrer",
              children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Medium", size: "sm" })
            }
          ),
          /* @__PURE__ */ jsx$1("a", { href: APP_DEMO, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "App Video", size: "sm" }) }),
          /* @__PURE__ */ jsx$1("a", { href: SNAP_DEMO, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "MetaMask Integration Video", size: "sm" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.headline,
            weight: TextWeight.medium,
            className: "text-primary pb-6 tracking-widest text-center mb-12",
            children: "How it Works"
          }
        ),
        /* @__PURE__ */ jsx$1("a", { href: GIT_BOOK, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Gitbook", size: "md" }) })
      ] }),
      /* @__PURE__ */ jsx$1("div", { className: "absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 z-10", children: /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.ghost,
          onClick: handleScrollToBusiness,
          className: "w-fit mx-auto",
          children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.arrowDown })
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx$1("div", { ref: businessRef, children: /* @__PURE__ */ jsx$1(Block, { id: "5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-evenly gap-12 h-[100vh] relative", children: [
      /* @__PURE__ */ jsx$1("div", { className: "absolute top-[5vh] left-1/2 transform -translate-x-1/2 z-10", children: /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.ghost,
          onClick: handleScrollToProduct,
          className: "w-fit mx-auto",
          children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.arrowUp })
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.headline,
            weight: TextWeight.medium,
            className: "text-primary pb-6 tracking-widest text-center mb-12",
            children: "Financials & Tokenomics"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx$1("a", { href: TOKENOMICS, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Tokenomics", size: "sm" }) }),
          /* @__PURE__ */ jsx$1("a", { href: FINANCIALS, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Financial Model", size: "sm" }) }),
          /* @__PURE__ */ jsx$1("a", { href: PRO_FORMA_CAP_TABLE, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Cap Table", size: "sm" }) }),
          /* @__PURE__ */ jsx$1("a", { href: INCORPORATION_DOCS, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Formation Docs", size: "sm" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.headline,
            weight: TextWeight.medium,
            className: "text-primary pb-6 tracking-widest text-center mb-12",
            children: "Growth"
          }
        ),
        /* @__PURE__ */ jsx$1("a", { href: GROWTH_STRATEGY, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Strategy", size: "sm" }) }),
        /* @__PURE__ */ jsx$1("a", { href: MEDIA_MENTIONS, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Media Mentions", size: "sm" }) })
      ] }),
      /* @__PURE__ */ jsx$1("div", { className: "absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 z-10", children: /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.ghost,
          onClick: handleScrollToCallToAction,
          className: "w-fit mx-auto",
          children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.arrowDown })
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx$1("div", { ref: callToActionRef, children: /* @__PURE__ */ jsx$1(Block, { id: "6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-evenly gap-12 h-[100vh] relative", children: [
      /* @__PURE__ */ jsx$1("div", { className: "absolute top-[5vh] left-1/2 transform -translate-x-1/2 z-10", children: /* @__PURE__ */ jsx$1(
        Button,
        {
          variant: ButtonVariant.ghost,
          onClick: handleScrollToBusiness,
          className: "w-fit mx-auto",
          children: /* @__PURE__ */ jsx$1(Icon, { name: IconName.arrowUp })
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col align-center gap-6", children: [
          /* @__PURE__ */ jsx$1(
            Text,
            {
              variant: TextVariant.headline,
              weight: TextWeight.medium,
              className: "text-primary pb-6 tracking-widest text-center uppercase",
              children: "Get Involved"
            }
          ),
          /* @__PURE__ */ jsx$1("a", { href: CALENDLY, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(
            Button,
            {
              onClick: () => console.log("scheduled call"),
              variant: ButtonVariant.ghost,
              size: ButtonSize.xl,
              className: "mx-auto uppercase tracking-widest transition-all duration-300",
              children: "Schedule a Call"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-end flex-row gap-12", children: [
          /* @__PURE__ */ jsx$1("div", { className: "border border-white rounded-lg", children: /* @__PURE__ */ jsx$1(
            IconButtonLink$1,
            {
              url: "https://medium.com/0xintuition",
              icon: IconName.medium
            }
          ) }),
          /* @__PURE__ */ jsx$1("div", { className: "border border-white rounded-lg", children: /* @__PURE__ */ jsx$1(
            IconButtonLink$1,
            {
              url: "https://discord.gg/2vbVnX6wQp",
              icon: IconName.discord
            }
          ) }),
          /* @__PURE__ */ jsx$1("div", { className: "border border-white rounded-lg", children: /* @__PURE__ */ jsx$1(
            IconButtonLink$1,
            {
              url: "https://twitter.com/0xIntuition",
              icon: IconName.twitter
            }
          ) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx$1(
      motion.div,
      {
        style: {
          position: "fixed",
          left: 0,
          right: 0,
          height: "2px",
          background: "white",
          bottom: "20px",
          scaleX
        }
      }
    )
  ] });
}
function MobileSectionCard({
  text,
  variant = "blue"
}) {
  return /* @__PURE__ */ jsx$1(
    "div",
    {
      className: clsx$1(
        "w-full py-5 border-t border-b border-border mb-20 uppercase",
        variant === "blue" && "bg-for/20",
        variant === "red" && "bg-destructive/20"
      ),
      children: /* @__PURE__ */ jsx$1(
        Text,
        {
          variant: TextVariant.headline,
          weight: TextWeight.medium,
          className: "text-primary",
          children: text
        }
      )
    }
  );
}
function ScrollIcon({ className }) {
  return /* @__PURE__ */ jsx$1("div", { className: cn$1(className), children: /* @__PURE__ */ jsx$1(
    "svg",
    {
      width: "23",
      height: "53",
      viewBox: "0 0 23 53",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx$1(
        "path",
        {
          d: "M11.5 26.5V25.5V26.5ZM10.5 29.8633C10.5 30.4156 10.9477 30.8633 11.5 30.8633C12.0523 30.8633 12.5 30.4156 12.5 29.8633H10.5ZM9.45 24.45H8.45H9.45ZM13.55 24.45H12.55H13.55ZM13.55 18.9406H14.55H13.55ZM21.75 31.625H22.75H21.75ZM21.75 21.375H20.75H21.75ZM1.25 21.375H0.25H1.25ZM9.45 18.9406H10.45H9.45ZM1.25 31.625H0.25H1.25ZM3.83817 45.1913C3.39152 44.8664 2.7661 44.9652 2.44127 45.4118C2.11643 45.8585 2.21518 46.4839 2.66183 46.8087L3.83817 45.1913ZM11.5 52L10.9118 52.8087C11.2625 53.0638 11.7375 53.0638 12.0882 52.8087L11.5 52ZM20.3382 46.8087C20.7848 46.4839 20.8836 45.8585 20.5587 45.4118C20.2339 44.9652 19.6085 44.8664 19.1618 45.1913L20.3382 46.8087ZM19.1618 7.80874C19.6085 8.13357 20.2339 8.03482 20.5587 7.58817C20.8836 7.14152 20.7848 6.5161 20.3382 6.19126L19.1618 7.80874ZM11.5 1L12.0882 0.191264C11.7375 -0.0637547 11.2625 -0.0637547 10.9118 0.191264L11.5 1ZM2.66183 6.19126C2.21518 6.5161 2.11643 7.14152 2.44126 7.58817C2.7661 8.03482 3.39152 8.13357 3.83817 7.80874L2.66183 6.19126ZM10.5 11.125V16.8906H12.5V11.125H10.5ZM12.55 18.9406V24.45H14.55V18.9406H12.55ZM10.45 24.45V18.9406H8.45V24.45H10.45ZM10.5 26.5L10.5 29.8633H12.5L12.5 26.5H10.5ZM8.45 24.45C8.45 26.1345 9.81553 27.5 11.5 27.5V25.5C10.9201 25.5 10.45 25.0299 10.45 24.45H8.45ZM12.55 24.45C12.55 25.0299 12.0799 25.5 11.5 25.5V27.5C13.1845 27.5 14.55 26.1345 14.55 24.45H12.55ZM11.5 17.8906C12.0799 17.8906 12.55 18.3607 12.55 18.9406H14.55C14.55 17.2562 13.1845 15.8906 11.5 15.8906V17.8906ZM11.5 42.875C17.7132 42.875 22.75 37.8382 22.75 31.625H20.75C20.75 36.7336 16.6086 40.875 11.5 40.875V42.875ZM22.75 21.375C22.75 15.1618 17.7132 10.125 11.5 10.125V12.125C16.6086 12.125 20.75 16.2664 20.75 21.375H22.75ZM2.25 21.375C2.25 16.2664 6.39137 12.125 11.5 12.125V10.125C5.2868 10.125 0.25 15.1618 0.25 21.375H2.25ZM10.45 18.9406C10.45 18.3607 10.9201 17.8906 11.5 17.8906V15.8906C9.81553 15.8906 8.45 17.2562 8.45 18.9406H10.45ZM11.5 40.875C6.39137 40.875 2.25 36.7336 2.25 31.625H0.25C0.250001 37.8382 5.2868 42.875 11.5 42.875V40.875ZM2.25 31.625L2.25 21.375H0.25L0.25 31.625H2.25ZM20.75 21.375L20.75 31.625H22.75L22.75 21.375H20.75ZM2.66183 46.8087L10.9118 52.8087L12.0882 51.1913L3.83817 45.1913L2.66183 46.8087ZM12.0882 52.8087L20.3382 46.8087L19.1618 45.1913L10.9118 51.1913L12.0882 52.8087ZM20.3382 6.19126L12.0882 0.191264L10.9118 1.80874L19.1618 7.80874L20.3382 6.19126ZM10.9118 0.191264L2.66183 6.19126L3.83817 7.80874L12.0882 1.80874L10.9118 0.191264Z",
          fill: "white"
        }
      )
    }
  ) });
}
const IconButtonLink = ({ url, icon }) => /* @__PURE__ */ jsx$1("a", { href: url, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(
  Button,
  {
    variant: ButtonVariant.ghost,
    size: ButtonSize.iconXl,
    className: "transition-all duration-300",
    children: /* @__PURE__ */ jsx$1(Icon, { name: icon })
  }
) });
function Mobile() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  scrollYProgress.onChange(() => {
  });
  function handleBack() {
    navigate("/investors");
  }
  return /* @__PURE__ */ jsxs("div", { className: "text-primary bg-black text-center font-rubik", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx$1(
        "button",
        {
          className: "absolute top-8 left-8 hover:cursor-pointer",
          onClick: handleBack,
          "aria-label": "Go back",
          children: /* @__PURE__ */ jsx$1(HeaderLogo, {})
        }
      ),
      /* @__PURE__ */ jsx$1("div", { className: "flex items-center justify-evenly gap-12 h-[88vh]", children: /* @__PURE__ */ jsx$1("a", { href: PITCH_DECK, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Pitch Deck", glow: "white", disableScale: true }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center h-[10vh] mb-12 gap-2", children: [
        /* @__PURE__ */ jsx$1(ScrollIcon, { className: "mx-auto" }),
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.caption,
            className: "tracking-widest text-primary/70 uppercase",
            children: "SCROLL"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-25", children: [
      /* @__PURE__ */ jsx$1(MobileSectionCard, { text: "The Product" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 mb-[200px]", children: [
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.headline,
            weight: TextWeight.medium,
            className: "text-primary pb-6 tracking-widest text-center uppercase",
            children: "The Vision"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx$1("a", { href: ONE_PAGER, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "1-Pager", size: "x-sm", disableScale: true }) }),
          /* @__PURE__ */ jsx$1(
            "a",
            {
              href: "https://medium.com/0xintuition",
              target: "_blank",
              rel: "noreferrer",
              children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Medium", size: "x-sm", disableScale: true })
            }
          ),
          /* @__PURE__ */ jsx$1("a", { href: APP_DEMO, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "App Video", size: "x-sm", disableScale: true }) }),
          /* @__PURE__ */ jsx$1("a", { href: SNAP_DEMO, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Snap Video", size: "x-sm", disableScale: true }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 mb-[200px]", children: [
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.headline,
            weight: TextWeight.medium,
            className: "text-primary pb-6 tracking-widest text-center uppercase",
            children: "How it Works"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "a",
          {
            href: GIT_BOOK,
            target: "_blank",
            rel: "noreferrer",
            className: "mx-auto",
            children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Gitbook", size: "md", disableScale: true })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-25", children: [
      /* @__PURE__ */ jsx$1(MobileSectionCard, { text: "The Business", variant: "red" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 mb-[200px]", children: [
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.headline,
            weight: TextWeight.medium,
            className: "text-primary pb-6 tracking-widest text-center uppercase",
            children: "Financials & Tokenomics"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx$1("a", { href: TOKENOMICS, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Tokenomics", size: "x-sm", disableScale: true }) }),
          /* @__PURE__ */ jsx$1("a", { href: FINANCIALS, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Financial Model", size: "x-sm", disableScale: true }) }),
          /* @__PURE__ */ jsx$1("a", { href: PRO_FORMA_CAP_TABLE, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Cap Table", size: "x-sm", disableScale: true }) }),
          /* @__PURE__ */ jsx$1("a", { href: INCORPORATION_DOCS, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Formation Docs", size: "x-sm", disableScale: true }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.headline,
            weight: TextWeight.medium,
            className: "text-primary pb-6 tracking-widest text-center uppercase",
            children: "Growth"
          }
        ),
        /* @__PURE__ */ jsx$1(
          "a",
          {
            href: GROWTH_STRATEGY,
            target: "_blank",
            rel: "noreferrer",
            className: "mx-auto",
            children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Strategy", size: "sm", disableScale: true })
          }
        ),
        /* @__PURE__ */ jsx$1(
          "a",
          {
            href: MEDIA_MENTIONS,
            target: "_blank",
            rel: "noreferrer",
            className: "mx-auto",
            children: /* @__PURE__ */ jsx$1(SunburstCard, { label: "Media Mentions", size: "sm", disableScale: true })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-12 h-[100vh]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsx$1(
          Text,
          {
            variant: TextVariant.headline,
            weight: TextWeight.medium,
            className: "text-primary pb-6 tracking-widest text-center uppercase",
            children: "Get Involved"
          }
        ),
        /* @__PURE__ */ jsx$1("a", { href: CALENDLY, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx$1(
          Button,
          {
            onClick: () => console.log("scheduled call"),
            variant: ButtonVariant.ghost,
            size: ButtonSize.xl,
            className: "mx-auto uppercase tracking-widest transition-all duration-300",
            children: "Schedule a Call"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-end flex-row gap-12", children: [
        /* @__PURE__ */ jsx$1("div", { className: "border border-white rounded-lg", children: /* @__PURE__ */ jsx$1(
          IconButtonLink,
          {
            url: "https://medium.com/0xintuition",
            icon: IconName.medium
          }
        ) }),
        /* @__PURE__ */ jsx$1("div", { className: "border border-white rounded-lg", children: /* @__PURE__ */ jsx$1(
          IconButtonLink,
          {
            url: "https://discord.gg/2vbVnX6wQp",
            icon: IconName.discord
          }
        ) }),
        /* @__PURE__ */ jsx$1("div", { className: "border border-white rounded-lg", children: /* @__PURE__ */ jsx$1(
          IconButtonLink,
          {
            url: "https://twitter.com/0xIntuition",
            icon: IconName.twitter
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx$1(
      motion.div,
      {
        style: {
          position: "fixed",
          left: 0,
          right: 0,
          height: "2px",
          background: "white",
          bottom: "20px",
          scaleX
        }
      }
    )
  ] });
}
function App() {
  const [isMobile, setIsMobile] = useState$1(true);
  useEffect$1(() => {
    if (!isMobile) {
      const html = document.querySelector("html");
      if (html) {
        html.style.overflow = "hidden";
      }
    } else {
      const html = document.querySelector("html");
      if (html) {
        html.style.overflow = "auto";
      }
    }
  }, [isMobile]);
  useEffect$1(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addListener((e) => setIsMobile(e.matches));
    console.log(mediaQuery);
    return () => {
      mediaQuery.removeListener((e) => setIsMobile(e.matches));
    };
  }, []);
  return /* @__PURE__ */ jsx$1("div", { children: isMobile ? /* @__PURE__ */ jsx$1(Mobile, {}) : /* @__PURE__ */ jsx$1(Desktop, {}) });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BvSV3dLd.js", "imports": ["/assets/index-DiMdC_y6.js", "/assets/components-DLh8nZLf.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-DRyCVw2o.js", "imports": ["/assets/index-DiMdC_y6.js", "/assets/components-DLh8nZLf.js", "/assets/Card-wsRMiCj_.js", "/assets/misc-CusaSfkD.js"], "css": ["/assets/Card-DO81M3F5.css", "/assets/root-Bx_VW8H0.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-CBvrz7jo.js", "imports": ["/assets/index-DiMdC_y6.js", "/assets/Card-wsRMiCj_.js"], "css": ["/assets/Card-DO81M3F5.css"] }, "routes/map": { "id": "routes/map", "parentId": "root", "path": "map", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/map-DGP50v0H.js", "imports": ["/assets/index-DiMdC_y6.js", "/assets/Card-wsRMiCj_.js", "/assets/misc-CusaSfkD.js"], "css": ["/assets/Card-DO81M3F5.css"] } }, "url": "/assets/manifest-9b0d7a69.js", "version": "9b0d7a69" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/map": {
    id: "routes/map",
    parentId: "root",
    path: "map",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
