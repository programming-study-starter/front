'use client';

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

const accordionTheme = {};
const alertTheme = {};
const avatarTheme = {};
const badgeTheme = {};
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
const blockquoteTheme = {};
const breadcrumbTheme = {};
const buttonTheme = {
  color: {
    primary: 'text-white bg-primary border border-transparent enabled:hover:bg-primary-dark focus:ring-4 focus:ring-primary-300',
  },
};
const buttonGroupTheme = {};
const cardTheme = {};
const carouselTheme = {};
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
const dropdownTheme = {};
const fileInputTheme = {};
const floatingLabelTheme = {};
const footerTheme = {};
const helperTextTheme = {};
const kbdTheme = {};
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
const listGroupTheme = {};
const modalTheme = {};
const navbarTheme = {};
const paginationTheme = {};
const progressTheme = {};
const radioTheme = {
  root: {
    base: 'h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-primary text-primary-600',
  }
};
const rangeSliderTheme = {};
const ratingTheme = {};
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