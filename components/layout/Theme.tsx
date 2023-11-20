'use client';

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

const accordionTheme = {
  "root": {
    "base": "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    "flush": {
      "off": "rounded-lg border",
      "on": "border-b",
    },
  },
  "content": {
    "base": "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg",
  },
  "title": {
    "arrow": {
      "base": "h-6 w-6 shrink-0",
      "open": {
        "off": "",
        "on": "rotate-180",
      },
    },
    "base": "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
    "flush": {
      "off": "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      "on": "bg-transparent dark:bg-transparent",
    },
    "heading": "",
    "open": {
      "off": "",
      "on": "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white",
    },
  },
};
const alertTheme = {
  "base": "flex flex-col gap-2 p-4 text-sm",
  "borderAccent": "border-t-4",
  "closeButton": {
    "base": "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    "icon": "w-5 h-5",
    "color": {
      "info": "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      "gray": "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      "failure": "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      "success": "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      "warning": "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      "red": "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      "green": "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      "yellow": "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      "blue": "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      "cyan": "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      "pink": "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      "lime": "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      "dark": "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
      "indigo": "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      "purple": "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      "teal": "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      "light": "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
    }
  },
  "color": {
    "info": "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
    "gray": "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
    "failure": "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
    "success": "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
    "warning": "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
    "red": "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
    "green": "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
    "yellow": "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
    "blue": "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
    "cyan": "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
    "pink": "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
    "lime": "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
    "dark": "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
    "indigo": "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
    "purple": "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
    "teal": "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
    "light": "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200",
  },
  "icon": "mr-3 inline h-5 w-5 flex-shrink-0",
  "rounded": "rounded-lg",
  "wrapper": "flex items-center",
};
const avatarTheme = {
  "root": {
    "base": "flex justify-center items-center space-x-4 rounded",
    "bordered": "p-1 ring-2",
    "rounded": "rounded-full",
    "color": {
      "dark": "ring-gray-800 dark:ring-gray-800",
      "failure": "ring-red-500 dark:ring-red-700",
      "gray": "ring-gray-500 dark:ring-gray-400",
      "info": "ring-cyan-400 dark:ring-cyan-800",
      "light": "ring-gray-300 dark:ring-gray-500",
      "purple": "ring-purple-500 dark:ring-purple-600",
      "success": "ring-green-500 dark:ring-green-500",
      "warning": "ring-yellow-300 dark:ring-yellow-500",
      "pink": "ring-pink-500 dark:ring-pink-500",
    },
    "img": {
      "base": "rounded",
      "off": "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      "on": "",
      "placeholder": "absolute w-auto h-auto text-gray-400 -bottom-1",
    },
    "size": {
      "xs": "w-6 h-6",
      "sm": "w-8 h-8",
      "md": "w-10 h-10",
      "lg": "w-20 h-20",
      "xl": "w-36 h-36",
    },
    "stacked": "ring-2 ring-gray-300 dark:ring-gray-500",
    "statusPosition": {
      "bottom-left": "-bottom-1 -left-1",
      "bottom-center": "-bottom-1 center",
      "bottom-right": "-bottom-1 -right-1",
      "top-left": "-top-1 -left-1",
      "top-center": "-top-1 center",
      "top-right": "-top-1 -right-1",
      "center-right": "center -right-1",
      "center": "center center",
      "center-left": "center -left-1",
    },
    "status": {
      "away": "bg-yellow-400",
      "base": "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      "busy": "bg-red-400",
      "offline": "bg-gray-400",
      "online": "bg-green-400",
    },
    "initials": {
      "text": "font-medium text-gray-600 dark:text-gray-300",
      "base": "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600",
    }
  },
  "group": {
    "base": "flex -space-x-4",
  },
  "groupCounter": {
    "base": "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500",
  },
};
const badgeTheme = {
  "root": {
    "base": "flex h-fit items-center gap-1 font-semibold",
    "color": {
      "info": "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      "gray": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
      "failure": "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      "success": "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      "warning": "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
      "indigo": "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
      "purple": "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
      "pink": "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
      "blue": "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      "cyan": "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      "dark": "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
      "light": "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
      "green": "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      "lime": "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
      "red": "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      "teal": "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
      "yellow": "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
    },
    "href": "group",
    "size": {
      "xs": "p-1 text-xs",
      "sm": "p-1.5 text-sm",
    },
  },
  "icon": {
    "off": "rounded px-2 py-0.5",
    "on": "rounded-full p-1.5",
    "size": {
      "xs": "w-3 h-3",
      "sm": "w-3.5 h-3.5",
    },
  },
};
const blockquoteTheme = {};
const breadcrumbTheme = {
  "root": {
    "base": "",
    "list": "flex items-center"
  },
  "item": {
    "base": "group flex items-center",
    "chevron": "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
    "href": {
      "off": "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
      "on": "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
    },
    "icon": "mr-2 h-4 w-4",
  },
};
const buttonTheme = {
  "base": "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
  "fullSized": "w-full",
  "color": {
    "primary": 'text-white bg-primary border border-transparent enabled:hover:bg-primary-dark focus:ring-4 focus:ring-primary-300',
    "dark": "text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
    "failure": "text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",
    "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
    "info": "text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800",
    "light": "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
    "purple": "text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",
    "success": "text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",
    "warning": "text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    "blue": "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    "cyan": "text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",
    "green": "text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
    "indigo": "text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",
    "lime": "text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",
    "pink": "text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",
    "red": "text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
    "teal": "text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",
    "yellow": "text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700",
  },
  "disabled": "cursor-not-allowed opacity-50",
  "isProcessing": "cursor-wait",
  "spinnerSlot": "absolute h-full top-0 flex items-center animate-fade-in",
  "spinnerLeftPosition": {
    "xs": "left-2",
    "sm": "left-3",
    "md": "left-4",
    "lg": "left-5",
    "xl": "left-6",
  },
  "gradient": {
    "cyan": "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    "failure": "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
    "info": "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
    "lime": "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
    "pink": "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
    "purple": "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
    "success": "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
    "teal": "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800",
  },
  "gradientDuoTone": {
    "cyanToBlue": "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    "greenToBlue": "text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
    "pinkToOrange": "text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
    "purpleToBlue": "text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    "purpleToPink": "text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
    "redToYellow": "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
    "tealToLime": "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700",
  },
  "inner": {
    "base": "flex items-stretch items-center transition-all duration-200",
    "position": {
      "none": "",
      "start": "rounded-r-none",
      "middle": "rounded-none",
      "end": "rounded-l-none",
    },
    "outline": "border border-transparent",
    "isProcessingPadding": {
      "xs": "pl-8",
      "sm": "pl-10",
      "md": "pl-12",
      "lg": "pl-16",
      "xl": "pl-20",
    }
  },
  "label": "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  "outline": {
    "color": {
      "gray": "border border-gray-900 dark:border-white",
      "default": "border-0",
      "light": "",
    },
    "off": "",
    "on": "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
    "pill": {
      "off": "rounded-md",
      "on": "rounded-full",
    }
  },
  "pill": {
    "off": "rounded-lg",
    "on": "rounded-full",
  },
  "size": {
    "xs": "text-xs px-2 py-1",
    "sm": "text-sm px-3 py-1.5",
    "md": "text-sm px-4 py-2",
    "lg": "text-base px-5 py-2.5",
    "xl": "text-base px-6 py-3",
  },
};
const buttonGroupTheme = {
  "base": "inline-flex",
  "position": {
    "none": "focus:ring-2",
    "start": "rounded-r-none",
    "middle": "rounded-none border-l-0 pl-0",
    "end": "rounded-l-none border-l-0 pl-0",
  },
};
const cardTheme = {
  "root": {
    "base": "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    "children": "flex h-full flex-col justify-center gap-4 p-6",
    "horizontal": {
      "off": "flex-col",
      "on": "flex-col md:max-w-xl md:flex-row",
    },
    "href": "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  "img": {
    "base": "",
    "horizontal": {
      "off": "rounded-t-lg",
      "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};
const carouselTheme = {
  "root": {
    "base": "relative h-full w-full",
    "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  "indicators": {
    "active": {
      "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      "on": "bg-white dark:bg-gray-800",
    },
    "base": "h-3 w-3 rounded-full",
    "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  "item": {
    "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    "wrapper": {
      "off": "w-full flex-shrink-0 transform cursor-default snap-center",
      "on": "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  "control": {
    "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  "scrollContainer": {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    "snap": "snap-x",
  },
};
const checkboxTheme = {
  root: {
    'base': 'h-4 w-4 rounded focus:ring-2 border border-gray-300 bg-gray-100',
    'color': {
      'default': 'focus:ring-primary-600 text-primary-600',
      'dark': 'focus:ring-gray-800 text-gray-800',
      'failure': 'focus:ring-red-900 text-red-900',
      'gray': 'focus:ring-gray-900 text-gray-900',
      'info': 'focus:ring-cyan-800 text-cyan-800',
      'light': 'focus:ring-gray-900 text-gray-900',
      'purple': 'focus:ring-purple-600 text-purple-600',
      'success': 'focus:ring-green-800 text-green-800',
      'warning': 'focus:ring-yellow-400 text-yellow-400',
      'blue': 'focus:ring-blue-600 text-blue-700',
      'cyan': 'focus:ring-cyan-600 text-cyan-600',
      'green': 'focus:ring-green-600 text-green-600',
      'indigo': 'focus:ring-indigo-700 text-indigo-700',
      'lime': 'focus:ring-lime-700 text-lime-700',
      'pink': 'focus:ring-pink-600 text-pink-600',
      'red': 'focus:ring-red-600 text-red-600',
      'teal': 'focus:ring-teal-600 text-teal-600',
      'yellow': 'focus:ring-yellow-400 text-yellow-400',
    }
  }
};
const darkThemeToggleTheme = {};
const datepickerTheme = {
  root: {
    base: 'relative'
  },
  popup: {
    root: {
      base: 'absolute top-10 z-50 block pt-2',
      inline: 'relative top-0 z-auto',
      inner: 'inline-block rounded-lg bg-white p-4 shadow-lg'
    },
    header: {
      base: '',
      title: 'px-2 py-3 text-center font-semibold text-gray-900',
      selectors: {
        base: 'flex justify-between mb-2',
        button: {
          base: 'text-sm rounded-lg text-gray-900 bg-white font-semibold py-2.5 px-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch',
          prev: '',
          next: '',
          view: ''
        },
      }
    },
    view: {
      base: 'p-1',
    },
    footer: {
      base: 'flex mt-2 space-x-2',
      button: {
        base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-primary-300',
        today: 'bg-primary text-white hover:bg-primary-dark',
        clear: 'border border-primary-300 bg-white text-primary-900 hover:bg-primary-100'
      }
    },
  },
  views: {
    days: {
      header: {
        base: 'grid grid-cols-7 mb-1',
        title: 'dow h-6 text-center text-sm font-medium leading-6 text-gray-500',
      },
      items: {
        base: 'grid w-64 grid-cols-7',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100',
          selected: 'bg-primary text-white hover:bg-primary-dark',
          disabled: 'text-gray-300', 
        }
      },
    },
    months: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100',
          selected: 'bg-primary text-white hover:bg-primary-dark',
          disabled: 'text-gray-300',
        }
      }
    },
    years: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 text-gray-900',
          selected: 'bg-primary text-white hover:bg-primary-dark',
          disabled: 'text-gray-300'
        }
      }
    },
    decades: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 text-gray-900',
          selected: 'bg-primary text-white hover:bg-primary-dark',
          disabled: 'text-gray-300',
        }
      }
    }
  },
};
const dropdownTheme = {
  "arrowIcon": "ml-2 h-4 w-4",
  "content": "py-1 focus:outline-none",
  "floating": {
    "animation": "transition-opacity",
    "arrow": {
      "base": "absolute z-10 h-2 w-2 rotate-45",
      "style": {
        "dark": "bg-gray-900 dark:bg-gray-700",
        "light": "bg-white",
        "auto": "bg-white dark:bg-gray-700",
      },
      "placement": "-4px",
    },
    "base": "z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
    "content": "py-1 text-sm text-gray-700 dark:text-gray-200",
    "divider": "my-1 h-px bg-gray-100 dark:bg-gray-600",
    "header": "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
    "hidden": "invisible opacity-0",
    "item": {
      "container": "",
      "base": "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      "icon": "mr-2 h-4 w-4",
    },
    "style": {
      "dark": "bg-gray-900 text-white dark:bg-gray-700",
      "light": "border border-gray-200 bg-white text-gray-900",
      "auto": "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    "target": "w-fit",
  },
  "inlineWrapper": "flex items-center",
};
const fileInputTheme = {};
const floatingLabelTheme = {
};
const footerTheme = {
  "root": {
    "base": "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    "container": "w-full p-6",
    "bgDark": "bg-gray-800",
  },
  "groupLink": {
    "base": "flex flex-wrap text-sm text-gray-500 dark:text-white",
    "link": {
      "base": "last:mr-0 md:mr-6",
      "href": "hover:underline",
    },
    "col": "flex-col space-y-4",
  },
  "icon": {
    "base": "text-gray-500 dark:hover:text-white",
    "size": "h-5 w-5",
  },
  "title": {
    "base": "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
  },
  "divider": {
    "base": "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8",
  },
  "copyright": {
    "base": "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    "href": "ml-1 hover:underline",
    "span": "ml-1",
  },
  "brand": {
    "base": "mb-4 flex items-center sm:mb-0",
    "img": "mr-3 h-8",
    "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
  },
};
const helperTextTheme = {};
const kbdTheme = {
  "root": {
    "base": "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
    "icon": "inline-block",
  },
};
const labelTheme = {
  root: {
    base: 'text-sm font-bold',
    disabled: 'opacity-50',
    colors: {
      default: 'text-gray-900',
      info: 'text-cyan-500',
      failure: 'text-red-700',
      warning: 'text-yellow-500',
      success: 'text-green-700',
    }
  }
};
const listGroupTheme = {
  "root": {
    "base": "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left",
  },
  "item": {
    "base": "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
    "link": {
      "base": "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
      "active": {
        "off": "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        "on": "bg-cyan-700 text-white dark:bg-gray-800",
      },
      "disabled": {
        "off": "",
        "on": "hover:bg-gray-100 text-gray-900 hover:text-gray-900 focus:text-gray-900 bg-gray-100 cursor-not-allowed",
      },
      "href": {
        "off": "",
        "on": "",
      },
      "icon": "mr-2 h-4 w-4 fill-current",
    },
  },
};
const modalTheme = {
  "root": {
    "base": "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    "show": {
      "on": "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
      "off": "hidden",
    },
    "sizes": {
      "sm": "max-w-sm",
      "md": "max-w-md",
      "lg": "max-w-lg",
      "xl": "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
    },
    "positions": {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      "center": "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start",
    },
  },
  "content": {
    "base": "relative h-full w-full p-4 md:h-auto",
    "inner": "relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]",
  },
  "body": {
    "base": "p-6 flex-1 overflow-auto",
    "popup": "pt-0",
  },
  "header": {
    "base": "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
    "popup": "p-2 border-b-0",
    "title": "text-xl font-medium text-gray-900 dark:text-white",
    "close": {
      "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      "icon": "h-5 w-5",
    },
  },
  "footer": {
    "base": "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    "popup": "border-t",
  },
};
const navbarTheme = {
  "root": {
    "base": "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    "rounded": {
      "on": "rounded",
      "off": "",
    },
    "bordered": {
      "on": "border",
      "off": "",
    },
    "inner": {
      "base": "mx-auto flex flex-wrap items-center justify-between",
      "fluid": {
        "on": "",
        "off": "container",
      },
    },
  },
  "brand": {
    "base": "flex items-center",
  },
  "collapse": {
    "base": "w-full md:block md:w-auto",
    "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": "",
    },
  },
  "link": {
    "base": "block py-2 pr-4 pl-3 md:p-0",
    "active": {
      "on": "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
      "off": "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": "",
    },
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    "icon": "h-6 w-6 shrink-0",
  },
};
const paginationTheme = {
  "base": "",
  "layout": {
    "table": {
      "base": "text-sm text-gray-700 dark:text-gray-400",
      "span": "font-semibold text-gray-900 dark:text-white",
    },
  },
  "pages": {
    "base": "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    "showIcon": "inline-flex",
    "previous": {
      "base": "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      "icon": "h-5 w-5",
    },
    "next": {
      "base": "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      "icon": "h-5 w-5",
    },
    "selector": {
      "base": "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      "active": "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      "disabled": "opacity-50 cursor-normal",
    },
  },
};
const progressTheme = {
  "base": "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
  "label": "mb-1 flex justify-between font-medium dark:text-white",
  "bar": "rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2",
  "color": {
    "dark": "bg-gray-600 dark:bg-gray-300",
    "blue": "bg-blue-600",
    "red": "bg-red-600 dark:bg-red-500",
    "green": "bg-green-600 dark:bg-green-500",
    "yellow": "bg-yellow-400",
    "indigo": "bg-indigo-600 dark:bg-indigo-500",
    "purple": "bg-purple-600 dark:bg-purple-500",
    "cyan": "bg-cyan-600",
    "gray": "bg-gray-500",
    "lime": "bg-lime-600",
    "pink": "bg-pink-500",
    "teal": "bg-teal-600",
  },
  "size": {
    "sm": "h-1.5",
    "md": "h-2.5",
    "lg": "h-4",
    "xl": "h-6",
  },
};
const radioTheme = {
  root: {
    base: 'h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-primary text-primary-600',
  }
};
const rangeSliderTheme = {};
const ratingTheme = {
  "base": "flex items-center",
  "label": "text-sm font-medium text-cyan-600 dark:text-cyan-500",
  "progress": {
    "base": "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
    "fill": "h-5 rounded bg-yellow-400",
    "label": "text-sm font-medium text-cyan-600 dark:text-cyan-500",
  },
};
const selectTheme = {};
const sidebarTheme = {};
const spinnerTheme = {};
const tabTheme = {};
const tableTheme = {};
const textareaTheme = {
  base: 'block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm',
  colors: {
    gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:ring-primary',
    info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500',
    failure: 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500',
    warning: 'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500',
    success: 'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500',
  },
  withShadow: {
    on: 'shadow-sm',
    off: ''
  }
};
const textInputTheme = {
  base: 'flex',
  addon: 'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900',
  field: {
    base: 'relative w-full',
    icon: {
      base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
      svg: 'h-5 w-5 text-gray-500'
    },
    rightIcon: {
      base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
      svg: 'h-5 w-5 text-gray-500'
    },
    input: {
      base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
      sizes: {
        sm: 'p-2 sm:text-xs',
        md: 'p-2.5 text-sm',
        lg: 'sm:text-md p-4'
      },
      colors: {
        gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary focus:ring-primary-500',
        info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500',
        failure: 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500',
        warning: 'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500',
        success: 'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500'
      },
      withRightIcon: {
        on: 'pr-10',
        off: ''
      },
      withIcon: {
        on: 'pl-10',
        off: ''
      },
      withAddon: {
        on: 'rounded-r-lg',
        off: 'rounded-lg'
      },
      withShadow: {
        on: 'shadow-sm',
        off: ''
      }
    }
  }
};
const timelineTheme = {};
const toastTheme = {};
const toggleSwitchTheme = {};
const tooltipTheme = {};

const customTheme: CustomFlowbiteTheme = {
  accordion: accordionTheme , 
  alert: alertTheme , 
  avatar: avatarTheme , 
  badge: badgeTheme , 
  blockquote: blockquoteTheme , 
  breadcrumb: breadcrumbTheme , 
  button: buttonTheme , 
  buttonGroup: buttonGroupTheme , 
  card: cardTheme , 
  carousel: carouselTheme , 
  checkbox: checkboxTheme , 
  darkThemeToggle: darkThemeToggleTheme , 
  datepicker: datepickerTheme , 
  dropdown: dropdownTheme , 
  fileInput: fileInputTheme , 
  floatingLabel: floatingLabelTheme , 
  footer: footerTheme , 
  helperText: helperTextTheme , 
  kbd: kbdTheme , 
  label: labelTheme , 
  listGroup: listGroupTheme , 
  modal: modalTheme , 
  navbar: navbarTheme , 
  pagination: paginationTheme , 
  progress: progressTheme , 
  radio: radioTheme , 
  rangeSlider: rangeSliderTheme , 
  rating: ratingTheme , 
  select: selectTheme , 
  sidebar: sidebarTheme , 
  spinner: spinnerTheme , 
  tab: tabTheme , 
  table: tableTheme , 
  textarea: textareaTheme , 
  textInput: textInputTheme , 
  timeline: timelineTheme , 
  toast: toastTheme , 
  toggleSwitch: toggleSwitchTheme , 
  tooltip: tooltipTheme , 
};

export default function Theme({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      {children}
    </Flowbite>
  );
}