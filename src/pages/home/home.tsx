import React, { useState } from 'react'
import { PageWrapper } from './home.styles'
import { Header, GifViewer, Button } from '../../components'
import { useGif } from '../../data/hooks/useGif'

export const HomePage = () => {
	//this is how you'll fetch data
	const { data: gif, refetch: fetchNewGif, isLoading, isFetching, isError  } = useGif()
	const [ gifHasBeenLoaded, setGifHasBeenLoaded ] = useState<boolean>( false )
	const onClickGifButton = () => {
		fetchNewGif()
		setGifHasBeenLoaded( true )
	}

	const newGifIsLoading: boolean = isLoading || isFetching

	return (
		<PageWrapper>
			<Header>{'React Telly'}</Header>
			<GifViewer 
				gifUrl={gif?.data.images.downsized_medium.url} 
				altText={gif?.data.title} 
				isLoading={newGifIsLoading} 
				isError={isError} 
			/>
			<Button onClick={() => onClickGifButton()}>
				{ gifHasBeenLoaded ? 'Change the channel' : 'Start' }
			</Button>
		</PageWrapper>
	)
}
