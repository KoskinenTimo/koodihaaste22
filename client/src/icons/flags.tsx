import React from 'react'

export interface IconProps {
  width?: number;
  height?: number;
  handleClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const FinnishFlagIcon = ({ width, height, handleClick=() => {} }: IconProps) => (
  <svg 
    width={width || "40px"}
    height={height || "30px"}
    viewBox="0 0 16 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={() => handleClick()} 
    style={{ marginRight: '1em' }}
  >
    <title>flags/S/FI - Finland</title>
    <defs>
        <rect id="path-1" x="-1" y="0" width="16" height="12"></rect>
        <rect id="path-3" x="0" y="0" width="16" height="12"></rect>
    </defs>
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="flag" transform="translate(1.000000, 0.000000)">
            <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
            </mask>
            <g id="mask"></g>
            <g id="contents" mask="url(#mask-2)">
                <g transform="translate(-1.000000, 0.000000)">
                    <mask id="mask-4" fill="white">
                        <use xlinkHref="#path-3"></use>
                    </mask>
                    <use id="background" stroke="none" fill="#F7FCFF" fillRule="evenodd" xlinkHref="#path-3"></use>
                    <polygon id="cross" stroke="none" fill="#2E42A5" fillRule="evenodd" mask="url(#mask-4)" points="5 0 7 0 7 5 16 5 16 7 7 7 7 12 5 12 5 7 0 7 0 5 5 5"></polygon>
                </g>
            </g>
        </g>
    </g>
</svg>
)

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const EnglishFlagIcon = ({ width, height, handleClick=() => {} }: IconProps) => (
  <svg
    width={width || "40px"}
    height={height || "30px"}
    viewBox="0 0 16 12" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={() => handleClick()} 
    style={{ marginRight: '1em' }}
  >
    <title>flags/S/GB-UKM - United Kingdom</title>
    <defs>
        <rect id="path-1" x="0" y="0" width="16" height="12"></rect>
        <rect id="path-3" x="0" y="0" width="16" height="12"></rect>
        <rect id="path-5" x="0" y="0" width="16" height="12"></rect>
    </defs>
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="flag">
          <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
          </mask>
          <g id="mask"></g>
          <g id="contents" mask="url(#mask-2)">
              <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-3"></use>
              </mask>
              <use id="background" fill="#2E42A5" xlinkHref="#path-3"></use>
              <g id="mark-1" mask="url(#mask-4)">
                  <mask id="mask-6" fill="white">
                      <use xlinkHref="#path-5"></use>
                  </mask>
                  <g id="mask"></g>
                  <g id="contents" mask="url(#mask-6)">
                      <g transform="translate(-2.555556, -1.714286)">
                          <g id="stripe">
                              <polygon id="white" fill="#FFFFFF" fillRule="nonzero" transform="translate(10.633300, 7.484404) scale(1, -1) translate(-10.633300, -7.484404) " points="0.773985549 2.11181912 4.29483039 0.622790172 18.6354492 11.6355997 20.4926144 13.848341 16.7275774 14.3460184 10.8783817 9.60028367 6.17038044 6.40276735"></polygon>
                              <polygon id="red" fill="#F50100" fillRule="nonzero" transform="translate(10.540857, 7.839612) scale(1, -1) translate(-10.540857, -7.839612) " points="1.2559945 1.77898577 3.04970237 0.914877175 19.8257192 14.7643476 17.3071446 14.7643476"></polygon>
                          </g>
                          <g id="stripe" transform="translate(10.611111, 7.500000) scale(-1, 1) translate(-10.611111, -7.500000) translate(0.111111, 0.000000)">
                              <polygon id="white" fill="#FFFFFF" fillRule="nonzero" transform="translate(10.633300, 7.484404) scale(1, -1) translate(-10.633300, -7.484404) " points="0.773985549 2.11181912 4.29483039 0.622790172 18.6354492 11.6355997 20.4926144 13.848341 16.7275774 14.3460184 10.8783817 9.60028367 6.17038044 6.40276735"></polygon>
                              <polygon id="red" fill="#F50100" fillRule="nonzero" transform="translate(10.782718, 7.798938) scale(1, -1) translate(-10.782718, -7.798938) " points="0.894121 1.99215352 2.68782887 1.12804493 9.83123069 7.0577227 11.949096 7.72023136 20.6713145 14.4698301 18.1527399 14.4698301 9.43542189 7.8804382 7.11990933 7.08601933"></polygon>
                          </g>
                          <g id="cross" transform="translate(1.555556, 0.714286)">
                              <path d="M10.3888768,0.5 L10.3887554,5.5 L17.5137675,5.5 L17.5137675,8.5 L10.3887554,8.5 L10.3888768,13.5 L7.61107676,13.5 L7.61073318,8.5 L0.513767538,8.5 L0.513767538,5.5 L7.61073318,5.5 L7.61107676,0.5 L10.3888768,0.5 Z" id="red" stroke="#FFFFFF" fill="#F50100"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
    </g>
  </svg>
)