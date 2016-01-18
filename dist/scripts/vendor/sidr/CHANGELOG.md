# Changelog

## 2.0.0 2016-01-10

**Breaking changes** that require major version incrementation:

- Removing position:absolute fallback that added support for very old mobile browsers
- Removing toogle method that was a typo, you need

Bug fixes:

- Fixing tap event on touchscreen devices
- Removing unnecessary compass mixins
- Fixes reinitalization
- Adding example
- Fixing bower structure
- Adding continous integration
- Fixing adding body classes when no displacing
- Removing only the needed styles from html and body tag

## 1.2.1 2013-11-06

- Fixing tap event on touch devices

## 1.2.0 2013-11-05

- Adding bind to tap event if exists instead of click    (faster)
- Fixed reopening menu bug in some browsers and jQuery versions
- Add a body class when the sidr menu is open and when animating
- Fixing the toogle/toggle typo
- Adds an option to allow choosing between displace or not the content (displace)
- Added callbacks for onOpen and onClose

## 1.1.1 2013-03-13

- Fix bug when closing sidr programatically

## 1.1.0 - 2013-03-11

- Added the `body` option

## 1.0.0 - 2013-02-20

- First public version