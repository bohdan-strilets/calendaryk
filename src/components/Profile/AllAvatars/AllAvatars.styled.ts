import styled from '@emotion/styled'

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	gap: 5px;
	padding: 0;
`

export const Item = styled.li`
	flex: 1 1 calc(33% - 5px);
	box-sizing: border-box;
	max-width: calc(33% - 5px);
`

export const Image = styled.div<{ url: string }>`
	width: 100%;
	height: 200px;

	background-color: var(--gray-color);
	background-image: ${({ url }) => `url(${url})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`
