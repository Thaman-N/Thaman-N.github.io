import { useState, useEffect } from 'react';

// Theme definitions with proper HSL format
const themes = {
  default: {
    name: "Default",
    light: {
      '--background': '0 0% 100%',
      '--foreground': '240 10% 3.9%',
      '--card': '0 0% 100%',
      '--card-foreground': '240 10% 3.9%',
      '--popover': '0 0% 100%',
      '--popover-foreground': '240 10% 3.9%',
      '--primary': '240 5.9% 10%',
      '--primary-foreground': '0 0% 98%',
      '--secondary': '240 4.8% 95.9%',
      '--secondary-foreground': '240 5.9% 10%',
      '--muted': '240 4.8% 95.9%',
      '--muted-foreground': '240 3.8% 46.1%',
      '--accent': '240 4.8% 95.9%',
      '--accent-foreground': '240 5.9% 10%',
      '--destructive': '0 84.2% 60.2%',
      '--destructive-foreground': '0 0% 98%',
      '--border': '240 5.9% 90%',
      '--input': '240 5.9% 90%',
      '--ring': '240 10% 3.9%',
      '--radius': '0.5rem'
    },
    dark: {
      '--background': '240 10% 3.9%',
      '--foreground': '0 0% 98%',
      '--card': '240 10% 3.9%',
      '--card-foreground': '0 0% 98%',
      '--popover': '240 10% 3.9%',
      '--popover-foreground': '0 0% 98%',
      '--primary': '0 0% 98%',
      '--primary-foreground': '240 5.9% 10%',
      '--secondary': '240 3.7% 15.9%',
      '--secondary-foreground': '0 0% 98%',
      '--muted': '240 3.7% 15.9%',
      '--muted-foreground': '240 5% 64.9%',
      '--accent': '240 3.7% 15.9%',
      '--accent-foreground': '0 0% 98%',
      '--destructive': '0 62.8% 30.6%',
      '--destructive-foreground': '0 0% 98%',
      '--border': '240 3.7% 15.9%',
      '--input': '240 3.7% 15.9%',
      '--ring': '240 4.9% 83.9%',
      '--radius': '0.5rem'
    }
  },
  graphite: {
    name: "Graphite",
    light: {
      '--background': '0 0% 95.5%',
      '--foreground': '0 0% 32.1%',
      '--card': '0 0% 97%',
      '--card-foreground': '0 0% 32.1%',
      '--popover': '0 0% 97%',
      '--popover-foreground': '0 0% 32.1%',
      '--primary': '0 0% 48.9%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '0 0% 90.7%',
      '--secondary-foreground': '0 0% 32.1%',
      '--muted': '0 0% 88.5%',
      '--muted-foreground': '0 0% 51%',
      '--accent': '0 0% 80.8%',
      '--accent-foreground': '0 0% 32.1%',
      '--destructive': '26 86% 56%',
      '--destructive-foreground': '0 0% 100%',
      '--border': '0 0% 85.8%',
      '--input': '0 0% 90.7%',
      '--ring': '0 0% 48.9%',
      '--radius': '0.35rem'
    },
    dark: {
      '--background': '0 0% 21.8%',
      '--foreground': '0 0% 88.5%',
      '--card': '0 0% 24.4%',
      '--card-foreground': '0 0% 88.5%',
      '--popover': '0 0% 24.4%',
      '--popover-foreground': '0 0% 88.5%',
      '--primary': '0 0% 70.6%',
      '--primary-foreground': '0 0% 21.8%',
      '--secondary': '0 0% 30.9%',
      '--secondary-foreground': '0 0% 88.5%',
      '--muted': '0 0% 28.5%',
      '--muted-foreground': '0 0% 60%',
      '--accent': '0 0% 37.2%',
      '--accent-foreground': '0 0% 88.5%',
      '--destructive': '22 75% 66%',
      '--destructive-foreground': '0 0% 100%',
      '--border': '0 0% 32.9%',
      '--input': '0 0% 30.9%',
      '--ring': '0 0% 70.6%',
      '--radius': '0.35rem'
    }
  },
  claymorphism: {
    name: "Claymorphism",
    light: {
      '--background': '20 5.8824% 90%',
      '--foreground': '217.2414 32.5843% 17.4510%',
      '--card': '60 4.7619% 95.8824%',
      '--card-foreground': '217.2414 32.5843% 17.4510%',
      '--popover': '60 4.7619% 95.8824%',
      '--popover-foreground': '217.2414 32.5843% 17.4510%',
      '--primary': '238.7324 83.5294% 66.6667%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '24.0000 5.7471% 82.9412%',
      '--secondary-foreground': '215 13.7931% 34.1176%',
      '--muted': '20 5.8824% 90%',
      '--muted-foreground': '220 8.9362% 46.0784%',
      '--accent': '292.5000 44.4444% 92.9412%',
      '--accent-foreground': '216.9231 19.1176% 26.6667%',
      '--destructive': '0 84.2365% 60.1961%',
      '--destructive-foreground': '0 0% 100%',
      '--border': '24.0000 5.7471% 82.9412%',
      '--input': '24.0000 5.7471% 82.9412%',
      '--ring': '238.7324 83.5294% 66.6667%',
      '--radius': '1.25rem'
    },
    dark: {
      '--background': '30 11.1111% 10.5882%',
      '--foreground': '214.2857 31.8182% 91.3725%',
      '--card': '25.7143 8.6420% 15.8824%',
      '--card-foreground': '214.2857 31.8182% 91.3725%',
      '--popover': '25.7143 8.6420% 15.8824%',
      '--popover-foreground': '214.2857 31.8182% 91.3725%',
      '--primary': '234.4538 89.4737% 73.9216%',
      '--primary-foreground': '30 11.1111% 10.5882%',
      '--secondary': '25.7143 6.4220% 21.3725%',
      '--secondary-foreground': '216.0000 12.1951% 83.9216%',
      '--muted': '25.7143 8.6420% 15.8824%',
      '--muted-foreground': '217.8947 10.6145% 64.9020%',
      '--accent': '25.7143 5.1095% 26.8627%',
      '--accent-foreground': '216.0000 12.1951% 83.9216%',
      '--destructive': '0 84.2365% 60.1961%',
      '--destructive-foreground': '30 11.1111% 10.5882%',
      '--border': '25.7143 6.4220% 21.3725%',
      '--input': '25.7143 6.4220% 21.3725%',
      '--ring': '234.4538 89.4737% 73.9216%',
      '--radius': '1.25rem'
    }
  },
  vercel: {
    name: "Vercel",
    light: {
      '--background': '0 0% 99%',
      '--foreground': '0 0% 0%',
      '--card': '0 0% 100%',
      '--card-foreground': '0 0% 0%',
      '--popover': '0 0% 99%',
      '--popover-foreground': '0 0% 0%',
      '--primary': '0 0% 0%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '0 0% 94%',
      '--secondary-foreground': '0 0% 0%',
      '--muted': '0 0% 97%',
      '--muted-foreground': '0 0% 44%',
      '--accent': '0 0% 94%',
      '--accent-foreground': '0 0% 0%',
      '--destructive': '23 89% 63%',
      '--destructive-foreground': '0 0% 100%',
      '--border': '0 0% 92%',
      '--input': '0 0% 94%',
      '--ring': '0 0% 0%',
      '--radius': '0.5rem'
    },
    dark: {
      '--background': '0 0% 0%',
      '--foreground': '0 0% 100%',
      '--card': '0 0% 14%',
      '--card-foreground': '0 0% 100%',
      '--popover': '0 0% 18%',
      '--popover-foreground': '0 0% 100%',
      '--primary': '0 0% 100%',
      '--primary-foreground': '0 0% 0%',
      '--secondary': '0 0% 25%',
      '--secondary-foreground': '0 0% 100%',
      '--muted': '0 0% 23%',
      '--muted-foreground': '0 0% 72%',
      '--accent': '0 0% 32%',
      '--accent-foreground': '0 0% 100%',
      '--destructive': '24 91% 69%',
      '--destructive-foreground': '0 0% 0%',
      '--border': '0 0% 26%',
      '--input': '0 0% 32%',
      '--ring': '0 0% 72%',
      '--radius': '0.5rem'
    }
  },
  twitter: {
    name: "Twitter",
    light: {
      '--background': '0 0% 100%',
      '--foreground': '210 25% 7.8431%',
      '--card': '180 6.6667% 97.0588%',
      '--card-foreground': '210 25% 7.8431%',
      '--popover': '0 0% 100%',
      '--popover-foreground': '210 25% 7.8431%',
      '--primary': '203.8863 88.2845% 53.1373%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '210 25% 7.8431%',
      '--secondary-foreground': '0 0% 100%',
      '--muted': '240 1.9608% 90%',
      '--muted-foreground': '210 25% 7.8431%',
      '--accent': '211.5789 51.3514% 92.7451%',
      '--accent-foreground': '203.8863 88.2845% 53.1373%',
      '--destructive': '356.3033 90.5579% 54.3137%',
      '--destructive-foreground': '0 0% 100%',
      '--border': '201.4286 30.4348% 90.9804%',
      '--input': '200 23.0769% 97.4510%',
      '--ring': '202.8169 89.1213% 53.1373%',
      '--radius': '1.3rem'
    },
    dark: {
      '--background': '0 0% 0%',
      '--foreground': '200 6.6667% 91.1765%',
      '--card': '228 9.8039% 10%',
      '--card-foreground': '0 0% 85.0980%',
      '--popover': '0 0% 0%',
      '--popover-foreground': '200 6.6667% 91.1765%',
      '--primary': '203.7736 87.6033% 52.5490%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '195.0000 15.3846% 94.9020%',
      '--secondary-foreground': '210 25% 7.8431%',
      '--muted': '0 0% 9.4118%',
      '--muted-foreground': '210 3.3898% 46.2745%',
      '--accent': '205.7143 70% 7.8431%',
      '--accent-foreground': '203.7736 87.6033% 52.5490%',
      '--destructive': '356.3033 90.5579% 54.3137%',
      '--destructive-foreground': '0 0% 100%',
      '--border': '210 5.2632% 14.9020%',
      '--input': '207.6923 27.6596% 18.4314%',
      '--ring': '202.8169 89.1213% 53.1373%',
      '--radius': '1.3rem'
    }
  },
  mocha: {
    name: "Mocha Mousse",
    light: {
      '--background': '55.0000 30.0000% 92.1569%',
      '--foreground': '15.6522 15.4362% 29.2157%',
      '--card': '55.0000 30.0000% 92.1569%',
      '--card-foreground': '15.6522 15.4362% 29.2157%',
      '--popover': '0 0% 100%',
      '--popover-foreground': '15.6522 15.4362% 29.2157%',
      '--primary': '18.0952 25.5061% 51.5686%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '37.5000 22.4719% 65.0980%',
      '--secondary-foreground': '0 0% 100%',
      '--muted': '20.4545 44.8980% 80.7843%',
      '--muted-foreground': '13.7500 21.0526% 44.7059%',
      '--accent': '20.4545 44.8980% 80.7843%',
      '--accent-foreground': '15.6522 15.4362% 29.2157%',
      '--destructive': '22.5000 14.8148% 10.5882%',
      '--destructive-foreground': '0 0% 100%',
      '--border': '37.5000 22.4719% 65.0980%',
      '--input': '37.5000 22.4719% 65.0980%',
      '--ring': '18.0952 25.5061% 51.5686%',
      '--radius': '0.5rem'
    },
    dark: {
      '--background': '20 15.3846% 15.2941%',
      '--foreground': '55.0000 30.0000% 92.1569%',
      '--card': '21.4286 13.2075% 20.7843%',
      '--card-foreground': '55.0000 30.0000% 92.1569%',
      '--popover': '21.4286 13.2075% 20.7843%',
      '--popover-foreground': '55.0000 30.0000% 92.1569%',
      '--primary': '22.3729 32.9609% 64.9020%',
      '--primary-foreground': '20 15.3846% 15.2941%',
      '--secondary': '13.7500 21.0526% 44.7059%',
      '--secondary-foreground': '55.0000 30.0000% 92.1569%',
      '--muted': '15.6522 15.4362% 29.2157%',
      '--muted-foreground': '21.4286 26.5823% 69.0196%',
      '--accent': '37.5000 22.4719% 65.0980%',
      '--accent-foreground': '20 15.3846% 15.2941%',
      '--destructive': '0 68.6747% 67.4510%',
      '--destructive-foreground': '20 15.3846% 15.2941%',
      '--border': '15.6522 15.4362% 29.2157%',
      '--input': '15.6522 15.4362% 29.2157%',
      '--ring': '22.3729 32.9609% 64.9020%',
      '--radius': '0.5rem'
    }
  },
  supabase: {
    name: "Supabase",
    light: {
      '--background': '0 0% 98.8235%',
      '--foreground': '0 0% 9.0196%',
      '--card': '0 0% 98.8235%',
      '--card-foreground': '0 0% 9.0196%',
      '--popover': '0 0% 98.8235%',
      '--popover-foreground': '0 0% 32.1569%',
      '--primary': '151.3274 66.8639% 66.8627%',
      '--primary-foreground': '153.3333 13.0435% 13.5294%',
      '--secondary': '0 0% 99.2157%',
      '--secondary-foreground': '0 0% 9.0196%',
      '--muted': '0 0% 92.9412%',
      '--muted-foreground': '0 0% 12.5490%',
      '--accent': '0 0% 92.9412%',
      '--accent-foreground': '0 0% 12.5490%',
      '--destructive': '9.8901 81.9820% 43.5294%',
      '--destructive-foreground': '0 100% 99.4118%',
      '--border': '0 0% 87.4510%',
      '--input': '0 0% 96.4706%',
      '--ring': '151.3274 66.8639% 66.8627%',
      '--radius': '0.5rem'
    },
    dark: {
      '--background': '0 0% 7.0588%',
      '--foreground': '214.2857 31.8182% 91.3725%',
      '--card': '0 0% 9.0196%',
      '--card-foreground': '214.2857 31.8182% 91.3725%',
      '--popover': '0 0% 14.1176%',
      '--popover-foreground': '0 0% 66.2745%',
      '--primary': '154.8980 100.0000% 19.2157%',
      '--primary-foreground': '152.7273 19.2982% 88.8235%',
      '--secondary': '0 0% 14.1176%',
      '--secondary-foreground': '0 0% 98.0392%',
      '--muted': '0 0% 12.1569%',
      '--muted-foreground': '0 0% 63.5294%',
      '--accent': '0 0% 19.2157%',
      '--accent-foreground': '0 0% 98.0392%',
      '--destructive': '6.6667 60.0000% 20.5882%',
      '--destructive-foreground': '12.0000 12.1951% 91.9608%',
      '--border': '0 0% 16.0784%',
      '--input': '0 0% 14.1176%',
      '--ring': '141.8919 69.1589% 58.0392%',
      '--radius': '0.5rem'
    }
  }
};

// HSL to RGB conversion
const hslToRgb = (h, s, l) => {
  h /= 360;
  s /= 100;
  l /= 100;
  
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  if (s === 0) {
    return [l, l, l]; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1/3);
    const g = hue2rgb(p, q, h);
    const b = hue2rgb(p, q, h - 1/3);
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
};

// Convert HSL string to hex
const hslStringToHex = (hslString) => {
  if (!hslString) return '#ffffff';
  
  const parts = hslString.split(' ');
  if (parts.length !== 3) return '#ffffff';
  
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]);
  const l = parseFloat(parts[2]);
  
  const [r, g, b] = hslToRgb(h, s, l);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Convert HSL string to RGB string for components that need it
const hslStringToRgbString = (hslString) => {
  if (!hslString) return '255, 255, 255';
  
  const parts = hslString.split(' ');
  if (parts.length !== 3) return '255, 255, 255';
  
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]);
  const l = parseFloat(parts[2]);
  
  const [r, g, b] = hslToRgb(h, s, l);
  return `${r}, ${g}, ${b}`;
};

const useTheme = () => {
  // Your existing dark mode logic
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true;
    } catch (error) {
      console.warn('localStorage not available, defaulting to dark mode:', error);
      return true;
    }
  });

  // New theme selection state
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('selectedTheme');
      return saved || 'twitter';
    } catch (error) {
      console.warn('localStorage not available, defaulting to default theme:', error);
      return 'twitter';
    }
  });

  // Reactive theme colors that update when theme or dark mode changes
  const [themeColors, setThemeColors] = useState({});

  // Apply theme + dark/light mode
  useEffect(() => {
    // Save preferences
    try {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      localStorage.setItem('selectedTheme', currentTheme);
    } catch (error) {
      console.warn('Failed to save preferences:', error);
    }

    // Apply dark class
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Apply theme variables and get colors
    const themeVariables = themes[currentTheme]?.[darkMode ? 'dark' : 'light'];
    if (themeVariables) {
      // Apply CSS variables first
      Object.entries(themeVariables).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
      });

      // Use setTimeout to ensure CSS variables are applied before reading colors
      setTimeout(() => {
        // Update reactive theme colors
        setThemeColors({
          primary: hslStringToHex(themeVariables['--primary']),
          secondary: hslStringToHex(themeVariables['--secondary']),
          accent: hslStringToHex(themeVariables['--accent']),
          muted: hslStringToHex(themeVariables['--muted']),
          foreground: hslStringToHex(themeVariables['--foreground']),
          background: hslStringToHex(themeVariables['--background']),
          // RGB versions for components that need them
          primaryRgb: hslStringToRgbString(themeVariables['--primary']),
          secondaryRgb: hslStringToRgbString(themeVariables['--secondary']),
          accentRgb: hslStringToRgbString(themeVariables['--accent']),
          // HSL versions for CSS
          primaryHsl: `hsl(${themeVariables['--primary']})`,
          secondaryHsl: `hsl(${themeVariables['--secondary']})`,
          accentHsl: `hsl(${themeVariables['--accent']})`
        });
      }, 0);
    }
  }, [darkMode, currentTheme]);

  return {
    darkMode,
    toggleDarkMode: () => setDarkMode(prev => !prev),
    setDarkMode,
    currentTheme,
    setTheme: setCurrentTheme,
    availableThemes: Object.keys(themes),
    getThemeName: (themeKey) => themes[themeKey]?.name || themeKey,
    // New reactive theme colors
    colors: themeColors
  };
};

export default useTheme;