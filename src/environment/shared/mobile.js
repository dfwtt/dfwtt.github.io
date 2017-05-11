const MOBILE_SCREEN_SIZE = 680;
export const getBrowserWidth = () => window.innerWidth;
export const shouldBeCollapsed = () => getBrowserWidth() < MOBILE_SCREEN_SIZE;
