import styled from '@emotion/styled'
import { IoMdImages } from 'react-icons/io'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export const LeftSide = styled.div`
	width: 70%;
`

export const Section = styled.div`
	padding: 15px;
	margin-bottom: 30px;

	border: 1px solid #cccccc;
	border-radius: 5px;
	box-shadow: var(--box-shadow);

	:last-child {
		margin-bottom: 0;
	}
`

export const Id = styled.p`
	color: #cccccc;
`

export const RightSide = styled.div`
	width: 25%;
`

export const AvatarButton = styled.button`
	position: relative;
	display: inline-block;

	margin-bottom: var(--medium-indent);
	width: 100%;

	background-color: transparent;
	border: none;
	outline: none;

	cursor: pointer;

	:hover::before,
	:focus::before,
	:hover .gallery-icon,
	:focus .gallery-icon {
		opacity: 1;
	}

	:active .gallery-icon {
		transform: translate(-50%, -50%) scale(1.03);
	}

	::before {
		content: '';

		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 280px;

		background-color: rgba(255, 255, 255, 0.5);

		opacity: 0;
		transition: opacity var(--hover-effect);
	}
`

export const GalleryIcon = styled(IoMdImages)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 84px;
	height: 84px;
	color: var(--gray-color);

	opacity: 0;
	transition: opacity var(--hover-effect);
`

export const List = styled.ul``

export const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 15px;

	border-bottom: 2px dotted #000;

	:last-child {
		border: none;
	}
`

export const Property = styled.p`
	font-weight: 700;
`

export const Value = styled.p`
	color: var(--gray-color);
`

export const Controllers = styled.ul`
	margin-top: 30px;
`

export const ControllerItem = styled.li`
	width: 100%;
	height: 50px;

	border-bottom: 1px solid #ccc;

	:last-child {
		border-bottom: none;
	}
`

export const ControllerBtn = styled.button`
	display: flex;
	align-items: center;

	width: 100%;
	height: 100%;
	padding: 0 10px;

	background-color: transparent;

	cursor: pointer;
	transition:
		background-color var(--hover-effect),
		color var(--hover-effect);

	:hover,
	:focus {
		color: var(--white-color);
		background-color: var(--black-color);
	}

	:active {
		transform: scale(0.99);
	}
`

export const ControllerBtnLabel = styled.span`
	margin-left: 20px;
`
