import React from 'react';
import PropTypes from 'prop-types';

const icons = {
  warning: <svg viewBox="0 0 16 16"><path d="M8 1.45l6.705 13.363H1.296L8.001 1.45zM8 0c-.345 0-.69.233-.951.698L.22 14.309C-.303 15.239.142 16 1.209 16h13.583c1.067 0 1.512-.761.989-1.691L8.952.698C8.69.233 8.346 0 8.001 0z" /><path d="M9 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM8 11a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1z" /></svg>,
  pilcrow: <svg viewBox="0 0 16 16"><path d="M6 0h8v2h-2v14h-2V2H8v14H6V8a4 4 0 0 1 0-8z" /></svg>,
  underline: <svg viewBox="0 0 16 16"><path d="M11 1h2v6.5c0 2.485-2.239 4.5-5 4.5S3 9.985 3 7.5V1h2v6.5c0 .628.285 1.23.802 1.695C6.379 9.714 7.159 10 8 10s1.621-.286 2.198-.805C10.715 8.729 11 8.127 11 7.5V1zM3 13h10v2H3z" /></svg>,
  embed: <svg viewBox="0 0 16 16"><path d="M9 11.5l1.5 1.5 5-5-5-5L9 4.5 12.5 8zM7 4.5L5.5 3l-5 5 5 5L7 11.5 3.5 8z" /></svg>,
  link: <svg viewBox="0 0 16 16"><path d="M6.879 9.934a.81.81 0 0 1-.575-.238 3.818 3.818 0 0 1 0-5.392l3-3C10.024.584 10.982.187 12 .187s1.976.397 2.696 1.117a3.818 3.818 0 0 1 0 5.392l-1.371 1.371a.813.813 0 0 1-1.149-1.149l1.371-1.371A2.19 2.19 0 0 0 12 1.812c-.584 0-1.134.228-1.547.641l-3 3a2.19 2.19 0 0 0 0 3.094.813.813 0 0 1-.575 1.387z" /><path d="M4 15.813a3.789 3.789 0 0 1-2.696-1.117 3.818 3.818 0 0 1 0-5.392l1.371-1.371a.813.813 0 0 1 1.149 1.149l-1.371 1.371A2.19 2.19 0 0 0 4 14.188c.585 0 1.134-.228 1.547-.641l3-3a2.19 2.19 0 0 0 0-3.094.813.813 0 0 1 1.149-1.149 3.818 3.818 0 0 1 0 5.392l-3 3A3.789 3.789 0 0 1 4 15.813z" /></svg>,
  breakLink: <svg viewBox="0 0 15.63 15.63"><path d="M1.3,14.7a3.82,3.82,0,0,1,0-5.39L2.67,7.93A0.81,0.81,0,0,1,3.82,9.08L2.45,10.45a2.19,2.19,0,0,0,0,3.1h0a2.19,2.19,0,0,0,3.1,0L6.93,12.2a0.81,0.81,0,0,1,1.15,1.15L6.7,14.72a3.82,3.82,0,0,1-5.39,0h0Z" transform="translate(-0.19 -0.2)" /><path d="M14.7,1.32a3.82,3.82,0,0,1,0,5.39L13.33,8.08a0.81,0.81,0,0,1-1.15-1.15l1.37-1.37a2.19,2.19,0,0,0,0-3.1h0a2.19,2.19,0,0,0-3.1,0L9.08,3.82A0.81,0.81,0,0,1,7.94,2.67L9.31,1.3a3.82,3.82,0,0,1,5.39,0h0Z" transform="translate(-0.19 -0.2)" /><path d="M13.72,13.64a0.5,0.5,0,0,1-.35-0.15l-2.14-2.14a0.5,0.5,0,0,1,.71-0.71l2.14,2.14A0.5,0.5,0,0,1,13.72,13.64Z" transform="translate(-0.19 -0.2)" /><path d="M15.15,12.14a0.5,0.5,0,0,1-.28-0.09l-2.5-1.71a0.5,0.5,0,0,1,.56-0.83l2.5,1.71A0.5,0.5,0,0,1,15.15,12.14Z" transform="translate(-0.19 -0.2)" /><path d="M12.25,15.05a0.5,0.5,0,0,1-.41-0.21L10.1,12.36a0.5,0.5,0,1,1,.82-0.57l1.73,2.48A0.5,0.5,0,0,1,12.25,15.05Z" transform="translate(-0.19 -0.2)" /><path d="M4.87,5.22a0.5,0.5,0,0,1-.35-0.15L2.38,2.93a0.5,0.5,0,0,1,.71-0.71L5.23,4.36A0.5,0.5,0,0,1,4.87,5.22Z" transform="translate(-0.19 -0.2)" /><path d="M3.8,6.29A0.5,0.5,0,0,1,3.52,6.2L1,4.49a0.5,0.5,0,1,1,.56-0.83l2.5,1.71A0.5,0.5,0,0,1,3.8,6.29Z" transform="translate(-0.19 -0.2)" /><path d="M5.94,4.15a0.5,0.5,0,0,1-.41-0.21L3.8,1.45A0.5,0.5,0,1,1,4.62.88L6.35,3.36A0.5,0.5,0,0,1,5.94,4.15Z" transform="translate(-0.19 -0.2)" /></svg>,
  bold: <svg viewBox="0 0 16 16"><path d="M11.061 7.573A3.982 3.982 0 0 0 12 5c0-2.206-1.794-4-4-4H3v14h6c2.206 0 4-1.794 4-4a4.002 4.002 0 0 0-1.939-3.427zM6 3h1.586c.874 0 1.586.897 1.586 2s-.711 2-1.586 2H6V3zm2.484 10H6V9h2.484c.913 0 1.656.897 1.656 2s-.743 2-1.656 2z" /></svg>,
  italic: <svg viewBox="0 0 16 16"><path d="M14 1v1h-2L7 14h2v1H2v-1h2L9 2H7V1z" /></svg>,
  checkmark: <svg viewBox="0 0 16 16"><polygon points="0 9.27 3.18 5.7 5.94 9.6 12.05 0 15.1 2.9 6.1 15.37 0 9.27" /></svg>,
  cross: <svg viewBox="0 0 16 16"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z" /></svg>,
  floppy: <svg viewBox="0 0 16 16"><path d="M14 0h-14v16h16v-14l-2-2zM8 2h2v4h-2v-4zM14 14h-12v-12h1v5h9v-5h1.172l0.828 0.828v11.172z" /></svg>,
  pencil: <svg viewBox="0 0 16 16"><path d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z" /></svg>,
  plus: <svg viewBox="0 0 16 16"><path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z" /></svg>,
  questionMark: <svg viewBox="0 0 32 32"><path d="M25.28,9.36a6.25,6.25,0,0,1-1.11,3.79,9.54,9.54,0,0,1-3.51,2.72A9.25,9.25,0,0,0,18,17.62,3.68,3.68,0,0,0,17.22,19a5.42,5.42,0,0,0-.17,1.44v1.24H12V19.94q0-3.86,2.31-5.48A18.45,18.45,0,0,1,16.71,13,7.46,7.46,0,0,0,19,11.39a3.2,3.2,0,0,0,.71-2.14,2.72,2.72,0,0,0-1.07-2.19,4.91,4.91,0,0,0-3.17-.88,5,5,0,0,0-3.3,1A3.82,3.82,0,0,0,10.8,9.83H5.53a8.28,8.28,0,0,1,2.74-6Q10.8,1.6,15.36,1.6A11,11,0,0,1,22.6,3.83,6.92,6.92,0,0,1,25.28,9.36ZM12.1,24.78a3.46,3.46,0,0,1,2.53-.94,3.69,3.69,0,0,1,2.59.94,3.11,3.11,0,0,1,1,2.4,3.18,3.18,0,0,1-1,2.42,3.64,3.64,0,0,1-2.59,1,3.42,3.42,0,0,1-2.53-1,3.28,3.28,0,0,1-1-2.42A3.21,3.21,0,0,1,12.1,24.78Z" /></svg>,
  kebab: <svg viewBox="0 0 16 16"><circle cx="8" cy="13.31" r="1.53" /><circle cx="8" cy="8.03" r="1.53" /><circle cx="8" cy="2.77" r="1.53" /></svg>,
  home: <svg viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21V6.694l8-6.21 8 6.21zM14 9v6h-4v-4H6v4H2V9l6-4.5z" /></svg>,
  stack: <svg viewBox="0 0 16 16"><path d="M16 5L8 1 0 5l8 4 8-4zM8 2.328L13.345 5 8 7.672 2.655 5 8 2.328zm6.398 4.871L16 8l-8 4-8-4 1.602-.801L8 10.398zm0 3L16 11l-8 4-8-4 1.602-.801L8 13.398z" /></svg>,
  newspaper: <svg viewBox="0 0 16 16"><path d="M14 4V2H0v11a1 1 0 0 0 1 1h13.5a1.5 1.5 0 0 0 1.5-1.5V4h-2zm-1 9H1V3h12v10zM2 5h10v1H2zm6 2h4v1H8zm0 2h4v1H8zm0 2h3v1H8zM2 7h5v5H2z" /></svg>,
  fileText: <svg viewBox="0 0 16 16"><path d="M13.5 0h-12C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM13 14H2V2h11v12zM4 7h7v1H4zm0 2h7v1H4zm0 2h7v1H4zm0-6h7v1H4z" /></svg>,
  gear: <svg viewBox="0 0 16 16"><path d="M14.59 9.535a3.053 3.053 0 0 1 1.127-4.164l-1.572-2.723a3.017 3.017 0 0 1-1.529.414A3.052 3.052 0 0 1 9.574 0H6.429a3.009 3.009 0 0 1-.406 1.535c-.839 1.454-2.706 1.948-4.17 1.106L.281 5.364a3 3 0 0 1 1.123 1.117 3.053 3.053 0 0 1-1.12 4.16l1.572 2.723c.448-.261.967-.41 1.522-.41A3.052 3.052 0 0 1 6.42 16h3.145a3.012 3.012 0 0 1 .406-1.519 3.053 3.053 0 0 1 4.163-1.11l1.572-2.723a3.008 3.008 0 0 1-1.116-1.113zM8 11.24a3.24 3.24 0 1 1 0-6.48 3.24 3.24 0 0 1 0 6.48z" /></svg>,
  circleWithLine: <svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" /></svg>,
  user: <svg viewBox="0 0 16 16"><path d="M9 11.041v-.825c1.102-.621 2-2.168 2-3.716C11 4.015 11 2 8 2S5 4.015 5 6.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z" /></svg>,
  arrowLeft: <svg viewBox="0 0 16 16"><path d="M6.293 13.707l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L4.414 7H14a1 1 0 0 1 0 2H4.414l3.293 3.293a.997.997 0 0 1 0 1.414.999.999 0 0 1-1.414 0z" /></svg>,
  arrowRight: <svg viewBox="0 0 16 16"><path d="M9.707 13.707l5-5a.999.999 0 0 0 0-1.414l-5-5a.999.999 0 1 0-1.414 1.414L11.586 7H2a1 1 0 0 0 0 2h9.586l-3.293 3.293a.997.997 0 0 0 0 1.414.999.999 0 0 0 1.414 0z" /></svg>,
  calendar: <svg viewBox="0 0 16 16"><path d="M5 6h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm-9 6h2v2H2zm3 0h2v2H5zm3 0h2v2H8zM5 9h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zM2 9h2v2H2zm11-9v1h-2V0H4v1H2V0H0v16h15V0h-2zm1 15H1V4h13v11z" /></svg>,
  image: <svg viewBox="0 0 16 16"><path d="M14.998 2l.002.002v11.996l-.002.002H1.002L1 13.998V2.002L1.002 2h13.996zM15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z" /><path d="M13 4.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 13 4.5zM14 13H2v-2l3.5-6 4 5h1L14 7z" /></svg>,
  images: <svg viewBox="0 0 18 16"><path d="M17 2h-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM2 3v10h-.998L1 12.998V1.002L1.002 1h13.996l.002.002V2H3c-.55 0-1 .45-1 1zm15 11.998l-.002.002H3.002L3 14.998V3.002L3.002 3h13.996l.002.002v11.996z" /><path d="M15 5.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 15 5.5zM16 14H4v-2l3.5-6 4 5h1L16 8z" /></svg>,
  users: <svg viewBox="0 0 18 16"><path d="M12 12.041v-.825c1.102-.621 2-2.168 2-3.716C14 5.015 14 3 11 3S8 5.015 8 7.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z" /><path d="M5.112 12.427c.864-.565 1.939-.994 3.122-1.256a5.667 5.667 0 0 1-.633-.922 5.726 5.726 0 0 1-.726-2.748c0-1.344 0-2.614.478-3.653.464-1.008 1.299-1.633 2.488-1.867C9.577.786 8.873.001 7 .001c-3 0-3 2.015-3 4.5 0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h4.359c.227-.202.478-.393.753-.573z" /></svg>,
  plug: <svg viewBox="0 0 16 16"><path d="M16 4.414L14.586 3l-2.793 2.793-1.586-1.586L13 1.414 11.586 0 8.793 2.793 7 1 5.646 2.353l8 8L15 9l-1.793-1.793L16 4.414zM12.407 10.528L5.472 3.593C3.975 5.388 2.276 8.163 3.45 10.55l-2.066 2.066a1.254 1.254 0 0 0 0 1.768l.232.232a1.254 1.254 0 0 0 1.768 0L5.45 12.55c2.387 1.174 5.161-.524 6.957-2.022z" /></svg>,
  paint: <svg viewBox="0 0 16 16"><path d="M16 9V3h-3V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V4h2v4H6v2h-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H7V9h9zm-4-6H1V2h11v1z" /></svg>,
  hamburger: <svg viewBox="0 0 16 16"><rect y="13" height="2" width="16" /><rect y="1" height="2" width="16" /><rect y="7" height="2" width="16" /></svg>,
  dragVertical: <svg viewBox="0 0 16 16"><rect y="7.5" x="2" width="12" height="1" /><polygon points="8,3 5,5 11,5 " /><polygon points="8,13 5,11 11,11 " /></svg>,
  dragHandle: <svg viewBox="0 0 16 16"><g><path d="M9,2c0-1.1-0.9-2-2-2S5,0.9,5,2c0,2,2,3,2,3S9,4,9,2z" /><path d="M12,9c1.1,0,2-0.9,2-2s-0.9-2-2-2c-2,0-3,2-3,2S10,9,12,9z" /><path d="M5,12c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2c0-2-2-3-2-3S5,10,5,12z" /><path d="M2,5C0.9,5,0,5.9,0,7s0.9,2,2,2c2,0,3-2,3-2S4,5,2,5z" /></g></svg>,
};

export default function Icon(props) {
  const { width, height, className, title, icon } = props;

  return {
    ...icons[icon],
    props: {
      ...icons[icon].props,
      xmlns: 'http://www.w3.org/2000/svg',
      width,
      height,
      title,
      className: className ? `icon ${className}` : 'icon',
    },
  };
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
};

Icon.defaultProps = {
  width: 16,
  height: 16,
};
