import React from 'react'
import { StyledButton } from './Button.styles'

type Props = {
	title: string,
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

export const Button: React.FC<Props> = ( { title, onClick } ) => {
	return (
		<StyledButton role={'button'} onClick={onClick}>
			{ title }
		</StyledButton>
	)
}

