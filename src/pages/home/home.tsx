import React from 'react'
import { PageWrapper } from './home.styles'
import { Header, GifViewer, Button } from '../../components'
import { useGif } from '../../data/hooks/useGif'

export const HomePage = () => {
	//this is how you'll fetch data
	const { data: gif, refetch: fetchNewGif, isLoading: gifIsLoading, isFetching: gifIsFetching  } = useGif()

	return (
		<PageWrapper>
			<Header>React Telly</Header>
			<GifViewer gifUrl={gif?.data.images.downsized_medium.url} altText={gif?.data.title} />
			<Button title={'Change the channel'} onClick={() => fetchNewGif()} />
		</PageWrapper>
	)
}
