import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
const MyPreset = definePreset(Aura, {
    components: {
        button: {
            colorScheme: {
                light: {
                    primary: {
                        color: '#ffffff',

                        background: '#0e5697',
                        hoverBackground: '#166ebd',
                        activeBackground: '#088bff',

                        borderColor: '#0e5697',
                        hoverBorderColor: '#166ebd',
                        activeBorderColor: '#0083ff',

                        hoverColor: '#ffffff',
                        activeColor: '#ffffff',
                        focusRing: {
                            color: '{primary.color}',
                            shadow: 'none'
                        }
                    }
                },
                dark: {
                    primary: {
                        color: '#ffffff',

                        background: '#8338ec',
                        hoverBackground: '#8338ec',
                        activeBackground: '#8338ec',

                        borderColor: '#8338ec',
                        hoverBorderColor: '#8338ec',
                        activeBorderColor: '#8338ec',

                        hoverColor: '#ffffff',
                        activeColor: '#ffffff',
                        focusRing: {
                            color: '{primary.color}',
                            shadow: 'none'
                        }
                    }
                }
            }
        },
        inputtext:{
            colorScheme: {
                light: {
                    color: '#111',
                    background: '#f0f0f0',
                    disabledBackground: '#ccc',
                    borderColor: '#bbb',
                    focusBorderColor: '#8338ec',
                    invalidBorderColor: '#ff0000',
                    invalidBackground: '#ffa6a6'
                },
                dark: {
                    color: '#ffffff',
                    background: '#111',
                    disabledBackground: '#333',
                    borderColor: '#8338ec',
                    focusBorderColor: '#8338ec',
                    invalidBorderColor: '#ff0000',
                }
            }
        },
        carousel: {
            colorScheme: {
                light: {
                    indicator: {
                        background: '#acacac',
                        hoverBackground: '#d5d5d5',
                        activeBackground: '#8338ec'
                    }
                },
                dark: {
                    indicator: {
                        background: '#8338ec',
                        hoverBackground: '#8338ec',
                        activeBackground: '#8338ec'
                    }
                }
            }
        }
    },
    semantic: {
        transitionDuration: '0s',
        focusRing: {
            width: '2px',
            style: 'solid',
            color: '{primary.color}',
            offset: '2px',
            shadow: 'none'
        },
        iconSize: '1rem',
        anchorGutter: '0',
        primary: {
            50: '{emerald.50}',
            100: '{emerald.100}',
            200: '{emerald.200}',
            300: '{emerald.300}',
            400: '{emerald.400}',
            500: '{emerald.500}',
            600: '{emerald.600}',
            700: '{emerald.700}',
            800: '{emerald.800}',
            900: '{emerald.900}',
            950: '{emerald.950}'
        }
    }
});

export default MyPreset;