// css文件模块化，需对css的类型声明

declare module '*.css' {
	const css: {
		[key: string]: string
	}
	export default css
}
