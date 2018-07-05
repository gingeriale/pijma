import React from 'react'
import {rgba} from 'polished'

import {
  styled,
  StyledComponent,
  Theme,
  ButtonControl,
  Spinner,
  SpinnerCircle,
} from '@qiwi/pijma-core'

import ButtonProps from './ButtonProps'
import ButtonContent from './ButtonContent'
import ButtonLoad from './ButtonLoad'
import ButtonIcon from './ButtonIcon'
import ButtonText from './ButtonText'
import ButtonType from './ButtonType'
import ButtonSize from './ButtonSize'
import ButtonKind from './ButtonKind'

export interface StyledButtonProps {
  disabled?: boolean
  kind: ButtonKind
  size: ButtonSize
  type: ButtonType
  text?: string
  icon?: React.ReactNode
  loading?: boolean
}

const StyledButton: StyledComponent<StyledButtonProps, JSX.IntrinsicElements['button'], Theme> = styled('button')((props) => ({
  display: 'inline-block',
  outline: 'none',
  fontFamily: props.theme.font.family,
  fontStyle: 'normal',
  fontStretch: 'normal',
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: 'center',
  transition: 'all 333ms ease-in-out',
  color: (
    props.disabled ? (
      props.theme.color.gray.darkest
    ) : props.kind === 'brand' ? (
      props.theme.color.white
    ) : props.kind === 'simple' ? (
      props.theme.color.black
    ) : (
      undefined
    )
  ),
  cursor: (
    props.disabled ? (
      'not-allowed'
    ) : (
      'pointer'
    )
  ),
  backgroundColor: (
    props.disabled ? (
      props.theme.color.gray.light
    ) : props.kind === 'brand' ? (
      props.theme.color.brand
    ) : props.kind === 'simple' ? (
      props.theme.color.white
    ) : (
      undefined
    )
  ),
  backgroundImage: (
    !props.disabled && props.kind === 'brand' && props.size === 'accent' ? (
      'linear-gradient(to bottom, #ff9810, #ff8300)'
    ) : (
      undefined
    )
  ),
  backgroundClip: (
    props.disabled ? (
      undefined
    ) : props.kind === 'simple' ? (
      'padding-box'
    ) : (
      undefined
    )
  ),
  boxShadow: (
    !props.disabled && props.kind === 'brand' && props.size === 'accent' ? (
      `0 12px 15px 0 ${rgba(props.theme.color.brand, 0.2)}`
    ) : (
      undefined
    )
  ),
  border: (
    props.disabled ? (
      `none`
    ) : props.kind === 'simple' ? (
      `1px solid ${rgba(props.theme.color.black, 0.14)}`
    ) : (
      'none'
    )
  ),
  borderRadius: (
    props.size === 'accent' ? (
      30
    ) : props.size === 'normal' ? (
      24
    ) : props.size === 'minor' ? (
      20
    ) : (
      undefined
    )
  ),
  height: (
    props.size === 'accent' ? (
      60
    ) : props.size === 'normal' ? (
      48
    ) : props.size === 'minor' ? (
      40
    ) : (
      undefined
    )
  ),
  width: (
    !props.icon || props.text ? (
      '100%'
    ) : props.size === 'accent' ? (
      60
    ) : props.size === 'normal' ? (
      48
    ) : props.size === 'minor' ? (
      40
    ) : (
      undefined
    )
  ),
  minWidth: (
    props.icon && !props.text ? (
      undefined
    ) : props.size === 'accent' ? (
      200
    ) : props.size === 'normal' ? (
      150
    ) : props.size === 'minor' ? (
      100
    ) : (
      undefined
    )
  ),
  margin: 0,
  padding: 0,
  fontSize: (
    props.size === 'accent' ? (
      20
    ) : props.size === 'normal' ? (
      16
    ) : props.size === 'minor' ? (
      14
    ) : (
      undefined
    )
  ),
  '&:hover, &:focus': {
    backgroundColor: (
      !props.disabled && props.kind === 'brand' ? (
        '#ff8200'
      ) : (
        undefined
      )
    ),
    backgroundImage: (
      !props.disabled && props.kind === 'brand' ? (
        'none'
      ) : (
        undefined
      )
    ),
    boxShadow: (
      !props.disabled && props.kind === 'brand' && props.size === 'accent' ? (
        `0 12px 18px 0 ${rgba(props.theme.color.brand, 0.4)}`
      ) : (
        undefined
      )
    ),
    border: (
      !props.disabled && props.kind === 'simple' ? (
        `1px solid ${rgba(props.theme.color.black, 0.3)}`
      ) : (
        undefined
      )
    ),
  },
  '&:active': {
    color: (
      props.disabled ? (
        undefined
      ) : props.kind === 'brand' ? (
        rgba(props.theme.color.white, 0.9)
      ) : props.kind === 'simple' ? (
        rgba(props.theme.color.black, 0.9)
      ) : (
        undefined
      )
    ),
    [ButtonIcon.toString()]: {
      fill: (
        props.disabled ? (
          undefined
        ) : props.kind === 'brand' ? (
          rgba(props.theme.color.white, 0.9)
        ) : props.kind === 'simple' ? (
          rgba(props.theme.color.black, 0.9)
        ) : (
          undefined
        )
      ),
    },
  },
  [ButtonContent.toString()]: {
    padding: (
      props.icon && !props.text ? (
        0
      ) : props.size === 'accent' ? (
        props.kind === 'simple' ? '0px 35px' : '0px 36px'
      ) : props.size === 'normal' ? (
        props.kind === 'simple' ? '0px 31px' : '0px 32px'
      ) : props.size === 'minor' ? (
        props.kind === 'simple' ? '0px 27px' : '0px 28px'
      ) : (
        undefined
      )
    ),
  },
  [ButtonIcon.toString()]: {
    transition: 'all 333ms ease-in-out',
    opacity: props.loading ? 0 : 1,
    fill: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : props.kind === 'brand' ? (
        props.theme.color.white
      ) : props.kind === 'simple' ? (
        props.theme.color.black
      ) : (
        undefined
      )
    ),
    marginRight: (
      props.text ? (
        12
      ) : (
        0
      )
    ),
  },
  [ButtonText.toString()]: {
    transition: 'opacity 333ms ease-in-out',
    opacity: props.loading ? 0 : 1,
  },
  [ButtonLoad.toString()]: {
    transition: 'opacity 333ms ease-in-out',
    display: 'flex',
    opacity: props.loading ? 1 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  [SpinnerCircle.toString()]: {
    transition: 'stroke 333ms ease-in-out',
    stroke: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : props.kind === 'brand' ? (
        props.theme.color.white
      ) : props.kind === 'simple' ? (
        props.theme.color.brand
      ) : (
        undefined
      )
    ),
  },
}))

const Button: React.SFC<ButtonProps> = (props) => (
  <ButtonControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <StyledButton
        disabled={props.disabled}
        kind={props.kind}
        size={props.size}
        type={props.type}
        text={props.text}
        icon={props.icon}
        loading={props.loading}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onFocus}
      >
        <ButtonContent>
          <ButtonLoad>
            <Spinner/>
          </ButtonLoad>
          {props.icon ? (
            <ButtonIcon>
              {props.icon}
            </ButtonIcon>
          ) : (
            null
          )}
          {props.text ? (
            <ButtonText>
              {props.text}
            </ButtonText>
          ) : (
            null
          )}
        </ButtonContent>
      </StyledButton>
    )}
  />
)

export default Button
