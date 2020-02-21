// @flow

import * as React from 'react'
import cx from 'classnames'
import type { IconProps } from './ImageFallback.flow'

// styles
import s from './ImageFallback.css'

export const ImageFallback = ({
  src,
  name,
  small,
  large,
  className,
  'data-auto': dataAuto,
}: IconProps) => (
  <div
    className={cx(className, s.icon, {
      [s.small]: small,
      [s.large]: large,
    })}
    data-auto={dataAuto}
  >
    <img
      alt={name}
      src={src}
      className={cx(className, s.icon)}
    />
  </div>
)

ImageFallback.defaultProps = {
  /**
   * Additional class name
   */
  className: '',
  fallbackClassName: '',
  src: '',
  renderFallback: null,
  small: true,
  large: false,
}
