// @flow

import * as React from 'react'

export type IconProps = {|
  /**
   * Custom class name
   */
  className?: string,
  fallbackClassName?: string,
  src: string,
  renderFallback: React.Node,
  name: string,
  small: boolean,
  large: boolean,
  'data-auto'?: string,
|}
