import React from "react";
import theme from "theme";
import { Theme, Link, Image, List, Box, Text, Button, Icon, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Section, Stack, Override, StackItem, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { AiOutlinePlayCircle } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				ShopyApps | Конструктор мобильных приложений
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5fca1c30f8ae59001fb0c043/images/Group%201.png?v=2021-04-19T09:21:20.147Z"} type={"image/x-icon"} />
		</Helmet>
		{"  "}
		<Section min-height="16px" height="40px" background="--color-lightD1">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Image width="150px" src="https://uploads.quarkly.io/5fca1c30f8ae59001fb0c043/images/ShopyApps..png?v=2021-02-27T11:40:52.740Z" object-fit="contain" />
				<Box display="flex">
					<List
						as="ul"
						list-style-type="none"
						padding="0px 0px 0px 0"
						margin="0 0px 0 0px"
						display="flex"
						align-items="center"
					>
						<Link href="#" text-decoration-line="initial" color="--primary">
							Главная
						</Link>
						<Link href="#" margin="0px 0px 0px 15px" text-decoration-line="initial" color="--primary">
							О нас
						</Link>
						<Link href="#" margin="0px 0px 0px 15px" text-decoration-line="initial" color="--primary">
							Цены
						</Link>
						<Link href="#" margin="0px 0px 0px 15px" text-decoration-line="initial" color="--primary">
							Контакты
						</Link>
						<Link margin="0px 0px 0px 25px" text-decoration-line="initial" color="--primary" href="https://silly-kare-370f11.netlify.app/">
							Войти
						</Link>
					</List>
					<Link
						background="--color-primary"
						border-width="1px"
						border-style="solid"
						border-color="--color-primary"
						border-radius="30px"
						color="--light"
						margin="0px 0px 0px 20px"
						font="normal 300 14px/1.2 --fontFamily-googleRoboto"
						display="flex"
						justify-content="center"
						align-items="center"
						padding="10px 24px 10px 24px"
						text-decoration-line="initial"
						href="#take-offer"
					>
						Отправить заявку
					</Link>
				</Box>
			</Box>
		</Section>
		<Section
			padding="100px 0 60px 0"
			sm-padding="40px 0"
			min-height="500px"
			sm-min-height="auto"
			display="flex"
			flex-direction="column"
			background="--color-lightD1 url()"
			position="relative"
			lel-overflow-x="hidden"
		>
			<Box
				position="absolute"
				right="0px"
				top="auto"
				width="883.133px"
				bottom="12px"
				left="auto"
				border-width="5px 0px 5px 5px"
				border-style="solid"
				border-radius="20px 0px 0px 20px"
				z-index="1"
				overflow-x="hidden"
				overflow-y="hidden"
				height="632px"
				lel-right="-235px"
				ll-right="-297px"
				ll-bottom="8px"
				ll-left="auto"
				ll-top="auto"
				ll-margin="0px -12px 0px 0px"
				lm-margin="0px -95.8px 0px 0px"
			>
				<Image width="100%" src="https://uploads.quarkly.io/5fca1c30f8ae59001fb0c043/images/image%208.jpg?v=2021-02-27T10:07:48.850Z" object-fit="cover" />
			</Box>
			<Stack
				color="--grey"
				font="--base"
				margin="0 0 0 0"
				background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
				position="relative"
				z-index="5"
				align-items="center"
			>
				<Stack flex-direction="column" margin="-20px 0 0 0" font="300 16px/24px ">
					<Text
						as="h1"
						margin="0px 0px 10px 0px"
						font="normal 700 38px/1.25 --fontFamily-googleRubik"
						md-font="--headline2"
						color="#000000"
						max-width="689px"
						padding="0px 0px 0px 0px"
					>
						Создай мобильное приложение для интернет-магазина
						<br />
						без программирования.
					</Text>
					<Text
						margin="10px 0px 25px 0px"
						as="h2"
						font="normal 400 18px/1.2 --fontFamily-googleRoboto"
						color="--greyD2"
						width="681px"
					>
						ShopyApps разработает за вас привлекательный мобильный интернет-магазин.
					</Text>
					<Stack margin="0 -16px -16px 0" align-items="center" padding="20px 0px 0px 0px">
						<Button
							disabled={false}
							background="--color-light"
							border-radius="30px"
							color="--darkL2"
							height="60px"
							box-shadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)"
							margin="0px 20px 0px 0px"
							font="normal 600 16px/1.5 --fontFamily-googleRoboto"
							padding="8px 70px 8px 70px"
							href="take-offer"
						>
							Записаться на тест
						</Button>
						<Box display="flex" justify-content="space-between" align-items="center">
							<Icon
								category="ai"
								icon={AiOutlinePlayCircle}
								color="--primary"
								size="18px"
								margin="0px 2px 0px 0px"
							/>
							<Link href="#video-preview" font="300 16px/24px --fontFamily-googleRoboto" text-decoration-line="initial">
								смотреть видео
							</Link>
						</Box>
						{"        "}
					</Stack>
					{"        "}
				</Stack>
				<Box
					width="229px"
					height="485px"
					border-width="5px"
					border-style="solid"
					border-color="#000000"
					border-radius="20px"
					overflow-x="hidden"
					overflow-y="hidden"
					margin="20px 0px 0px 0px"
				>
					<Image
						object-fit="cover"
						width="100%"
						height="100%"
						overflow-x="hidden"
						overflow-y="hidden"
						src="https://uploads.quarkly.io/5fca1c30f8ae59001fb0c043/images/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20-%20Clothes%20Store.jpg?v=2021-03-16T11:25:33.791Z"
					/>
				</Box>
			</Stack>
		</Section>
		<Section padding="30px 0 30px 0" sm-padding="40px 0" background="--color-lightD1" id="video-preview">
			<Override slot="SectionContent" align-items="center" />
			<Box width="240px">
				<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fca1c30f8ae59001fb0c043/images/ShopyApps..png?v=2021-02-27T11:40:52.740Z" />
			</Box>
			<Text font="normal 400 20px/1.2 --fontFamily-googleRoboto" margin="10px 0px 0px 0px" text-align="center" color="--dark">
				Это ваш магазин на главном экране у покупателя.
			</Text>
			<Text margin="0 0px 0 0px" font="normal 400 20px/1.2 --fontFamily-googleRoboto" color="--dark">
				Публикуем в AppStore и GooglePlay -
			</Text>
			<Text margin="5px 0px 16px 0px" color="--primary" font="normal 600 22px/1.2 --fontFamily-googleRoboto">
				Бeсплатно
			</Text>
			<Box width="80%" height="400px">
				<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fca1c30f8ae59001fb0c043/images/460385_video-player-png.png?v=2020-12-16T11:37:20.608Z" />
			</Box>
		</Section>
		<Section text-align="center" padding="0 0 30px 0" sm-padding="40px 0" background="--color-lightD1">
			<Text as="h1" font="normal 700 32px/1.1 --fontFamily-googleRubik" md-font="--headline2" margin="20px 0 0 0">
				Возможности
			</Text>
			<Stack flex-direction="column" margin="50px 0 0 0">
				<Stack flex-direction="row" justify-content="space-between" margin="0 0 80px 0">
					<Box width="496.078px">
						<Text text-align="left" font="normal 700 28px/1.1 --fontFamily-googleRubik" display="block" width="20%">
							Главная:
						</Text>
						<Text font="--headline2" text-align="left">
							Размещайте товары дня, показывайте популярные категории и рассказывайте об актуальных акциях.
						</Text>
					</Box>
					<Box
						width="260px"
						height="550px"
						border-radius="20px"
						overflow-x="hidden"
						overflow-y="hidden"
					>
						<Image src="https://uploads.quarkly.io/5fca1c30f8ae59001fb0c043/images/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20-%20Tech%20Store.jpg?v=2021-03-16T11:26:22.513Z" width="100%" height="100%" object-fit="cover" />
					</Box>
					{"        "}
				</Stack>
				<Stack flex-direction="row-reverse" justify-content="space-between" margin="0 0 80px 0">
					<Box width="496.078px">
						<Text text-align="left" font="normal 700 28px/1.1 --fontFamily-googleRubik" display="block" width="20%">
							Каталог:
						</Text>
						<Text font="--headline2" text-align="left">
							Каталог товаров с гибким фильтром и поиском.
						</Text>
					</Box>
					<Box
						width="260px"
						height="550px"
						overflow-x="hidden"
						overflow-y="hidden"
						border-radius="20px"
					>
						<Image src="https://uploads.quarkly.io/5fca1c30f8ae59001fb0c043/images/%D0%9A%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%20-%20Tech%20Store.jpg?v=2021-03-16T11:27:17.299Z" width="100%" height="100%" object-fit="cover" />
					</Box>
					{"        "}
				</Stack>
				<Stack flex-direction="row" justify-content="space-between" margin="0 0 50px 0">
					<Box width="496.078px">
						<Text text-align="left" font="normal 700 28px/1.1 --fontFamily-googleRoboto" display="block" width="20%">
							Корзина:
						</Text>
						<Text font="--headline2" text-align="left" width="518.062px">
							Получайте уведомления о новых заказах. Принимайте оплату с помощью Apple Pay и Google Pay.
						</Text>
					</Box>
					<Box
						width="260px"
						height="550px"
						border-radius="20px"
						overflow-x="hidden"
						overflow-y="hidden"
					>
						<Image src="https://uploads.quarkly.io/5fca1c30f8ae59001fb0c043/images/%D0%9A%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%B0%20-%20Tech%20Store.jpg?v=2021-03-16T11:27:51.831Z" width="100%" height="100%" object-fit="cover" />
					</Box>
					{"        "}
				</Stack>
				{"        "}
			</Stack>
		</Section>
		<Section background="--color-lightD1" color="--dark" padding="50px 0 80px 0" id="take-offer">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
				</StackItem>
				<StackItem width="50%" lg-width="100%" display="block">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text font="normal 700 32px/1.1 --fontFamily-googleRoboto" margin="0 0px 30px 0px">
						Оставить заявку
					</Text>
					<Formspree endpoint="https://formspree.io/f/mdopwyew" completeText="Спасибо за заявку! Мы свяжемся с вами в ближайшее время)">
						<Stack gap="16px" height="315px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" margin="0px 0px 0 0px" />
								<Text font="normal 400 18px/1.5 --fontFamily-googleRoboto" margin="0 0 4px 0">
									Имя
								</Text>
								<Input max-width="400px" width="100%" name="name" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="normal 400 18px/1.5 --fontFamily-googleRoboto" margin="0 0 4px 0">
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="normal 400 18px/1.5 --fontFamily-googleRoboto" margin="0 0 4px 0">
									Номер телефона
								</Text>
								<Input max-width="400px" width="100%" type="tel" name="phone" />
							</StackItem>
							<StackItem width="100%" margin="10px 0px 0px 0px">
								<Components.DefaultButton font="normal 600 18px/1.5 --fontFamily-googleRoboto" padding="0 50px 0 50px" height="55px">
									Отправить
								</Components.DefaultButton>
							</StackItem>
						</Stack>
					</Formspree>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0 0 30px 0" sm-padding="40px 0" background="--color-lightD1">
			<SocialMedia
				facebook="#!"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
				vkontakte="#!"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				instagram="#!"
				linked-in="#!"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--light"
					margin="0 8px"
					background="--color-grey"
					hover-background="--color-greyD1"
					href="#!"
				/>
			</SocialMedia>
		</Section>
		<Section background-color="--dark" text-align="center" padding="30px 0 20px 0" background="--color-lightD1">
			<List
				as="ul"
				list-style-type="none"
				padding="0px 0px 0px 0"
				margin="0 0px 20px 0px"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Link href="#" text-decoration-line="initial" color="--primary">
					Главная
				</Link>
				<Link href="#" margin="0px 0px 0px 15px" text-decoration-line="initial" color="--primary">
					О нас
				</Link>
				<Link href="#" margin="0px 0px 0px 15px" text-decoration-line="initial" color="--primary">
					Цены
				</Link>
				<Link href="#" margin="0px 0px 0px 15px" text-decoration-line="initial" color="--primary">
					Связаться
				</Link>
			</List>
			<Link
				href="rimkarimov20@gmail.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				rimkarimov20@gmail.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"603a2af50138fdc5fbfc24e3"}>
				{"body {\n    overflow-y: scroll;\n    scrollbar-width: none; \n    -ms-overflow-style: none;\n}\nbody::-webkit-scrollbar { \n    width: 0;\n    height: 0;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});